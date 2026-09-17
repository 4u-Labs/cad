<?php
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Pragma: no-cache");
$v = time();
$msg_status = '';
$msg_type = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nome = htmlspecialchars(trim($_POST['nome'] ?? ''));
    $email = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
    $assunto = htmlspecialchars(trim($_POST['assunto'] ?? 'Suporte CADClone'));
    $mensagem = htmlspecialchars(trim($_POST['mensagem'] ?? ''));

    if (!empty($nome) && !empty($email) && !empty($mensagem) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $log_data = [
            'timestamp' => date('c'),
            'app' => 'cadclone',
            'nome' => $nome,
            'email' => $email,
            'assunto' => $assunto,
            'mensagem' => $mensagem,
            'ip' => $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0'
        ];

        $log_dir = __DIR__ . '/uploads';
        if (!is_dir($log_dir)) {
            @mkdir($log_dir, 0755, true);
        }
        @file_put_contents($log_dir . '/messages_log.json', json_encode($log_data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE) . "
", FILE_APPEND);

        $to = 'contato@4u.ia.br';
        $email_subject = 'Suporte CADClone: ' . $assunto;
        $body = "Mensagem enviada via Suporte CADClone:

"
              . "Nome: {$nome}
"
              . "E-mail: {$email}
"
              . "Assunto: {$assunto}
"
              . "Data/Hora: " . date('d/m/Y H:i:s') . "

"
              . "Mensagem:
{$mensagem}
";

        $headers = "From: contato@4u.ia.br
"
                 . "Reply-To: {$email}
"
                 . "Content-Type: text/plain; charset=UTF-8
"
                 . "X-Mailer: PHP/" . phpversion();

        @mail($to, $email_subject, $body, $headers);

        $msg_status = 'success';
    } else {
        $msg_status = 'error';
    }
}
?>
<!DOCTYPE html>
<html lang="pt-BR" data-lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
    <title>Suporte & FAQ — CADClone</title>
    <meta name="description" content="Central de Suporte e Perguntas Frequentes (FAQ) do CADClone. Guia de comandos, atalhos, compatibilidade DWG/DXF e formulário de contato.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link rel="shortcut icon" type="image/x-icon" href="favicon.ico?v=1.4.1">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png?v=1.4.1">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png?v=1.4.1">
    <link rel="icon" type="image/png" sizes="192x192" href="icon-192.png?v=1.4.1">
    <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png?v=1.4.1">
    <style>
        :root {
            --cad-bg: #0b0f19;
            --cad-card: #131b2e;
            --cad-card-border: rgba(56, 189, 248, 0.18);
            --cad-primary: #38bdf8;
            --cad-primary-glow: rgba(56, 189, 248, 0.25);
            --cad-accent: #ef4444;
            --cad-text: #f1f5f9;
            --cad-text-muted: #94a3b8;
            --cad-highlight: #38bdf8;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            background-color: var(--cad-bg);
            color: var(--cad-text);
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            font-size: 15px;
            line-height: 1.7;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            background-image: 
                radial-gradient(circle at 15% 15%, rgba(56, 189, 248, 0.08) 0%, transparent 40%),
                radial-gradient(circle at 85% 85%, rgba(239, 68, 68, 0.06) 0%, transparent 40%);
        }

        html[data-lang="pt"] [data-lang="en"] {
            display: none !important;
        }
        html[data-lang="en"] [data-lang="pt"] {
            display: none !important;
        }

        .header-bar {
            background: rgba(11, 15, 25, 0.92);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            padding: 14px 24px;
            position: sticky;
            top: 0;
            z-index: 100;
        }

        .header-container {
            max-width: 900px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .brand-logo {
            display: flex;
            align-items: center;
            gap: 10px;
            text-decoration: none;
            color: #fff;
            font-weight: 700;
            font-size: 1.15rem;
        }

        .logo-badge {
            width: 26px;
            height: 26px;
            background: linear-gradient(135deg, #ef4444 0%, #b91c1c 100%);
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            font-weight: 800;
            font-size: 14px;
            box-shadow: 0 2px 8px rgba(239, 68, 68, 0.4);
        }

        .header-actions {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .lang-switch-box {
            display: inline-flex;
            background: rgba(255, 255, 255, 0.06);
            border: 1px solid rgba(255, 255, 255, 0.12);
            border-radius: 20px;
            padding: 2px;
            gap: 2px;
        }

        .lang-pill-btn {
            border: none;
            background: transparent;
            color: var(--cad-text-muted);
            font-size: 11px;
            font-weight: 700;
            padding: 4px 10px;
            border-radius: 16px;
            cursor: pointer;
            transition: all 0.2s ease;
        }

        .lang-pill-btn:hover {
            color: #fff;
        }

        .lang-pill-btn.active {
            background: var(--cad-primary);
            color: #0b0f19;
            box-shadow: 0 1px 4px rgba(56, 189, 248, 0.4);
        }

        .btn-back {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: var(--cad-primary);
            text-decoration: none;
            font-weight: 600;
            font-size: 0.9rem;
            padding: 6px 14px;
            background: rgba(56, 189, 248, 0.1);
            border: 1px solid rgba(56, 189, 248, 0.25);
            border-radius: 6px;
            transition: all 0.2s ease;
        }

        .btn-back:hover {
            background: rgba(56, 189, 248, 0.2);
            border-color: var(--cad-primary);
            transform: translateX(-2px);
        }

        .main-content {
            flex: 1;
            max-width: 900px;
            width: 100%;
            margin: 36px auto;
            padding: 0 20px;
        }

        .legal-card {
            background: var(--cad-card);
            border: 1px solid var(--cad-card-border);
            border-radius: 16px;
            padding: 40px;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45);
        }

        .legal-header {
            margin-bottom: 30px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            padding-bottom: 24px;
        }

        .legal-header h1 {
            font-size: 2rem;
            font-weight: 800;
            color: #fff;
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 8px;
        }

        .legal-header h1 i {
            color: var(--cad-primary);
        }

        .legal-subtitle {
            color: var(--cad-text-muted);
            font-size: 0.95rem;
        }

        /* Tutorial Hero Banner Callout */
        .tutorial-hero-banner {
            background: linear-gradient(135deg, rgba(14, 165, 233, 0.15) 0%, rgba(99, 102, 241, 0.12) 50%, rgba(15, 23, 42, 0.7) 100%);
            border: 1px solid rgba(56, 189, 248, 0.35);
            border-radius: 14px;
            padding: 24px 26px;
            margin-bottom: 32px;
            display: flex;
            flex-direction: column;
            gap: 16px;
            position: relative;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35), inset 0 0 20px rgba(56, 189, 248, 0.05);
            transition: border-color 0.25s, box-shadow 0.25s;
        }

        .tutorial-hero-banner:hover {
            border-color: rgba(56, 189, 248, 0.6);
            box-shadow: 0 14px 40px rgba(56, 189, 248, 0.15), inset 0 0 25px rgba(56, 189, 248, 0.1);
        }

        .tutorial-hero-banner::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -20%;
            width: 260px;
            height: 260px;
            background: radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%);
            pointer-events: none;
        }

        .tutorial-badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: rgba(56, 189, 248, 0.2);
            color: #38bdf8;
            font-size: 11px;
            font-weight: 800;
            letter-spacing: 0.05em;
            padding: 4px 10px;
            border-radius: 20px;
            border: 1px solid rgba(56, 189, 248, 0.4);
            align-self: flex-start;
        }

        .tutorial-hero-title {
            font-size: 1.35rem;
            font-weight: 800;
            color: #fff;
            line-height: 1.3;
        }

        .tutorial-hero-desc {
            color: #cbd5e1;
            font-size: 0.95rem;
            line-height: 1.6;
        }

        .tutorial-hero-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 4px;
        }

        .tutorial-tag {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: rgba(15, 23, 42, 0.7);
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: #94a3b8;
            font-size: 12px;
            font-weight: 600;
            padding: 4px 10px;
            border-radius: 6px;
        }

        .tutorial-tag i {
            color: var(--cad-primary);
        }

        .btn-tutorial-hero {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            background: linear-gradient(135deg, #0284c7 0%, #2563eb 100%);
            color: #ffffff !important;
            font-weight: 700;
            font-size: 1rem;
            text-decoration: none;
            padding: 13px 26px;
            border-radius: 10px;
            border: 1px solid rgba(255, 255, 255, 0.25);
            box-shadow: 0 6px 20px rgba(2, 132, 199, 0.4), 0 0 12px rgba(56, 189, 248, 0.25);
            transition: all 0.2s ease;
            width: 100%;
            cursor: pointer;
            text-align: center;
        }

        .btn-tutorial-hero:hover {
            background: linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%);
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(2, 132, 199, 0.6), 0 0 16px rgba(56, 189, 248, 0.4);
        }

        .btn-tutorial-nav {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: #fff;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.88rem;
            padding: 6px 14px;
            background: linear-gradient(135deg, rgba(2, 132, 199, 0.3) 0%, rgba(37, 99, 235, 0.3) 100%);
            border: 1px solid rgba(56, 189, 248, 0.4);
            border-radius: 6px;
            transition: all 0.2s ease;
        }

        .btn-tutorial-nav:hover {
            background: linear-gradient(135deg, rgba(2, 132, 199, 0.5) 0%, rgba(37, 99, 235, 0.5) 100%);
            border-color: var(--cad-primary);
            color: #38bdf8;
            transform: translateY(-1px);
        }

        .alert-box {
            padding: 14px 18px;
            border-radius: 8px;
            margin-bottom: 24px;
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 0.95rem;
        }

        .alert-box.success {
            background: rgba(16, 185, 129, 0.15);
            border: 1px solid rgba(16, 185, 129, 0.4);
            color: #34d399;
        }

        .alert-box.error {
            background: rgba(239, 68, 68, 0.15);
            border: 1px solid rgba(239, 68, 68, 0.4);
            color: #f87171;
        }

        .legal-section {
            margin-bottom: 36px;
        }

        .legal-section h2 {
            font-size: 1.25rem;
            font-weight: 700;
            color: #fff;
            margin-bottom: 18px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .legal-section h2 i {
            color: var(--cad-primary);
            font-size: 1.1rem;
        }

        /* FAQ Accordion */
        .faq-item {
            background: rgba(11, 15, 25, 0.6);
            border: 1px solid rgba(255, 255, 255, 0.06);
            border-radius: 10px;
            margin-bottom: 12px;
            overflow: hidden;
            transition: all 0.2s ease;
        }

        .faq-item:hover {
            border-color: rgba(56, 189, 248, 0.3);
        }

        .faq-question {
            padding: 16px 20px;
            font-weight: 600;
            color: #f1f5f9;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
        }

        .faq-question i.chevron {
            color: var(--cad-primary);
            transition: transform 0.25s;
            font-size: 0.85rem;
        }

        .faq-item.open .faq-question i.chevron {
            transform: rotate(180deg);
        }

        .faq-answer {
            padding: 0 20px 18px 20px;
            color: var(--cad-text-muted);
            font-size: 0.95rem;
            line-height: 1.7;
            display: none;
            border-top: 1px solid rgba(255, 255, 255, 0.04);
            padding-top: 14px;
        }

        .faq-item.open .faq-answer {
            display: block;
        }

        code {
            font-family: 'JetBrains Mono', monospace;
            background: rgba(0, 0, 0, 0.45);
            color: var(--cad-primary);
            padding: 2px 6px;
            border-radius: 4px;
            font-size: 0.9em;
        }

        /* Keyboard Shortcuts Table */
        .shortcuts-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 10px;
            margin: 14px 0;
        }

        .shortcut-cell {
            background: rgba(11, 15, 25, 0.8);
            border: 1px solid rgba(255, 255, 255, 0.06);
            padding: 8px 12px;
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .shortcut-cell kbd {
            font-family: 'JetBrains Mono', monospace;
            background: rgba(56, 189, 248, 0.15);
            color: var(--cad-primary);
            padding: 3px 8px;
            border-radius: 4px;
            font-size: 0.8rem;
            font-weight: 700;
            border: 1px solid rgba(56, 189, 248, 0.3);
        }

        /* Contact Form */
        .form-group {
            margin-bottom: 18px;
        }

        .form-group label {
            display: block;
            font-size: 0.9rem;
            font-weight: 600;
            color: #e2e8f0;
            margin-bottom: 6px;
        }

        .form-input, .form-textarea, .form-select {
            width: 100%;
            background: rgba(11, 15, 25, 0.8);
            border: 1px solid rgba(255, 255, 255, 0.12);
            color: #fff;
            padding: 12px 14px;
            border-radius: 8px;
            font-size: 0.95rem;
            font-family: inherit;
            outline: none;
            transition: all 0.2s ease;
        }

        .form-input:focus, .form-textarea:focus, .form-select:focus {
            border-color: var(--cad-primary);
            box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.15);
        }

        .form-textarea {
            resize: vertical;
            min-height: 120px;
        }

        .btn-submit {
            background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
            color: #fff;
            border: 1px solid rgba(56, 189, 248, 0.3);
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 700;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 10px;
            transition: all 0.2s ease;
            box-shadow: 0 4px 14px rgba(2, 132, 199, 0.35);
        }

        .btn-submit:hover {
            background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
            transform: translateY(-1px);
            box-shadow: 0 6px 20px rgba(2, 132, 199, 0.5);
        }

        /* Institutional Footer */
        .footer-clean {
            background: #070b12;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            padding: 24px 20px;
            text-align: center;
            margin-top: auto;
        }

        .footer-links-row {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 16px;
            flex-wrap: wrap;
            margin-bottom: 12px;
        }

        .footer-link {
            color: #94a3b8;
            text-decoration: none;
            font-size: 0.85rem;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            transition: color 0.2s;
        }

        .footer-link:hover, .footer-link.active {
            color: var(--cad-primary);
        }

        .footer-clean span.sep {
            color: rgba(255, 255, 255, 0.2);
        }

        .footer-copyright {
            font-size: 0.8rem;
            color: #64748b;
        }

        .footer-copyright a {
            color: inherit;
            text-decoration: none;
        }

        .footer-copyright a:hover {
            color: var(--cad-primary);
        }
    </style>
