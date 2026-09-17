<?php
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Pragma: no-cache");
$v = time();
?>
<!DOCTYPE html>
<html lang="pt-BR" data-lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
    <title>Política de Privacidade & LGPD — CADClone</title>
    <meta name="description" content="Política de Privacidade e conformidade LGPD do CADClone. Processamento local de desenhos DWG/DXF, retenção zero e segurança no ecossistema 4U.IA.BR.">
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

        .badge-lgpd {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: rgba(16, 185, 129, 0.15);
            border: 1px solid rgba(16, 185, 129, 0.35);
            color: #34d399;
            font-size: 0.8rem;
            font-weight: 600;
            padding: 4px 10px;
            border-radius: 20px;
            margin-top: 10px;
        }

        .legal-section {
            margin-bottom: 28px;
        }

        .legal-section h2 {
            font-size: 1.25rem;
            font-weight: 700;
            color: #fff;
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .legal-section h2 i {
            color: var(--cad-primary);
            font-size: 1.1rem;
        }

        .legal-section p {
            color: var(--cad-text-muted);
            margin-bottom: 12px;
        }

        .legal-section ul {
            list-style: none;
            padding-left: 0;
            margin-bottom: 12px;
        }

        .legal-section li {
            position: relative;
            padding-left: 24px;
            margin-bottom: 8px;
            color: var(--cad-text-muted);
        }

        .legal-section li::before {
            content: "✓";
            position: absolute;
            left: 0;
            color: var(--cad-primary);
            font-weight: bold;
        }

        .highlight-box {
            background: rgba(56, 189, 248, 0.06);
            border: 1px solid rgba(56, 189, 248, 0.2);
            border-left: 4px solid var(--cad-primary);
            padding: 16px 20px;
            border-radius: 8px;
            margin: 16px 0;
            color: #e2e8f0;
        }

        code {
            font-family: 'JetBrains Mono', monospace;
            background: rgba(0, 0, 0, 0.4);
            color: var(--cad-primary);
            padding: 2px 6px;
            border-radius: 4px;
            font-size: 0.9em;
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

    <header class=header-bar>
        <div class=header-container>
            <a href="index.php" class="brand-logo">
                <img src="logo.png?v=1.4.0" alt="CADClone" style="width: 26px; height: 26px; border-radius: 5px; object-fit: cover; box-shadow: 0 0 8px rgba(56, 189, 248, 0.4);">
                <span>CADClone <?= date('Y') ?></span>
            </a>
            <div class="header-actions">
                <div class="lang-switch-box">
                    <button type="button" class="lang-pill-btn active" id="btnLangPt" onclick="setPageLang('pt')">PT</button>
                    <button type="button" class="lang-pill-btn" id="btnLangEn" onclick="setPageLang('en')">EN</button>
                </div>
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
            <!-- PORTUGUESE CONTENT -->
            <div data-lang="pt">
                <div class="legal-header">
                    <h1><i class="fa-solid fa-shield-halved"></i> Política de Privacidade & LGPD</h1>
                    <p class="legal-subtitle">Diretrizes de transparência, soberania de dados técnicos e retenção zero.</p>
                    <div class="badge-lgpd">
                        <i class="fa-solid fa-lock"></i> Lei Geral de Proteção de Dados (Lei nº 13.709/2018)
                    </div>
                </div>

                <section class="legal-section">
                    <h2><i class="fa-solid fa-microchip"></i> 1. Arquitetura de Retenção Zero (Privacy by Design)</h2>
                    <p>O <strong>CADClone</strong> foi desenvolvido sob o princípio fundamental de <strong>Retenção Zero</strong>. Todas as entidades gráficas (linhas, polilinhas, arcos, círculos, cotas técnicas, blocos dinâmicos e camadas) e arquivos carregados nos formatos <strong>DXF</strong> ou <strong>DWG</strong> são processados <strong>exclusivamente na memória RAM do seu próprio navegador</strong> via Canvas 2D e WebGL.</p>
                    
                    <div class="highlight-box">
                        <strong>Garantia de Sigilo de Projetos:</strong> Nenhum arquivo de projeto arquitetônico, mecânico, elétrico ou de marcenaria desenhado ou importado no CADClone é enviado, armazenado ou transmitido para servidores remotos, nuvens públicas ou terceiros.
                    </div>
                </section>

                <section class="legal-section">
                    <h2><i class="fa-solid fa-database"></i> 2. Armazenamento Local Estritamente Técnico (LocalStorage)</h2>
                    <p>O aplicativo utiliza a tecnologia <code>localStorage</code> do seu navegador de forma exclusivamente técnica para garantir a sua conveniência e continuidade de trabalho:</p>
                    <ul>
                        <li><strong>Buffer de AutoSave (AutoCAD Drawing Recovery):</strong> Gravação automática temporária a cada 30 segundos do desenho ativo, permitindo recuperação instantânea em caso de fechamento acidental da aba.</li>
                        <li><strong>Preferências de Interface:</strong> Preservação do idioma selecionado (Português ou Inglês), estado da linha de comando (expandida ou recolhida) e atalhos de ferramentas ativas.</li>
                    </ul>
                    <p>Esses dados permanecem restritos ao seu dispositivo e podem ser limpos a qualquer momento através das opções do navegador ou pelo comando <code>NEW</code> no aplicativo.</p>
                </section>

                <section class="legal-section">
                    <h2><i class="fa-solid fa-file-pdf"></i> 3. Exportação e Conversão em Sandbox</h2>
                    <p>Todos os motores de exportação de pranchas e arquivos:</p>
                    <ul>
                        <li>Exportação de pranchas técnicas ABNT em PDF vetorial de alta precisão (motor jsPDF em sandbox no cliente).</li>
                        <li>Geração de arquivos DXF ASCII R12/2000 para corte a laser e CNC.</li>
                        <li>Exportação de imagens rasterizadas em PNG e JPEG em alta definição.</li>
                    </ul>
                    <p>são executados inteiramente no lado do cliente (Client-Side), sem trânsito de dados por APIs externas.</p>
                </section>

                <section class="legal-section">
                    <h2><i class="fa-solid fa-cookie-bite"></i> 4. Política de Cookies e Telemetria</h2>
                    <p>O CADClone <strong>não utiliza cookies de rastreamento invasivo</strong>, pixels de publicidade direcionada ou sistemas de telemetria comportamental. A aplicação funciona plenamente sem requisições a terceiros para exibição de anúncios.</p>
                </section>

                <section class="legal-section">
                    <h2><i class="fa-solid fa-headset"></i> 5. Encarregado de Dados (DPO) e Contato</h2>
                    <p>Caso tenha dúvidas técnicas sobre as práticas de privacidade, auditoria de código ou conformidade com a LGPD:</p>
                    <p>
                        <strong>E-mail Institucional:</strong> <a href="mailto:contato@4u.ia.br" style="color:var(--cad-primary);">contato@4u.ia.br</a><br>
                        <strong>Ecossistema Oficial:</strong> <a href="https://4u.ia.br" target="_blank" rel="noopener noreferrer" style="color:var(--cad-primary);">4U.IA.BR</a><br>
                        <strong>Código e Projetos:</strong> <a href="https://github.com/4u-Labs" target="_blank" rel="noopener noreferrer" style="color:var(--cad-primary);">GitHub @4u-Labs</a>
                    </p>
                </section>
            </div>

            <!-- ENGLISH CONTENT -->
            <div data-lang="en">
                <div class="legal-header">
                    <h1><i class="fa-solid fa-shield-halved"></i> Privacy Policy & Data Sovereignty</h1>
                    <p class="legal-subtitle">Transparency guidelines, technical data sovereignty, and zero-retention principles.</p>
                    <div class="badge-lgpd">
                        <i class="fa-solid fa-lock"></i> Privacy by Design & Zero Data Retention Guarantee
                    </div>
                </div>

                <section class="legal-section">
                    <h2><i class="fa-solid fa-microchip"></i> 1. Zero-Retention Architecture (Privacy by Design)</h2>
                    <p><strong>CADClone</strong> is engineered on the core foundation of <strong>Zero Data Retention</strong>. All vector drawing entities (lines, polylines, arcs, circles, technical dimensions, dynamic blocks, and layers) and files imported in <strong>DXF</strong> or <strong>DWG</strong> formats are processed <strong>strictly inside your browser's local RAM</strong> via HTML5 Canvas 2D and WebGL.</p>
                    
                    <div class="highlight-box">
                        <strong>Project Confidentiality Guarantee:</strong> No architectural, civil engineering, mechanical, or electrical drawing created or imported into CADClone is ever uploaded, stored, or transmitted to remote servers, external clouds, or third parties.
                    </div>
                </section>

                <section class="legal-section">
                    <h2><i class="fa-solid fa-database"></i> 2. Strictly Technical Local Storage (LocalStorage)</h2>
                    <p>The application uses your browser's <code>localStorage</code> strictly for local technical operational convenience:</p>
                    <ul>
                        <li><strong>AutoSave Buffer (Drawing Crash Recovery):</strong> Periodic local saving every 30 seconds of the active drawing to allow instant recovery if your browser tab is accidentally closed.</li>
                        <li><strong>User Preferences:</strong> Storing your preferred language (Portuguese or English), command prompt height state, and active workspace preferences.</li>
                    </ul>
                    <p>These temporary data items stay strictly on your device and can be cleared at any time via browser settings or by typing the <code>NEW</code> command.</p>
                </section>

                <section class="legal-section">
                    <h2><i class="fa-solid fa-file-pdf"></i> 3. Client-Side Sandboxed Exporting & Conversion</h2>
                    <p>All drawing export tools and format generators:</p>
                    <ul>
                        <li>Vector PDF sheet plotting with precise scale calibration (jsPDF sandbox running locally in browser).</li>
                        <li>Standard ASCII DXF (AutoCAD R12/2000) generation for CNC routing, laser cutters, and CAD interchange.</li>
                        <li>High-resolution raster rendering in PNG and JPEG formats.</li>
                    </ul>
                    <p>run 100% on the client side without routing any drawing data through external web services.</p>
                </section>

                <section class="legal-section">
                    <h2><i class="fa-solid fa-cookie-bite"></i> 4. Cookie Policy & Zero Tracking</h2>
                    <p>CADClone <strong>does not use invasive tracking cookies</strong>, ad pixels, or behavioral telemetry. The software is completely functional offline and does not display third-party advertisements.</p>
                </section>

                <section class="legal-section">
                    <h2><i class="fa-solid fa-headset"></i> 5. Data Officer & Technical Contact</h2>
                    <p>For questions regarding software privacy, security audit, or technical documentation:</p>
                    <p>
                        <strong>Institutional Contact:</strong> <a href="mailto:contato@4u.ia.br" style="color:var(--cad-primary);">contato@4u.ia.br</a><br>
                        <strong>Official Portal:</strong> <a href="https://4u.ia.br" target="_blank" rel="noopener noreferrer" style="color:var(--cad-primary);">4U.IA.BR</a><br>
                        <strong>Code & Projects:</strong> <a href="https://github.com/4u-Labs" target="_blank" rel="noopener noreferrer" style="color:var(--cad-primary);">GitHub @4u-Labs</a>
                    </p>
                </section>
            </div>
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
            <a href="privacidade.php" class="footer-link active">
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
            <a href="suporte.php" class="footer-link">
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
        function setPageLang(lang) {
            if (lang !== 'pt' && lang !== 'en') lang = 'pt';
            document.documentElement.setAttribute('data-lang', lang);
            try { localStorage.setItem('cadclone_lang', lang); } catch (e) {}
            const ptBtn = document.getElementById('btnLangPt');
            const enBtn = document.getElementById('btnLangEn');
            if (ptBtn) ptBtn.classList.toggle('active', lang === 'pt');
            if (enBtn) enBtn.classList.toggle('active', lang === 'en');
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
