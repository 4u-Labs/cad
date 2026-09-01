<?php
header("Cache-Control: no-cache, no-store, must-revalidate");
$assetVersion = time();
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
    <title>Termos de Uso — CADFÁCIL</title>
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
            <span class="text-xs text-gray-500">Termos Legais</span>
        </div>
    </header>

    <main class="max-w-4xl mx-auto px-6 py-10 flex-1">
        <h1 class="text-3xl font-bold text-white mb-6">Termos de Uso</h1>
        <p class="text-sm text-gray-400 mb-8">Última atualização: <?php echo date("d/m/Y"); ?></p>

        <div class="space-y-6 text-sm text-gray-300 leading-relaxed">
            <section class="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
                <h2 class="text-lg font-semibold text-white mb-3">1. Aceitação dos Termos</h2>
                <p>Ao utilizar a aplicação <strong>CADFÁCIL</strong>, você concorda expressamente com os presentes Termos de Uso. Esta aplicação é disponibilizada como uma ferramenta utilitária para leitura, edição, inspeção e medição de arquivos CAD 2D/3D no navegador.</p>
            </section>

            <section class="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
                <h2 class="text-lg font-semibold text-white mb-3">2. Uso Permitido &amp; Responsabilidade do Usuário</h2>
                <p>O usuário é inteiramente responsável pelos arquivos importados, manipulados e exportados na aplicação. O aplicativo não impõe limites ao tamanho dos projetos, desde que suportados pela capacidade de memória do seu dispositivo.</p>
            </section>

            <section class="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
                <h2 class="text-lg font-semibold text-white mb-3">3. Limitação de Responsabilidade Legal</h2>
                <p>O <strong>CADFÁCIL</strong> é fornecido "como está" (<em>as is</em>), sem garantias implícitas sobre adequação técnica para execução de obras sem a devida revisão por um engenheiro ou arquiteto habilitado.</p>
            </section>

            <section class="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
                <h2 class="text-lg font-semibold text-white mb-3">4. Propriedade Intelectual &amp; Contato</h2>
                <p>Qualquer dúvida ou notificação jurídica pode ser direcionada ao nosso canal de atendimento pelo e-mail: <a href="mailto:contato@4u.ia.br" class="text-blue-400 underline">contato@4u.ia.br</a>.</p>
            </section>
        </div>
    </main>

    <footer class="bg-gray-900 border-t border-gray-800 py-4 text-center text-xs text-gray-500">
        &copy; <?php echo date("Y"); ?> CADFÁCIL &bull; Todos os direitos reservados.
    </footer>

</body>
</html>