</head>
<body>

    <header class="header-bar">
        <div class="header-container">
            <a href="index.php" class="brand-logo">
                <img src="logo.png?v=1.4.0" alt="CADClone" style="width: 26px; height: 26px; border-radius: 5px; object-fit: cover; box-shadow: 0 0 8px rgba(56, 189, 248, 0.4);">
                <span>CADClone <?= date('Y') ?></span>
            </a>
            <div class="header-actions">
                <div class="lang-switch-box">
                    <button type="button" class="lang-pill-btn active" id="btnLangPt" onclick="setPageLang('pt')">PT</button>
                    <button type="button" class="lang-pill-btn" id="btnLangEn" onclick="setPageLang('en')">EN</button>
                </div>
                <a href="tutorial.php" class="btn-tutorial-nav" title="Guia Completo de Uso & Recursos">
                    <i class="fa-solid fa-book-open"></i> 
                    <span data-lang="pt">Tutorial & Guia</span>
                    <span data-lang="en">Tutorial & Guide</span>
                </a>
                <a href="index.php" class="btn-back">
                    <i class="fa-solid fa-arrow-left"></i> 
                    <span data-lang="pt">Voltar ao CADClone</span>
                    <span data-lang="en">Back to CADClone</span>
                </a>
            </div>
        </div>
    </header>

    <main class="main-content">
        <div class="legal-card">
            <div class="legal-header">
                <h1><i class="fa-solid fa-headset"></i> <span data-lang="pt">Central de Suporte & FAQ</span><span data-lang="en">Support Center & FAQ</span></h1>
                <p class="legal-subtitle">
                    <span data-lang="pt">Perguntas frequentes sobre ferramentas de precisão, atalhos, compatibilidade e contato direto.</span>
                    <span data-lang="en">Frequently asked questions about precision drafting tools, shortcuts, CAD compatibility, and direct contact.</span>
                </p>
            </div>

            <!-- Featured Tutorial & Quick Guide Banner -->
            <div class="tutorial-hero-banner">
                <div class="tutorial-hero-content">
                    <div class="tutorial-badge">
                        <i class="fa-solid fa-graduation-cap"></i>
                        <span data-lang="pt">GUIA RÁPIDO & MANUAL DO USUÁRIO</span>
                        <span data-lang="en">QUICK GUIDE & USER MANUAL</span>
                    </div>
                    <h2 class="tutorial-hero-title">
                        <span data-lang="pt">Aprenda a Usar Todos os Recursos do CADClone</span>
                        <span data-lang="en">Master Every Single Feature in CADClone</span>
                    </h2>
                    <p class="tutorial-hero-desc">
                        <span data-lang="pt">Acesse nosso guia visual interativo com o passo a passo de todas as ferramentas: comandos de desenho e edição, cotas técnicas com ajuste de fonte (DIMSCALE), calco PDF/imagem com calibração métrica 1:1, biblioteca de blocos ABNT, camadas e atalhos rápidos do AutoCAD.</span>
                        <span data-lang="en">Explore our complete interactive visual guide with step-by-step instructions for all features: 2D drawing & editing commands, technical dimensions with font scaling (DIMSCALE), 1:1 metric PDF/image calibration underlay, ABNT architectural blocks, layers, and AutoCAD shortcuts.</span>
                    </p>
                    <div class="tutorial-hero-tags">
                        <span class="tutorial-tag"><i class="fa-solid fa-ruler-combined"></i> <span data-lang="pt">Cotas & Escala</span><span data-lang="en">Dimensions & Scale</span></span>
                        <span class="tutorial-tag"><i class="fa-solid fa-file-pdf"></i> <span data-lang="pt">Calco PDF 1:1</span><span data-lang="en">1:1 PDF Underlay</span></span>
                        <span class="tutorial-tag"><i class="fa-solid fa-cubes"></i> <span data-lang="pt">Blocos ABNT</span><span data-lang="en">ABNT Blocks</span></span>
                        <span class="tutorial-tag"><i class="fa-solid fa-layer-group"></i> <span data-lang="pt">Camadas (LA)</span><span data-lang="en">Layers (LA)</span></span>
                        <span class="tutorial-tag"><i class="fa-solid fa-keyboard"></i> <span data-lang="pt">Atalhos AutoCAD</span><span data-lang="en">AutoCAD Shortcuts</span></span>
                    </div>
                </div>
                <div class="tutorial-hero-action" style="margin-top: 6px;">
                    <a href="tutorial.php" class="btn-tutorial-hero">
                        <i class="fa-solid fa-book-open-reader"></i>
                        <span data-lang="pt">Acessar Guia de Recursos &amp; Tutorial Completo</span>
                        <span data-lang="en">Open Complete Feature Guide &amp; Tutorial</span>
                        <i class="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </div>

            <?php if (!empty($msg_status)): ?>
                <?php if ($msg_status === 'success'): ?>
                    <div class="alert-box success">
                        <i class="fa-solid fa-circle-check"></i>
                        <span data-lang="pt">Sua mensagem foi enviada com sucesso! Nossa equipe técnica responderá no seu e-mail em breve.</span>
                        <span data-lang="en">Your message has been sent successfully! Our engineering team will get back to your email shortly.</span>
                    </div>
                <?php else: ?>
                    <div class="alert-box error">
                        <i class="fa-solid fa-circle-exclamation"></i>
                        <span data-lang="pt">Por favor, preencha todos os campos corretamente com um e-mail válido.</span>
                        <span data-lang="en">Please fill out all fields with a valid contact email address.</span>
                    </div>
                <?php endif; ?>
            <?php endif; ?>

            <section class="legal-section">
                <h2><i class="fa-solid fa-circle-question"></i> <span data-lang="pt">Perguntas Frequentes (FAQ)</span><span data-lang="en">Frequently Asked Questions (FAQ)</span></h2>

                <!-- FAQ 1 -->
                <div class="faq-item open">
                    <div class="faq-question" onclick="toggleFaq(this)">
                        <span>
                            <i class="fa-solid fa-folder-open" style="color:var(--cad-primary); margin-right:8px;"></i> 
                            <span data-lang="pt">Como abrir e salvar arquivos DWG ou DXF no CADClone?</span>
                            <span data-lang="en">How do I open and save DWG or DXF files in CADClone?</span>
                        </span>
                        <i class="fa-solid fa-chevron-down chevron"></i>
                    </div>
                    <div class="faq-answer">
                        <div data-lang="pt">
                            Para abrir arquivos, clique no botão <strong>Abrir</strong> na barra rápida superior ou use o atalho <code>Ctrl + O</code>. Você pode carregar plantas em formato <strong>DXF</strong> ou <strong>DWG</strong>. Para salvar, use o botão <strong>Salvar</strong> ou tecle <code>Ctrl + S</code> (ou digite <code>QSAVE</code> no console). O CADClone exporta em formato DXF ASCII puro, compatível com AutoCAD, Revit, SketchUp, máquinas CNC e corte a laser.
                        </div>
                        <div data-lang="en">
                            To open files, click the <strong>Open</strong> button on the top toolbar or press <code>Ctrl + O</code>. You can load drawings in <strong>DXF</strong> or <strong>DWG</strong> format. To save, click <strong>Save</strong>, press <code>Ctrl + S</code>, or type <code>QSAVE</code> in the console. CADClone exports clean ASCII DXF files, 100% compatible with AutoCAD, Revit, SketchUp, CNC routers, and laser cutters.
                        </div>
                    </div>
                </div>

                <!-- FAQ 2 -->
                <div class="faq-item">
                    <div class="faq-question" onclick="toggleFaq(this)">
                        <span>
                            <i class="fa-solid fa-arrows-up-down-left-right" style="color:var(--cad-primary); margin-right:8px;"></i> 
                            <span data-lang="pt">Como funciona o bloqueio ortogonal temporário com a tecla Shift?</span>
                            <span data-lang="en">How does temporary orthogonal locking work with the Shift key?</span>
                        </span>
                        <i class="fa-solid fa-chevron-down chevron"></i>
                    </div>
                    <div class="faq-answer">
                        <div data-lang="pt">
                            O CADClone implementa o recurso clássico <strong>TEMPOVERRIDES</strong> do AutoCAD: ao desenhar com comandos como <code>LINE</code> ou <code>PLINE</code>, basta <strong>segurar a tecla Shift</strong> para travar instantaneamente a linha nos ângulos retos (0°, 90°, 180° e 270°). Ao soltar a tecla Shift, o cursor volta a se mover livremente em qualquer inclinação, sem precisar desativar o modo Orto (F8).
                        </div>
                        <div data-lang="en">
                            CADClone implements AutoCAD's classic <strong>TEMPOVERRIDES</strong> feature: while drawing with tools like <code>LINE</code> or <code>PLINE</code>, simply <strong>hold down the Shift key</strong> to instantly lock cursor movement to 90-degree orthogonal angles (0°, 90°, 180°, and 270°). Releasing Shift returns the cursor to free-angle drafting without turning off Ortho mode (F8).
                        </div>
                    </div>
                </div>

                <!-- FAQ 3 -->
                <div class="faq-item">
                    <div class="faq-question" onclick="toggleFaq(this)">
                        <span>
                            <i class="fa-solid fa-ruler-combined" style="color:var(--cad-primary); margin-right:8px;"></i> 
                            <span data-lang="pt">Como traçar cotas técnicas encaixando nos Endpoints magnéticos?</span>
                            <span data-lang="en">How do I create technical dimensions snapping to magnetic Endpoints?</span>
                        </span>
                        <i class="fa-solid fa-chevron-down chevron"></i>
                    </div>
                    <div class="faq-answer">
                        <div data-lang="pt">
                            Selecione a ferramenta <strong>Cota (DIM / DAL)</strong> na aba Anotação ou digite <code>DIM</code> na linha de comando. Aproxime o cursor do início da peça e clique no primeiro <strong>Endpoint</strong> magnético (marcado com quadrado verde). Em seguida, clique no <strong>Endpoint final</strong> da peça. Por fim, mova o mouse para definir a distância do texto e dê o terceiro clique para fixar a cota. O sistema gera automaticamente as linhas de extensão, setas e valor milimétrico exato.
                        </div>
                        <div data-lang="en">
                            Select the <strong>Dimension (DIM / DAL)</strong> tool from the Annotation panel or type <code>DIM</code> in the CLI. Hover near the start point and click the magnetic <strong>Endpoint</strong> (green box indicator). Then click the target <strong>Endpoint</strong>. Move your cursor outward to set the dimension offset line and click a third time to place it. Extension lines, arrowheads, and exact metric dimensions are generated automatically.
                        </div>
                    </div>
                </div>

                <!-- FAQ 4 -->
                <div class="faq-item">
                    <div class="faq-question" onclick="toggleFaq(this)">
                        <span>
                            <i class="fa-solid fa-print" style="color:var(--cad-primary); margin-right:8px;"></i> 
                            <span data-lang="pt">Como alternar entre o Model e a Prancha ABNT para exportar em PDF?</span>
                            <span data-lang="en">How do I toggle between Model Space and Technical Sheet for PDF Plotting?</span>
                        </span>
                        <i class="fa-solid fa-chevron-down chevron"></i>
                    </div>
                    <div class="faq-answer">
                        <div data-lang="pt">
                            Na barra inferior do CADClone, clique na aba <strong>Layout1 (Prancha ABNT)</strong> para visualizar a folha de desenho formatada com margens normatizadas, carimbo técnico e viewport escalonada. Para gerar o documento para impressão técnica, clique no botão <strong>Imprimir / Prancha (PLOT)</strong> ou use <code>Ctrl + P</code>, escolhendo o formato e espessura das linhas.
                        </div>
                        <div data-lang="en">
                            In the bottom workspace bar, click the <strong>Layout1 (Technical Sheet)</strong> tab to view the formatted drawing page with standard title blocks, borders, and scaled viewports. To generate a high-precision vector PDF, click <strong>Print / Plot (PLOT)</strong> or press <code>Ctrl + P</code>.
                        </div>
                    </div>
                </div>

                <!-- FAQ 5 -->
                <div class="faq-item">
                    <div class="faq-question" onclick="toggleFaq(this)">
                        <span>
                            <i class="fa-solid fa-clock-rotate-left" style="color:var(--cad-primary); margin-right:8px;"></i> 
                            <span data-lang="pt">Como funciona o AutoSave contínuo (Drawing Recovery)?</span>
                            <span data-lang="en">How does the continuous AutoSave (Drawing Recovery) work?</span>
                        </span>
                        <i class="fa-solid fa-chevron-down chevron"></i>
                    </div>
                    <div class="faq-answer">
                        <div data-lang="pt">
                            O CADClone possui um sistema integrado de <strong>Drawing Recovery</strong>. A cada 30 segundos, uma cópia completa das entidades do seu projeto é gravada em buffer local seguro no navegador. Caso seu navegador trave ou seja fechado acidentalmente, ao reabrir a página o projeto será restaurado instantaneamente exatamente do ponto onde parou.
                        </div>
                        <div data-lang="en">
                            CADClone features an automated <strong>Drawing Recovery</strong> system. Every 30 seconds, a full snapshot of your drawing entities is committed to secure local browser storage. If your browser closes or crashes, reopening the page immediately recovers your drawing right where you left off.
                        </div>
                    </div>
                </div>

                <!-- FAQ 6: SHORTCUTS -->
                <div class="faq-item">
                    <div class="faq-question" onclick="toggleFaq(this)">
                        <span>
                            <i class="fa-solid fa-keyboard" style="color:var(--cad-primary); margin-right:8px;"></i> 
                            <span data-lang="pt">Principais atalhos de teclado suportados no CADClone</span>
                            <span data-lang="en">Key Keyboard Shortcuts & Commands in CADClone</span>
                        </span>
                        <i class="fa-solid fa-chevron-down chevron"></i>
                    </div>
                    <div class="faq-answer">
                        <div class="shortcuts-grid">
                            <div class="shortcut-cell"><span><span data-lang="pt">Linha</span><span data-lang="en">Line</span></span> <kbd>L</kbd></div>
                            <div class="shortcut-cell"><span><span data-lang="pt">Polilinha</span><span data-lang="en">Polyline</span></span> <kbd>PL</kbd></div>
                            <div class="shortcut-cell"><span><span data-lang="pt">Círculo</span><span data-lang="en">Circle</span></span> <kbd>C</kbd></div>
                            <div class="shortcut-cell"><span><span data-lang="pt">Retângulo</span><span data-lang="en">Rectangle</span></span> <kbd>REC</kbd></div>
                            <div class="shortcut-cell"><span><span data-lang="pt">Arco 3 Pontos</span><span data-lang="en">3-Point Arc</span></span> <kbd>A</kbd></div>
                            <div class="shortcut-cell"><span><span data-lang="pt">Mover</span><span data-lang="en">Move</span></span> <kbd>M</kbd></div>
                            <div class="shortcut-cell"><span><span data-lang="pt">Copiar</span><span data-lang="en">Copy</span></span> <kbd>CO / CP</kbd></div>
                            <div class="shortcut-cell"><span><span data-lang="pt">Rotacionar</span><span data-lang="en">Rotate</span></span> <kbd>RO</kbd></div>
                            <div class="shortcut-cell"><span><span data-lang="pt">Offset / Paralela</span><span data-lang="en">Offset</span></span> <kbd>O</kbd></div>
                            <div class="shortcut-cell"><span><span data-lang="pt">Aparar / Trim</span><span data-lang="en">Trim</span></span> <kbd>TR</kbd></div>
                            <div class="shortcut-cell"><span><span data-lang="pt">Estender</span><span data-lang="en">Extend</span></span> <kbd>EX</kbd></div>
                            <div class="shortcut-cell"><span><span data-lang="pt">Cota Técnica</span><span data-lang="en">Dimension</span></span> <kbd>DIM / DAL</kbd></div>
                            <div class="shortcut-cell"><span><span data-lang="pt">Apagar</span><span data-lang="en">Erase / Delete</span></span> <kbd>E / Del</kbd></div>
                            <div class="shortcut-cell"><span><span data-lang="pt">Desfazer</span><span data-lang="en">Undo</span></span> <kbd>U / Ctrl+Z</kbd></div>
                            <div class="shortcut-cell"><span><span data-lang="pt">Snap ao Objeto (OSnap)</span><span data-lang="en">Object Snap (OSnap)</span></span> <kbd>F3</kbd></div>
                            <div class="shortcut-cell"><span><span data-lang="pt">Modo Orto</span><span data-lang="en">Ortho Mode</span></span> <kbd>F8 / Shift</kbd></div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="legal-section" style="margin-bottom:0;">
                <h2><i class="fa-solid fa-paper-plane"></i> <span data-lang="pt">Fale Conosco Diretamente</span><span data-lang="en">Direct Engineering Support</span></h2>
                <p style="color:var(--cad-text-muted); font-size:0.95rem; margin-bottom:18px;">
                    <span data-lang="pt">Precisa de suporte técnico, deseja sugerir melhorias ou reportar uma ocorrência geométrica? Envie sua mensagem:</span>
                    <span data-lang="en">Need technical support, want to suggest new CAD features, or report a bug? Reach out directly:</span>
                </p>

                <form method="POST" action="suporte.php" id="supportForm">
                    <div class="form-group">
                        <label for="nome"><span data-lang="pt">Seu Nome Completo:</span><span data-lang="en">Your Full Name:</span></label>
                        <input type="text" id="nome" name="nome" class="form-input" data-placeholder-pt="Ex: Engenheiro Carlos Silva" data-placeholder-en="e.g. Carlos Silva, Lead Engineer" placeholder="Ex: Engenheiro Carlos Silva" required>
                    </div>

                    <div class="form-group">
                        <label for="email"><span data-lang="pt">Seu E-mail de Contato:</span><span data-lang="en">Your Contact Email:</span></label>
                        <input type="email" id="email" name="email" class="form-input" placeholder="carlos@exemplo.com" required>
                    </div>

                    <div class="form-group">
                        <label for="assunto"><span data-lang="pt">Assunto da Mensagem:</span><span data-lang="en">Message Subject:</span></label>
                        <select id="assunto" name="assunto" class="form-select">
                            <option value="Dúvida sobre Ferramentas" data-text-pt="Dúvida sobre Comandos e Ferramentas" data-text-en="Questions regarding CAD Commands & Tools">Dúvida sobre Comandos e Ferramentas</option>
                            <option value="Importação / Exportação DWG" data-text-pt="Importação ou Exportação DXF / DWG / PDF" data-text-en="DXF / DWG / PDF Import or Export">Importação ou Exportação DXF / DWG / PDF</option>
                            <option value="Sugestão de Novo Recurso" data-text-pt="Sugestão de Novo Recurso ou Atalho" data-text-en="Feature Request or New Command Proposal">Sugestão de Novo Recurso ou Atalho</option>
                            <option value="Comunicação de Bug" data-text-pt="Relato de Inconsistência Gráfica / Bug" data-text-en="Bug Report or Rendering Issue">Relato de Inconsistência Gráfica / Bug</option>
                            <option value="Parceria / Comercial" data-text-pt="Contato Institucional / Comercial" data-text-en="Institutional or Enterprise Inquiries">Contato Institucional / Comercial</option>
                            <option value="Outro Assunto" data-text-pt="Outro Assunto" data-text-en="Other Subject">Outro Assunto</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="mensagem"><span data-lang="pt">Mensagem / Descrição:</span><span data-lang="en">Message / Details:</span></label>
                        <textarea id="mensagem" name="mensagem" class="form-textarea" data-placeholder-pt="Descreva em detalhes sua dúvida ou sugestão..." data-placeholder-en="Describe your question, request, or issue in detail..." placeholder="Descreva em detalhes sua dúvida ou sugestão..." required></textarea>
                    </div>

                    <button type="submit" class="btn-submit">
                        <i class="fa-solid fa-paper-plane"></i> 
                        <span data-lang="pt">Enviar Mensagem</span>
                        <span data-lang="en">Send Message</span>
                    </button>
                </form>
            </section>
        </div>
    </main>

    <footer class="footer-clean">
        <div class="footer-links-row">
            <a href="https://4u.ia.br" target="_blank" rel="noopener noreferrer" class="footer-link">
                <i class="fa-solid fa-cube"></i> 4U.IA.BR
            </a>
            <span class="sep">•</span>
            <a href="https://github.com/4u-Labs" target="_blank" rel="noopener noreferrer" class="footer-link">
                <i class="fa-brands fa-github"></i> GitHub @4u-Labs
            </a>
            <span class="sep">•</span>
            <a href="privacidade.php" class="footer-link">
                <i class="fa-solid fa-shield-halved"></i> 
                <span data-lang="pt">Privacidade & LGPD</span>
                <span data-lang="en">Privacy & LGPD</span>
            </a>
            <span class="sep">•</span>
            <a href="termos.php" class="footer-link">
                <i class="fa-solid fa-file-contract"></i> 
                <span data-lang="pt">Termos de Uso</span>
                <span data-lang="en">Terms of Use</span>
            </a>
            <span class="sep">•</span>
            <a href="tutorial.php" class="footer-link">
                <i class="fa-solid fa-book-open"></i> 
                <span data-lang="pt">Tutorial & Guia</span>
                <span data-lang="en">Tutorial & Guide</span>
            </a>
            <span class="sep">•</span>
            <a href="suporte.php" class="footer-link active">
                <i class="fa-solid fa-headset"></i> 
                <span data-lang="pt">Suporte & FAQ</span>
                <span data-lang="en">Support & FAQ</span>
            </a>
        </div>
        <div class="footer-copyright">
            <span data-lang="pt">&copy; <?= date('Y') ?> <a href="https://4u.ia.br" target="_blank">4U.IA.BR</a> • CADClone • Todos os direitos reservados.</span>
            <span data-lang="en">&copy; <?= date('Y') ?> <a href="https://4u.ia.br" target="_blank">4U.IA.BR</a> • CADClone • All rights reserved.</span>
        </div>
    </footer>

    <script>
        function toggleFaq(el) {
            const item = el.closest('.faq-item');
            if (item) {
                item.classList.toggle('open');
            }
        }

        function setPageLang(lang) {
            if (lang !== 'pt' && lang !== 'en') lang = 'pt';
            document.documentElement.setAttribute('data-lang', lang);
            try { localStorage.setItem('cadclone_lang', lang); } catch (e) {}
            const ptBtn = document.getElementById('btnLangPt');
            const enBtn = document.getElementById('btnLangEn');
            if (ptBtn) ptBtn.classList.toggle('active', lang === 'pt');
            if (enBtn) enBtn.classList.toggle('active', lang === 'en');

            // Update form placeholders & select options
            document.querySelectorAll('[data-placeholder-pt]').forEach(el => {
                const ph = lang === 'en' ? el.getAttribute('data-placeholder-en') : el.getAttribute('data-placeholder-pt');
                if (ph) el.setAttribute('placeholder', ph);
            });
            document.querySelectorAll('#assunto option').forEach(opt => {
                const txt = lang === 'en' ? opt.getAttribute('data-text-en') : opt.getAttribute('data-text-pt');
                if (txt) opt.textContent = txt;
            });
        }

        (function() {
            let initialLang = 'pt';
            try {
                const params = new URLSearchParams(window.location.search);
                const urlLang = params.get('lang');
                const saved = localStorage.getItem('cadclone_lang');
                if (urlLang === 'en' || urlLang === 'pt') {
                    initialLang = urlLang;
                } else if (saved === 'en') {
                    initialLang = 'en';
                }
            } catch (e) {}
            setPageLang(initialLang);
        })();
    </script>
</body>
</html>
