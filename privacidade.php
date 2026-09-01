<?php
header("Cache-Control: no-cache, no-store, must-revalidate");
$assetVersion = time();
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
    <title>Política de Privacidade — CADFÁCIL</title>
    <link rel="icon" type="image/svg+xml" href="favicon.svg">
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>body { font-family: 'Inter', sans-serif; }</style>
</head>
<body class="bg-gray-950 text-gray-200 min-h-screen flex flex-col justify-between">

    <header class="bg-gray-900 border-b border-gray-800 py-4 px-6">
        <div class="max-w-4xl mx-auto flex items-center justify-between">
            <a href="index.php" class="text-blue-400 font-bold text-lg flex items-center gap-2 hover:text-blue-300">
                ← Voltar ao CADFÁCIL
            </a>
            <span class="text-xs text-gray-500">Conformidade &amp; Segurança</span>
        </div>
    </header>

    <main class="max-w-4xl mx-auto px-6 py-10 flex-1">
        <h1 class="text-3xl font-bold text-white mb-6">Política de Privacidade</h1>
        <p class="text-sm text-gray-400 mb-8">Última atualização: <?php echo date("d/m/Y"); ?></p>

        <div class="space-y-6 text-sm text-gray-300 leading-relaxed">
            <section class="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
                <h2 class="text-lg font-semibold text-white mb-3">1. Retenção Zero &amp; Processamento Local (Serverless)</h2>
                <p>O <strong>CADFÁCIL</strong> opera no modelo 100% <em>Client-Side / Serverless</em>. Todos os arquivos de projetos gráficos nos formatos <strong>.DWG</strong>, <strong>.DXF</strong>, <strong>.SVG</strong> e <strong>.JSON</strong> são lidos, decodificados e renderizados exclusivamente dentro do seu próprio navegador através das tecnologias <strong>WebAssembly</strong> e <strong>WebGL (Three.js)</strong>.</p>
                <p class="mt-2">Seus desenhos e projetos <strong>NUNCA são enviados para nenhum servidor externo ou armazenados em bancos de dados remotos</strong>.</p>
            </section>

            <section class="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
                <h2 class="text-lg font-semibold text-white mb-3">2. Coleta de Dados Pessoais</h2>
                <p>Nós não coletamos, não vendemos e não compartilhamos nenhum dado pessoal, histórico de navegação ou informações sensíveis dos usuários. O aplicativo não exige cadastro de conta ou login.</p>
            </section>

            <section class="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
                <h2 class="text-lg font-semibold text-white mb-3">3. Criptografia &amp; Segurança Local</h2>
                <p>As preferências locais do usuário são mantidas estritamente no armazenamento seguro do seu navegador (<code>LocalStorage</code> e <code>IndexedDB</code>), protegidos por criptografia SHA-256 da própria sessão do seu dispositivo.</p>
            </section>

            <section class="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
                <h2 class="text-lg font-semibold text-white mb-3">4. Contato do Encarregado de Privacidade (DPO)</h2>
                <p>Para dúvidas sobre nossa arquitetura de privacidade e segurança, entre em contato através do e-mail oficial: <a href="mailto:contato@4u.ia.br" class="text-blue-400 underline">contato@4u.ia.br</a>.</p>
            </section>
        </div>
    </main>

    <footer class="bg-gray-900 border-t border-gray-800 py-4 text-center text-xs text-gray-500">
        &copy; <?php echo date("Y"); ?> CADFÁCIL &bull; Todos os direitos reservados.
    </footer>

</body>
</html>
