<?php
/**
 * CADClone — AutoCAD 2D Web para Engenharia Civil & Arquitetura
 * 100% Client-Side Engine + PWA Offline + AutoCAD Look & Feel
 */
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>CADClone — AutoCAD 2D Web | Engenharia Civil</title>
    
    <!-- Meta & SEO -->
    <meta name="description" content="CADClone: Software CAD 2D completo no navegador com interface e atalhos idênticos ao AutoCAD original para engenharia civil e arquitetura.">
    <meta name="theme-color" content="#1e1e1e">
    
    <!-- PWA Manifest & Icons -->
    <link rel="manifest" href="manifest.json?v=1.4.1">
    <link rel="shortcut icon" type="image/x-icon" href="favicon.ico?v=1.4.1">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png?v=1.4.1">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png?v=1.4.1">
    <link rel="icon" type="image/png" sizes="192x192" href="icon-192.png?v=1.4.1">
    <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png?v=1.4.1">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">

    <!-- Stylesheet -->
    <style>
        :root {
            --cad-bg: #1e1e1e;
            --cad-darker: #16181d;
            --cad-surface: #242930;
            --cad-surface-hover: #2e353f;
            --cad-border: #383f4a;
            --cad-text: #e2e8f0;
            --cad-text-muted: #94a3b8;
            --cad-accent: #0284c7;
            --cad-accent-hover: #0369a1;
            --cad-command-bg: rgba(22, 24, 29, 0.95);
            --cad-green: #22c55e;
            --cad-yellow: #eab308;
            --cad-cyan: #06b6d4;
            --cad-red: #ef4444;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            user-select: none;
            -webkit-user-select: none;
        }

        /* Clean Dark Scrollbars */
        ::-webkit-scrollbar {
            width: 6px;
            height: 6px;
        }
        ::-webkit-scrollbar-track {
            background: transparent;
        }
        ::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.15);
            border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.3);
        }

        body, html {
            width: 100%;
            height: 100%;
            overflow: hidden;
            background-color: var(--cad-bg);
            color: var(--cad-text);
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            font-size: 13px;
        }

        /* App Layout Grid */
        #cadApp {
            display: flex;
            flex-direction: column;
            width: 100vw;
            height: 100vh;
            overflow: hidden;
        }

        /* 1. AutoCAD Top Title Bar */
        .cad-titlebar {
            height: 38px;
            background: var(--cad-darker);
            border-bottom: 1px solid var(--cad-border);
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 10px;
            font-size: 12px;
            z-index: 100;
        }

        .cad-titlebar-left {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .cad-logo-box {
            display: flex;
            align-items: center;
            gap: 8px;
            font-weight: 700;
            color: #ffffff;
            letter-spacing: 0.5px;
        }

        .cad-logo-badge {
            width: 24px;
            height: 24px;
            background: #e11d48;
            color: #ffffff;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 900;
            font-size: 14px;
            box-shadow: 0 2px 4px rgba(225, 29, 72, 0.4);
        }

        .cad-logo-img {
            width: 24px;
            height: 24px;
            border-radius: 4px;
            object-fit: cover;
            box-shadow: 0 0 8px rgba(56, 189, 248, 0.4);
            display: block;
        }

        .quick-access-toolbar {
            display: flex;
            align-items: center;
            gap: 4px;
            background: rgba(255, 255, 255, 0.05);
            padding: 2px 6px;
            border-radius: 4px;
            border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .qa-btn {
            background: transparent;
            border: none;
            color: var(--cad-text-muted);
            padding: 4px 6px;
            border-radius: 3px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.15s ease;
        }

        .qa-btn:hover {
            background: var(--cad-surface-hover);
            color: #ffffff;
        }

        .qa-btn svg {
            width: 15px;
            height: 15px;
        }

        .cad-doc-title {
            color: var(--cad-text-muted);
            font-size: 12px;
            font-family: 'JetBrains Mono', monospace;
        }

        .cad-titlebar-right {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        /* PWA Install Button */
        .btn-install-pwa {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: linear-gradient(135deg, rgba(56, 189, 248, 0.18) 0%, rgba(14, 165, 233, 0.3) 100%);
            border: 1px solid rgba(56, 189, 248, 0.5);
            color: #38bdf8;
            padding: 3px 10px;
            border-radius: 4px;
            font-size: 11px;
            font-weight: 700;
            font-family: inherit;
            cursor: pointer;
            transition: all 0.2s ease;
            box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
            white-space: nowrap;
        }

        .btn-install-pwa:hover {
            background: linear-gradient(135deg, rgba(56, 189, 248, 0.35) 0%, rgba(14, 165, 233, 0.5) 100%);
            border-color: #38bdf8;
            color: #ffffff;
            box-shadow: 0 0 10px rgba(56, 189, 248, 0.5);
            transform: translateY(-1px);
        }

        .btn-install-pwa svg {
            color: inherit;
        }

        .btn-install-pwa.installed {
            display: none !important;
        }

        /* Language Switcher (PT / EN) */
        .lang-switch-box {
            display: flex;
            align-items: center;
            background: rgba(15, 23, 42, 0.75);
            border: 1px solid rgba(255, 255, 255, 0.18);
            border-radius: 4px;
            padding: 2px;
            gap: 2px;
        }

        .lang-btn {
            background: transparent;
            border: none;
            color: #94a3b8;
            font-size: 11px;
            font-weight: 700;
            font-family: inherit;
            padding: 2px 7px;
            border-radius: 3px;
            cursor: pointer;
            transition: all 0.15s ease;
            line-height: 1.2;
            letter-spacing: 0.5px;
        }

        .lang-btn:hover {
            color: #f8fafc;
            background: rgba(255, 255, 255, 0.1);
        }

        .lang-btn.active {
            background: #2563eb;
            color: #ffffff;
            box-shadow: 0 1px 4px rgba(37, 99, 235, 0.4);
        }

        /* 2. AutoCAD Ribbon (Tabs & Toolbars) */
        .cad-ribbon {
            background: var(--cad-surface);
            border-bottom: 1px solid var(--cad-border);
            display: flex;
            flex-direction: column;
            z-index: 90;
            position: relative;
        }

        .ribbon-tabs {
            display: flex;
            background: var(--cad-darker);
            border-bottom: 1px solid var(--cad-border);
            padding: 0 8px;
            overflow-x: auto;
            overflow-y: hidden;
            scrollbar-width: none !important;
            -ms-overflow-style: none !important;
        }

        .ribbon-tabs::-webkit-scrollbar {
            display: none !important;
            width: 0 !important;
            height: 0 !important;
        }

        .ribbon-tab {
            padding: 6px 14px;
            font-size: 12px;
            color: var(--cad-text-muted);
            cursor: pointer;
            border-top: 2px solid transparent;
            font-weight: 500;
            transition: all 0.15s;
        }

        .ribbon-tab:hover {
            color: #ffffff;
            background: rgba(255, 255, 255, 0.03);
        }

        .ribbon-tab.active {
            color: #ffffff;
            background: var(--cad-surface);
            border-top: 2px solid var(--cad-accent);
            font-weight: 600;
        }

        .ribbon-panels {
            display: flex;
            align-items: stretch;
            padding: 4px 8px;
            gap: 5px;
            overflow-x: auto;
            overflow-y: hidden;
            min-height: 82px;
            scrollbar-width: none !important;
            -ms-overflow-style: none !important;
        }

        .ribbon-panels::-webkit-scrollbar {
            display: none !important;
            width: 0 !important;
            height: 0 !important;
        }

        .ribbon-scroll-nav {
            position: absolute;
            top: 29px;
            bottom: 0;
            width: 22px;
            background: rgba(17, 19, 24, 0.94);
            border: none;
            color: #94a3b8;
            cursor: pointer;
            display: none;
            align-items: center;
            justify-content: center;
            z-index: 96;
            transition: all 0.15s ease;
        }
        .ribbon-scroll-nav:hover {
            color: #ffffff;
            background: #0284c7;
        }
        .ribbon-nav-left {
            left: 0;
            border-right: 1px solid rgba(255, 255, 255, 0.1);
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
        }
        .ribbon-nav-right {
            right: 0;
            border-left: 1px solid rgba(255, 255, 255, 0.1);
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
        }

        .ribbon-panel {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            background: rgba(0, 0, 0, 0.18);
            padding: 3px 5px;
            border-radius: 4px;
            border-right: 1px solid var(--cad-border);
            border-left: 1px solid rgba(255, 255, 255, 0.05);
            flex-shrink: 0;
        }

        .panel-tools {
            display: flex;
            gap: 3px;
            align-items: center;
        }

        .panel-title {
            text-align: center;
            font-size: 9.5px;
            color: var(--cad-text-muted);
            text-transform: uppercase;
            letter-spacing: 0.4px;
            margin-top: 3px;
        }

        .tool-btn-large {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 3px;
            background: transparent;
            border: 1px solid transparent;
            color: var(--cad-text);
            padding: 3px 5px;
            border-radius: 3px;
            cursor: pointer;
            min-width: 44px;
            height: 54px;
            transition: all 0.15s;
        }

        .tool-btn-large:hover {
            background: var(--cad-surface-hover);
            border-color: rgba(255, 255, 255, 0.1);
        }

        .tool-btn-large:active, .tool-btn-large.active {
            background: rgba(2, 132, 199, 0.2);
            border-color: var(--cad-accent);
            color: #ffffff;
        }

        .tool-btn-large svg {
            width: 20px;
            height: 20px;
        }

        .tool-btn-large span {
            font-size: 10px;
            text-align: center;
            white-space: nowrap;
        }

        .tool-group-small {
            display: grid;
            grid-template-rows: repeat(3, 19px);
            grid-auto-flow: column;
            gap: 2px 3px;
        }

        .tool-btn-small {
            display: flex;
            align-items: center;
            gap: 4px;
            background: transparent;
            border: 1px solid transparent;
            color: var(--cad-text);
            padding: 1px 5px;
            border-radius: 3px;
            cursor: pointer;
            font-size: 10px;
            height: 19px;
            transition: all 0.15s;
            white-space: nowrap;
        }

        .tool-btn-small:hover {
            background: var(--cad-surface-hover);
            border-color: rgba(255, 255, 255, 0.1);
        }

        .tool-btn-small svg {
            width: 12px;
            height: 12px;
            flex-shrink: 0;
        }

        /* Layer Selector Bar inside Ribbon */
        .layer-control-panel {
            display: flex;
            flex-direction: column;
            gap: 4px;
            min-width: 165px;
            max-width: 180px;
        }

        .layer-dropdown-row {
            display: flex;
            align-items: center;
            gap: 5px;
        }

        .layer-select {
            background: var(--cad-darker);
            color: #ffffff;
            border: 1px solid var(--cad-border);
            padding: 3px 6px;
            border-radius: 3px;
            font-size: 11px;
            flex: 1;
            outline: none;
            cursor: pointer;
        }

        @media (max-width: 1550px) {
            .tool-btn-large {
                min-width: 38px;
                padding: 2px 3px;
            }
            .tool-btn-large span {
                font-size: 9px;
            }
            .tool-btn-small {
                font-size: 9.5px;
                padding: 1px 4px;
            }
            .layer-control-panel {
                min-width: 145px;
            }
            .ribbon-panels {
                gap: 4px;
            }
        }

        @media (max-width: 1366px) {
            .tool-btn-large {
                min-width: 34px;
                padding: 2px 2px;
            }
            .tool-btn-large span {
                font-size: 8.5px;
            }
            .tool-btn-small {
                font-size: 9px;
                padding: 1px 3px;
            }
            .layer-control-panel {
                min-width: 135px;
            }
            .ribbon-panels {
                gap: 3px;
                padding: 2px 4px;
            }
        }

        .layer-color-indicator {
            width: 16px;
            height: 16px;
            border-radius: 3px;
            border: 1px solid #ffffff;
        }

        /* 2.5 AutoCAD Drawing File Tabs Bar (Horizontal Bar below Ribbon) */
        .cad-file-tabs-bar {
            height: 29px;
            background: #181a1f;
            border-bottom: 1px solid #111317;
            display: flex;
            align-items: flex-end;
            padding: 0 8px 0 4px;
            user-select: none;
            flex-shrink: 0;
            z-index: 10;
            position: relative;
        }

        /* Start Tab (Fixed on far left) */
        .file-tab-start {
            height: 27px;
            padding: 0 12px;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: #1e2229;
            color: #94a3b8;
            border: 1px solid #2d333f;
            border-bottom: none;
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
            font-size: 11px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.15s ease;
            margin-right: 4px;
            white-space: nowrap;
        }
        .file-tab-start:hover {
            background: #282f3a;
            color: #f1f5f9;
        }
        .file-tab-start.active {
            background: #242930;
            color: #38bdf8;
            border-top: 2px solid #0284c7;
        }
        .file-tab-start svg {
            width: 13px;
            height: 13px;
            flex-shrink: 0;
        }

        /* Tabs Scrollable Container */
        .file-tabs-scroll {
            display: flex;
            align-items: flex-end;
            overflow-x: auto;
            overflow-y: hidden;
            scrollbar-width: none !important;
            -ms-overflow-style: none !important;
            max-width: calc(100vw - 120px);
        }
        .file-tabs-scroll::-webkit-scrollbar {
            display: none !important;
            width: 0 !important;
            height: 0 !important;
        }

        .file-tabs-list {
            display: flex;
            align-items: flex-end;
            gap: 2px;
        }

        /* Drawing Tab */
        .file-tab {
            height: 27px;
            padding: 0 8px 0 10px;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: #1b1e24;
            color: #94a3b8;
            border: 1px solid #282e38;
            border-bottom: none;
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
            font-size: 11px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.15s ease;
            max-width: 220px;
            min-width: 100px;
            position: relative;
            white-space: nowrap;
        }
        .file-tab:hover {
            background: #232832;
            color: #e2e8f0;
        }
        .file-tab.active {
            background: #242930;
            color: #ffffff;
            border-color: #383f4a;
            border-top: 2px solid #0284c7;
            font-weight: 600;
        }
        .file-tab-icon {
            width: 12px;
            height: 12px;
            opacity: 0.75;
            flex-shrink: 0;
        }
        .file-tab.active .file-tab-icon {
            opacity: 1;
            color: #38bdf8;
        }
        .file-tab-title {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            flex: 1;
        }
        .file-tab-dirty {
            color: #f59e0b;
            font-weight: 700;
            font-size: 13px;
            line-height: 1;
            margin-right: -2px;
        }
        .file-tab-close {
            width: 16px;
            height: 16px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 3px;
            font-size: 11px;
            color: #94a3b8;
            opacity: 0.6;
            margin-left: 2px;
            cursor: pointer;
            transition: all 0.12s ease;
            flex-shrink: 0;
        }
        .file-tab:hover .file-tab-close,
        .file-tab.active .file-tab-close {
            opacity: 1;
        }
        .file-tab-close:hover {
            background: #ef4444;
            color: #ffffff;
            opacity: 1;
        }

        /* Add Tab Button (+) */
        .file-tab-add {
            width: 24px;
            height: 24px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: transparent;
            border: 1px solid transparent;
            border-radius: 4px;
            color: #94a3b8;
            cursor: pointer;
            margin-left: 4px;
            margin-bottom: 2px;
            transition: all 0.15s ease;
            flex-shrink: 0;
        }
        .file-tab-add:hover {
            background: #242930;
            border-color: #383f4a;
            color: #38bdf8;
        }

        /* Start Dashboard Modal Cards */
        .start-dashboard-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 14px;
            margin-top: 16px;
        }
        .start-card {
            background: #1a1d24;
            border: 1px solid #2d333f;
            border-radius: 8px;
            padding: 16px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            cursor: pointer;
            transition: all 0.2s ease;
            text-align: left;
        }
        .start-card:hover {
            background: #242930;
            border-color: #0284c7;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        }
        .start-card-icon {
            width: 36px;
            height: 36px;
            border-radius: 6px;
            background: rgba(2, 132, 199, 0.15);
            color: #38bdf8;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 12px;
        }
        .start-card-title {
            font-size: 13px;
            font-weight: 600;
            color: #f1f5f9;
            margin-bottom: 4px;
        }
        .start-card-desc {
            font-size: 11px;
            color: #94a3b8;
            line-height: 1.4;
        }
        .start-open-docs {
            margin-top: 20px;
            border-top: 1px solid #2d333f;
            padding-top: 14px;
        }
        .start-open-docs-title {
            font-size: 12px;
            font-weight: 600;
            color: #94a3b8;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 10px;
        }
        .start-doc-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 8px 12px;
            background: #181a1f;
            border: 1px solid #282e38;
            border-radius: 6px;
            margin-bottom: 6px;
            cursor: pointer;
            transition: all 0.15s ease;
        }
        .start-doc-item:hover {
            background: #222731;
            border-color: #383f4a;
        }
        .start-doc-item-title {
            font-size: 12px;
            font-weight: 500;
            color: #e2e8f0;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .start-doc-item-badge {
            font-size: 10px;
            padding: 2px 6px;
            border-radius: 3px;
            background: #0284c7;
            color: #ffffff;
            font-weight: 600;
        }

        /* 3. Viewport (Model Space Canvas) */
        .cad-viewport-container {
            flex: 1;
            position: relative;
            background: var(--cad-bg);
            overflow: hidden;
            cursor: crosshair;
        }

        #cadCanvas {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: block;
        }

        /* Dynamic Input HUD Overlay (F12) */
        .dynamic-input-hud {
            position: absolute;
            pointer-events: auto;
            z-index: 65;
            background: rgba(22, 27, 34, 0.94);
            border: 1px solid rgba(2, 132, 199, 0.85);
            box-shadow: 0 6px 18px rgba(0, 0, 0, 0.65), 0 0 0 1px rgba(255, 255, 255, 0.1);
            border-radius: 4px;
            padding: 3px 6px;
            backdrop-filter: blur(6px);
            font-family: 'JetBrains Mono', monospace;
            display: none;
        }

        .dyn-field-group {
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .dyn-input {
            background: rgba(15, 23, 42, 0.85);
            border: 1px solid #334155;
            border-radius: 3px;
            color: #f8fafc;
            font-family: 'JetBrains Mono', monospace;
            font-size: 11.5px;
            font-weight: 500;
            padding: 2px 5px;
            outline: none;
            width: 68px;
            text-align: right;
            transition: all 0.15s;
        }

        .dyn-input:focus {
            border-color: #38bdf8;
            background: rgba(2, 132, 199, 0.25);
            box-shadow: 0 0 4px rgba(56, 189, 248, 0.5);
        }

        .dyn-input.locked {
            border-color: #eab308;
            color: #fef08a;
            background: rgba(234, 179, 8, 0.15);
        }

        .dyn-tab-hint {
            font-size: 9.5px;
            color: #94a3b8;
            background: rgba(255, 255, 255, 0.08);
            padding: 1px 4px;
            border-radius: 2px;
            cursor: pointer;
            user-select: none;
            border: 1px solid rgba(255, 255, 255, 0.06);
        }

        .dyn-tab-hint:hover {
            color: #ffffff;
            background: rgba(255, 255, 255, 0.15);
        }

        .dyn-angle-container {
            display: flex;
            align-items: center;
            gap: 2px;
        }

        .dyn-angle-prefix {
            color: #38bdf8;
            font-size: 11px;
            font-weight: bold;
        }

        /* ViewCube (Top-Right classic AutoCAD) */
        .cad-viewcube {
            position: absolute;
            top: 16px;
            right: 16px;
            width: 64px;
            height: 64px;
            background: rgba(36, 41, 48, 0.7);
            border: 1px solid var(--cad-border);
            border-radius: 6px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            backdrop-filter: blur(4px);
            z-index: 50;
            cursor: default;
        }

        .cad-viewcube-face {
            font-weight: 700;
            font-size: 12px;
            color: #ffffff;
            letter-spacing: 0.5px;
        }

        .cad-viewcube-wcs {
            font-size: 9px;
            color: var(--cad-cyan);
            margin-top: 2px;
        }

        /* Model / Layout Tabs - integrated in Status Bar at bottom */
        .status-left-group {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-shrink: 0;
        }

        .viewport-layout-tabs {
            display: inline-flex;
            align-items: center;
            background: rgba(15, 23, 42, 0.95);
            border: 1px solid var(--cad-border);
            border-radius: 4px;
            overflow: hidden;
            height: 22px;
        }

        .layout-tab {
            padding: 0 10px;
            height: 100%;
            display: inline-flex;
            align-items: center;
            font-size: 11px;
            color: var(--cad-text-muted);
            cursor: pointer;
            border: none;
            background: transparent;
            border-right: 1px solid var(--cad-border);
            transition: all 0.15s ease;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            white-space: nowrap;
            user-select: none;
        }

        .layout-tab:last-child {
            border-right: none;
        }

        .layout-tab:hover {
            color: #ffffff;
            background: rgba(255, 255, 255, 0.08);
        }

        .layout-tab.active {
            background: rgba(2, 132, 199, 0.28);
            color: #38bdf8;
            font-weight: 700;
        }

        /* 4. Docked / Collapsible AutoCAD Command Line */
        .cad-command-dock {
            position: absolute;
            bottom: 0px;
            left: 50%;
            transform: translateX(-50%);
            width: min(840px, 94%);
            background: rgba(22, 27, 34, 0.96);
            border: 1px solid var(--cad-border);
            border-bottom: none;
            border-radius: 6px 6px 0 0;
            box-shadow: 0 -4px 22px rgba(0, 0, 0, 0.65);
            display: flex;
            flex-direction: column;
            z-index: 70;
            backdrop-filter: blur(10px);
            transition: transform 0.22s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease;
        }

        .cad-command-dock.minimized {
            transform: translateX(-50%) translateY(100%);
            opacity: 0;
            pointer-events: none;
        }

        .command-history-pane {
            max-height: 0px;
            overflow-y: auto;
            padding: 0 12px;
            font-family: 'JetBrains Mono', monospace;
            font-size: 11px;
            color: var(--cad-text-muted);
            border-bottom: none;
            display: flex;
            flex-direction: column;
            gap: 2px;
            opacity: 0;
            transition: max-height 0.22s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.18s ease, padding 0.18s ease;
        }

        .command-history-pane.expanded {
            max-height: 120px;
            padding: 6px 12px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            opacity: 1;
        }

        .history-line {
            line-height: 1.4;
            word-break: break-all;
        }

        .command-input-row {
            display: flex;
            align-items: center;
            height: 28px;
            padding: 2px 8px 2px 10px;
            gap: 8px;
        }

        .command-prompt-label {
            font-family: 'JetBrains Mono', monospace;
            font-size: 12px;
            color: var(--cad-cyan);
            white-space: nowrap;
            font-weight: 600;
        }

        .command-input-field {
            flex: 1;
            background: transparent;
            border: none;
            outline: none;
            color: #ffffff;
            font-family: 'JetBrains Mono', monospace;
            font-size: 12.5px;
            caret-color: #38bdf8;
        }

        .command-tools-btn {
            background: transparent;
            border: none;
            color: var(--cad-text-muted);
            cursor: pointer;
            padding: 3px 6px;
            border-radius: 3px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 3px;
            transition: color 0.15s, background 0.15s;
        }

        .command-tools-btn:hover {
            color: #38bdf8;
            background: rgba(255, 255, 255, 0.08);
        }

        /* AutoCAD Style Command Auto-Complete Popup */
        .command-autocomplete-popup {
            position: absolute;
            bottom: calc(100% + 6px);
            left: 8px;
            right: 8px;
            background: rgba(23, 28, 38, 0.97);
            border: 1px solid rgba(56, 189, 248, 0.5);
            border-radius: 6px;
            box-shadow: 0 14px 30px rgba(0, 0, 0, 0.75), 0 0 12px rgba(56, 189, 248, 0.2);
            z-index: 150;
            overflow: hidden;
            backdrop-filter: blur(12px);
            display: none;
        }

        .autocomplete-list {
            max-height: 240px;
            overflow-y: auto;
            padding: 4px;
        }

        .autocomplete-item {
            display: flex;
            align-items: center;
            padding: 7px 12px;
            cursor: pointer;
            border-radius: 4px;
            gap: 12px;
            transition: background 0.12s ease;
            user-select: none;
        }

        .autocomplete-item:hover,
        .autocomplete-item.selected {
            background: #0284c7;
        }

        .ac-alias {
            font-family: 'JetBrains Mono', monospace;
            font-size: 11px;
            font-weight: 700;
            color: #38bdf8;
            background: rgba(56, 189, 248, 0.15);
            padding: 2px 7px;
            border-radius: 3px;
            min-width: 34px;
            text-align: center;
        }

        .autocomplete-item.selected .ac-alias,
        .autocomplete-item:hover .ac-alias {
            color: #ffffff;
            background: rgba(255, 255, 255, 0.25);
        }

        .ac-name {
            font-family: 'JetBrains Mono', monospace;
            font-size: 13px;
            font-weight: 700;
            color: #ffffff;
            min-width: 90px;
        }

        .ac-desc {
            font-size: 11px;
            color: #94a3b8;
            flex: 1;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .autocomplete-item.selected .ac-desc,
        .autocomplete-item:hover .ac-desc {
            color: #f1f5f9;
        }

        /* 4.5 AutoCAD Right-Click Context Menu */
        .cad-context-menu {
            position: fixed;
            display: none;
            z-index: 500;
            background: rgba(23, 28, 38, 0.98);
            border: 1px solid rgba(255, 255, 255, 0.16);
            border-radius: 6px;
            box-shadow: 0 12px 32px rgba(0, 0, 0, 0.8), 0 0 1px rgba(255, 255, 255, 0.25);
            min-width: 225px;
            padding: 4px 0;
            backdrop-filter: blur(14px);
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            user-select: none;
        }

        .ctx-item {
            display: flex;
            align-items: center;
            padding: 7px 14px;
            font-size: 12px;
            color: #e2e8f0;
            cursor: pointer;
            gap: 10px;
            transition: background 0.1s, color 0.1s;
        }

        .ctx-item:hover {
            background: #0284c7;
            color: #ffffff;
        }

        .ctx-item svg {
            width: 14px;
            height: 14px;
            stroke: currentColor;
            stroke-width: 2;
            fill: none;
            flex-shrink: 0;
            opacity: 0.9;
        }

        .ctx-label {
            flex: 1;
            font-weight: 500;
            white-space: nowrap;
        }

        .ctx-shortcut {
            font-family: 'JetBrains Mono', monospace;
            font-size: 10px;
            color: #94a3b8;
            padding-left: 10px;
            white-space: nowrap;
        }

        .ctx-item:hover .ctx-shortcut {
            color: #e0f2fe;
        }

        .ctx-separator {
            height: 1px;
            background: rgba(255, 255, 255, 0.1);
            margin: 4px 0;
        }

        .ctx-submenu-parent {
            position: relative;
        }

        .ctx-submenu-parent:hover > .ctx-submenu {
            display: block;
        }

        .ctx-submenu {
            display: none;
            position: absolute;
            top: -4px;
            left: calc(100% - 2px);
            background: rgba(23, 28, 38, 0.98);
            border: 1px solid rgba(255, 255, 255, 0.16);
            border-radius: 6px;
            box-shadow: 0 12px 32px rgba(0, 0, 0, 0.85);
            min-width: 180px;
            padding: 4px 0;
            backdrop-filter: blur(14px);
        }

        .ctx-chevron {
            font-size: 10px;
            color: #94a3b8;
            margin-left: 4px;
        }

        .ctx-item:hover .ctx-chevron {
            color: #ffffff;
        }

        /* 4.8 AutoCAD Properties Inspector Panel (Ctrl+1) */
        .cad-props-panel {
            position: absolute;
            right: 14px;
            top: 96px;
            width: 300px;
            max-height: calc(100vh - 145px);
            background: rgba(23, 28, 38, 0.98);
            border: 1px solid rgba(255, 255, 255, 0.16);
            border-radius: 6px;
            box-shadow: 0 14px 35px rgba(0, 0, 0, 0.8), 0 0 1px rgba(255, 255, 255, 0.3);
            z-index: 85;
            display: none;
            flex-direction: column;
            backdrop-filter: blur(14px);
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            user-select: none;
        }

        .props-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 8px 12px;
            background: rgba(15, 23, 42, 0.8);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 6px 6px 0 0;
        }

        .props-title-group {
            display: flex;
            align-items: center;
            gap: 8px;
            color: #e2e8f0;
            font-weight: 600;
            font-size: 12.5px;
        }

        .props-title-group svg {
            color: #38bdf8;
        }

        .props-header-actions {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .props-badge {
            font-family: 'JetBrains Mono', monospace;
            font-size: 10px;
            font-weight: 600;
            background: rgba(56, 189, 248, 0.15);
            color: #38bdf8;
            padding: 2px 6px;
            border-radius: 3px;
            text-transform: uppercase;
        }

        .props-close-btn {
            background: transparent;
            border: none;
            color: #94a3b8;
            font-size: 18px;
            line-height: 1;
            cursor: pointer;
            padding: 0 4px;
            transition: color 0.15s;
        }

        .props-close-btn:hover {
            color: #ffffff;
        }

        .props-body {
            padding: 6px 0;
            overflow-y: auto;
            flex: 1;
            max-height: calc(100vh - 200px);
        }

        .props-section {
            margin-bottom: 4px;
        }

        .props-section-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 5px 12px;
            background: rgba(255, 255, 255, 0.04);
            font-size: 11px;
            font-weight: 600;
            color: #94a3b8;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            border-top: 1px solid rgba(255, 255, 255, 0.04);
            border-bottom: 1px solid rgba(255, 255, 255, 0.04);
        }

        .props-row {
            display: flex;
            align-items: center;
            padding: 4px 12px;
            font-size: 11.5px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.03);
        }

        .props-row:hover {
            background: rgba(255, 255, 255, 0.03);
        }

        .props-label {
            width: 100px;
            color: #94a3b8;
            flex-shrink: 0;
        }

        .props-val {
            flex: 1;
            display: flex;
            align-items: center;
        }

        .props-input, .props-select {
            width: 100%;
            background: rgba(15, 23, 42, 0.7);
            border: 1px solid rgba(255, 255, 255, 0.12);
            color: #ffffff;
            font-family: 'JetBrains Mono', monospace;
            font-size: 11px;
            padding: 3px 6px;
            border-radius: 3px;
            outline: none;
            transition: border-color 0.15s;
        }

        .props-input:focus, .props-select:focus {
            border-color: #38bdf8;
        }

        .props-val-readonly {
            font-family: 'JetBrains Mono', monospace;
            font-size: 11px;
            color: #e2e8f0;
        }

        /* 4.9 AutoCAD Block Library Palette (INSERT / I) */
        .cad-block-palette {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 780px;
            max-width: 95vw;
            max-height: 85vh;
            background: rgba(20, 26, 38, 0.98);
            border: 1px solid rgba(255, 255, 255, 0.18);
            border-radius: 8px;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.85), 0 0 1px rgba(255, 255, 255, 0.3);
            z-index: 95;
            display: none;
            flex-direction: column;
            backdrop-filter: blur(16px);
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            user-select: none;
        }

        /* 4.10 Floating Sample Project Startup Banner (Disabled to keep Model Space clean like AutoCAD) */
        .cad-sample-banner {
            display: none !important;
        }
        .sample-banner-content {
            display: flex;
            align-items: center;
            gap: 12px;
            flex-wrap: wrap;
        }
        .sample-banner-icon {
            font-size: 16px;
        }
        .sample-banner-text {
            color: #e2e8f0;
        }
        .sample-banner-text strong {
            color: #60a5fa;
        }
        .sample-banner-toggle {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            cursor: pointer;
            color: #cbd5e1;
            font-size: 12px;
            background: rgba(255, 255, 255, 0.07);
            padding: 4px 8px;
            border-radius: 4px;
            user-select: none;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .sample-banner-toggle input {
            accent-color: #3b82f6;
            cursor: pointer;
        }
        .sample-banner-btn-blank {
            background: #2563eb;
            color: #ffffff;
            border: none;
            padding: 4px 10px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: 500;
            cursor: pointer;
            transition: background 0.15s;
        }
        .sample-banner-btn-blank:hover {
            background: #1d4ed8;
        }
        .sample-banner-close {
            background: none;
            border: none;
            color: #94a3b8;
            font-size: 18px;
            cursor: pointer;
            line-height: 1;
            padding: 2px 4px;
            margin-left: 2px;
            transition: color 0.15s;
        }
        .sample-banner-close:hover {
            color: #f87171;
        }

        /* DWG Assistant Modal Styles */
        .dwg-badge {
            background: #ef4444;
            color: #ffffff;
            font-size: 11px;
            font-weight: 700;
            padding: 2px 8px;
            border-radius: 4px;
            letter-spacing: 0.5px;
        }

        .dwg-info-box {
            background: rgba(15, 23, 42, 0.85);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 6px;
            padding: 12px 16px;
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .dwg-file-name {
            font-family: 'JetBrains Mono', monospace;
            font-size: 13px;
            font-weight: 600;
            color: #38bdf8;
            word-break: break-all;
        }

        .dwg-file-meta {
            font-size: 11px;
            color: #94a3b8;
        }

        .dwg-p {
            font-size: 12.5px;
            color: #cbd5e1;
            line-height: 1.5;
            margin: 0;
        }

        .dwg-options-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            margin-top: 4px;
        }

        @media (max-width: 600px) {
            .dwg-options-grid {
                grid-template-columns: 1fr;
            }
        }

        .dwg-opt-card {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 6px;
            padding: 12px;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .dwg-opt-card.highlight {
            background: rgba(56, 189, 248, 0.06);
            border-color: rgba(56, 189, 248, 0.35);
        }

        .dwg-opt-header {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 12.5px;
            font-weight: 600;
            color: #f1f5f9;
        }

        .dwg-opt-desc {
            font-size: 11px;
            color: #94a3b8;
            line-height: 1.4;
            flex-grow: 1;
        }

        .dwg-btn-primary {
            background: #0284c7;
            color: #ffffff;
            border: none;
            padding: 8px 12px;
            border-radius: 4px;
            font-size: 11.5px;
            font-weight: 600;
            cursor: pointer;
            text-align: center;
            transition: background 0.15s;
        }

        .dwg-btn-primary:hover {
            background: #0ea5e9;
        }

        .dwg-btn-secondary {
            background: rgba(255, 255, 255, 0.08);
            color: #e2e8f0;
            border: 1px solid rgba(255, 255, 255, 0.15);
            padding: 7px 10px;
            border-radius: 4px;
            font-size: 11px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            transition: all 0.15s;
        }

        .dwg-btn-secondary:hover {
            background: rgba(255, 255, 255, 0.15);
            color: #ffffff;
            border-color: #38bdf8;
        }

        .dwg-tip {
            background: rgba(245, 158, 11, 0.08);
            border: 1px solid rgba(245, 158, 11, 0.25);
            border-radius: 6px;
            padding: 10px 14px;
            font-size: 11px;
            color: #fbbf24;
            line-height: 1.4;
        }

        .block-palette-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 16px;
            background: rgba(15, 23, 42, 0.9);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 8px 8px 0 0;
        }

        .block-palette-title {
            display: flex;
            align-items: center;
            gap: 8px;
            color: #f1f5f9;
            font-weight: 600;
            font-size: 13px;
        }

        .block-palette-title svg {
            color: #38bdf8;
        }

        .block-tabs-nav-wrapper {
            position: relative;
            display: flex;
            align-items: center;
            background: rgba(255, 255, 255, 0.02);
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            padding: 6px 10px;
            gap: 6px;
        }

        .block-tabs {
            flex: 1;
            display: flex;
            gap: 6px;
            padding: 2px 2px;
            background: transparent;
            border-bottom: none;
            overflow-x: auto;
            scroll-behavior: smooth;
            scrollbar-width: none !important;
            -ms-overflow-style: none !important;
        }

        .block-tabs::-webkit-scrollbar {
            display: none !important;
            width: 0 !important;
            height: 0 !important;
        }

        .block-tabs-nav-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 28px;
            height: 28px;
            min-width: 28px;
            border-radius: 4px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.14);
            color: #94a3b8;
            cursor: pointer;
            transition: all 0.15s ease;
            user-select: none;
            padding: 0;
            flex-shrink: 0;
        }

        .block-tabs-nav-btn:hover:not(:disabled) {
            background: rgba(56, 189, 248, 0.18);
            border-color: #38bdf8;
            color: #38bdf8;
            box-shadow: 0 0 8px rgba(56, 189, 248, 0.3);
        }

        .block-tabs-nav-btn:active:not(:disabled) {
            transform: scale(0.92);
        }

        .block-tabs-nav-btn:disabled {
            opacity: 0.22;
            cursor: not-allowed;
            border-color: rgba(255, 255, 255, 0.05);
            background: transparent;
        }

        .block-tab-btn {
            background: transparent;
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: #94a3b8;
            padding: 4px 12px;
            border-radius: 4px;
            font-size: 11px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.15s ease;
            white-space: nowrap;
        }

        .block-tab-btn:hover {
            background: rgba(255, 255, 255, 0.06);
            color: #e2e8f0;
        }

        .block-tab-btn.active {
            background: rgba(56, 189, 248, 0.18);
            border-color: #38bdf8;
            color: #38bdf8;
            font-weight: 600;
        }

        .block-grid {
            padding: 14px 16px;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(155px, 1fr));
            gap: 12px;
            overflow-y: auto;
            max-height: calc(85vh - 125px);
        }

        .block-card {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 6px;
            padding: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            transition: all 0.2s ease;
            cursor: pointer;
        }

        .block-card:hover {
            background: rgba(56, 189, 248, 0.08);
            border-color: rgba(56, 189, 248, 0.5);
            transform: translateY(-2px);
            box-shadow: 0 4px 14px rgba(0, 0, 0, 0.45);
        }

        .block-preview-box {
            width: 110px;
            height: 75px;
            background: rgba(10, 15, 26, 0.85);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 8px;
        }

        .block-preview-box svg {
            max-width: 90px;
            max-height: 60px;
        }

        .block-name {
            font-size: 11.5px;
            font-weight: 600;
            color: #f1f5f9;
            margin-bottom: 2px;
            line-height: 1.25;
        }

        .block-cat-badge {
            font-size: 9.5px;
            color: #94a3b8;
            font-family: 'JetBrains Mono', monospace;
            margin-bottom: 8px;
        }

        .block-insert-btn {
            margin-top: auto;
            width: 100%;
            background: rgba(56, 189, 248, 0.15);
            border: 1px solid rgba(56, 189, 248, 0.3);
            color: #38bdf8;
            padding: 4px 8px;
            border-radius: 3px;
            font-size: 11px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.15s;
        }

        .block-insert-btn:hover {
            background: #38bdf8;
            color: #0b1120;
        }

        /* 5. AutoCAD Status Bar (Bottom) */
        .cad-statusbar {
            height: 29px;
            background: var(--cad-darker);
            border-top: 1px solid var(--cad-border);
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 8px;
            font-size: 11px;
            z-index: 100;
            user-select: none;
        }

        .status-coords {
            font-family: 'JetBrains Mono', monospace;
            font-size: 11px;
            color: var(--cad-text-muted);
            white-space: nowrap;
        }

        .status-toggles {
            display: flex;
            align-items: center;
            gap: 2px;
        }

        .status-btn {
            background: transparent;
            border: 1px solid transparent;
            color: var(--cad-text-muted);
            padding: 2px 8px;
            border-radius: 3px;
            cursor: pointer;
            font-size: 10.5px;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 4px;
            transition: all 0.15s;
        }

        .status-btn:hover {
            background: var(--cad-surface-hover);
            color: #ffffff;
        }

        .status-btn.active {
            background: rgba(2, 132, 199, 0.25);
            border-color: var(--cad-accent);
            color: #38bdf8;
        }

        .status-scale-selector {
            background: transparent;
            border: none;
            color: var(--cad-text-muted);
            font-size: 11px;
            cursor: pointer;
            outline: none;
            padding: 2px 4px;
        }

        /* AutoSave Status Bar Badge */
        .status-autosave-badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 11px;
            color: #94a3b8;
            padding: 2px 8px;
            border-radius: 3px;
            user-select: none;
            cursor: default;
        }
        .autosave-pulse-dot {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: #22c55e;
            box-shadow: 0 0 6px #22c55e;
            display: inline-block;
            transition: background 0.2s, box-shadow 0.2s;
        }
        .autosave-pulse-dot.saving {
            background: #f59e0b;
            box-shadow: 0 0 8px #f59e0b;
        }

        /* Institutional Standard Footer (4U.IA.BR) */
        .app-footer {
            height: 25px;
            background: #070a12;
            border-top: 1px solid rgba(255, 255, 255, 0.07);
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 12px;
            font-size: 11px;
            color: #64748b;
            z-index: 100;
            user-select: none;
            flex-shrink: 0;
        }

        .app-footer-left {
            display: flex;
            align-items: center;
            gap: 6px;
            white-space: nowrap;
        }

        .app-footer-left a {
            color: inherit;
            text-decoration: none;
            font-weight: 500;
        }

        .app-footer-left a:hover {
            color: var(--cad-accent);
        }

        .app-footer-links {
            display: flex;
            align-items: center;
            gap: 12px;
            flex-wrap: nowrap;
        }

        .app-footer-link {
            color: #94a3b8;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 4px;
            font-size: 11px;
            transition: color 0.15s;
        }

        .app-footer-link svg {
            width: 12px;
            height: 12px;
            opacity: 0.85;
            flex-shrink: 0;
        }

        .app-footer-link:hover {
            color: var(--cad-accent);
        }

        .app-footer-sep {
            color: rgba(255, 255, 255, 0.15);
            font-size: 9px;
        }

        /* 6. Modals & Dialogs */
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, 0.7);
            backdrop-filter: blur(4px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 200;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.2s ease;
        }

        .modal-overlay.open {
            opacity: 1;
            pointer-events: auto;
        }

        .modal-card {
            background: var(--cad-surface);
            border: 1px solid var(--cad-border);
            border-radius: 8px;
            width: min(650px, 94%);
            max-height: 85vh;
            display: flex;
            flex-direction: column;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8);
            overflow: hidden;
        }

        .modal-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 18px;
            background: var(--cad-darker);
            border-bottom: 1px solid var(--cad-border);
        }

        .modal-title {
            font-weight: 600;
            font-size: 14px;
            color: #ffffff;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .modal-close-btn {
            background: transparent;
            border: none;
            color: var(--cad-text-muted);
            cursor: pointer;
            font-size: 18px;
        }

        .modal-close-btn:hover {
            color: #ffffff;
        }

        .modal-body {
            padding: 18px;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .modal-footer {
            padding: 12px 18px;
            background: var(--cad-darker);
            border-top: 1px solid var(--cad-border);
            display: flex;
            justify-content: flex-end;
            gap: 10px;
        }

        /* Form Controls inside Modals */
        .form-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
        }

        .form-group {
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .form-group.col-span-2 {
            grid-column: span 2;
        }

        .form-label {
            font-size: 11.5px;
            font-weight: 500;
            color: var(--cad-text-muted);
        }

        .form-input, .form-select {
            background: var(--cad-darker);
            border: 1px solid var(--cad-border);
            border-radius: 4px;
            color: #ffffff;
            padding: 8px 10px;
            font-size: 12.5px;
            outline: none;
        }

        .form-input:focus, .form-select:focus {
            border-color: var(--cad-accent);
        }

        .btn-primary {
            background: var(--cad-accent);
            color: #ffffff;
            border: none;
            padding: 8px 16px;
            border-radius: 4px;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.15s;
        }

        .btn-primary:hover {
            background: var(--cad-accent-hover);
        }

        .btn-secondary {
            background: var(--cad-surface-hover);
            color: var(--cad-text);
            border: 1px solid var(--cad-border);
            padding: 8px 16px;
            border-radius: 4px;
            cursor: pointer;
            transition: background 0.15s;
        }

        .btn-secondary:hover {
            background: rgba(255, 255, 255, 0.1);
        }

        /* Layer Table */
        .layer-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 12px;
        }

        .layer-table th, .layer-table td {
            padding: 8px 10px;
            text-align: left;
            border-bottom: 1px solid var(--cad-border);
        }

        .layer-table th {
            background: rgba(0, 0, 0, 0.2);
            color: var(--cad-text-muted);
            font-weight: 600;
        }

        /* Cheatsheet Table */
        .cheatsheet-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 12px;
        }

        .cheatsheet-table td {
            padding: 6px 8px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .kbd-badge {
            background: var(--cad-darker);
            border: 1px solid var(--cad-border);
            border-radius: 3px;
            padding: 2px 6px;
            font-family: 'JetBrains Mono', monospace;
            font-weight: 600;
            color: #38bdf8;
            font-size: 11px;
        }

        /* Hidden File Inputs */
        #cadFileInput,
        #cadPdfInput,
        #cadImageInput {
            display: none;
        }

        /* Underlay Floating HUD Bar */
        .cad-underlay-bar {
            position: absolute;
            top: 14px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(24, 24, 27, 0.94);
            border: 1px solid rgba(255, 255, 255, 0.18);
            backdrop-filter: blur(8px);
            border-radius: 8px;
            padding: 6px 12px;
            display: flex;
            align-items: center;
            gap: 10px;
            z-index: 50;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
            color: #f1f5f9;
            font-size: 12px;
            user-select: none;
            transition: opacity 0.2s ease;
        }

        .underlay-bar-drag-handle {
            color: #64748b;
            font-size: 14px;
            cursor: grab;
        }

        .underlay-info {
            display: flex;
            align-items: center;
            gap: 6px;
            max-width: 220px;
        }

        .underlay-name {
            font-weight: 600;
            color: #38bdf8;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 130px;
            font-size: 11px;
        }

        .underlay-badge {
            background: rgba(56, 189, 248, 0.15);
            color: #38bdf8;
            border: 1px solid rgba(56, 189, 248, 0.3);
            border-radius: 4px;
            padding: 1px 5px;
            font-size: 10px;
            font-family: 'JetBrains Mono', monospace;
            white-space: nowrap;
        }

        .underlay-divider {
            width: 1px;
            height: 18px;
            background: rgba(255, 255, 255, 0.15);
        }

        .underlay-slider-group {
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .underlay-label {
            font-size: 11px;
            color: #94a3b8;
        }

        .underlay-slider-group input[type="range"] {
            width: 80px;
            height: 4px;
            accent-color: #38bdf8;
            cursor: pointer;
        }

        .underlay-val {
            font-size: 10px;
            font-family: 'JetBrains Mono', monospace;
            color: #cbd5e1;
            min-width: 28px;
        }

        .underlay-action-btn {
            background: rgba(56, 189, 248, 0.15);
            border: 1px solid rgba(56, 189, 248, 0.4);
            color: #38bdf8;
            border-radius: 4px;
            padding: 4px 8px;
            display: flex;
            align-items: center;
            gap: 5px;
            cursor: pointer;
            font-size: 11px;
            font-weight: 600;
            transition: all 0.15s;
        }

        .underlay-action-btn:hover {
            background: #38bdf8;
            color: #0f172a;
        }

        .underlay-icon-btn {
            background: transparent;
            border: 1px solid transparent;
            border-radius: 4px;
            color: #94a3b8;
            padding: 4px 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.15s;
        }

        .underlay-icon-btn:hover {
            background: rgba(255, 255, 255, 0.1);
            color: #ffffff;
        }

        .underlay-icon-btn.active-off {
            color: #ef4444;
        }

        .underlay-icon-btn.active-locked {
            color: #f59e0b;
            background: rgba(245, 158, 11, 0.15);
            border-color: rgba(245, 158, 11, 0.3);
        }

        .underlay-icon-btn.danger:hover {
            background: rgba(239, 68, 68, 0.2);
            color: #ef4444;
        }

        /* Drag-and-Drop Overlay */
        .cad-drop-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(15, 23, 42, 0.85);
            backdrop-filter: blur(4px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 200;
            pointer-events: none;
        }

        .drop-overlay-box {
            border: 3px dashed #38bdf8;
            border-radius: 12px;
            padding: 40px 60px;
            text-align: center;
            background: rgba(56, 189, 248, 0.05);
            animation: pulse-drop 1.5s infinite;
        }

        @keyframes pulse-drop {
            0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(56, 189, 248, 0.4); }
            50% { transform: scale(1.02); box-shadow: 0 0 25px 5px rgba(56, 189, 248, 0.2); }
            100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(56, 189, 248, 0); }
        }

        .drop-icon {
            font-size: 48px;
            margin-bottom: 12px;
        }

        .drop-title {
            font-size: 18px;
            font-weight: 700;
            color: #f8fafc;
            margin-bottom: 6px;
        }

        .drop-sub {
            font-size: 13px;
            color: #94a3b8;
        }

        /* PDF Multi-page Grid Modal */
        .pdf-page-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
            gap: 12px;
            max-height: 400px;
            overflow-y: auto;
            padding: 4px;
        }

        .pdf-page-card {
            border: 1px solid var(--cad-border);
            border-radius: 6px;
            background: var(--cad-darker);
            padding: 8px;
            text-align: center;
            cursor: pointer;
            transition: all 0.2s;
        }

        .pdf-page-card:hover {
            border-color: #38bdf8;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(56, 189, 248, 0.25);
        }

        .pdf-page-preview {
            width: 100%;
            height: 140px;
            background: #ffffff;
            border-radius: 4px;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 6px;
        }

        .pdf-page-preview canvas {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
        }

        .pdf-thumb-placeholder {
            color: #94a3b8;
            font-size: 12px;
            font-weight: 600;
        }

        .pdf-page-label {
            font-size: 11px;
            font-weight: 600;
            color: #cbd5e1;
        }
    </style>
