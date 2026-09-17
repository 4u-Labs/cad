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
    <title>Tutorial & Guia Completo de Recursos — CADClone</title>
    <meta name="description" content="Guia rápido e manual completo do CADClone: aprenda a usar ferramentas de desenho 2D, cotas com ajuste de fonte, calco PDF 1:1, blocos ABNT, atalhos do AutoCAD e exportação DXF/PDF.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link rel="shortcut icon" type="image/x-icon" href="favicon.ico?v=1.6.0">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png?v=1.6.0">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png?v=1.6.0">
    <link rel="icon" type="image/png" sizes="192x192" href="icon-192.png?v=1.6.0">
    <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png?v=1.6.0">
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
            --cad-success: #10b981;
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
                radial-gradient(circle at 12% 10%, rgba(56, 189, 248, 0.08) 0%, transparent 45%),
                radial-gradient(circle at 88% 85%, rgba(99, 102, 241, 0.06) 0%, transparent 45%);
        }

        html[data-lang="pt"] [data-lang="en"] {
            display: none !important;
        }
        html[data-lang="en"] [data-lang="pt"] {
            display: none !important;
        }

        .header-bar {
            background: rgba(11, 15, 25, 0.94);
            backdrop-filter: blur(14px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            padding: 14px 24px;
            position: sticky;
            top: 0;
            z-index: 100;
        }

        .header-container {
            max-width: 1100px;
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

        .header-actions {
            display: flex;
            align-items: center;
            gap: 10px;
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

        .btn-nav-action {
            display: inline-flex;
            align-items: center;
            gap: 7px;
            color: var(--cad-primary);
            text-decoration: none;
            font-weight: 600;
            font-size: 0.88rem;
            padding: 6px 13px;
            background: rgba(56, 189, 248, 0.1);
            border: 1px solid rgba(56, 189, 248, 0.25);
            border-radius: 6px;
            transition: all 0.2s ease;
        }

        .btn-nav-action:hover {
            background: rgba(56, 189, 248, 0.2);
            border-color: var(--cad-primary);
            transform: translateY(-1px);
        }

        .main-container {
            flex: 1;
            max-width: 1100px;
            width: 100%;
            margin: 28px auto 48px auto;
            padding: 0 20px;
        }

        /* Hero Header */
        .tutorial-hero {
            background: linear-gradient(135deg, rgba(14, 165, 233, 0.15) 0%, rgba(99, 102, 241, 0.12) 50%, rgba(19, 27, 46, 0.9) 100%);
            border: 1px solid var(--cad-card-border);
            border-radius: 16px;
            padding: 36px 36px 28px 36px;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45);
            position: relative;
            overflow: hidden;
            margin-bottom: 28px;
        }

        .tutorial-hero::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -15%;
            width: 340px;
            height: 340px;
            background: radial-gradient(circle, rgba(56, 189, 248, 0.18) 0%, transparent 70%);
            pointer-events: none;
        }

        .hero-badge-row {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 12px;
        }

        .badge-pill {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: rgba(56, 189, 248, 0.18);
            border: 1px solid rgba(56, 189, 248, 0.35);
            color: var(--cad-primary);
            font-size: 11px;
            font-weight: 800;
            letter-spacing: 0.05em;
            padding: 3px 10px;
            border-radius: 20px;
        }

        .hero-title {
            font-size: 2.1rem;
            font-weight: 800;
            color: #fff;
            line-height: 1.25;
            margin-bottom: 10px;
        }

        .hero-subtitle {
            color: #cbd5e1;
            font-size: 1.05rem;
            line-height: 1.6;
            max-width: 820px;
            margin-bottom: 24px;
        }

        /* Search & Filter Bar */
        .search-filter-box {
            display: flex;
            flex-direction: column;
            gap: 14px;
        }

        .search-input-wrap {
            position: relative;
            width: 100%;
        }

        .search-input-wrap i {
            position: absolute;
            left: 16px;
            top: 50%;
            transform: translateY(-50%);
            color: var(--cad-primary);
            font-size: 1.1rem;
        }

        .search-input {
            width: 100%;
            background: rgba(11, 15, 25, 0.85);
            border: 1px solid rgba(56, 189, 248, 0.3);
            color: #fff;
            padding: 14px 16px 14px 48px;
            border-radius: 10px;
            font-size: 1rem;
            font-family: inherit;
            outline: none;
            transition: all 0.2s ease;
            box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
        }

        .search-input:focus {
            border-color: var(--cad-primary);
            box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.25), 0 6px 20px rgba(0,0,0,0.3);
        }

        .filter-pills {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .filter-btn {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: #cbd5e1;
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 12.5px;
            font-weight: 600;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            transition: all 0.18s ease;
        }

        .filter-btn:hover {
            background: rgba(56, 189, 248, 0.15);
            border-color: rgba(56, 189, 248, 0.35);
            color: #fff;
        }

        .filter-btn.active {
            background: var(--cad-primary);
            border-color: var(--cad-primary);
            color: #0b0f19;
            box-shadow: 0 2px 8px rgba(56, 189, 248, 0.4);
            font-weight: 700;
        }

        /* Section Containers */
        .tutorial-section {
            margin-bottom: 38px;
        }

        .section-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-bottom: 12px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            margin-bottom: 20px;
        }

        .section-header h2 {
            font-size: 1.45rem;
            font-weight: 800;
            color: #fff;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .section-header h2 i {
            color: var(--cad-primary);
        }

        .section-count {
            color: var(--cad-text-muted);
            font-size: 0.85rem;
            font-weight: 600;
        }

        /* Feature Cards Grid */
        .feature-cards-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 18px;
        }

        .feature-card {
            background: var(--cad-card);
            border: 1px solid var(--cad-card-border);
            border-radius: 12px;
            padding: 22px 24px;
            display: flex;
            flex-direction: column;
            gap: 14px;
            transition: all 0.2s ease;
            position: relative;
            overflow: hidden;
        }

        .feature-card:hover {
            border-color: rgba(56, 189, 248, 0.45);
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
        }

        .card-top {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 12px;
        }

        .card-title-group {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .card-icon {
            width: 36px;
            height: 36px;
            border-radius: 8px;
            background: rgba(56, 189, 248, 0.12);
            border: 1px solid rgba(56, 189, 248, 0.25);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--cad-primary);
            font-size: 1rem;
            flex-shrink: 0;
        }

        .card-name {
            font-size: 1.15rem;
            font-weight: 700;
            color: #fff;
            line-height: 1.2;
        }

        .cmd-badges {
            display: flex;
            flex-wrap: wrap;
            gap: 5px;
            align-items: center;
            justify-content: flex-end;
        }

        kbd, .cmd-kbd {
            font-family: 'JetBrains Mono', monospace;
            background: rgba(11, 15, 25, 0.9);
            border: 1px solid rgba(56, 189, 248, 0.35);
            color: var(--cad-primary);
            padding: 3px 7px;
            border-radius: 5px;
            font-size: 0.78rem;
            font-weight: 700;
            box-shadow: 0 1px 3px rgba(0,0,0,0.3);
            white-space: nowrap;
        }

        .card-desc {
            color: #cbd5e1;
            font-size: 0.92rem;
            line-height: 1.6;
        }

        .steps-box {
            background: rgba(11, 15, 25, 0.6);
            border: 1px solid rgba(255, 255, 255, 0.06);
            border-radius: 8px;
            padding: 12px 14px;
        }

        .steps-box-title {
            font-size: 0.8rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.04em;
            color: var(--cad-primary);
            margin-bottom: 8px;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .steps-list {
            padding-left: 18px;
            color: var(--cad-text-muted);
            font-size: 0.88rem;
            line-height: 1.6;
            margin: 0;
        }

        .steps-list li {
            margin-bottom: 4px;
        }

        .steps-list li strong {
            color: #f1f5f9;
        }

        .pro-tip {
            background: rgba(16, 185, 129, 0.1);
            border-left: 3px solid var(--cad-success);
            padding: 8px 12px;
            border-radius: 0 6px 6px 0;
            font-size: 0.85rem;
            color: #a7f3d0;
            display: flex;
            align-items: flex-start;
            gap: 8px;
            line-height: 1.5;
        }

        .pro-tip i {
            margin-top: 2px;
            color: var(--cad-success);
        }

        /* Cheatsheet Table */
        .table-responsive {
            overflow-x: auto;
            border-radius: 10px;
            border: 1px solid var(--cad-card-border);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        }

        .cheatsheet-table {
            width: 100%;
            border-collapse: collapse;
            text-align: left;
            font-size: 0.9rem;
            background: var(--cad-card);
        }

        .cheatsheet-table th {
            background: rgba(11, 15, 25, 0.9);
            color: #fff;
            padding: 12px 16px;
            font-weight: 700;
            border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        }

        .cheatsheet-table td {
            padding: 11px 16px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            color: #cbd5e1;
        }

        .cheatsheet-table tr:hover td {
            background: rgba(56, 189, 248, 0.04);
        }

        /* Institutional Footer */
        .footer-clean {
            background: #070b12;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            padding: 26px 20px;
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

        .btn-top {
            position: fixed;
            bottom: 24px;
            right: 24px;
            width: 42px;
            height: 42px;
            background: var(--cad-primary);
            color: #0b0f19;
            border: none;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.1rem;
            cursor: pointer;
            box-shadow: 0 4px 14px rgba(56, 189, 248, 0.4);
            transition: all 0.2s;
            opacity: 0;
            visibility: hidden;
            z-index: 90;
        }

        .btn-top.visible {
            opacity: 1;
            visibility: visible;
        }

        .btn-top:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(56, 189, 248, 0.6);
        }

        @media (max-width: 768px) {
            .hero-title { font-size: 1.6rem; }
            .tutorial-hero { padding: 24px; }
            .feature-cards-grid { grid-template-columns: 1fr; }
            .header-container { flex-direction: column; gap: 12px; align-items: flex-start; }
            .header-actions { width: 100%; justify-content: space-between; }
        }
    </style>
</head>
<body>

    <header class="header-bar">
        <div class="header-container">
            <a href="index.php" class="brand-logo">
                <img src="logo.png?v=1.6.0" alt="CADClone" style="width: 26px; height: 26px; border-radius: 5px; object-fit: cover; box-shadow: 0 0 8px rgba(56, 189, 248, 0.4);">
                <span>CADClone <?= date('Y') ?></span>
            </a>
            <div class="header-actions">
                <div class="lang-switch-box">
                    <button type="button" class="lang-pill-btn active" id="btnLangPt" onclick="setPageLang('pt')">PT</button>
                    <button type="button" class="lang-pill-btn" id="btnLangEn" onclick="setPageLang('en')">EN</button>
                </div>
                <a href="suporte.php" class="btn-nav-action">
                    <i class="fa-solid fa-headset"></i> 
                    <span data-lang="pt">Suporte &amp; FAQ</span>
                    <span data-lang="en">Support &amp; FAQ</span>
                </a>
                <a href="index.php" class="btn-nav-action" style="background: rgba(56, 189, 248, 0.2); border-color: var(--cad-primary);">
                    <i class="fa-solid fa-arrow-left"></i> 
                    <span data-lang="pt">Voltar ao CAD</span>
                    <span data-lang="en">Back to CAD</span>
                </a>
            </div>
        </div>
    </header>

    <main class="main-container">

        <!-- Hero Section with Live Search & Category Filters -->
        <section class="tutorial-hero">
            <div class="hero-badge-row">
                <span class="badge-pill">
                    <i class="fa-solid fa-book-open"></i>
                    <span data-lang="pt">GUIA OFICIAL &amp; MANUAL RÁPIDO</span>
                    <span data-lang="en">OFFICIAL MANUAL &amp; QUICK GUIDE</span>
                </span>
                <span class="badge-pill" style="background: rgba(16, 185, 129, 0.15); border-color: rgba(16, 185, 129, 0.35); color: #34d399;">
                    <i class="fa-solid fa-bolt"></i>
                    <span>v1.6.0</span>
                </span>
            </div>
            <h1 class="hero-title">
                <span data-lang="pt">Guia Completo de Todos os Recursos do CADClone</span>
                <span data-lang="en">Master Every Single Feature in CADClone</span>
            </h1>
            <p class="hero-subtitle">
                <span data-lang="pt">Aprenda a dominar todos os comandos técnicos de desenho, cotas com controle de escala (DIMSCALE), calco PDF métrico 1:1, blocos ABNT, camadas e atalhos idênticos ao AutoCAD nativo.</span>
                <span data-lang="en">Master 2D CAD drafting, technical dimensions with font scaling (DIMSCALE), 1:1 metric PDF calibration underlays, ABNT architectural blocks, layers, and native AutoCAD commands.</span>
            </p>

            <div class="search-filter-box">
                <div class="search-input-wrap">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" id="tutorialSearch" class="search-input" 
                        data-placeholder-pt="Pesquisar comando, atalho ou ferramenta (ex: cota, linha, pdf, offset, F8, bloco)..." 
                        data-placeholder-en="Search command, shortcut, or feature (e.g. dim, line, pdf, offset, F8, block)..." 
                        placeholder="Pesquisar comando, atalho ou ferramenta (ex: cota, linha, pdf, offset, F8, bloco)..." 
                        oninput="filterTutorialCards()">
                </div>
                <div class="filter-pills" id="filterPillsBar">
                    <button type="button" class="filter-btn active" onclick="setCategoryFilter('all', this)">
                        <i class="fa-solid fa-border-all"></i> <span data-lang="pt">Todos os Recursos</span><span data-lang="en">All Features</span>
                    </button>
                    <button type="button" class="filter-btn" onclick="setCategoryFilter('nav', this)">
                        <i class="fa-solid fa-arrows-up-down-left-right"></i> <span data-lang="pt">Navegação &amp; Câmera</span><span data-lang="en">Navigation</span>
                    </button>
                    <button type="button" class="filter-btn" onclick="setCategoryFilter('draw', this)">
                        <i class="fa-solid fa-pen-ruler"></i> <span data-lang="pt">Desenho 2D</span><span data-lang="en">Draw Tools</span>
                    </button>
                    <button type="button" class="filter-btn" onclick="setCategoryFilter('modify', this)">
                        <i class="fa-solid fa-wand-magic-sparkles"></i> <span data-lang="pt">Modificar &amp; Edição</span><span data-lang="en">Modify Tools</span>
                    </button>
                    <button type="button" class="filter-btn" onclick="setCategoryFilter('dim', this)">
                        <i class="fa-solid fa-ruler-combined"></i> <span data-lang="pt">Cotas &amp; Textos</span><span data-lang="en">Dimensions &amp; Text</span>
                    </button>
                    <button type="button" class="filter-btn" onclick="setCategoryFilter('snaps', this)">
                        <i class="fa-solid fa-crosshairs"></i> <span data-lang="pt">Precisão &amp; Snaps</span><span data-lang="en">Snaps &amp; Precision</span>
                    </button>
                    <button type="button" class="filter-btn" onclick="setCategoryFilter('layers', this)">
                        <i class="fa-solid fa-layer-group"></i> <span data-lang="pt">Camadas (LA)</span><span data-lang="en">Layers (LA)</span>
                    </button>
                    <button type="button" class="filter-btn" onclick="setCategoryFilter('blocks', this)">
                        <i class="fa-solid fa-cubes"></i> <span data-lang="pt">Blocos ABNT</span><span data-lang="en">ABNT Blocks</span>
                    </button>
                    <button type="button" class="filter-btn" onclick="setCategoryFilter('underlay', this)">
                        <i class="fa-solid fa-file-pdf"></i> <span data-lang="pt">Calco PDF 1:1</span><span data-lang="en">1:1 PDF Underlay</span>
                    </button>
                    <button type="button" class="filter-btn" onclick="setCategoryFilter('props', this)">
                        <i class="fa-solid fa-sliders"></i> <span data-lang="pt">Propriedades &amp; Grips</span><span data-lang="en">Properties &amp; Grips</span>
                    </button>
                    <button type="button" class="filter-btn" onclick="setCategoryFilter('export', this)">
                        <i class="fa-solid fa-file-export"></i> <span data-lang="pt">Arquivos &amp; AutoSave</span><span data-lang="en">Files &amp; AutoSave</span>
                    </button>
                    <button type="button" class="filter-btn" onclick="setCategoryFilter('cheatsheet', this)">
                        <i class="fa-solid fa-keyboard"></i> <span data-lang="pt">Tabela de Atalhos</span><span data-lang="en">Shortcuts Table</span>
                    </button>
                </div>
            </div>
        </section>

        <!-- 1. NAVEGAÇÃO & CÂMERA -->
        <section class="tutorial-section" data-category="nav">
            <div class="section-header">
                <h2><i class="fa-solid fa-arrows-up-down-left-right"></i> <span data-lang="pt">1. Navegação &amp; Viewport (Pan &amp; Zoom)</span><span data-lang="en">1. Navigation &amp; Viewport (Pan &amp; Zoom)</span></h2>
                <span class="section-count">8 <span data-lang="pt">recursos</span><span data-lang="en">tools</span></span>
            </div>
            <div class="feature-cards-grid">
                <!-- Pan -->
                <div class="feature-card" data-keywords="pan arrastar navegar tela mouse wheel scroll mover vista P">
                    <div class="card-top">
                        <div class="card-title-group">
                            <div class="card-icon"><i class="fa-solid fa-hand"></i></div>
                            <div class="card-name"><span data-lang="pt">Pan (Arrastar Vista)</span><span data-lang="en">Pan (Pan View)</span></div>
                        </div>
                        <div class="cmd-badges"><kbd>P</kbd> <kbd>PAN</kbd> <kbd>Scroll Mouse</kbd></div>
                    </div>
                    <p class="card-desc">
                        <span data-lang="pt">Move o ponto de vista da área de desenho infinitamente em qualquer direção sem alterar as coordenadas dos objetos.</span>
                        <span data-lang="en">Smoothly shifts the viewport in any direction across the infinite model canvas without modifying entity coordinates.</span>
                    </p>
                    <div class="steps-box">
                        <div class="steps-box-title"><i class="fa-solid fa-list-ol"></i> <span data-lang="pt">Como Usar</span><span data-lang="en">How to Use</span></div>
                        <ol class="steps-list">
                            <li><strong><span data-lang="pt">Método Mais Rápido</span><span data-lang="en">Fastest Method</span>:</strong> <span data-lang="pt">Pressione e segure o <strong>botão do meio (roda/scroll)</strong> do mouse e arraste.</span><span data-lang="en">Press and hold the <strong>middle mouse button (wheel)</strong> and drag.</span></li>
                            <li><strong><span data-lang="pt">Via Comando</span><span data-lang="en">Via Command</span>:</strong> <span data-lang="pt">Digite <code>P</code> e tecle <kbd>Enter</kbd>. Clique e arraste com o botão esquerdo.</span><span data-lang="en">Type <code>P</code> and hit <kbd>Enter</kbd>. Click and drag with left mouse button.</span></li>
                        </ol>
                    </div>
                </div>

                <!-- Zoom In / Out -->
                <div class="feature-card" data-keywords="zoom aproximar afastar mouse wheel roda mira cursor">
                    <div class="card-top">
                        <div class="card-title-group">
                            <div class="card-icon"><i class="fa-solid fa-magnifying-glass-plus"></i></div>
                            <div class="card-name"><span data-lang="pt">Zoom In / Out</span><span data-lang="en">Zoom In / Out</span></div>
                        </div>
                        <div class="cmd-badges"><kbd>Roda do Mouse</kbd> <kbd>Z</kbd></div>
                    </div>
                    <p class="card-desc">
                        <span data-lang="pt">Aproxima ou afasta a visualização exatamente centralizada na posição do cursor do mouse.</span>
                        <span data-lang="en">Zooms in or out dynamically, precisely centered on the cursor's crosshair position.</span>
                    </p>
                    <div class="steps-box">
                        <div class="steps-box-title"><i class="fa-solid fa-list-ol"></i> <span data-lang="pt">Como Usar</span><span data-lang="en">How to Use</span></div>
                        <ol class="steps-list">
                            <li><span data-lang="pt">Posicione o cursor sobre o detalhe ou parede que deseja inspecionar.</span><span data-lang="en">Hover the mouse crosshair directly over the target element.</span></li>
                            <li><span data-lang="pt">Gire a <strong>roda do mouse para frente</strong> para dar zoom in (aproximar).</span><span data-lang="en">Scroll the <strong>wheel forward</strong> to zoom in.</span></li>
                            <li><span data-lang="pt">Gire a <strong>roda do mouse para trás</strong> para dar zoom out (afastar).</span><span data-lang="en">Scroll the <strong>wheel backward</strong> to zoom out.</span></li>
                        </ol>
                    </div>
                </div>

                <!-- Zoom Extents -->
                <div class="feature-card" data-keywords="zoom extents total enquadrar centralizar Z E duplo clique">
                    <div class="card-top">
                        <div class="card-title-group">
                            <div class="card-icon"><i class="fa-solid fa-expand"></i></div>
                            <div class="card-name"><span data-lang="pt">Zoom Total (Extents)</span><span data-lang="en">Zoom Extents</span></div>
                        </div>
                        <div class="cmd-badges"><kbd>Z E</kbd> <kbd>ZOOM</kbd> <kbd>2x Clique Scroll</kbd></div>
                    </div>
                    <p class="card-desc">
                        <span data-lang="pt">Enquadra perfeitamente todos os elementos desenhados e o calco no centro da tela.</span>
                        <span data-lang="en">Fits all drawn entities and attached underlays perfectly inside the current screen bounds.</span>
                    </p>
                    <div class="steps-box">
                        <div class="steps-box-title"><i class="fa-solid fa-list-ol"></i> <span data-lang="pt">Como Usar</span><span data-lang="en">How to Use</span></div>
                        <ol class="steps-list">
                            <li><strong><span data-lang="pt">Atalho</span><span data-lang="en">Shortcut</span>:</strong> <span data-lang="pt">Dê um <strong>duplo clique rápido na roda do mouse</strong> (ou no botão do meio).</span><span data-lang="en">Double-click the <strong>middle mouse button (wheel)</strong>.</span></li>
                            <li><strong><span data-lang="pt">Comando</span><span data-lang="en">Command</span>:</strong> <span data-lang="pt">Digite <code>Z</code> <kbd>Enter</kbd> <code>E</code> <kbd>Enter</kbd>.</span><span data-lang="en">Type <code>Z</code> <kbd>Enter</kbd> <code>E</code> <kbd>Enter</kbd>.</span></li>
                            <li><strong><span data-lang="pt">Ribbon</span><span data-lang="en">Ribbon</span>:</strong> <span data-lang="pt">Clique no botão <strong>"Zoom Total"</strong> no grupo Visualização.</span><span data-lang="en">Click <strong>"Zoom Total"</strong> in the View ribbon panel.</span></li>
                        </ol>
                    </div>
                </div>

                <!-- Regen -->
                <div class="feature-card" data-keywords="regen regenerar atualizar viewport redesenhar RE">
                    <div class="card-top">
                        <div class="card-title-group">
                            <div class="card-icon"><i class="fa-solid fa-rotate"></i></div>
                            <div class="card-name"><span data-lang="pt">Regenerar Modelo (REGEN)</span><span data-lang="en">Regenerate Model (REGEN)</span></div>
                        </div>
                        <div class="cmd-badges"><kbd>RE</kbd> <kbd>REGEN</kbd></div>
                    </div>
                    <p class="card-desc">
                        <span data-lang="pt">Força o redesenho vetorial imediato do canvas, recalculando índices espaciais, tipos de linha e suavização de curvas.</span>
                        <span data-lang="en">Forces immediate canvas regeneration, recalculating spatial tree, linetypes, and curve tessellation.</span>
                    </p>
                    <div class="steps-box">
                        <div class="steps-box-title"><i class="fa-solid fa-list-ol"></i> <span data-lang="pt">Como Usar</span><span data-lang="en">How to Use</span></div>
                        <ol class="steps-list">
                            <li><span data-lang="pt">Digite <code>RE</code> e aperte <kbd>Enter</kbd> (ou clique em Regen no menu de contexto).</span><span data-lang="en">Type <code>RE</code> and hit <kbd>Enter</kbd> (or choose Regen in the right-click menu).</span></li>
                        </ol>
                    </div>
                </div>

                <!-- AutoCAD File Tabs -->
                <div class="feature-card" data-keywords="abas file tabs abas de desenho multidesenho dwg novo desenho fechar tab ctrl+w alternar documentos">
                    <div class="card-top">
                        <div class="card-title-group">
                            <div class="card-icon"><i class="fa-solid fa-folder-tree"></i></div>
                            <div class="card-name"><span data-lang="pt">Multi-abas de Desenhos (File Tabs)</span><span data-lang="en">Multi-Document File Tabs</span></div>
                        </div>
                        <div class="cmd-badges"><kbd>Ctrl+N</kbd> <kbd>Ctrl+W</kbd> <kbd>Botão +</kbd></div>
                    </div>
                    <p class="card-desc">
                        <span data-lang="pt">Trabalhe com múltiplos arquivos DWG abertos ao mesmo tempo, alternando instantaneamente entre plantas sem fechar seu trabalho.</span>
                        <span data-lang="en">Work on multiple DWG drawings concurrently in the top tab bar, switching instantly between projects without losing state.</span>
                    </p>
                    <div class="steps-box">
                        <div class="steps-box-title"><i class="fa-solid fa-list-ol"></i> <span data-lang="pt">Como Usar</span><span data-lang="en">How to Use</span></div>
                        <ol class="steps-list">
                            <li><strong><span data-lang="pt">Novo Desenho</span><span data-lang="en">New Drawing</span>:</strong> <span data-lang="pt">Clique no botão <strong>+</strong> na barra de abas ou tecle <kbd>Ctrl+N</kbd>. Uma nova aba é criada.</span><span data-lang="en">Click the <strong>+</strong> button on the tab bar or hit <kbd>Ctrl+N</kbd>. A new tab is created.</span></li>
                            <li><strong><span data-lang="pt">Alternar Desenhos</span><span data-lang="en">Switch Tab</span>:</strong> <span data-lang="pt">Clique diretamente no título da aba desejada para ativá-la.</span><span data-lang="en">Click directly on any drawing tab to activate it.</span></li>
                            <li><strong><span data-lang="pt">Fechar Aba</span><span data-lang="en">Close Tab</span>:</strong> <span data-lang="pt">Pressione <kbd>Ctrl+W</kbd> ou clique no <code>×</code> da aba. Se houver alterações pendentes, o CAD avisará antes de fechar.</span><span data-lang="en">Press <kbd>Ctrl+W</kbd> or click <code>×</code>. Warns if unsaved changes exist.</span></li>
                            <li><strong><span data-lang="pt">Menu do Botão Direito</span><span data-lang="en">Right-Click Menu</span>:</strong> <span data-lang="pt">Clique com o botão direito na aba para <em>Renomear</em>, <em>Salvar DXF</em> ou <em>Fechar Outras Abas</em>.</span><span data-lang="en">Right-click a tab to <em>Rename</em>, <em>Save DXF</em>, or <em>Close Other Tabs</em>.</span></li>
                        </ol>
                    </div>
                </div>

                <!-- Model Space vs Layout Space -->
                <div class="feature-card" data-keywords="layout model espaco do modelo espaco do papel prancha a1 folha impressao tilemode carimbo selo">
                    <div class="card-top">
                        <div class="card-title-group">
                            <div class="card-icon"><i class="fa-solid fa-sheet-plastic"></i></div>
                            <div class="card-name"><span data-lang="pt">Model vs Layout (Pranchas ABNT)</span><span data-lang="en">Model Space vs Paper Space Layouts</span></div>
                        </div>
                        <div class="cmd-badges"><kbd>Model</kbd> <kbd>Layout1</kbd> <kbd>TILEMODE</kbd></div>
                    </div>
                    <p class="card-desc">
                        <span data-lang="pt">Alterne entre o espaço infinito de modelagem 1:1 e a prancha de apresentação para impressão com margens e selo técnico ABNT.</span>
                        <span data-lang="en">Toggle between infinite 1:1 design Model Space and technical Paper Space Layout with title blocks and border margins.</span>
                    </p>
                    <div class="steps-box">
                        <div class="steps-box-title"><i class="fa-solid fa-list-ol"></i> <span data-lang="pt">Como Usar</span><span data-lang="en">How to Use</span></div>
                        <ol class="steps-list">
                            <li><strong><span data-lang="pt">Model Space</span><span data-lang="en">Model Space</span>:</strong> <span data-lang="pt">Clique na aba inferior <strong>Model</strong> para desenhar a geometria real em metros.</span><span data-lang="en">Click bottom tab <strong>Model</strong> to draw true 1:1 geometry.</span></li>
                            <li><strong><span data-lang="pt">Layout1 (Prancha A1NT)</span><span data-lang="en">Layout1</span>:</strong> <span data-lang="pt">Clique na aba <strong>Layout1</strong> para visualizar a folha de desenho com margem técnica, carimbo ABNT e janela de viewport.</span><span data-lang="en">Click <strong>Layout1</strong> to view the standardized A1 sheet with title block and viewport.</span></li>
                            <li><strong><span data-lang="pt">Comando</span><span data-lang="en">Command</span>:</strong> <span data-lang="pt">Digite <code>TILEMODE</code> para alternar entre os espaços via teclado.</span><span data-lang="en">Type <code>TILEMODE</code> to toggle between spaces via command prompt.</span></li>
                        </ol>
                    </div>
                </div>

                <!-- ViewCube -->
                <div class="feature-card" data-keywords="viewcube cubo orientacao wcs ucs superior topo norte sul leste oeste vista visualizacao">
                    <div class="card-top">
                        <div class="card-title-group">
                            <div class="card-icon"><i class="fa-solid fa-cube"></i></div>
                            <div class="card-name"><span data-lang="pt">ViewCube &amp; Orientação Espacial (WCS)</span><span data-lang="en">ViewCube &amp; Spatial Orientation (WCS)</span></div>
                        </div>
                        <div class="cmd-badges"><kbd>SUPERIOR</kbd> <kbd>WCS</kbd></div>
                    </div>
                    <p class="card-desc">
                        <span data-lang="pt">Navegador interativo no canto superior direito para orientar o plano de projeto e restaurar a vista ortogonal superior padrão.</span>
                        <span data-lang="en">Interactive compass navigator on the top right for spatial orientation and instant Top View WCS alignment.</span>
                    </p>
                    <div class="steps-box">
                        <div class="steps-box-title"><i class="fa-solid fa-list-ol"></i> <span data-lang="pt">Como Usar</span><span data-lang="en">How to Use</span></div>
                        <ol class="steps-list">
                            <li><span data-lang="pt">Observe o cubo interativo no canto superior direito do viewport.</span><span data-lang="en">Notice the interactive cube in the top-right corner of the drawing canvas.</span></li>
                            <li><span data-lang="pt">Clique em <strong>SUPERIOR</strong> para reorientar a tela com o Norte para cima e sistema WCS alinhado.</span><span data-lang="en">Click <strong>SUPERIOR (TOP)</strong> to reset camera rotation with North up.</span></li>
                        </ol>
                    </div>
                </div>

                <!-- Start Dashboard -->
                <div class="feature-card" data-keywords="start pagina inicial dashboard planta modelo sample exemplo modelo template recente">
                    <div class="card-top">
                        <div class="card-title-group">
                            <div class="card-icon"><i class="fa-solid fa-house"></i></div>
                            <div class="card-name"><span data-lang="pt">Página Inicial &amp; Planta Modelo (SAMPLE)</span><span data-lang="en">Start Dashboard &amp; Sample Plan (SAMPLE)</span></div>
                        </div>
                        <div class="cmd-badges"><kbd>Start</kbd> <kbd>SAMPLE</kbd> <kbd>PLANTA</kbd></div>
                    </div>
                    <p class="card-desc">
                        <span data-lang="pt">Central de início com atalhos para projetos recentes, templates em branco e carregamento da Planta Baixa Residencial demonstrativa (25x10m).</span>
                        <span data-lang="en">Quick Start Dashboard for recent drawings, templates, and one-click loading of the full Residential Floor Plan (25x10m).</span>
                    </p>
                    <div class="steps-box">
                        <div class="steps-box-title"><i class="fa-solid fa-list-ol"></i> <span data-lang="pt">Como Usar</span><span data-lang="en">How to Use</span></div>
                        <ol class="steps-list">
                            <li><strong><span data-lang="pt">Acessar Start</span><span data-lang="en">Access Start</span>:</strong> <span data-lang="pt">Clique no botão <strong>Start</strong> no canto esquerdo da barra de abas.</span><span data-lang="en">Click the <strong>Start</strong> button on the left edge of the tab bar.</span></li>
                            <li><strong><span data-lang="pt">Planta Modelo</span><span data-lang="en">Sample Floor Plan</span>:</strong> <span data-lang="pt">Clique no card "Planta Modelo" ou digite <code>SAMPLE</code> ou <code>PLANTA</code> no console para carregar a residência completa de 25x10m com o logo técnico.</span><span data-lang="en">Click "Planta Modelo" or type <code>SAMPLE</code> in the command line to load the 25x10m demonstration plan.</span></li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>

        <!-- 2. FERRAMENTAS DE DESENHO 2D -->
        <section class="tutorial-section" data-category="draw">
            <div class="section-header">
                <h2><i class="fa-solid fa-pen-ruler"></i> <span data-lang="pt">2. Ferramentas de Desenho 2D (Draw)</span><span data-lang="en">2. 2D Drawing Tools (Draw)</span></h2>
                <span class="section-count">7 <span data-lang="pt">recursos</span><span data-lang="en">tools</span></span>
            </div>
            <div class="feature-cards-grid">
                <!-- Line -->
                <div class="feature-card" data-keywords="linha line reta segmento L alvenaria parede desenho">
                    <div class="card-top">
                        <div class="card-title-group">
                            <div class="card-icon"><i class="fa-solid fa-slash"></i></div>
                            <div class="card-name"><span data-lang="pt">Linha (LINE)</span><span data-lang="en">Line (LINE)</span></div>
                        </div>
                        <div class="cmd-badges"><kbd>L</kbd> <kbd>LINE</kbd></div>
                    </div>
                    <p class="card-desc">
                        <span data-lang="pt">Desenha segmentos de reta precisos com ponto inicial, ponto final ou digitação direta de comprimento numérico.</span>
                        <span data-lang="en">Draws precision line segments using click coordinates or direct keyboard distance input.</span>
                    </p>
                    <div class="steps-box">
                        <div class="steps-box-title"><i class="fa-solid fa-list-ol"></i> <span data-lang="pt">Como Usar</span><span data-lang="en">How to Use</span></div>
                        <ol class="steps-list">
                            <li><span data-lang="pt">Digite <code>L</code> e tecle <kbd>Enter</kbd> (ou clique no botão Linha).</span><span data-lang="en">Type <code>L</code> and hit <kbd>Enter</kbd> (or click Line in Ribbon).</span></li>
                            <li><span data-lang="pt">Clique na tela para fixar o <strong>primeiro ponto</strong>.</span><span data-lang="en">Click on canvas to specify the <strong>first point</strong>.</span></li>
                            <li><span data-lang="pt">Aponte o cursor na direção desejada (com ORTHO <kbd>F8</kbd> para 90°) e <strong>digite a distância</strong> (ex: <code>4.50</code>) e tecle <kbd>Enter</kbd>.</span><span data-lang="en">Point crosshair in the desired direction (ORTHO <kbd>F8</kbd>) and <strong>type distance</strong> (e.g. <code>4.50</code>) then hit <kbd>Enter</kbd>.</span></li>
                            <li><span data-lang="pt">Tecle <kbd>Esc</kbd> ou <kbd>Enter</kbd> para concluir a sequência.</span><span data-lang="en">Hit <kbd>Esc</kbd> or <kbd>Enter</kbd> to finish.</span></li>
                        </ol>
                    </div>
                </div>

                <!-- Polyline -->
                <div class="feature-card" data-keywords="polilinha pline perimetro fechada continua PL">
                    <div class="card-top">
                        <div class="card-title-group">
                            <div class="card-icon"><i class="fa-solid fa-draw-polygon"></i></div>
                            <div class="card-name"><span data-lang="pt">Polilinha (PLINE)</span><span data-lang="en">Polyline (PLINE)</span></div>
                        </div>
                        <div class="cmd-badges"><kbd>PL</kbd> <kbd>PLINE</kbd></div>
                    </div>
                    <p class="card-desc">
                        <span data-lang="pt">Sequência contínua de segmentos que formam um único objeto geométrico vetorial com cálculo automático de comprimento total.</span>
                        <span data-lang="en">Connected sequence of segments forming a single 2D polyline object with total perimeter calculation.</span>
                    </p>
                    <div class="steps-box">
                        <div class="steps-box-title"><i class="fa-solid fa-list-ol"></i> <span data-lang="pt">Como Usar</span><span data-lang="en">How to Use</span></div>
                        <ol class="steps-list">
                            <li><span data-lang="pt">Digite <code>PL</code> e tecle <kbd>Enter</kbd>.</span><span data-lang="en">Type <code>PL</code> and press <kbd>Enter</kbd>.</span></li>
                            <li><span data-lang="pt">Clique sucessivamente nos vértices do cômodo ou polígono.</span><span data-lang="en">Click successively on polygon corner vertices.</span></li>
                            <li><span data-lang="pt">Para fechar a polilinha conectando ao início, digite <code>C</code> e tecle <kbd>Enter</kbd>.</span><span data-lang="en">To automatically close the boundary to start point, type <code>C</code> and hit <kbd>Enter</kbd>.</span></li>
                        </ol>
                    </div>
                </div>

                <!-- Rectangle -->
                <div class="feature-card" data-keywords="retangulo rectang retangulo caixa comodo REC">
                    <div class="card-top">
                        <div class="card-title-group">
                            <div class="card-icon"><i class="fa-regular fa-square"></i></div>
                            <div class="card-name"><span data-lang="pt">Retângulo (RECTANG)</span><span data-lang="en">Rectangle (RECTANG)</span></div>
                        </div>
                        <div class="cmd-badges"><kbd>REC</kbd> <kbd>RECTANG</kbd></div>
                    </div>
                    <p class="card-desc">
                        <span data-lang="pt">Cria um retângulo polilinha fechado especificando dois cantos opostos ou digitando dimensões.</span>
                        <span data-lang="en">Creates a closed rectangular polyline by picking two opposite corner points or entering dimensions.</span>
                    </p>
                    <div class="steps-box">
                        <div class="steps-box-title"><i class="fa-solid fa-list-ol"></i> <span data-lang="pt">Como Usar</span><span data-lang="en">How to Use</span></div>
                        <ol class="steps-list">
                            <li><span data-lang="pt">Digite <code>REC</code> e tecle <kbd>Enter</kbd>.</span><span data-lang="en">Type <code>REC</code> and hit <kbd>Enter</kbd>.</span></li>
                            <li><span data-lang="pt">Clique no primeiro vértice do retângulo.</span><span data-lang="en">Click on the first corner point.</span></li>
                            <li><span data-lang="pt">Arraste e clique no vértice oposto, ou digite o deslocamento.</span><span data-lang="en">Drag and click the opposite diagonal corner.</span></li>
                        </ol>
                    </div>
                </div>

                <!-- Circle -->
                <div class="feature-card" data-keywords="circulo circle raio diametro pilar mesa C">
                    <div class="card-top">
                        <div class="card-title-group">
                            <div class="card-icon"><i class="fa-regular fa-circle"></i></div>
                            <div class="card-name"><span data-lang="pt">Círculo (CIRCLE)</span><span data-lang="en">Circle (CIRCLE)</span></div>
                        </div>
                        <div class="cmd-badges"><kbd>C</kbd> <kbd>CIRCLE</kbd></div>
                    </div>
                    <p class="card-desc">
                        <span data-lang="pt">Desenha círculos por centro e raio ou centro e diâmetro (pilares redondos, tubulações, mesas).</span>
                        <span data-lang="en">Creates circles by center and radius or center and diameter (round columns, piping, tables).</span>
                    </p>
                    <div class="steps-box">
                        <div class="steps-box-title"><i class="fa-solid fa-list-ol"></i> <span data-lang="pt">Como Usar</span><span data-lang="en">How to Use</span></div>
                        <ol class="steps-list">
                            <li><span data-lang="pt">Digite <code>C</code> e tecle <kbd>Enter</kbd>.</span><span data-lang="en">Type <code>C</code> and press <kbd>Enter</kbd>.</span></li>
                            <li><span data-lang="pt">Clique no ponto central do círculo.</span><span data-lang="en">Click center point on canvas.</span></li>
                            <li><span data-lang="pt">Digite o raio (ex: <code>1.20</code>) ou tecle <code>D</code> para digitar o diâmetro.</span><span data-lang="en">Type radius (e.g. <code>1.20</code>) or type <code>D</code> for diameter.</span></li>
                        </ol>
                    </div>
                </div>

                <!-- Arc -->
                <div class="feature-card" data-keywords="arco arc 3 pontos porta abertura curva A">
                    <div class="card-top">
                        <div class="card-title-group">
                            <div class="card-icon"><i class="fa-solid fa-bezier-curve"></i></div>
                            <div class="card-name"><span data-lang="pt">Arco por 3 Pontos (ARC)</span><span data-lang="en">3-Point Arc (ARC)</span></div>
                        </div>
                        <div class="cmd-badges"><kbd>A</kbd> <kbd>ARC</kbd></div>
                    </div>
                    <p class="card-desc">
                        <span data-lang="pt">Cria arcos técnicos suaves definindo 3 pontos consecutivos (início, ponto de curvatura e fim).</span>
                        <span data-lang="en">Draws smooth technical arcs through 3 picked points (start point, mid-curve point, and end point).</span>
                    </p>
                    <div class="steps-box">
                        <div class="steps-box-title"><i class="fa-solid fa-list-ol"></i> <span data-lang="pt">Como Usar</span><span data-lang="en">How to Use</span></div>
                        <ol class="steps-list">
                            <li><span data-lang="pt">Digite <code>A</code> e tecle <kbd>Enter</kbd>.</span><span data-lang="en">Type <code>A</code> and press <kbd>Enter</kbd>.</span></li>
                            <li><span data-lang="pt">Clique no ponto 1 (início), ponto 2 (passagem do arco) e ponto 3 (término).</span><span data-lang="en">Click start point, second curve point, and final endpoint.</span></li>
                        </ol>
                    </div>
                </div>

                <!-- Hatch -->
                <div class="feature-card" data-keywords="hachura hatch solido tijolo concreto terra diagonal H">
                    <div class="card-top">
                        <div class="card-title-group">
                            <div class="card-icon"><i class="fa-solid fa-shapes"></i></div>
                            <div class="card-name"><span data-lang="pt">Hachura Técnica (HATCH)</span><span data-lang="en">Hatch Pattern (HATCH)</span></div>
                        </div>
                        <div class="cmd-badges"><kbd>H</kbd> <kbd>HATCH</kbd></div>
                    </div>
                    <p class="card-desc">
                        <span data-lang="pt">Preenche regiões com padrões técnicos arquitetônicos (sólido, alvenaria, concreto armado, terra, telhas, linhas diagonais).</span>
                        <span data-lang="en">Fills closed areas with architectural patterns (solid, masonry brick, concrete, ground earth, roof tiles, ANSI diagonals).</span>
                    </p>
                    <div class="steps-box">
                        <div class="steps-box-title"><i class="fa-solid fa-list-ol"></i> <span data-lang="pt">Como Usar</span><span data-lang="en">How to Use</span></div>
                        <ol class="steps-list">
                            <li><span data-lang="pt">Digite <code>H</code> e aperte <kbd>Enter</kbd>.</span><span data-lang="en">Type <code>H</code> and hit <kbd>Enter</kbd>.</span></li>
                            <li><span data-lang="pt">Escolha o padrão desejado e clique no contorno fechado.</span><span data-lang="en">Pick desired pattern and click inside boundary.</span></li>
                        </ol>
                    </div>
                </div>

                <!-- Medição Rápida DIST -->
                <div class="feature-card" data-keywords="dist di medir distancia delta x y angulo medicao comprimento fita metrica">
                    <div class="card-top">
                        <div class="card-title-group">
                            <div class="card-icon"><i class="fa-solid fa-tape"></i></div>
                            <div class="card-name"><span data-lang="pt">Medição Rápida (DIST)</span><span data-lang="en">Distance Measurement (DIST)</span></div>
                        </div>
                        <div class="cmd-badges"><kbd>DI</kbd> <kbd>DIST</kbd></div>
                    </div>
                    <p class="card-desc">
                        <span data-lang="pt">Mede a distância geométrica real entre dois pontos com cálculo instantâneo de Delta X, Delta Y e ângulo sem criar cotas no desenho.</span>
                        <span data-lang="en">Measures true geometric distance between two points, reporting Delta X, Delta Y, and angle without creating persistent dimensions.</span>
                    </p>
                    <div class="steps-box">
                        <div class="steps-box-title"><i class="fa-solid fa-list-ol"></i> <span data-lang="pt">Como Usar</span><span data-lang="en">How to Use</span></div>
                        <ol class="steps-list">
                            <li><span data-lang="pt">Digite <code>DI</code> ou <code>DIST</code> e tecle <kbd>Enter</kbd> (ou clique no ícone Medir no Ribbon).</span><span data-lang="en">Type <code>DI</code> or <code>DIST</code> and press <kbd>Enter</kbd>.</span></li>
                            <li><span data-lang="pt">Clique no <strong>primeiro ponto</strong> (aproveite os pontos magnéticos do OSNAP).</span><span data-lang="en">Click <strong>first point</strong> using OSNAP magnetic snaps.</span></li>
                            <li><span data-lang="pt">Clique no <strong>segundo ponto</strong>. O CAD exibirá imediatamente a distância exata, os deltas ortogonais e o ângulo no console e no HUD.</span><span data-lang="en">Click <strong>second point</strong>. Distance, Deltas, and Angle appear immediately in the console and HUD.</span></li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>

        <!-- 3. FERRAMENTAS DE MODIFICAÇÃO -->
        <section class="tutorial-section" data-category="modify">
            <div class="section-header">
                <h2><i class="fa-solid fa-wand-magic-sparkles"></i> <span data-lang="pt">3. Ferramentas de Modificação &amp; Edição (Modify)</span><span data-lang="en">3. Modify &amp; Transformation Tools</span></h2>
                <span class="section-count">11 <span data-lang="pt">recursos</span><span data-lang="en">tools</span></span>
            </div>
            <div class="feature-cards-grid">
                <!-- Move -->
                <div class="feature-card" data-keywords="mover move deslocar M translacao">
                    <div class="card-top">
                        <div class="card-title-group">
                            <div class="card-icon"><i class="fa-solid fa-up-down-left-right"></i></div>
                            <div class="card-name"><span data-lang="pt">Mover (MOVE)</span><span data-lang="en">Move (MOVE)</span></div>
                        </div>
                        <div class="cmd-badges"><kbd>M</kbd> <kbd>MOVE</kbd></div>
                    </div>
                    <p class="card-desc">
                        <span data-lang="pt">Move entidades selecionadas a partir de um ponto base de referência até uma nova localização exata.</span>
                        <span data-lang="en">Moves selected entities from a base reference point to a new target displacement point.</span>
                    </p>
                    <div class="steps-box">
                        <div class="steps-box-title"><i class="fa-solid fa-list-ol"></i> <span data-lang="pt">Como Usar</span><span data-lang="en">How to Use</span></div>
                        <ol class="steps-list">
                            <li><span data-lang="pt">Selecione os objetos e digite <code>M</code> <kbd>Enter</kbd>.</span><span data-lang="en">Select objects, type <code>M</code> and hit <kbd>Enter</kbd>.</span></li>
                            <li><span data-lang="pt">Clique no <strong>ponto base</strong> (ex: canto da parede).</span><span data-lang="en">Click on <strong>base point</strong>.</span></li>
                            <li><span data-lang="pt">Clique no <strong>ponto de destino</strong> (ou aponte e digite a distância).</span><span data-lang="en">Click target destination point (or point and type distance).</span></li>
                        </ol>
                    </div>
                </div>

                <!-- Copy -->
                <div class="feature-card" data-keywords="copiar copy duplicar multiplo CO CP">
                    <div class="card-top">
                        <div class="card-title-group">
                            <div class="card-icon"><i class="fa-solid fa-clone"></i></div>
                            <div class="card-name"><span data-lang="pt">Copiar (COPY)</span><span data-lang="en">Copy (COPY)</span></div>
                        </div>
                        <div class="cmd-badges"><kbd>CO</kbd> <kbd>CP</kbd> <kbd>COPY</kbd></div>
                    </div>
                    <p class="card-desc">
                        <span data-lang="pt">Cria cópias duplicadas das entidades selecionadas mantendo os originais intactos.</span>
                        <span data-lang="en">Duplicates selected entities preserving the original objects at their source location.</span>
                    </p>
                    <div class="steps-box">
                        <div class="steps-box-title"><i class="fa-solid fa-list-ol"></i> <span data-lang="pt">Como Usar</span><span data-lang="en">How to Use</span></div>
                        <ol class="steps-list">
                            <li><span data-lang="pt">Selecione os objetos, digite <code>CO</code> e tecle <kbd>Enter</kbd>.</span><span data-lang="en">Select objects, type <code>CO</code> and press <kbd>Enter</kbd>.</span></li>
                            <li><span data-lang="pt">Clique no ponto base e vá clicando nos pontos onde deseja colocar as cópias.</span><span data-lang="en">Click base point and click multiple target locations.</span></li>
                        </ol>
                    </div>
                </div>

                <!-- Rotate -->
                <div class="feature-card" data-keywords="girar rotacionar rotate angulo pivo RO">
                    <div class="card-top">
                        <div class="card-title-group">
                            <div class="card-icon"><i class="fa-solid fa-arrows-rotate"></i></div>
                            <div class="card-name"><span data-lang="pt">Rotacionar (ROTATE)</span><span data-lang="en">Rotate (ROTATE)</span></div>
                        </div>
                        <div class="cmd-badges"><kbd>RO</kbd> <kbd>ROTATE</kbd></div>
                    </div>
                    <p class="card-desc">
                        <span data-lang="pt">Gira objetos em torno de um ponto de pivô por ângulo exato em graus (ex: 45°, 90°, 180°).</span>
                        <span data-lang="en">Rotates entities around a picked base point pivot by an exact angle in degrees.</span>
                    </p>
                    <div class="steps-box">
                        <div class="steps-box-title"><i class="fa-solid fa-list-ol"></i> <span data-lang="pt">Como Usar</span><span data-lang="en">How to Use</span></div>
                        <ol class="steps-list">
                            <li><span data-lang="pt">Selecione os objetos e digite <code>RO</code> <kbd>Enter</kbd>.</span><span data-lang="en">Select objects, type <code>RO</code> <kbd>Enter</kbd>.</span></li>
                            <li><span data-lang="pt">Clique no <strong>pivô central</strong> de rotação.</span><span data-lang="en">Click the <strong>center pivot point</strong>.</span></li>
                            <li><span data-lang="pt">Digite o ângulo em graus (ex: <code>90</code>) e tecle <kbd>Enter</kbd>.</span><span data-lang="en">Type rotation angle (e.g. <code>90</code>) and hit <kbd>Enter</kbd>.</span></li>
                        </ol>
                    </div>
                </div>

                <!-- Scale -->
                <div class="feature-card" data-keywords="escalar scale aumentar diminuir proporcao SC">
                    <div class="card-top">
                        <div class="card-title-group">
                            <div class="card-icon"><i class="fa-solid fa-maximize"></i></div>
                            <div class="card-name"><span data-lang="pt">Escala (SCALE)</span><span data-lang="en">Scale (SCALE)</span></div>
                        </div>
                        <div class="cmd-badges"><kbd>SC</kbd> <kbd>SCALE</kbd></div>
                    </div>
                    <p class="card-desc">
                        <span data-lang="pt">Aumenta ou diminui o tamanho dos objetos proporcionalmente com base em um fator multiplicador.</span>
                        <span data-lang="en">Resizes entities proportionally from a base point by entering a scale factor.</span>
                    </p>
                    <div class="steps-box">
                        <div class="steps-box-title"><i class="fa-solid fa-list-ol"></i> <span data-lang="pt">Como Usar</span><span data-lang="en">How to Use</span></div>
                        <ol class="steps-list">
                            <li><span data-lang="pt">Selecione as entidades e digite <code>SC</code> <kbd>Enter</kbd>.</span><span data-lang="en">Select entities, type <code>SC</code> <kbd>Enter</kbd>.</span></li>
                            <li><span data-lang="pt">Clique no ponto base e digite o fator (ex: <code>2</code> para dobrar, <code>0.5</code> para metade).</span><span data-lang="en">Click base point and type factor (e.g. <code>2</code> to double, <code>0.5</code> for half).</span></li>
                        </ol>
                    </div>
                </div>

                <!-- Mirror -->
                <div class="feature-card" data-keywords="espelhar mirror simetria eixo MI">
                    <div class="card-top">
                        <div class="card-title-group">
                            <div class="card-icon"><i class="fa-solid fa-arrows-split-up-and-left"></i></div>
                            <div class="card-name"><span data-lang="pt">Espelhar (MIRROR)</span><span data-lang="en">Mirror (MIRROR)</span></div>
                        </div>
                        <div class="cmd-badges"><kbd>MI</kbd> <kbd>MIRROR</kbd></div>
                    </div>
                    <p class="card-desc">
                        <span data-lang="pt">Gera cópia espelhada de objetos em torno de uma linha de simetria definida por 2 pontos.</span>
                        <span data-lang="en">Creates a symmetrical mirrored copy around an imaginary mirror axis defined by 2 points.</span>
                    </p>
                    <div class="steps-box">
                        <div class="steps-box-title"><i class="fa-solid fa-list-ol"></i> <span data-lang="pt">Como Usar</span><span data-lang="en">How to Use</span></div>
                        <ol class="steps-list">
                            <li><span data-lang="pt">Selecione os objetos e digite <code>MI</code> <kbd>Enter</kbd>.</span><span data-lang="en">Select objects, type <code>MI</code> <kbd>Enter</kbd>.</span></li>
                            <li><span data-lang="pt">Clique no ponto 1 e ponto 2 do eixo de espelhamento.</span><span data-lang="en">Click first and second point of the mirror line.</span></li>
                            <li><span data-lang="pt">Escolha se deseja apagar o original (<code>S</code> / <code>N</code>).</span><span data-lang="en">Choose whether to erase source objects (<code>Y</code> / <code>N</code>).</span></li>
                        </ol>
                    </div>
                </div>

                <!-- Offset -->
                <div class="feature-card" data-keywords="offset paralelo espessura parede distancia O">
                    <div class="card-top">
                        <div class="card-title-group">
                            <div class="card-icon"><i class="fa-solid fa-arrows-turn-to-dots"></i></div>
                            <div class="card-name"><span data-lang="pt">Deslocamento (OFFSET)</span><span data-lang="en">Offset (OFFSET)</span></div>
                        </div>
                        <div class="cmd-badges"><kbd>O</kbd> <kbd>OFFSET</kbd></div>
                    </div>
                    <p class="card-desc">
                        <span data-lang="pt">Cria linhas ou polilinhas paralelas com distância métrica precisa (essencial para paredes de 0.15m ou 0.20m).</span>
                        <span data-lang="en">Generates parallel lines or concentric polylines at a defined metric distance (essential for walls).</span>
                    </p>
                    <div class="steps-box">
                        <div class="steps-box-title"><i class="fa-solid fa-list-ol"></i> <span data-lang="pt">Como Usar</span><span data-lang="en">How to Use</span></div>
                        <ol class="steps-list">
                            <li><span data-lang="pt">Digite <code>O</code> e tecle <kbd>Enter</kbd>.</span><span data-lang="en">Type <code>O</code> and press <kbd>Enter</kbd>.</span></li>
                            <li><span data-lang="pt">Digite a distância da parede (ex: <code>0.15</code>) e tecle <kbd>Enter</kbd>.</span><span data-lang="en">Type distance (e.g. <code>0.15</code>) and hit <kbd>Enter</kbd>.</span></li>
                            <li><span data-lang="pt">Clique na linha e clique no lado onde deseja gerar a paralela.</span><span data-lang="en">Click the line and click on the side where you want the copy.</span></li>
                        </ol>
                    </div>
                </div>

                <!-- Trim -->
                <div class="feature-card" data-keywords="aparar cortar trim aresta sobra cruzamento TR">
                    <div class="card-top">
                        <div class="card-title-group">
                            <div class="card-icon"><i class="fa-solid fa-scissors"></i></div>
                            <div class="card-name"><span data-lang="pt">Aparar / Cortar (TRIM)</span><span data-lang="en">Trim (TRIM)</span></div>
                        </div>
                        <div class="cmd-badges"><kbd>TR</kbd> <kbd>TRIM</kbd></div>
                    </div>
                    <p class="card-desc">
                        <span data-lang="pt">Corta sobras e arestas excedentes de linhas que cruzam outros elementos geométricos.</span>
                        <span data-lang="en">Trims excess line overhangs and boundary intersections with clean precision.</span>
                    </p>
                    <div class="steps-box">
                        <div class="steps-box-title"><i class="fa-solid fa-list-ol"></i> <span data-lang="pt">Como Usar</span><span data-lang="en">How to Use</span></div>
                        <ol class="steps-list">
                            <li><span data-lang="pt">Digite <code>TR</code> e tecle <kbd>Enter</kbd>.</span><span data-lang="en">Type <code>TR</code> and hit <kbd>Enter</kbd>.</span></li>
                            <li><span data-lang="pt">Clique diretamente nas pontas ou segmentos que deseja remover.</span><span data-lang="en">Click directly on the line segment you wish to cut away.</span></li>
                        </ol>
                    </div>
                </div>

                <!-- Extend -->
                <div class="feature-card" data-keywords="estender prolongar extend limite aresta EX">
                    <div class="card-top">
                        <div class="card-title-group">
                            <div class="card-icon"><i class="fa-solid fa-arrows-left-right-to-line"></i></div>
                            <div class="card-name"><span data-lang="pt">Estender (EXTEND)</span><span data-lang="en">Extend (EXTEND)</span></div>
                        </div>
                        <div class="cmd-badges"><kbd>EX</kbd> <kbd>EXTEND</kbd></div>
                    </div>
                    <p class="card-desc">
                        <span data-lang="pt">Prolonga uma linha até ela encontrar o próximo elemento geométrico ou aresta limite.</span>
                        <span data-lang="en">Extends a line until it meets the boundary edge of the nearest intersecting entity.</span>
                    </p>
                    <div class="steps-box">
                        <div class="steps-box-title"><i class="fa-solid fa-list-ol"></i> <span data-lang="pt">Como Usar</span><span data-lang="en">How to Use</span></div>
                        <ol class="steps-list">
                            <li><span data-lang="pt">Digite <code>EX</code> e tecle <kbd>Enter</kbd>.</span><span data-lang="en">Type <code>EX</code> and hit <kbd>Enter</kbd>.</span></li>
                            <li><span data-lang="pt">Clique na linha perto da ponta que deseja estender.</span><span data-lang="en">Click on the line near the endpoint you want to lengthen.</span></li>
                        </ol>
                    </div>
                </div>

                <!-- Fillet -->
                <div class="feature-card" data-keywords="fillet concordar canto arredondar vivo F">
                    <div class="card-top">
                        <div class="card-title-group">
                            <div class="card-icon"><i class="fa-solid fa-vector-square"></i></div>
                            <div class="card-name"><span data-lang="pt">Concordar Cantos (FILLET)</span><span data-lang="en">Fillet / Corner (FILLET)</span></div>
                        </div>
                        <div class="cmd-badges"><kbd>F</kbd> <kbd>FILLET</kbd></div>
                    </div>
                    <p class="card-desc">
                        <span data-lang="pt">Fecha cantos vivos perfeitos (raio 0) unindo duas linhas concorrentes ou arredonda cantos com raio.</span>
                        <span data-lang="en">Connects two lines forming clean sharp 90° corners (radius 0) or smooth fillets with custom radius.</span>
                    </p>
                    <div class="steps-box">
                        <div class="steps-box-title"><i class="fa-solid fa-list-ol"></i> <span data-lang="pt">Como Usar</span><span data-lang="en">How to Use</span></div>
                        <ol class="steps-list">
                            <li><span data-lang="pt">Digite <code>F</code> e tecle <kbd>Enter</kbd>.</span><span data-lang="en">Type <code>F</code> and press <kbd>Enter</kbd>.</span></li>
                            <li><span data-lang="pt">Clique na primeira linha e em seguida na segunda linha do canto.</span><span data-lang="en">Click the first line and then the second line of the corner.</span></li>
                        </ol>
                    </div>
                </div>

                <!-- Explode -->
                <div class="feature-card" data-keywords="explodir explode quebrar desagrupar bloco X">
                    <div class="card-top">
                        <div class="card-title-group">
                            <div class="card-icon"><i class="fa-solid fa-bomb"></i></div>
                            <div class="card-name"><span data-lang="pt">Explodir (EXPLODE)</span><span data-lang="en">Explode (EXPLODE)</span></div>
                        </div>
                        <div class="cmd-badges"><kbd>X</kbd> <kbd>EXPLODE</kbd></div>
                    </div>
                    <p class="card-desc">
                        <span data-lang="pt">Desagrupa blocos arquitetônicos, retângulos e polilinhas em segmentos individuais independentes.</span>
                        <span data-lang="en">Breaks architectural blocks, polylines, and compounds into individual line and arc segments.</span>
                    </p>
                    <div class="steps-box">
                        <div class="steps-box-title"><i class="fa-solid fa-list-ol"></i> <span data-lang="pt">Como Usar</span><span data-lang="en">How to Use</span></div>
                        <ol class="steps-list">
                            <li><span data-lang="pt">Selecione o bloco ou polilinha e tecle <code>X</code> <kbd>Enter</kbd>.</span><span data-lang="en">Select the block or polyline and type <code>X</code> <kbd>Enter</kbd>.</span></li>
                        </ol>
                    </div>
                </div>

                <!-- Criar Blocos e Grupos -->
                <div class="feature-card" data-keywords="block bloco group agrupar ungroup desagrupar B G UN criar bloco agrupar objetos">
                    <div class="card-top">
                        <div class="card-title-group">
                            <div class="card-icon"><i class="fa-solid fa-object-group"></i></div>
                            <div class="card-name"><span data-lang="pt">Criar &amp; Agrupar Blocos (BLOCK / GROUP)</span><span data-lang="en">Create &amp; Group Blocks (BLOCK / GROUP)</span></div>
                        </div>
                        <div class="cmd-badges"><kbd>B</kbd> <kbd>BLOCK</kbd> <kbd>G</kbd> <kbd>GROUP</kbd> <kbd>UNGROUP</kbd></div>
                    </div>
                    <p class="card-desc">
                        <span data-lang="pt">Agrupe várias linhas, arcos e geometrias desenhadas em um único bloco personalizado reutilizável com ponto base de inserção.</span>
                        <span data-lang="en">Combines multiple lines, arcs, and geometries into a single reusable custom block entity with an insertion basepoint.</span>
                    </p>
                    <div class="steps-box">
                        <div class="steps-box-title"><i class="fa-solid fa-list-ol"></i> <span data-lang="pt">Como Usar</span><span data-lang="en">How to Use</span></div>
                        <ol class="steps-list">
                            <li><strong><span data-lang="pt">Criar Bloco (BLOCK)</span><span data-lang="en">Create Block</span>:</strong> <span data-lang="pt">Selecione as entidades, digite <code>B</code> ou <code>BLOCK</code>, tecle <kbd>Enter</kbd> e forneça um nome. O objeto se torna um bloco unificado.</span><span data-lang="en">Select entities, type <code>B</code> or <code>BLOCK</code>, hit <kbd>Enter</kbd>, and enter a name.</span></li>
                            <li><strong><span data-lang="pt">Agrupamento Rápido (GROUP)</span><span data-lang="en">Quick Group</span>:</strong> <span data-lang="pt">Selecione objetos e tecle <code>G</code> <kbd>Enter</kbd> para agrupá-los rapidamente para movimentação conjunta.</span><span data-lang="en">Select entities and hit <code>G</code> <kbd>Enter</kbd> to group them.</span></li>
                            <li><strong><span data-lang="pt">Desagrupar (UNGROUP)</span><span data-lang="en">Ungroup</span>:</strong> <span data-lang="pt">Digite <code>UNGROUP</code> ou tecle <code>X</code> (<kbd>EXPLODE</kbd>) para separar o grupo de volta às linhas e formas individuais.</span><span data-lang="en">Type <code>UNGROUP</code> or <code>X</code> (<kbd>EXPLODE</kbd>) to revert to individual objects.</span></li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>

        <!-- 4. COTAS TÉCNICAS & TAMANHO DA FONTE -->
        <section class="tutorial-section" data-category="dim">
            <div class="section-header">
                <h2><i class="fa-solid fa-ruler-combined"></i> <span data-lang="pt">4. Cotas Técnicas, Textos &amp; Tamanho da Fonte</span><span data-lang="en">4. Dimensions, Annotation &amp; Font Scaling</span></h2>
                <span class="section-count">5 <span data-lang="pt">recursos</span><span data-lang="en">tools</span></span>
            </div>
            <div class="feature-cards-grid">
                <!-- Cota Alinhada -->
                <div class="feature-card" data-keywords="cota dim alinhada dimaligned medir distancia DAL DIM">
                    <div class="card-top">
                        <div class="card-title-group">
                            <div class="card-icon"><i class="fa-solid fa-ruler"></i></div>
                            <div class="card-name"><span data-lang="pt">Cota Alinhada (DIMALIGNED)</span><span data-lang="en">Aligned Dimension (DAL)</span></div>
                        </div>
                        <div class="cmd-badges"><kbd>DIM</kbd> <kbd>DAL</kbd> <kbd>COTA</kbd></div>
                    </div>
                    <p class="card-desc">
                        <span data-lang="pt">Cria cota técnica em qualquer ângulo com encaixe magnético nos vértices e medição automática em metros.</span>
                        <span data-lang="en">Creates true aligned linear dimensions at any orientation with automatic endpoint snapping.</span>
                    </p>
                    <div class="steps-box">
                        <div class="steps-box-title"><i class="fa-solid fa-list-ol"></i> <span data-lang="pt">Como Usar</span><span data-lang="en">How to Use</span></div>
                        <ol class="steps-list">
                            <li><span data-lang="pt">Digite <code>DIM</code> ou <code>DAL</code> e tecle <kbd>Enter</kbd> (ou clique em Cota no Ribbon).</span><span data-lang="en">Type <code>DIM</code> or <code>DAL</code> and hit <kbd>Enter</kbd>.</span></li>
                            <li><span data-lang="pt">Clique no <strong>primeiro ponto</strong> (ex: início da parede).</span><span data-lang="en">Click <strong>first point</strong> (e.g. wall start).</span></li>
                            <li><span data-lang="pt">Clique no <strong>segundo ponto</strong> (ex: final da parede).</span><span data-lang="en">Click <strong>second point</strong> (e.g. wall end).</span></li>
                            <li><span data-lang="pt">Afaste o mouse para definir a distância da cota e clique para fixar.</span><span data-lang="en">Move mouse away to set the dimension offset and click to place.</span></li>
                        </ol>
                    </div>
                </div>

                <!-- Cota Linear Ortogonal -->
                <div class="feature-card" data-keywords="dimlinear dli cota linear cota ortogonal cota horizontal vertical cota reta DLI">
                    <div class="card-top">
                        <div class="card-title-group">
                            <div class="card-icon"><i class="fa-solid fa-arrows-left-right"></i></div>
                            <div class="card-name"><span data-lang="pt">Cota Linear Ortogonal (DIMLINEAR)</span><span data-lang="en">Linear Dimension (DIMLINEAR)</span></div>
                        </div>
                        <div class="cmd-badges"><kbd>DLI</kbd> <kbd>DIMLINEAR</kbd></div>
                    </div>
                    <p class="card-desc">
                        <span data-lang="pt">Mede estritamente na horizontal ou na vertical, mesmo que os dois pontos selecionados estejam em posições inclinadas ou diagonais.</span>
                        <span data-lang="en">Measures strictly horizontal or vertical distances, projecting diagonal point selections onto orthogonal axes.</span>
                    </p>
                    <div class="steps-box">
                        <div class="steps-box-title"><i class="fa-solid fa-list-ol"></i> <span data-lang="pt">Como Usar</span><span data-lang="en">How to Use</span></div>
                        <ol class="steps-list">
                            <li><span data-lang="pt">Digite <code>DLI</code> ou <code>DIMLINEAR</code> e tecle <kbd>Enter</kbd>.</span><span data-lang="en">Type <code>DLI</code> or <code>DIMLINEAR</code> and press <kbd>Enter</kbd>.</span></li>
                            <li><span data-lang="pt">Clique no <strong>primeiro ponto</strong> e no <strong>segundo ponto</strong>.</span><span data-lang="en">Click <strong>first point</strong> and <strong>second point</strong>.</span></li>
                            <li><span data-lang="pt">Mova o cursor para cima/baixo para travar cota horizontal, ou para os lados para travar cota vertical, e clique para posicionar.</span><span data-lang="en">Move mouse vertically for horizontal dims, or horizontally for vertical dims, then click.</span></li>
                        </ol>
                    </div>
                </div>

                <!-- Painel de Propriedades da Cota & DIMSCALE -->
                <div class="feature-card" data-keywords="painel de cota tamanho da fonte dimscale dimtxt escala cota tamanho numero D DIMSTYLE Ctrl+1">
                    <div class="card-top">
                        <div class="card-title-group">
                            <div class="card-icon"><i class="fa-solid fa-font"></i></div>
                            <div class="card-name"><span data-lang="pt">Tamanho da Fonte &amp; Escala (DIMSCALE / DIMTXT)</span><span data-lang="en">Font Size &amp; Scale (DIMSCALE / DIMTXT)</span></div>
                        </div>
                        <div class="cmd-badges"><kbd>Ctrl+1</kbd> <kbd>DIMSCALE</kbd> <kbd>DIMTXT</kbd> <kbd>D</kbd></div>
                    </div>
                    <p class="card-desc">
                        <span data-lang="pt">Ajusta o tamanho dos números e setas das cotas tanto individualmente pelo painel lateral quanto globalmente para novas cotas.</span>
                        <span data-lang="en">Controls dimension font size, arrowheads, and scale either per entity or drawing-wide.</span>
                    </p>
                    <div class="steps-box">
                        <div class="steps-box-title"><i class="fa-solid fa-list-ol"></i> <span data-lang="pt">Como Alterar o Tamanho</span><span data-lang="en">How to Change Font Size</span></div>
                        <ol class="steps-list">
                            <li><strong><span data-lang="pt">Duplo Clique Direto</span><span data-lang="en">Double-Click</span>:</strong> <span data-lang="pt">Dê um <strong>duplo clique com o botão esquerdo na cota</strong> desenhada. O Painel de Propriedades se abrirá à direita!</span><span data-lang="en"><strong>Double-click directly on the dimension line</strong>. The Properties panel opens immediately on the right!</span></li>
                            <li><strong><span data-lang="pt">No Painel</span><span data-lang="en">In the Panel</span>:</strong> <span data-lang="pt">Altere o campo <strong>"Escala da Cota (DIMSCALE)"</strong> (ex: <code>1.5</code> ou <code>2.0</code>) ou a <strong>"Altura do Número (m)"</strong> (ex: <code>0.30</code>). O desenho atualiza na hora!</span><span data-lang="en">Change <strong>"Text Scale (DIMSCALE)"</strong> or <strong>"Text Height (m)"</strong> (e.g. <code>0.30</code>m). Live updates instantly!</span></li>
                            <li><strong><span data-lang="pt">Botão Ribbon</span><span data-lang="en">Ribbon Button</span>:</strong> <span data-lang="pt">Clique em <strong>"Escala Cota"</strong> no painel Anotação.</span><span data-lang="en">Click <strong>"Dim Scale"</strong> in the Annotation Ribbon.</span></li>
                        </ol>
                    </div>
                    <div class="pro-tip">
                        <i class="fa-solid fa-lightbulb"></i>
                        <span><strong data-lang="pt">Dica Global:</strong><strong data-lang="en">Global Setting:</strong> <span data-lang="pt">Para definir o tamanho de todas as <em>próximas</em> cotas, digite <code>DIMSCALE</code> no prompt e informe o valor desejado.</span><span data-lang="en">To set the default scale for all <em>subsequent</em> dimensions, type <code>DIMSCALE</code> in the command line.</span></span>
                    </div>
                </div>

                <!-- MText -->
                <div class="feature-card" data-keywords="texto mtext legenda anotação MT T">
                    <div class="card-top">
                        <div class="card-title-group">
                            <div class="card-icon"><i class="fa-solid fa-paragraph"></i></div>
                            <div class="card-name"><span data-lang="pt">Texto Técnico (MTEXT)</span><span data-lang="en">Technical Text (MTEXT)</span></div>
                        </div>
                        <div class="cmd-badges"><kbd>MT</kbd> <kbd>T</kbd> <kbd>MTEXT</kbd></div>
                    </div>
                    <p class="card-desc">
                        <span data-lang="pt">Insere notas explicativas, títulos de pranchas, especificações e observações técnicas no desenho.</span>
                        <span data-lang="en">Inserts multiline technical annotations, sheet titles, and drawing notes.</span>
                    </p>
                    <div class="steps-box">
                        <div class="steps-box-title"><i class="fa-solid fa-list-ol"></i> <span data-lang="pt">Como Usar</span><span data-lang="en">How to Use</span></div>
                        <ol class="steps-list">
                            <li><span data-lang="pt">Digite <code>MT</code> e tecle <kbd>Enter</kbd>.</span><span data-lang="en">Type <code>MT</code> and hit <kbd>Enter</kbd>.</span></li>
                            <li><span data-lang="pt">Clique onde deseja posicionar o texto, digite sua anotação e confirme.</span><span data-lang="en">Click placement point, enter your text, and confirm.</span></li>
                        </ol>
                    </div>
                </div>

                <!-- Room Labels -->
                <div class="feature-card" data-keywords="ambiente comodo rotulo sala quarto area etiqueta">
                    <div class="card-top">
                        <div class="card-title-group">
                            <div class="card-icon"><i class="fa-solid fa-tag"></i></div>
                            <div class="card-name"><span data-lang="pt">Rótulo de Ambientes</span><span data-lang="en">Room Labels</span></div>
                        </div>
                        <div class="cmd-badges"><kbd>Ribbon Anotar</kbd></div>
                    </div>
                    <p class="card-desc">
                        <span data-lang="pt">Etiqueta pronta com nome do ambiente (Sala, Cozinha, Quarto, BWC, Garagem) e área em m².</span>
                        <span data-lang="en">Standardized architectural room tag with room designation and calculated area.</span>
                    </p>
                    <div class="steps-box">
                        <div class="steps-box-title"><i class="fa-solid fa-list-ol"></i> <span data-lang="pt">Como Usar</span><span data-lang="en">How to Use</span></div>
                        <ol class="steps-list">
                            <li><span data-lang="pt">Acesse a aba <strong>Anotar</strong> no Ribbon e clique em <strong>"Nome Ambiente"</strong>.</span><span data-lang="en">Switch to <strong>Annotate</strong> tab and click <strong>"Room Label"</strong>.</span></li>
                            <li><span data-lang="pt">Escolha o ambiente e clique no interior do cômodo.</span><span data-lang="en">Select room type and click inside the room boundary.</span></li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>

        <!-- 5. PRECISÃO, ENCAIXES & SNAPS -->
        <section class="tutorial-section" data-category="snaps">
            <div class="section-header">
                <h2><i class="fa-solid fa-crosshairs"></i> <span data-lang="pt">5. Precisão, Encaixes, Coordenadas &amp; Snaps</span><span data-lang="en">5. Precision, Snaps &amp; Coordinates</span></h2>
                <span class="section-count">7 <span data-lang="pt">recursos</span><span data-lang="en">tools</span></span>
            </div>
            <div class="feature-cards-grid">
                <!-- OSNAP -->
                <div class="feature-card" data-keywords="osnap snap encaixe endpoint ponto medio centro F3">
                    <div class="card-top">
                        <div class="card-title-group">
                            <div class="card-icon"><i class="fa-solid fa-bullseye"></i></div>
                            <div class="card-name"><span data-lang="pt">OSNAP - Encaixe nos Objetos (<kbd>F3</kbd>)</span><span data-lang="en">OSNAP - Object Snap (<kbd>F3</kbd>)</span></div>
                        </div>
                        <div class="cmd-badges"><kbd>F3</kbd> <kbd>OSNAP</kbd></div>
                    </div>
                    <p class="card-desc">
                        <span data-lang="pt">Atrai o cursor com precisão matemática em Endpoints (quadrado), Midpoints (triângulo), Centers de círculos (círculo) e Interseções.</span>
                        <span data-lang="en">Magnetically snaps crosshairs to geometry endpoints, midpoints, circle centers, and line intersections.</span>
                    </p>
                    <div class="steps-box">
                        <div class="steps-box-title"><i class="fa-solid fa-list-ol"></i> <span data-lang="pt">Como Usar</span><span data-lang="en">How to Use</span></div>
                        <ol class="steps-list">
                            <li><span data-lang="pt">Pressione <kbd>F3</kbd> para ligar ou desligar o OSNAP instantaneamente.</span><span data-lang="en">Press <kbd>F3</kbd> to toggle OSNAP on/off instantly.</span></li>
                            <li><span data-lang="pt">Ao aproximar o mouse de um vértice ou meio de parede, o indicador geométrico surge automaticamente.</span><span data-lang="en">Hover near any vertex or midpoint to view the snap marker.</span></li>
                        </ol>
                    </div>
                </div>

                <!-- ORTHO -->
                <div class="feature-card" data-keywords="ortho ortogonal travar 90 graus F8">
                    <div class="card-top">
                        <div class="card-title-group">
                            <div class="card-icon"><i class="fa-solid fa-arrows-to-dot"></i></div>
                            <div class="card-name"><span data-lang="pt">ORTHO - Trava Ortogonal (<kbd>F8</kbd>)</span><span data-lang="en">ORTHO - Orthogonal Mode (<kbd>F8</kbd>)</span></div>
                        </div>
                        <div class="cmd-badges"><kbd>F8</kbd> <kbd>ORTHO</kbd></div>
                    </div>
                    <p class="card-desc">
                        <span data-lang="pt">Restringe os movimentos do cursor rigorosamente aos eixos horizontal e vertical (0°, 90°, 180°, 270°).</span>
                        <span data-lang="en">Locks drawing pointer strictly to horizontal and vertical orthogonal directions.</span>
                    </p>
                    <div class="steps-box">
                        <div class="steps-box-title"><i class="fa-solid fa-list-ol"></i> <span data-lang="pt">Como Usar</span><span data-lang="en">How to Use</span></div>
                        <ol class="steps-list">
                            <li><span data-lang="pt">Pressione <kbd>F8</kbd> a qualquer momento durante o desenho de linhas ou movimentação.</span><span data-lang="en">Press <kbd>F8</kbd> at any time during drawing or moving entities.</span></li>
                        </ol>
                    </div>
                </div>

                <!-- POLAR -->
                <div class="feature-card" data-keywords="polar rastreamento angulo guia pontilhada 45 F10">
                    <div class="card-top">
                        <div class="card-title-group">
                            <div class="card-icon"><i class="fa-solid fa-compass-drafting"></i></div>
                            <div class="card-name"><span data-lang="pt">POLAR - Rastreamento Polar (<kbd>F10</kbd>)</span><span data-lang="en">POLAR - Polar Tracking (<kbd>F10</kbd>)</span></div>
                        </div>
                        <div class="cmd-badges"><kbd>F10</kbd> <kbd>POLAR</kbd></div>
                    </div>
                    <p class="card-desc">
                        <span data-lang="pt">Projeta guias magnéticas luminosas pontilhadas em ângulos configuráveis (45°, 90°, 135°, etc.) para desenhos inclinados.</span>
                        <span data-lang="en">Projects magnetic dotted tracking lines at preset angle increments (45°, 90°, etc.).</span>
                    </p>
                    <div class="steps-box">
                        <div class="steps-box-title"><i class="fa-solid fa-list-ol"></i> <span data-lang="pt">Como Usar</span><span data-lang="en">How to Use</span></div>
                        <ol class="steps-list">
                            <li><span data-lang="pt">Pressione <kbd>F10</kbd> para ativar o rastreamento polar magnético.</span><span data-lang="en">Press <kbd>F10</kbd> to activate magnetic polar guide.</span></li>
                        </ol>
                    </div>
                </div>

                <!-- GRID & SNAP -->
                <div class="feature-card" data-keywords="grid grade malha snap aderir grade F7 F9">
                    <div class="card-top">
                        <div class="card-title-group">
                            <div class="card-icon"><i class="fa-solid fa-table-cells"></i></div>
                            <div class="card-name"><span data-lang="pt">GRID &amp; SNAP (<kbd>F7</kbd> / <kbd>F9</kbd>)</span><span data-lang="en">GRID &amp; SNAP (<kbd>F7</kbd> / <kbd>F9</kbd>)</span></div>
                        </div>
                        <div class="cmd-badges"><kbd>F7</kbd> <kbd>F9</kbd></div>
                    </div>
                    <p class="card-desc">
                        <span data-lang="pt">Exibe a malha métrica de fundo (<kbd>F7</kbd>) e força o cursor a estalar nos intervalos métricos fixos (<kbd>F9</kbd>).</span>
                        <span data-lang="en">Toggles background engineering grid (<kbd>F7</kbd>) and locks crosshair to grid intervals (<kbd>F9</kbd>).</span>
                    </p>
                </div>

                <!-- Dynamic Input -->
                <div class="feature-card" data-keywords="dynamic input hud mira coordenadas distancia angulo">
                    <div class="card-top">
                        <div class="card-title-group">
                            <div class="card-icon"><i class="fa-solid fa-eye"></i></div>
                            <div class="card-name"><span data-lang="pt">Entrada Dinâmica &amp; HUD</span><span data-lang="en">Dynamic Input &amp; HUD</span></div>
                        </div>
                        <div class="cmd-badges"><kbd>Automático</kbd></div>
                    </div>
                    <p class="card-desc">
                        <span data-lang="pt">Caixa flutuante que exibe em tempo real o comprimento exato, o ângulo e as instruções do comando ativo direto no cursor.</span>
                        <span data-lang="en">Floating HUD crosshair display showing real-time distance, angle, and active command prompts.</span>
                    </p>
                </div>

                <!-- Coordenadas Técnicas -->
                <div class="feature-card" data-keywords="coordenadas relativas polares arroba menor dx dy teclado precisao angulo metro @ <">
                    <div class="card-top">
                        <div class="card-title-group">
                            <div class="card-icon"><i class="fa-solid fa-location-crosshairs"></i></div>
                            <div class="card-name"><span data-lang="pt">Coordenadas Técnicas (@dX,dY &amp; dist&lt;ang)</span><span data-lang="en">Precision Coordinate Entry (@dX,dY &amp; dist&lt;ang)</span></div>
                        </div>
                        <div class="cmd-badges"><kbd>@dX,dY</kbd> <kbd>dist&lt;ang</kbd> <kbd>X,Y</kbd></div>
                    </div>
                    <p class="card-desc">
                        <span data-lang="pt">Desenhe e mova elementos com precisão milimétrica digitando coordenadas absolutas, relativas com arroba ou polares com ângulo.</span>
                        <span data-lang="en">Draft with millimetric precision entering absolute coordinates, relative Cartesian offsets (@dX,dY), or polar vectors (dist&lt;ang).</span>
                    </p>
                    <div class="steps-box">
                        <div class="steps-box-title"><i class="fa-solid fa-list-ol"></i> <span data-lang="pt">Sintaxes Suportadas</span><span data-lang="en">Supported Formats</span></div>
                        <ol class="steps-list">
                            <li><strong><span data-lang="pt">Coordenada Relativa (@dX,dY)</span><span data-lang="en">Relative Offset (@dX,dY)</span>:</strong> <span data-lang="pt">Digite <code>@5.0,0</code> para avançar 5.0m no eixo X, ou <code>@0,3.2</code> para subir 3.2m no eixo Y.</span><span data-lang="en">Type <code>@5.0,0</code> to shift 5.0m on X, or <code>@0,3.2</code> on Y.</span></li>
                            <li><strong><span data-lang="pt">Coordenada Polar (dist&lt;ângulo)</span><span data-lang="en">Polar Vector (dist&lt;ang)</span>:</strong> <span data-lang="pt">Digite <code>4.5&lt;45</code> para traçar uma reta de 4.50m inclinada a 45 graus.</span><span data-lang="en">Type <code>4.5&lt;45</code> for 4.50m at a 45° angle.</span></li>
                            <li><strong><span data-lang="pt">Entrada Direta de Distância</span><span data-lang="en">Direct Distance Entry</span>:</strong> <span data-lang="pt">Aponte o mouse (com ORTHO <kbd>F8</kbd> ou POLAR <kbd>F10</kbd>), digite o número (ex: <code>3.50</code>) e tecle <kbd>Enter</kbd>.</span><span data-lang="en">Point crosshair, type value (e.g. <code>3.50</code>) and press <kbd>Enter</kbd>.</span></li>
                        </ol>
                    </div>
                </div>

                <!-- Terminal de Comandos e Histórico F2 -->
                <div class="feature-card" data-keywords="console linha de comando prompt terminal f2 ctrl+9 historico autocomplete sugestoes repetir comando">
                    <div class="card-top">
                        <div class="card-title-group">
                            <div class="card-icon"><i class="fa-solid fa-terminal"></i></div>
                            <div class="card-name"><span data-lang="pt">Linha de Comando &amp; Histórico (F2)</span><span data-lang="en">Command Line &amp; History (F2)</span></div>
                        </div>
                        <div class="cmd-badges"><kbd>F2</kbd> <kbd>Ctrl+9</kbd> <kbd>Espaço</kbd></div>
                    </div>
                    <p class="card-desc">
                        <span data-lang="pt">Console clássico idêntico ao AutoCAD com autocompletar de comandos, histórico de mensagens e navegação por setas.</span>
                        <span data-lang="en">Classic AutoCAD command line terminal featuring intelligent command autocomplete, message history, and arrow key recall.</span>
                    </p>
                    <div class="steps-box">
                        <div class="steps-box-title"><i class="fa-solid fa-list-ol"></i> <span data-lang="pt">Recursos Avançados</span><span data-lang="en">Advanced Features</span></div>
                        <ol class="steps-list">
                            <li><strong><span data-lang="pt">Expandir Histórico (<kbd>F2</kbd>)</span><span data-lang="en">Expand Console (<kbd>F2</kbd>)</span>:</strong> <span data-lang="pt">Pressione <kbd>F2</kbd> para abrir o painel rolante com os últimos relatórios e comandos executados.</span><span data-lang="en">Press <kbd>F2</kbd> to toggle the full scrollable command log.</span></li>
                            <li><strong><span data-lang="pt">Repetir Último Comando</span><span data-lang="en">Repeat Command</span>:</strong> <span data-lang="pt">Tecle <kbd>Espaço</kbd> ou <kbd>Enter</kbd> com a linha vazia para repetir a última ferramenta imediatamente.</span><span data-lang="en">Hit <kbd>Space</kbd> or <kbd>Enter</kbd> on empty prompt to repeat last tool.</span></li>
                            <li><strong><span data-lang="pt">Histórico Anterior</span><span data-lang="en">History Recall</span>:</strong> <span data-lang="pt">Pressione as setas <kbd>↑</kbd> e <kbd>↓</kbd> para navegar e reexecutar comandos digitados antes.</span><span data-lang="en">Press <kbd>↑</kbd> and <kbd>↓</kbd> to recall previous entries.</span></li>
                            <li><strong><span data-lang="pt">Ocultar Barra (<kbd>Ctrl+9</kbd>)</span><span data-lang="en">Toggle Dock (<kbd>Ctrl+9</kbd>)</span>:</strong> <span data-lang="pt">Pressione <kbd>Ctrl+9</kbd> para ocultar ou restaurar a barra de comando inferior.</span><span data-lang="en">Press <kbd>Ctrl+9</kbd> to show/hide the bottom command dock.</span></li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>

        <!-- 6. GERENCIADOR DE CAMADAS -->
        <section class="tutorial-section" data-category="layers">
            <div class="section-header">
                <h2><i class="fa-solid fa-layer-group"></i> <span data-lang="pt">6. Gerenciador de Camadas &amp; Tipos de Linha (Layers)</span><span data-lang="en">6. Layer Management &amp; Linetypes</span></h2>
                <span class="section-count">3 <span data-lang="pt">recursos</span><span data-lang="en">tools</span></span>
            </div>
            <div class="feature-cards-grid">
                <!-- Gerenciador de Camadas -->
                <div class="feature-card" data-keywords="camadas layers cor visibilidade lâmpada cadeado trava bylayer LA">
                    <div class="card-top">
                        <div class="card-title-group">
                            <div class="card-icon"><i class="fa-solid fa-layer-group"></i></div>
                            <div class="card-name"><span data-lang="pt">Gerenciador de Camadas (LAYER)</span><span data-lang="en">Layer Properties (LAYER)</span></div>
                        </div>
                        <div class="cmd-badges"><kbd>LA</kbd> <kbd>LAYER</kbd></div>
                    </div>
                    <p class="card-desc">
                        <span data-lang="pt">Organiza o projeto por disciplinas técnicas: Alvenaria, Estrutura, Cotas, Textos, Esquadrias, Elétrica, Hidráulica e Hachura.</span>
                        <span data-lang="en">Organizes architectural drawings into technical disciplines with color, visibility, and lock controls.</span>
                    </p>
                    <div class="steps-box">
                        <div class="steps-box-title"><i class="fa-solid fa-list-ol"></i> <span data-lang="pt">Como Usar</span><span data-lang="en">How to Use</span></div>
                        <ol class="steps-list">
                            <li><span data-lang="pt">Digite <code>LA</code> e tecle <kbd>Enter</kbd> (ou clique no seletor de camadas no Ribbon).</span><span data-lang="en">Type <code>LA</code> and press <kbd>Enter</kbd>.</span></li>
                            <li><span data-lang="pt">Controle visibilidade na lâmpada, bloqueio no cadeado ou clique na caixinha de cor para alterar a cor da camada.</span><span data-lang="en">Toggle visibility, lock state, or click the color box to change layer tint.</span></li>
                        </ol>
                    </div>
                </div>

                <!-- ByLayer -->
                <div class="feature-card" data-keywords="bylayer cores herdadas padrão norma ABNT">
                    <div class="card-top">
                        <div class="card-title-group">
                            <div class="card-icon"><i class="fa-solid fa-palette"></i></div>
                            <div class="card-name"><span data-lang="pt">Cores ByLayer</span><span data-lang="en">ByLayer Colors</span></div>
                        </div>
                        <div class="cmd-badges"><kbd>Padrão CAD</kbd></div>
                    </div>
                    <p class="card-desc">
                        <span data-lang="pt">Ao manter os objetos configurados como <strong>ByLayer</strong>, eles herdam automaticamente a cor e o tipo de linha definidos para a camada na norma ABNT.</span>
                        <span data-lang="en">Setting entities to <strong>ByLayer</strong> ensures they automatically inherit color and linetype styles from their parent layer.</span>
                    </p>
                </div>

                <!-- Tipos de Linha e LTSCALE -->
                <div class="feature-card" data-keywords="ltscale lts tipos de linha tracejada oculta centro eixos vigas escala linha">
                    <div class="card-top">
                        <div class="card-title-group">
                            <div class="card-icon"><i class="fa-solid fa-ellipsis"></i></div>
                            <div class="card-name"><span data-lang="pt">Tipos de Linha &amp; Escala (LTSCALE / LTS)</span><span data-lang="en">Linetypes &amp; Scale (LTSCALE / LTS)</span></div>
                        </div>
                        <div class="cmd-badges"><kbd>LTS</kbd> <kbd>LTSCALE</kbd></div>
                    </div>
                    <p class="card-desc">
                        <span data-lang="pt">Padrões normalizados ABNT: CONTINUOUS (cheia), DASHED (tracejada para vigas e projeções), HIDDEN (oculta), CENTER (traço-ponto para eixos) e PHANTOM (divisas).</span>
                        <span data-lang="en">Standardized technical linetypes: CONTINUOUS, DASHED (beams/projections), HIDDEN, CENTER (structural axes), and PHANTOM (lot boundaries).</span>
                    </p>
                    <div class="steps-box">
                        <div class="steps-box-title"><i class="fa-solid fa-list-ol"></i> <span data-lang="pt">Como Ajustar a Escala</span><span data-lang="en">How to Set Scale</span></div>
                        <ol class="steps-list">
                            <li><span data-lang="pt">Digite <code>LTS</code> e tecle <kbd>Enter</kbd>.</span><span data-lang="en">Type <code>LTS</code> and press <kbd>Enter</kbd>.</span></li>
                            <li><span data-lang="pt">Informe o fator desejado (ex: <code>0.5</code> para traços menores, ou <code>1.5</code> para espaçamento maior) e tecle <kbd>Enter</kbd>.</span><span data-lang="en">Enter desired factor (e.g. <code>0.5</code> or <code>1.5</code>) and hit <kbd>Enter</kbd>.</span></li>
                            <li><span data-lang="pt">Você também pode trocar o tipo de linha de qualquer objeto individualmente pelo <strong>Painel de Propriedades (<kbd>Ctrl+1</kbd>)</strong>.</span><span data-lang="en">You can also change individual linetypes via the <strong>Properties Panel (<kbd>Ctrl+1</kbd>)</strong>.</span></li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>

        <!-- 7. BIBLIOTECA DE BLOCOS ABNT -->
        <section class="tutorial-section" data-category="blocks">
            <div class="section-header">
                <h2><i class="fa-solid fa-cubes"></i> <span data-lang="pt">7. Biblioteca de Blocos ABNT (INSERT / I)</span><span data-lang="en">7. ABNT Architectural Blocks (INSERT / I)</span></h2>
                <span class="section-count">2 <span data-lang="pt">recursos</span><span data-lang="en">tools</span></span>
            </div>
            <div class="feature-cards-grid">
                <!-- Biblioteca de Blocos -->
                <div class="feature-card" data-keywords="blocos insert biblioteca portas janelas sanitario mobilia carro arvore I INSERT">
                    <div class="card-top">
                        <div class="card-title-group">
                            <div class="card-icon"><i class="fa-solid fa-cubes"></i></div>
                            <div class="card-name"><span data-lang="pt">Galeria de Blocos Paramétricos</span><span data-lang="en">ABNT Block Library</span></div>
                        </div>
                        <div class="cmd-badges"><kbd>I</kbd> <kbd>INSERT</kbd></div>
                    </div>
                    <p class="card-desc">
                        <span data-lang="pt">Mais de 100 blocos técnicos normalizados divididos em 14 categorias: Esquadrias (portas e janelas), Sanitários (bacias, pias, cubas, chuveiros), Mobiliário (camas, mesas, sofás), Veículos, Paisagismo, Elétrica, Hidráulica e Símbolos ABNT.</span>
                        <span data-lang="en">Over 100 standardized CAD blocks across 14 categories: Doors, Windows, Sanitary, Furniture, Vehicles, Trees, MEP and ABNT symbols.</span>
                    </p>
                    <div class="steps-box">
                        <div class="steps-box-title"><i class="fa-solid fa-list-ol"></i> <span data-lang="pt">Como Usar</span><span data-lang="en">How to Use</span></div>
                        <ol class="steps-list">
                            <li><span data-lang="pt">Digite <code>I</code> e tecle <kbd>Enter</kbd> (ou clique no botão Blocos no Ribbon).</span><span data-lang="en">Type <code>I</code> and press <kbd>Enter</kbd> (or click Blocks in Ribbon).</span></li>
                            <li><span data-lang="pt">Escolha a categoria e clique no bloco desejado.</span><span data-lang="en">Choose category and click your chosen block.</span></li>
                            <li><span data-lang="pt">Clique no desenho na posição exata onde quer encaixar o bloco.</span><span data-lang="en">Click on canvas where you want to insert the block.</span></li>
                        </ol>
                    </div>
                </div>

                <!-- Navegação de Abas -->
                <div class="feature-card" data-keywords="abas categorias blocos avançar recuar scroll wheel navegação">
                    <div class="card-top">
                        <div class="card-title-group">
                            <div class="card-icon"><i class="fa-solid fa-arrows-left-right"></i></div>
                            <div class="card-name"><span data-lang="pt">Navegação Rápida entre Abas</span><span data-lang="en">Block Tabs Navigation</span></div>
                        </div>
                        <div class="cmd-badges"><kbd>&lt;</kbd> <kbd>&gt;</kbd> <kbd>Scroll Mouse</kbd></div>
                    </div>
                    <p class="card-desc">
                        <span data-lang="pt">Navegue pelas 14 categorias de blocos usando os botões dedicados de avançar/recuar nas pontas ou rolando a roda do mouse sobre as abas.</span>
                        <span data-lang="en">Seamlessly scroll between the 14 category tabs using the forward/backward arrows or mouse wheel scrolling.</span>
                    </p>
                </div>
            </div>
        </section>

        <!-- 8. CALCO TÉCNICO PDF / IMAGEM 1:1 -->
        <section class="tutorial-section" data-category="underlay">
            <div class="section-header">
                <h2><i class="fa-solid fa-file-pdf"></i> <span data-lang="pt">8. Calco Técnico PDF / Imagem &amp; Calibração 1:1</span><span data-lang="en">8. 1:1 Metric Underlay (PDF &amp; Image)</span></h2>
                <span class="section-count">3 <span data-lang="pt">recursos</span><span data-lang="en">tools</span></span>
            </div>
            <div class="feature-cards-grid">
                <!-- Importar PDF ou Imagem -->
                <div class="feature-card" data-keywords="calco pdf imagem papel manteiga planta croqui anexar PDFATTACH IMAGEATTACH">
                    <div class="card-top">
                        <div class="card-title-group">
                            <div class="card-icon"><i class="fa-solid fa-file-import"></i></div>
                            <div class="card-name"><span data-lang="pt">Anexar Calco (PDFATTACH / IMAGEATTACH)</span><span data-lang="en">Attach Underlay (PDFATTACH / IMAGEATTACH)</span></div>
                        </div>
                        <div class="cmd-badges"><kbd>PDFATTACH</kbd> <kbd>IMAGEATTACH</kbd></div>
                    </div>
                    <p class="card-desc">
                        <span data-lang="pt">Carrega qualquer prancha PDF ou foto/planta PNG/JPG para desenhar por cima com precisão milimétrica, como um papel manteiga técnico.</span>
                        <span data-lang="en">Loads any PDF sheet or PNG/JPG floor plan image directly underneath your vector drawing.</span>
                    </p>
                    <div class="steps-box">
                        <div class="steps-box-title"><i class="fa-solid fa-list-ol"></i> <span data-lang="pt">Como Usar</span><span data-lang="en">How to Use</span></div>
                        <ol class="steps-list">
                            <li><span data-lang="pt">Digite <code>PDFATTACH</code> ou clique no botão Anexar PDF.</span><span data-lang="en">Type <code>PDFATTACH</code> or click Attach PDF.</span></li>
                            <li><span data-lang="pt">Selecione seu arquivo PDF ou imagem do computador. O calco surge posicionado no modelo.</span><span data-lang="en">Select your PDF file. The underlay appears rendered on canvas.</span></li>
                        </ol>
                    </div>
                </div>

                <!-- Calibração 1:1 -->
                <div class="feature-card" data-keywords="calibrar escala real 1:1 medir referencia distancia exata CALIBRATE">
                    <div class="card-top">
                        <div class="card-title-group">
                            <div class="card-icon"><i class="fa-solid fa-ruler-horizontal"></i></div>
                            <div class="card-name"><span data-lang="pt">Calibrar Escala Real 1:1 (CALIBRATE)</span><span data-lang="en">Calibrate 1:1 Scale (CALIBRATE)</span></div>
                        </div>
                        <div class="cmd-badges"><kbd>CALIBRATE</kbd></div>
                    </div>
                    <p class="card-desc">
                        <span data-lang="pt">Ajusta todo o calco PDF para a escala métrica real milimétrica 1:1 simplesmente informando uma distância conhecida.</span>
                        <span data-lang="en">Calibrates the entire underlay to true 1:1 metric scale based on any known measured reference distance.</span>
                    </p>
                    <div class="steps-box">
                        <div class="steps-box-title"><i class="fa-solid fa-list-ol"></i> <span data-lang="pt">Passo a Passo da Calibração</span><span data-lang="en">Step-by-step Calibration</span></div>
                        <ol class="steps-list">
                            <li><span data-lang="pt">Digite <code>CALIBRATE</code> e tecle <kbd>Enter</kbd> (ou clique no botão Calibrar do HUD).</span><span data-lang="en">Type <code>CALIBRATE</code> and press <kbd>Enter</kbd>.</span></li>
                            <li><span data-lang="pt">Clique no <strong>primeiro ponto</strong> de uma parede ou cota visível no PDF.</span><span data-lang="en">Click the <strong>first endpoint</strong> of a dimension line visible on the PDF.</span></li>
                            <li><span data-lang="pt">Clique no <strong>segundo ponto</strong> da mesma parede.</span><span data-lang="en">Click the <strong>second endpoint</strong> of that dimension.</span></li>
                            <li><span data-lang="pt">Digite o tamanho real em metros (ex: <code>4.00</code>) e aperte <kbd>Enter</kbd>. Pronto! Todo o desenho fica em escala 1:1!</span><span data-lang="en">Enter the true dimension in meters (e.g. <code>4.00</code>) and hit <kbd>Enter</kbd>. The entire drawing is now 1:1 scale!</span></li>
                        </ol>
                    </div>
                </div>

                <!-- Alças Interativas do Calco -->
                <div class="feature-card" data-keywords="alças calco grips mover girar redimensionar escala HUD opacidade trava">
                    <div class="card-top">
                        <div class="card-title-group">
                            <div class="card-icon"><i class="fa-solid fa-up-down-left-right"></i></div>
                            <div class="card-name"><span data-lang="pt">Alças de Manipulação (Grips do Calco)</span><span data-lang="en">Interactive Underlay Grips</span></div>
                        </div>
                        <div class="cmd-badges"><kbd>Clique no Calco</kbd></div>
                    </div>
                    <p class="card-desc">
                        <span data-lang="pt">Clique no calco para exibir 6 alças visuais inteligentes:</span>
                        <span data-lang="en">Click on underlay to reveal 6 smart manipulation grips:</span>
                    </p>
                    <div class="steps-box">
                        <ol class="steps-list">
                            <li><strong><span data-lang="pt">Alça Central</span><span data-lang="en">Center Grip</span>:</strong> <span data-lang="pt">Arraste para mover e reposicionar o calco.</span><span data-lang="en">Drag to translate and reposition underlay.</span></li>
                            <li><strong><span data-lang="pt">Alça Superior (Turquesa)</span><span data-lang="en">Top Rotation Grip</span>:</strong> <span data-lang="pt">Gire o calco livremente ou a cada 45°/90°.</span><span data-lang="en">Rotate with polar snap every 45°/90°.</span></li>
                            <li><strong><span data-lang="pt">4 Alças de Canto (Safira)</span><span data-lang="en">4 Corner Grips</span>:</strong> <span data-lang="pt">Redimensione proporcionalmente travando o canto oposto (âncora fixa).</span><span data-lang="en">Scale proportionally with pinned opposite anchor.</span></li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>

        <!-- 9. PROPRIEDADES & GRIPS -->
        <section class="tutorial-section" data-category="props">
            <div class="section-header">
                <h2><i class="fa-solid fa-sliders"></i> <span data-lang="pt">9. Painel de Propriedades Rápidas &amp; Grips de Nós</span><span data-lang="en">9. Quick Properties Inspector &amp; Direct Grips</span></h2>
                <span class="section-count">2 <span data-lang="pt">recursos</span><span data-lang="en">tools</span></span>
            </div>
            <div class="feature-cards-grid">
                <!-- Painel de Propriedades -->
                <div class="feature-card" data-keywords="propriedades painel lateral inspetor coordenadas raio angulo dimscale PR Ctrl+1 PROPS">
                    <div class="card-top">
                        <div class="card-title-group">
                            <div class="card-icon"><i class="fa-solid fa-sliders"></i></div>
                            <div class="card-name"><span data-lang="pt">Painel de Propriedades (<kbd>Ctrl+1</kbd> / <kbd>PR</kbd>)</span><span data-lang="en">Properties Inspector (<kbd>Ctrl+1</kbd> / <kbd>PR</kbd>)</span></div>
                        </div>
                        <div class="cmd-badges"><kbd>Ctrl+1</kbd> <kbd>PR</kbd> <kbd>PROPS</kbd> <kbd>2x Clique</kbd></div>
                    </div>
                    <p class="card-desc">
                        <span data-lang="pt">Abre a barra lateral para inspecionar e editar instantaneamente qualquer entidade: coordenadas, cor, camada, tipo de linha (LTS), escala de cota (DIMSCALE) e texto.</span>
                        <span data-lang="en">Collapsible sidebar to inspect and live-edit geometry coordinates, color, layer, linetype scale, and dimension properties.</span>
                    </p>
                    <div class="steps-box">
                        <div class="steps-box-title"><i class="fa-solid fa-list-ol"></i> <span data-lang="pt">Como Abrir</span><span data-lang="en">How to Open</span></div>
                        <ol class="steps-list">
                            <li><span data-lang="pt">Dê um <strong>duplo clique com o botão esquerdo</strong> sobre qualquer objeto desenhado.</span><span data-lang="en"><strong>Double-click</strong> any drawn entity on canvas.</span></li>
                            <li><span data-lang="pt">Ou pressione o atalho <kbd>Ctrl</kbd> + <kbd>1</kbd>.</span><span data-lang="en">Or press keyboard shortcut <kbd>Ctrl</kbd> + <kbd>1</kbd>.</span></li>
                            <li><span data-lang="pt">Ou clique com botão direito e escolha <strong>"Propriedades"</strong>.</span><span data-lang="en">Or right-click anywhere and choose <strong>"Propriedades"</strong>.</span></li>
                        </ol>
                    </div>
                </div>

                <!-- Grips Diretos -->
                <div class="feature-card" data-keywords="grips alças azuis esticar nós mover direto vertex stretch">
                    <div class="card-top">
                        <div class="card-title-group">
                            <div class="card-icon"><i class="fa-solid fa-grip"></i></div>
                            <div class="card-name"><span data-lang="pt">Alças de Nós (Direct Grips)</span><span data-lang="en">Direct Node Grips (Stretch)</span></div>
                        </div>
                        <div class="cmd-badges"><kbd>Clique Seleção</kbd></div>
                    </div>
                    <p class="card-desc">
                        <span data-lang="pt">Ao clicar em qualquer linha, retângulo, círculo ou cota, pequenos quadrados azuis aparecem nos nós e pontos médios.</span>
                        <span data-lang="en">Clicking any line, rectangle, circle or dimension reveals blue grip boxes on vertices and midpoints.</span>
                    </p>
                    <div class="steps-box">
                        <div class="steps-box-title"><i class="fa-solid fa-list-ol"></i> <span data-lang="pt">Como Usar</span><span data-lang="en">How to Use</span></div>
                        <ol class="steps-list">
                            <li><span data-lang="pt">Selecione a linha ou cota desejada.</span><span data-lang="en">Select the target line or dimension.</span></li>
                            <li><span data-lang="pt">Clique em cima de uma das alças azuis para torná-la ativa.</span><span data-lang="en">Click on one of the blue grips to activate it.</span></li>
                            <li><span data-lang="pt">Arraste para esticar (stretch) ou reposicionar o vértice com precisão.</span><span data-lang="en">Drag to stretch or reposition the vertex precisely.</span></li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>

        <!-- 10. ARQUIVOS, EXPORTAÇÃO & AUTOSAVE -->
        <section class="tutorial-section" data-category="export">
            <div class="section-header">
                <h2><i class="fa-solid fa-file-export"></i> <span data-lang="pt">10. Arquivos, Exportação, AutoSave &amp; PWA</span><span data-lang="en">10. Files, Export, AutoSave &amp; PWA</span></h2>
                <span class="section-count">5 <span data-lang="pt">recursos</span><span data-lang="en">tools</span></span>
            </div>
            <div class="feature-cards-grid">
                <!-- Salvar DXF -->
                <div class="feature-card" data-keywords="salvar dxf exportar autocad revit qsave ctrl s">
                    <div class="card-top">
                        <div class="card-title-group">
                            <div class="card-icon"><i class="fa-solid fa-floppy-disk"></i></div>
                            <div class="card-name"><span data-lang="pt">Salvar DXF Nativo (QSAVE)</span><span data-lang="en">Save Native DXF (QSAVE)</span></div>
                        </div>
                        <div class="cmd-badges"><kbd>Ctrl+S</kbd> <kbd>QSAVE</kbd></div>
                    </div>
                    <p class="card-desc">
                        <span data-lang="pt">Gera arquivo DXF universal padrão da indústria CAD, 100% compatível com AutoCAD, Revit, SketchUp, Blender e máquinas CNC.</span>
                        <span data-lang="en">Saves standard DXF CAD exchange file, 100% compatible with AutoCAD, Revit, SketchUp and CNC cutting tools.</span>
                    </p>
                    <div class="steps-box">
                        <ol class="steps-list">
                            <li><span data-lang="pt">Pressione <kbd>Ctrl</kbd> + <kbd>S</kbd> ou clique em Salvar DXF no menu superior.</span><span data-lang="en">Press <kbd>Ctrl</kbd> + <kbd>S</kbd> or click Save DXF in top bar.</span></li>
                        </ol>
                    </div>
                </div>

                <!-- Plotar PDF Pranchas -->
                <div class="feature-card" data-keywords="plotar pdf prancha a4 a3 a2 a1 escala 1:50 1:100 margem carimbo print plot">
                    <div class="card-top">
                        <div class="card-title-group">
                            <div class="card-icon"><i class="fa-solid fa-print"></i></div>
                            <div class="card-name"><span data-lang="pt">Exportar Prancha PDF em Escala</span><span data-lang="en">Export Scaled PDF Sheet</span></div>
                        </div>
                        <div class="cmd-badges"><kbd>PLOT</kbd> <kbd>PRINT</kbd></div>
                    </div>
                    <p class="card-desc">
                        <span data-lang="pt">Plotagem técnica vetorial em folhas normalizadas A4, A3, A2 e A1 com margens e escalas normalizadas (1:50, 1:100, 1:200, 1:20).</span>
                        <span data-lang="en">High-resolution vector PDF plotting in standard sheets (A4, A3, A2, A1) with architectural scales (1:50, 1:100).</span>
                    </p>
                    <div class="steps-box">
                        <ol class="steps-list">
                            <li><span data-lang="pt">Clique em <strong>"Plotar PDF"</strong> no menu superior ou digite <code>PLOT</code>.</span><span data-lang="en">Click <strong>"Plot PDF"</strong> in top header or type <code>PLOT</code>.</span></li>
                            <li><span data-lang="pt">Selecione o tamanho da folha, a escala métrica e baixe o PDF pronto para impressão.</span><span data-lang="en">Choose sheet format, drawing scale, and download ready-to-print PDF.</span></li>
                        </ol>
                    </div>
                </div>

                <!-- AutoSave & Recover -->
                <div class="feature-card" data-keywords="autosave recover recuperar projeto restaurar historico cache">
                    <div class="card-top">
                        <div class="card-title-group">
                            <div class="card-icon"><i class="fa-solid fa-shield-halved"></i></div>
                            <div class="card-name"><span data-lang="pt">AutoSave &amp; Recuperação (RECOVER)</span><span data-lang="en">AutoSave &amp; Recovery (RECOVER)</span></div>
                        </div>
                        <div class="cmd-badges"><kbd>RECOVER</kbd> <kbd>Automático</kbd></div>
                    </div>
                    <p class="card-desc">
                        <span data-lang="pt">Proteção contínua contra fechamento acidental de aba, recarga de página ou queda de energia.</span>
                        <span data-lang="en">Continuous local snapshot protection against accidental browser closing or power outages.</span>
                    </p>
                    <div class="steps-box">
                        <ol class="steps-list">
                            <li><span data-lang="pt">Ao recarregar o CADClone após fechar, uma barra surge no topo perguntando se deseja restaurar o trabalho anterior.</span><span data-lang="en">When re-opening CADClone, a recovery prompt allows restoring previous session state.</span></li>
                            <li><span data-lang="pt">Você também pode digitar <code>RECOVER</code> a qualquer momento.</span><span data-lang="en">You can also run <code>RECOVER</code> at any time.</span></li>
                        </ol>
                    </div>
                </div>

                <!-- Exportar Imagem PNG -->
                <div class="feature-card" data-keywords="exportar imagem png alta resolucao export exportimg">
                    <div class="card-top">
                        <div class="card-title-group">
                            <div class="card-icon"><i class="fa-solid fa-image"></i></div>
                            <div class="card-name"><span data-lang="pt">Exportar Imagem PNG (EXPORT)</span><span data-lang="en">Export PNG Image (EXPORT)</span></div>
                        </div>
                        <div class="cmd-badges"><kbd>EXPORT</kbd></div>
                    </div>
                    <p class="card-desc">
                        <span data-lang="pt">Gera imagem de alta resolução do desenho técnico para inclusão em relatórios, sites ou apresentações.</span>
                        <span data-lang="en">Renders high-definition raster PNG snapshots of your drawing for presentations and reports.</span>
                    </p>
                </div>

                <!-- Instalar PWA Offline -->
                <div class="feature-card" data-keywords="instalar app pwa offline desktop celular aplicativo chrome edge safari sem internet">
                    <div class="card-top">
                        <div class="card-title-group">
                            <div class="card-icon"><i class="fa-solid fa-mobile-screen-button"></i></div>
                            <div class="card-name"><span data-lang="pt">Instalar Aplicativo (PWA Offline)</span><span data-lang="en">Install App (Offline PWA)</span></div>
                        </div>
                        <div class="cmd-badges"><kbd>Instalar App</kbd> <kbd>PWA</kbd></div>
                    </div>
                    <p class="card-desc">
                        <span data-lang="pt">Instale o CADClone no Windows, macOS, Linux ou celular (Android / iOS) para rodar como aplicativo nativo em tela cheia e com operação 100% offline.</span>
                        <span data-lang="en">Install CADClone onto Windows, macOS, Linux, or Mobile (Android/iOS) to run as a standalone desktop app with full offline capabilities.</span>
                    </p>
                    <div class="steps-box">
                        <div class="steps-box-title"><i class="fa-solid fa-list-ol"></i> <span data-lang="pt">Como Instalar</span><span data-lang="en">How to Install</span></div>
                        <ol class="steps-list">
                            <li><strong><span data-lang="pt">Computador (Chrome / Edge)</span><span data-lang="en">PC / Desktop</span>:</strong> <span data-lang="pt">Clique no botão azul <strong>"Instalar App"</strong> no canto superior direito do cabeçalho (ou no ícone de computador na barra de endereços do navegador) e confirme.</span><span data-lang="en">Click <strong>"Instalar App"</strong> in the top header or the browser install prompt.</span></li>
                            <li><strong><span data-lang="pt">Celular (Android / iOS)</span><span data-lang="en">Mobile</span>:</strong> <span data-lang="pt">No Safari do iPhone/iPad, toque em Compartilhar e selecione <em>"Adicionar à Tela de Início"</em>. No Android, toque em Menu e <em>"Instalar Aplicativo"</em>.</span><span data-lang="en">On iOS Safari: Share > Add to Home Screen. On Android: Menu > Install App.</span></li>
                            <li><strong><span data-lang="pt">Sem Internet</span><span data-lang="en">Offline</span>:</strong> <span data-lang="pt">Uma vez instalado, o aplicativo abre instantaneamente mesmo em locais sem sinal de Wi-Fi ou dados móveis.</span><span data-lang="en">Runs completely offline via background Service Worker caching.</span></li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>

        <!-- 11. TABELA COMPLETA DE ATALHOS & COMANDOS -->
        <section class="tutorial-section" data-category="cheatsheet">
            <div class="section-header">
                <h2><i class="fa-solid fa-keyboard"></i> <span data-lang="pt">11. Tabela Completa de Comandos &amp; Atalhos de Teclado</span><span data-lang="en">11. Complete Shortcuts &amp; AutoCAD Commands Reference</span></h2>
                <span class="section-count"><span data-lang="pt">Referência Rápida</span><span data-lang="en">Quick Cheatsheet</span></span>
            </div>
            
            <div class="table-responsive">
                <table class="cheatsheet-table">
                    <thead>
                        <tr>
                            <th style="width: 140px;"><span data-lang="pt">Comando</span><span data-lang="en">Command</span></th>
                            <th style="width: 130px;"><span data-lang="pt">Atalho</span><span data-lang="en">Shortcut</span></th>
                            <th><span data-lang="pt">Função / O que faz</span><span data-lang="en">Function / Description</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td><code>LINE</code></td><td><kbd>L</kbd></td><td><span data-lang="pt">Desenha linhas e segmentos de retas técnicas com precisão</span><span data-lang="en">Draws technical straight line segments</span></td></tr>
                        <tr><td><code>PLINE</code></td><td><kbd>PL</kbd></td><td><span data-lang="pt">Desenha polilinhas conectadas contínuas (opção 'C' para fechar)</span><span data-lang="en">Draws connected continuous polylines ('C' to close)</span></td></tr>
                        <tr><td><code>RECTANG</code></td><td><kbd>REC</kbd></td><td><span data-lang="pt">Desenha retângulos por dois vértices diagonais opostos</span><span data-lang="en">Draws rectangles by two opposite diagonal corners</span></td></tr>
                        <tr><td><code>CIRCLE</code></td><td><kbd>C</kbd></td><td><span data-lang="pt">Desenha círculos por centro e raio ou diâmetro ('D')</span><span data-lang="en">Draws circles by center and radius or diameter ('D')</span></td></tr>
                        <tr><td><code>ARC</code></td><td><kbd>A</kbd></td><td><span data-lang="pt">Desenha arcos circulares por 3 pontos técnicos</span><span data-lang="en">Draws 3-point technical circular arcs</span></td></tr>
                        <tr><td><code>HATCH</code></td><td><kbd>H</kbd></td><td><span data-lang="pt">Aplica hachuras arquitetônicas (sólido, tijolo, concreto, terra)</span><span data-lang="en">Applies architectural hatch patterns (solid, brick, concrete, earth)</span></td></tr>
                        <tr><td><code>DIMALIGNED</code></td><td><kbd>DAL</kbd> / <kbd>DIM</kbd> / <kbd>COTA</kbd></td><td><span data-lang="pt">Cota técnica alinhada com encaixe magnético nos vértices</span><span data-lang="en">Aligned technical dimension line with endpoint snapping</span></td></tr>
                        <tr><td><code>DIMLINEAR</code></td><td><kbd>DLI</kbd></td><td><span data-lang="pt">Cota técnica estritamente horizontal ou vertical</span><span data-lang="en">Strictly horizontal or vertical dimension line</span></td></tr>
                        <tr><td><code>DIMSCALE</code></td><td><kbd>DIMSCALE</kbd></td><td><span data-lang="pt">Ajusta o fator multiplicador global de escala das cotas</span><span data-lang="en">Sets global dimension scale multiplier factor</span></td></tr>
                        <tr><td><code>DIMTXT</code></td><td><kbd>DIMTXT</kbd></td><td><span data-lang="pt">Define a altura padrão da fonte da cota em metros (ex: 0.22m)</span><span data-lang="en">Sets default dimension text height in meters (e.g. 0.22m)</span></td></tr>
                        <tr><td><code>DIMSTYLE</code></td><td><kbd>D</kbd> / <kbd>DIMSTYLE</kbd></td><td><span data-lang="pt">Abre o painel de propriedades para ajuste de escala e fonte da cota</span><span data-lang="en">Opens properties panel for dimension style and text sizing</span></td></tr>
                        <tr><td><code>PROPERTIES</code></td><td><kbd>Ctrl+1</kbd> / <kbd>PR</kbd></td><td><span data-lang="pt">Abre/fecha a Paleta de Propriedades Rápidas na lateral</span><span data-lang="en">Toggles Quick Properties inspector panel on the right</span></td></tr>
                        <tr><td><code>MOVE</code></td><td><kbd>M</kbd></td><td><span data-lang="pt">Move as entidades selecionadas de um ponto base ao destino</span><span data-lang="en">Moves selected entities from base point to target</span></td></tr>
                        <tr><td><code>COPY</code></td><td><kbd>CO</kbd> / <kbd>CP</kbd></td><td><span data-lang="pt">Cria cópias duplicadas das entidades selecionadas</span><span data-lang="en">Duplicates selected entities preserving originals</span></td></tr>
                        <tr><td><code>ROTATE</code></td><td><kbd>RO</kbd></td><td><span data-lang="pt">Gira as entidades selecionadas em torno de um ponto pivô</span><span data-lang="en">Rotates selected entities around a pivot center</span></td></tr>
                        <tr><td><code>SCALE</code></td><td><kbd>SC</kbd></td><td><span data-lang="pt">Escala os objetos por um fator multiplicador (ex: 2 para dobro)</span><span data-lang="en">Resizes entities by a numerical scale factor</span></td></tr>
                        <tr><td><code>MIRROR</code></td><td><kbd>MI</kbd></td><td><span data-lang="pt">Espelha objetos simetricamente em torno de um eixo de 2 pontos</span><span data-lang="en">Mirrors objects symmetrically across an axis of 2 points</span></td></tr>
                        <tr><td><code>OFFSET</code></td><td><kbd>O</kbd></td><td><span data-lang="pt">Gera linhas paralelas com distância métrica fixa (ex: 0.15m)</span><span data-lang="en">Generates parallel offset lines at set metric distance</span></td></tr>
                        <tr><td><code>TRIM</code></td><td><kbd>TR</kbd></td><td><span data-lang="pt">Apara e corta sobras de linhas em cruzamentos e arestas</span><span data-lang="en">Trims and cuts excess overhang lines at intersections</span></td></tr>
                        <tr><td><code>EXTEND</code></td><td><kbd>EX</kbd></td><td><span data-lang="pt">Estende uma linha até encontrar o próximo obstáculo</span><span data-lang="en">Extends a line to reach the nearest intersecting boundary</span></td></tr>
                        <tr><td><code>FILLET</code></td><td><kbd>F</kbd></td><td><span data-lang="pt">Concorda e fecha cantos vivos (raio 0) ou cantos arredondados</span><span data-lang="en">Connects sharp corners (radius 0) or fillets curves</span></td></tr>
                        <tr><td><code>CHAMFER</code></td><td><kbd>CHA</kbd></td><td><span data-lang="pt">Chanfra o encontro de duas linhas em ângulo reto</span><span data-lang="en">Chamfers intersection of two lines diagonally</span></td></tr>
                        <tr><td><code>EXPLODE</code></td><td><kbd>X</kbd></td><td><span data-lang="pt">Desagrupa blocos arquitetônicos ou quebra polilinhas em retas</span><span data-lang="en">Explodes blocks or polylines into individual segments</span></td></tr>
                        <tr><td><code>ERASE</code></td><td><kbd>E</kbd> / <kbd>Delete</kbd></td><td><span data-lang="pt">Apaga permanentemente as entidades selecionadas</span><span data-lang="en">Permanently deletes selected entities</span></td></tr>
                        <tr><td><code>INSERT</code></td><td><kbd>I</kbd></td><td><span data-lang="pt">Abre a Biblioteca de Blocos Arquitetônicos &amp; Civis ABNT</span><span data-lang="en">Opens ABNT Architectural &amp; Engineering Block Library</span></td></tr>
                        <tr><td><code>LAYER</code></td><td><kbd>LA</kbd></td><td><span data-lang="pt">Abre o Gerenciador de Camadas (cores, lâmpada, trava)</span><span data-lang="en">Opens Layer Properties Manager (colors, lock, hide)</span></td></tr>
                        <tr><td><code>LTSCALE</code></td><td><kbd>LTS</kbd></td><td><span data-lang="pt">Ajusta a escala dos tipos de linha (tracejado, centro, ponto)</span><span data-lang="en">Sets global scale for dashed, center and hidden linetypes</span></td></tr>
                        <tr><td><code>PDFATTACH</code></td><td><code>PDFATTACH</code></td><td><span data-lang="pt">Anexa uma prancha PDF sob o desenho como calco técnico</span><span data-lang="en">Attaches a PDF drawing underlay under the model</span></td></tr>
                        <tr><td><code>IMAGEATTACH</code></td><td><code>IMAGEATTACH</code></td><td><span data-lang="pt">Anexa uma imagem PNG/JPG sob o desenho como calco</span><span data-lang="en">Attaches a PNG/JPG raster image underlay</span></td></tr>
                        <tr><td><code>CALIBRATE</code></td><td><code>CALIBRATE</code></td><td><span data-lang="pt">Calibra a escala métrica real 1:1 do calco PDF por 2 pontos</span><span data-lang="en">Calibrates 1:1 real-world metric scale of PDF by 2 points</span></td></tr>
                        <tr><td><code>ZOOM EXTENTS</code></td><td><kbd>Z E</kbd> / <kbd>Scroll 2x</kbd></td><td><span data-lang="pt">Enquadra todo o modelo no centro da tela</span><span data-lang="en">Fits all drawing elements into viewport bounds</span></td></tr>
                        <tr><td><code>REGEN</code></td><td><kbd>RE</kbd></td><td><span data-lang="pt">Regenera e redesenha a área gráfica do modelo</span><span data-lang="en">Regenerates and redraws canvas display model</span></td></tr>
                        <tr><td><code>QSAVE</code></td><td><kbd>Ctrl+S</kbd></td><td><span data-lang="pt">Salva o projeto em arquivo DXF nativo no seu computador</span><span data-lang="en">Saves project as standard DXF CAD file</span></td></tr>
                        <tr><td><code>PLOT</code></td><td><kbd>PLOT</kbd> / <kbd>PRINT</kbd></td><td><span data-lang="pt">Exporta pranchas PDF vetoriais normalizadas A4/A3/A2/A1</span><span data-lang="en">Exports standardized vector PDF drawing sheets</span></td></tr>
                        <tr><td><code>UNDO</code></td><td><kbd>Ctrl+Z</kbd> / <kbd>U</kbd></td><td><span data-lang="pt">Desfaz a última ação executada</span><span data-lang="en">Undoes the last action</span></td></tr>
                        <tr><td><code>REDO</code></td><td><kbd>Ctrl+Y</kbd></td><td><span data-lang="pt">Refaz a ação desfeita</span><span data-lang="en">Redoes previously undone action</span></td></tr>
                        <tr><td><code>CANCEL</code></td><td><kbd>ESC</kbd></td><td><span data-lang="pt">Cancela comando ativo e limpa seleção</span><span data-lang="en">Cancels current command and clears selection</span></td></tr>
                        <tr><td><code>REPEAT</code></td><td><kbd>ESPAÇO</kbd> / <kbd>ENTER</kbd></td><td><span data-lang="pt">Repete o último comando executado</span><span data-lang="en">Repeats last executed command</span></td></tr>
                        <tr><td><code>OSNAP TOGGLE</code></td><td><kbd>F3</kbd></td><td><span data-lang="pt">Ativa / Desativa o Encaixe nos Objetos</span><span data-lang="en">Toggles Object Snap on/off</span></td></tr>
                        <tr><td><code>GRID TOGGLE</code></td><td><kbd>F7</kbd></td><td><span data-lang="pt">Ativa / Desativa a Grade Métrica de Fundo</span><span data-lang="en">Toggles background metric grid on/off</span></td></tr>
                        <tr><td><code>ORTHO TOGGLE</code></td><td><kbd>F8</kbd></td><td><span data-lang="pt">Ativa / Desativa a Trava Ortogonal a 90° e 180°</span><span data-lang="en">Toggles Orthogonal 90° mode on/off</span></td></tr>
                        <tr><td><code>SNAP TOGGLE</code></td><td><kbd>F9</kbd></td><td><span data-lang="pt">Ativa / Desativa o Encaixe na Grade</span><span data-lang="en">Toggles Snap-to-grid on/off</span></td></tr>
                        <tr><td><code>POLAR TOGGLE</code></td><td><kbd>F10</kbd></td><td><span data-lang="pt">Ativa / Desativa o Rastreamento Polar Magnético</span><span data-lang="en">Toggles Polar Tracking on/off</span></td></tr>
                        <tr><td><code>DYNAMIC INPUT</code></td><td><kbd>F12</kbd> / <kbd>DYN</kbd></td><td><span data-lang="pt">Ativa / Desativa a Entrada Dinâmica e HUD na mira</span><span data-lang="en">Toggles Dynamic Input and crosshair HUD on/off</span></td></tr>
                        <tr><td><code>DIST</code></td><td><kbd>DI</kbd> / <kbd>DIST</kbd></td><td><span data-lang="pt">Mede a distância geométrica, deltas X/Y e ângulo sem cotar</span><span data-lang="en">Measures distance, delta X/Y and angle without dimensioning</span></td></tr>
                        <tr><td><code>BLOCK</code></td><td><kbd>B</kbd> / <kbd>BLOCK</kbd></td><td><span data-lang="pt">Cria um bloco com nome a partir dos objetos selecionados</span><span data-lang="en">Creates named block from selected entities</span></td></tr>
                        <tr><td><code>GROUP</code></td><td><kbd>G</kbd> / <kbd>GROUP</kbd></td><td><span data-lang="pt">Agrupa objetos rapidamente para movimentação conjunta</span><span data-lang="en">Groups selected entities for joint manipulation</span></td></tr>
                        <tr><td><code>UNGROUP</code></td><td><kbd>UN</kbd> / <kbd>UNGROUP</kbd></td><td><span data-lang="pt">Desagrupa objetos de um grupo selecionado</span><span data-lang="en">Ungroups selected entity cluster</span></td></tr>
                        <tr><td><code>SAMPLE</code></td><td><kbd>SAMPLE</kbd> / <kbd>PLANTA</kbd></td><td><span data-lang="pt">Carrega a Planta Baixa Residencial Completa de 25x10m</span><span data-lang="en">Loads full 25x10m Residential Sample Floor Plan</span></td></tr>
                        <tr><td><code>NEW TAB</code></td><td><kbd>Ctrl+N</kbd></td><td><span data-lang="pt">Abre uma nova aba de desenho limpa (Drawing.dwg)</span><span data-lang="en">Opens a new blank drawing tab</span></td></tr>
                        <tr><td><code>CLOSE TAB</code></td><td><kbd>Ctrl+W</kbd></td><td><span data-lang="pt">Fecha a aba de desenho ativa atual</span><span data-lang="en">Closes the active drawing tab</span></td></tr>
                        <tr><td><code>CONSOLE EXPAND</code></td><td><kbd>F2</kbd></td><td><span data-lang="pt">Expande ou recolhe o histórico completo da linha de comandos</span><span data-lang="en">Toggles expanded command line history window</span></td></tr>
                        <tr><td><code>COMMAND DOCK</code></td><td><kbd>Ctrl+9</kbd></td><td><span data-lang="pt">Oculta ou restaura a barra de comando inferior</span><span data-lang="en">Toggles bottom command dock visibility</span></td></tr>
                    </tbody>
                </table>
            </div>
        </section>

    </main>

    <button type="button" class="btn-top" id="btnScrollTop" onclick="scrollToTop()" title="Voltar ao Topo">
        <i class="fa-solid fa-arrow-up"></i>
    </button>

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
                <span data-lang="pt">Privacidade &amp; LGPD</span>
                <span data-lang="en">Privacy &amp; LGPD</span>
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
                <span data-lang="pt">Suporte &amp; FAQ</span>
                <span data-lang="en">Support &amp; FAQ</span>
            </a>
            <span class="sep">•</span>
            <a href="tutorial.php" class="footer-link active">
                <i class="fa-solid fa-book-open"></i> 
                <span data-lang="pt">Tutorial &amp; Guia</span>
                <span data-lang="en">Tutorial &amp; Guide</span>
            </a>
        </div>
        <div class="footer-copyright">
            <span data-lang="pt">&copy; <?= date('Y') ?> <a href="https://4u.ia.br" target="_blank">4U.IA.BR</a> • CADClone • Todos os direitos reservados.</span>
            <span data-lang="en">&copy; <?= date('Y') ?> <a href="https://4u.ia.br" target="_blank">4U.IA.BR</a> • CADClone • All rights reserved.</span>
        </div>
    </footer>

    <script>
        // Language Toggle System
        function setPageLang(lang) {
            if (lang !== 'pt' && lang !== 'en') lang = 'pt';
            document.documentElement.setAttribute('data-lang', lang);
            try { localStorage.setItem('cadclone_lang', lang); } catch (e) {}
            const ptBtn = document.getElementById('btnLangPt');
            const enBtn = document.getElementById('btnLangEn');
            if (ptBtn) ptBtn.classList.toggle('active', lang === 'pt');
            if (enBtn) enBtn.classList.toggle('active', lang === 'en');

            const searchInput = document.getElementById('tutorialSearch');
            if (searchInput) {
                const ph = lang === 'en' ? searchInput.getAttribute('data-placeholder-en') : searchInput.getAttribute('data-placeholder-pt');
                if (ph) searchInput.setAttribute('placeholder', ph);
            }
        }

        // Category Filter
        let currentCategory = 'all';

        function setCategoryFilter(cat, btn) {
            currentCategory = cat;
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            if (btn) btn.classList.add('active');

            const sections = document.querySelectorAll('.tutorial-section');
            sections.forEach(sec => {
                const secCat = sec.getAttribute('data-category');
                if (cat === 'all' || secCat === cat) {
                    sec.style.display = 'block';
                } else {
                    sec.style.display = 'none';
                }
            });

            // If a specific category is selected, scroll smoothly to it
            if (cat !== 'all') {
                const targetSec = document.querySelector(`.tutorial-section[data-category="${cat}"]`);
                if (targetSec) {
                    targetSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        }

        // Live Search Filter
        function filterTutorialCards() {
            const query = (document.getElementById('tutorialSearch').value || '').trim().toLowerCase();
            const cards = document.querySelectorAll('.feature-card');
            const rows = document.querySelectorAll('.cheatsheet-table tbody tr');

            if (!query) {
                cards.forEach(c => c.style.display = 'flex');
                rows.forEach(r => r.style.display = '');
                setCategoryFilter(currentCategory);
                return;
            }

            // Always show all sections when searching
            document.querySelectorAll('.tutorial-section').forEach(sec => sec.style.display = 'block');

            cards.forEach(c => {
                const keywords = (c.getAttribute('data-keywords') || '').toLowerCase();
                const text = c.textContent.toLowerCase();
                if (keywords.includes(query) || text.includes(query)) {
                    c.style.display = 'flex';
                } else {
                    c.style.display = 'none';
                }
            });

            rows.forEach(r => {
                const rowText = r.textContent.toLowerCase();
                if (rowText.includes(query)) {
                    r.style.display = '';
                } else {
                    r.style.display = 'none';
                }
            });
        }

        // Scroll to Top Button
        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        window.addEventListener('scroll', () => {
            const btn = document.getElementById('btnScrollTop');
            if (btn) {
                if (window.scrollY > 300) {
                    btn.classList.add('visible');
                } else {
                    btn.classList.remove('visible');
                }
            }
        });

        // Initialize Language on Load
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
