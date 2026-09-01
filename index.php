<?php
header("Cache-Control: no-cache, no-store, must-revalidate");
$assetVersion = time();
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
    <title>CADFÁCIL — Professional DWG/DXF 3D Reader &amp; Editor</title>
    <meta name="description" content="CADFÁCIL — Professional web platform for reading, editing, 3D inspecting, and measuring native AutoCAD DWG and DXF files.">
    <link rel="icon" type="image/svg+xml" href="favicon.svg">
    <link rel="manifest" href="manifest.json">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
    
    <style>
        * { box-sizing: border-box !important; margin: 0; padding: 0; }
        body {
            font-family: 'Inter', system-ui, -apple-system, sans-serif;
            background: #030712;
            color: #f3f4f6;
            height: 100vh;
            overflow: hidden;
            display: flex;
            flex-direction: column;
        }

        /* Glassmorphic Header */
        .top-header {
            height: 48px;
            background: rgba(15, 23, 42, 0.95);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid rgba(30, 41, 59, 0.8);
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 16px;
            z-index: 100;
            user-select: none;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
        }

        .brand-logo {
            display: flex;
            align-items: center;
            gap: 10px;
            text-decoration: none;
        }

        .brand-icon {
            width: 28px;
            height: 28px;
            background: linear-gradient(135deg, #2563eb, #7c3aed);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 0 15px rgba(37, 99, 235, 0.5);
        }

        .brand-text {
            font-size: 16px;
            font-weight: 800;
            letter-spacing: -0.02em;
            color: #ffffff;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .brand-text span {
            background: linear-gradient(135deg, #60a5fa, #a78bfa);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .version-badge {
            font-size: 10px;
            font-weight: 700;
            background: rgba(37, 99, 235, 0.2);
            color: #60a5fa;
            border: 1px solid rgba(96, 165, 250, 0.3);
            padding: 2px 8px;
            border-radius: 20px;
            letter-spacing: 0.05em;
        }

        .status-pill {
            display: flex;
            align-items: center;
            gap: 6px;
            background: rgba(15, 23, 42, 0.6);
            border: 1px solid rgba(51, 65, 85, 0.6);
            padding: 4px 10px;
            border-radius: 20px;
            font-size: 11px;
            color: #cbd5e1;
        }

        .status-pulse {
            width: 7px;
            height: 7px;
            background: #22c55e;
            border-radius: 50%;
            box-shadow: 0 0 8px #22c55e;
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
            70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(34, 197, 94, 0); }
            100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
        }

        /* Viewport Container (100% Fullscreen) */
        .viewport-container {
            flex: 1;
            width: 100%;
            height: calc(100vh - 78px);
            position: relative;
            background: #000;
        }

        iframe {
            width: 100%;
            height: 100%;
            border: none;
            display: block;
        }

        /* Glassmorphic Footer */
        .footer-bar {
            height: 30px;
            background: rgba(2, 6, 23, 0.95);
            backdrop-filter: blur(10px);
            border-top: 1px solid rgba(30, 41, 59, 0.8);
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 16px;
            font-size: 11px;
            color: #64748b;
            z-index: 100;
        }

        .footer-left { display: flex; align-items: center; gap: 8px; }
        .footer-links { display: flex; align-items: center; gap: 12px; }
        .footer-links a { color: #60a5fa; text-decoration: none; font-weight: 500; }
        .footer-links a:hover { color: #93c5fd; text-decoration: underline; }
    </style>
</head>
<body>

    <!-- Header Navigation -->
    <header class="top-header">
        <div class="brand-logo">
            <div class="brand-icon">
                <svg style="width:16px;height:16px;color:#fff;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
            </div>
            <div class="brand-text">
                CAD<span>FÁCIL</span>
            </div>
            <span class="version-badge">PRO v4.0</span>
        </div>

        <div class="status-pill hidden md:flex">
            <div class="status-pulse"></div>
            <span>DWG 3D Serverless Engine (WebAssembly &bull; 60 FPS)</span>
        </div>
    </header>

    <!-- Engine Viewport -->
    <main class="viewport-container">
        <iframe id="cadIframe" src="https://mlightcad.netlify.app/" allowfullscreen></iframe>
    </main>

    <!-- Institutional Footer -->
    <footer class="footer-bar">
        <div class="footer-left">
            <span>&bull; DWG/DXF Reader &amp; Editor 100% Client-Side</span>
        </div>
        <div class="footer-links">
            <span>&copy; <?php echo date("Y"); ?> CADFÁCIL &bull; 4U.IA.BR</span>
            <span>&bull;</span>
            <a href="privacidade.php">Privacidade</a>
            <span>|</span>
            <a href="termos.php">Termos de Uso</a>
            <span>|</span>
            <a href="suporte.php">Suporte &amp; Contato</a>
        </div>
    </footer>

    <script>
      if ("serviceWorker" in navigator) {
        window.addEventListener("load", () => {
          navigator.serviceWorker.register("sw.js").catch(err => console.log("SW reg error:", err));
        });
      }
    </script>
</body>
</html>