</head>
<body>
    <div id="cadApp">
        <!-- 1. Top Title Bar -->
        <header class="cad-titlebar">
            <div class="cad-titlebar-left">
                <div class="cad-logo-box">
                    <img src="logo.png?v=1.4.0" alt="CADClone" class="cad-logo-img">
                    <span data-i18n="app_title">CADClone <?= date('Y') ?></span>
                </div>

                <!-- Quick Access Toolbar -->
                <div class="quick-access-toolbar">
                    <button class="qa-btn" data-i18n-title="qa_new" title="Novo Desenho em Branco (Ctrl+N)" onclick="cadcloneUI.newDrawing()">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                    </button>
                    <button class="qa-btn" data-i18n-title="qa_sample" title="Carregar Planta Modelo Completa 25x10m (SAMPLE)" onclick="cadcloneUI.loadSampleDrawing(true)">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                    </button>
                    <button class="qa-btn" data-i18n-title="qa_open" title="Abrir Arquivo DXF/DWG (Ctrl+O)" onclick="cadcloneUI.openFileDialog()">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
                    </button>
                    <button class="qa-btn" data-i18n-title="qa_save" title="Salvar DXF (Ctrl+S / QSAVE)" onclick="cadcloneUI.saveDXF()">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
                    </button>
                    <button class="qa-btn" data-i18n-title="qa_undo" title="Desfazer (Ctrl+Z / U)" onclick="cadcloneUI.undo()">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7v6h6"/><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"/></svg>
                    </button>
                    <button class="qa-btn" data-i18n-title="qa_redo" title="Refazer (Ctrl+Y / REDO)" onclick="cadcloneUI.redo()">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 7v6h-6"/><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"/></svg>
                    </button>
                    <button class="qa-btn" data-i18n-title="qa_plot" title="Imprimir / Prancha ABNT PDF (PLOT)" onclick="cadcloneUI.openPlotModal()">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
                    </button>
                    <button class="qa-btn" data-i18n-title="tool_export_png_title" title="Exportar Imagem PNG / JPEG (EXPORT)" onclick="cadcloneUI.openExportImageModal('png')">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                    </button>
                </div>
            </div>

            <div class="cad-doc-title" id="cadDocTitle">
                [Desenho1.dwg] — Espaço do Modelo (Model)
            </div>

            <div class="cad-titlebar-right">
                <button type="button" class="btn-install-pwa" id="btnInstallPwa" onclick="cadcloneUI.promptInstallPWA()" data-i18n-title="btn_install_title" title="Instalar CADClone no Computador ou Celular (PWA Offline)">
                    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    <span data-i18n="btn_install_app">Instalar App</span>
                </button>
                <div class="lang-switch-box" id="langSwitchBox" data-i18n-title="lang_switch_title" title="Mudar Idioma / Switch Language">
                    <button type="button" class="lang-btn" id="btnLangPT" data-lang="pt" onclick="if(window.cadcloneUI) window.cadcloneUI.setLanguage('pt')">PT</button>
                    <button type="button" class="lang-btn" id="btnLangEN" data-lang="en" onclick="if(window.cadcloneUI) window.cadcloneUI.setLanguage('en')">EN</button>
                </div>
                <button class="qa-btn" data-i18n-title="qa_help" title="Guia de Comandos e Teclas de Atalho (F1)" onclick="cadcloneUI.openHelpModal()">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                </button>
            </div>
        </header>

        <!-- 2. AutoCAD Ribbon Bar -->
        <div class="cad-ribbon" id="cadRibbonContainer">
            <button type="button" class="ribbon-scroll-nav ribbon-nav-left" id="ribbonNavLeft" onclick="cadcloneUI.scrollRibbon(-1)" title="Rolar ferramentas para a esquerda">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <button type="button" class="ribbon-scroll-nav ribbon-nav-right" id="ribbonNavRight" onclick="cadcloneUI.scrollRibbon(1)" title="Rolar ferramentas para a direita">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
            <div class="ribbon-tabs">
                <div class="ribbon-tab active" data-tab="home" data-i18n="tab_home" onclick="cadcloneUI.switchRibbonTab('home')">Início (Home)</div>
                <div class="ribbon-tab" data-tab="annotate" data-i18n="tab_annotate" onclick="cadcloneUI.switchRibbonTab('annotate')">Anotação</div>
                <div class="ribbon-tab" data-tab="output" data-i18n="tab_output" onclick="cadcloneUI.switchRibbonTab('output')">Exportar / Prancha</div>
            </div>

            <div class="ribbon-panels" id="ribbonHomePanel">
                <!-- Draw Panel -->
                <div class="ribbon-panel">
                    <div class="panel-tools">
                        <button class="tool-btn-large" data-i18n-title="tool_line" title="Linha (L)" onclick="cadcloneUI.cmd('LINE')">
                            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><line x1="4" y1="20" x2="20" y2="4"/><circle cx="4" cy="20" r="2" fill="currentColor"/><circle cx="20" cy="4" r="2" fill="currentColor"/></svg>
                            <span data-i18n="tool_line">Linha (L)</span>
                        </button>
                        <button class="tool-btn-large" data-i18n-title="tool_pline" title="Polilinha (PL)" onclick="cadcloneUI.cmd('PLINE')">
                            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><polyline points="3 17 9 7 15 14 21 6"/><circle cx="3" cy="17" r="1.5" fill="currentColor"/><circle cx="9" cy="7" r="1.5" fill="currentColor"/><circle cx="15" cy="14" r="1.5" fill="currentColor"/><circle cx="21" cy="6" r="1.5" fill="currentColor"/></svg>
                            <span data-i18n="tool_pline">Polilinha (PL)</span>
                        </button>
                        <button class="tool-btn-large" data-i18n-title="tool_circle" title="Círculo (C)" onclick="cadcloneUI.cmd('CIRCLE')">
                            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>
                            <span data-i18n="tool_circle">Círculo (C)</span>
                        </button>
                        <button class="tool-btn-large" data-i18n-title="tool_rect_title" title="Retângulo (REC)" onclick="cadcloneUI.cmd('RECTANG')">
                            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><rect x="4" y="5" width="16" height="14" rx="1"/></svg>
                            <span data-i18n="tool_rect">Retângulo</span>
                        </button>
                        <button class="tool-btn-large" data-i18n-title="tool_arc_title" title="Arco 3 Pontos (A)" onclick="cadcloneUI.cmd('ARC')">
                            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M4 18 A 10 10 0 0 1 20 18"/></svg>
                            <span data-i18n="tool_arc">Arco (A)</span>
                        </button>
                    </div>
                    <div class="panel-title" data-i18n="panel_draw">Desenhar</div>
                </div>

                <!-- Modify Panel -->
                <div class="ribbon-panel">
                    <div class="panel-tools">
                        <div class="tool-group-small">
                            <button class="tool-btn-small" data-i18n-title="tool_move" title="Mover (M)" onclick="cadcloneUI.cmd('MOVE')">
                                <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><polyline points="5 9 2 12 5 15"/><polyline points="9 5 12 2 15 5"/><polyline points="15 19 12 22 9 19"/><polyline points="19 9 22 12 19 15"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="22"/></svg>
                                <span data-i18n="tool_move">Mover (M)</span>
                            </button>
                            <button class="tool-btn-small" data-i18n-title="tool_copy" title="Copiar (CO)" onclick="cadcloneUI.cmd('COPY')">
                                <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                                <span data-i18n="tool_copy">Copiar (CO)</span>
                            </button>
                            <button class="tool-btn-small" data-i18n-title="tool_rotate" title="Rotacionar (RO)" onclick="cadcloneUI.cmd('ROTATE')">
                                <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M21.5 2v6h-6"/><path d="M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
                                <span data-i18n="tool_rotate">Girar (RO)</span>
                            </button>
                            <button class="tool-btn-small" data-i18n-title="tool_offset" title="Offset / Deslocamento (O)" onclick="cadcloneUI.cmd('OFFSET')">
                                <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><rect x="3" y="3" width="18" height="18" rx="2"/><rect x="8" y="8" width="8" height="8" rx="1"/></svg>
                                <span data-i18n="tool_offset">Offset (O)</span>
                            </button>
                            <button class="tool-btn-small" data-i18n-title="tool_trim_title" title="Aparar Linhas (TR / TRIM) — Shift para Estender" onclick="cadcloneUI.cmd('TRIM')">
                                <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>
                                <span data-i18n="tool_trim">Aparar (TR)</span>
                            </button>
                            <button class="tool-btn-small" data-i18n-title="tool_extend_title" title="Estender Linhas (EX / EXTEND) — Shift para Aparar" onclick="cadcloneUI.cmd('EXTEND')">
                                <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><line x1="19" y1="3" x2="19" y2="21" stroke-width="2.5"/><line x1="3" y1="12" x2="15" y2="12"/><polyline points="11 8 15 12 11 16"/></svg>
                                <span data-i18n="tool_extend">Estender (EX)</span>
                            </button>
                            <button class="tool-btn-small" data-i18n-title="tool_erase" title="Apagar (E)" onclick="cadcloneUI.cmd('ERASE')">
                                <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                                <span data-i18n="tool_erase">Apagar (E)</span>
                            </button>
                            <button class="tool-btn-small" data-i18n-title="tool_measure" title="Medir Distância (DI)" onclick="cadcloneUI.cmd('DIST')">
                                <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M2 12h20"/><path d="M2 9v6"/><path d="M22 9v6"/><path d="M8 9v6"/><path d="M14 9v6"/></svg>
                                <span data-i18n="tool_measure">Medir (DI)</span>
                            </button>
                            <button class="tool-btn-small" data-i18n-title="tool_scale" title="Escalar (SC)" onclick="cadcloneUI.cmd('SCALE')">
                                <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/><rect x="3" y="10" width="11" height="11" rx="1"/></svg>
                                <span data-i18n="tool_scale">Escala (SC)</span>
                            </button>
                            <button class="tool-btn-small" data-i18n-title="tool_mirror" title="Espelhar (MI)" onclick="cadcloneUI.cmd('MIRROR')">
                                <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><line x1="12" y1="2" x2="12" y2="22" stroke-dasharray="2 2"/><polygon points="4 6 10 12 4 18"/><polygon points="20 6 14 12 20 18"/></svg>
                                <span data-i18n="tool_mirror">Espelho (MI)</span>
                            </button>
                            <button class="tool-btn-small" data-i18n-title="tool_explode_title" title="Explodir Bloco / Polilinha (X)" onclick="cadcloneUI.cmd('EXPLODE')">
                                <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M4 4l4 4m8-4l-4 4m-4 8l-4 4m12-4l-4-4"/><circle cx="12" cy="12" r="2"/></svg>
                                <span data-i18n="tool_explode">Explodir (X)</span>
                            </button>
                            <button class="tool-btn-small" data-i18n-title="tool_fillet_title" title="Concordar / Canto Vivo (F)" onclick="cadcloneUI.cmd('FILLET')">
                                <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M4 20h8a8 8 0 0 0 8-8V4"/></svg>
                                <span data-i18n="tool_fillet">Concord (F)</span>
                            </button>
                        </div>
                    </div>
                    <div class="panel-title" data-i18n="panel_modify">Modificar</div>
                </div>

                <!-- Annotation Quick Panel -->
                <div class="ribbon-panel">
                    <div class="panel-tools">
                        <button class="tool-btn-large" data-i18n-title="tool_dim_linear_title" title="Cota Técnica com Encaixe em Endpoints (DIM / DAL)" onclick="cadcloneUI.cmd('DIM')">
                            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><line x1="4" y1="8" x2="20" y2="8"/><line x1="4" y1="4" x2="4" y2="12"/><line x1="20" y1="4" x2="20" y2="12"/><text x="12" y="7" font-size="6" text-anchor="middle" fill="currentColor">3.50</text></svg>
                            <span data-i18n="tool_dim_linear">Cota (DIM)</span>
                        </button>
                        <button class="tool-btn-large" data-i18n-title="tool_mtext_title" title="Texto Técnico (MT)" onclick="cadcloneUI.cmd('MTEXT')">
                            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><polyline points="4 7 4 4 20 4 20 7"/><line x1="12" y1="4" x2="12" y2="20"/></svg>
                            <span data-i18n="tool_mtext">Texto (MT)</span>
                        </button>
                        <button class="tool-btn-large" data-i18n-title="tool_dim_style_title" title="Estilo & Escala da Cota / Tamanho da Fonte (D / DIMSCALE / DIMTXT)" onclick="cadcloneUI.openDimSettings()">
                            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none">
                                <path d="M4 6h16M4 3v6M20 3v6"/>
                                <text x="12" y="19" font-size="8" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">A±</text>
                            </svg>
                            <span data-i18n="tool_dim_style">Escala Cota</span>
                        </button>
                    </div>
                    <div class="panel-title" data-i18n="panel_annotation">Anotação</div>
                </div>

                <!-- Layers Panel -->
                <div class="ribbon-panel">
                    <div class="panel-tools">
                        <div class="layer-control-panel">
                            <div class="layer-dropdown-row">
                                <div class="layer-color-indicator" id="activeLayerColorBox" style="background: #ffffff;"></div>
                                <select class="layer-select" id="activeLayerSelect" onchange="cadcloneUI.changeActiveLayer(this.value)">
                                    <option value="0">0 (Padrão)</option>
                                    <option value="Alvenaria">Alvenaria</option>
                                    <option value="Estrutura">Estrutura</option>
                                    <option value="Cotas">Cotas</option>
                                    <option value="Textos">Textos</option>
                                    <option value="Esquadrias">Esquadrias</option>
                                    <option value="Eletrica">Elétrica</option>
                                    <option value="Hidraulica">Hidráulica</option>
                                    <option value="Hachura">Hachura</option>
                                </select>
                            </div>
                            <button class="tool-btn-small" style="width: 100%; justify-content: center;" onclick="cadcloneUI.openLayerModal()">
                                <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
                                <span data-i18n="tool_layer_mgr">Gerenciador de Camadas (LA)</span>
                            </button>
                        </div>
                    </div>
                    <div class="panel-title" data-i18n="panel_layers">Camadas</div>
                </div>

                <!-- Utilities Panel -->
                <div class="ribbon-panel">
                    <div class="panel-tools">
                        <button class="tool-btn-large" data-i18n-title="tool_zoom_extents_title" title="Zoom Extents (Z E / Espaço)" onclick="cadcloneUI.engine.zoomExtents()">
                            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><path d="M11 8v6"/><path d="M8 11h6"/></svg>
                            <span data-i18n="tool_zoom_extents">Zoom Total</span>
                        </button>
                        <button class="tool-btn-large" data-i18n-title="tool_regen_title" title="Regenerar Modelo (RE)" onclick="cadcloneUI.engine.render()">
                            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><polyline points="1 4 1 10 7 10"/><polyline points="23 20 23 14 17 14"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/></svg>
                            <span data-i18n="tool_regen">Regen (RE)</span>
                        </button>
                        <button class="tool-btn-large" data-i18n-title="tool_ltscale_title" title="Escala de Linhas (LTS / LTSCALE)" onclick="cadcloneUI.cmd('LTSCALE')">
                            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none">
                                <line x1="2" y1="7" x2="22" y2="7" stroke-dasharray="4,3"/>
                                <line x1="2" y1="12" x2="22" y2="12" stroke-dasharray="6,2,1,2"/>
                                <line x1="2" y1="17" x2="22" y2="17"/>
                            </svg>
                            <span data-i18n="tool_ltscale">Linhas (LTS)</span>
                        </button>
                    </div>
                    <div class="panel-title" data-i18n="panel_view">Visualização</div>
                </div>

                <!-- Properties Panel -->
                <div class="ribbon-panel">
                    <div class="panel-tools">
                        <button class="tool-btn-large" id="btnRibbonProps" data-i18n-title="tool_props_title" title="Paleta de Propriedades Rápidas (Ctrl+1 / PR)" onclick="cadcloneUI.togglePropertiesPanel()">
                            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                                <line x1="9" y1="3" x2="9" y2="21"/>
                                <line x1="9" y1="9" x2="21" y2="9"/>
                                <line x1="9" y1="15" x2="21" y2="15"/>
                            </svg>
                            <span data-i18n="tool_props">Propriedades</span>
                        </button>
                    </div>
                    <div class="panel-title" data-i18n="panel_properties">Propriedades</div>
                </div>

                <!-- Blocks Panel (INSERT / I, BLOCK / B, GROUP / G) -->
                <div class="ribbon-panel">
                    <div class="panel-tools">
                        <button class="tool-btn-large" id="btnRibbonBlocks" data-i18n-title="tool_blocks_title" title="Biblioteca de Blocos Arquitetônicos & Civis ABNT (I / INSERT)" onclick="cadcloneUI.openBlockPalette()">
                            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none">
                                <rect x="3" y="3" width="7" height="7" rx="1"></rect>
                                <rect x="14" y="3" width="7" height="7" rx="1"></rect>
                                <rect x="14" y="14" width="7" height="7" rx="1"></rect>
                                <rect x="3" y="14" width="7" height="7" rx="1"></rect>
                            </svg>
                            <span data-i18n="tool_blocks">Blocos (I)</span>
                        </button>
                        <button class="tool-btn-large" data-i18n-title="tool_block_create_title" title="Criar Novo Bloco a partir da Seleção (B / BLOCK)" onclick="cadcloneUI.cmd('BLOCK')">
                            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none">
                                <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                                <line x1="12" y1="8" x2="12" y2="16"></line>
                                <line x1="8" y1="12" x2="16" y2="12"></line>
                            </svg>
                            <span data-i18n="tool_block_create">Criar (B)</span>
                        </button>
                        <button class="tool-btn-large" data-i18n-title="tool_group_title" title="Agrupar Objetos em Conjunto Selecionável (G / GROUP)" onclick="cadcloneUI.cmd('GROUP')">
                            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none">
                                <rect x="3" y="3" width="8" height="8" rx="1"></rect>
                                <rect x="13" y="13" width="8" height="8" rx="1"></rect>
                                <path d="M11 7h4a2 2 0 0 1 2 2v4"></path>
                            </svg>
                            <span data-i18n="tool_group">Agrupar (G)</span>
                        </button>
                        <button class="tool-btn-large" data-i18n-title="tool_ungroup_title" title="Desagrupar Objetos Selecionados (UNG / UNGROUP)" onclick="cadcloneUI.cmd('UNGROUP')">
                            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none">
                                <rect x="3" y="3" width="7" height="7" rx="1"></rect>
                                <rect x="14" y="14" width="7" height="7" rx="1"></rect>
                                <line x1="14" y1="10" x2="10" y2="14" stroke-dasharray="2,2"></line>
                                <line x1="10" y1="10" x2="14" y2="14"></line>
                            </svg>
                            <span data-i18n="tool_ungroup">Desagrupar (UNG)</span>
                        </button>
                    </div>
                    <div class="panel-title" data-i18n="panel_blocks">Blocos</div>
                </div>

                <!-- Underlay / Calco Técnico Panel (PDFATTACH, IMAGEATTACH, UNDERLAY) -->
                <div class="ribbon-panel">
                    <div class="panel-tools">
                        <button class="tool-btn-large" data-i18n-title="tool_attach_pdf_title" title="Anexar PDF sob o desenho como calco técnico (PDFATTACH)" onclick="cadcloneUI.cmd('PDFATTACH')">
                            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="12" y1="18" x2="12" y2="12"></line>
                                <line x1="9" y1="15" x2="15" y2="15"></line>
                            </svg>
                            <span data-i18n="tool_attach_pdf">Anexar PDF</span>
                        </button>
                        <button class="tool-btn-large" data-i18n-title="tool_attach_image_title" title="Anexar Imagem PNG/JPG sob o desenho (IMAGEATTACH)" onclick="cadcloneUI.cmd('IMAGEATTACH')">
                            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none">
                                <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                <polyline points="21 15 16 10 5 21"></polyline>
                            </svg>
                            <span data-i18n="tool_attach_image">Anexar Img</span>
                        </button>
                        <button class="tool-btn-large" data-i18n-title="tool_underlay_hud_title" title="Abrir/fechar barra de ajuste do calco (UNDERLAY)" onclick="cadcloneUI.cmd('UNDERLAY')">
                            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none">
                                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                                <polyline points="2 17 12 22 22 17"></polyline>
                                <polyline points="2 12 12 17 22 12"></polyline>
                            </svg>
                            <span data-i18n="tool_underlay_hud">Calco HUD</span>
                        </button>
                    </div>
                    <div class="panel-title" data-i18n="underlay_bar_title">Calco Técnico</div>
                </div>
            </div>

            <!-- Ribbon Tab: Anotação (Annotate) -->
            <div class="ribbon-panels" id="ribbonAnnotatePanel" style="display: none;">
                <!-- Dimensions Panel -->
                <div class="ribbon-panel">
                    <div class="panel-tools">
                        <button class="tool-btn-large" data-i18n-title="tool_dim_linear_title" title="Cota Linear (DLI)" onclick="cadcloneUI.cmd('DIMLINEAR')">
                            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><line x1="4" y1="8" x2="20" y2="8"/><line x1="4" y1="4" x2="4" y2="12"/><line x1="20" y1="4" x2="20" y2="12"/><text x="12" y="7" font-size="6" text-anchor="middle" fill="currentColor">3.50</text></svg>
                            <span data-i18n="tool_dim_linear">Cota Linear</span>
                        </button>
                        <button class="tool-btn-large" data-i18n-title="tool_dim_aligned_title" title="Cota Alinhada com Encaixe em Endpoints (DAL / DIM)" onclick="cadcloneUI.cmd('DIMALIGNED')">
                            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><line x1="5" y1="19" x2="19" y2="5"/><line x1="2" y1="16" x2="8" y2="22"/><line x1="16" y1="2" x2="22" y2="8"/></svg>
                            <span data-i18n="tool_dim_aligned">Cota Inclinada</span>
                        </button>
                        <button class="tool-btn-large" data-i18n-title="tool_dim_style_title" title="Estilo & Escala da Cota / Tamanho da Fonte (D / DIMSCALE / DIMTXT)" onclick="cadcloneUI.openDimSettings()">
                            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none">
                                <path d="M4 6h16M4 3v6M20 3v6"/>
                                <text x="12" y="19" font-size="8" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle" stroke="none">A±</text>
                            </svg>
                            <span data-i18n="tool_dim_style">Escala Cota</span>
                        </button>
                    </div>
                    <div class="panel-title" data-i18n="panel_dimensions">Cotas Técnicas</div>
                </div>

                <!-- Text Panel -->
                <div class="ribbon-panel">
                    <div class="panel-tools">
                        <button class="tool-btn-large" data-i18n-title="tool_mtext_title" title="Texto Técnico (MT)" onclick="cadcloneUI.cmd('MTEXT')">
                            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><polyline points="4 7 4 4 20 4 20 7"/><line x1="12" y1="4" x2="12" y2="20"/></svg>
                            <span data-i18n="tool_mtext">Texto (MT)</span>
                        </button>
                        <button class="tool-btn-large" data-i18n-title="tool_room_label_title" title="Rótulo de Ambiente" onclick="cadcloneUI.promptRoomLabel()">
                            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                            <span data-i18n="tool_room_label">Nome Ambiente</span>
                        </button>
                    </div>
                    <div class="panel-title" data-i18n="panel_text">Textos</div>
                </div>

                <!-- Inquiry / Measure Panel -->
                <div class="ribbon-panel">
                    <div class="panel-tools">
                        <button class="tool-btn-large" data-i18n-title="tool_measure" title="Medir Distância (DI)" onclick="cadcloneUI.cmd('DIST')">
                            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M2 12h20"/><path d="M2 9v6"/><path d="M22 9v6"/><path d="M8 9v6"/><path d="M14 9v6"/></svg>
                            <span data-i18n="tool_measure">Medir (DI)</span>
                        </button>
                        <button class="tool-btn-large" title="Definir Camada Cotas" onclick="cadcloneUI.changeActiveLayer('Cotas'); cadcloneUI.updateLayerDropdown();">
                            <div style="width: 20px; height: 20px; background: #ffff00; border-radius: 3px; border: 1px solid #ffffff;"></div>
                            <span data-i18n="tool_layer_dims">Camada Cotas</span>
                        </button>
                        <button class="tool-btn-large" title="Definir Camada Textos" onclick="cadcloneUI.changeActiveLayer('Textos'); cadcloneUI.updateLayerDropdown();">
                            <div style="width: 20px; height: 20px; background: #00ff00; border-radius: 3px; border: 1px solid #ffffff;"></div>
                            <span data-i18n="tool_layer_text">Camada Textos</span>
                        </button>
                    </div>
                    <div class="panel-title" data-i18n="panel_inquiry">Medições & Camadas</div>
                </div>
            </div>

            <!-- Ribbon Tab: Exportar / Prancha (Output) -->
            <div class="ribbon-panels" id="ribbonOutputPanel" style="display: none;">
                <!-- Plot / Sheet Panel -->
                <div class="ribbon-panel">
                    <div class="panel-tools">
                        <button class="tool-btn-large" data-i18n-title="tool_plot_pdf_title" title="Gerar Prancha ABNT PDF (PLOT)" onclick="cadcloneUI.openPlotModal()">
                            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
                            <span data-i18n="tool_plot_pdf">Prancha ABNT (PDF)</span>
                        </button>
                    </div>
                    <div class="panel-title" data-i18n="panel_plot">Prancha & Impressão</div>
                </div>

                <!-- CAD Export Panel -->
                <div class="ribbon-panel">
                    <div class="panel-tools">
                        <button class="tool-btn-large" data-i18n-title="tool_sample_model_title" title="Carregar Planta Baixa Modelo Completa 25x10m" onclick="cadcloneUI.loadSampleDrawing(true)">
                            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                            <span data-i18n="tool_sample_model">Planta Modelo</span>
                        </button>
                        <button class="tool-btn-large" data-i18n-title="tool_save_dxf_title" title="Salvar Arquivo DXF (QSAVE)" onclick="cadcloneUI.saveDXF()">
                            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
                            <span data-i18n="tool_save_dxf">Salvar DXF</span>
                        </button>
                        <button class="tool-btn-large" data-i18n-title="tool_open_cad_title" title="Abrir Arquivo DXF / DWG" onclick="cadcloneUI.openFileDialog()">
                            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
                            <span data-i18n="tool_open_cad">Abrir DWG/DXF</span>
                        </button>
                    </div>
                    <div class="panel-title" data-i18n="panel_cad_files">Arquivos CAD</div>
                </div>

                <!-- Image Export Panel -->
                <div class="ribbon-panel">
                    <div class="panel-tools">
                        <button class="tool-btn-large" data-i18n-title="tool_export_png_title" title="Exportar Imagem PNG em Alta Resolução" onclick="cadcloneUI.exportImage('png')">
                            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <span data-i18n="tool_export_png">Imagem PNG</span>
                        </button>
                        <button class="tool-btn-large" data-i18n-title="tool_export_jpg_title" title="Exportar Imagem JPEG" onclick="cadcloneUI.exportImage('jpeg')">
                            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <span data-i18n="tool_export_jpg">Imagem JPG</span>
                        </button>
                    </div>
                    <div class="panel-title" data-i18n="panel_images">Imagens</div>
                </div>

                <!-- Underlay / Calco Técnico Panel in Output -->
                <div class="ribbon-panel">
                    <div class="panel-tools">
                        <button class="tool-btn-large" data-i18n-title="tool_attach_pdf_title" title="Anexar PDF sob o desenho como calco técnico (PDFATTACH)" onclick="cadcloneUI.cmd('PDFATTACH')">
                            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="12" y1="18" x2="12" y2="12"></line>
                                <line x1="9" y1="15" x2="15" y2="15"></line>
                            </svg>
                            <span data-i18n="tool_attach_pdf">Anexar PDF</span>
                        </button>
                        <button class="tool-btn-large" data-i18n-title="tool_attach_image_title" title="Anexar Imagem PNG/JPG sob o desenho (IMAGEATTACH)" onclick="cadcloneUI.cmd('IMAGEATTACH')">
                            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none">
                                <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                <polyline points="21 15 16 10 5 21"></polyline>
                            </svg>
                            <span data-i18n="tool_attach_image">Anexar Img</span>
                        </button>
                    </div>
                    <div class="panel-title" data-i18n="underlay_bar_title">Calco Técnico</div>
                </div>
            </div>
        </div>

        <!-- 2.5 AutoCAD Drawing File Tabs Bar -->
        <div class="cad-file-tabs-bar" id="cadFileTabsBar">
            <button class="file-tab-start" id="btnTabStart" onclick="cadcloneUI.showStartDashboard()" data-i18n-title="tab_start_title" title="Página Inicial / Start (Projetos Recentes e Ações Rápidas)">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <span data-i18n="tab_start">Start</span>
            </button>
            <div class="file-tabs-scroll" id="fileTabsScroll">
                <div class="file-tabs-list" id="fileTabsList">
                    <!-- Populated dynamically by cadcloneUI.renderFileTabs() -->
                </div>
            </div>
            <button class="file-tab-add" id="btnTabAdd" onclick="cadcloneUI.createDocument()" data-i18n-title="tab_new_title" title="Novo Desenho (+) (Ctrl+N)">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
            </button>
        </div>

        <!-- 3. Viewport (Model Space Canvas) -->
        <main class="cad-viewport-container" id="viewportContainer">
            <canvas id="cadCanvas"></canvas>

            <!-- Underlay Floating HUD Bar -->
            <div id="cadUnderlayBar" class="cad-underlay-bar" style="display: none;">
                <div class="underlay-bar-drag-handle">⠿</div>
                <div class="underlay-info">
                    <span id="underlayFileName" class="underlay-name">📄 Calco</span>
                    <span id="underlayDimsBadge" class="underlay-badge">0.00m × 0.00m</span>
                </div>
                <div class="underlay-divider"></div>
                <div class="underlay-slider-group" title="Ajustar opacidade do calco">
                    <span class="underlay-label" data-i18n="underlay_opacity_label">Opacidade:</span>
                    <input type="range" id="underlayOpacitySlider" min="0.05" max="1" step="0.05" value="0.5">
                    <span id="underlayOpacityVal" class="underlay-val">50%</span>
                </div>
                <div class="underlay-divider"></div>
                <button id="underlayRotateBtn" class="underlay-icon-btn" data-i18n-title="underlay_btn_rotate" title="Girar Calco 90° no sentido horário (GIRAR / ROTATE)">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
                    <span id="underlayRotBadge" style="font-size: 10px; margin-left: 2px; font-family: 'JetBrains Mono', monospace;">0°</span>
                </button>
                <button id="underlayZoomOutBtn" class="underlay-icon-btn" data-i18n-title="underlay_btn_zoom_out" title="Diminuir tamanho do calco (-10%)">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                </button>
                <button id="underlayZoomInBtn" class="underlay-icon-btn" data-i18n-title="underlay_btn_zoom_in" title="Aumentar tamanho do calco (+10%)">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                </button>
                <button id="underlayMoveBtn" class="underlay-icon-btn" data-i18n-title="underlay_btn_move" title="Mover / Reposicionar calco no desenho (MOVE / MOVER)">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="5 9 2 12 5 15"/><polyline points="9 5 12 2 15 5"/><polyline points="15 19 12 22 9 19"/><polyline points="19 9 22 12 19 15"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="22"/></svg>
                </button>
                <div class="underlay-divider"></div>
                <button id="underlayCalibrateBtn" class="underlay-action-btn" data-i18n-title="underlay_btn_calibrate_title" title="Calibrar escala métrica real 1:1 clicando em 2 pontos de uma cota conhecida">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/></svg>
                    <span data-i18n="underlay_btn_calibrate">Calibrar (1:1)</span>
                </button>
                <button id="underlayLockBtn" class="underlay-icon-btn" data-i18n-title="underlay_btn_lock" title="Travar / Destravar posição do calco">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>
                </button>
                <button id="underlayVisBtn" class="underlay-icon-btn" data-i18n-title="underlay_btn_hide" title="Ocultar / Exibir Calco">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                </button>
                <button id="underlayRemoveBtn" class="underlay-icon-btn danger" data-i18n-title="underlay_btn_remove_title" title="Remover Calco">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                </button>
            </div>

            <!-- Drag-and-Drop Overlay -->
            <div id="cadDropOverlay" class="cad-drop-overlay" style="display: none;">
                <div class="drop-overlay-box">
                    <div class="drop-icon">📥</div>
                    <div class="drop-title" data-i18n="drop_overlay_text">Solte o arquivo aqui</div>
                    <div class="drop-sub" data-i18n="drop_overlay_hint">Suporta PDF, Imagens (PNG/JPG) e arquivos DXF/DWG</div>
                </div>
            </div>

            <!-- Dynamic Input HUD (F12) -->
            <div id="dynamicInputHud" class="dynamic-input-hud">
                <div class="dyn-field-group">
                    <input type="text" id="dynDistInput" class="dyn-input dyn-dist" placeholder="Distância" autocomplete="off" spellcheck="false">
                    <span class="dyn-tab-hint" id="dynTabHint" title="Pressione TAB para alternar para Ângulo">⇥ TAB</span>
                    <div class="dyn-angle-container">
                        <span class="dyn-angle-prefix">&lt;</span>
                        <input type="text" id="dynAngleInput" class="dyn-input dyn-angle" placeholder="Ângulo" autocomplete="off" spellcheck="false">
                    </div>
                </div>
            </div>

            <!-- ViewCube Widget -->
            <div class="cad-viewcube">
                <div class="cad-viewcube-face">SUPERIOR</div>
                <div class="cad-viewcube-wcs">WCS</div>
            </div>

            <!-- 4. Docked / Collapsible AutoCAD Command Line -->
            <div class="cad-command-dock" id="commandDock">
                <!-- Autocomplete Floating Suggestions -->
                <div class="command-autocomplete-popup" id="commandAutoComplete">
                    <div class="autocomplete-list" id="autoCompleteList"></div>
                </div>

                <div class="command-history-pane" id="commandHistoryPane">
                    <div class="history-line">CADClone — Sistema CAD 2D para Engenharia Civil pronto.</div>
                    <div class="history-line">Digite um comando (ex: L, C, REC, M, CO, Z, LA) ou pressione Espaço para repetir.</div>
                </div>
                <div class="command-input-row">
                    <span class="command-prompt-label" id="commandPromptLabel">Command: </span>
                    <input type="text" id="cadCommandInput" class="command-input-field" placeholder="Digite um comando..." autocomplete="off" spellcheck="false">
                    
                    <!-- Toggle Expand / Collapse History (F2) -->
                    <button class="command-tools-btn" id="btnCmdToggleExpand" title="Expandir Histórico de Comandos (F2)" onclick="cadcloneUI.toggleHistoryExpanded()">
                        <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2.5" fill="none" id="iconCmdExpand">
                            <polyline points="18 15 12 9 6 15"/>
                        </svg>
                    </button>

                    <!-- Minimize Command Line to Statusbar (Ctrl+9) -->
                    <button class="command-tools-btn" id="btnCmdMinimize" title="Recolher / Ocultar Linha de Comando (Ctrl+9)" onclick="cadcloneUI.minimizeCommandDock()">
                        <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2.5" fill="none">
                            <line x1="5" y1="12" x2="19" y2="12"/>
                        </svg>
                    </button>
                </div>
            </div>
        </main>

        <!-- 5. AutoCAD Status Bar (Bottom) -->
        <footer class="cad-statusbar">
            <div class="status-left-group">
                <!-- Model / Layout Tabs directly in bottom status bar -->
                <div class="viewport-layout-tabs">
                    <button class="layout-tab active" id="tabModel" onclick="cadcloneUI.selectLayoutTab('model')" data-i18n="layout_model" title="Espaço do Modelo (Model)">Model</button>
                    <button class="layout-tab" id="tabLayout1" onclick="cadcloneUI.selectLayoutTab('layout')" data-i18n="layout_sheet" title="Layout 1 (Prancha ABNT)">Layout1 (Prancha ABNT)</button>
                </div>

                <div class="status-coords" id="statusCoords">
                    X: 0.0000, Y: 0.0000, Z: 0.0000
                </div>

                <!-- Restore Command Dock Pill (shown only when command dock is minimized) -->
                <button class="status-btn" id="btnRestoreCommandDock" onclick="cadcloneUI.restoreCommandDock()" data-i18n-title="status_cmd_dock_title" title="Exibir Linha de Comando (Ctrl+9 / F2)" style="display: none; color: #38bdf8; border-color: rgba(56, 189, 248, 0.4); background: rgba(2, 132, 199, 0.15);">
                    <svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" stroke-width="2" fill="none"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
                    <span data-i18n="status_cmd_dock">Comando (F2)</span>
                </button>
            </div>

            <div class="status-toggles">
                <button class="status-btn active" id="btnGridToggle" onclick="cadcloneUI.cmdSystem.toggleGrid()" data-i18n="status_grid" title="Grade (F7)">GRADE (F7)</button>
                <button class="status-btn" id="btnOrthoToggle" onclick="cadcloneUI.cmdSystem.toggleOrtho()" data-i18n="status_ortho" title="Modo Orto (F8)">ORTO (F8)</button>
                <button class="status-btn active" id="btnPolarToggle" onclick="cadcloneUI.cmdSystem.togglePolar()" data-i18n="status_polar" title="Rastreamento Polar (F10)">POLAR (F10)</button>
                <button class="status-btn active" id="btnSnapToggle" onclick="cadcloneUI.cmdSystem.toggleSnap()" data-i18n="status_osnap" title="Snap ao Objeto (F3)">OSNAP (F3)</button>
                <button class="status-btn active" id="btnDynToggle" onclick="cadcloneUI.cmdSystem.toggleDyn()" data-i18n="status_dyn" title="Entrada Dinâmica (F12)">DYN (F12)</button>
            </div>

            <div style="display: flex; align-items: center; gap: 8px;">
                <div class="status-autosave-badge" id="statusAutoSave" data-i18n-title="status_autosave_tooltip" title="AutoSave Contínuo (AutoCAD Drawing Recovery ativo)">
                    <span class="autosave-pulse-dot" id="autoSaveDot"></span>
                    <span id="statusAutoSaveText" data-i18n="status_autosave_active">AutoSave Ativo</span>
                </div>
                <select class="status-scale-selector" id="viewportScaleSelect" onchange="cadcloneUI.changeScale(this.value)">
                    <option value="1:1">1:1</option>
                    <option value="1:20">1:20</option>
                    <option value="1:25">1:25</option>
                    <option value="1:50" selected>1:50</option>
                    <option value="1:100">1:100</option>
                    <option value="1:200">1:200</option>
                </select>
            </div>
        </footer>

        <!-- Institutional Standard Footer (4U.IA.BR) -->
        <footer class="app-footer">
            <div class="app-footer-left">
                <span>&copy; <?= date('Y') ?> <a href="https://4u.ia.br" target="_blank" rel="noopener noreferrer">4U.IA.BR</a> &bull; CADClone &bull; <span data-i18n="footer_rights">Todos os direitos reservados.</span></span>
            </div>
            <div class="app-footer-links">
                <a href="privacidade.php" target="_blank" rel="noopener noreferrer" class="app-footer-link">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    <span data-i18n="footer_privacy">Privacidade &amp; LGPD</span>
                </a>
                <span class="app-footer-sep">&bull;</span>
                <a href="termos.php" target="_blank" rel="noopener noreferrer" class="app-footer-link">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                    <span data-i18n="footer_terms">Termos de Uso</span>
                </a>
                <span class="app-footer-sep">&bull;</span>
                <a href="suporte.php" target="_blank" rel="noopener noreferrer" class="app-footer-link">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                    <span data-i18n="footer_support">Suporte &amp; FAQ</span>
                </a>
                <span class="app-footer-sep">&bull;</span>
                <a href="tutorial.php" target="_blank" rel="noopener noreferrer" class="app-footer-link" style="color: #38bdf8;" title="Guia Completo de Uso &amp; Tutorial">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                    <span data-i18n="footer_tutorial">Tutorial &amp; Guia</span>
                </a>
                <span class="app-footer-sep">&bull;</span>
                <a href="https://github.com/4u-Labs" target="_blank" rel="noopener noreferrer" class="app-footer-link" title="GitHub 4U-Labs">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                    <span>GitHub</span>
                </a>
                <span class="app-footer-sep">&bull;</span>
                <a href="https://4u.ia.br" target="_blank" rel="noopener noreferrer" class="app-footer-link" style="color: var(--cad-accent);" title="Portal 4U.IA.BR">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
                    <span>4U.IA.BR</span>
                </a>
            </div>
        </footer>
    </div>

    <!-- Hidden File Input for DWG/DXF -->
    <input type="file" id="cadFileInput" accept=".dxf,.dwg" onchange="cadcloneUI.handleFileSelected(this.files[0]); this.value = '';">
    <!-- Hidden File Inputs for Underlay PDF and Images -->
    <input type="file" id="cadPdfInput" accept=".pdf">
    <input type="file" id="cadImageInput" accept="image/png,image/jpeg,image/webp,image/bmp">

    <!-- Modal: Layer Properties Manager (LA) -->
    <div class="modal-overlay" id="layerModal">
        <div class="modal-card">
            <div class="modal-header">
                <div class="modal-title">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
                    <span data-i18n="layer_modal_title">Gerenciador de Propriedades de Camadas (LAYER)</span>
                </div>
                <button class="modal-close-btn" onclick="cadcloneUI.closeModals()">&times;</button>
            </div>
            <div class="modal-body">
                <table class="layer-table" id="layerTable">
                    <thead>
                        <tr>
                            <th data-i18n="layer_col_status">Status</th>
                            <th data-i18n="layer_col_name">Nome da Camada</th>
                            <th data-i18n="layer_col_color">Cor (ACI)</th>
                            <th data-i18n="layer_col_linetype">Tipo de Linha</th>
                            <th data-i18n="layer_col_lineweight">Espessura</th>
                            <th data-i18n="layer_col_visible">Visível</th>
                        </tr>
                    </thead>
                    <tbody id="layerTableBody">
                        <!-- Populated dynamically -->
                    </tbody>
                </table>

                <div style="display: flex; gap: 10px; margin-top: 10px; align-items: center;">
                    <input type="text" id="newLayerNameInput" class="form-input" data-i18n-placeholder="layer_new_placeholder" placeholder="Nova camada (ex: Demolir, Fundacao)..." style="flex: 1;">
                    <input type="color" id="newLayerColorInput" value="#00ffff" style="width: 42px; height: 36px; border: none; cursor: pointer; border-radius: 4px;">
                    <select id="newLayerLinetypeInput" class="form-select" style="width: 140px; height: 36px; padding: 4px 8px;">
                        <option value="CONTINUOUS">CONTINUOUS</option>
                        <option value="DASHED">DASHED</option>
                        <option value="HIDDEN">HIDDEN</option>
                        <option value="CENTER">CENTER</option>
                        <option value="PHANTOM">PHANTOM</option>
                        <option value="DOT">DOT</option>
                        <option value="DASHDOT">DASHDOT</option>
                    </select>
                    <button class="btn-primary" onclick="cadcloneUI.addNewLayer()" data-i18n="layer_btn_add">+ Adicionar Camada</button>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn-secondary" onclick="cadcloneUI.closeModals()" data-i18n="modal_close">Fechar</button>
            </div>
        </div>
    </div>

    <!-- Modal: Plot / Export ABNT PDF -->
    <div class="modal-overlay" id="plotModal">
        <div class="modal-card">
            <div class="modal-header">
                <div class="modal-title">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
                    <span data-i18n="plot_modal_title">Traçar / Exportar Prancha ABNT em PDF (PLOT)</span>
                </div>
                <button class="modal-close-btn" onclick="cadcloneUI.closeModals()">&times;</button>
            </div>
            <div class="modal-body">
                <div class="form-grid">
                    <div class="form-group">
                        <label class="form-label" data-i18n="plot_paper_size">Formato do Papel (ABNT NBR 10068)</label>
                        <select class="form-select" id="pdfPaperSize">
                            <option value="a4">A4 (297 x 210 mm)</option>
                            <option value="a3" selected>A3 (420 x 297 mm)</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label class="form-label" data-i18n="plot_orientation">Orientação</label>
                        <select class="form-select" id="pdfOrientation">
                            <option value="landscape" selected>Paisagem (Landscape)</option>
                            <option value="portrait">Retrato (Portrait)</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label class="form-label" data-i18n="plot_scale">Escala de Impressão</label>
                        <select class="form-select" id="pdfScale">
                            <option value="1:25">1:25</option>
                            <option value="1:50" selected>1:50 (Padrão Arquitetônico)</option>
                            <option value="1:100">1:100</option>
                            <option value="1:200">1:200</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label class="form-label" data-i18n="plot_sheet_num">Número da Prancha</label>
                        <input type="text" class="form-input" id="pdfSheetNumber" value="01/01">
                    </div>

                    <div class="form-group col-span-2">
                        <label class="form-label" data-i18n="plot_project_name">Nome do Projeto (Carimbo Técnico)</label>
                        <input type="text" class="form-input" id="pdfProjectName" value="RESIDÊNCIA UNIFAMILIAR — PLANTA BAIXA">
                    </div>

                    <div class="form-group">
                        <label class="form-label" data-i18n="plot_author">Responsável Técnico</label>
                        <input type="text" class="form-input" id="pdfAuthor" value="Eng. Fabiano">
                    </div>

                    <div class="form-group">
                        <label class="form-label" data-i18n="plot_crea">CREA / CAU</label>
                        <input type="text" class="form-input" id="pdfCrea" value="CREA: 284920-SP">
                    </div>

                    <div class="form-group col-span-2">
                        <label class="form-label" data-i18n="plot_client">Cliente / Proprietário</label>
                        <input type="text" class="form-input" id="pdfClient" value="Cliente Residencial">
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn-secondary" onclick="cadcloneUI.closeModals()" data-i18n="modal_cancel">Cancelar</button>
                <button class="btn-primary" onclick="cadcloneUI.generatePDF()" data-i18n="plot_btn_submit">Gerar Prancha PDF</button>
            </div>
        </div>
    </div>

    <!-- Modal: Exportar Imagem em Alta Resolução (PNG / JPEG) -->
    <div class="modal-overlay" id="exportImageModal">
        <div class="modal-card" style="max-width: 580px;">
            <div class="modal-header">
                <div class="modal-title">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none">
                        <rect x="3" y="3" width="18" height="18" rx="2"/>
                        <circle cx="8.5" cy="8.5" r="1.5"/>
                        <polyline points="21 15 16 10 5 21"/>
                    </svg>
                    <span data-i18n="export_modal_title">Exportar Imagem do Projeto (Alta Resolução)</span>
                </div>
                <button class="modal-close-btn" onclick="cadcloneUI.closeModals()">&times;</button>
            </div>
            <div class="modal-body">
                <p style="color: var(--cad-text-muted); font-size: 13px; margin-bottom: 14px; line-height: 1.4;">
                    Gere uma imagem nítida com fundo 100% sólido e enquadramento automático do desenho, pronta para envio no WhatsApp, pranchas e relatórios técnicos.
                </p>

                <!-- Theme Selection Cards (Fundo Branco vs Fundo Escuro) -->
                <label class="form-label" style="margin-bottom: 8px; font-weight: 600;">Estilo de Fundo & Contraste</label>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 16px;">
                    <label class="export-theme-card active" id="themeCardWhite" style="border: 2px solid #0284c7; background: rgba(2, 132, 199, 0.1); border-radius: 8px; padding: 10px; cursor: pointer; display: flex; flex-direction: column; gap: 6px; transition: all 0.2s ease;">
                        <div style="display: flex; align-items: center; justify-content: space-between;">
                            <span style="font-weight: 600; color: #f8fafc; font-size: 13px;">Fundo Branco (Recomendado)</span>
                            <input type="radio" name="exportImgTheme" value="white" checked style="accent-color: #0284c7;" onchange="cadcloneUI.updateExportThemeCard()">
                        </div>
                        <div style="height: 36px; background: #ffffff; border-radius: 4px; border: 1px solid #cbd5e1; display: flex; align-items: center; justify-content: center; gap: 6px; overflow: hidden; padding: 0 8px;">
                            <span style="height: 4px; width: 35%; background: #0369a1; border-radius: 2px;"></span>
                            <span style="height: 3px; width: 25%; background: #b45309; border-radius: 2px;"></span>
                            <span style="height: 3px; width: 20%; background: #0f172a; border-radius: 2px;"></span>
                        </div>
                        <span style="font-size: 11px; color: #94a3b8;">Prancha Técnica: contraste perfeito para WhatsApp, documentos e impressão.</span>
                    </label>

                    <label class="export-theme-card" id="themeCardDark" style="border: 1px solid var(--cad-border); background: rgba(255, 255, 255, 0.02); border-radius: 8px; padding: 10px; cursor: pointer; display: flex; flex-direction: column; gap: 6px; transition: all 0.2s ease;">
                        <div style="display: flex; align-items: center; justify-content: space-between;">
                            <span style="font-weight: 600; color: #f8fafc; font-size: 13px;">Fundo Escuro AutoCAD</span>
                            <input type="radio" name="exportImgTheme" value="dark" style="accent-color: #0284c7;" onchange="cadcloneUI.updateExportThemeCard()">
                        </div>
                        <div style="height: 36px; background: #18191c; border-radius: 4px; border: 1px solid #334155; display: flex; align-items: center; justify-content: center; gap: 6px; overflow: hidden; padding: 0 8px;">
                            <span style="height: 4px; width: 35%; background: #00ffff; border-radius: 2px;"></span>
                            <span style="height: 3px; width: 25%; background: #ffff00; border-radius: 2px;"></span>
                            <span style="height: 3px; width: 20%; background: #00ff00; border-radius: 2px;"></span>
                        </div>
                        <span style="font-size: 11px; color: #94a3b8;">Model Space CAD: fundo escuro sólido e cores clássicas sem transparência.</span>
                    </label>
                </div>

                <div class="form-grid">
                    <div class="form-group">
                        <label class="form-label">Formato do Arquivo</label>
                        <select class="form-select" id="exportImgFormat">
                            <option value="png" selected>PNG (.png) — Alta Definição / Sem Perdas</option>
                            <option value="jpeg">JPEG (.jpg) — Compacto / Fotográfico</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label class="form-label">Resolução / Nitidez</label>
                        <select class="form-select" id="exportImgRes">
                            <option value="2560" selected>2K Quad HD (2560 px) — Recomendado</option>
                            <option value="3840">4K Ultra HD (3840 px) — Máxima Nitidez</option>
                            <option value="1920">Full HD (1920 px) — Rápido & Leve</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label class="form-label">Enquadramento</label>
                        <select class="form-select" id="exportImgFit">
                            <option value="extents" selected>Ajustar aos Objetos do Desenho (Extents)</option>
                            <option value="currentView">Vista Atual da Tela (Current View)</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label class="form-label">Nome do Arquivo / Projeto</label>
                        <input type="text" class="form-input" id="exportImgProjectName" value="PLANTA BAIXA RESIDENCIAL">
                    </div>

                    <div class="form-group col-span-2" style="margin-top: 4px; display: flex; flex-direction: column; gap: 8px;">
                        <label style="display: flex; align-items: center; gap: 8px; font-size: 13px; color: #cbd5e1; cursor: pointer;">
                            <input type="checkbox" id="exportImgUnderlay" checked style="accent-color: #0284c7;">
                            <span>Incluir imagem/calco técnico de fundo (se houver anexado)</span>
                        </label>
                        <label style="display: flex; align-items: center; gap: 8px; font-size: 13px; color: #cbd5e1; cursor: pointer;">
                            <input type="checkbox" id="exportImgWatermark" checked style="accent-color: #0284c7;">
                            <span>Incluir carimbo técnico discreto no rodapé (CADClone • Projeto • Data)</span>
                        </label>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn-secondary" onclick="cadcloneUI.closeModals()">Cancelar</button>
                <button class="btn-primary" onclick="cadcloneUI.executeImageExport()" style="display: inline-flex; align-items: center; gap: 6px;">
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    <span>Baixar Imagem</span>
                </button>
            </div>
        </div>
    </div>

    <!-- Modal: AutoCAD Cheatsheet / Help (F1) -->
    <div class="modal-overlay" id="helpModal">
        <div class="modal-card">
            <div class="modal-header">
                <div class="modal-title">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                    <span data-i18n="help_modal_title">Teclas de Atalho & Comandos do AutoCAD</span>
                </div>
                <button class="modal-close-btn" onclick="cadcloneUI.closeModals()">&times;</button>
            </div>
            <div class="modal-body">
                <p style="color: var(--cad-text-muted); margin-bottom: 12px;" data-i18n="help_intro">
                    O CADClone foi desenhado para respeitar 100% da sua memória muscular de desenhista e engenheiro. Basta digitar os atalhos abaixo em qualquer ponto da tela:
                </p>

                <table class="cheatsheet-table">
                    <thead>
                        <tr>
                            <th style="color: #94a3b8; text-align: left; padding: 6px;" data-i18n="help_col_cmd">Comando</th>
                            <th style="color: #94a3b8; text-align: left; padding: 6px;" data-i18n="help_col_shortcut">Atalho</th>
                            <th style="color: #94a3b8; text-align: left; padding: 6px;" data-i18n="help_col_desc">Descrição</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td><span class="kbd-badge">LINE</span></td><td><span class="kbd-badge">L</span></td><td data-i18n="help_desc_line">Desenha linha contínua</td></tr>
                        <tr><td><span class="kbd-badge">PLINE</span></td><td><span class="kbd-badge">PL</span></td><td data-i18n="help_desc_pline">Desenha polilinha contínua</td></tr>
                        <tr><td><span class="kbd-badge">CIRCLE</span></td><td><span class="kbd-badge">C</span></td><td data-i18n="help_desc_circle">Desenha círculo (centro + raio)</td></tr>
                        <tr><td><span class="kbd-badge">RECTANG</span></td><td><span class="kbd-badge">REC</span></td><td data-i18n="help_desc_rectang">Desenha retângulo por dois cantos</td></tr>
                        <tr><td><span class="kbd-badge">ARC</span></td><td><span class="kbd-badge">A</span></td><td data-i18n="help_desc_arc">Desenha arco por 3 pontos</td></tr>
                        <tr><td><span class="kbd-badge">MOVE</span></td><td><span class="kbd-badge">M</span></td><td data-i18n="help_desc_move">Move entidades selecionadas</td></tr>
                        <tr><td><span class="kbd-badge">COPY</span></td><td><span class="kbd-badge">CO / CP</span></td><td data-i18n="help_desc_copy">Copia entidades com ponto base</td></tr>
                        <tr><td><span class="kbd-badge">ROTATE</span></td><td><span class="kbd-badge">RO</span></td><td data-i18n="help_desc_rotate">Rotaciona entidades em graus</td></tr>
                        <tr><td><span class="kbd-badge">OFFSET</span></td><td><span class="kbd-badge">O</span></td><td data-i18n="help_desc_offset">Cria paralelas com distância definida</td></tr>
                        <tr><td><span class="kbd-badge">ERASE</span></td><td><span class="kbd-badge">E / DEL</span></td><td data-i18n="help_desc_erase">Apaga objetos selecionados</td></tr>
                        <tr><td><span class="kbd-badge">DIST</span></td><td><span class="kbd-badge">DI</span></td><td data-i18n="help_desc_dist">Mede distância, delta X, delta Y e ângulo</td></tr>
                        <tr><td><span class="kbd-badge">DIMALIGNED</span></td><td><span class="kbd-badge">DAL / DIM</span></td><td data-i18n="help_desc_dimaligned">Cota alinhada em endpoints (horizontal, vertical ou inclinada)</td></tr>
                        <tr><td><span class="kbd-badge">DIMLINEAR</span></td><td><span class="kbd-badge">DLI</span></td><td data-i18n="help_desc_dimlinear">Cota linear ortogonal projetada</td></tr>
                        <tr><td><span class="kbd-badge" data-i18n="help_key_shift">SHIFT (Segurar)</span></td><td><span class="kbd-badge">Shift</span></td><td data-i18n="help_desc_shift">Trava Orto temporária (TEMPOVERRIDES horizontal / vertical)</td></tr>
                        <tr><td><span class="kbd-badge">MTEXT</span></td><td><span class="kbd-badge">MT / T</span></td><td data-i18n="help_desc_mtext">Insere texto técnico no desenho</td></tr>
                        <tr><td><span class="kbd-badge">ZOOM EXTENTS</span></td><td><span class="kbd-badge">Z E</span></td><td data-i18n="help_desc_zoom_extents">Enquadra todo o projeto na tela</td></tr>
                        <tr><td><span class="kbd-badge">GROUP</span></td><td><span class="kbd-badge">G</span></td><td data-i18n="help_desc_group">Agrupa objetos selecionados em conjunto atômico</td></tr>
                        <tr><td><span class="kbd-badge">UNGROUP</span></td><td><span class="kbd-badge">UNG</span></td><td data-i18n="help_desc_ungroup">Desagrupa conjunto de objetos previamente agrupados</td></tr>
                        <tr><td><span class="kbd-badge">LAYER</span></td><td><span class="kbd-badge">LA</span></td><td data-i18n="help_desc_layer">Abre Gerenciador de Camadas</td></tr>
                        <tr><td><span class="kbd-badge">LINETYPE</span></td><td><span class="kbd-badge">LT</span></td><td data-i18n="help_desc_linetype">Define tipo de linha da entidade ou camada</td></tr>
                        <tr><td><span class="kbd-badge">LTSCALE</span></td><td><span class="kbd-badge">LTS</span></td><td data-i18n="help_desc_ltscale">Ajusta escala global de traços técnicos</td></tr>
                        <tr><td><span class="kbd-badge">UNDO</span></td><td><span class="kbd-badge">U</span></td><td data-i18n="help_desc_undo">Desfaz a última ação</td></tr>
                        <tr><td><span class="kbd-badge">CANCEL</span></td><td><span class="kbd-badge">ESC</span></td><td data-i18n="help_desc_cancel">Cancela comando atual e limpa seleção</td></tr>
                        <tr><td><span class="kbd-badge">REPEAT</span></td><td><span class="kbd-badge" data-i18n="help_key_space_enter">ESPAÇO / ENTER</span></td><td data-i18n="help_desc_repeat">Repete o último comando executado</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="modal-footer" style="display: flex; justify-content: space-between; align-items: center;">
                <div style="display: flex; gap: 12px; font-size: 11px;">
                    <a href="tutorial.php" target="_blank" rel="noopener noreferrer" style="color: #38bdf8; text-decoration: none; font-weight: 600;" data-i18n="footer_tutorial">Tutorial &amp; Guia</a>
                    <span style="color: rgba(255,255,255,0.2);">&bull;</span>
                    <a href="suporte.php" target="_blank" rel="noopener noreferrer" style="color: #94a3b8; text-decoration: none;" data-i18n="footer_support">Suporte &amp; FAQ</a>
                    <span style="color: rgba(255,255,255,0.2);">&bull;</span>
                    <a href="privacidade.php" target="_blank" rel="noopener noreferrer" style="color: #94a3b8; text-decoration: none;" data-i18n="footer_privacy">Privacidade &amp; LGPD</a>
                    <span style="color: rgba(255,255,255,0.2);">&bull;</span>
                    <a href="termos.php" target="_blank" rel="noopener noreferrer" style="color: #94a3b8; text-decoration: none;" data-i18n="footer_terms">Termos de Uso</a>
                </div>
                <button class="btn-primary" onclick="cadcloneUI.closeModals()" data-i18n="modal_understood">Entendido</button>
            </div>
        </div>
    </div>

    <!-- Modal: DWG Assistant & Format Guidance -->
    <div class="modal-overlay" id="dwgModal">
        <div class="modal-card">
            <div class="modal-header">
                <div class="modal-title">
                    <span class="dwg-badge">DWG</span>
                    <span data-i18n="dwg_modal_title">Aviso de Arquivo Autodesk DWG</span>
                </div>
                <button class="modal-close-btn" onclick="cadcloneUI.closeDwgModal()">&times;</button>
            </div>
            <div class="modal-body">
                <div class="dwg-info-box">
                    <div class="dwg-file-name" id="dwgModalFileName">desenho.dwg</div>
                    <div class="dwg-file-meta" id="dwgModalVersion" data-i18n="dwg_version_detected">Versão detectada: AutoCAD DWG Nativo</div>
                </div>

                <p class="dwg-p" data-i18n="dwg_p1">
                    O formato <strong>.DWG</strong> é binário proprietário fechado da Autodesk. Para desenhar ou importar no navegador com 100% de precisão métrica vetorial:
                </p>

                <div class="dwg-options-grid">
                    <div class="dwg-opt-card highlight">
                        <div class="dwg-opt-header">
                            <span>🌟</span>
                            <span data-i18n="dwg_blocks_card_title">Biblioteca de Blocos do CADClone</span>
                        </div>
                        <div class="dwg-opt-desc" data-i18n="dwg_blocks_card_desc">
                            Se você baixou este arquivo para usar blocos (carros, motos, árvores, móveis, pessoas ou esquadrias), o CADClone já conta com <strong>mais de 25 blocos integrados</strong> prontos em escala real!
                        </div>
                        <button class="dwg-btn-primary" onclick="cadcloneUI.closeDwgModal(); cadcloneUI.openBlockPalette();" data-i18n="dwg_btn_blocks">
                            Explorar Blocos Integrados
                        </button>
                    </div>

                    <div class="dwg-opt-card">
                        <div class="dwg-opt-header">
                            <span>⚡</span>
                            <span data-i18n="dwg_convert_card_title">Converter para DXF (Grátis)</span>
                        </div>
                        <div class="dwg-opt-desc" data-i18n="dwg_convert_card_desc">
                            Converta seu arquivo DWG para <strong>DXF</strong> online em segundos e arraste o arquivo gerado diretamente para a tela do CADClone:
                        </div>
                        <div style="display:flex; flex-direction:column; gap:6px; margin-top:auto;">
                            <a href="https://cloudconvert.com/dwg-to-dxf" target="_blank" rel="noopener" class="dwg-btn-secondary">
                                🔗 CloudConvert DWG para DXF
                            </a>
                            <a href="https://anyconv.com/pt/conversor-de-dwg-para-dxf/" target="_blank" rel="noopener" class="dwg-btn-secondary">
                                🔗 AnyConv Conversor Online
                            </a>
                        </div>
                    </div>
                </div>

                <div class="dwg-tip" data-i18n="dwg_tip">
                    💡 <strong>Se você possui o AutoCAD / Civil 3D / Revit:</strong> Clique em <code>Salvar Como (Save As)</code> e selecione <code>AutoCAD DXF (*.dxf)</code>. O arquivo DXF abrirá instantaneamente com todas as camadas e cotas.
                </div>
            </div>
            <div class="modal-footer">
                <button class="block-tab-btn" onclick="cadcloneUI.closeDwgModal()" data-i18n="modal_understood">Entendido</button>
            </div>
        </div>
    </div>

    <!-- Modal: AutoCAD Drawing Recovery Manager (Assistente de Recuperação de Falhas) -->
    <div class="modal-overlay" id="cadRecoveryModal">
        <div class="modal-card" style="max-width: 520px; border-color: rgba(245, 158, 11, 0.45); box-shadow: 0 25px 60px rgba(0,0,0,0.85), 0 0 20px rgba(245, 158, 11, 0.2);">
            <div class="modal-header" style="border-bottom-color: rgba(245, 158, 11, 0.3);">
                <div class="modal-title" style="color: #fbbf24;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                    </svg>
                    <span data-i18n="recovery_modal_title">Recuperação de Desenho (AutoSave)</span>
                </div>
                <button class="modal-close-btn" onclick="cadcloneUI.dismissRecoveryModal()">&times;</button>
            </div>
            <div class="modal-body">
                <div style="display: flex; gap: 14px; align-items: flex-start; margin-bottom: 16px;">
                    <div style="background: rgba(245, 158, 11, 0.15); border: 1px solid rgba(245, 158, 11, 0.3); border-radius: 8px; padding: 12px; font-size: 24px; line-height: 1;">
                        ⚡
                    </div>
                    <div>
                        <h4 data-i18n="recovery_h4" style="margin: 0 0 4px; font-size: 15px; color: #f8fafc;">Projeto em andamento recuperado!</h4>
                        <p data-i18n="recovery_desc" style="margin: 0; font-size: 13px; color: #cbd5e1; line-height: 1.5;">
                            O CADClone detectou um projeto salvo automaticamente antes do fechamento inesperado ou recarregamento da página.
                        </p>
                    </div>
                </div>

                <div style="background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 6px; padding: 12px 16px; margin-bottom: 16px; font-size: 13px; color: #94a3b8;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                        <span data-i18n="recovery_save_date">Data do Salvamento:</span>
                        <strong style="color: #38bdf8;" id="recoveryModalTime">--:--:--</strong>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                        <span data-i18n="recovery_total_objects">Total de Objetos / Entidades:</span>
                        <strong style="color: #22c55e;" id="recoveryModalCount">0</strong>
                    </div>
                    <div style="display: flex; justify-content: space-between;">
                        <span data-i18n="recovery_protection">Proteção Ativa:</span>
                        <span style="color: #f59e0b; font-weight: 600;" data-i18n="recovery_protection_val">AutoCAD Drawing Recovery</span>
                    </div>
                </div>

                <p data-i18n="recovery_question" style="font-size: 12px; color: #94a3b8; margin: 0;">
                    Deseja restaurar seu desenho para continuar exatamente de onde parou?
                </p>
            </div>
            <div class="modal-footer" style="justify-content: flex-end; gap: 10px;">
                <button class="btn-secondary" onclick="cadcloneUI.discardRecovery()" data-i18n="recovery_btn_discard" data-i18n-title="recovery_discard_title" title="Descartar este backup e iniciar normalmente">
                    Descartar Backup
                </button>
                <button class="btn-primary" onclick="cadcloneUI.restoreAutoSave()" style="background: #2563eb; font-weight: 600;" data-i18n="recovery_btn_restore" data-i18n-title="recovery_restore_title" title="Restaurar todas as entidades na tela">
                    🚀 Restaurar Projeto
                </button>
            </div>
        </div>
    </div>

    <!-- AutoCAD Right-Click Context Menu -->
    <div class="cad-context-menu" id="cadContextMenu">
        <div class="context-menu-content" id="contextMenuContent"></div>
    </div>

    <!-- AutoCAD Quick Properties Inspector Panel (Ctrl+1 / PROPS) -->
    <div class="cad-props-panel" id="cadPropertiesPanel">
        <div class="props-header">
            <div class="props-title-group">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="4" y1="21" x2="4" y2="14"></line>
                    <line x1="4" y1="10" x2="4" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12" y2="3"></line>
                    <line x1="20" y1="21" x2="20" y2="16"></line>
                    <line x1="20" y1="12" x2="20" y2="3"></line>
                    <line x1="1" y1="14" x2="7" y2="14"></line>
                    <line x1="9" y1="8" x2="15" y2="8"></line>
                    <line x1="17" y1="16" x2="23" y2="16"></line>
                </svg>
                <span data-i18n="props_header_title">Propriedades</span>
            </div>
            <div class="props-header-actions">
                <span class="props-badge" id="propsBadge">Geral</span>
                <button class="props-close-btn" onclick="cadcloneUI.togglePropertiesPanel(false)" data-i18n-title="props_close_title" title="Fechar (Ctrl+1)">&times;</button>
            </div>
        </div>
        <div class="props-body" id="propsBody">
            <!-- Populated dynamically by updatePropertiesPanel() -->
        </div>
    </div>


    <!-- AutoCAD Block Library Palette (INSERT / I) -->
    <div class="cad-block-palette" id="cadBlockPalette">
        <div class="block-palette-header">
            <div class="block-palette-title">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="3" width="7" height="7" rx="1"></rect>
                    <rect x="14" y="3" width="7" height="7" rx="1"></rect>
                    <rect x="14" y="14" width="7" height="7" rx="1"></rect>
                    <rect x="3" y="14" width="7" height="7" rx="1"></rect>
                </svg>
                <span data-i18n="block_palette_title">Biblioteca de Blocos ABNT (Arquitetura & Engenharia)</span>
            </div>
            <button class="props-close-btn" onclick="cadcloneUI.closeBlockPalette()" title="Fechar">&times;</button>
        </div>
        <div class="block-tabs-nav-wrapper">
            <button class="block-tabs-nav-btn left" id="btnBlockTabPrev" onclick="cadcloneUI.scrollBlockTabs(-1)" title="Categorias Anteriores" data-i18n-title="block_nav_prev">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <div class="block-tabs" id="blockTabsBar">
                <button class="block-tab-btn active" data-cat="all" onclick="cadcloneUI.filterBlockCategory('all')" data-i18n="block_tab_all">Todos</button>
                <button class="block-tab-btn" data-cat="urbanism" onclick="cadcloneUI.filterBlockCategory('urbanism')" data-i18n="block_tab_urbanism">🏙️ Urbanismo</button>
                <button class="block-tab-btn" data-cat="mobility" onclick="cadcloneUI.filterBlockCategory('mobility')" data-i18n="block_tab_mobility">🚗 Mobilidade</button>
                <button class="block-tab-btn" data-cat="construction" onclick="cadcloneUI.filterBlockCategory('construction')" data-i18n="block_tab_construction">🏗️ Construção</button>
                <button class="block-tab-btn" data-cat="vegetation" onclick="cadcloneUI.filterBlockCategory('vegetation')" data-i18n="block_tab_vegetation">🌳 Paisagismo</button>
                <button class="block-tab-btn" data-cat="commercial" onclick="cadcloneUI.filterBlockCategory('commercial')" data-i18n="block_tab_commercial">🏢 Comercial</button>
                <button class="block-tab-btn" data-cat="infra" onclick="cadcloneUI.filterBlockCategory('infra')" data-i18n="block_tab_infra">⚡ Infraestrutura</button>
                <button class="block-tab-btn" data-cat="special" onclick="cadcloneUI.filterBlockCategory('special')" data-i18n="block_tab_special">✨ Especiais</button>
                <button class="block-tab-btn" data-cat="vehicles" onclick="cadcloneUI.filterBlockCategory('vehicles')" data-i18n="block_tab_vehicles">🚘 Veículos Leves</button>
                <button class="block-tab-btn" data-cat="furniture" onclick="cadcloneUI.filterBlockCategory('furniture')" data-i18n="block_tab_furniture">🛋️ Mobiliário</button>
                <button class="block-tab-btn" data-cat="doors" onclick="cadcloneUI.filterBlockCategory('doors')" data-i18n="block_tab_doors">🚪 Esquadrias</button>
                <button class="block-tab-btn" data-cat="fixtures" onclick="cadcloneUI.filterBlockCategory('fixtures')" data-i18n="block_tab_fixtures">🚿 Sanitários & Eletros</button>
                <button class="block-tab-btn" data-cat="leisure" onclick="cadcloneUI.filterBlockCategory('leisure')" data-i18n="block_tab_leisure">🏊 Lazer & Externa</button>
                <button class="block-tab-btn" data-cat="symbols" onclick="cadcloneUI.filterBlockCategory('symbols')" data-i18n="block_tab_symbols">📐 Símbolos & ABNT</button>
            </div>
            <button class="block-tabs-nav-btn right" id="btnBlockTabNext" onclick="cadcloneUI.scrollBlockTabs(1)" title="Próximas Categorias" data-i18n-title="block_nav_next">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
        </div>
        <div class="block-grid" id="blockGrid">
            <!-- Populated dynamically by renderBlockGrid() -->
        </div>
    </div>

    <!-- Modal: PDF Page Selection -->
    <div class="modal-overlay" id="cadPdfPageModal" style="display: none;">
        <div class="modal-card" style="max-width: 720px; width: 92%;">
            <div class="modal-header">
                <div class="modal-title">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                    <span data-i18n="pdf_modal_title">Selecionar Página do PDF</span>
                    <span id="pdfModalFileName" style="font-size: 11px; opacity: 0.7; margin-left: 8px;"></span>
                </div>
                <button class="modal-close-btn" onclick="cadUnderlayManager.closePageModal()">&times;</button>
            </div>
            <div class="modal-body" style="padding: 16px;">
                <p style="margin: 0 0 12px 0; font-size: 12px; color: var(--cad-text-muted);" data-i18n="pdf_modal_hint">Este documento possui múltiplas páginas. Clique na página desejada para carregar como calco:</p>
                <div class="pdf-page-grid" id="pdfPageGrid">
                    <!-- Populated dynamically by cad_underlay.js -->
                </div>
            </div>
            <div class="modal-footer" style="padding: 10px 16px; border-top: 1px solid var(--cad-border); display: flex; justify-content: flex-end;">
                <button class="btn btn-secondary" onclick="cadUnderlayManager.closePageModal()" data-i18n="pdf_modal_close">Cancelar</button>
            </div>
        </div>
    </div>

    <!-- Modal: AutoCAD Start Dashboard -->
    <div class="modal-overlay" id="startDashboardModal" style="display: none;">
        <div class="modal-card" style="max-width: 760px; width: 92%;">
            <div class="modal-header">
                <div class="modal-title">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    <span data-i18n="start_dashboard_title">Início — AutoCAD Clone Pro</span>
                </div>
                <button class="modal-close-btn" onclick="cadcloneUI.closeStartDashboard()">&times;</button>
            </div>
            <div class="modal-body" style="padding: 20px;">
                <p style="margin: 0 0 6px 0; font-size: 13px; color: var(--cad-text);" data-i18n="start_dashboard_subtitle">Comece um novo projeto, abra arquivos existentes ou explore modelos pré-carregados:</p>
                
                <div class="start-dashboard-grid">
                    <div class="start-card" onclick="cadcloneUI.closeStartDashboard(); cadcloneUI.createDocument();">
                        <div class="start-card-icon">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>
                        </div>
                        <div class="start-card-title" data-i18n="qa_new">Novo Desenho em Branco</div>
                        <div class="start-card-desc" data-i18n="start_card_new_desc">Cria uma nova aba vazia com grid milimétrico e camadas padrão.</div>
                    </div>

                    <div class="start-card" onclick="cadcloneUI.closeStartDashboard(); cadcloneUI.openFileDialog();">
                        <div class="start-card-icon">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                        </div>
                        <div class="start-card-title" data-i18n="qa_open">Abrir Arquivo DXF / DWG</div>
                        <div class="start-card-desc" data-i18n="start_card_open_desc">Importa arquivos DXF nativos, plantas arquitetônicas ou calcos técnicos.</div>
                    </div>

                    <div class="start-card" onclick="cadcloneUI.closeStartDashboard(); cadcloneUI.loadSampleDrawing(false);">
                        <div class="start-card-icon">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                        </div>
                        <div class="start-card-title" data-i18n="qa_sample">Planta Modelo 25x10m</div>
                        <div class="start-card-desc" data-i18n="start_card_sample_desc">Abre o projeto modelo completo com suíte, dormitórios, piscina e cotas.</div>
                    </div>

                    <div class="start-card" onclick="cadcloneUI.closeStartDashboard(); cadcloneUI.openBlockPalette();">
                        <div class="start-card-icon">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                        </div>
                        <div class="start-card-title" data-i18n="tool_insert_block">Galeria de Blocos</div>
                        <div class="start-card-desc" data-i18n="start_card_blocks_desc">Insira mobília, louças sanitárias, portas, janelas e vegetação.</div>
                    </div>
                </div>

                <div class="start-open-docs" id="startOpenDocsSection">
                    <div class="start-open-docs-title" data-i18n="start_open_tabs_title">Desenhos Abertos no Momento</div>
                    <div id="startOpenDocsList"></div>
                </div>
            </div>
            <div class="modal-footer" style="padding: 10px 20px; border-top: 1px solid var(--cad-border); display: flex; justify-content: flex-end;">
                <button class="btn btn-secondary" onclick="cadcloneUI.closeStartDashboard()" data-i18n="btn_close">Voltar ao Desenho</button>
            </div>
        </div>
    </div>

    <!-- Scripts -->
    <script src="libs/dxf-parser.min.js"></script>
    <script src="libs/jspdf.umd.min.js"></script>
    <script src="libs/pdf.min.js"></script>
    <script>
        if (typeof pdfjsLib !== 'undefined') {
            pdfjsLib.GlobalWorkerOptions.workerSrc = 'libs/pdf.worker.min.js';
        }
    </script>
    <script src="cad_i18n.js?v=1.6.1"></script>
    <script src="dxf_io.js?v=1.6.1"></script>
    <script src="osnap.js?v=1.6.1"></script>
    <script src="cad_blocks.js?v=1.6.1"></script>
    <script src="cad_engine.js?v=1.6.1"></script>
    <script src="command_system.js?v=1.6.1"></script>
    <script src="cad_underlay.js?v=1.6.1"></script>
    <script src="pdf_export.js?v=1.6.1"></script>

    <!-- Main CAD UI Controller -->
    <script>
        class CADCloneUI {
            constructor() {
                window.cadcloneUI = this;
                this.canvas = document.getElementById('cadCanvas');
                this.engine = new CADEngine(this.canvas);
                
                this.cmdInput = document.getElementById('cadCommandInput');
                this.cmdHistory = document.getElementById('commandHistoryPane');
                this.cmdPrompt = document.getElementById('commandPromptLabel');
                
                this.cmdSystem = new CommandSystem(
                    this.engine, 
                    this.cmdInput, 
                    this.cmdHistory, 
                    this.cmdPrompt
                );

                this.underlayManager = new CADUnderlayManager(this.engine, this);
                window.cadUnderlayManager = this.underlayManager;

                this.documents = [];
                this.activeDocId = null;
                this.docCounter = 1;

                this.initLanguage();
                if (this.cmdSystem && typeof this.cmdSystem.setLanguage === 'function') {
                    this.cmdSystem.setLanguage(this.currentLang);
                }

                this.engine.initMouseEvents(this.cmdSystem);
                this.initUI();
                this.initFileTabs();
                this.initAutoSave();
                this.initSampleDrawing();
                this.initPwaInstall();
            }

            detectLanguage() {
                const saved = localStorage.getItem('cadclone_lang');
                if (saved === 'pt' || saved === 'en') return saved;
                // If user's browser is Portuguese (pt, pt-BR, pt-PT), default to PT
                // If ANY other language (en, es, fr, de, it, ja, etc.), default to EN
                const navLang = (navigator.language || (navigator.languages && navigator.languages[0]) || '').toLowerCase();
                if (navLang.startsWith('pt')) {
                    return 'pt';
                }
                return 'en';
            }

            t(key, params = {}) {
                const lang = this.currentLang || 'en';
                const dict = (typeof CAD_I18N !== 'undefined' && CAD_I18N[lang]) 
                    ? CAD_I18N[lang] 
                    : ((typeof CAD_I18N !== 'undefined' && CAD_I18N.pt) ? CAD_I18N.pt : {});
                let text = dict[key];
                if (text === undefined) {
                    text = (typeof CAD_I18N !== 'undefined' && CAD_I18N.en && CAD_I18N.en[key] !== undefined)
                        ? CAD_I18N.en[key]
                        : key;
                }
                for (const [pKey, pVal] of Object.entries(params)) {
                    text = text.replace(new RegExp(`\\{${pKey}\\}`, 'g'), pVal);
                }
                return text;
            }

            initLanguage() {
                this.currentLang = this.detectLanguage();
                this.applyLanguageUI(this.currentLang);

                const btnPt = document.getElementById('btnLangPT') || document.getElementById('langBtnPt');
                const btnEn = document.getElementById('btnLangEN') || document.getElementById('langBtnEn');
                if (btnPt) {
                    btnPt.onclick = (e) => {
                        e.preventDefault();
                        this.setLanguage('pt');
                    };
                }
                if (btnEn) {
                    btnEn.onclick = (e) => {
                        e.preventDefault();
                        this.setLanguage('en');
                    };
                }
            }

            setLanguage(lang) {
                if (lang !== 'pt' && lang !== 'en') return;
                this.currentLang = lang;
                localStorage.setItem('cadclone_lang', lang);
                this.applyLanguageUI(lang);
                if (this.cmdSystem && typeof this.cmdSystem.setLanguage === 'function') {
                    this.cmdSystem.setLanguage(lang);
                }
                // Re-render open panels
                if (this.propsPanelEl && this.propsPanelEl.style.display === 'flex') {
                    this.updatePropertiesPanel();
                }
                if (this.blockPaletteEl && this.blockPaletteEl.style.display === 'flex') {
                    this.renderBlockGrid();
                }
                this.updateAutoSaveIndicator();

                const msg = lang === 'en' ? 'Language switched to English.' : 'Idioma alterado para Português.';
                if (this.cmdSystem && this.cmdSystem.logHistory) {
                    this.cmdSystem.logHistory(msg);
                }
            }

            applyLanguageUI(lang) {
                // Update switcher active buttons
                const btnPt = document.getElementById('btnLangPT') || document.getElementById('langBtnPt');
                const btnEn = document.getElementById('btnLangEN') || document.getElementById('langBtnEn');
                if (btnPt) btnPt.classList.toggle('active', lang === 'pt');
                if (btnEn) btnEn.classList.toggle('active', lang === 'en');
                document.documentElement.lang = lang;

                // Translate all elements with data-i18n
                document.querySelectorAll('[data-i18n]').forEach(el => {
                    const key = el.getAttribute('data-i18n');
                    const text = this.t(key);
                    if (text) {
                        if (text.includes('<') && text.includes('>')) {
                            el.innerHTML = text;
                        } else {
                            el.textContent = text;
                        }
                    }
                });

                // Translate all elements with data-i18n-title
                document.querySelectorAll('[data-i18n-title]').forEach(el => {
                    const key = el.getAttribute('data-i18n-title');
                    const text = this.t(key);
                    if (text) el.title = text;
                });

                // Translate all elements with data-i18n-placeholder
                document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
                    const key = el.getAttribute('data-i18n-placeholder');
                    const text = this.t(key);
                    if (text) el.placeholder = text;
                });

                // Update Document Title if default
                const docTitleEl = document.getElementById('cadDocTitle');
                if (docTitleEl && !this.currentCustomFilename) {
                    docTitleEl.textContent = this.t('doc_title_default');
                }
            }

            initUI() {
                // Focus command input when user clicks anywhere in command bar
                document.getElementById('commandDock').addEventListener('click', () => {
                    this.cmdInput.focus();
                });

                // Smooth horizontal mouse wheel scroll & nav updates for ribbon panels (no scrollbar displayed)
                document.querySelectorAll('.ribbon-panels').forEach(panels => {
                    panels.addEventListener('wheel', (e) => {
                        if (e.deltaY !== 0) {
                            panels.scrollLeft += e.deltaY;
                            this.updateRibbonScrollNav();
                            e.preventDefault();
                        }
                    }, { passive: false });
                    panels.addEventListener('scroll', () => {
                        this.updateRibbonScrollNav();
                    }, { passive: true });
                });

                window.addEventListener('resize', () => {
                    this.updateRibbonScrollNav();
                });
                setTimeout(() => this.updateRibbonScrollNav(), 200);

                // Context menu elements
                this.contextMenuEl = document.getElementById('cadContextMenu');
                this.contextMenuContent = document.getElementById('contextMenuContent');

                // Properties Panel Elements (Ctrl+1)
                this.propsPanelEl = document.getElementById('cadPropertiesPanel');
                this.propsBodyEl = document.getElementById('propsBody');
                this.propsBadgeEl = document.getElementById('propsBadge');

                // Block Library Palette Elements (INSERT / I)
                this.blockPaletteEl = document.getElementById('cadBlockPalette');
                this.blockGridEl = document.getElementById('blockGrid');
                this.activeBlockCategory = 'all';

                // Window ESC closes modals, context menu and block palette
                window.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape') {
                        this.closeModals();
                        this.hideContextMenu();
                        this.closeBlockPalette();
                        if (this.engine) {
                            this.engine.clearSelection(true);
                            this.updatePropertiesPanel();
                        }
                    }
                    if (e.key === 'F1') {
                        e.preventDefault();
                        this.openHelpModal();
                    }
                    if (e.key === 'F2') {
                        e.preventDefault();
                        this.restoreCommandDock();
                        this.toggleHistoryExpanded();
                    }
                    if ((e.ctrlKey || e.metaKey) && e.key === '9') {
                        e.preventDefault();
                        this.toggleCommandDockVisible();
                    }
                });

                // Window click closes context menu if clicking outside
                window.addEventListener('click', (e) => {
                    if (this.contextMenuEl && !this.contextMenuEl.contains(e.target)) {
                        this.hideContextMenu();
                    }
                });

                // Drag & Drop DXF / DWG directly onto workspace
                window.addEventListener('dragover', (e) => {
                    e.preventDefault();
                    if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
                });
                window.addEventListener('drop', (e) => {
                    e.preventDefault();
                    if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
                        const file = e.dataTransfer.files[0];
                        this.handleFileSelected(file);
                    }
                });

                // Dynamic Input HUD Elements (F12)
                this.dynHud = document.getElementById('dynamicInputHud');
                this.dynDistInput = document.getElementById('dynDistInput');
                this.dynAngleInput = document.getElementById('dynAngleInput');

                const handleDynKeyDown = (e) => {
                    if (e.key === 'Tab') {
                        e.preventDefault();
                        if (e.target === this.dynDistInput) {
                            const val = parseFloat(this.dynDistInput.value);
                            if (!isNaN(val) && val > 0) {
                                this.dynDistInput.classList.add('locked');
                            }
                            this.dynAngleInput.focus();
                            this.dynAngleInput.select();
                        } else {
                            const ang = parseFloat(this.dynAngleInput.value.replace('°', ''));
                            if (!isNaN(ang)) {
                                this.dynAngleInput.classList.add('locked');
                            }
                            this.dynDistInput.focus();
                            this.dynDistInput.select();
                        }
                        return;
                    }

                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        this.applyDynamicInput();
                        return;
                    }

                    if (e.key === 'Escape') {
                        e.preventDefault();
                        this.cmdSystem.cancel();
                        this.hideDynamicHud();
                        return;
                    }
                };

                if (this.dynDistInput) {
                    this.dynDistInput.addEventListener('keydown', handleDynKeyDown);
                    this.dynDistInput.addEventListener('focus', () => this.dynDistInput.select());
                }
                if (this.dynAngleInput) {
                    this.dynAngleInput.addEventListener('keydown', handleDynKeyDown);
                    this.dynAngleInput.addEventListener('focus', () => this.dynAngleInput.select());
                }
                const tabHint = document.getElementById('dynTabHint');
                if (tabHint) {
                    tabHint.addEventListener('click', () => {
                        if (document.activeElement === this.dynDistInput) {
                            this.dynAngleInput.focus();
                            this.dynAngleInput.select();
                        } else {
                            this.dynDistInput.focus();
                            this.dynDistInput.select();
                        }
                    });
                }

                // Update UI status bar
                this.updateStatusBar();
                this.updateLayerDropdown();
            }

            escapeHtml(str) {
                if (!str) return '';
                return String(str)
                    .replace(/&/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;')
                    .replace(/"/g, '&quot;')
                    .replace(/'/g, '&#039;');
            }

            // AutoCAD Drawing Tabs Management
            initFileTabs() {
                if (!Array.isArray(this.documents) || this.documents.length === 0) {
                    const initialTitle = this.currentLang === 'en' ? 'Drawing1.dwg' : 'Desenho1.dwg';
                    this.createDocument(initialTitle, null, true);
                } else {
                    this.renderFileTabs();
                }

                // Keyboard shortcuts: Ctrl+W to close active tab
                window.addEventListener('keydown', (e) => {
                    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'w') {
                        e.preventDefault();
                        if (this.activeDocId) {
                            this.closeDocument(this.activeDocId, e);
                        }
                    }
                });
            }

            getActiveDocument() {
                if (!this.activeDocId || !Array.isArray(this.documents)) return null;
                return this.documents.find(d => d.id === this.activeDocId) || null;
            }

            createDocument(title = null, state = null, makeActive = true) {
                const docId = 'doc_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5);
                const defaultPrefix = this.currentLang === 'en' ? 'Drawing' : 'Desenho';
                const docTitle = title || `${defaultPrefix}${this.docCounter++}.dwg`;

                const docState = state || {
                    entities: [],
                    layers: {
                        '0': { name: '0', color: '#ffffff', linetype: 'CONTINUOUS', lineweight: 0.25, visible: true, locked: false, frozen: false }
                    },
                    activeLayer: '0',
                    ltscale: 1.0,
                    zoom: 1.0,
                    originX: this.canvas ? this.canvas.width / 2 : 400,
                    originY: this.canvas ? this.canvas.height / 2 : 300,
                    underlay: null,
                    undoStack: [],
                    redoStack: [],
                    isDirty: false
                };

                const newDoc = {
                    id: docId,
                    title: docTitle,
                    state: docState
                };

                this.documents.push(newDoc);

                if (makeActive) {
                    this.switchDocument(docId, true);
                } else {
                    this.renderFileTabs();
                }

                return newDoc;
            }

            syncActiveDocState() {
                if (!this.activeDocId || !this.engine) return;
                const curDoc = this.getActiveDocument();
                if (!curDoc) return;

                curDoc.state = {
                    entities: this.engine.entities,
                    layers: Object.assign({}, this.engine.layers),
                    activeLayer: this.engine.activeLayer,
                    ltscale: this.engine.ltscale || 1.0,
                    zoom: this.engine.zoom,
                    originX: this.engine.originX,
                    originY: this.engine.originY,
                    underlay: this.engine.underlay,
                    undoStack: [...(this.engine.undoStack || [])],
                    redoStack: [...(this.engine.redoStack || [])],
                    isDirty: !!this.engine.isDirty
                };
            }

            loadDocState(state) {
                if (!state || !this.engine) return;

                if (typeof this.engine.clearSelection === 'function') {
                    this.engine.clearSelection();
                } else if (this.engine.selectedIds && typeof this.engine.selectedIds.clear === 'function') {
                    this.engine.selectedIds.clear();
                }

                if (this.cmdSystem) {
                    if (typeof this.cmdSystem.cancelCommand === 'function') {
                        this.cmdSystem.cancelCommand();
                    } else if (typeof this.cmdSystem.cancel === 'function') {
                        this.cmdSystem.cancel();
                    }
                }

                this.engine.entities = Array.isArray(state.entities) ? state.entities : [];
                this.engine.layers = state.layers ? Object.assign({}, state.layers) : {
                    '0': { name: '0', color: '#ffffff', linetype: 'CONTINUOUS', lineweight: 0.25, visible: true, locked: false, frozen: false }
                };
                this.engine.activeLayer = state.activeLayer || '0';
                this.engine.ltscale = state.ltscale || 1.0;
                this.engine.zoom = (typeof state.zoom === 'number') ? state.zoom : 1.0;
                this.engine.originX = (typeof state.originX === 'number') ? state.originX : (this.canvas.width / 2);
                this.engine.underlay = state.underlay || null;
                if (this.engine.underlay && !this.engine.underlay.img && !this.engine.underlay.image && this.engine.underlay.src && typeof Image !== 'undefined') {
                    const uImg = new Image();
                    uImg.onload = () => {
                        if (this.engine.underlay) {
                            this.engine.underlay.img = uImg;
                            this.engine.underlay.image = uImg;
                            this.engine.render();
                        }
                    };
                    uImg.src = this.engine.underlay.src;
                }
                this.engine.undoStack = Array.isArray(state.undoStack) ? [...state.undoStack] : [];
                this.engine.redoStack = Array.isArray(state.redoStack) ? [...state.redoStack] : [];
                this.engine.isDirty = !!state.isDirty;

                // Recalculate max entity id to avoid collision
                let maxId = 0;
                for (const e of this.engine.entities) {
                    if (typeof e.id === 'number' && e.id > maxId) maxId = e.id;
                    else if (typeof e.id === 'string') {
                        const num = parseInt(e.id.replace(/\D/g, ''), 10);
                        if (!isNaN(num) && num > maxId) maxId = num;
                    }
                }
                this.engine._idCounter = Math.max(this.engine._idCounter || 1, maxId + 1);
                this.engine.entityIdCounter = this.engine._idCounter;

                if (this.underlayManager) this.underlayManager.updateHud();
                this.updatePropertiesPanel();
                if (typeof this.updateLayerDropdown === 'function') this.updateLayerDropdown();
                this.engine.render();
            }

            switchDocument(docId, syncFirst = true) {
                if (this.activeDocId === docId) return;

                if (syncFirst && this.activeDocId) {
                    this.syncActiveDocState();
                }

                const doc = this.documents.find(d => d.id === docId);
                if (!doc) return;

                this.activeDocId = docId;
                this.loadDocState(doc.state);
                this.renderFileTabs();
                this.updateAutoSaveIndicator(this.engine.isDirty ? 'dirty' : 'saved');

                const msg = this.currentLang === 'en'
                    ? `Switched to drawing: ${doc.title}`
                    : `Alternado para o desenho: ${doc.title}`;
                if (this.cmdSystem && this.cmdSystem.logHistory) {
                    this.cmdSystem.logHistory(msg);
                }
            }

            closeDocument(docId, event = null) {
                if (event) {
                    event.stopPropagation();
                    event.preventDefault();
                }

                const docIdx = this.documents.findIndex(d => d.id === docId);
                if (docIdx === -1) return;

                const doc = this.documents[docIdx];
                if (this.activeDocId === docId) {
                    this.syncActiveDocState();
                }

                const isDirty = (this.activeDocId === docId) ? this.engine.isDirty : doc.state.isDirty;
                if (isDirty) {
                    const confirmMsg = this.t('tab_confirm_close_dirty', { title: doc.title });
                    if (!confirm(confirmMsg)) {
                        return;
                    }
                }

                this.documents.splice(docIdx, 1);

                if (this.documents.length === 0) {
                    // Always keep at least 1 document open like AutoCAD
                    const defaultPrefix = this.currentLang === 'en' ? 'Drawing' : 'Desenho';
                    this.createDocument(`${defaultPrefix}${this.docCounter++}.dwg`, null, true);
                } else if (this.activeDocId === docId) {
                    const nextIdx = Math.min(docIdx, this.documents.length - 1);
                    this.switchDocument(this.documents[nextIdx].id, false);
                } else {
                    this.renderFileTabs();
                }
            }

            closeOtherDocuments(docId) {
                const targetDoc = this.documents.find(d => d.id === docId);
                if (!targetDoc) return;

                // Sync active doc first
                if (this.activeDocId) {
                    this.syncActiveDocState();
                }

                const otherDocs = this.documents.filter(d => d.id !== docId);
                const dirtyDocs = otherDocs.filter(d => d.state.isDirty);
                if (dirtyDocs.length > 0) {
                    const titles = dirtyDocs.map(d => d.title).join(', ');
                    if (!confirm(this.t('tab_confirm_close_dirty', { title: titles }))) {
                        return;
                    }
                }

                this.documents = [targetDoc];
                if (this.activeDocId !== docId) {
                    this.switchDocument(docId, false);
                } else {
                    this.renderFileTabs();
                }
            }

            renameDocument(docId) {
                const doc = this.documents.find(d => d.id === docId);
                if (!doc) return;

                const newName = prompt(this.t('tab_rename_prompt'), doc.title);
                if (newName && newName.trim()) {
                    let cleanName = newName.trim();
                    if (!cleanName.toLowerCase().endsWith('.dwg') && !cleanName.toLowerCase().endsWith('.dxf')) {
                        cleanName += '.dwg';
                    }
                    doc.title = cleanName;
                    this.renderFileTabs();
                }
            }

            renderFileTabs() {
                const listEl = document.getElementById('fileTabsList');
                if (!listEl) return;

                listEl.innerHTML = '';

                this.documents.forEach((doc) => {
                    const isActive = doc.id === this.activeDocId;
                    const isDirty = isActive ? (this.engine ? this.engine.isDirty : false) : !!doc.state.isDirty;

                    const tabEl = document.createElement('div');
                    tabEl.className = `file-tab${isActive ? ' active' : ''}`;
                    tabEl.setAttribute('data-doc-id', doc.id);
                    tabEl.title = `${doc.title}${isDirty ? ' *' : ''}`;

                    // Icon (DWG drawing file icon)
                    const iconSpan = document.createElement('span');
                    iconSpan.className = 'file-tab-icon';
                    iconSpan.innerHTML = `<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`;
                    tabEl.appendChild(iconSpan);

                    // Title
                    const titleSpan = document.createElement('span');
                    titleSpan.className = 'file-tab-title';
                    titleSpan.textContent = doc.title;
                    tabEl.appendChild(titleSpan);

                    // Dirty indicator
                    if (isDirty) {
                        const dirtySpan = document.createElement('span');
                        dirtySpan.className = 'file-tab-dirty';
                        dirtySpan.textContent = '*';
                        tabEl.appendChild(dirtySpan);
                    }

                    // Close button
                    const closeSpan = document.createElement('span');
                    closeSpan.className = 'file-tab-close';
                    closeSpan.setAttribute('data-i18n-title', 'tab_close_title');
                    closeSpan.title = this.t('tab_close_title');
                    closeSpan.innerHTML = '&times;';
                    closeSpan.onclick = (e) => {
                        this.closeDocument(doc.id, e);
                    };
                    tabEl.appendChild(closeSpan);

                    // Click to activate
                    tabEl.onclick = (e) => {
                        if (e.target === closeSpan) return;
                        this.switchDocument(doc.id, true);
                    };

                    // Right click context menu
                    tabEl.oncontextmenu = (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        this.showTabContextMenu(e, doc.id);
                    };

                    listEl.appendChild(tabEl);
                });

                // Update doc title in titlebar
                const activeDoc = this.getActiveDocument();
                const docTitleEl = document.getElementById('cadDocTitle');
                if (activeDoc && docTitleEl) {
                    const spaceName = this.currentLang === 'en' ? 'Model Space' : 'Espaço do Modelo (Model)';
                    const dirtyMark = (this.engine && this.engine.isDirty) ? ' *' : '';
                    docTitleEl.textContent = `[${activeDoc.title}${dirtyMark}] — ${spaceName}`;
                }
            }

            showTabContextMenu(e, docId) {
                if (!this.contextMenuEl || !this.contextMenuContent) return;
                const doc = this.documents.find(d => d.id === docId);
                if (!doc) return;

                const html = `
                    <div class="ctx-header">${this.escapeHtml(doc.title)}</div>
                    <div class="ctx-divider"></div>
                    <div class="ctx-item" onclick="cadcloneUI.switchDocument('${docId}'); cadcloneUI.hideContextMenu();">
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
                        <span>${this.currentLang === 'en' ? 'Activate Tab' : 'Ativar Aba'}</span>
                    </div>
                    <div class="ctx-item" onclick="cadcloneUI.renameDocument('${docId}'); cadcloneUI.hideContextMenu();">
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                        <span data-i18n="tab_rename">${this.t('tab_rename')}</span>
                    </div>
                    <div class="ctx-item" onclick="cadcloneUI.switchDocument('${docId}'); cadcloneUI.saveDXF(); cadcloneUI.hideContextMenu();">
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
                        <span data-i18n="tab_save_dxf">${this.t('tab_save_dxf')}</span>
                    </div>
                    <div class="ctx-divider"></div>
                    <div class="ctx-item" onclick="cadcloneUI.closeDocument('${docId}', event); cadcloneUI.hideContextMenu();">
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                        <span data-i18n="tab_close_title">${this.t('tab_close_title')}</span>
                    </div>
                    <div class="ctx-item" onclick="cadcloneUI.closeOtherDocuments('${docId}'); cadcloneUI.hideContextMenu();">
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/></svg>
                        <span data-i18n="tab_close_others">${this.t('tab_close_others')}</span>
                    </div>
                `;
                this.contextMenuContent.innerHTML = html;
                const posX = Math.min(e.clientX, window.innerWidth - 220);
                const posY = Math.min(e.clientY, window.innerHeight - 200);
                this.contextMenuEl.style.left = `${Math.max(10, posX)}px`;
                this.contextMenuEl.style.top = `${Math.max(10, posY)}px`;
                this.contextMenuEl.style.display = 'block';
            }

            showStartDashboard() {
                const modal = document.getElementById('startDashboardModal');
                if (!modal) return;

                // Sync active doc before opening dashboard
                this.syncActiveDocState();

                const listEl = document.getElementById('startOpenDocsList');
                if (listEl) {
                    let html = '';
                    this.documents.forEach(doc => {
                        const isActive = doc.id === this.activeDocId;
                        const count = (isActive && this.engine) ? this.engine.entities.length : (doc.state.entities ? doc.state.entities.length : 0);
                        const isDirty = (isActive && this.engine) ? this.engine.isDirty : doc.state.isDirty;
                        html += `
                            <div class="start-doc-item" onclick="cadcloneUI.closeStartDashboard(); cadcloneUI.switchDocument('${doc.id}');">
                                <div class="start-doc-item-title">
                                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                        <polyline points="14 2 14 8 20 8"></polyline>
                                    </svg>
                                    <span>${this.escapeHtml(doc.title)}${isDirty ? ' *' : ''}</span>
                                </div>
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <span style="font-size: 11px; color: var(--cad-text-muted);">${count} objs</span>
                                    ${isActive ? `<span class="start-doc-item-badge">${this.currentLang === 'en' ? 'ACTIVE' : 'ATIVO'}</span>` : ''}
                                </div>
                            </div>
                        `;
                    });
                    listEl.innerHTML = html;
                }

                const btnStart = document.getElementById('btnTabStart');
                if (btnStart) btnStart.classList.add('active');
                modal.style.display = 'flex';
                modal.classList.add('open');
            }

            closeStartDashboard() {
                const modal = document.getElementById('startDashboardModal');
                if (modal) {
                    modal.style.display = 'none';
                    modal.classList.remove('open');
                }
                const btnStart = document.getElementById('btnTabStart');
                if (btnStart) btnStart.classList.remove('active');
            }

            cmd(commandName) {
                this.cmdSystem.execute(commandName);
            }

            group() {
                this.cmd('GROUP');
            }

            ungroup() {
                this.cmd('UNGROUP');
            }

            showContextMenu(clientX, clientY) {
                if (!this.contextMenuEl || !this.contextMenuContent) return;

                const cmd = this.cmdSystem.currentCommand;
                const hasSelection = this.engine.selectedIds && this.engine.selectedIds.size > 0;
                const hasHidden = this.engine.hiddenEntityIds && this.engine.hiddenEntityIds.size > 0;
                const lastCmd = this.cmdSystem.lastExecutedCommand || 'LINE';
                const recent = this.cmdSystem.recentCommands || ['LINE', 'CIRCLE', 'OFFSET', 'TRIM'];

                let html = '';

                if (cmd) {
                    // --- MODE A: Active Command ---
                    html += `
                        <div class="ctx-item" onclick="cadcloneUI.ctxAction('enter')">
                            <svg viewBox="0 0 24 24"><polyline points="9 10 4 15 9 20"/><path d="M20 4v7a4 4 0 0 1-4 4H4"/></svg>
                            <span class="ctx-label">Enter (Confirmar)</span>
                            <span class="ctx-shortcut">↵ Enter</span>
                        </div>
                        <div class="ctx-item" onclick="cadcloneUI.ctxAction('cancel')">
                            <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                            <span class="ctx-label">Cancelar</span>
                            <span class="ctx-shortcut">Esc</span>
                        </div>
                    `;
                    if (cmd.name === 'LINE' || cmd.name === 'PLINE') {
                        html += `
                            <div class="ctx-separator"></div>
                            <div class="ctx-item" onclick="cadcloneUI.ctxAction('close')">
                                <svg viewBox="0 0 24 24"><polygon points="12 2 2 22 22 22"/></svg>
                                <span class="ctx-label">Fechar (Close)</span>
                                <span class="ctx-shortcut">C</span>
                            </div>
                        `;
                    }
                } else if (hasSelection) {
                    // --- MODE B: Objects Selected ---
                    const count = this.engine.selectedIds.size;
                    html += `
                        <div class="ctx-item" onclick="cadcloneUI.cmd('${lastCmd}'); cadcloneUI.hideContextMenu();">
                            <svg viewBox="0 0 24 24"><path d="M21.5 2v6h-6"/><path d="M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
                            <span class="ctx-label">Repetir ${lastCmd}</span>
                            <span class="ctx-shortcut">Espaço</span>
                        </div>
                        <div class="ctx-separator"></div>
                        <div class="ctx-item" onclick="cadcloneUI.cmd('MOVE'); cadcloneUI.hideContextMenu();">
                            <svg viewBox="0 0 24 24"><polyline points="5 9 2 12 5 15"/><polyline points="9 5 12 2 15 5"/><polyline points="15 19 12 22 9 19"/><polyline points="19 9 22 12 19 15"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="22"/></svg>
                            <span class="ctx-label">Mover</span>
                            <span class="ctx-shortcut">M</span>
                        </div>
                        <div class="ctx-item" onclick="cadcloneUI.cmd('COPY'); cadcloneUI.hideContextMenu();">
                            <svg viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                            <span class="ctx-label">Copiar</span>
                            <span class="ctx-shortcut">CO</span>
                        </div>
                        <div class="ctx-item" onclick="cadcloneUI.cmd('ROTATE'); cadcloneUI.hideContextMenu();">
                            <svg viewBox="0 0 24 24"><path d="M21.5 2v6h-6"/><path d="M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
                            <span class="ctx-label">Rotacionar</span>
                            <span class="ctx-shortcut">RO</span>
                        </div>
                        <div class="ctx-item" onclick="cadcloneUI.cmd('SCALE'); cadcloneUI.hideContextMenu();">
                            <svg viewBox="0 0 24 24"><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/><rect x="3" y="10" width="11" height="11" rx="1"/></svg>
                            <span class="ctx-label">Escalar</span>
                            <span class="ctx-shortcut">SC</span>
                        </div>
                        <div class="ctx-item" onclick="cadcloneUI.cmd('MIRROR'); cadcloneUI.hideContextMenu();">
                            <svg viewBox="0 0 24 24"><line x1="12" y1="2" x2="12" y2="22" stroke-dasharray="2 2"/><polygon points="4 6 10 12 4 18"/><polygon points="20 6 14 12 20 18"/></svg>
                            <span class="ctx-label">Espelhar</span>
                            <span class="ctx-shortcut">MI</span>
                        </div>
                        <div class="ctx-item" onclick="cadcloneUI.cmd('EXPLODE'); cadcloneUI.hideContextMenu();">
                            <svg viewBox="0 0 24 24"><path d="M4 4l4 4m8-4l-4 4m-4 8l-4 4m12-4l-4-4"/><circle cx="12" cy="12" r="2"/></svg>
                            <span class="ctx-label">Explodir (Bloco/Polilinha)</span>
                            <span class="ctx-shortcut">X</span>
                        </div>
                        <div class="ctx-item" onclick="cadcloneUI.cmd('BLOCK'); cadcloneUI.hideContextMenu();">
                            <svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
                            <span class="ctx-label">Criar Bloco</span>
                            <span class="ctx-shortcut">B</span>
                        </div>
                        <div class="ctx-item" onclick="cadcloneUI.cmd('GROUP'); cadcloneUI.hideContextMenu();">
                            <svg viewBox="0 0 24 24"><rect x="3" y="3" width="8" height="8" rx="1"/><rect x="13" y="13" width="8" height="8" rx="1"/><path d="M11 7h4a2 2 0 0 1 2 2v4"/></svg>
                            <span class="ctx-label">Agrupar</span>
                            <span class="ctx-shortcut">G</span>
                        </div>
                        <div class="ctx-item" onclick="cadcloneUI.cmd('UNGROUP'); cadcloneUI.hideContextMenu();">
                            <svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><line x1="14" y1="10" x2="10" y2="14" stroke-dasharray="2 2"/><line x1="10" y1="10" x2="14" y2="14"/></svg>
                            <span class="ctx-label">Desagrupar</span>
                            <span class="ctx-shortcut">UNG</span>
                        </div>
                        <div class="ctx-item" onclick="cadcloneUI.cmd('ERASE'); cadcloneUI.hideContextMenu();">
                            <svg viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                            <span class="ctx-label">Apagar (${count})</span>
                            <span class="ctx-shortcut">Del / E</span>
                        </div>
                        <div class="ctx-separator"></div>
                        <div class="ctx-item" onclick="cadcloneUI.ctxAction('isolate')">
                            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/></svg>
                            <span class="ctx-label">Isolar Objetos</span>
                        </div>
                        <div class="ctx-item" onclick="cadcloneUI.ctxAction('hide')">
                            <svg viewBox="0 0 24 24"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                            <span class="ctx-label">Ocultar Objetos Selecionados</span>
                        </div>
                        <div class="ctx-separator"></div>
                        <div class="ctx-item" onclick="cadcloneUI.ctxAction('deselect')">
                            <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                            <span class="ctx-label">Desmarcar Todos</span>
                            <span class="ctx-shortcut">Esc</span>
                        </div>
                        <div class="ctx-separator"></div>
                        <div class="ctx-item" onclick="cadcloneUI.togglePropertiesPanel(true); cadcloneUI.hideContextMenu();">
                            <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="9" y1="9" x2="21" y2="9"/><line x1="9" y1="15" x2="21" y2="15"/></svg>
                            <span class="ctx-label">Propriedades</span>
                            <span class="ctx-shortcut">Ctrl+1</span>
                        </div>
                    `;
                } else {
                    // --- MODE C: Empty Space ---
                    const recentHtml = recent.map(r => `
                        <div class="ctx-item" onclick="cadcloneUI.cmd('${r}'); cadcloneUI.hideContextMenu();">
                            <svg viewBox="0 0 24 24"><polyline points="13 17 18 12 13 7"/><polyline points="6 17 11 12 6 7"/></svg>
                            <span class="ctx-label">${r}</span>
                        </div>
                    `).join('');

                    html += `
                        <div class="ctx-item" onclick="cadcloneUI.cmd('${lastCmd}'); cadcloneUI.hideContextMenu();">
                            <svg viewBox="0 0 24 24"><path d="M21.5 2v6h-6"/><path d="M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
                            <span class="ctx-label">Repetir ${lastCmd}</span>
                            <span class="ctx-shortcut">Espaço</span>
                        </div>
                        <div class="ctx-item ctx-submenu-parent">
                            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                            <span class="ctx-label">Entradas Recentes</span>
                            <span class="ctx-chevron">▶</span>
                            <div class="ctx-submenu">
                                ${recentHtml}
                            </div>
                        </div>
                        <div class="ctx-separator"></div>
                        <div class="ctx-item" onclick="cadcloneUI.engine.zoomExtents(); cadcloneUI.hideContextMenu();">
                            <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/><line x1="11" y1="8" x2="11" y2="14"/></svg>
                            <span class="ctx-label">Zoom Extents</span>
                            <span class="ctx-shortcut">Z E</span>
                        </div>
                        <div class="ctx-item" onclick="cadcloneUI.engine.render(); cadcloneUI.hideContextMenu();">
                            <svg viewBox="0 0 24 24"><path d="M23 4v6h-6"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
                            <span class="ctx-label">Regenerar Modelo</span>
                            <span class="ctx-shortcut">RE</span>
                        </div>
                        <div class="ctx-separator"></div>
                        <div class="ctx-item" onclick="cadcloneUI.togglePropertiesPanel(true); cadcloneUI.hideContextMenu();">
                            <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="9" y1="9" x2="21" y2="9"/><line x1="9" y1="15" x2="21" y2="15"/></svg>
                            <span class="ctx-label">Propriedades</span>
                            <span class="ctx-shortcut">Ctrl+1</span>
                        </div>
                        <div class="ctx-item" onclick="cadcloneUI.openBlockPalette(); cadcloneUI.hideContextMenu();">
                            <svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>
                            <span class="ctx-label">Inserir Bloco</span>
                            <span class="ctx-shortcut">I</span>
                        </div>
                    `;

                    if (hasHidden) {
                        html += `
                            <div class="ctx-separator"></div>
                            <div class="ctx-item" onclick="cadcloneUI.ctxAction('unisolate')">
                                <svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                                <span class="ctx-label" style="color: #38bdf8;">Restaurar Objetos Ocultos</span>
                            </div>
                        `;
                    }

                    html += `
                        <div class="ctx-separator"></div>
                        <div class="ctx-item" onclick="cadcloneUI.openPlotModal(); cadcloneUI.hideContextMenu();">
                            <svg viewBox="0 0 24 24"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
                            <span class="ctx-label">Prancha ABNT / Imprimir</span>
                            <span class="ctx-shortcut">PLOT</span>
                        </div>
                        <div class="ctx-item" onclick="cadcloneUI.openHelpModal(); cadcloneUI.hideContextMenu();">
                            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                            <span class="ctx-label">Ajuda & Atalhos</span>
                            <span class="ctx-shortcut">F1</span>
                        </div>
                    `;
                }

                this.contextMenuContent.innerHTML = html;

                const menuW = 230;
                const menuH = 260;
                const posX = Math.min(clientX, window.innerWidth - menuW - 10);
                const posY = Math.min(clientY, window.innerHeight - menuH - 10);

                this.contextMenuEl.style.left = `${Math.max(10, posX)}px`;
                this.contextMenuEl.style.top = `${Math.max(10, posY)}px`;
                this.contextMenuEl.style.display = 'block';
            }

            hideContextMenu() {
                if (this.contextMenuEl) {
                    this.contextMenuEl.style.display = 'none';
                }
            }

            ctxAction(action) {
                this.hideContextMenu();
                if (action === 'enter') {
                    if (this.cmdSystem.currentCommand?.onEnter) {
                        this.cmdSystem.currentCommand.onEnter('');
                    } else {
                        this.cmdSystem.cancel();
                    }
                } else if (action === 'cancel') {
                    this.cmdSystem.cancel();
                } else if (action === 'close') {
                    if (this.cmdSystem.currentCommand?.onEnter) {
                        this.cmdSystem.currentCommand.onEnter('C');
                    }
                } else if (action === 'isolate') {
                    const count = this.engine.isolateSelected();
                    this.cmdSystem.logHistory(`ISOLATE ${count} objeto(s) isolado(s).`);
                } else if (action === 'hide') {
                    const count = this.engine.hideSelected();
                    this.cmdSystem.logHistory(`HIDE ${count} objeto(s) ocultado(s).`);
                } else if (action === 'unisolate') {
                    const count = this.engine.unisolateAll();
                    this.cmdSystem.logHistory(`UNISOLATE ${count} objeto(s) restaurado(s).`);
                } else if (action === 'deselect') {
                    this.engine.selectedIds.clear();
                    this.engine.render();
                    this.updatePropertiesPanel();
                }
            }

            updateDynamicHud(worldPt, screenPt) {
                if (!this.engine.dynamicInput || !this.dynHud) {
                    this.hideDynamicHud();
                    return;
                }

                const base = this.cmdSystem.getBasePoint();
                if (!base) {
                    this.hideDynamicHud();
                    return;
                }

                const dx = worldPt.x - base.x;
                const dy = worldPt.y - base.y;
                const dist = Math.hypot(dx, dy);
                const angleDeg = (Math.atan2(dy, dx) * 180 / Math.PI + 360) % 360;

                // Update distance if not focused or locked
                if (document.activeElement !== this.dynDistInput && !this.dynDistInput.classList.contains('locked')) {
                    this.dynDistInput.value = dist.toFixed(2);
                }

                // Update angle if not focused or locked
                if (document.activeElement !== this.dynAngleInput && !this.dynAngleInput.classList.contains('locked')) {
                    this.dynAngleInput.value = angleDeg.toFixed(1) + '°';
                }

                // Position HUD near cursor (clamp inside viewportContainer)
                const hudX = Math.min(screenPt.x + 20, this.canvas.width - 210);
                const hudY = Math.min(screenPt.y + 20, this.canvas.height - 45);

                this.dynHud.style.left = `${Math.max(10, hudX)}px`;
                this.dynHud.style.top = `${Math.max(10, hudY)}px`;
                this.dynHud.style.display = 'block';
            }

            hideDynamicHud() {
                if (!this.dynHud) return;
                this.dynHud.style.display = 'none';
                if (this.dynDistInput) {
                    this.dynDistInput.classList.remove('locked');
                    this.dynDistInput.blur();
                }
                if (this.dynAngleInput) {
                    this.dynAngleInput.classList.remove('locked');
                    this.dynAngleInput.blur();
                }
            }

            applyDynamicInput() {
                const base = this.cmdSystem.getBasePoint();
                if (!base) {
                    this.hideDynamicHud();
                    return;
                }

                let d = parseFloat(this.dynDistInput.value);
                if (isNaN(d) || d <= 0) {
                    d = Math.hypot(this.engine.mouseWorld.x - base.x, this.engine.mouseWorld.y - base.y);
                }

                let aDeg = parseFloat(this.dynAngleInput.value.replace('°', ''));
                let aRad = 0;
                if (!isNaN(aDeg)) {
                    aRad = aDeg * (Math.PI / 180);
                } else {
                    aRad = Math.atan2(this.engine.mouseWorld.y - base.y, this.engine.mouseWorld.x - base.x);
                }

                const targetWorldPt = {
                    x: base.x + d * Math.cos(aRad),
                    y: base.y + d * Math.sin(aRad)
                };

                this.cmdSystem.handleCanvasClick(targetWorldPt);

                if (this.dynDistInput) this.dynDistInput.classList.remove('locked');
                if (this.dynAngleInput) this.dynAngleInput.classList.remove('locked');

                // If command continues with next base point (e.g. continuous LINE / PLINE)
                if (this.cmdSystem.getBasePoint()) {
                    if (this.dynDistInput) {
                        this.dynDistInput.focus();
                        this.dynDistInput.select();
                    }
                } else {
                    this.hideDynamicHud();
                }

                this.engine.render();
            }

            // ----------------------------------------------------
            // Dimension Settings & Quick Properties
            // ----------------------------------------------------
            openDimSettings() {
                this.togglePropertiesPanel(true);
                const hasSelectedDim = this.engine.selectedIds && Array.from(this.engine.selectedIds).some(id => {
                    const ent = this.engine.getEntity(id);
                    return ent && ent.type === 'DIMENSION';
                });
                if (!hasSelectedDim) {
                    this.cmd('DIMSCALE');
                }
            }

            // ----------------------------------------------------
            // Quick Properties Inspector Panel (Ctrl+1 / PROPS)
            // ----------------------------------------------------
            togglePropertiesPanel(force) {
                if (!this.propsPanelEl) return;
                const isCurrentlyOpen = this.propsPanelEl.style.display === 'flex';
                const shouldOpen = (force !== undefined) ? !!force : !isCurrentlyOpen;
                this.propsPanelEl.style.display = shouldOpen ? 'flex' : 'none';
                const btn = document.getElementById('btnRibbonProps');
                if (btn) btn.classList.toggle('active', shouldOpen);
                if (shouldOpen) {
                    this.updatePropertiesPanel();
                }
            }

            updatePropertiesPanel() {
                if (!this.propsPanelEl || this.propsPanelEl.style.display !== 'flex') return;
                if (!this.propsBodyEl) return;

                const selectedIds = Array.from(this.engine.selectedIds || []);
                const count = selectedIds.length;
                const layerNames = Object.keys(this.engine.layers || { '0': {} });

                if (count === 0) {
                    // --- UNDERLAY IMAGE SELECTION ---
                    if (this.engine.underlay && this.engine.underlay.visible && this.engine.underlay.selected) {
                        const u = this.engine.underlay;
                        if (this.propsBadgeEl) this.propsBadgeEl.textContent = this.currentLang === 'en' ? 'IMAGE UNDERLAY' : 'CALCO TÉCNICO';

                        const lockText = u.locked 
                            ? (this.currentLang === 'en' ? 'Unlock Position' : 'Destravar Posição')
                            : (this.currentLang === 'en' ? 'Lock Position' : 'Travar Posição');

                        this.propsBodyEl.innerHTML = `
                            <div class="props-section">
                                <div class="props-section-header">${this.currentLang === 'en' ? 'Image Underlay Properties' : 'Propriedades do Calco'}</div>
                                <div class="props-row">
                                    <div class="props-label">${this.currentLang === 'en' ? 'File' : 'Arquivo'}</div>
                                    <div class="props-val"><span class="props-val-readonly" title="${u.fileName || ''}">${u.fileName || 'cadicon.png'}</span></div>
                                </div>
                                <div class="props-row">
                                    <div class="props-label">${this.currentLang === 'en' ? 'Width (m)' : 'Largura (m)'}</div>
                                    <div class="props-val"><input type="number" step="0.1" min="0.1" class="props-input" value="${(u.width || 10).toFixed(2)}" onchange="cadcloneUI.setUnderlayProp('width', parseFloat(this.value))"></div>
                                </div>
                                <div class="props-row">
                                    <div class="props-label">${this.currentLang === 'en' ? 'Height (m)' : 'Altura (m)'}</div>
                                    <div class="props-val"><input type="number" step="0.1" min="0.1" class="props-input" value="${(u.height || 10).toFixed(2)}" onchange="cadcloneUI.setUnderlayProp('height', parseFloat(this.value))"></div>
                                </div>
                                <div class="props-row">
                                    <div class="props-label">${this.currentLang === 'en' ? 'Position X' : 'Posição X'}</div>
                                    <div class="props-val"><input type="number" step="0.1" class="props-input" value="${(u.x || 0).toFixed(2)}" onchange="cadcloneUI.setUnderlayProp('x', parseFloat(this.value))"></div>
                                </div>
                                <div class="props-row">
                                    <div class="props-label">${this.currentLang === 'en' ? 'Position Y' : 'Posição Y'}</div>
                                    <div class="props-val"><input type="number" step="0.1" class="props-input" value="${(u.y || 0).toFixed(2)}" onchange="cadcloneUI.setUnderlayProp('y', parseFloat(this.value))"></div>
                                </div>
                                <div class="props-row">
                                    <div class="props-label">${this.currentLang === 'en' ? 'Rotation (°)' : 'Rotação (°)'}</div>
                                    <div class="props-val"><input type="number" step="5" min="0" max="360" class="props-input" value="${Math.round(u.rotation || 0)}" onchange="cadcloneUI.setUnderlayProp('rotation', parseFloat(this.value))"></div>
                                </div>
                                <div class="props-row">
                                    <div class="props-label">${this.currentLang === 'en' ? 'Opacity (%)' : 'Opacidade (%)'}</div>
                                    <div class="props-val"><input type="number" step="5" min="5" max="100" class="props-input" value="${Math.round((u.opacity !== undefined ? u.opacity : 0.75) * 100)}" onchange="cadcloneUI.setUnderlayProp('opacity', parseFloat(this.value) / 100)"></div>
                                </div>
                                <div class="props-row" style="margin-top: 8px;">
                                    <div class="props-label">${this.currentLang === 'en' ? 'Status' : 'Trava'}</div>
                                    <div class="props-val">
                                        <button class="underlay-action-btn" style="width: 100%; justify-content: center;" onclick="cadcloneUI.toggleUnderlayLock();">
                                            ${lockText}
                                        </button>
                                    </div>
                                </div>
                                <div class="props-row" style="margin-top: 6px;">
                                    <div class="props-val" style="width: 100%;">
                                        <button class="underlay-action-btn" style="width: 100%; justify-content: center; background: rgba(239, 68, 68, 0.15); color: #f87171; border-color: rgba(239, 68, 68, 0.3);" onclick="cadcloneUI.engine.clearSelection(true); cadcloneUI.updatePropertiesPanel();">
                                            ${this.currentLang === 'en' ? 'Deselect (ESC)' : 'Desmarcar (ESC)'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        `;
                        return;
                    }

                    // --- NO SELECTION: General Drawing Info ---
                    if (this.propsBadgeEl) this.propsBadgeEl.textContent = this.t('props_badge_general');
                    const activeLayer = this.engine.activeLayer || '0';
                    const totalEntities = this.engine.entities.length;

                    // Breakdown by entity type
                    const typeCounts = {};
                    for (const e of this.engine.entities) {
                        typeCounts[e.type] = (typeCounts[e.type] || 0) + 1;
                    }
                    const breakdownRows = Object.entries(typeCounts).map(([type, c]) => `
                        <div class="props-row">
                            <div class="props-label">${type}</div>
                            <div class="props-val"><span class="props-val-readonly">${c}</span></div>
                        </div>
                    `).join('');

                    const layerOpts = layerNames.map(l => `<option value="${l}" ${l === activeLayer ? 'selected' : ''}>${l}</option>`).join('');

                    this.propsBodyEl.innerHTML = `
                        <div class="props-section">
                            <div class="props-section-header">${this.t('props_sec_working_layer')}</div>
                            <div class="props-row">
                                <div class="props-label">${this.t('props_active_layer')}</div>
                                <div class="props-val">
                                    <select class="props-select" onchange="cadcloneUI.changeActiveLayer(this.value); cadcloneUI.updateLayerDropdown();">
                                        ${layerOpts}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="props-section">
                            <div class="props-section-header">${this.t('props_sec_scale')}</div>
                            <div class="props-row">
                                <div class="props-label">LTSCALE</div>
                                <div class="props-val">
                                    <input type="number" step="0.1" min="0.01" class="props-input" value="${(this.engine.ltscale || 1.0).toFixed(2)}" onchange="cadcloneUI.setLinetypeScale(parseFloat(this.value))">
                                </div>
                            </div>
                        </div>
                        <div class="props-section">
                            <div class="props-section-header">${this.t('props_sec_stats')}</div>
                            <div class="props-row">
                                <div class="props-label">${this.t('props_total_entities')}</div>
                                <div class="props-val"><span class="props-val-readonly">${totalEntities}</span></div>
                            </div>
                            ${breakdownRows || `<div class="props-row"><div class="props-label" style="color: #64748b;">${this.t('props_no_entities')}</div></div>`}
                        </div>
                    `;
                } else if (count === 1) {
                    // --- SINGLE SELECTION ---
                    const ent = this.engine.getEntity(selectedIds[0]);
                    if (!ent) return;

                    if (this.propsBadgeEl) this.propsBadgeEl.textContent = ent.type;

                    const curLayer = ent.layer || '0';
                    const layerOpts = layerNames.map(l => `<option value="${l}" ${l === curLayer ? 'selected' : ''}>${l}</option>`).join('');
                    const isByLayer = !ent.color;
                    const entColorVal = ent.color || (this.engine.layers[curLayer] ? this.engine.layers[curLayer].color : '#ffffff');

                    let geomHtml = '';

                    if (ent.type === 'LINE') {
                        const dx = ent.x2 - ent.x1;
                        const dy = ent.y2 - ent.y1;
                        const len = Math.hypot(dx, dy);
                        let angle = (Math.atan2(dy, dx) * 180 / Math.PI);
                        if (angle < 0) angle += 360;

                        geomHtml = `
                            <div class="props-section">
                                <div class="props-section-header">${this.t('props_sec_geometry')} (${ent.type})</div>
                                <div class="props-row">
                                    <div class="props-label">${this.t('props_start_x')}</div>
                                    <div class="props-val"><input type="number" step="0.01" class="props-input" value="${ent.x1.toFixed(2)}" onchange="cadcloneUI.updateEntityProp(${ent.id}, 'x1', parseFloat(this.value))"></div>
                                </div>
                                <div class="props-row">
                                    <div class="props-label">${this.t('props_start_y')}</div>
                                    <div class="props-val"><input type="number" step="0.01" class="props-input" value="${ent.y1.toFixed(2)}" onchange="cadcloneUI.updateEntityProp(${ent.id}, 'y1', parseFloat(this.value))"></div>
                                </div>
                                <div class="props-row">
                                    <div class="props-label">${this.t('props_end_x')}</div>
                                    <div class="props-val"><input type="number" step="0.01" class="props-input" value="${ent.x2.toFixed(2)}" onchange="cadcloneUI.updateEntityProp(${ent.id}, 'x2', parseFloat(this.value))"></div>
                                </div>
                                <div class="props-row">
                                    <div class="props-label">${this.t('props_end_y')}</div>
                                    <div class="props-val"><input type="number" step="0.01" class="props-input" value="${ent.y2.toFixed(2)}" onchange="cadcloneUI.updateEntityProp(${ent.id}, 'y2', parseFloat(this.value))"></div>
                                </div>
                                <div class="props-row">
                                    <div class="props-label">${this.t('props_delta_x')}</div>
                                    <div class="props-val"><span class="props-val-readonly">${dx.toFixed(2)}</span></div>
                                </div>
                                <div class="props-row">
                                    <div class="props-label">${this.t('props_delta_y')}</div>
                                    <div class="props-val"><span class="props-val-readonly">${dy.toFixed(2)}</span></div>
                                </div>
                                <div class="props-row">
                                    <div class="props-label">${this.t('props_length')}</div>
                                    <div class="props-val"><span class="props-val-readonly">${len.toFixed(2)} m</span></div>
                                </div>
                                <div class="props-row">
                                    <div class="props-label">${this.t('props_angle')}</div>
                                    <div class="props-val"><span class="props-val-readonly">${angle.toFixed(1)}°</span></div>
                                </div>
                            </div>
                        `;
                    } else if (ent.type === 'CIRCLE') {
                        const diam = ent.r * 2;
                        const circ = 2 * Math.PI * ent.r;
                        const area = Math.PI * ent.r * ent.r;

                        geomHtml = `
                            <div class="props-section">
                                <div class="props-section-header">${this.t('props_sec_geometry')} (${ent.type})</div>
                                <div class="props-row">
                                    <div class="props-label">${this.t('props_center_x')}</div>
                                    <div class="props-val"><input type="number" step="0.01" class="props-input" value="${ent.cx.toFixed(2)}" onchange="cadcloneUI.updateEntityProp(${ent.id}, 'cx', parseFloat(this.value))"></div>
                                </div>
                                <div class="props-row">
                                    <div class="props-label">${this.t('props_center_y')}</div>
                                    <div class="props-val"><input type="number" step="0.01" class="props-input" value="${ent.cy.toFixed(2)}" onchange="cadcloneUI.updateEntityProp(${ent.id}, 'cy', parseFloat(this.value))"></div>
                                </div>
                                <div class="props-row">
                                    <div class="props-label">${this.t('props_radius')}</div>
                                    <div class="props-val"><input type="number" step="0.01" min="0.001" class="props-input" value="${ent.r.toFixed(2)}" onchange="cadcloneUI.updateEntityProp(${ent.id}, 'r', Math.max(0.001, parseFloat(this.value)))"></div>
                                </div>
                                <div class="props-row">
                                    <div class="props-label">${this.t('props_diameter')}</div>
                                    <div class="props-val"><span class="props-val-readonly">${diam.toFixed(2)} m</span></div>
                                </div>
                                <div class="props-row">
                                    <div class="props-label">${this.t('props_circumference')}</div>
                                    <div class="props-val"><span class="props-val-readonly">${circ.toFixed(2)} m</span></div>
                                </div>
                                <div class="props-row">
                                    <div class="props-label">${this.t('props_area')}</div>
                                    <div class="props-val"><span class="props-val-readonly">${area.toFixed(2)} m²</span></div>
                                </div>
                            </div>
                        `;
                    } else if (ent.type === 'ARC') {
                        geomHtml = `
                            <div class="props-section">
                                <div class="props-section-header">${this.t('props_sec_geometry')} (${ent.type})</div>
                                <div class="props-row">
                                    <div class="props-label">${this.t('props_center_x')}</div>
                                    <div class="props-val"><input type="number" step="0.01" class="props-input" value="${ent.cx.toFixed(2)}" onchange="cadcloneUI.updateEntityProp(${ent.id}, 'cx', parseFloat(this.value))"></div>
                                </div>
                                <div class="props-row">
                                    <div class="props-label">${this.t('props_center_y')}</div>
                                    <div class="props-val"><input type="number" step="0.01" class="props-input" value="${ent.cy.toFixed(2)}" onchange="cadcloneUI.updateEntityProp(${ent.id}, 'cy', parseFloat(this.value))"></div>
                                </div>
                                <div class="props-row">
                                    <div class="props-label">${this.t('props_radius')}</div>
                                    <div class="props-val"><input type="number" step="0.01" min="0.001" class="props-input" value="${ent.r.toFixed(2)}" onchange="cadcloneUI.updateEntityProp(${ent.id}, 'r', Math.max(0.001, parseFloat(this.value)))"></div>
                                </div>
                                <div class="props-row">
                                    <div class="props-label">${this.t('props_start_angle')}</div>
                                    <div class="props-val"><span class="props-val-readonly">${(ent.startAngle * 180 / Math.PI).toFixed(1)}°</span></div>
                                </div>
                                <div class="props-row">
                                    <div class="props-label">${this.t('props_end_angle')}</div>
                                    <div class="props-val"><span class="props-val-readonly">${(ent.endAngle * 180 / Math.PI).toFixed(1)}°</span></div>
                                </div>
                            </div>
                        `;
                    } else if (ent.type === 'TEXT') {
                        geomHtml = `
                            <div class="props-section">
                                <div class="props-section-header">${this.t('props_text_content')}</div>
                                <div class="props-row">
                                    <div class="props-label">${this.t('props_text_content')}</div>
                                    <div class="props-val"><input type="text" class="props-input" value="${(ent.text || '').replace(/"/g, '&quot;')}" onchange="cadcloneUI.updateEntityProp(${ent.id}, 'text', this.value)"></div>
                                </div>
                                <div class="props-row">
                                    <div class="props-label">${this.t('props_text_height')}</div>
                                    <div class="props-val"><input type="number" step="0.05" min="0.05" class="props-input" value="${(ent.height || 0.3).toFixed(2)}" onchange="cadcloneUI.updateEntityProp(${ent.id}, 'height', Math.max(0.05, parseFloat(this.value)))"></div>
                                </div>
                                <div class="props-row">
                                    <div class="props-label">${this.t('props_start_x')}</div>
                                    <div class="props-val"><input type="number" step="0.01" class="props-input" value="${ent.x.toFixed(2)}" onchange="cadcloneUI.updateEntityProp(${ent.id}, 'x', parseFloat(this.value))"></div>
                                </div>
                                <div class="props-row">
                                    <div class="props-label">${this.t('props_start_y')}</div>
                                    <div class="props-val"><input type="number" step="0.01" class="props-input" value="${ent.y.toFixed(2)}" onchange="cadcloneUI.updateEntityProp(${ent.id}, 'y', parseFloat(this.value))"></div>
                                </div>
                            </div>
                        `;
                    } else if (ent.type === 'POLYLINE') {
                        const ptsCount = (ent.points || []).length;
                        let len = 0;
                        if (ent.points && ent.points.length > 1) {
                            for (let i = 0; i < ent.points.length - 1; i++) {
                                len += Math.hypot(ent.points[i+1].x - ent.points[i].x, ent.points[i+1].y - ent.points[i].y);
                            }
                            if (ent.closed) {
                                len += Math.hypot(ent.points[0].x - ent.points[ent.points.length-1].x, ent.points[0].y - ent.points[ent.points.length-1].y);
                            }
                        }
                        geomHtml = `
                            <div class="props-section">
                                <div class="props-section-header">${this.t('props_sec_geometry')} (${ent.type})</div>
                                <div class="props-row">
                                    <div class="props-label">${this.t('props_vertices')}</div>
                                    <div class="props-val"><span class="props-val-readonly">${ptsCount}</span></div>
                                </div>
                                <div class="props-row">
                                    <div class="props-label">${this.t('props_closed')}</div>
                                    <div class="props-val">
                                        <select class="props-select" onchange="cadcloneUI.updateEntityProp(${ent.id}, 'closed', this.value === 'true')">
                                            <option value="true" ${ent.closed ? 'selected' : ''}>${this.t('props_yes')}</option>
                                            <option value="false" ${!ent.closed ? 'selected' : ''}>${this.t('props_no')}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="props-row">
                                    <div class="props-label">${this.t('props_length')}</div>
                                    <div class="props-val"><span class="props-val-readonly">${len.toFixed(2)} m</span></div>
                                </div>
                            </div>
                        `;
                    } else if (ent.type === 'DIMENSION') {
                        const len = Math.hypot(ent.x2 - ent.x1, ent.y2 - ent.y1);
                        const curOffset = (typeof ent.offset === 'number') ? ent.offset : 0;
                        const curScale = (typeof ent.textScale === 'number' && ent.textScale > 0)
                            ? ent.textScale
                            : ((typeof ent.textHeight === 'number' && ent.textHeight > 0) ? (ent.textHeight / 0.22) : 1.0);
                        const curHeight = (typeof ent.textHeight === 'number' && ent.textHeight > 0)
                            ? ent.textHeight
                            : (0.22 * curScale);
                        geomHtml = `
                            <div class="props-section">
                                <div class="props-section-header">${this.t('props_dim_linear')}</div>
                                <div class="props-row">
                                    <div class="props-label">${this.t('props_dim_text')}</div>
                                    <div class="props-val"><input type="text" class="props-input" value="${(ent.text || '').replace(/"/g, '&quot;')}" onchange="cadcloneUI.updateEntityProp(${ent.id}, 'text', this.value)"></div>
                                </div>
                                <div class="props-row">
                                    <div class="props-label">${this.currentLang === 'en' ? 'Text Scale (DIMSCALE)' : 'Escala da Cota (DIMSCALE)'}</div>
                                    <div class="props-val"><input type="number" step="0.1" min="0.1" max="20" class="props-input" value="${curScale.toFixed(2)}" onchange="cadcloneUI.updateEntityProp(${ent.id}, 'textScale', Math.max(0.1, parseFloat(this.value) || 1))"></div>
                                </div>
                                <div class="props-row">
                                    <div class="props-label">${this.currentLang === 'en' ? 'Text Height (m)' : 'Altura do Número (m)'}</div>
                                    <div class="props-val"><input type="number" step="0.02" min="0.02" max="10" class="props-input" value="${curHeight.toFixed(2)}" onchange="cadcloneUI.updateEntityProp(${ent.id}, 'textHeight', Math.max(0.02, parseFloat(this.value) || 0.22))"></div>
                                </div>
                                <div class="props-row">
                                    <div class="props-label">${this.t('props_length')}</div>
                                    <div class="props-val"><span class="props-val-readonly">${len.toFixed(2)} m</span></div>
                                </div>
                                <div class="props-row">
                                    <div class="props-label">${this.t('props_dim_offset')}</div>
                                    <div class="props-val"><input type="number" step="0.1" class="props-input" value="${curOffset.toFixed(2)}" onchange="cadcloneUI.updateEntityProp(${ent.id}, 'offset', parseFloat(this.value) || 0)"></div>
                                </div>
                                <div class="props-row">
                                    <div class="props-label">P1 X / Y</div>
                                    <div class="props-val"><span class="props-val-readonly">${ent.x1.toFixed(2)}, ${ent.y1.toFixed(2)}</span></div>
                                </div>
                                <div class="props-row">
                                    <div class="props-label">P2 X / Y</div>
                                    <div class="props-val"><span class="props-val-readonly">${ent.x2.toFixed(2)}, ${ent.y2.toFixed(2)}</span></div>
                                </div>
                            </div>
                        `;
                    }

                    const entLt = (ent.linetype || 'BYLAYER').toUpperCase();
                    const ltOpts = ['BYLAYER', 'CONTINUOUS', 'DASHED', 'HIDDEN', 'CENTER', 'PHANTOM', 'DOT', 'DASHDOT']
                        .map(lt => `<option value="${lt}" ${entLt === lt ? 'selected' : ''}>${lt === 'BYLAYER' ? this.t('props_color_bylayer') : lt}</option>`)
                        .join('');

                    this.propsBodyEl.innerHTML = `
                        <div class="props-section">
                            <div class="props-section-header">${this.t('props_sec_general')}</div>
                            <div class="props-row">
                                <div class="props-label">${this.t('props_active_layer')}</div>
                                <div class="props-val">
                                    <select class="props-select" onchange="cadcloneUI.changeEntityLayer(${ent.id}, this.value)">
                                        ${layerOpts}
                                    </select>
                                </div>
                            </div>
                            <div class="props-row">
                                <div class="props-label">${this.t('props_color')}</div>
                                <div class="props-val" style="gap: 6px;">
                                    <input type="color" class="props-input" style="padding: 0; width: 32px; height: 22px; cursor: pointer;" value="${entColorVal}" onchange="cadcloneUI.changeEntityColor(${ent.id}, this.value)">
                                    <button class="tool-btn-small" style="padding: 2px 6px; font-size: 10px; ${isByLayer ? 'border-color: #38bdf8; color: #38bdf8;' : ''}" onclick="cadcloneUI.changeEntityColor(${ent.id}, null)">ByLayer</button>
                                </div>
                            </div>
                            <div class="props-row">
                                <div class="props-label">${this.t('props_linetype')}</div>
                                <div class="props-val">
                                    <select class="props-select" onchange="cadcloneUI.changeEntityLinetype(${ent.id}, this.value)">
                                        ${ltOpts}
                                    </select>
                                </div>
                            </div>
                        </div>
                        ${geomHtml}
                        <div class="props-section" style="padding: 10px 12px; display: flex; gap: 8px; flex-wrap: wrap;">
                            ${(ent.blockInstanceId || ent.blockId) ? `
                                <button class="tool-btn-small" style="flex: 1; min-width: 100px; justify-content: center; background: rgba(56, 189, 248, 0.15); border-color: #38bdf8; color: #38bdf8;" onclick="cadcloneUI.cmd('UNGROUP')">
                                    🔓 Desagrupar
                                </button>
                            ` : ''}
                            <button class="tool-btn-small" style="flex: 1; min-width: 80px; justify-content: center; background: rgba(239, 68, 68, 0.2); border-color: rgba(239, 68, 68, 0.4); color: #f87171;" onclick="cadcloneUI.cmd('ERASE')">
                                ${this.t('props_btn_erase', { count: 1 })}
                            </button>
                            <button class="tool-btn-small" style="flex: 1; min-width: 80px; justify-content: center;" onclick="cadcloneUI.ctxAction('deselect')">
                                ${this.t('props_btn_deselect')}
                            </button>
                        </div>
                    `;
                } else {
                    // --- MULTIPLE SELECTION ---
                    const hasGroup = selectedIds.some(id => {
                        const e = this.engine.getEntity(id);
                        return e && (e.blockInstanceId || e.blockId);
                    });
                    if (this.propsBadgeEl) this.propsBadgeEl.textContent = hasGroup ? `Grupo (${count})` : this.t('props_badge_selection', { count });
                    const layerOpts = layerNames.map(l => `<option value="${l}">${l}</option>`).join('');
                    const multiLtOpts = ['BYLAYER', 'CONTINUOUS', 'DASHED', 'HIDDEN', 'CENTER', 'PHANTOM', 'DOT', 'DASHDOT']
                        .map(lt => `<option value="${lt}">${lt === 'BYLAYER' ? this.t('props_color_bylayer') : lt}</option>`)
                        .join('');

                    this.propsBodyEl.innerHTML = `
                        <div class="props-section">
                            <div class="props-section-header">${this.t('props_multiple_title', { count })}</div>
                            <div class="props-row">
                                <div class="props-label">${this.t('props_active_layer')}</div>
                                <div class="props-val">
                                    <select class="props-select" onchange="cadcloneUI.changeMultipleEntitiesLayer(this.value)">
                                        <option value="" disabled selected>${this.t('props_change_layer')}</option>
                                        ${layerOpts}
                                    </select>
                                </div>
                            </div>
                            <div class="props-row">
                                <div class="props-label">${this.t('props_color')}</div>
                                <div class="props-val" style="gap: 6px;">
                                    <input type="color" class="props-input" style="padding: 0; width: 32px; height: 22px; cursor: pointer;" value="#38bdf8" onchange="cadcloneUI.changeMultipleEntitiesColor(this.value)">
                                    <button class="tool-btn-small" style="padding: 2px 6px; font-size: 10px;" onclick="cadcloneUI.changeMultipleEntitiesColor(null)">ByLayer</button>
                                </div>
                            </div>
                            <div class="props-row">
                                <div class="props-label">${this.t('props_linetype')}</div>
                                <div class="props-val">
                                    <select class="props-select" onchange="cadcloneUI.changeMultipleEntitiesLinetype(this.value)">
                                        <option value="" disabled selected>${this.t('props_change_linetype')}</option>
                                        ${multiLtOpts}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="props-section" style="padding: 10px 12px; display: flex; gap: 8px; flex-wrap: wrap;">
                            ${hasGroup ? `
                                <button class="tool-btn-small" style="flex: 1; min-width: 100px; justify-content: center; background: rgba(56, 189, 248, 0.15); border-color: #38bdf8; color: #38bdf8;" onclick="cadcloneUI.cmd('UNGROUP')">
                                    🔓 Desagrupar
                                </button>
                            ` : `
                                <button class="tool-btn-small" style="flex: 1; min-width: 100px; justify-content: center; background: rgba(34, 197, 94, 0.15); border-color: #22c55e; color: #22c55e;" onclick="cadcloneUI.cmd('GROUP')">
                                    📦 Agrupar
                                </button>
                            `}
                            <button class="tool-btn-small" style="flex: 1; min-width: 80px; justify-content: center; background: rgba(239, 68, 68, 0.2); border-color: rgba(239, 68, 68, 0.4); color: #f87171;" onclick="cadcloneUI.cmd('ERASE')">
                                ${this.t('props_btn_erase', { count })}
                            </button>
                            <button class="tool-btn-small" style="flex: 1; min-width: 80px; justify-content: center;" onclick="cadcloneUI.ctxAction('deselect')">
                                ${this.t('props_btn_deselect')}
                            </button>
                        </div>
                    `;
                }
            }

            updateEntityProp(id, prop, val) {
                if (typeof val === 'number' && isNaN(val)) return;
                if (this.engine.updateEntityProperty(id, prop, val)) {
                    this.updatePropertiesPanel();
                }
            }

            changeEntityLayer(id, layerName) {
                if (this.engine.setEntityLayer(id, layerName)) {
                    this.updatePropertiesPanel();
                }
            }

            changeEntityColor(id, color) {
                if (this.engine.setEntityColor(id, color)) {
                    this.updatePropertiesPanel();
                }
            }

            changeMultipleEntitiesLayer(layerName) {
                if (!layerName) return;
                this.engine.setSelectedEntitiesLayer(layerName);
                this.updatePropertiesPanel();
            }

            changeMultipleEntitiesColor(color) {
                this.engine.setSelectedEntitiesColor(color);
                this.updatePropertiesPanel();
            }

            changeEntityLinetype(id, linetype) {
                if (this.engine.setEntityLinetype(id, linetype)) {
                    this.updatePropertiesPanel();
                }
            }

            changeMultipleEntitiesLinetype(linetype) {
                if (!linetype) return;
                this.engine.setSelectedEntitiesLinetype(linetype);
                this.updatePropertiesPanel();
            }

            changeLayerLinetype(name, linetype) {
                if (this.engine.setLayerLinetype(name, linetype)) {
                    this.engine.render();
                    this.updatePropertiesPanel();
                }
            }

            setLinetypeScale(scale) {
                if (isNaN(scale) || scale <= 0) return;
                this.engine.setLinetypeScale(scale);
                this.updatePropertiesPanel();
            }

            setUnderlayProp(prop, val) {
                if (!this.engine || !this.engine.underlay) return;
                if (typeof val === 'number' && isNaN(val)) return;
                this.engine.saveStateForUndo();
                this.engine.underlay[prop] = val;
                this.engine.render();
                this.updatePropertiesPanel();
                if (window.cadUnderlayManager) window.cadUnderlayManager.updateHud();
            }

            toggleUnderlayLock() {
                if (!this.engine || !this.engine.underlay) return;
                this.engine.saveStateForUndo();
                this.engine.underlay.locked = !this.engine.underlay.locked;
                this.engine.render();
                this.updatePropertiesPanel();
                if (window.cadUnderlayManager) window.cadUnderlayManager.updateHud();
            }

            // ----------------------------------------------------
            // Block Library Palette (INSERT / I)
            // ----------------------------------------------------
            openBlockPalette() {
                if (!this.blockPaletteEl) {
                    this.blockPaletteEl = document.getElementById('cadBlockPalette');
                }
                if (!this.blockPaletteEl) return;
                this.blockPaletteEl.style.display = 'flex';
                this.activeBlockCategory = 'all';

                const tabsBar = document.getElementById('blockTabsBar');
                if (tabsBar && !tabsBar._hasNavInit) {
                    tabsBar._hasNavInit = true;
                    tabsBar.addEventListener('scroll', () => {
                        this.updateBlockTabsNavState();
                    }, { passive: true });
                    tabsBar.addEventListener('wheel', (e) => {
                        if (e.deltaY !== 0) {
                            e.preventDefault();
                            tabsBar.scrollLeft += e.deltaY;
                            this.updateBlockTabsNavState();
                        }
                    }, { passive: false });
                }

                if (tabsBar) {
                    tabsBar.scrollLeft = 0;
                }
                setTimeout(() => this.updateBlockTabsNavState(), 60);

                const lib = (typeof CADBlockLibrary !== 'undefined' && Object.keys(CADBlockLibrary).length > 0) 
                    ? CADBlockLibrary 
                    : (typeof window !== 'undefined' && window.CADBlockLibrary && Object.keys(window.CADBlockLibrary).length > 0)
                        ? window.CADBlockLibrary
                        : (typeof CADEngine !== 'undefined' && CADEngine.BlockLibrary ? CADEngine.BlockLibrary : {});

                const totalBlocks = Object.keys(lib).length;
                const allTab = document.querySelector('.block-tab-btn[data-cat="all"]');
                if (allTab) allTab.textContent = `Todos (${totalBlocks})`;

                document.querySelectorAll('.block-tab-btn').forEach(btn => {
                    btn.classList.toggle('active', btn.getAttribute('data-cat') === 'all');
                });
                this.renderBlockGrid();
            }

            closeBlockPalette() {
                if (this.blockPaletteEl) {
                    this.blockPaletteEl.style.display = 'none';
                }
            }

            scrollBlockTabs(dir) {
                const tabs = document.getElementById('blockTabsBar');
                if (!tabs) return;
                const scrollAmount = Math.max(180, (tabs.clientWidth || 300) * 0.6) * dir;
                tabs.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                setTimeout(() => this.updateBlockTabsNavState(), 250);
            }

            updateBlockTabsNavState() {
                const tabs = document.getElementById('blockTabsBar');
                const btnPrev = document.getElementById('btnBlockTabPrev');
                const btnNext = document.getElementById('btnBlockTabNext');
                if (!tabs || !btnPrev || !btnNext) return;
                const sl = tabs.scrollLeft;
                const maxScroll = tabs.scrollWidth - tabs.clientWidth;
                btnPrev.disabled = sl <= 3;
                btnNext.disabled = sl >= maxScroll - 3;
            }

            filterBlockCategory(cat) {
                this.activeBlockCategory = cat;
                document.querySelectorAll('.block-tab-btn').forEach(btn => {
                    const isActive = btn.getAttribute('data-cat') === cat;
                    btn.classList.toggle('active', isActive);
                    if (isActive) {
                        btn.scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'nearest' });
                    }
                });
                this.renderBlockGrid();
                setTimeout(() => this.updateBlockTabsNavState(), 300);
            }

            renderBlockGrid() {
                const grid = document.getElementById('blockGrid');
                if (!grid) return;
                const lib = (typeof CADBlockLibrary !== 'undefined' && Object.keys(CADBlockLibrary).length > 0) 
                    ? CADBlockLibrary 
                    : (typeof window !== 'undefined' && window.CADBlockLibrary && Object.keys(window.CADBlockLibrary).length > 0)
                        ? window.CADBlockLibrary
                        : (typeof CADEngine !== 'undefined' && CADEngine.BlockLibrary ? CADEngine.BlockLibrary : {});
                const cat = this.activeBlockCategory || 'all';
                const isEn = this.currentLang === 'en';
                const insertBtnText = this.t('block_btn_insert');

                let html = '';
                let count = 0;
                for (const [id, block] of Object.entries(lib)) {
                    if (cat !== 'all') {
                        if (cat === 'fixtures') {
                            if (block.category !== 'fixtures' && block.category !== 'sanitary') continue;
                        } else if (block.category !== cat) {
                            continue;
                        }
                    }
                    count++;
                    const blockDisplayName = (isEn && typeof CAD_BLOCK_NAMES_EN !== 'undefined' && CAD_BLOCK_NAMES_EN[block.name]) 
                        ? CAD_BLOCK_NAMES_EN[block.name] 
                        : block.name;
                    const tooltipText = this.t('block_insert_tooltip', { name: blockDisplayName });

                    html += `
                        <div class="block-card" onclick="cadcloneUI.selectBlockToInsert('${id}')" title="${tooltipText}">
                            <div class="block-preview-box">
                                ${block.svgPreview || ''}
                            </div>
                            <div class="block-name">${blockDisplayName}</div>
                            <div class="block-cat-badge">${block.dimensions || block.categoryName}</div>
                            <button class="block-insert-btn" onclick="event.stopPropagation(); cadcloneUI.selectBlockToInsert('${id}')">
                                ${insertBtnText}
                            </button>
                        </div>
                    `;
                }

                if (!html) {
                    html = `<div style="grid-column: 1/-1; text-align: center; color: #94a3b8; padding: 24px;">${this.t('block_empty')}</div>`;
                }

                grid.innerHTML = html;
            }

            selectBlockToInsert(blockId) {
                this.closeBlockPalette();
                if (this.cmdSystem && this.cmdSystem.startBlockPlacement) {
                    this.cmdSystem.startBlockPlacement(blockId);
                }
            }

            switchRibbonTab(tabName) {
                document.querySelectorAll('.ribbon-tab').forEach(t => {
                    t.classList.toggle('active', t.getAttribute('data-tab') === tabName);
                });
                const home = document.getElementById('ribbonHomePanel');
                const annotate = document.getElementById('ribbonAnnotatePanel');
                const output = document.getElementById('ribbonOutputPanel');
                if (home) home.style.display = (tabName === 'home') ? 'flex' : 'none';
                if (annotate) annotate.style.display = (tabName === 'annotate') ? 'flex' : 'none';
                if (output) output.style.display = (tabName === 'output') ? 'flex' : 'none';
                this.updateRibbonScrollNav();
            }

            scrollRibbon(direction) {
                const activePanel = document.querySelector('.ribbon-panels:not([style*="display: none"])');
                if (!activePanel) return;
                activePanel.scrollBy({ left: direction * 240, behavior: 'smooth' });
                setTimeout(() => this.updateRibbonScrollNav(), 260);
            }

            updateRibbonScrollNav() {
                const activePanel = document.querySelector('.ribbon-panels:not([style*="display: none"])');
                const btnLeft = document.getElementById('ribbonNavLeft');
                const btnRight = document.getElementById('ribbonNavRight');
                if (!activePanel || !btnLeft || !btnRight) return;

                const hasOverflow = activePanel.scrollWidth > activePanel.clientWidth + 4;
                if (!hasOverflow) {
                    btnLeft.style.display = 'none';
                    btnRight.style.display = 'none';
                    return;
                }

                btnLeft.style.display = activePanel.scrollLeft > 6 ? 'flex' : 'none';
                btnRight.style.display = (activePanel.scrollLeft < activePanel.scrollWidth - activePanel.clientWidth - 6) ? 'flex' : 'none';
            }

            selectLayoutTab(type) {
                const tabModel = document.getElementById('tabModel');
                const tabLayout1 = document.getElementById('tabLayout1');
                const btnModel = document.getElementById('btnModelToggle');
                if (type === 'model') {
                    if (tabModel) tabModel.classList.add('active');
                    if (tabLayout1) tabLayout1.classList.remove('active');
                    if (btnModel) btnModel.classList.add('active');
                    this.cmdSystem.logHistory('Espaço do Modelo ativo (TILEMODE = 1).');
                    this.engine.render();
                } else {
                    if (tabModel) tabModel.classList.remove('active');
                    if (tabLayout1) tabLayout1.classList.add('active');
                    if (btnModel) btnModel.classList.remove('active');
                    this.openPlotModal();
                }
            }

            changeScale(scaleStr) {
                const scaleMap = {
                    '1:1': 100,
                    '1:20': 125,
                    '1:25': 100,
                    '1:50': 50,
                    '1:100': 25,
                    '1:200': 12.5
                };
                if (scaleMap[scaleStr]) {
                    this.engine.zoom = scaleMap[scaleStr];
                    this.engine.render();
                    this.cmdSystem.logHistory(`Escala de exibição ajustada para ${scaleStr}.`);
                }
            }

            undo() {
                const res = this.engine.undo();
                this.engine.render();
                this.cmdSystem.logHistory(res ? 'UNDO: Comando anterior desfeito.' : 'Nada a desfazer.');
            }

            redo() {
                const res = this.engine.redo();
                this.engine.render();
                this.cmdSystem.logHistory(res ? 'REDO: Comando restaurado.' : 'Nada a refazer.');
            }

            openExportImageModal(format = 'png') {
                const modal = document.getElementById('exportImageModal');
                if (!modal) return;
                const fmtEl = document.getElementById('exportImgFormat');
                if (fmtEl) {
                    fmtEl.value = (format === 'jpeg' || format === 'jpg') ? 'jpeg' : 'png';
                }
                const underlayCb = document.getElementById('exportImgUnderlay');
                if (underlayCb) {
                    underlayCb.checked = !!(this.engine.underlay && this.engine.underlay.visible);
                }
                this.updateExportThemeCard();
                modal.classList.add('open');
            }

            updateExportThemeCard() {
                const isWhite = document.querySelector('input[name="exportImgTheme"]:checked')?.value === 'white';
                const cardWhite = document.getElementById('themeCardWhite');
                const cardDark = document.getElementById('themeCardDark');
                if (cardWhite && cardDark) {
                    if (isWhite) {
                        cardWhite.style.borderColor = '#0284c7';
                        cardWhite.style.background = 'rgba(2, 132, 199, 0.1)';
                        cardDark.style.borderColor = 'var(--cad-border)';
                        cardDark.style.background = 'rgba(255, 255, 255, 0.02)';
                    } else {
                        cardDark.style.borderColor = '#0284c7';
                        cardDark.style.background = 'rgba(2, 132, 199, 0.1)';
                        cardWhite.style.borderColor = 'var(--cad-border)';
                        cardWhite.style.background = 'rgba(255, 255, 255, 0.02)';
                    }
                }
            }

            executeImageExport() {
                const theme = document.querySelector('input[name="exportImgTheme"]:checked')?.value || 'white';
                const format = document.getElementById('exportImgFormat')?.value || 'png';
                const resolution = parseInt(document.getElementById('exportImgRes')?.value || '2560', 10);
                const fit = document.getElementById('exportImgFit')?.value || 'extents';
                const includeUnderlay = document.getElementById('exportImgUnderlay')?.checked ?? true;
                const includeWatermark = document.getElementById('exportImgWatermark')?.checked ?? true;
                const projectName = document.getElementById('exportImgProjectName')?.value || 'PROJETO RESIDENCIAL';

                const res = this.engine.renderExportImage({
                    format,
                    theme,
                    width: resolution,
                    fit,
                    includeUnderlay,
                    includeWatermark,
                    projectName
                });

                if (res && res.dataUrl) {
                    const a = document.createElement('a');
                    a.href = res.dataUrl;
                    const ext = res.format === 'jpeg' ? 'jpg' : 'png';
                    const cleanName = projectName.trim().toLowerCase().replace(/[^a-z0-9]+/g, '_') || 'projeto';
                    a.download = `${cleanName}_${theme}_${res.width}x${res.height}.${ext}`;
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);

                    const themeLabel = theme === 'white' ? 'Prancha Fundo Branco' : 'AutoCAD Model Space';
                    this.cmdSystem.logHistory(`Imagem exportada com sucesso: ${res.width}x${res.height}px (${themeLabel}, ${ext.toUpperCase()}).`);
                    this.closeModals();
                } else {
                    alert('Erro ao gerar exportação da imagem.');
                }
            }

            exportImage(format = 'png') {
                this.openExportImageModal(format);
            }

            promptRoomLabel() {
                const name = prompt('Nome do Ambiente (ex: SALA DE ESTAR, DORMITÓRIO, COZINHA):');
                if (!name || !name.trim()) return;
                const area = prompt('Área em m² (ex: 12.50 m²):', '12.00 m²');
                const text = `${name.trim().toUpperCase()}\\PÁREA: ${area || ''}`;
                this.cmdSystem.commandData = { presetText: text };
                this.cmdSystem.execute('MTEXT');
            }

            updateCoords(worldPt) {
                const el = document.getElementById('statusCoords');
                if (el && worldPt) {
                    el.textContent = `X: ${worldPt.x.toFixed(4)}, Y: ${worldPt.y.toFixed(4)}, Z: 0.0000`;
                }
            }

            updateStatusBar() {
                const btnSnap = document.getElementById('btnSnapToggle');
                const btnGrid = document.getElementById('btnGridToggle');
                const btnOrtho = document.getElementById('btnOrthoToggle');
                const btnPolar = document.getElementById('btnPolarToggle');
                const btnDyn = document.getElementById('btnDynToggle');

                if (btnSnap) btnSnap.classList.toggle('active', !!this.engine.snapManager.enabled);
                if (btnGrid) btnGrid.classList.toggle('active', !!this.engine.gridEnabled);
                if (btnOrtho) btnOrtho.classList.toggle('active', !!this.engine.orthoEnabled);
                if (btnPolar) btnPolar.classList.toggle('active', !!this.engine.polarEnabled);
                if (btnDyn) btnDyn.classList.toggle('active', !!this.engine.dynamicInput);
            }

            changeActiveLayer(layerName) {
                this.engine.activeLayer = layerName;
                const lyr = this.engine.layers[layerName];
                const box = document.getElementById('activeLayerColorBox');
                if (box && lyr) {
                    box.style.background = lyr.color;
                }
            }

            updateLayerDropdown() {
                const select = document.getElementById('activeLayerSelect');
                if (!select) return;
                select.innerHTML = '';
                for (const [name, lyr] of Object.entries(this.engine.layers)) {
                    const opt = document.createElement('option');
                    opt.value = name;
                    opt.textContent = `${name} (${lyr.color})`;
                    if (name === this.engine.activeLayer) opt.selected = true;
                    select.appendChild(opt);
                }
                this.changeActiveLayer(this.engine.activeLayer);
            }

            // Layer Modal
            openLayerModal() {
                this.renderLayerTable();
                document.getElementById('layerModal').classList.add('open');
            }

            renderLayerTable() {
                const tbody = document.getElementById('layerTableBody');
                if (!tbody) return;
                tbody.innerHTML = '';

                const linetypeOptions = ['CONTINUOUS', 'DASHED', 'HIDDEN', 'CENTER', 'PHANTOM', 'DOT', 'DASHDOT'];

                for (const [name, lyr] of Object.entries(this.engine.layers)) {
                    const tr = document.createElement('tr');
                    const isCurrent = name === this.engine.activeLayer;
                    const curLt = (lyr.linetype || 'CONTINUOUS').toUpperCase();
                    const optionsHtml = linetypeOptions.map(opt => `<option value="${opt}" ${curLt === opt ? 'selected' : ''}>${opt}</option>`).join('');

                    tr.innerHTML = `
                        <td>${isCurrent ? '<span style="color:#22c55e; font-weight:bold;">● Atual</span>' : '<button class="btn-secondary" style="padding:2px 6px; font-size:10px;" onclick="cadcloneUI.changeActiveLayer(\'' + name + '\'); cadcloneUI.renderLayerTable();">Definir</button>'}</td>
                        <td style="font-weight: 600;">${name}</td>
                        <td>
                            <input type="color" value="${lyr.color}" onchange="cadcloneUI.engine.layers['${name}'].color = this.value; cadcloneUI.engine.render();" style="width:28px; height:22px; border:none; cursor:pointer;">
                        </td>
                        <td>
                            <select class="form-select" style="padding:2px 6px; font-size:11px;" onchange="cadcloneUI.changeLayerLinetype('${name}', this.value)">
                                ${optionsHtml}
                            </select>
                        </td>
                        <td>${lyr.lineweight || 1} px</td>
                        <td>
                            <button class="qa-btn" onclick="cadcloneUI.engine.layers['${name}'].visible = !cadcloneUI.engine.layers['${name}'].visible; cadcloneUI.engine.render(); cadcloneUI.renderLayerTable();">
                                ${lyr.visible ? 'Visível (On)' : '<span style="color:#ef4444;">Oculto (Off)</span>'}
                            </button>
                        </td>
                    `;
                    tbody.appendChild(tr);
                }
            }

            addNewLayer() {
                const name = document.getElementById('newLayerNameInput').value.trim();
                const color = document.getElementById('newLayerColorInput').value;
                const ltInput = document.getElementById('newLayerLinetypeInput');
                const linetype = ltInput ? ltInput.value : 'CONTINUOUS';
                if (!name) return;
                this.engine.addLayer(name, color, linetype);
                document.getElementById('newLayerNameInput').value = '';
                this.updateLayerDropdown();
                this.renderLayerTable();
            }

            // Plot Modal
            openPlotModal() {
                document.getElementById('plotModal').classList.add('open');
            }

            generatePDF() {
                const paperSize = document.getElementById('pdfPaperSize').value;
                const orientation = document.getElementById('pdfOrientation').value;
                const scale = document.getElementById('pdfScale').value;
                const sheetNumber = document.getElementById('pdfSheetNumber').value;
                const projectName = document.getElementById('pdfProjectName').value;
                const author = document.getElementById('pdfAuthor').value;
                const crea = document.getElementById('pdfCrea').value;
                const client = document.getElementById('pdfClient').value;

                PDFExport.exportSheet(this.engine, {
                    paperSize,
                    orientation,
                    scale,
                    sheetNumber,
                    projectName,
                    author,
                    crea,
                    client,
                    fileName: 'prancha_cadclone.pdf'
                });

                this.closeModals();
            }

            // Help Modal
            openHelpModal() {
                document.getElementById('helpModal').classList.add('open');
            }

            closeModals() {
                document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('open'));
            }

            toggleHistoryExpanded() {
                const pane = this.cmdHistory;
                const btn = document.getElementById('btnCmdToggleExpand');
                const icon = document.getElementById('iconCmdExpand');
                if (!pane) return;

                const isExpanded = pane.classList.toggle('expanded');
                if (btn) {
                    btn.title = isExpanded ? 'Recolher Histórico (F2)' : 'Expandir Histórico de Comandos (F2)';
                }
                if (icon) {
                    icon.innerHTML = isExpanded ? '<polyline points="6 9 12 15 18 9"/>' : '<polyline points="18 15 12 9 6 15"/>';
                }
                if (isExpanded) {
                    pane.scrollTop = pane.scrollHeight;
                }
            }

            minimizeCommandDock() {
                const dock = document.getElementById('commandDock');
                const restoreBtn = document.getElementById('btnRestoreCommandDock');
                if (dock) dock.classList.add('minimized');
                if (restoreBtn) restoreBtn.style.display = 'inline-flex';
                this.cmdSystem.logHistory('Linha de comando recolhida para a barra inferior (Pressione F2 ou digite qualquer comando para reabrir).');
            }

            restoreCommandDock() {
                const dock = document.getElementById('commandDock');
                const restoreBtn = document.getElementById('btnRestoreCommandDock');
                if (dock) dock.classList.remove('minimized');
                if (restoreBtn) restoreBtn.style.display = 'none';
                if (this.cmdInput) this.cmdInput.focus();
            }

            toggleCommandDockVisible() {
                const dock = document.getElementById('commandDock');
                if (dock && dock.classList.contains('minimized')) {
                    this.restoreCommandDock();
                } else {
                    this.minimizeCommandDock();
                }
            }

            newDrawing() {
                if (this.engine.entities.length === 0 && !this.engine.isDirty) {
                    this.engine.clear();
                    if (this.underlayManager) this.underlayManager.updateHud();
                    this.engine.zoomExtents();
                    this.engine.isDirty = false;
                    this.renderFileTabs();
                    this.updateAutoSaveIndicator('saved');
                    this.cmdSystem.logHistory(this.currentLang === 'en' ? 'New blank drawing created.' : 'Novo desenho em branco criado.');
                } else {
                    this.createDocument();
                }
            }

            openFileDialog() {
                document.getElementById('cadFileInput').click();
            }

            async handleFileSelected(file) {
                if (!file) return;

                const name = file.name.toLowerCase();
                this.cmdSystem.logHistory(`Abrindo arquivo: ${file.name}...`);

                if (name.endsWith('.pdf')) {
                    if (this.underlayManager) this.underlayManager.loadPdfFile(file);
                } else if (/\.(png|jpe?g|webp|bmp|svg)$/i.test(name)) {
                    if (this.underlayManager) this.underlayManager.loadImageFile(file);
                } else if (name.endsWith('.dxf')) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        const content = e.target.result;
                        try {
                            // If current tab has entities or unsaved work, open DXF in a new tab
                            if (this.engine.entities.length > 0 || this.engine.isDirty) {
                                this.createDocument(file.name, null, true);
                            } else {
                                const curDoc = this.getActiveDocument();
                                if (curDoc) curDoc.title = file.name;
                            }

                            let loadedCount = 0;
                            // 1. Try engine.loadDxf which handles DxfIO + DxfParser + native fallback
                            if (typeof this.engine.loadDxf === 'function') {
                                loadedCount = this.engine.loadDxf(content, true);
                            } else if (typeof DxfIO !== 'undefined' && typeof DxfIO.importDXF === 'function') {
                                this.engine.clear();
                                const prevCount = this.engine.entities.length;
                                DxfIO.importDXF(this.engine, content);
                                loadedCount = this.engine.entities.length - prevCount;
                            } else if (typeof DxfParser !== 'undefined') {
                                const parser = new DxfParser();
                                const dxf = parser.parseSync(content);
                                if (dxf && dxf.entities && dxf.entities.length > 0) {
                                    this.engine.loadEntitiesFromDxf(dxf, true);
                                    loadedCount = this.engine.entities.length;
                                }
                            }

                            if (this.engine.entities && this.engine.entities.length > 0) {
                                const total = this.engine.entities.length;
                                this.cmdSystem.logHistory(this.currentLang === 'en'
                                    ? `DXF imported successfully: ${total} entities.`
                                    : `DXF importado com sucesso: ${total} entidades.`);
                                this.updatePropertiesPanel();
                                if (typeof this.updateLayerDropdown === 'function') {
                                    this.updateLayerDropdown();
                                }
                                this.dismissSampleBanner();
                                this.engine.isDirty = false;
                                const curDoc = this.getActiveDocument();
                                if (curDoc) curDoc.state.isDirty = false;
                                this.renderFileTabs();
                                this.updateAutoSaveIndicator('saved');
                            } else {
                                alert(this.t('alert_no_dxf_entities'));
                            }
                        } catch (err) {
                            console.error('Erro ao processar DXF:', err);
                            this.cmdSystem.logHistory((this.currentLang === 'en' ? 'Error parsing DXF file: ' : 'Erro ao interpretar arquivo DXF: ') + (err.message || err));
                        }
                    };
                    reader.readAsText(file);
                } else if (name.endsWith('.dwg')) {
                    // DWG Binary Interceptor Modal: Suggest DXF conversion
                    this.openDwgHelpModal(file.name);
                }
            }

            openDwgHelpModal(fileName = 'projeto.dwg') {
                const nameEl = document.getElementById('dwgTargetFilename');
                if (nameEl) nameEl.textContent = fileName;
                const modal = document.getElementById('cadDwgModal');
                if (modal) modal.classList.add('open');
                this.cmdSystem.logHistory('Nota: Arquivos binários .DWG requerem conversão para formato aberto .DXF ou uso dos blocos internos.');
            }

            saveDXF() {
                this.exportDXF();
            }

            exportDXF() {
                const dxfString = (typeof DxfIO !== 'undefined' && typeof DxfIO.export === 'function')
                    ? DxfIO.export(this.engine)
                    : (typeof DxfIO !== 'undefined' && typeof DxfIO.exportDXF === 'function' ? DxfIO.exportDXF(this.engine) : '');
                if (!dxfString) {
                    alert('Erro ao gerar arquivo DXF.');
                    return;
                }
                const activeDoc = this.getActiveDocument();
                let downloadName = 'projeto_cadclone.dxf';
                if (activeDoc && activeDoc.title) {
                    downloadName = activeDoc.title.replace(/\.dwg$/i, '') + '.dxf';
                }

                const blob = new Blob([dxfString], { type: 'application/dxf' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = downloadName;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
                this.engine.isDirty = false;
                if (activeDoc) activeDoc.state.isDirty = false;
                this.renderFileTabs();
                this.updateAutoSaveIndicator('saved');
                this.cmdSystem.logHistory(this.currentLang === 'en' ? `DXF file saved successfully (${downloadName}).` : `Arquivo DXF salvo com sucesso (${downloadName}).`);
            }

            // AutoSave & Crash Recovery Protection System
            initAutoSave() {
                // Tier 1: Accidental close / refresh protection
                window.addEventListener('beforeunload', (e) => {
                    if (this.engine && this.engine.entities && this.engine.entities.length > 0) {
                        this.performAutoSave(true);
                    }
                    if (this.engine && this.engine.isDirty && this.engine.entities.length > 0) {
                        e.preventDefault();
                        e.returnValue = this.t('confirm_unload');
                        return e.returnValue;
                    }
                });

                // Tier 2: Save on tab switch or window minimize
                document.addEventListener('visibilitychange', () => {
                    if (document.visibilityState === 'hidden' && this.engine && this.engine.entities && this.engine.entities.length > 0) {
                        this.performAutoSave(true);
                    }
                });

                // Periodic continuous background AutoSave (runs every 15 seconds)
                this.autoSaveInterval = setInterval(() => {
                    if (this.engine && this.engine.isDirty && this.engine.entities && this.engine.entities.length > 0) {
                        this.performAutoSave();
                    } else {
                        this.updateAutoSaveIndicator('idle');
                    }
                }, 15000);

                // Initial indicator check
                this.updateAutoSaveIndicator('idle');
            }

            performAutoSave(force = false) {
                if (!this.engine) return;
                if (!this.engine.isDirty && !force) {
                    this.updateAutoSaveIndicator('idle');
                    return;
                }
                if (!this.engine.entities || this.engine.entities.length === 0) {
                    this.updateAutoSaveIndicator('idle');
                    return;
                }

                try {
                    const state = this.engine.serializeState();
                    if (state) {
                        localStorage.setItem('cadclone_autosave', JSON.stringify(state));
                        this.engine.lastAutoSaveTime = Date.now();
                        this.engine.isDirty = false;
                        this.updateAutoSaveIndicator('saved');
                    }
                } catch (err) {
                    console.warn('AutoSave error:', err);
                }
            }

            updateAutoSaveIndicator(status = 'idle') {
                const badge = document.getElementById('statusAutoSave');
                const text = document.getElementById('statusAutoSaveText');
                const dot = document.getElementById('autoSaveDot');
                if (!badge || !text || !dot || !this.engine) return;

                // Keep active tab dirty flag and titlebar in sync
                const curDoc = this.getActiveDocument();
                if (curDoc) {
                    curDoc.state.isDirty = this.engine.isDirty;
                    const tabDirty = document.querySelector(`.file-tab[data-doc-id="${curDoc.id}"] .file-tab-dirty`);
                    if (this.engine.isDirty && !tabDirty) {
                        this.renderFileTabs();
                    } else if (!this.engine.isDirty && tabDirty) {
                        this.renderFileTabs();
                    }
                }

                if (this.engine.isDirty) {
                    dot.classList.add('saving');
                    text.textContent = this.t('status_autosave_saving');
                } else if (this.engine.lastAutoSaveTime) {
                    dot.classList.remove('saving');
                    const elapsedSec = Math.floor((Date.now() - this.engine.lastAutoSaveTime) / 1000);
                    if (elapsedSec < 5) {
                        text.textContent = this.t('status_autosave_now');
                    } else if (elapsedSec < 60) {
                        text.textContent = this.t('status_autosave_sec', { sec: elapsedSec });
                    } else {
                        const mins = Math.floor(elapsedSec / 60);
                        text.textContent = this.t('status_autosave_min', { min: mins });
                    }
                } else {
                    dot.classList.remove('saving');
                    text.textContent = this.t('status_autosave_active');
                }
            }

            showRecoveryModal(data) {
                const modal = document.getElementById('cadRecoveryModal');
                if (!modal) return;

                const timeEl = document.getElementById('recoveryModalTime');
                const countEl = document.getElementById('recoveryModalCount');

                if (timeEl && data && data.timestamp) {
                    const d = new Date(data.timestamp);
                    timeEl.textContent = d.toLocaleString(this.currentLang === 'en' ? 'en-US' : 'pt-BR');
                }
                if (countEl && data && data.entityCount !== undefined) {
                    countEl.textContent = `${data.entityCount} ${this.currentLang === 'en' ? 'objects' : 'objetos'}`;
                }

                modal.classList.add('open');
                this.cmdSystem.logHistory(this.currentLang === 'en' 
                    ? 'AutoCAD Drawing Recovery: Previous session backup found.' 
                    : 'AutoCAD Drawing Recovery: Backup de sessão anterior localizado.');
            }

            dismissRecoveryModal() {
                const modal = document.getElementById('cadRecoveryModal');
                if (modal) modal.classList.remove('open');
                if (this.pendingRecoveryData && (!this.engine.entities || this.engine.entities.length === 0)) {
                    this.proceedNormalStartup();
                }
            }

            restoreAutoSave() {
                if (!this.pendingRecoveryData) {
                    const autoSaveRaw = localStorage.getItem('cadclone_autosave');
                    if (autoSaveRaw) {
                        try { this.pendingRecoveryData = JSON.parse(autoSaveRaw); } catch(e){}
                    }
                }

                if (this.pendingRecoveryData && this.engine.restoreState(this.pendingRecoveryData)) {
                    this.dismissRecoveryModal();
                    this.dismissSampleBanner();
                    if (this.underlayManager) this.underlayManager.updateHud();
                    this.engine.zoomExtents();
                    this.updateAutoSaveIndicator('saved');
                    const curDoc = this.getActiveDocument();
                    if (curDoc) {
                        curDoc.title = (this.currentLang === 'en' ? 'AutoCAD-Recovered.dwg' : 'AutoCAD-Recuperado.dwg');
                        curDoc.state.isDirty = true;
                    }
                    this.renderFileTabs();
                    const count = this.pendingRecoveryData.entityCount || this.engine.entities.length;
                    this.cmdSystem.logHistory(this.t('recovery_success_msg', { count }));
                    this.pendingRecoveryData = null;
                } else {
                    alert(this.t('alert_restore_fail'));
                    this.dismissRecoveryModal();
                    this.proceedNormalStartup();
                }
            }

            discardRecovery() {
                localStorage.removeItem('cadclone_autosave');
                this.pendingRecoveryData = null;
                this.dismissRecoveryModal();
                this.cmdSystem.logHistory(this.currentLang === 'en' ? 'Previous backup discarded.' : 'Backup anterior descartado.');
                this.proceedNormalStartup();
            }

            // Sample Project Initialization & Startup Management
            initSampleDrawing() {
                // Tier 3: Crash & Power Outage Recovery Detection
                const autoSaveRaw = localStorage.getItem('cadclone_autosave');
                if (autoSaveRaw) {
                    try {
                        const data = JSON.parse(autoSaveRaw);
                        if (data && Array.isArray(data.entities) && data.entities.length > 0) {
                            this.pendingRecoveryData = data;
                            this.showRecoveryModal(data);
                            return;
                        }
                    } catch (e) {
                        console.warn('Erro ao ler autosave:', e);
                        localStorage.removeItem('cadclone_autosave');
                    }
                }

                this.proceedNormalStartup();
            }

            proceedNormalStartup() {
                const setting = localStorage.getItem('cadclone_load_sample');
                const shouldLoad = setting !== 'false'; // Default to true on first run

                if (shouldLoad) {
                    this.loadSampleDrawing(false);
                } else {
                    this.engine.clear();
                    this.engine.zoomExtents();
                    this.cmdSystem.logHistory(this.currentLang === 'en' ? 'Started in Blank Drawing mode.' : 'Iniciado em modo Desenho em Branco.');
                }
            }

            loadSampleDrawing(confirmReplace = true) {
                const sampleName = 'Planta_Modelo_25x10.dwg';
                const existingDoc = this.documents ? this.documents.find(d => d.title === sampleName) : null;
                if (existingDoc && (!confirmReplace || this.activeDocId !== existingDoc.id)) {
                    this.switchDocument(existingDoc.id, true);
                    this.cmdSystem.logHistory(this.currentLang === 'en' 
                        ? 'Switched to existing Sample Floor Plan tab.' 
                        : 'Alternado para a aba existente da Planta Modelo.');
                    return;
                }

                if (!existingDoc) {
                    if (this.engine.entities.length > 0 || this.engine.isDirty) {
                        this.createDocument(sampleName, null, true);
                    } else {
                        const curDoc = this.getActiveDocument();
                        if (curDoc) curDoc.title = sampleName;
                    }
                }

                this.engine.loadSampleFloorPlan();
                this.syncActiveDocState();
                this.renderFileTabs();
                this.cmdSystem.logHistory(this.currentLang === 'en' 
                    ? 'Sample Residential Floor Plan (25x10m) loaded with CADClone logo.' 
                    : 'Planta Baixa Residencial (25x10m) carregada com o logotipo CADClone.');
            }

            showSampleBanner(show = false) {
                // Permanently disabled to keep Model Space clean and unobstructed like AutoCAD
                const banner = document.getElementById('cadSampleBanner');
                if (banner) banner.style.display = 'none';
            }

            dismissSampleBanner() {
                const banner = document.getElementById('cadSampleBanner');
                if (banner) banner.style.display = 'none';
            }

            toggleSampleStartup(checked) {
                localStorage.setItem('cadclone_load_sample', checked ? 'true' : 'false');
                if (checked) {
                    this.cmdSystem.logHistory(this.currentLang === 'en' 
                        ? 'Settings saved: Sample floor plan will load on startup.' 
                        : 'Configuração salva: O projeto modelo abrirá automaticamente ao iniciar.');
                } else {
                    this.cmdSystem.logHistory(this.currentLang === 'en' 
                        ? 'Settings saved: CADClone will start with Blank Drawing.' 
                        : 'Configuração salva: O CADClone abrirá sempre com Desenho em Branco.');
                }
            }

            initPwaInstall() {
                const btn = document.getElementById('btnInstallPwa');
                const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
                if (isStandalone && btn) {
                    btn.style.display = 'none';
                    btn.classList.add('installed');
                }

                window.addEventListener('beforeinstallprompt', (e) => {
                    e.preventDefault();
                    window.deferredPwaPrompt = e;
                    if (btn && !isStandalone) {
                        btn.style.display = 'inline-flex';
                        btn.classList.remove('installed');
                    }
                });

                window.addEventListener('appinstalled', () => {
                    window.deferredPwaPrompt = null;
                    if (btn) {
                        btn.style.display = 'none';
                        btn.classList.add('installed');
                    }
                    if (this.cmdSystem) {
                        this.cmdSystem.logHistory(this.currentLang === 'en' 
                            ? 'CADClone App installed successfully!' 
                            : 'Aplicativo CADClone instalado com sucesso!');
                    }
                });
            }

            promptInstallPWA() {
                if (window.deferredPwaPrompt) {
                    window.deferredPwaPrompt.prompt();
                    window.deferredPwaPrompt.userChoice.then((choiceResult) => {
                        if (choiceResult && choiceResult.outcome === 'accepted') {
                            const btn = document.getElementById('btnInstallPwa');
                            if (btn) {
                                btn.style.display = 'none';
                                btn.classList.add('installed');
                            }
                            if (this.cmdSystem) {
                                this.cmdSystem.logHistory(this.currentLang === 'en' 
                                    ? 'CADClone App installed successfully!' 
                                    : 'Aplicativo CADClone instalado com sucesso!');
                            }
                        }
                        window.deferredPwaPrompt = null;
                    });
                } else {
                    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
                    if (isStandalone) {
                        alert(this.currentLang === 'en'
                            ? 'CADClone is already running in installed app mode!'
                            : 'O CADClone já está instalado e rodando em modo aplicativo!');
                    } else {
                        alert(this.currentLang === 'en'
                            ? 'To install CADClone on your PC or Mobile:\n• In Chrome/Edge: Click the Install icon in the address bar (top right) or use Menu > Install CADClone.\n• In Safari iOS: Tap Share and choose "Add to Home Screen".'
                            : 'Para instalar o CADClone no Computador ou Celular:\n• No Chrome/Edge: Clique no ícone de instalação na barra de endereços (canto superior direito) ou acesse Menu > Instalar CADClone.\n• No iPhone/iPad (Safari): Toque em Compartilhar e escolha "Adicionar à Tela de Início".');
                    }
                }
            }
        }

        // PWA Service Worker Registration & Cache Auto-Update
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('sw.js?v=1.6.1').then(reg => {
                    reg.update();
                }).catch(err => {
                    console.warn('SW registration failed:', err);
                });
            });
        }

        // Boot
        window.addEventListener('DOMContentLoaded', () => {
            window.cadcloneUI = new CADCloneUI();
        });
    </script>
</body>
</html>
