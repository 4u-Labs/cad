<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

$uploaded = $_FILES['cadfile'] ?? $_FILES['cad_file'] ?? null;

if ($_SERVER['REQUEST_METHOD'] === 'POST' && $uploaded) {
    $file = $uploaded;
    $ext = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
    
    if ($file['error'] !== UPLOAD_ERR_OK) {
        echo json_encode(['success' => false, 'error' => 'Falha no upload do arquivo. Código de erro: ' . $file['error']]);
        exit;
    }
    
    // Direct DXF text upload
    if ($ext === 'dxf') {
        $content = file_get_contents($file['tmp_name']);
        echo json_encode([
            'success' => true,
            'type' => 'dxf',
            'name' => $file['name'],
            'size' => $file['size'],
            'data' => $content
        ]);
        exit;
    }
    
    // DWG conversion via dwg2dxf
    if ($ext === 'dwg') {
        $tmpBase = sys_get_temp_dir() . '/dwg_' . uniqid();
        $tmpIn = $tmpBase . '.dwg';
        $tmpOut = $tmpBase . '.dxf';
        
        if (!move_uploaded_file($file['tmp_name'], $tmpIn)) {
            copy($file['tmp_name'], $tmpIn);
        }

        // 1. Locate dwg2dxf on server
        $dwg2dxfBin = null;
        $possiblePaths = [
            '/usr/local/bin/dwg2dxf',
            '/usr/bin/dwg2dxf',
            trim(shell_exec('which dwg2dxf 2>/dev/null') ?? '')
        ];
        foreach ($possiblePaths as $p) {
            if ($p && file_exists($p) && is_executable($p)) {
                $dwg2dxfBin = $p;
                break;
            }
        }

        if ($dwg2dxfBin) {
            // Execute dwg2dxf: dwg2dxf -y -o <out.dxf> <in.dwg>
            $cmd = escapeshellcmd($dwg2dxfBin) . ' -y -o ' . escapeshellarg($tmpOut) . ' ' . escapeshellarg($tmpIn) . ' 2>&1';
            $output = [];
            $retCode = 0;
            exec($cmd, $output, $retCode);

            if (file_exists($tmpOut) && filesize($tmpOut) > 0) {
                $dxfContent = file_get_contents($tmpOut);
                @unlink($tmpIn);
                @unlink($tmpOut);
                echo json_encode([
                    'success' => true,
                    'type' => 'dwg_converted',
                    'name' => $file['name'],
                    'size' => strlen($dxfContent),
                    'data' => $dxfContent,
                    'message' => 'Arquivo DWG convertido para DXF com sucesso!'
                ]);
                exit;
            }
        }

        // 2. Fallback: If not available locally (e.g. localhost dev), proxy to Oracle VPS
        $isProduction = in_array($_SERVER['HTTP_HOST'] ?? '', ['4u.ia.br', 'www.4u.ia.br', 'www1.4u.ia.br'])
            || in_array($_SERVER['SERVER_ADDR'] ?? '', ['137.131.249.105'])
            || isset($_SERVER['HTTP_X_CADCLONE_PROXY']);

        if (!$isProduction && file_exists($tmpIn)) {
            $ch = curl_init('https://4u.ia.br/app/cadclone/convert.php');
            $cfile = new CURLFile($tmpIn, 'application/octet-stream', $file['name']);
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, ['cadfile' => $cfile]);
            curl_setopt($ch, CURLOPT_HTTPHEADER, ['X-Cadclone-Proxy: 1']);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
            curl_setopt($ch, CURLOPT_TIMEOUT, 30);
            $vpsResponse = curl_exec($ch);
            $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
            curl_close($ch);

            @unlink($tmpIn);
            @unlink($tmpOut);

            if ($httpCode === 200 && $vpsResponse) {
                $decoded = json_decode($vpsResponse, true);
                if ($decoded && !empty($decoded['success'])) {
                    echo $vpsResponse;
                    exit;
                }
            }
        }

        @unlink($tmpIn);
        @unlink($tmpOut);

        echo json_encode([
            'success' => false,
            'error' => 'Não foi possível converter o arquivo DWG. Verifique se o arquivo não está protegido por senha ou danificado.'
        ]);
        exit;
    }
    
    echo json_encode(['success' => false, 'error' => 'Formato não suportado. Envie arquivos .dxf ou .dwg.']);
    exit;
}

echo json_encode(['status' => 'CADClone API ready']);
