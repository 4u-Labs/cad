<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

$uploaded = $_FILES['cadfile'] ?? $_FILES['cad_file'] ?? null;

if ($_SERVER['REQUEST_METHOD'] === 'POST' && $uploaded) {
    $file = $uploaded;
    $ext = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
    
    if ($file['error'] !== UPLOAD_ERR_OK) {
        echo json_encode(['success' => false, 'error' => 'Falha no upload do arquivo. Código de erro: ' . $file['error']]);
        exit;
    }
    
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
    
    if ($ext === 'dwg') {
        // Inspect DWG binary version header
        $verName = 'AutoCAD DWG Nativo';
        $header = 'UNKNOWN';
        if (file_exists($file['tmp_name']) && is_readable($file['tmp_name'])) {
            $handle = fopen($file['tmp_name'], 'rb');
            if ($handle) {
                $header = fread($handle, 6);
                fclose($handle);
                
                $versions = [
                    'AC1032' => 'AutoCAD 2018 / 2021 / 2024 / 2025',
                    'AC1027' => 'AutoCAD 2013 / 2016 / 2017',
                    'AC1024' => 'AutoCAD 2010 / 2011 / 2012',
                    'AC1021' => 'AutoCAD 2007 / 2008 / 2009',
                    'AC1018' => 'AutoCAD 2004 / 2005 / 2006',
                    'AC1015' => 'AutoCAD 2000 / 2000i / 2002',
                    'AC1014' => 'AutoCAD R14',
                    'AC1012' => 'AutoCAD R13',
                    'AC1009' => 'AutoCAD R11 / R12'
                ];
                $verName = $versions[$header] ?? ('AutoCAD DWG (Cabeçalho: ' . htmlspecialchars($header) . ')');
            }
        }
        
        echo json_encode([
            'success' => true,
            'type' => 'dwg',
            'name' => $file['name'],
            'size' => $file['size'],
            'version' => $verName,
            'header' => $header,
            'message' => 'Arquivo DWG (' . $verName . ') verificado com sucesso.'
        ]);
        exit;
    }
    
    echo json_encode(['success' => false, 'error' => 'Formato não suportado. Envie arquivos .dxf ou .dwg.']);
    exit;
}

echo json_encode(['status' => 'CADClone API ready']);
