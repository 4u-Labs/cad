/**
 * CADClone — 3D Solid Modeling, Viewport & STL Engine
 * Powered by Three.js, OrbitControls, STLLoader, STLExporter, and CSG (Constructive Solid Geometry).
 * 100% Client-Side, Offline-Ready PWA Engine.
 */
class Cad3DManager {
    constructor() {
        this.container = null;
        this.canvas = null;
        this.engine = null;
        this.ui = null;
        
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.controls = null;
        this.active = false;
        
        // 3D Objects tracking
        this.solids = []; // Array of user-created 3D solid meshes
        this.selectedSolid = null;
        this.underlay2DGroup = null; // Ground projection of 2D entities
        this.gridHelper = null;
        this.axesHelper = null;
        
        this.visualStyle = 'shaded'; // 'shaded' | 'wireframe' | 'xray'
        this.animFrameId = null;
        this.raycaster = null;
        this.mouse = null;
    }

    init(containerEl, canvasEl, cadEngine, cadUi) {
        this.container = containerEl;
        this.canvas = canvasEl;
        this.engine = cadEngine;
        this.ui = cadUi;
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();

        // Scene
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x1a1d24);

        // Camera (Perspective 45deg)
        const width = this.container.clientWidth || window.innerWidth;
        const height = this.container.clientHeight || (window.innerHeight - 150);
        this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 5000);
        this.camera.position.set(40, 50, 60);

        // Renderer
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
            alpha: true,
            preserveDrawingBuffer: true
        });
        this.renderer.setSize(width, height);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        // Controls
        this.controls = new THREE.OrbitControls(this.camera, this.canvas);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.08;
        this.controls.screenSpacePanning = true;
        this.controls.target.set(0, 0, 0);
        this.controls.maxPolarAngle = Math.PI / 2 + 0.1; // allow slight under-view

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.65);
        this.scene.add(ambientLight);

        const dirLight1 = new THREE.DirectionalLight(0xffffff, 0.7);
        dirLight1.position.set(60, 100, 40);
        dirLight1.castShadow = true;
        dirLight1.shadow.mapSize.width = 1024;
        dirLight1.shadow.mapSize.height = 1024;
        this.scene.add(dirLight1);

        const dirLight2 = new THREE.DirectionalLight(0x90b0e0, 0.35);
        dirLight2.position.set(-60, 40, -40);
        this.scene.add(dirLight2);

        // Ground 3D Grid & Coordinate Tripod (X=Red, Y=Green, Z=Blue)
        this.gridHelper = new THREE.GridHelper(100, 50, 0x4f46e5, 0x334155);
        this.gridHelper.position.y = 0;
        this.scene.add(this.gridHelper);

        this.axesHelper = new THREE.AxesHelper(15);
        this.axesHelper.position.set(0, 0.05, 0);
        this.scene.add(this.axesHelper);

        // Groups
        this.underlay2DGroup = new THREE.Group();
        this.scene.add(this.underlay2DGroup);

        // Raycasting selection on click
        this.canvas.addEventListener('pointerdown', (e) => this.onPointerDown(e));

        // Window resize
        window.addEventListener('resize', () => {
            if (this.active) this.onResize();
        });

        this.renderLoop = this.renderLoop.bind(this);
    }

    onResize() {
        if (!this.container || !this.camera || !this.renderer) return;
        const width = this.container.clientWidth;
        const height = this.container.clientHeight;
        if (width === 0 || height === 0) return;
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);
    }

    renderLoop() {
        if (!this.active) return;
        this.animFrameId = requestAnimationFrame(this.renderLoop);
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }

    /**
     * Activates 3D mode: shows 3D canvas, hides 2D canvas, syncs 2D elements to ground plane.
     */
    show() {
        if (this.active) return;
        this.active = true;
        this.container.style.display = 'block';
        if (this.ui && this.ui.canvas) {
            this.ui.canvas.style.display = 'none';
        }
        this.onResize();
        this.sync2DToGroundPlane();
        this.renderLoop();

        // Update Ribbon / View buttons if present
        const btn3d = document.getElementById('btnToggle3D');
        if (btn3d) {
            btn3d.classList.add('active');
            btn3d.setAttribute('title', 'Voltar para Planta 2D (PLAN / 2D)');
        }
        const hud = document.getElementById('cad3dHudBar');
        if (hud) hud.style.display = 'flex';

        if (this.ui && this.ui.cmdSystem) {
            const isEn = this.ui.currentLang === 'en';
            this.ui.cmdSystem.logHistory(isEn 
                ? 'Entered 3D Orbit Viewport. Hold Left Click to orbit, Right Click to pan, Wheel to zoom.' 
                : 'Entrou no Modo Órbita 3D. Botão esquerdo para girar, direito para arrastar, scroll para zoom.');
        }
    }

    /**
     * Deactivates 3D mode: returns to 2D Top Plan mode.
     */
    hide() {
        if (!this.active) return;
        this.active = false;
        if (this.animFrameId) {
            cancelAnimationFrame(this.animFrameId);
            this.animFrameId = null;
        }
        this.container.style.display = 'none';
        if (this.ui && this.ui.canvas) {
            this.ui.canvas.style.display = 'block';
        }

        const btn3d = document.getElementById('btnToggle3D');
        if (btn3d) {
            btn3d.classList.remove('active');
            btn3d.setAttribute('title', 'Ativar Órbita 3D e Modelagem de Sólidos (3DORBIT)');
        }
        const hud = document.getElementById('cad3dHudBar');
        if (hud) hud.style.display = 'none';

        if (this.ui && this.ui.cmdSystem) {
            const isEn = this.ui.currentLang === 'en';
            this.ui.cmdSystem.logHistory(isEn ? 'Returned to 2D Plan View (PLAN).' : 'Retornou para a Vista em Planta 2D (PLAN).');
        }
    }

    toggle() {
        if (this.active) {
            this.hide();
        } else {
            this.show();
        }
    }

    /**
     * Converts current 2D engine entities (lines, rects, circles, polylines) into 3D lines
     * lying on the ground plane (Y=0, corresponding to X/Z plane in Three.js).
     */
    sync2DToGroundPlane() {
        while (this.underlay2DGroup.children.length > 0) {
            const obj = this.underlay2DGroup.children[0];
            this.underlay2DGroup.remove(obj);
            if (obj.geometry) obj.geometry.dispose();
            if (obj.material) obj.material.dispose();
        }

        if (!this.engine || !this.engine.entities) return;

        const lineMat = new THREE.LineBasicMaterial({ color: 0x38bdf8, linewidth: 1.5 });
        const dimMat = new THREE.LineBasicMaterial({ color: 0xe2e8f0, linewidth: 1 });

        // Calculate center of 2D entities to auto-frame camera if needed
        let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;

        this.engine.entities.forEach(ent => {
            if (ent.type === 'LINE') {
                const p1 = new THREE.Vector3(ent.x1, 0.02, ent.y1);
                const p2 = new THREE.Vector3(ent.x2, 0.02, ent.y2);
                const geom = new THREE.BufferGeometry().setFromPoints([p1, p2]);
                const line = new THREE.Line(geom, lineMat);
                this.underlay2DGroup.add(line);

                minX = Math.min(minX, ent.x1, ent.x2);
                maxX = Math.max(maxX, ent.x1, ent.x2);
                minY = Math.min(minY, ent.y1, ent.y2);
                maxY = Math.max(maxY, ent.y1, ent.y2);
            } else if (ent.type === 'RECTANGLE') {
                const pts = [
                    new THREE.Vector3(ent.x, 0.02, ent.y),
                    new THREE.Vector3(ent.x + ent.w, 0.02, ent.y),
                    new THREE.Vector3(ent.x + ent.w, 0.02, ent.y + ent.h),
                    new THREE.Vector3(ent.x, 0.02, ent.y + ent.h),
                    new THREE.Vector3(ent.x, 0.02, ent.y)
                ];
                const geom = new THREE.BufferGeometry().setFromPoints(pts);
                const line = new THREE.Line(geom, lineMat);
                this.underlay2DGroup.add(line);

                minX = Math.min(minX, ent.x, ent.x + ent.w);
                maxX = Math.max(maxX, ent.x, ent.x + ent.w);
                minY = Math.min(minY, ent.y, ent.y + ent.h);
                maxY = Math.max(maxY, ent.y, ent.y + ent.h);
            } else if (ent.type === 'CIRCLE') {
                const curve = new THREE.EllipseCurve(ent.x, ent.y, ent.r, ent.r, 0, 2 * Math.PI, false, 0);
                const points = curve.getPoints(48).map(p => new THREE.Vector3(p.x, 0.02, p.y));
                const geom = new THREE.BufferGeometry().setFromPoints(points);
                const line = new THREE.Line(geom, lineMat);
                this.underlay2DGroup.add(line);

                minX = Math.min(minX, ent.x - ent.r);
                maxX = Math.max(maxX, ent.x + ent.r);
                minY = Math.min(minY, ent.y - ent.r);
                maxY = Math.max(maxY, ent.y + ent.r);
            } else if (ent.type === 'POLYLINE' && Array.isArray(ent.points)) {
                const pts = ent.points.map(p => new THREE.Vector3(p.x, 0.02, p.y));
                if (ent.closed && pts.length > 0) pts.push(pts[0].clone());
                const geom = new THREE.BufferGeometry().setFromPoints(pts);
                const line = new THREE.Line(geom, lineMat);
                this.underlay2DGroup.add(line);

                ent.points.forEach(p => {
                    minX = Math.min(minX, p.x); maxX = Math.max(maxX, p.x);
                    minY = Math.min(minY, p.y); maxY = Math.max(maxY, p.y);
                });
            }
        });

        // If drawing has valid bounds and no solids yet, position target at center
        if (minX !== Infinity && this.solids.length === 0) {
            const cx = (minX + maxX) / 2;
            const cz = (minY + maxY) / 2;
            const size = Math.max(maxX - minX, maxY - minY, 10);
            this.controls.target.set(cx, 0, cz);
            this.camera.position.set(cx + size * 1.2, size * 1.4, cz + size * 1.5);
            this.controls.update();
        }
    }

    /**
     * Set standard camera view preset
     */
    setView(viewName) {
        const target = this.controls.target.clone();
        const dist = 60;
        switch (viewName.toLowerCase()) {
            case 'top':
            case 'plan':
                this.camera.position.set(target.x, target.y + dist, target.z + 0.001);
                break;
            case 'front':
                this.camera.position.set(target.x, target.y, target.z + dist);
                break;
            case 'right':
                this.camera.position.set(target.x + dist, target.y, target.z);
                break;
            case 'left':
                this.camera.position.set(target.x - dist, target.y, target.z);
                break;
            case 'back':
                this.camera.position.set(target.x, target.y, target.z - dist);
                break;
            case 'iso':
            case 'iso-sw':
            default:
                this.camera.position.set(target.x + dist * 0.7, target.y + dist * 0.8, target.z + dist * 0.7);
                break;
            case 'iso-ne':
                this.camera.position.set(target.x - dist * 0.7, target.y + dist * 0.8, target.z - dist * 0.7);
                break;
        }
        this.controls.update();
    }

    /**
     * Switch 3D visual style
     */
    setVisualStyle(style) {
        this.visualStyle = style;
        this.solids.forEach(m => {
            if (style === 'wireframe') {
                m.material.wireframe = true;
                m.material.opacity = 1;
                m.material.transparent = false;
            } else if (style === 'xray') {
                m.material.wireframe = false;
                m.material.opacity = 0.45;
                m.material.transparent = true;
            } else {
                // Shaded default
                m.material.wireframe = false;
                m.material.opacity = 1;
                m.material.transparent = false;
            }
            m.material.needsUpdate = true;
        });
        if (this.ui && this.ui.cmdSystem) {
            this.ui.cmdSystem.logHistory(`Estilo Visual 3D: ${style.toUpperCase()}`);
        }
    }

    /**
     * Creates a standard Solid Box (BOX)
     */
    createBox(width = 10, length = 10, height = 5, x = null, z = null) {
        const posX = x !== null ? x : this.controls.target.x;
        const posZ = z !== null ? z : this.controls.target.z;
        const posY = height / 2;

        const geom = new THREE.BoxGeometry(width, height, length);
        const mat = new THREE.MeshStandardMaterial({
            color: 0x3b82f6,
            roughness: 0.35,
            metalness: 0.15
        });
        const mesh = new THREE.Mesh(geom, mat);
        mesh.position.set(posX, posY, posZ);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        mesh.userData = {
            type: 'BOX',
            name: `Box_${this.solids.length + 1}`,
            dimensions: { width, length, height }
        };

        this.scene.add(mesh);
        this.solids.push(mesh);
        this.selectSolid(mesh);

        if (this.ui && this.ui.cmdSystem) {
            const isEn = this.ui.currentLang === 'en';
            this.ui.cmdSystem.logHistory(isEn 
                ? `Created 3D Box: ${width}m x ${length}m x ${height}m` 
                : `Cubo 3D criado: ${width}m x ${length}m x ${height}m`);
        }
        return mesh;
    }

    /**
     * Creates a standard Solid Cylinder (CYLINDER)
     */
    createCylinder(radius = 5, height = 10, x = null, z = null) {
        const posX = x !== null ? x : this.controls.target.x;
        const posZ = z !== null ? z : this.controls.target.z;
        const posY = height / 2;

        const geom = new THREE.CylinderGeometry(radius, radius, height, 32);
        const mat = new THREE.MeshStandardMaterial({
            color: 0x10b981,
            roughness: 0.35,
            metalness: 0.15
        });
        const mesh = new THREE.Mesh(geom, mat);
        mesh.position.set(posX, posY, posZ);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        mesh.userData = {
            type: 'CYLINDER',
            name: `Cylinder_${this.solids.length + 1}`,
            dimensions: { radius, height }
        };

        this.scene.add(mesh);
        this.solids.push(mesh);
        this.selectSolid(mesh);

        if (this.ui && this.ui.cmdSystem) {
            const isEn = this.ui.currentLang === 'en';
            this.ui.cmdSystem.logHistory(isEn 
                ? `Created 3D Cylinder: Radius ${radius}m, Height ${height}m` 
                : `Cilindro 3D criado: Raio ${radius}m, Altura ${height}m`);
        }
        return mesh;
    }

    /**
     * Creates a standard Solid Sphere (SPHERE)
     */
    createSphere(radius = 5, x = null, z = null) {
        const posX = x !== null ? x : this.controls.target.x;
        const posZ = z !== null ? z : this.controls.target.z;
        const posY = radius;

        const geom = new THREE.SphereGeometry(radius, 32, 24);
        const mat = new THREE.MeshStandardMaterial({
            color: 0xf59e0b,
            roughness: 0.35,
            metalness: 0.15
        });
        const mesh = new THREE.Mesh(geom, mat);
        mesh.position.set(posX, posY, posZ);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        mesh.userData = {
            type: 'SPHERE',
            name: `Sphere_${this.solids.length + 1}`,
            dimensions: { radius }
        };

        this.scene.add(mesh);
        this.solids.push(mesh);
        this.selectSolid(mesh);

        if (this.ui && this.ui.cmdSystem) {
            const isEn = this.ui.currentLang === 'en';
            this.ui.cmdSystem.logHistory(isEn 
                ? `Created 3D Sphere: Radius ${radius}m` 
                : `Esfera 3D criada: Raio ${radius}m`);
        }
        return mesh;
    }

    /**
     * Extrude 2D floor plan / geometry into 3D Solid Walls (EXTRUDE / EXT)
     */
    extrude2D(height = 2.8, wallThickness = 0.15) {
        if (!this.engine || !this.engine.entities || this.engine.entities.length === 0) {
            alert('Não há entidades 2D desenhadas para extrudar.');
            return;
        }

        const extrudedGroup = new THREE.Group();
        let extrudedCount = 0;

        const wallMat = new THREE.MeshStandardMaterial({
            color: 0xf8fafc,
            roughness: 0.5,
            metalness: 0.05
        });

        this.engine.entities.forEach((ent, idx) => {
            if (ent.type === 'LINE') {
                // Extrude line as a 3D wall with specified thickness
                const dx = ent.x2 - ent.x1;
                const dz = ent.y2 - ent.y1;
                const len = Math.hypot(dx, dz);
                if (len < 0.01) return;

                const angle = Math.atan2(dz, dx);
                const geom = new THREE.BoxGeometry(len, height, wallThickness);
                const mesh = new THREE.Mesh(geom, wallMat.clone());

                mesh.position.set((ent.x1 + ent.x2) / 2, height / 2, (ent.y1 + ent.y2) / 2);
                mesh.rotation.y = -angle;
                mesh.castShadow = true;
                mesh.receiveShadow = true;
                mesh.userData = { type: 'EXTRUDED_WALL', id: `Wall_${idx}` };

                this.scene.add(mesh);
                this.solids.push(mesh);
                extrudedCount++;
            } else if (ent.type === 'RECTANGLE') {
                // Extrude rectangle as solid prism
                const geom = new THREE.BoxGeometry(ent.w, height, ent.h);
                const mesh = new THREE.Mesh(geom, wallMat.clone());
                mesh.position.set(ent.x + ent.w / 2, height / 2, ent.y + ent.h / 2);
                mesh.castShadow = true;
                mesh.receiveShadow = true;
                mesh.userData = { type: 'EXTRUDED_RECT', id: `Prism_${idx}` };

                this.scene.add(mesh);
                this.solids.push(mesh);
                extrudedCount++;
            } else if (ent.type === 'CIRCLE') {
                // Extrude circle as cylinder
                const geom = new THREE.CylinderGeometry(ent.r, ent.r, height, 32);
                const mesh = new THREE.Mesh(geom, wallMat.clone());
                mesh.position.set(ent.x, height / 2, ent.y);
                mesh.castShadow = true;
                mesh.receiveShadow = true;
                mesh.userData = { type: 'EXTRUDED_CYL', id: `Column_${idx}` };

                this.scene.add(mesh);
                this.solids.push(mesh);
                extrudedCount++;
            }
        });

        if (this.ui && this.ui.cmdSystem) {
            const isEn = this.ui.currentLang === 'en';
            this.ui.cmdSystem.logHistory(isEn 
                ? `Extruded ${extrudedCount} elements to 3D with height = ${height}m` 
                : `Extrusão 3D concluída: ${extrudedCount} elementos elevados com altura = ${height}m`);
        }
    }

    /**
     * CSG Boolean Operations: UNION, SUBTRACT, INTERSECT
     */
    applyBooleanOperation(opType = 'subtract') {
        if (typeof CSG === 'undefined') {
            alert('Módulo de geometria booleana CSG não carregado.');
            return;
        }

        if (this.solids.length < 2) {
            alert('São necessários pelo menos 2 sólidos na cena para aplicar operações booleanas (União / Subtração).');
            return;
        }

        // Target solid: currently selected or first solid
        const targetMesh = this.selectedSolid || this.solids[0];
        // Tool solid: the last created or other solid
        const toolMesh = this.solids.find(s => s !== targetMesh);

        if (!targetMesh || !toolMesh) {
            alert('Selecione os sólidos para realizar a operação.');
            return;
        }

        try {
            targetMesh.updateMatrix();
            toolMesh.updateMatrix();

            const csgA = CSG.fromMesh(targetMesh);
            const csgB = CSG.fromMesh(toolMesh);

            let resultCsg = null;
            if (opType === 'union') {
                resultCsg = csgA.union(csgB);
            } else if (opType === 'intersect') {
                resultCsg = csgA.intersect(csgB);
            } else {
                // default subtract (tool cut out of target)
                resultCsg = csgA.subtract(csgB);
            }

            const resultMesh = CSG.toMesh(resultCsg, targetMesh.matrix, targetMesh.material);
            resultMesh.castShadow = true;
            resultMesh.receiveShadow = true;
            resultMesh.userData = {
                type: 'CSG_SOLID',
                operation: opType,
                name: `${targetMesh.userData.name || 'Solid'}_${opType}`
            };

            // Remove original meshes
            this.removeSolid(targetMesh);
            this.removeSolid(toolMesh);

            // Add result
            this.scene.add(resultMesh);
            this.solids.push(resultMesh);
            this.selectSolid(resultMesh);

            if (this.ui && this.ui.cmdSystem) {
                const isEn = this.ui.currentLang === 'en';
                this.ui.cmdSystem.logHistory(isEn
                    ? `Boolean ${opType.toUpperCase()} applied successfully.`
                    : `Operação booleana ${opType.toUpperCase()} realizada com sucesso.`);
            }
        } catch (err) {
            console.error('Erro na operação booleana CSG:', err);
            alert('Não foi possível completar a operação booleana: ' + err.message);
        }
    }

    /**
     * Export all solids to binary/ASCII STL (STLOUT / EXPORTSTL)
     */
    exportSTL(fileName = 'modelo_cadclone.stl', binary = true) {
        if (typeof THREE.STLExporter === 'undefined') {
            alert('Exportador STL não disponível.');
            return;
        }

        // Group solids into export scene
        const exportGroup = new THREE.Group();
        this.solids.forEach(s => exportGroup.add(s.clone()));

        if (exportGroup.children.length === 0) {
            alert('Nenhum sólido 3D presente na cena para exportar em STL.');
            return;
        }

        const exporter = new THREE.STLExporter();
        const result = exporter.parse(exportGroup, { binary: binary });

        let blob = null;
        if (binary) {
            blob = new Blob([result], { type: 'application/octet-stream' });
        } else {
            blob = new Blob([result], { type: 'text/plain' });
        }

        // Download or FileSystemAccess
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        if (this.ui && this.ui.cmdSystem) {
            const isEn = this.ui.currentLang === 'en';
            this.ui.cmdSystem.logHistory(isEn
                ? `3D Model exported to STL: ${fileName} (${(blob.size / 1024).toFixed(1)} KB)`
                : `Modelo 3D exportado para STL com sucesso: ${fileName} (${(blob.size / 1024).toFixed(1)} KB)`);
        }
    }

    /**
     * Import an STL file (binary or ASCII) into the 3D scene (STLIN / IMPORTSTL)
     */
    async importSTL(file) {
        if (!file) return;
        if (typeof THREE.STLLoader === 'undefined') {
            alert('Importador STLLoader não disponível.');
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const loader = new THREE.STLLoader();
                const geometry = loader.parse(e.target.result);
                geometry.computeVertexNormals();
                geometry.center();

                const mat = new THREE.MeshStandardMaterial({
                    color: 0x94a3b8,
                    roughness: 0.4,
                    metalness: 0.2
                });
                const mesh = new THREE.Mesh(geometry, mat);

                // Place on ground plane
                geometry.computeBoundingBox();
                const bbox = geometry.boundingBox;
                const height = bbox.max.y - bbox.min.y;
                mesh.position.set(0, height / 2, 0);
                mesh.castShadow = true;
                mesh.receiveShadow = true;
                mesh.userData = { type: 'STL_MESH', name: file.name };

                this.scene.add(mesh);
                this.solids.push(mesh);
                this.selectSolid(mesh);

                // Switch to 3D view if not already active
                if (!this.active) this.show();

                // Frame camera around imported STL
                const maxDim = Math.max(bbox.max.x - bbox.min.x, bbox.max.y - bbox.min.y, bbox.max.z - bbox.min.z);
                this.controls.target.set(0, height / 2, 0);
                this.camera.position.set(maxDim * 1.5, maxDim * 1.5, maxDim * 1.5);
                this.controls.update();

                if (this.ui && this.ui.cmdSystem) {
                    const isEn = this.ui.currentLang === 'en';
                    this.ui.cmdSystem.logHistory(isEn
                        ? `Imported STL: ${file.name} (${geometry.attributes.position.count / 3} triangles)`
                        : `Arquivo STL importado: ${file.name} (${geometry.attributes.position.count / 3} triângulos)`);
                }
            } catch (err) {
                console.error('Erro ao importar STL:', err);
                alert('Falha ao processar arquivo STL: ' + err.message);
            }
        };
        reader.readAsArrayBuffer(file);
    }

    /**
     * Mouse raycasting selection of solids
     */
    onPointerDown(e) {
        if (e.button !== 0) return; // only left click
        const rect = this.canvas.getBoundingClientRect();
        this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        this.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

        this.raycaster.setFromCamera(this.mouse, this.camera);
        const intersects = this.raycaster.intersectObjects(this.solids, false);

        if (intersects.length > 0) {
            this.selectSolid(intersects[0].object);
        } else {
            this.deselectAll();
        }
    }

    selectSolid(mesh) {
        this.deselectAll();
        this.selectedSolid = mesh;
        if (mesh && mesh.material) {
            mesh.material.emissive = new THREE.Color(0x38bdf8);
            mesh.material.emissiveIntensity = 0.25;
        }
    }

    deselectAll() {
        if (this.selectedSolid && this.selectedSolid.material) {
            this.selectedSolid.material.emissive = new THREE.Color(0x000000);
            this.selectedSolid.material.emissiveIntensity = 0;
        }
        this.selectedSolid = null;
    }

    removeSolid(mesh) {
        const idx = this.solids.indexOf(mesh);
        if (idx !== -1) this.solids.splice(idx, 1);
        this.scene.remove(mesh);
        if (mesh.geometry) mesh.geometry.dispose();
        if (mesh.material) mesh.material.dispose();
        if (this.selectedSolid === mesh) this.selectedSolid = null;
    }

    clearSolids() {
        while (this.solids.length > 0) {
            this.removeSolid(this.solids[0]);
        }
    }
}

// Global exposure
if (typeof window !== 'undefined') {
    window.Cad3DManager = Cad3DManager;
}
