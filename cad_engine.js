/**
 * CADClone — Core 2D CAD Engine
 * High-performance 60 FPS Canvas vector engine with World Coordinate System (Y up),
 * Grip handles, Window/Crossing selection, Undo/Redo, and Civil Engineering Layers.
 */

/**
 * Standard Technical AutoCAD / ABNT Linetype Definitions
 */
const CADLinetypes = {
    'CONTINUOUS': {
        name: 'CONTINUOUS',
        label: 'Contínua (Sólida)',
        pattern: [],
        description: 'Linha cheia contínua para arestas visíveis e contornos ABNT'
    },
    'DASHED': {
        name: 'DASHED',
        label: 'Tracejada (DASHED)',
        pattern: [0.30, 0.15],
        description: 'Linha tracejada uniforme para vigas, projeções e platibandas'
    },
    'HIDDEN': {
        name: 'HIDDEN',
        label: 'Oculta (HIDDEN)',
        pattern: [0.15, 0.10],
        description: 'Linha tracejada curta para arestas invisíveis e instalações embutidas'
    },
    'CENTER': {
        name: 'CENTER',
        label: 'Centro / Traço-Ponto (CENTER)',
        pattern: [0.60, 0.15, 0.08, 0.15],
        description: 'Linha de centro traço-ponto para eixos de pilares, vigas e simetria'
    },
    'PHANTOM': {
        name: 'PHANTOM',
        label: 'Traço-Dois-Pontos (PHANTOM)',
        pattern: [0.60, 0.15, 0.08, 0.15, 0.08, 0.15],
        description: 'Linha traço-dois-pontos para limites de divisa e posições móveis'
    },
    'DOT': {
        name: 'DOT',
        label: 'Pontilhada (DOT)',
        pattern: [0.05, 0.15],
        description: 'Linha pontilhada para demarcações secundárias'
    },
    'DASHDOT': {
        name: 'DASHDOT',
        label: 'Traço-Ponto Alternado (DASHDOT)',
        pattern: [0.30, 0.15, 0.05, 0.15],
        description: 'Linha mista para zoneamentos e limites'
    }
};

class CADEngine {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        
        // World to Screen Transform (AutoCAD: Y points UP in world)
        this.zoom = 50; // pixels per world unit (default: 1 meter = 50px)
        this.originX = canvas.width / 2;
        this.originY = canvas.height / 2;
        
        // Entities & Selection
        this.entities = [];
        this.selectedIds = new Set();
        this.hiddenEntityIds = new Set();
        this._idCounter = 1;
        this.isDirty = false;
        this.lastAutoSaveTime = Date.now();

        // Underlay (PDF / Image Plan Background for tracing & additions)
        this.underlay = null;
        this.isCalibratingUnderlay = false;
        this.underlayCalibrationPts = [];

        // Modes & Toggles
        this.gridEnabled = true;
        this.orthoEnabled = false;
        this.shiftPressed = false;
        this.polarEnabled = true;
        this.dynamicInput = true;
        this.crosshairFullscreen = true;
        this.crosshairSize = 100; // %
        this.pickboxSize = 6; // px half-size
        this.unit = 'm'; // meters
        this.ltscale = 1.0; // Global Linetype Scale Factor (AutoCAD LTSCALE)
        this.defaultDimScale = 1.0; // Global Dimension Scale Factor (AutoCAD DIMSCALE)
        this.defaultDimTextHeight = 0.22; // Default Dimension Text Height in meters (AutoCAD DIMTXT)
        this.snapManager = (typeof OSnap !== 'undefined') ? OSnap : { enabled: true };

        // Standard AutoCAD Civil Engineering Layers (ABNT Standards with Linetypes)
        this.layers = {
            '0': { name: '0', color: '#ffffff', visible: true, locked: false, lineweight: 1, linetype: 'CONTINUOUS' },
            'Alvenaria': { name: 'Alvenaria', color: '#00ffff', visible: true, locked: false, lineweight: 2, linetype: 'CONTINUOUS' },
            'Estrutura': { name: 'Estrutura', color: '#ff0000', visible: true, locked: false, lineweight: 2.5, linetype: 'CONTINUOUS' },
            'Cotas': { name: 'Cotas', color: '#ffff00', visible: true, locked: false, lineweight: 1, linetype: 'CONTINUOUS' },
            'Textos': { name: 'Textos', color: '#00ff00', visible: true, locked: false, lineweight: 1, linetype: 'CONTINUOUS' },
            'Esquadrias': { name: 'Esquadrias', color: '#ff00ff', visible: true, locked: false, lineweight: 1.5, linetype: 'CONTINUOUS' },
            'Projecao': { name: 'Projecao', color: '#00ffc8', visible: true, locked: false, lineweight: 1, linetype: 'DASHED' },
            'Eixos': { name: 'Eixos', color: '#f59e0b', visible: true, locked: false, lineweight: 1, linetype: 'CENTER' },
            'Eletrica': { name: 'Eletrica', color: '#eab308', visible: true, locked: false, lineweight: 1, linetype: 'CONTINUOUS' },
            'Hidraulica': { name: 'Hidraulica', color: '#3b82f6', visible: true, locked: false, lineweight: 1, linetype: 'CONTINUOUS' },
            'Hachura': { name: 'Hachura', color: '#808080', visible: true, locked: false, lineweight: 0.5, linetype: 'CONTINUOUS' },
            'Mobiliario': { name: 'Mobiliario', color: '#f59e0b', visible: true, locked: false, lineweight: 1, linetype: 'CONTINUOUS' },
            'Vegetacao': { name: 'Vegetacao', color: '#22c55e', visible: true, locked: false, lineweight: 1, linetype: 'CONTINUOUS' },
            'Veiculos': { name: 'Veiculos', color: '#38bdf8', visible: true, locked: false, lineweight: 1, linetype: 'CONTINUOUS' },
            'Piso': { name: 'Piso', color: '#94a3b8', visible: true, locked: false, lineweight: 1, linetype: 'CONTINUOUS' }
        };
        this.activeLayer = '0';

        // Mouse & Interaction State
        this.mouseScreen = { x: 0, y: 0 };
        this.mouseWorld = { x: 0, y: 0 };
        this.snappedPoint = null;
        this.activeSnap = null;

        // Selection Box (Blue/Green)
        this.isSelecting = false;
        this.isBoxSelecting = false; // AutoCAD 2-click box selection
        this.selectStart = null;
        this.selectCurrent = null;

        // Direct Drag-to-Move Selection
        this.isDraggingSelection = false;
        this.dragBaseWorld = null;
        this.dragLastWorld = null;
        this.dragMoved = false;

        // Rubberband temporary preview
        this.rubberband = null; // { type: 'LINE', x1, y1, ... }
        this.previewEntities = null; // Array of entities for Block insertion preview

        // Panning
        this.isPanning = false;
        this.panStart = { x: 0, y: 0 };

        // Interactive Grip Editing State (Item 6)
        this.activeGrip = null;
        this.hoveredGrip = null;
        this.gripMode = 'STRETCH'; // 'STRETCH' | 'MOVE' | 'ROTATE' | 'SCALE'
        this.gripBasePt = null;

        // Undo / Redo Stacks
        this.undoStack = [];
        this.redoStack = [];

        // Performance & Animation Frame State
        this._renderRequested = false;
        this._animFrameId = null;
        this._spatialDirty = false;

        this.initCanvasSize();
    }

    nextId() { return 'ent_' + (this._idCounter++); }

    initCanvasSize() {
        const rect = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = rect.width;
        this.canvas.height = rect.height;
        this.originX = this.canvas.width / 2;
        this.originY = this.canvas.height / 2;
    }

    // Coordinate Conversions
    screenToWorld(sx, sy) {
        return {
            x: (sx - this.originX) / this.zoom,
            y: -(sy - this.originY) / this.zoom // Invert Y so positive is UP
        };
    }

    worldToScreen(wx, wy) {
        return {
            x: wx * this.zoom + this.originX,
            y: this.originY - wy * this.zoom
        };
    }

    // Undo / Redo
    saveStateForUndo() {
        this.isDirty = true;
        const snapshot = JSON.stringify({
            entities: this.entities,
            layers: this.layers,
            activeLayer: this.activeLayer,
            ltscale: this.ltscale || 1.0
        });
        this.undoStack.push(snapshot);
        if (this.undoStack.length > 50) this.undoStack.shift();
        this.redoStack = []; // clear redo on new action
    }

    undo() {
        if (this.undoStack.length === 0) return false;
        this.redoStack.push(JSON.stringify({
            entities: this.entities,
            layers: this.layers,
            activeLayer: this.activeLayer,
            ltscale: this.ltscale || 1.0
        }));
        const prev = JSON.parse(this.undoStack.pop());
        this.entities = prev.entities;
        this.layers = prev.layers;
        this.activeLayer = prev.activeLayer;
        if (prev.ltscale !== undefined) this.ltscale = prev.ltscale;
        this.selectedIds.clear();
        this.isDirty = true;
        return true;
    }

    redo() {
        if (this.redoStack.length === 0) return false;
        this.undoStack.push(JSON.stringify({
            entities: this.entities,
            layers: this.layers,
            activeLayer: this.activeLayer,
            ltscale: this.ltscale || 1.0
        }));
        const nextState = JSON.parse(this.redoStack.pop());
        this.entities = nextState.entities;
        this.layers = nextState.layers;
        this.activeLayer = nextState.activeLayer;
        if (nextState.ltscale !== undefined) this.ltscale = nextState.ltscale;
        this.selectedIds.clear();
        this.isDirty = true;
        return true;
    }

    // AutoSave & Drawing Recovery State Serialization
    serializeState() {
        return {
            version: '1.2.0',
            timestamp: Date.now(),
            entityCount: this.entities.length,
            isDirty: this.isDirty,
            zoom: this.zoom,
            originX: this.originX,
            originY: this.originY,
            activeLayer: this.activeLayer,
            ltscale: this.ltscale || 1.0,
            layers: this.layers,
            entities: this.entities,
            underlay: this.serializeUnderlay()
        };
    }

    restoreState(data) {
        if (!data || !Array.isArray(data.entities)) return false;
        this.saveStateForUndo();
        this.entities = data.entities || [];
        if (data.layers) {
            this.layers = Object.assign({}, this.layers, data.layers);
        }
        if (data.activeLayer && this.layers[data.activeLayer]) {
            this.activeLayer = data.activeLayer;
        }
        if (typeof data.ltscale === 'number') this.ltscale = data.ltscale;
        if (typeof data.zoom === 'number') this.zoom = data.zoom;
        if (typeof data.originX === 'number') this.originX = data.originX;
        if (typeof data.originY === 'number') this.originY = data.originY;

        // Restore Underlay if present
        if (data.underlay) {
            this.restoreUnderlay(data.underlay);
        } else {
            this.underlay = null;
        }

        // Recalculate ID counter to avoid ID collision
        let maxId = 0;
        for (const e of this.entities) {
            if (typeof e.id === 'number' && e.id > maxId) {
                maxId = e.id;
            } else if (typeof e.id === 'string') {
                const num = parseInt(e.id.replace(/\D/g, ''), 10);
                if (!isNaN(num) && num > maxId) maxId = num;
            }
            if (typeof e.blockInstanceId === 'string') {
                const num = parseInt(e.blockInstanceId.replace(/\D/g, ''), 10);
                if (!isNaN(num) && num > maxId) maxId = num;
            }
        }
        this._idCounter = Math.max(this._idCounter, maxId + 1);

        this.selectedIds.clear();
        this.isDirty = false;
        this.requestRender();
        return true;
    }

    // Underlay Management (PDF / Image Background Attachment & Tracing)
    setUnderlay(data) {
        if (!data || (!data.image && !data.img)) return;
        const imgObj = data.image || data.img;
        this.underlay = {
            image: imgObj,
            img: imgObj,
            src: data.src || data.dataUrl || null,
            dataUrl: data.dataUrl || data.src || null,
            type: data.type || 'pdf',
            fileName: data.fileName || 'underlay.pdf',
            page: data.page || 1,
            numPages: data.numPages || data.totalPages || 1,
            totalPages: data.totalPages || data.numPages || 1,
            x: typeof data.x === 'number' ? data.x : 0,
            y: typeof data.y === 'number' ? data.y : 0,
            width: typeof data.width === 'number' ? data.width : 20,
            height: typeof data.height === 'number' ? data.height : 15,
            opacity: typeof data.opacity === 'number' ? data.opacity : 0.75,
            visible: data.visible !== undefined ? !!data.visible : true,
            locked: data.locked !== undefined ? !!data.locked : false,
            rotation: typeof data.rotation === 'number' ? data.rotation : 0,
            selected: false
        };
        this.isDirty = true;
        this.render();
    }

    removeUnderlay() {
        this.underlay = null;
        this.isCalibratingUnderlay = false;
        this.underlayCalibrationPts = [];
        this.isDirty = true;
        this.render();
    }

    setUnderlayOpacity(val) {
        if (!this.underlay) return;
        this.underlay.opacity = Math.max(0.05, Math.min(1.0, val));
        this.render();
    }

    toggleUnderlayVisible() {
        if (!this.underlay) return false;
        this.underlay.visible = !this.underlay.visible;
        this.render();
        return this.underlay.visible;
    }

    toggleUnderlayLocked() {
        if (!this.underlay) return false;
        this.underlay.locked = !this.underlay.locked;
        return this.underlay.locked;
    }

    calibrateUnderlayScale(pt1, pt2, realDist) {
        if (!this.underlay || !pt1 || !pt2 || !realDist || realDist <= 0) return null;
        const dx = pt2.x - pt1.x;
        const dy = pt2.y - pt1.y;
        const measuredDist = Math.hypot(dx, dy);
        if (measuredDist <= 0.0001) return null;

        const ratio = realDist / measuredDist;
        const u = this.underlay;

        u.width *= ratio;
        u.height *= ratio;
        u.x = pt1.x - (pt1.x - u.x) * ratio;
        u.y = pt1.y - (pt1.y - u.y) * ratio;

        this.isCalibratingUnderlay = false;
        this.underlayCalibrationPts = [];
        this.isDirty = true;
        this.render();
        return { ratio, measuredDist, realDist };
    }

    rotateUnderlay(deg = 90, isRelative = true) {
        if (!this.underlay) return 0;
        this.saveStateForUndo();
        if (isRelative) {
            this.underlay.rotation = ((this.underlay.rotation || 0) + deg) % 360;
            if (this.underlay.rotation < 0) this.underlay.rotation += 360;
        } else {
            this.underlay.rotation = deg % 360;
        }
        this.isDirty = true;
        this.render();
        return this.underlay.rotation;
    }

    scaleUnderlay(factor = 1.1, centerPt = null) {
        if (!this.underlay || factor <= 0) return null;
        this.saveStateForUndo();
        const u = this.underlay;
        const cx = centerPt ? centerPt.x : (u.x + u.width / 2);
        const cy = centerPt ? centerPt.y : (u.y + u.height / 2);

        const newW = u.width * factor;
        const newH = u.height * factor;

        u.x = cx - (cx - u.x) * factor;
        u.y = cy - (cy - u.y) * factor;
        u.width = newW;
        u.height = newH;

        this.isDirty = true;
        this.render();
        return { width: u.width, height: u.height };
    }

    moveUnderlay(dx, dy) {
        if (!this.underlay) return;
        this.saveStateForUndo();
        this.underlay.x += dx;
        this.underlay.y += dy;
        this.isDirty = true;
        this.render();
    }

    setUnderlayPosition(newX, newY) {
        if (!this.underlay) return;
        this.saveStateForUndo();
        this.underlay.x = newX;
        this.underlay.y = newY;
        this.isDirty = true;
        this.render();
    }

    isPointInsideUnderlay(worldX, worldY) {
        if (!this.underlay || !this.underlay.visible) return false;
        const u = this.underlay;
        const w = u.width || 10;
        const h = u.height || 10;
        const cx = u.x + w / 2;
        const cy = u.y + h / 2;

        const rotDeg = u.rotation || 0;
        const rad = rotDeg * Math.PI / 180;

        const dx = worldX - cx;
        const dy = worldY - cy;

        const cos = Math.cos(rad);
        const sin = Math.sin(rad);
        const localX = dx * cos + dy * sin;
        const localY = -dx * sin + dy * cos;

        return Math.abs(localX) <= (w / 2) && Math.abs(localY) <= (h / 2);
    }

    getUnderlayGrips() {
        if (!this.underlay || !this.underlay.visible || !this.underlay.selected) return [];
        const u = this.underlay;
        const w = u.width || 10;
        const h = u.height || 10;
        const cx = u.x + w / 2;
        const cy = u.y + h / 2;
        const hw = w / 2;
        const hh = h / 2;

        const rotDeg = u.rotation || 0;
        const rad = rotDeg * Math.PI / 180;
        const cos = Math.cos(rad);
        const sin = Math.sin(rad);

        const toWorld = (lx, ly) => ({
            x: cx + lx * cos - ly * sin,
            y: cy + lx * sin + ly * cos
        });

        // 4 corners: c0=BL, c1=BR, c2=TR, c3=TL
        const p0 = toWorld(-hw, -hh); // BL
        const p1 = toWorld(hw, -hh);  // BR
        const p2 = toWorld(hw, hh);   // TR
        const p3 = toWorld(-hw, hh);  // TL

        // Center
        const pCenter = { x: cx, y: cy };

        // Rotation handle (25px on screen above top-center)
        const stemDistWorld = Math.max(0.4, 25 / (this.zoom || 50));
        const pRot = toWorld(0, hh + stemDistWorld);
        const pTopMid = toWorld(0, hh);

        return [
            { id: 'underlay_c0', isUnderlay: true, role: 'underlay_corner', cornerIdx: 0, x: p0.x, y: p0.y, anchor: p2 },
            { id: 'underlay_c1', isUnderlay: true, role: 'underlay_corner', cornerIdx: 1, x: p1.x, y: p1.y, anchor: p3 },
            { id: 'underlay_c2', isUnderlay: true, role: 'underlay_corner', cornerIdx: 2, x: p2.x, y: p2.y, anchor: p0 },
            { id: 'underlay_c3', isUnderlay: true, role: 'underlay_corner', cornerIdx: 3, x: p3.x, y: p3.y, anchor: p1 },
            { id: 'underlay_center', isUnderlay: true, role: 'underlay_center', x: pCenter.x, y: pCenter.y },
            { id: 'underlay_rot', isUnderlay: true, role: 'underlay_rot', x: pRot.x, y: pRot.y, stemStart: pTopMid }
        ];
    }

    serializeUnderlay() {
        if (!this.underlay) return null;
        const u = this.underlay;
        let src = u.src;
        if (!src && u.image) {
            try {
                if (typeof HTMLCanvasElement !== 'undefined' && u.image instanceof HTMLCanvasElement) {
                    src = u.image.toDataURL('image/jpeg', 0.85);
                } else if (u.image.src) {
                    src = u.image.src;
                }
            } catch (e) {}
        }
        return {
            fileName: u.fileName,
            page: u.page,
            numPages: u.numPages,
            x: u.x,
            y: u.y,
            width: u.width,
            height: u.height,
            opacity: u.opacity,
            visible: u.visible,
            locked: u.locked,
            rotation: u.rotation,
            src: src
        };
    }

    restoreUnderlay(uData) {
        if (!uData) {
            this.underlay = null;
            return;
        }
        this.underlay = {
            image: null,
            src: uData.src || null,
            fileName: uData.fileName || 'underlay.pdf',
            page: uData.page || 1,
            numPages: uData.numPages || 1,
            x: uData.x || 0,
            y: uData.y || 0,
            width: uData.width || 20,
            height: uData.height || 15,
            opacity: uData.opacity !== undefined ? uData.opacity : 0.75,
            visible: uData.visible !== undefined ? !!uData.visible : true,
            locked: uData.locked !== undefined ? !!uData.locked : false,
            rotation: uData.rotation || 0,
            selected: false
        };
        if (uData.src && typeof Image !== 'undefined') {
            const img = new Image();
            img.onload = () => {
                if (this.underlay) {
                    this.underlay.image = img;
                    this.render();
                }
            };
            img.src = uData.src;
        }
    }

    // Layer Management
    addLayer(name, color = '#ffffff', linetype = 'CONTINUOUS', lineweight = 1) {
        if (!this.layers[name]) {
            this.layers[name] = { name, color, visible: true, locked: false, lineweight, linetype };
        }
    }

    setLayerLinetype(name, linetype) {
        if (this.layers[name]) {
            this.saveStateForUndo();
            this.layers[name].linetype = (linetype || 'CONTINUOUS').toUpperCase();
            this.render();
            return true;
        }
        return false;
    }

    // View Navigation
    zoomAt(screenX, screenY, factor) {
        const mouseBefore = this.screenToWorld(screenX, screenY);
        this.zoom = Math.max(1e-7, Math.min(1e7, this.zoom * factor));
        const mouseAfter = this.screenToWorld(screenX, screenY);
        
        // Keep point under cursor stable
        this.originX += (mouseAfter.x - mouseBefore.x) * this.zoom;
        this.originY -= (mouseAfter.y - mouseBefore.y) * this.zoom;
        this.requestRender();
    }

    clear() {
        this.saveStateForUndo();
        this.entities = [];
        this.selectedIds.clear();
        this.underlay = null;
        this.isCalibratingUnderlay = false;
        this.underlayCalibrationPts = [];
        this.requestRender();
    }

    /**
     * Load entities parsed from DXF (or full DXF object) into the CAD engine
     * @param {Array|Object} dxfOrEntities Array of parsed DXF entities OR parsed DXF object { entities, tables, blocks }
     * @param {boolean} clearExisting Whether to clear existing entities before loading (default: true)
     * @returns {number} Number of loaded entities
     */
    loadEntitiesFromDxf(dxfOrEntities, clearExisting = true) {
        if (!dxfOrEntities) return 0;
        if (clearExisting) {
            this.clear();
        } else {
            this.saveStateForUndo();
        }

        const prevCount = this.entities.length;
        if (typeof DxfIO !== 'undefined' && typeof DxfIO._loadParsedEntities === 'function') {
            const dxfObj = Array.isArray(dxfOrEntities) ? { entities: dxfOrEntities } : dxfOrEntities;
            DxfIO._loadParsedEntities(this, dxfObj);
        } else {
            const entities = Array.isArray(dxfOrEntities) ? dxfOrEntities : (dxfOrEntities.entities || []);
            for (const e of entities) {
                if (e.type === 'LINE' && e.vertices && e.vertices.length >= 2) {
                    this.entities.push({
                        id: this.nextId(),
                        type: 'LINE',
                        x1: e.vertices[0].x,
                        y1: e.vertices[0].y,
                        x2: e.vertices[1].x,
                        y2: e.vertices[1].y,
                        layer: e.layer || '0',
                        color: null
                    });
                } else if (e.type === 'CIRCLE' && e.center && e.radius > 0) {
                    this.entities.push({
                        id: this.nextId(),
                        type: 'CIRCLE',
                        cx: e.center.x,
                        cy: e.center.y,
                        r: e.radius,
                        layer: e.layer || '0',
                        color: null
                    });
                } else if (e.type === 'ARC' && e.center && e.radius > 0) {
                    this.entities.push({
                        id: this.nextId(),
                        type: 'ARC',
                        cx: e.center.x,
                        cy: e.center.y,
                        r: e.radius,
                        startAngle: e.startAngle || 0,
                        endAngle: e.endAngle || Math.PI,
                        layer: e.layer || '0',
                        color: null
                    });
                } else if ((e.type === 'LWPOLYLINE' || e.type === 'POLYLINE') && e.vertices && e.vertices.length >= 2) {
                    this.entities.push({
                        id: this.nextId(),
                        type: 'POLYLINE',
                        points: e.vertices.map(v => ({ x: v.x, y: v.y })),
                        closed: !!(e.shape || e.closed),
                        layer: e.layer || '0',
                        color: null
                    });
                } else if ((e.type === 'TEXT' || e.type === 'MTEXT') && (e.text || e.string)) {
                    this.entities.push({
                        id: this.nextId(),
                        type: 'TEXT',
                        x: e.startPoint ? e.startPoint.x : (e.position ? e.position.x : 0),
                        y: e.startPoint ? e.startPoint.y : (e.position ? e.position.y : 0),
                        text: e.text || e.string || '',
                        height: e.textHeight || 0.25,
                        rotation: e.rotation ? (e.rotation * Math.PI / 180) : 0,
                        layer: e.layer || '0',
                        color: null
                    });
                }
            }
        }

        // Spatial bounding boxes & rendering refresh
        for (let i = 0; i < this.entities.length; i++) {
            if (!this.entities[i]._bb) this.getEntityBoundingBox(this.entities[i]);
        }

        if (typeof OSnap !== 'undefined' && OSnap.invalidateGrid) {
            OSnap.invalidateGrid();
        }

        this.zoomExtents();
        this.requestRender();
        this.isDirty = false;
        return this.entities.length - prevCount;
    }

    /**
     * Import DXF text content directly into the CAD engine
     * @param {string} dxfString DXF file content
     * @param {boolean} clearExisting Whether to clear existing drawing (default: true)
     * @returns {number} Number of loaded entities
     */
    loadDxf(dxfString, clearExisting = true) {
        if (!dxfString || typeof dxfString !== 'string') return 0;
        if (clearExisting) this.clear();
        const prevCount = this.entities.length;
        if (typeof DxfIO !== 'undefined' && typeof DxfIO.importDXF === 'function') {
            DxfIO.importDXF(this, dxfString);
        } else if (typeof DxfParser !== 'undefined') {
            try {
                const parser = new DxfParser();
                const parsed = parser.parseSync(dxfString);
                if (parsed && parsed.entities) {
                    this.loadEntitiesFromDxf(parsed, false);
                }
            } catch (err) {
                console.warn('CADEngine: DxfParser failed in loadDxf:', err);
            }
        }
        for (let i = 0; i < this.entities.length; i++) {
            if (!this.entities[i]._bb) this.getEntityBoundingBox(this.entities[i]);
        }
        if (typeof OSnap !== 'undefined' && OSnap.invalidateGrid) {
            OSnap.invalidateGrid();
        }
        this.zoomExtents();
        this.requestRender();
        this.isDirty = false;
        return this.entities.length - prevCount;
    }

    zoomExtents() {
        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
        let validCount = 0;

        // Include underlay in framing if present and visible
        if (this.underlay && this.underlay.visible) {
            const u = this.underlay;
            minX = Math.min(minX, u.x);
            minY = Math.min(minY, u.y);
            maxX = Math.max(maxX, u.x + (u.width || 10));
            maxY = Math.max(maxY, u.y + (u.height || 10));
            validCount++;
        }

        if (this.entities.length === 0 && validCount === 0) {
            this.zoom = 50;
            this.originX = this.canvas.width / 2;
            this.originY = this.canvas.height / 2;
            this.render();
            return;
        }

        for (const e of this.entities) {
            const bb = this.getEntityBoundingBox(e);
            if (!bb || !isFinite(bb.minX) || !isFinite(bb.maxX)) continue;
            // Ignore crazy runaway entities (e.g. radius > 500k or coords > 5M)
            const w = bb.maxX - bb.minX;
            const h = bb.maxY - bb.minY;
            if (w > 1000000 || h > 1000000 || Math.abs(bb.minX) > 5000000 || Math.abs(bb.maxX) > 5000000) {
                continue;
            }
            minX = Math.min(minX, bb.minX);
            minY = Math.min(minY, bb.minY);
            maxX = Math.max(maxX, bb.maxX);
            maxY = Math.max(maxY, bb.maxY);
            validCount++;
        }

        // If all were filtered, fallback to unfiltered
        if (!isFinite(minX) || validCount === 0) {
            for (const e of this.entities) {
                const bb = this.getEntityBoundingBox(e);
                if (!bb || !isFinite(bb.minX)) continue;
                minX = Math.min(minX, bb.minX);
                minY = Math.min(minY, bb.minY);
                maxX = Math.max(maxX, bb.maxX);
                maxY = Math.max(maxY, bb.maxY);
            }
        }

        if (!isFinite(minX)) return;

        const w = maxX - minX || 10;
        const h = maxY - minY || 10;
        const pad = 60; // screen px padding
        const zoomX = (this.canvas.width - pad * 2) / w;
        const zoomY = (this.canvas.height - pad * 2) / h;
        
        this.zoom = Math.min(zoomX, zoomY, 500);
        const midX = (minX + maxX) / 2;
        const midY = (minY + maxY) / 2;

        this.originX = this.canvas.width / 2 - midX * this.zoom;
        this.originY = this.canvas.height / 2 + midY * this.zoom;
        this.render();
    }

    getEntityBoundingBox(e) {
        if (e._bb) return e._bb;
        let bb = null;
        if (e.type === 'LINE') {
            bb = {
                minX: Math.min(e.x1, e.x2),
                minY: Math.min(e.y1, e.y2),
                maxX: Math.max(e.x1, e.x2),
                maxY: Math.max(e.y1, e.y2)
            };
        } else if (e.type === 'DIMENSION') {
            const dx = e.x2 - e.x1;
            const dy = e.y2 - e.y1;
            const len = Math.hypot(dx, dy);
            const off = (typeof e.offset === 'number') ? e.offset : 0;
            let p1x = e.x1, p1y = e.y1, p2x = e.x2, p2y = e.y2;
            if (len > 1e-6 && off !== 0) {
                const nx = -dy / len;
                const ny = dx / len;
                p1x = e.x1 + nx * off;
                p1y = e.y1 + ny * off;
                p2x = e.x2 + nx * off;
                p2y = e.y2 + ny * off;
            }
            bb = {
                minX: Math.min(e.x1, e.x2, p1x, p2x),
                minY: Math.min(e.y1, e.y2, p1y, p2y),
                maxX: Math.max(e.x1, e.x2, p1x, p2x),
                maxY: Math.max(e.y1, e.y2, p1y, p2y)
            };
        } else if (e.type === 'CIRCLE' || e.type === 'ARC') {
            bb = {
                minX: e.cx - e.r,
                minY: e.cy - e.r,
                maxX: e.cx + e.r,
                maxY: e.cy + e.r
            };
        } else if (e.type === 'RECTANGLE') {
            bb = {
                minX: Math.min(e.x1, e.x2),
                minY: Math.min(e.y1, e.y2),
                maxX: Math.max(e.x1, e.x2),
                maxY: Math.max(e.y1, e.y2)
            };
        } else if (e.type === 'POLYLINE' && e.points && e.points.length > 0) {
            let minX = e.points[0].x, maxX = minX;
            let minY = e.points[0].y, maxY = minY;
            for (let i = 1; i < e.points.length; i++) {
                const pt = e.points[i];
                if (pt.x < minX) minX = pt.x;
                if (pt.x > maxX) maxX = pt.x;
                if (pt.y < minY) minY = pt.y;
                if (pt.y > maxY) maxY = pt.y;
            }
            bb = { minX, minY, maxX, maxY };
        } else if (e.type === 'TEXT') {
            bb = {
                minX: e.x,
                minY: e.y,
                maxX: e.x + (e.text.length * (e.height || 0.25) * 0.6),
                maxY: e.y + (e.height || 0.25)
            };
        }
        e._bb = bb;
        return bb;
    }

    // Entity Creation Helpers
    addLine(x1, y1, x2, y2, layer = this.activeLayer) {
        this.saveStateForUndo();
        const ent = { id: this.nextId(), type: 'LINE', x1, y1, x2, y2, layer, color: null };
        this.entities.push(ent);
        return ent;
    }

    addCircle(cx, cy, r, layer = this.activeLayer) {
        this.saveStateForUndo();
        const ent = { id: this.nextId(), type: 'CIRCLE', cx, cy, r, layer, color: null };
        this.entities.push(ent);
        return ent;
    }

    addArc(cx, cy, r, startAngle, endAngle, layer = this.activeLayer) {
        this.saveStateForUndo();
        const ent = { id: this.nextId(), type: 'ARC', cx, cy, r, startAngle, endAngle, layer, color: null };
        this.entities.push(ent);
        return ent;
    }

    addRectangle(x1, y1, x2, y2, layer = this.activeLayer) {
        this.saveStateForUndo();
        const ent = {
            id: this.nextId(),
            type: 'POLYLINE',
            points: [
                { x: x1, y: y1 },
                { x: x2, y: y1 },
                { x: x2, y: y2 },
                { x: x1, y: y2 }
            ],
            closed: true,
            layer,
            color: null
        };
        this.entities.push(ent);
        return ent;
    }

    addPolyline(points, closed = false, layer = this.activeLayer) {
        if (!points || points.length < 2) return null;
        this.saveStateForUndo();
        const ent = { id: this.nextId(), type: 'POLYLINE', points, closed, layer, color: null };
        this.entities.push(ent);
        return ent;
    }

    addText(x, y, text, height = 0.3, layer = this.activeLayer) {
        this.saveStateForUndo();
        const ent = { id: this.nextId(), type: 'TEXT', x, y, text, height, layer, color: null };
        this.entities.push(ent);
        return ent;
    }

    addDimension(x1, y1, x2, y2, offset = 0.3, layer = 'Cotas', textScale = null, textHeight = null) {
        this.saveStateForUndo();
        const dist = Math.hypot(x2 - x1, y2 - y1);
        const label = dist.toFixed(2) + 'm';
        const finalScale = (typeof textScale === 'number' && textScale > 0) ? textScale : (this.defaultDimScale || 1.0);
        const finalHeight = (typeof textHeight === 'number' && textHeight > 0) ? textHeight : (this.defaultDimTextHeight || (0.22 * finalScale));
        const ent = {
            id: this.nextId(),
            type: 'DIMENSION',
            x1, y1, x2, y2,
            offset,
            text: label,
            textScale: finalScale,
            textHeight: finalHeight,
            layer,
            color: null
        };
        this.entities.push(ent);
        return ent;
    }

    // Entity Manipulation (AutoCAD Modify commands)
    deleteSelected() {
        if (this.selectedIds.size === 0) return 0;
        this.saveStateForUndo();
        const blockInstances = new Set();
        for (const id of this.selectedIds) {
            const ent = this.getEntity(id);
            if (ent && ent.blockInstanceId) blockInstances.add(ent.blockInstanceId);
        }
        let count = 0;
        this.entities = this.entities.filter(e => {
            const toDelete = this.selectedIds.has(e.id) || (e.blockInstanceId && blockInstances.has(e.blockInstanceId));
            if (toDelete) count++;
            return !toDelete;
        });
        this.selectedIds.clear();
        this._spatialDirty = true;
        return count;
    }

    isolateSelected() {
        if (this.selectedIds.size === 0) return 0;
        this.saveStateForUndo();
        let isolatedCount = 0;
        for (const e of this.entities) {
            if (!this.selectedIds.has(e.id)) {
                this.hiddenEntityIds.add(e.id);
            } else {
                isolatedCount++;
            }
        }
        this.selectedIds.clear();
        this.render();
        return isolatedCount;
    }

    hideSelected() {
        if (this.selectedIds.size === 0) return 0;
        this.saveStateForUndo();
        const count = this.selectedIds.size;
        for (const id of this.selectedIds) {
            this.hiddenEntityIds.add(id);
        }
        this.selectedIds.clear();
        this.render();
        return count;
    }

    unisolateAll() {
        if (this.hiddenEntityIds.size === 0) return 0;
        this.saveStateForUndo();
        const count = this.hiddenEntityIds.size;
        this.hiddenEntityIds.clear();
        this.render();
        return count;
    }

    getEntity(id) {
        return this.entities.find(e => e.id === id) || null;
    }

    updateEntityProperty(id, prop, value) {
        const ent = this.getEntity(id);
        if (!ent) return false;
        this.saveStateForUndo();
        ent[prop] = value;
        if (ent.type === 'DIMENSION') {
            if (prop === 'textScale') {
                ent.textHeight = Number((0.22 * value).toFixed(3));
            } else if (prop === 'textHeight') {
                ent.textScale = Number((value / 0.22).toFixed(2));
            }
        }
        delete ent._bb;
        this._spatialDirty = true;
        this.render();
        return true;
    }

    setEntityLayer(id, layerName) {
        const ent = this.getEntity(id);
        if (!ent) return false;
        this.saveStateForUndo();
        ent.layer = layerName;
        this.render();
        return true;
    }

    setEntityColor(id, color) {
        const ent = this.getEntity(id);
        if (!ent) return false;
        this.saveStateForUndo();
        ent.color = color;
        this.render();
        return true;
    }

    setSelectedEntitiesLayer(layerName) {
        if (this.selectedIds.size === 0) return 0;
        this.saveStateForUndo();
        let count = 0;
        for (const e of this.entities) {
            if (this.selectedIds.has(e.id)) {
                e.layer = layerName;
                count++;
            }
        }
        this.render();
        return count;
    }

    setSelectedEntitiesColor(color) {
        if (this.selectedIds.size === 0) return 0;
        this.saveStateForUndo();
        let count = 0;
        for (const e of this.entities) {
            if (this.selectedIds.has(e.id)) {
                e.color = color;
                count++;
            }
        }
        this.render();
        return count;
    }

    setEntityLinetype(id, linetype) {
        const ent = this.getEntity(id);
        if (!ent) return false;
        this.saveStateForUndo();
        if (!linetype || linetype === 'ByLayer') {
            delete ent.linetype;
        } else {
            ent.linetype = linetype.toUpperCase();
        }
        this.render();
        return true;
    }

    setSelectedEntitiesLinetype(linetype) {
        if (this.selectedIds.size === 0) return 0;
        this.saveStateForUndo();
        const lt = (!linetype || linetype === 'ByLayer') ? null : linetype.toUpperCase();
        let count = 0;
        for (const e of this.entities) {
            if (this.selectedIds.has(e.id)) {
                if (lt) {
                    e.linetype = lt;
                } else {
                    delete e.linetype;
                }
                count++;
            }
        }
        this.render();
        return count;
    }

    setLinetypeScale(scale) {
        const val = parseFloat(scale);
        if (isNaN(val) || val <= 0) return false;
        this.saveStateForUndo();
        this.ltscale = val;
        this.render();
        return true;
    }

    setDimScale(scale) {
        const val = parseFloat(scale);
        if (isNaN(val) || val <= 0) return false;
        this.saveStateForUndo();
        this.defaultDimScale = val;
        this.defaultDimTextHeight = Number((0.22 * val).toFixed(3));
        let updated = 0;
        if (this.selectedIds && this.selectedIds.size > 0) {
            for (const id of this.selectedIds) {
                const ent = this.getEntity(id);
                if (ent && ent.type === 'DIMENSION') {
                    ent.textScale = val;
                    ent.textHeight = this.defaultDimTextHeight;
                    delete ent._bb;
                    updated++;
                }
            }
        }
        if (updated > 0) this._spatialDirty = true;
        this.render();
        return true;
    }

    setDimTextHeight(height) {
        const val = parseFloat(height);
        if (isNaN(val) || val <= 0) return false;
        this.saveStateForUndo();
        this.defaultDimTextHeight = val;
        this.defaultDimScale = Number((val / 0.22).toFixed(2));
        let updated = 0;
        if (this.selectedIds && this.selectedIds.size > 0) {
            for (const id of this.selectedIds) {
                const ent = this.getEntity(id);
                if (ent && ent.type === 'DIMENSION') {
                    ent.textHeight = val;
                    ent.textScale = this.defaultDimScale;
                    delete ent._bb;
                    updated++;
                }
            }
        }
        if (updated > 0) this._spatialDirty = true;
        this.render();
        return true;
    }

    getEffectiveLinetype(e) {
        if (!e) return 'CONTINUOUS';
        if (e.linetype && e.linetype !== 'ByLayer') {
            return e.linetype.toUpperCase();
        }
        const layer = this.layers[e.layer || '0'];
        if (layer && layer.linetype) {
            return layer.linetype.toUpperCase();
        }
        return 'CONTINUOUS';
    }

    getLineDashPattern(linetype) {
        const key = (linetype || 'CONTINUOUS').toUpperCase();
        const def = (typeof CADLinetypes !== 'undefined') ? CADLinetypes[key] : ((CADEngine.Linetypes || {})[key]);
        if (!def || !def.pattern || def.pattern.length === 0) return [];
        const factor = this.zoom * (this.ltscale || 1.0);
        return def.pattern.map(p => Math.max(1, p * factor));
    }

    translateSelected(dx, dy) {
        if (this.selectedIds.size === 0) return;

        // Ensure all entities belonging to any selected group/block are included
        const blockInstances = new Set();
        for (const id of this.selectedIds) {
            const ent = this.getEntity(id);
            if (ent && ent.blockInstanceId) blockInstances.add(ent.blockInstanceId);
        }

        for (const e of this.entities) {
            if (this.selectedIds.has(e.id) || (e.blockInstanceId && blockInstances.has(e.blockInstanceId))) {
                if (e.type === 'LINE' || e.type === 'DIMENSION' || e.type === 'RECTANGLE') {
                    e.x1 += dx; e.y1 += dy; e.x2 += dx; e.y2 += dy;
                } else if (e.type === 'CIRCLE' || e.type === 'ARC') {
                    e.cx += dx; e.cy += dy;
                } else if (e.type === 'POLYLINE' && e.points) {
                    for (let i = 0; i < e.points.length; i++) {
                        e.points[i].x += dx;
                        e.points[i].y += dy;
                    }
                } else if (e.type === 'TEXT') {
                    e.x += dx; e.y += dy;
                }
                if (e._bb) {
                    e._bb.minX += dx;
                    e._bb.maxX += dx;
                    e._bb.minY += dy;
                    e._bb.maxY += dy;
                }
            }
        }
        this._spatialDirty = true;
    }

    moveSelected(dx, dy) {
        if (this.selectedIds.size === 0) return;
        this.saveStateForUndo();
        this.translateSelected(dx, dy);
    }

    copySelected(dx, dy) {
        if (this.selectedIds.size === 0) return;
        this.saveStateForUndo();
        const newEntities = [];
        const newSelection = new Set();
        const blockIdMap = new Map();

        // Ensure all entities belonging to any selected group/block are included
        const blockInstances = new Set();
        for (const id of this.selectedIds) {
            const ent = this.getEntity(id);
            if (ent && ent.blockInstanceId) blockInstances.add(ent.blockInstanceId);
        }

        for (const e of this.entities) {
            if (this.selectedIds.has(e.id) || (e.blockInstanceId && blockInstances.has(e.blockInstanceId))) {
                const clone = JSON.parse(JSON.stringify(e));
                clone.id = this.nextId();
                if (clone.blockInstanceId) {
                    if (!blockIdMap.has(clone.blockInstanceId)) {
                        blockIdMap.set(clone.blockInstanceId, 'blk_' + (this._idCounter++));
                    }
                    clone.blockInstanceId = blockIdMap.get(clone.blockInstanceId);
                }
                if (clone.type === 'LINE' || clone.type === 'DIMENSION' || clone.type === 'RECTANGLE') {
                    clone.x1 += dx; clone.y1 += dy; clone.x2 += dx; clone.y2 += dy;
                } else if (clone.type === 'CIRCLE' || clone.type === 'ARC') {
                    clone.cx += dx; clone.cy += dy;
                } else if (clone.type === 'POLYLINE' && clone.points) {
                    clone.points.forEach(p => { p.x += dx; p.y += dy; });
                } else if (clone.type === 'TEXT') {
                    clone.x += dx; clone.y += dy;
                }
                delete clone._bb;
                newEntities.push(clone);
                newSelection.add(clone.id);
            }
        }

        this.entities.push(...newEntities);
        this.selectedIds = newSelection;
    }

    rotateSelected(cx, cy, angleRad) {
        if (this.selectedIds.size === 0) return;
        this.saveStateForUndo();
        const cos = Math.cos(angleRad);
        const sin = Math.sin(angleRad);
        const rotPt = (x, y) => ({
            x: cx + (x - cx) * cos - (y - cy) * sin,
            y: cy + (x - cx) * sin + (y - cy) * cos
        });

        // Ensure all entities belonging to any selected group/block are included
        const blockInstances = new Set();
        for (const id of this.selectedIds) {
            const ent = this.getEntity(id);
            if (ent && ent.blockInstanceId) blockInstances.add(ent.blockInstanceId);
        }

        for (const e of this.entities) {
            if (this.selectedIds.has(e.id) || (e.blockInstanceId && blockInstances.has(e.blockInstanceId))) {
                if (e.type === 'LINE' || e.type === 'DIMENSION') {
                    const p1 = rotPt(e.x1, e.y1);
                    const p2 = rotPt(e.x2, e.y2);
                    e.x1 = p1.x; e.y1 = p1.y; e.x2 = p2.x; e.y2 = p2.y;
                } else if (e.type === 'RECTANGLE') {
                    const p1 = rotPt(e.x1, e.y1);
                    const p2 = rotPt(e.x2, e.y1);
                    const p3 = rotPt(e.x2, e.y2);
                    const p4 = rotPt(e.x1, e.y2);
                    e.type = 'POLYLINE';
                    e.points = [p1, p2, p3, p4];
                    e.closed = true;
                } else if (e.type === 'CIRCLE') {
                    const c = rotPt(e.cx, e.cy);
                    e.cx = c.x; e.cy = c.y;
                } else if (e.type === 'ARC') {
                    const c = rotPt(e.cx, e.cy);
                    e.cx = c.x; e.cy = c.y;
                    e.startAngle += angleRad;
                    e.endAngle += angleRad;
                } else if (e.type === 'POLYLINE' && e.points) {
                    e.points = e.points.map(p => rotPt(p.x, p.y));
                } else if (e.type === 'TEXT') {
                    const p = rotPt(e.x, e.y);
                    e.x = p.x; e.y = p.y;
                    e.rotation = (e.rotation || 0) + angleRad;
                }
                delete e._bb;
            }
        }
    }

    scaleSelected(cx, cy, factor) {
        if (this.selectedIds.size === 0 || isNaN(factor) || factor <= 0) return;
        this.saveStateForUndo();
        const scalePt = (x, y) => ({
            x: cx + (x - cx) * factor,
            y: cy + (y - cy) * factor
        });

        // Ensure all entities belonging to any selected group/block are included
        const blockInstances = new Set();
        for (const id of this.selectedIds) {
            const ent = this.getEntity(id);
            if (ent && ent.blockInstanceId) blockInstances.add(ent.blockInstanceId);
        }

        for (const e of this.entities) {
            if (this.selectedIds.has(e.id) || (e.blockInstanceId && blockInstances.has(e.blockInstanceId))) {
                if (e.type === 'LINE' || e.type === 'DIMENSION' || e.type === 'RECTANGLE') {
                    const p1 = scalePt(e.x1, e.y1);
                    const p2 = scalePt(e.x2, e.y2);
                    e.x1 = p1.x; e.y1 = p1.y; e.x2 = p2.x; e.y2 = p2.y;
                    if (e.type === 'DIMENSION' && typeof e.offset === 'number') {
                        e.offset *= factor;
                    }
                } else if (e.type === 'CIRCLE') {
                    const c = scalePt(e.cx, e.cy);
                    e.cx = c.x; e.cy = c.y;
                    e.r *= factor;
                } else if (e.type === 'ARC') {
                    const c = scalePt(e.cx, e.cy);
                    e.cx = c.x; e.cy = c.y;
                    e.r *= factor;
                } else if (e.type === 'POLYLINE' && e.points) {
                    e.points = e.points.map(p => scalePt(p.x, p.y));
                } else if (e.type === 'TEXT') {
                    const p = scalePt(e.x, e.y);
                    e.x = p.x; e.y = p.y;
                    e.height = (e.height || 0.3) * factor;
                }
                delete e._bb;
            }
        }
    }

    mirrorSelected(p1, p2, eraseSource = false) {
        if (this.selectedIds.size === 0) return;
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        const len = Math.hypot(dx, dy);
        if (len < 1e-9) return;

        this.saveStateForUndo();
        const ux = dx / len;
        const uy = dy / len;
        const axisAngle = Math.atan2(uy, ux);

        const reflectPt = (px, py) => {
            const vx = px - p1.x;
            const vy = py - p1.y;
            const proj = vx * ux + vy * uy;
            const rx = 2 * proj * ux - vx;
            const ry = 2 * proj * uy - vy;
            return { x: p1.x + rx, y: p1.y + ry };
        };

        const transformEntity = (ent) => {
            delete ent._bb;
            if (ent.type === 'LINE' || ent.type === 'DIMENSION') {
                const rp1 = reflectPt(ent.x1, ent.y1);
                const rp2 = reflectPt(ent.x2, ent.y2);
                ent.x1 = rp1.x; ent.y1 = rp1.y; ent.x2 = rp2.x; ent.y2 = rp2.y;
            } else if (ent.type === 'RECTANGLE') {
                const rp1 = reflectPt(ent.x1, ent.y1);
                const rp2 = reflectPt(ent.x2, ent.y2);
                ent.x1 = rp1.x; ent.y1 = rp1.y; ent.x2 = rp2.x; ent.y2 = rp2.y;
            } else if (ent.type === 'CIRCLE') {
                const c = reflectPt(ent.cx, ent.cy);
                ent.cx = c.x; ent.cy = c.y;
            } else if (ent.type === 'ARC') {
                const c = reflectPt(ent.cx, ent.cy);
                ent.cx = c.x; ent.cy = c.y;
                const newStart = 2 * axisAngle - ent.endAngle;
                const newEnd = 2 * axisAngle - ent.startAngle;
                ent.startAngle = newStart;
                ent.endAngle = newEnd;
            } else if (ent.type === 'POLYLINE' && ent.points) {
                ent.points = ent.points.map(p => reflectPt(p.x, p.y));
            } else if (ent.type === 'TEXT') {
                const p = reflectPt(ent.x, ent.y);
                ent.x = p.x; ent.y = p.y;
            }
        };

        const blockInstances = new Set();
        for (const id of this.selectedIds) {
            const ent = this.getEntity(id);
            if (ent && ent.blockInstanceId) blockInstances.add(ent.blockInstanceId);
        }

        if (eraseSource) {
            for (const e of this.entities) {
                if (this.selectedIds.has(e.id) || (e.blockInstanceId && blockInstances.has(e.blockInstanceId))) {
                    transformEntity(e);
                }
            }
        } else {
            const newEntities = [];
            const newSelection = new Set();
            const blockIdMap = new Map();

            for (const e of this.entities) {
                if (this.selectedIds.has(e.id) || (e.blockInstanceId && blockInstances.has(e.blockInstanceId))) {
                    const clone = JSON.parse(JSON.stringify(e));
                    clone.id = this.nextId();
                    if (clone.blockInstanceId) {
                        if (!blockIdMap.has(clone.blockInstanceId)) {
                            blockIdMap.set(clone.blockInstanceId, 'blk_' + (this._idCounter++));
                        }
                        clone.blockInstanceId = blockIdMap.get(clone.blockInstanceId);
                    }
                    transformEntity(clone);
                    newEntities.push(clone);
                    newSelection.add(clone.id);
                }
            }
            this.entities.push(...newEntities);
            this.selectedIds = newSelection;
        }
        this._spatialDirty = true;
    }

    explodeSelected() {
        if (this.selectedIds.size === 0) return 0;
        this.saveStateForUndo();
        let explodedCount = 0;
        const newEntities = [];
        const toRemoveIds = new Set();
        const newSelectedIds = new Set();

        for (const e of this.entities) {
            if (this.selectedIds.has(e.id)) {
                if (e.blockInstanceId || e.blockId) {
                    delete e.blockInstanceId;
                    delete e.blockId;
                    newSelectedIds.add(e.id);
                    explodedCount++;
                } else if (e.type === 'POLYLINE' && e.points && e.points.length >= 2) {
                    toRemoveIds.add(e.id);
                    const n = e.points.length;
                    const limit = e.closed ? n : n - 1;
                    for (let i = 0; i < limit; i++) {
                        const p1 = e.points[i];
                        const p2 = e.points[(i + 1) % n];
                        const line = {
                            id: this.nextId(),
                            type: 'LINE',
                            x1: p1.x,
                            y1: p1.y,
                            x2: p2.x,
                            y2: p2.y,
                            layer: e.layer,
                            color: e.color
                        };
                        newEntities.push(line);
                        newSelectedIds.add(line.id);
                    }
                    explodedCount++;
                }
            }
        }

        if (toRemoveIds.size > 0) {
            this.entities = this.entities.filter(e => !toRemoveIds.has(e.id));
        }
        if (newEntities.length > 0) {
            this.entities.push(...newEntities);
        }
        if (newSelectedIds.size > 0) {
            this.selectedIds = newSelectedIds;
        }
        return explodedCount;
    }

    createBlockFromSelection(name = 'BLOCO_CUSTOM', basePoint = null) {
        if (this.selectedIds.size === 0) return null;
        this.saveStateForUndo();

        const selectedList = this.entities.filter(e => this.selectedIds.has(e.id));
        if (selectedList.length === 0) return null;

        if (!basePoint) {
            let minX = Infinity, minY = Infinity;
            for (const e of selectedList) {
                const bb = this.getEntityBounds(e);
                if (bb) {
                    minX = Math.min(minX, bb.minX);
                    minY = Math.min(minY, bb.minY);
                }
            }
            basePoint = { x: isFinite(minX) ? minX : 0, y: isFinite(minY) ? minY : 0 };
        }

        const blockId = name.toUpperCase().replace(/\s+/g, '_');
        const instanceId = 'blk_' + (this._idCounter++);

        const blockTemplates = [];
        for (const e of selectedList) {
            e.blockId = blockId;
            e.blockInstanceId = instanceId;

            const templ = JSON.parse(JSON.stringify(e));
            delete templ.id;
            delete templ.blockId;
            delete templ.blockInstanceId;

            if (templ.type === 'LINE' || templ.type === 'DIMENSION') {
                templ.x1 -= basePoint.x; templ.y1 -= basePoint.y;
                templ.x2 -= basePoint.x; templ.y2 -= basePoint.y;
            } else if (templ.type === 'CIRCLE' || templ.type === 'ARC') {
                templ.cx -= basePoint.x; templ.cy -= basePoint.y;
            } else if (templ.type === 'POLYLINE' && templ.points) {
                templ.points = templ.points.map(p => ({ x: p.x - basePoint.x, y: p.y - basePoint.y }));
            } else if (templ.type === 'TEXT') {
                templ.x -= basePoint.x; templ.y -= basePoint.y;
            }
            blockTemplates.push(templ);
        }

        if (typeof CADBlockLibrary !== 'undefined') {
            CADBlockLibrary[blockId] = {
                id: blockId,
                name: name,
                category: 'user',
                categoryName: 'Personalizados',
                entities: blockTemplates
            };
        }

        this.render();
        return { blockId, instanceId, count: selectedList.length };
    }

    groupSelected() {
        if (this.selectedIds.size === 0) return 0;
        this.saveStateForUndo();
        const instanceId = 'blk_' + (this._idCounter++);
        let count = 0;
        for (const e of this.entities) {
            if (this.selectedIds.has(e.id)) {
                e.blockInstanceId = instanceId;
                e.blockId = 'GROUP';
                count++;
            }
        }
        this.render();
        return count;
    }

    ungroupSelected() {
        if (this.selectedIds.size === 0) return 0;
        this.saveStateForUndo();

        const blockInstancesToUngroup = new Set();
        for (const id of this.selectedIds) {
            const ent = this.getEntity(id);
            if (ent && ent.blockInstanceId) {
                blockInstancesToUngroup.add(ent.blockInstanceId);
            }
        }

        let count = 0;
        for (const e of this.entities) {
            if (this.selectedIds.has(e.id) || (e.blockInstanceId && blockInstancesToUngroup.has(e.blockInstanceId))) {
                if (e.blockInstanceId || e.blockId) {
                    delete e.blockInstanceId;
                    delete e.blockId;
                    delete e.blockName;
                    delete e._bb;
                    count++;
                }
            }
        }
        this.render();
        if (window.cadcloneUI && window.cadcloneUI.updatePropertiesPanel) {
            window.cadcloneUI.updatePropertiesPanel();
        }
        return count;
    }

    filletLines(line1, line2, radius = 0) {
        if (!line1 || !line2 || line1.type !== 'LINE' || line2.type !== 'LINE') return false;
        
        // Find line intersection
        const x1 = line1.x1, y1 = line1.y1, x2 = line1.x2, y2 = line1.y2;
        const x3 = line2.x1, y3 = line2.y1, x4 = line2.x2, y4 = line2.y2;

        const det = (x2 - x1) * (y4 - y3) - (y2 - y1) * (x4 - x3);
        if (Math.abs(det) < 1e-9) return false; // Parallel lines

        const t = ((x3 - x1) * (y4 - y3) - (y3 - y1) * (x4 - x3)) / det;
        const ix = x1 + t * (x2 - x1);
        const iy = y1 + t * (y2 - y1);

        this.saveStateForUndo();

        // For line1, update the endpoint that is closer to intersection
        const d1a = Math.hypot(x1 - ix, y1 - iy);
        const d1b = Math.hypot(x2 - ix, y2 - iy);
        if (d1a <= d1b) {
            line1.x1 = ix; line1.y1 = iy;
        } else {
            line1.x2 = ix; line1.y2 = iy;
        }

        // For line2, update the endpoint that is closer to intersection
        const d2a = Math.hypot(x3 - ix, y3 - iy);
        const d2b = Math.hypot(x4 - ix, y4 - iy);
        if (d2a <= d2b) {
            line2.x1 = ix; line2.y1 = iy;
        } else {
            line2.x2 = ix; line2.y2 = iy;
        }

        return true;
    }

    offsetEntity(ent, dist, sideX, sideY) {
        if (!ent || dist === 0) return null;
        this.saveStateForUndo();

        if (ent.type === 'LINE') {
            const dx = ent.x2 - ent.x1;
            const dy = ent.y2 - ent.y1;
            const len = Math.hypot(dx, dy);
            if (len === 0) return null;

            // Normal vector
            let nx = -dy / len;
            let ny = dx / len;

            // Determine side
            const testX = (ent.x1 + ent.x2) / 2 + nx;
            const testY = (ent.y1 + ent.y2) / 2 + ny;
            const d1 = Math.hypot(sideX - testX, sideY - testY);
            const d2 = Math.hypot(sideX - ((ent.x1 + ent.x2) / 2 - nx), sideY - ((ent.y1 + ent.y2) / 2 - ny));
            if (d2 < d1) { nx = -nx; ny = -ny; }

            const newEnt = {
                id: this.nextId(),
                type: 'LINE',
                x1: ent.x1 + nx * dist,
                y1: ent.y1 + ny * dist,
                x2: ent.x2 + nx * dist,
                y2: ent.y2 + ny * dist,
                layer: ent.layer,
                color: ent.color
            };
            this.entities.push(newEnt);
            return newEnt;
        } else if (ent.type === 'CIRCLE') {
            const curDist = Math.hypot(sideX - ent.cx, sideY - ent.cy);
            const newR = curDist > ent.r ? ent.r + dist : Math.max(0.01, ent.r - dist);
            const newEnt = {
                id: this.nextId(),
                type: 'CIRCLE',
                cx: ent.cx,
                cy: ent.cy,
                r: newR,
                layer: ent.layer,
                color: ent.color
            };
            this.entities.push(newEnt);
            return newEnt;
        }
        return null;
    }

    // Boundary Edge Extraction & Intersections for TRIM / EXTEND
    getAllBoundaryEdges(excludeEntityId = null) {
        const segments = [];
        const circles = [];

        for (const e of this.entities) {
            if (e.id === excludeEntityId) continue;
            if (this.hiddenEntityIds && this.hiddenEntityIds.has(e.id)) continue;
            const lyr = this.layers[e.layer || '0'];
            if (lyr && lyr.visible === false) continue;

            if (e.type === 'LINE') {
                segments.push({ x1: e.x1, y1: e.y1, x2: e.x2, y2: e.y2, entity: e });
            } else if (e.type === 'POLYLINE' && e.points && e.points.length >= 2) {
                for (let i = 0; i < e.points.length - 1; i++) {
                    segments.push({
                        x1: e.points[i].x,
                        y1: e.points[i].y,
                        x2: e.points[i + 1].x,
                        y2: e.points[i + 1].y,
                        entity: e
                    });
                }
                if (e.closed && e.points.length > 2) {
                    segments.push({
                        x1: e.points[e.points.length - 1].x,
                        y1: e.points[e.points.length - 1].y,
                        x2: e.points[0].x,
                        y2: e.points[0].y,
                        entity: e
                    });
                }
            } else if (e.type === 'CIRCLE') {
                circles.push({ cx: e.cx, cy: e.cy, r: e.r, entity: e });
            } else if (e.type === 'ARC') {
                circles.push({ cx: e.cx, cy: e.cy, r: e.r, startAngle: e.startAngle, endAngle: e.endAngle, isArc: true, entity: e });
            }
        }

        return { segments, circles };
    }

    _segmentIntersection(x1, y1, x2, y2, x3, y3, x4, y4) {
        const denom = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);
        if (Math.abs(denom) < 1e-10) return null;

        const ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denom;
        const ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denom;

        const eps = 1e-4;
        if (ua >= -eps && ua <= 1 + eps && ub >= -eps && ub <= 1 + eps) {
            const clampedUa = Math.max(0, Math.min(1, ua));
            return {
                t: clampedUa,
                x: x1 + clampedUa * (x2 - x1),
                y: y1 + clampedUa * (y2 - y1)
            };
        }
        return null;
    }

    _segmentCircleIntersection(x1, y1, x2, y2, cx, cy, r, arcData = null) {
        const dx = x2 - x1;
        const dy = y2 - y1;
        const lenSq = dx * dx + dy * dy;
        if (lenSq < 1e-10) return [];

        const fx = x1 - cx;
        const fy = y1 - cy;
        const a = lenSq;
        const b = 2 * (fx * dx + fy * dy);
        const c = fx * fx + fy * fy - r * r;
        const disc = b * b - 4 * a * c;

        if (disc < 0) return [];
        const sqrtDisc = Math.sqrt(disc);
        const tValues = [(-b - sqrtDisc) / (2 * a), (-b + sqrtDisc) / (2 * a)];
        const results = [];

        for (const t of tValues) {
            if (t > 1e-4 && t < 1 - 1e-4) {
                const ix = x1 + t * dx;
                const iy = y1 + t * dy;
                if (arcData && arcData.isArc) {
                    const ang = Math.atan2(iy - cy, ix - cx);
                    if (!this._isAngleBetween(ang, arcData.startAngle, arcData.endAngle)) continue;
                }
                results.push({ t, x: ix, y: iy });
            }
        }
        return results;
    }

    trimEntityAt(worldPt) {
        const screenPt = this.worldToScreen(worldPt.x, worldPt.y);
        const ent = this.findEntityAt(screenPt.x, screenPt.y);
        if (!ent) {
            return { success: false, message: 'Nenhum objeto encontrado no ponto clicado para aparar.' };
        }

        if (ent.type !== 'LINE' && ent.type !== 'POLYLINE') {
            return { success: false, message: `Objeto do tipo ${ent.type} não pode ser aparado diretamente.` };
        }

        const { segments, circles } = this.getAllBoundaryEdges(ent.id);

        if (ent.type === 'LINE') {
            const tList = [];
            for (const seg of segments) {
                const isect = this._segmentIntersection(ent.x1, ent.y1, ent.x2, ent.y2, seg.x1, seg.y1, seg.x2, seg.y2);
                if (isect && isect.t > 1e-4 && isect.t < 1 - 1e-4) {
                    tList.push(isect.t);
                }
            }
            for (const c of circles) {
                const isects = this._segmentCircleIntersection(ent.x1, ent.y1, ent.x2, ent.y2, c.cx, c.cy, c.r, c);
                for (const isc of isects) {
                    tList.push(isc.t);
                }
            }

            if (tList.length === 0) {
                return { success: false, message: 'A linha selecionada não cruza nenhuma outra aresta de corte.' };
            }

            tList.sort((a, b) => a - b);
            const uniqueT = [0];
            for (const t of tList) {
                if (Math.abs(t - uniqueT[uniqueT.length - 1]) > 1e-4) {
                    uniqueT.push(t);
                }
            }
            uniqueT.push(1);

            const dx = ent.x2 - ent.x1;
            const dy = ent.y2 - ent.y1;
            const lenSq = dx * dx + dy * dy;
            let tClick = ((worldPt.x - ent.x1) * dx + (worldPt.y - ent.y1) * dy) / lenSq;
            tClick = Math.max(0, Math.min(1, tClick));

            let targetIdx = 0;
            for (let i = 0; i < uniqueT.length - 1; i++) {
                if (tClick >= uniqueT[i] - 1e-5 && tClick <= uniqueT[i + 1] + 1e-5) {
                    targetIdx = i;
                    break;
                }
            }

            const tA = uniqueT[targetIdx];
            const tB = uniqueT[targetIdx + 1];

            this.saveStateForUndo();

            if (tA === 0 && tB < 1) {
                // Trim start portion
                ent.x1 = ent.x1 + tB * dx;
                ent.y1 = ent.y1 + tB * dy;
            } else if (tA > 0 && tB === 1) {
                // Trim end portion
                ent.x2 = ent.x1 + tA * dx;
                ent.y2 = ent.y1 + tA * dy;
            } else if (tA > 0 && tB < 1) {
                // Middle trim: split into 2 lines
                const origX2 = ent.x2;
                const origY2 = ent.y2;
                ent.x2 = ent.x1 + tA * dx;
                ent.y2 = ent.y1 + tA * dy;
                const newEnt = {
                    id: this.nextId(),
                    type: 'LINE',
                    x1: ent.x1 + tB * dx,
                    y1: ent.y1 + tB * dy,
                    x2: origX2,
                    y2: origY2,
                    layer: ent.layer,
                    color: ent.color
                };
                this.entities.push(newEnt);
            } else {
                this.entities = this.entities.filter(e => e.id !== ent.id);
            }

            this.render();
            return { success: true, message: 'Linha aparada (TRIM) com sucesso.' };
        }

        // If ent is POLYLINE with 2 points, treat as line
        if (ent.type === 'POLYLINE' && ent.points && ent.points.length === 2) {
            const p1 = ent.points[0];
            const p2 = ent.points[1];
            this.entities = this.entities.filter(e => e.id !== ent.id);
            this.addLine(p1.x, p1.y, p2.x, p2.y, ent.layer);
            return this.trimEntityAt(worldPt);
        }

        return { success: false, message: 'Não foi possível aparar este objeto.' };
    }

    extendEntityAt(worldPt) {
        const screenPt = this.worldToScreen(worldPt.x, worldPt.y);
        const ent = this.findEntityAt(screenPt.x, screenPt.y);
        if (!ent) {
            return { success: false, message: 'Nenhum objeto encontrado no ponto clicado para estender.' };
        }

        if (ent.type !== 'LINE') {
            return { success: false, message: `Objeto do tipo ${ent.type} não pode ser estendido.` };
        }

        const d1 = Math.hypot(worldPt.x - ent.x1, worldPt.y - ent.y1);
        const d2 = Math.hypot(worldPt.x - ent.x2, worldPt.y - ent.y2);
        const extendStart = d1 < d2;

        let ox, oy, ux, uy;
        if (extendStart) {
            ox = ent.x1;
            oy = ent.y1;
            const vx = ent.x1 - ent.x2;
            const vy = ent.y1 - ent.y2;
            const len = Math.hypot(vx, vy);
            if (len < 1e-6) return { success: false, message: 'Linha de comprimento nulo.' };
            ux = vx / len;
            uy = vy / len;
        } else {
            ox = ent.x2;
            oy = ent.y2;
            const vx = ent.x2 - ent.x1;
            const vy = ent.y2 - ent.y1;
            const len = Math.hypot(vx, vy);
            if (len < 1e-6) return { success: false, message: 'Linha de comprimento nulo.' };
            ux = vx / len;
            uy = vy / len;
        }

        const { segments, circles } = this.getAllBoundaryEdges(ent.id);
        const hitCandidates = [];

        for (const seg of segments) {
            const dx2 = seg.x2 - seg.x1;
            const dy2 = seg.y2 - seg.y1;
            const denom = ux * dy2 - uy * dx2;
            if (Math.abs(denom) < 1e-10) continue;

            const s = ((seg.x1 - ox) * dy2 - (seg.y1 - oy) * dx2) / denom;
            const v = ((seg.x1 - ox) * uy - (seg.y1 - oy) * ux) / denom;

            if (s > 1e-4 && v >= -1e-4 && v <= 1 + 1e-4) {
                hitCandidates.push({
                    s,
                    x: ox + s * ux,
                    y: oy + s * uy
                });
            }
        }

        for (const c of circles) {
            const fx = ox - c.cx;
            const fy = oy - c.cy;
            const a = ux * ux + uy * uy;
            const b = 2 * (fx * ux + fy * uy);
            const cc = fx * fx + fy * fy - c.r * c.r;
            const disc = b * b - 4 * a * cc;
            if (disc >= 0) {
                const sqrtDisc = Math.sqrt(disc);
                const s1 = (-b - sqrtDisc) / (2 * a);
                const s2 = (-b + sqrtDisc) / (2 * a);
                for (const s of [s1, s2]) {
                    if (s > 1e-4) {
                        const ix = ox + s * ux;
                        const iy = oy + s * uy;
                        if (c.isArc) {
                            const ang = Math.atan2(iy - c.cy, ix - c.cx);
                            if (!this._isAngleBetween(ang, c.startAngle, c.endAngle)) continue;
                        }
                        hitCandidates.push({ s, x: ix, y: iy });
                    }
                }
            }
        }

        if (hitCandidates.length === 0) {
            return { success: false, message: 'Nenhuma aresta limite encontrada na direção de extensão.' };
        }

        hitCandidates.sort((a, b) => a.s - b.s);
        const nearest = hitCandidates[0];

        this.saveStateForUndo();

        if (extendStart) {
            ent.x1 = nearest.x;
            ent.y1 = nearest.y;
        } else {
            ent.x2 = nearest.x;
            ent.y2 = nearest.y;
        }

        this.render();
        return { success: true, message: `Linha estendida (EXTEND) até (${nearest.x.toFixed(2)}, ${nearest.y.toFixed(2)}).` };
    }

    // Selection Handling
    findEntityAt(screenX, screenY) {
        const pickTol = (this.pickboxSize + 4) / this.zoom;
        const w = this.screenToWorld(screenX, screenY);

        for (let i = this.entities.length - 1; i >= 0; i--) {
            const e = this.entities[i];
            if (this.hiddenEntityIds && this.hiddenEntityIds.has(e.id)) continue;
            const lyr = this.layers[e.layer || '0'];
            if (lyr && lyr.visible === false) continue;

            if (e.type === 'LINE') {
                const d = this._distPointToSegment(w.x, w.y, e.x1, e.y1, e.x2, e.y2);
                if (d <= pickTol) return e;
            } else if (e.type === 'DIMENSION') {
                const d1 = this._distPointToSegment(w.x, w.y, e.x1, e.y1, e.x2, e.y2);
                if (d1 <= pickTol) return e;
                const dx = e.x2 - e.x1;
                const dy = e.y2 - e.y1;
                const len = Math.hypot(dx, dy);
                const off = (typeof e.offset === 'number') ? e.offset : 0;
                if (len > 1e-6 && off !== 0) {
                    const nx = -dy / len;
                    const ny = dx / len;
                    const p1x = e.x1 + nx * off, p1y = e.y1 + ny * off;
                    const p2x = e.x2 + nx * off, p2y = e.y2 + ny * off;
                    if (this._distPointToSegment(w.x, w.y, p1x, p1y, p2x, p2y) <= pickTol) return e;
                    if (this._distPointToSegment(w.x, w.y, e.x1, e.y1, p1x, p1y) <= pickTol) return e;
                    if (this._distPointToSegment(w.x, w.y, e.x2, e.y2, p2x, p2y) <= pickTol) return e;
                }
            } else if (e.type === 'CIRCLE') {
                const d = Math.abs(Math.hypot(w.x - e.cx, w.y - e.cy) - e.r);
                if (d <= pickTol) return e;
            } else if (e.type === 'ARC') {
                const d = Math.abs(Math.hypot(w.x - e.cx, w.y - e.cy) - e.r);
                if (d <= pickTol) {
                    const ang = Math.atan2(w.y - e.cy, w.x - e.cx);
                    if (this._isAngleBetween(ang, e.startAngle, e.endAngle)) return e;
                }
            } else if (e.type === 'POLYLINE' && e.points) {
                for (let j = 0; j < e.points.length - 1; j++) {
                    const p1 = e.points[j];
                    const p2 = e.points[j + 1];
                    if (this._distPointToSegment(w.x, w.y, p1.x, p1.y, p2.x, p2.y) <= pickTol) return e;
                }
                if (e.closed && e.points.length > 2) {
                    const p1 = e.points[e.points.length - 1];
                    const p2 = e.points[0];
                    if (this._distPointToSegment(w.x, w.y, p1.x, p1.y, p2.x, p2.y) <= pickTol) return e;
                }
            } else if (e.type === 'TEXT') {
                const bb = this.getEntityBoundingBox(e);
                if (w.x >= bb.minX && w.x <= bb.maxX && w.y >= bb.minY && w.y <= bb.maxY) return e;
            }
        }
        return null;
    }

    _distPointToSegment(px, py, x1, y1, x2, y2) {
        const dx = x2 - x1;
        const dy = y2 - y1;
        if (dx === 0 && dy === 0) return Math.hypot(px - x1, py - y1);
        const t = Math.max(0, Math.min(1, ((px - x1) * dx + (py - y1) * dy) / (dx * dx + dy * dy)));
        return Math.hypot(px - (x1 + t * dx), py - (y1 + t * dy));
    }

    _isAngleBetween(target, a, b) {
        target = (target + Math.PI * 2) % (Math.PI * 2);
        a = (a + Math.PI * 2) % (Math.PI * 2);
        b = (b + Math.PI * 2) % (Math.PI * 2);
        if (a < b) return target >= a && target <= b;
        return target >= a || target <= b;
    }

    clearSelection(triggerRender = false) {
        if (this.selectedIds) {
            this.selectedIds.clear();
        }
        if (this.underlay) {
            this.underlay.selected = false;
        }
        if (triggerRender && typeof this.render === 'function') {
            this.render();
        }
    }

    selectEntityAndGroup(ent, isAdditive = false) {
        if (!isAdditive) this.selectedIds.clear();
        if (!ent) return;
        if (ent.blockInstanceId) {
            for (let i = 0; i < this.entities.length; i++) {
                const e = this.entities[i];
                if (e.blockInstanceId === ent.blockInstanceId) {
                    this.selectedIds.add(e.id);
                }
            }
        } else {
            this.selectedIds.add(ent.id);
        }
    }

    toggleEntityAndGroup(ent) {
        if (!ent) return;
        const idsToToggle = [];
        if (ent.blockInstanceId) {
            for (let i = 0; i < this.entities.length; i++) {
                const e = this.entities[i];
                if (e.blockInstanceId === ent.blockInstanceId) idsToToggle.push(e.id);
            }
        } else {
            idsToToggle.push(ent.id);
        }
        const allSelected = idsToToggle.every(id => this.selectedIds.has(id));
        for (let i = 0; i < idsToToggle.length; i++) {
            const id = idsToToggle[i];
            if (allSelected) this.selectedIds.delete(id);
            else this.selectedIds.add(id);
        }
    }

    selectByBox(p1, p2, append = false) {
        if (!append) this.selectedIds.clear();

        // Convert screen box corners to CAD world coordinates
        const w1 = this.screenToWorld(p1.x, p1.y);
        const w2 = this.screenToWorld(p2.x, p2.y);

        const minX = Math.min(w1.x, w2.x);
        const maxX = Math.max(w1.x, w2.x);
        const minY = Math.min(w1.y, w2.y);
        const maxY = Math.max(w1.y, w2.y);

        // Crossing selection: dragged from right to left on screen (p2.x < p1.x)
        const isCrossing = p2.x < p1.x;

        for (const e of this.entities) {
            if (this.hiddenEntityIds && this.hiddenEntityIds.has(e.id)) continue;
            const lyr = this.layers[e.layer || '0'];
            if (lyr && !lyr.visible) continue;

            const bb = this.getEntityBoundingBox(e);
            if (!bb) continue;

            if (isCrossing) {
                // Crossing: intersects bounding box or is inside
                if (bb.maxX >= minX && bb.minX <= maxX && bb.maxY >= minY && bb.minY <= maxY) {
                    this.selectedIds.add(e.id);
                }
            } else {
                // Window selection: completely inside
                if (bb.minX >= minX && bb.maxX <= maxX && bb.minY >= minY && bb.maxY <= maxY) {
                    this.selectedIds.add(e.id);
                }
            }
        }

        // Expand any selected entities that belong to an architectural block
        const blockInstances = new Set();
        for (const id of this.selectedIds) {
            const ent = this.entities.find(e => e.id === id);
            if (ent && ent.blockInstanceId) blockInstances.add(ent.blockInstanceId);
        }
        if (blockInstances.size > 0) {
            for (let i = 0; i < this.entities.length; i++) {
                const e = this.entities[i];
                if (e.blockInstanceId && blockInstances.has(e.blockInstanceId)) {
                    this.selectedIds.add(e.id);
                }
            }
        }
    }

    // -------------------------------------------------------------
    // RENDER PIPELINE
    // -------------------------------------------------------------
    requestRender() {
        if (!this._renderRequested) {
            this._renderRequested = true;
            this._animFrameId = requestAnimationFrame(() => {
                this._renderRequested = false;
                this._animFrameId = null;
                this.render();
            });
        }
    }

    render() {
        if (this._animFrameId) {
            cancelAnimationFrame(this._animFrameId);
            this._animFrameId = null;
        }
        this._renderRequested = false;

        const ctx = this.ctx;
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // 1. Model Space Background & Grid
        this._renderGrid(ctx);

        // 1.5 Render Underlay (PDF / Image Plan Background for tracing & additions)
        if (this.underlay && this.underlay.visible && (this.underlay.image || this.underlay.img)) {
            this._renderUnderlay(ctx);
        }

        // Viewport bounds in world coordinates for fast culling
        const p1 = this.screenToWorld(0, 0);
        const p2 = this.screenToWorld(this.canvas.width, this.canvas.height);
        const vMinX = Math.min(p1.x, p2.x);
        const vMaxX = Math.max(p1.x, p2.x);
        const vMinY = Math.min(p1.y, p2.y);
        const vMaxY = Math.max(p1.y, p2.y);

        // 2. Entities (Optimized loop: Viewport Culling + State Diffing without per-entity save/restore)
        let curStroke = null;
        let curLineWidth = -1;

        for (let i = 0; i < this.entities.length; i++) {
            const e = this.entities[i];
            if (this.hiddenEntityIds && this.hiddenEntityIds.has(e.id)) continue;
            const lyr = this.layers[e.layer || '0'] || this.layers['0'];
            if (!lyr.visible) continue;

            // Viewport Culling: Skip entities outside visible screen
            const bb = e._bb || this.getEntityBoundingBox(e);
            if (bb) {
                if (bb.maxX < vMinX || bb.minX > vMaxX || bb.maxY < vMinY || bb.minY > vMaxY) {
                    continue;
                }
            }

            const isSelected = this.selectedIds.has(e.id);
            const strokeColor = isSelected ? '#00e5ff' : (e.color || lyr.color);
            const lineWidth = Math.max(1, (e.lineweight || lyr.lineweight || 1));

            if (strokeColor !== curStroke) {
                ctx.strokeStyle = strokeColor;
                ctx.fillStyle = strokeColor;
                curStroke = strokeColor;
            }
            if (lineWidth !== curLineWidth) {
                ctx.lineWidth = lineWidth;
                curLineWidth = lineWidth;
            }

            this._drawEntity(ctx, e);

            if (e.type === 'TEXT' || e.type === 'DIMENSION') {
                curStroke = null;
                curLineWidth = -1;
            }
        }

        // Draw AutoCAD grips and group boundaries for active selection
        this._drawAllActiveGrips(ctx);

        // 3. Rubberband Preview (while drawing)
        if (this.rubberband) {
            ctx.save();
            ctx.strokeStyle = this.rubberband.color || '#00e5ff';
            ctx.lineWidth = 1;
            ctx.setLineDash([4, 4]);
            this._drawEntity(ctx, this.rubberband, true);
            ctx.restore();
        }
        if (this.previewEntity) {
            ctx.save();
            ctx.strokeStyle = this.previewEntity.color || '#ffffff';
            ctx.lineWidth = 1;
            ctx.setLineDash([4, 4]);
            this._drawEntity(ctx, this.previewEntity, true);
            ctx.restore();
        }

        // 3.0 Multi-Entity Preview (e.g. Block Insertion or Move/Copy ghost)
        if (this.previewEntities && this.previewEntities.length > 0) {
            ctx.save();
            ctx.strokeStyle = '#38bdf8';
            ctx.fillStyle = '#38bdf8';
            ctx.lineWidth = 1.5;
            ctx.setLineDash([4, 4]);
            for (const pe of this.previewEntities) {
                this._drawEntity(ctx, pe, true);
            }
            ctx.restore();
        }

        // 3.01 Base Point Marker for Transform Commands (MOVE, COPY, ROTATE, SCALE)
        if (this.commandSystem && this.commandSystem.commandData && this.commandSystem.commandData.basePoint) {
            const bp = this.commandSystem.commandData.basePoint;
            const sp = this.worldToScreen(bp.x, bp.y);
            ctx.save();
            ctx.strokeStyle = '#ef4444';
            ctx.fillStyle = 'rgba(239, 68, 68, 0.25)';
            ctx.lineWidth = 1.5;
            ctx.setLineDash([]);
            ctx.beginPath();
            ctx.arc(sp.x, sp.y, 6, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(sp.x - 9, sp.y);
            ctx.lineTo(sp.x + 9, sp.y);
            ctx.moveTo(sp.x, sp.y - 9);
            ctx.lineTo(sp.x, sp.y + 9);
            ctx.stroke();
            ctx.restore();
        }

        // 3.1 Grip Rubberband Guide Line
        if (this.activeGrip && this.gripBasePt) {
            ctx.save();
            ctx.strokeStyle = '#ef4444';
            ctx.lineWidth = 1;
            ctx.setLineDash([4, 4]);
            const s1 = this.worldToScreen(this.gripBasePt.x, this.gripBasePt.y);
            const s2 = this.worldToScreen(this.mouseWorld.x, this.mouseWorld.y);
            ctx.beginPath();
            ctx.moveTo(s1.x, s1.y);
            ctx.lineTo(s2.x, s2.y);
            ctx.stroke();
            ctx.restore();
        }

        // 4. Selection Box (Blue = Window / Green = Crossing)
        if ((this.isSelecting || this.isBoxSelecting) && this.selectStart && this.selectCurrent) {
            this._renderSelectionBox(ctx);
        }

        // 5. UCS Icon at Bottom-Left (AutoCAD Red/Green UCS)
        this._renderUCSIcon(ctx);

        // 6. OSNAP Magnet Glyph
        if (this.activeSnap) {
            const scr = this.worldToScreen(this.activeSnap.x, this.activeSnap.y);
            OSnap.drawGlyph(ctx, this.activeSnap, scr.x, scr.y);
        }

        // 7. Fullscreen Crosshair and Pickbox
        this._renderCrosshair(ctx);
    }

    _renderGrid(ctx) {
        if (!this.gridEnabled) return;

        // Calculate adaptive grid spacing in world units
        const rawSpacing = 50 / this.zoom;
        const exp = Math.floor(Math.log10(rawSpacing));
        const base = Math.pow(10, exp);
        let spacing = base;
        if (rawSpacing / base > 5) spacing = base * 5;
        else if (rawSpacing / base > 2) spacing = base * 2;

        const wTopLeft = this.screenToWorld(0, 0);
        const wBottomRight = this.screenToWorld(this.canvas.width, this.canvas.height);

        const startX = Math.floor(wTopLeft.x / spacing) * spacing;
        const endX = Math.ceil(wBottomRight.x / spacing) * spacing;
        const startY = Math.floor(wBottomRight.y / spacing) * spacing;
        const endY = Math.ceil(wTopLeft.y / spacing) * spacing;

        ctx.lineWidth = 0.5;

        // Grid lines
        for (let x = startX; x <= endX; x += spacing) {
            const isMajor = Math.abs(x % (spacing * 5)) < 1e-4;
            ctx.strokeStyle = isMajor ? '#333b47' : '#262c36';
            const s = this.worldToScreen(x, 0);
            ctx.beginPath();
            ctx.moveTo(s.x, 0);
            ctx.lineTo(s.x, this.canvas.height);
            ctx.stroke();
        }

        for (let y = startY; y <= endY; y += spacing) {
            const isMajor = Math.abs(y % (spacing * 5)) < 1e-4;
            ctx.strokeStyle = isMajor ? '#333b47' : '#262c36';
            const s = this.worldToScreen(0, y);
            ctx.beginPath();
            ctx.moveTo(0, s.y);
            ctx.lineTo(this.canvas.width, s.y);
            ctx.stroke();
        }

        // Major X & Y Axes (Red X, Green Y)
        const originScreen = this.worldToScreen(0, 0);
        ctx.strokeStyle = '#991b1b'; // Dark Red X axis
        ctx.beginPath();
        ctx.moveTo(0, originScreen.y);
        ctx.lineTo(this.canvas.width, originScreen.y);
        ctx.stroke();

        ctx.strokeStyle = '#166534'; // Dark Green Y axis
        ctx.beginPath();
        ctx.moveTo(originScreen.x, 0);
        ctx.lineTo(originScreen.x, this.canvas.height);
        ctx.stroke();
    }

    _renderUnderlay(ctx) {
        if (!this.underlay || !this.underlay.visible || (!this.underlay.image && !this.underlay.img)) return;
        const u = this.underlay;
        const imgObj = u.image || u.img;

        const sTopLeft = this.worldToScreen(u.x, u.y + (u.height || 10));
        const sW = (u.width || 10) * this.zoom;
        const sH = (u.height || 10) * this.zoom;

        ctx.save();
        ctx.globalAlpha = (typeof u.opacity === 'number') ? u.opacity : 0.75;

        if (u.rotation) {
            const centerS = this.worldToScreen(u.x + (u.width || 10) / 2, u.y + (u.height || 10) / 2);
            ctx.translate(centerS.x, centerS.y);
            ctx.rotate(-u.rotation * Math.PI / 180);
            ctx.drawImage(imgObj, -sW / 2, -sH / 2, sW, sH);
        } else {
            ctx.drawImage(imgObj, sTopLeft.x, sTopLeft.y, sW, sH);
        }
        ctx.restore();

        // If underlay is selected or in calibration mode, draw border outline
        if (u.selected || this.isCalibratingUnderlay || this.isMovingUnderlay) {
            ctx.save();
            ctx.strokeStyle = this.isCalibratingUnderlay ? '#f59e0b' : '#38bdf8';
            ctx.lineWidth = 1.5;
            ctx.setLineDash([6, 4]);
            if (u.rotation) {
                const centerS = this.worldToScreen(u.x + (u.width || 10) / 2, u.y + (u.height || 10) / 2);
                ctx.translate(centerS.x, centerS.y);
                ctx.rotate(-u.rotation * Math.PI / 180);
                ctx.strokeRect(-sW / 2, -sH / 2, sW, sH);
            } else {
                ctx.strokeRect(sTopLeft.x, sTopLeft.y, sW, sH);
            }
            ctx.restore();
        }

        // Calibration rubberband & points preview
        if (this.isCalibratingUnderlay && this.underlayCalibrationPts && this.underlayCalibrationPts.length > 0) {
            ctx.save();
            const pt1 = this.underlayCalibrationPts[0];
            const s1 = this.worldToScreen(pt1.x, pt1.y);

            // Point 1 marker
            ctx.fillStyle = '#ef4444';
            ctx.beginPath();
            ctx.arc(s1.x, s1.y, 5, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 1.5;
            ctx.stroke();

            const pt2 = this.underlayCalibrationPts[1] || this.mouseWorld;
            const s2 = this.worldToScreen(pt2.x, pt2.y);

            // Dashed connection line
            ctx.strokeStyle = '#f59e0b';
            ctx.lineWidth = 2;
            ctx.setLineDash([4, 4]);
            ctx.beginPath();
            ctx.moveTo(s1.x, s1.y);
            ctx.lineTo(s2.x, s2.y);
            ctx.stroke();

            // Point 2 marker
            if (this.underlayCalibrationPts[1]) {
                ctx.fillStyle = '#22c55e';
                ctx.beginPath();
                ctx.arc(s2.x, s2.y, 5, 0, Math.PI * 2);
                ctx.fill();
                ctx.strokeStyle = '#ffffff';
                ctx.lineWidth = 1.5;
                ctx.stroke();
            }
            ctx.restore();
        }
    }

    _drawEntity(ctx, e, ignoreEntityDash = false) {
        let hasCustomDash = false;
        if (!ignoreEntityDash) {
            const linetype = this.getEffectiveLinetype(e);
            if (linetype && linetype !== 'CONTINUOUS') {
                const dash = this.getLineDashPattern(linetype);
                if (dash && dash.length > 0) {
                    ctx.setLineDash(dash);
                    hasCustomDash = true;
                }
            }
        }

        if (e.type === 'LINE') {
            const p1 = this.worldToScreen(e.x1, e.y1);
            const p2 = this.worldToScreen(e.x2, e.y2);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
        } else if (e.type === 'CIRCLE') {
            const c = this.worldToScreen(e.cx, e.cy);
            const rPx = e.r * this.zoom;
            ctx.beginPath();
            ctx.arc(c.x, c.y, rPx, 0, Math.PI * 2);
            ctx.stroke();
        } else if (e.type === 'ARC') {
            const c = this.worldToScreen(e.cx, e.cy);
            const rPx = e.r * this.zoom;
            // Invert angles because Screen Y is inverted from World Y
            ctx.beginPath();
            ctx.arc(c.x, c.y, rPx, -e.endAngle, -e.startAngle);
            ctx.stroke();
        } else if (e.type === 'POLYLINE' && e.points) {
            if (e.points.length >= 2) {
                ctx.beginPath();
                const start = this.worldToScreen(e.points[0].x, e.points[0].y);
                ctx.moveTo(start.x, start.y);
                for (let i = 1; i < e.points.length; i++) {
                    const p = this.worldToScreen(e.points[i].x, e.points[i].y);
                    ctx.lineTo(p.x, p.y);
                }
                if (e.closed) ctx.closePath();
                ctx.stroke();
            }
        } else if (e.type === 'RECTANGLE') {
            const p1 = this.worldToScreen(e.x1, e.y1);
            const p2 = this.worldToScreen(e.x2, e.y2);
            ctx.beginPath();
            ctx.rect(Math.min(p1.x, p2.x), Math.min(p1.y, p2.y), Math.abs(p2.x - p1.x), Math.abs(p2.y - p1.y));
            ctx.stroke();
        } else if (e.type === 'TEXT') {
            const p = this.worldToScreen(e.x, e.y);
            const hPx = (e.height || 0.3) * this.zoom;
            ctx.save();
            ctx.translate(p.x, p.y);
            if (e.rotation) ctx.rotate(-e.rotation);
            ctx.font = `${Math.max(10, hPx)}px "JetBrains Mono", monospace`;
            ctx.fillText(e.text || '', 0, 0);
            ctx.restore();
        } else if (e.type === 'DIMENSION') {
            const dx = e.x2 - e.x1;
            const dy = e.y2 - e.y1;
            const len = Math.hypot(dx, dy);
            const off = (typeof e.offset === 'number') ? e.offset : 0;
            let nx = 0, ny = 0;
            if (len > 1e-6 && off !== 0) {
                nx = -dy / len;
                ny = dx / len;
            }

            const orig1 = this.worldToScreen(e.x1, e.y1);
            const orig2 = this.worldToScreen(e.x2, e.y2);
            const p1 = this.worldToScreen(e.x1 + nx * off, e.y1 + ny * off);
            const p2 = this.worldToScreen(e.x2 + nx * off, e.y2 + ny * off);
            
            ctx.save();
            ctx.setLineDash([]);
            
            // Witness (extension) lines if offset is present
            if (Math.abs(off) > 0.05) {
                ctx.beginPath();
                ctx.moveTo(orig1.x, orig1.y);
                ctx.lineTo(p1.x, p1.y);
                ctx.moveTo(orig2.x, orig2.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.lineWidth = 0.75;
                ctx.stroke();
            }

            // Draw dimension line (always continuous)
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.lineWidth = 1;
            ctx.stroke();

            // Arrowheads & Text scale (DIMSCALE / DIMTXT)
            const ang = Math.atan2(p2.y - p1.y, p2.x - p1.x);
            const tScale = (typeof e.textScale === 'number' && e.textScale > 0)
                ? e.textScale
                : ((typeof e.textHeight === 'number' && e.textHeight > 0) ? (e.textHeight / 0.22) : 1.0);
            this._drawArrowhead(ctx, p1.x, p1.y, ang, tScale);
            this._drawArrowhead(ctx, p2.x, p2.y, ang + Math.PI, tScale);

            // Dimension text (aligned along dimension line)
            const midX = (p1.x + p2.x) / 2;
            const midY = (p1.y + p2.y) / 2;
            let textAng = ang;
            if (textAng > Math.PI / 2 || textAng < -Math.PI / 2) {
                textAng += Math.PI;
            }
            ctx.save();
            ctx.translate(midX, midY);
            ctx.rotate(textAng);
            const fontPx = Math.max(8, Math.round(11 * tScale));
            ctx.font = `600 ${fontPx}px "JetBrains Mono", monospace`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';
            const txt = e.text || (len.toFixed(2) + 'm');
            ctx.fillText(txt, 0, -3 * tScale);
            ctx.restore();
            ctx.restore();
        }

        if (hasCustomDash) {
            ctx.setLineDash([]);
        }
    }

    _drawArrowhead(ctx, x, y, ang, scale = 1.0) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(ang);
        const s = (typeof scale === 'number' && scale > 0) ? scale : 1.0;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(8 * s, -3 * s);
        ctx.lineTo(8 * s, 3 * s);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }

    // -------------------------------------------------------------
    // Interactive Grip Editing System (Item 6)
    // -------------------------------------------------------------
    getEntityGrips(e) {
        const grips = [];
        if (e.type === 'LINE') {
            grips.push({ entityId: e.id, id: `${e.id}_start`, role: 'start', index: 0, x: e.x1, y: e.y1 });
            grips.push({ entityId: e.id, id: `${e.id}_mid`, role: 'mid', index: 1, x: (e.x1 + e.x2) / 2, y: (e.y1 + e.y2) / 2 });
            grips.push({ entityId: e.id, id: `${e.id}_end`, role: 'end', index: 2, x: e.x2, y: e.y2 });
        } else if (e.type === 'DIMENSION') {
            const dx = e.x2 - e.x1;
            const dy = e.y2 - e.y1;
            const len = Math.hypot(dx, dy);
            const off = (typeof e.offset === 'number') ? e.offset : 0;
            let nx = 0, ny = 0;
            if (len > 1e-6) {
                nx = -dy / len;
                ny = dx / len;
            }
            // Point 1 (stretch endpoint 1)
            grips.push({ entityId: e.id, id: `${e.id}_start`, role: 'start', index: 0, x: e.x1, y: e.y1 });
            // Midpoint between origins (move entire dimension)
            grips.push({ entityId: e.id, id: `${e.id}_mid`, role: 'mid', index: 1, x: (e.x1 + e.x2) / 2, y: (e.y1 + e.y2) / 2 });
            // Point 2 (stretch endpoint 2)
            grips.push({ entityId: e.id, id: `${e.id}_end`, role: 'end', index: 2, x: e.x2, y: e.y2 });
            // Dimension line & text offset grip (adjusts perpendicular distance of dimension line)
            grips.push({
                entityId: e.id,
                id: `${e.id}_dimline`,
                role: 'dimline',
                index: 3,
                x: (e.x1 + e.x2) / 2 + nx * off,
                y: (e.y1 + e.y2) / 2 + ny * off
            });
        } else if (e.type === 'RECTANGLE') {
            const xmin = Math.min(e.x1, e.x2), xmax = Math.max(e.x1, e.x2);
            const ymin = Math.min(e.y1, e.y2), ymax = Math.max(e.y1, e.y2);
            grips.push({ entityId: e.id, id: `${e.id}_c0`, role: 'corner', index: 0, x: xmin, y: ymin });
            grips.push({ entityId: e.id, id: `${e.id}_c1`, role: 'corner', index: 1, x: xmax, y: ymin });
            grips.push({ entityId: e.id, id: `${e.id}_c2`, role: 'corner', index: 2, x: xmax, y: ymax });
            grips.push({ entityId: e.id, id: `${e.id}_c3`, role: 'corner', index: 3, x: xmin, y: ymax });
            grips.push({ entityId: e.id, id: `${e.id}_mid`, role: 'center', index: 4, x: (xmin + xmax) / 2, y: (ymin + ymax) / 2 });
        } else if (e.type === 'CIRCLE') {
            grips.push({ entityId: e.id, id: `${e.id}_center`, role: 'center', index: 0, x: e.cx, y: e.cy });
            grips.push({ entityId: e.id, id: `${e.id}_q0`, role: 'quadrant', index: 1, x: e.cx + e.r, y: e.cy });
            grips.push({ entityId: e.id, id: `${e.id}_q90`, role: 'quadrant', index: 2, x: e.cx, y: e.cy + e.r });
            grips.push({ entityId: e.id, id: `${e.id}_q180`, role: 'quadrant', index: 3, x: e.cx - e.r, y: e.cy });
            grips.push({ entityId: e.id, id: `${e.id}_q270`, role: 'quadrant', index: 4, x: e.cx, y: e.cy - e.r });
        } else if (e.type === 'ARC') {
            grips.push({ entityId: e.id, id: `${e.id}_center`, role: 'center', index: 0, x: e.cx, y: e.cy });
            grips.push({ entityId: e.id, id: `${e.id}_start`, role: 'start', index: 1, x: e.cx + e.r * Math.cos(e.startAngle), y: e.cy + e.r * Math.sin(e.startAngle) });
            let midA = (e.startAngle + e.endAngle) / 2;
            if (e.endAngle < e.startAngle) midA += Math.PI;
            grips.push({ entityId: e.id, id: `${e.id}_mid`, role: 'mid', index: 2, x: e.cx + e.r * Math.cos(midA), y: e.cy + e.r * Math.sin(midA) });
            grips.push({ entityId: e.id, id: `${e.id}_end`, role: 'end', index: 3, x: e.cx + e.r * Math.cos(e.endAngle), y: e.cy + e.r * Math.sin(e.endAngle) });
        } else if (e.type === 'POLYLINE' && e.points) {
            e.points.forEach((p, i) => {
                grips.push({ entityId: e.id, id: `${e.id}_v${i}`, role: 'vertex', index: i, x: p.x, y: p.y });
                if (i < e.points.length - 1) {
                    const next = e.points[i + 1];
                    grips.push({ entityId: e.id, id: `${e.id}_m${i}`, role: 'mid', index: i, x: (p.x + next.x) / 2, y: (p.y + next.y) / 2 });
                } else if (e.closed && e.points.length > 2) {
                    const next = e.points[0];
                    grips.push({ entityId: e.id, id: `${e.id}_m${i}`, role: 'mid', index: i, x: (p.x + next.x) / 2, y: (p.y + next.y) / 2 });
                }
            });
        } else if (e.type === 'TEXT') {
            grips.push({ entityId: e.id, id: `${e.id}_ins`, role: 'insertion', index: 0, x: e.x, y: e.y });
        }
        return grips;
    }

    getAllActiveGrips() {
        const all = [];

        // Include underlay grips if selected
        if (this.underlay && this.underlay.visible && this.underlay.selected) {
            all.push(...this.getUnderlayGrips());
        }

        if (!this.selectedIds || this.selectedIds.size === 0) return all;

        // Partition selection into grouped instances vs standalone entities
        const groupInstances = new Map(); // blockInstanceId -> Array of entities
        const standaloneEntities = [];

        for (const id of this.selectedIds) {
            const ent = this.getEntity(id);
            if (!ent || (this.hiddenEntityIds && this.hiddenEntityIds.has(ent.id))) continue;
            const lyr = this.layers[ent.layer || '0'];
            if (lyr && !lyr.visible) continue;

            if (ent.blockInstanceId) {
                if (!groupInstances.has(ent.blockInstanceId)) {
                    groupInstances.set(ent.blockInstanceId, []);
                }
                groupInstances.get(ent.blockInstanceId).push(ent);
            } else {
                standaloneEntities.push(ent);
            }
        }

        // Standalone entities get individual CAD grips
        for (const ent of standaloneEntities) {
            all.push(...this.getEntityGrips(ent));
        }

        // Unified Group / Block Grips: 1 Center diamond + 4 corner squares
        // Blocks and groups are atomic units; individual lines must never stretch separately
        for (const [instId, ents] of groupInstances.entries()) {
            let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
            for (const ent of ents) {
                const bb = this.getEntityBoundingBox(ent);
                if (bb) {
                    if (bb.minX < minX) minX = bb.minX;
                    if (bb.minY < minY) minY = bb.minY;
                    if (bb.maxX > maxX) maxX = bb.maxX;
                    if (bb.maxY > maxY) maxY = bb.maxY;
                }
            }

            if (isFinite(minX) && isFinite(minY) && isFinite(maxX) && isFinite(maxY)) {
                const primaryEntId = ents[0].id;
                // Center grip (Move base point)
                all.push({
                    entityId: primaryEntId,
                    blockInstanceId: instId,
                    isGroup: true,
                    role: 'group_center',
                    id: `grp_${instId}_center`,
                    x: (minX + maxX) / 2,
                    y: (minY + maxY) / 2
                });
                // 4 Corner grips (corners of group bounding box)
                all.push({
                    entityId: primaryEntId,
                    blockInstanceId: instId,
                    isGroup: true,
                    role: 'group_corner',
                    id: `grp_${instId}_c0`,
                    x: minX,
                    y: minY
                });
                all.push({
                    entityId: primaryEntId,
                    blockInstanceId: instId,
                    isGroup: true,
                    role: 'group_corner',
                    id: `grp_${instId}_c1`,
                    x: maxX,
                    y: minY
                });
                all.push({
                    entityId: primaryEntId,
                    blockInstanceId: instId,
                    isGroup: true,
                    role: 'group_corner',
                    id: `grp_${instId}_c2`,
                    x: maxX,
                    y: maxY
                });
                all.push({
                    entityId: primaryEntId,
                    blockInstanceId: instId,
                    isGroup: true,
                    role: 'group_corner',
                    id: `grp_${instId}_c3`,
                    x: minX,
                    y: maxY
                });
            }
        }

        return all;
    }

    findGripAt(sx, sy, tolerancePx = 7) {
        const grips = this.getAllActiveGrips();
        for (const g of grips) {
            const scr = this.worldToScreen(g.x, g.y);
            if (Math.abs(scr.x - sx) <= tolerancePx && Math.abs(scr.y - sy) <= tolerancePx) {
                return g;
            }
        }
        return null;
    }

    _drawGrips(ctx, e) {
        // Kept for backward compatibility; calls _drawAllActiveGrips
        this._drawAllActiveGrips(ctx);
    }

    _drawAllActiveGrips(ctx) {
        const hasEntitiesSelected = this.selectedIds && this.selectedIds.size > 0;
        const hasUnderlaySelected = this.underlay && this.underlay.visible && this.underlay.selected;
        if (!hasEntitiesSelected && !hasUnderlaySelected) return;

        // 1. Draw dashed group bounding boxes for any selected groups/blocks
        const groupInstances = new Map();
        for (const id of this.selectedIds) {
            const ent = this.getEntity(id);
            if (!ent || (this.hiddenEntityIds && this.hiddenEntityIds.has(ent.id))) continue;
            const lyr = this.layers[ent.layer || '0'];
            if (lyr && !lyr.visible) continue;

            if (ent.blockInstanceId) {
                if (!groupInstances.has(ent.blockInstanceId)) {
                    groupInstances.set(ent.blockInstanceId, []);
                }
                groupInstances.get(ent.blockInstanceId).push(ent);
            }
        }

        if (groupInstances.size > 0) {
            ctx.save();
            ctx.lineWidth = 1;
            ctx.setLineDash([4, 4]);
            ctx.strokeStyle = 'rgba(56, 189, 248, 0.75)'; // Soft cyan dashed box
            for (const ents of groupInstances.values()) {
                let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
                for (const ent of ents) {
                    const bb = this.getEntityBoundingBox(ent);
                    if (bb) {
                        if (bb.minX < minX) minX = bb.minX;
                        if (bb.minY < minY) minY = bb.minY;
                        if (bb.maxX > maxX) maxX = bb.maxX;
                        if (bb.maxY > maxY) maxY = bb.maxY;
                    }
                }
                if (isFinite(minX) && isFinite(minY) && isFinite(maxX) && isFinite(maxY)) {
                    const s1 = this.worldToScreen(minX, maxY);
                    const s2 = this.worldToScreen(maxX, minY);
                    const x = Math.min(s1.x, s2.x) - 3;
                    const y = Math.min(s1.y, s2.y) - 3;
                    const w = Math.abs(s2.x - s1.x) + 6;
                    const h = Math.abs(s2.y - s1.y) + 6;
                    ctx.strokeRect(x, y, w, h);
                }
            }
            ctx.restore();
        }

        // 2. Draw all active grips
        const grips = this.getAllActiveGrips();
        if (grips.length === 0) return;

        const g = 4; // grip half size
        ctx.save();
        ctx.lineWidth = 1;

        for (const grip of grips) {
            const s = this.worldToScreen(grip.x, grip.y);
            const isHot = this.activeGrip && this.activeGrip.id === grip.id;
            const isHover = !isHot && this.hoveredGrip && this.hoveredGrip.id === grip.id;

            if (grip.isUnderlay) {
                if (grip.role === 'underlay_rot') {
                    // Draw stem line from top-center to rotation handle
                    if (grip.stemStart) {
                        const ss = this.worldToScreen(grip.stemStart.x, grip.stemStart.y);
                        ctx.save();
                        ctx.strokeStyle = isHot ? '#ef4444' : '#38bdf8';
                        ctx.lineWidth = 1.5;
                        ctx.setLineDash([3, 3]);
                        ctx.beginPath();
                        ctx.moveTo(ss.x, ss.y);
                        ctx.lineTo(s.x, s.y);
                        ctx.stroke();
                        ctx.restore();
                    }
                    // Circle handle for rotation
                    ctx.save();
                    ctx.fillStyle = isHot ? '#ef4444' : (isHover ? '#fbbf24' : '#f59e0b');
                    ctx.strokeStyle = '#ffffff';
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    ctx.arc(s.x, s.y, g + 2, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.stroke();
                    ctx.restore();
                } else if (grip.role === 'underlay_center') {
                    // Diamond handle for center move
                    ctx.save();
                    ctx.fillStyle = isHot ? '#ef4444' : (isHover ? '#4ade80' : '#22c55e');
                    ctx.strokeStyle = '#ffffff';
                    ctx.lineWidth = 1.5;
                    ctx.beginPath();
                    ctx.moveTo(s.x, s.y - g - 2);
                    ctx.lineTo(s.x + g + 2, s.y);
                    ctx.lineTo(s.x, s.y + g + 2);
                    ctx.lineTo(s.x - g - 2, s.y);
                    ctx.closePath();
                    ctx.fill();
                    ctx.stroke();
                    ctx.restore();
                } else {
                    // Corner scale grips
                    ctx.save();
                    ctx.fillStyle = isHot ? '#ef4444' : (isHover ? '#38bdf8' : '#0284c7');
                    ctx.strokeStyle = '#ffffff';
                    ctx.lineWidth = 1.5;
                    ctx.fillRect(s.x - g - 1, s.y - g - 1, (g + 1) * 2, (g + 1) * 2);
                    ctx.strokeRect(s.x - g - 1, s.y - g - 1, (g + 1) * 2, (g + 1) * 2);
                    ctx.restore();
                }
                continue;
            }

            if (isHot) {
                ctx.fillStyle = '#ef4444'; // Hot: Red
                ctx.strokeStyle = '#ffffff';
            } else if (isHover) {
                ctx.fillStyle = '#38bdf8'; // Hover: Cyan
                ctx.strokeStyle = '#ffffff';
            } else if (grip.isGroup) {
                ctx.fillStyle = '#22c55e'; // Group Grip: Green
                ctx.strokeStyle = '#ffffff';
            } else {
                ctx.fillStyle = '#0055ff'; // Cool grip: AutoCAD blue
                ctx.strokeStyle = '#ffffff';
            }

            if (grip.role === 'group_center') {
                // Diamond shape for group center grip
                ctx.beginPath();
                ctx.moveTo(s.x, s.y - g - 2);
                ctx.lineTo(s.x + g + 2, s.y);
                ctx.lineTo(s.x, s.y + g + 2);
                ctx.lineTo(s.x - g - 2, s.y);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
            } else {
                // Square grip
                ctx.fillRect(s.x - g, s.y - g, g * 2, g * 2);
                ctx.strokeRect(s.x - g, s.y - g, g * 2, g * 2);
            }
        }
        ctx.restore();
    }

    startGripEdit(grip) {
        if (grip.isUnderlay) {
            const u = this.underlay;
            if (!u) return;
            this.activeGrip = {
                ...grip,
                origUnderlay: {
                    x: u.x,
                    y: u.y,
                    width: u.width,
                    height: u.height,
                    rotation: u.rotation || 0
                }
            };
            if (grip.role === 'underlay_rot') {
                this.gripMode = 'ROTATE';
            } else if (grip.role === 'underlay_center') {
                this.gripMode = 'MOVE';
            } else {
                this.gripMode = 'SCALE';
            }
            this.gripBasePt = { x: grip.x, y: grip.y };
            this.activeGripIsMouseDown = true;
            this.activeGripMoved = false;
            if (this.commandSystem) {
                const promptMsg = grip.role === 'underlay_rot'
                    ? 'Girar Calco: arraste para rotacionar'
                    : (grip.role === 'underlay_center' ? 'Mover Calco: arraste para nova posição' : 'Redimensionar Calco: arraste para aumentar/diminuir');
                this.commandSystem.setPrompt(promptMsg);
            }
            this.render();
            return;
        }

        const ent = this.getEntity(grip.entityId);
        if (!ent) return;

        // Group / Block check: never stretch individual members of a group!
        const isGroup = !!(grip.isGroup || ent.blockInstanceId || ent.blockId);

        // Include all entities in selection AND all entities belonging to any selected group/block
        const blockInstances = new Set();
        for (const id of this.selectedIds) {
            const e = this.getEntity(id);
            if (e && e.blockInstanceId) blockInstances.add(e.blockInstanceId);
        }
        if (ent.blockInstanceId) blockInstances.add(ent.blockInstanceId);

        const allSelected = this.entities
            .filter(e => this.selectedIds.has(e.id) || (e.blockInstanceId && blockInstances.has(e.blockInstanceId)))
            .map(e => JSON.parse(JSON.stringify(e)));

        this.activeGrip = {
            ...grip,
            isGroup: isGroup,
            origEntity: JSON.parse(JSON.stringify(ent)),
            origSelectedEntities: allSelected
        };
        // For groups, default to MOVE (STRETCH is strictly prohibited on grouped entities)
        this.gripMode = isGroup ? 'MOVE' : 'STRETCH';
        this.gripBasePt = { x: grip.x, y: grip.y };
        this.activeGripIsMouseDown = true;
        this.activeGripMoved = false;

        if (this.commandSystem) {
            this.commandSystem.setPrompt(`** ${this.gripMode} ** Especifique o ponto ou pressione [Espaço] para alternar modos:`);
        }
        this.render();
    }

    cycleGripMode() {
        if (!this.activeGrip || this.activeGrip.isUnderlay) return;
        const modes = this.activeGrip.isGroup ? ['MOVE', 'ROTATE', 'SCALE'] : ['STRETCH', 'MOVE', 'ROTATE', 'SCALE'];
        const curIdx = modes.indexOf(this.gripMode);
        this.gripMode = modes[(curIdx + 1) % modes.length];

        this.restoreGripEntities();

        if (this.commandSystem) {
            this.commandSystem.setPrompt(`** ${this.gripMode} ** Especifique o ponto ou pressione [Espaço] para alternar modos:`);
        }
        this.updateGripPreview(this.mouseWorld);
        this.render();
    }

    cancelGripEdit() {
        if (!this.activeGrip) return;
        if (this.activeGrip.isUnderlay) {
            this.restoreGripEntities();
            this.activeGrip = null;
            this.gripBasePt = null;
            this.activeGripIsMouseDown = false;
            this.activeGripMoved = false;
            if (this.commandSystem) {
                this.commandSystem.setPrompt('Command: ');
            }
            this.render();
            if (window.cadcloneUI && window.cadcloneUI.updatePropertiesPanel) {
                window.cadcloneUI.updatePropertiesPanel();
            }
            return;
        }
        this.restoreGripEntities();
        this.activeGrip = null;
        this.gripBasePt = null;
        this.activeGripIsMouseDown = false;
        this.activeGripMoved = false;
        if (this.commandSystem) {
            this.commandSystem.setPrompt('Command: ');
            if (window.cadcloneUI && window.cadcloneUI.hideDynamicHud) {
                window.cadcloneUI.hideDynamicHud();
            }
        }
        this.render();
        if (window.cadcloneUI && window.cadcloneUI.updatePropertiesPanel) {
            window.cadcloneUI.updatePropertiesPanel();
        }
    }

    commitGripEdit(finalPt) {
        if (!this.activeGrip) return;
        if (this.activeGrip.isUnderlay) {
            if (finalPt) {
                this.restoreGripEntities();
                this.saveStateForUndo();
                this.applyGripTransformation(finalPt);
            } else {
                this.saveStateForUndo();
            }
            this.activeGrip = null;
            this.gripBasePt = null;
            this.activeGripIsMouseDown = false;
            this.activeGripMoved = false;
            this.isDirty = true;
            if (this.commandSystem) {
                this.commandSystem.logHistory('Calco técnico ajustado com sucesso.');
                this.commandSystem.setPrompt('Command: ');
            }
            if (typeof window !== 'undefined' && window.cadUnderlayManager) {
                window.cadUnderlayManager.updateHud();
            }
            this.render();
            if (window.cadcloneUI && window.cadcloneUI.updatePropertiesPanel) {
                window.cadcloneUI.updatePropertiesPanel();
            }
            return;
        }
        if (finalPt) {
            this.restoreGripEntities();
            this.saveStateForUndo();
            this.applyGripTransformation(finalPt);
        } else {
            this.saveStateForUndo();
        }
        const mode = this.gripMode;
        this.activeGrip = null;
        this.gripBasePt = null;
        this.activeGripIsMouseDown = false;
        this.activeGripMoved = false;
        if (this.commandSystem) {
            this.commandSystem.logHistory(`** ${mode} ** Concluído.`);
            this.commandSystem.setPrompt('Command: ');
            if (window.cadcloneUI && window.cadcloneUI.hideDynamicHud) {
                window.cadcloneUI.hideDynamicHud();
            }
        }
        this.render();
        if (window.cadcloneUI && window.cadcloneUI.updatePropertiesPanel) {
            window.cadcloneUI.updatePropertiesPanel();
        }
    }

    restoreGripEntities() {
        if (this.activeGrip && this.activeGrip.isUnderlay && this.activeGrip.origUnderlay && this.underlay) {
            Object.assign(this.underlay, JSON.parse(JSON.stringify(this.activeGrip.origUnderlay)));
            if (typeof window !== 'undefined' && window.cadUnderlayManager) {
                window.cadUnderlayManager.updateHud();
            }
            return;
        }
        if (!this.activeGrip || !this.activeGrip.origSelectedEntities) return;
        for (const orig of this.activeGrip.origSelectedEntities) {
            const ent = this.getEntity(orig.id);
            if (ent) {
                Object.assign(ent, JSON.parse(JSON.stringify(orig)));
            }
        }
    }

    updateGripPreview(curPt) {
        if (!this.activeGrip) return;
        this.restoreGripEntities();
        this.applyGripTransformation(curPt);
    }

    applyGripTransformation(curPt) {
        if (!this.activeGrip || !curPt) return;
        const grip = this.activeGrip;
        const base = this.gripBasePt || { x: grip.x, y: grip.y };

        if (grip.isUnderlay) {
            const u = this.underlay;
            const orig = grip.origUnderlay;
            if (!u || !orig) return;

            if (grip.role === 'underlay_center') {
                const dx = curPt.x - base.x;
                const dy = curPt.y - base.y;
                u.x = orig.x + dx;
                u.y = orig.y + dy;
            } else if (grip.role === 'underlay_rot') {
                const origCx = orig.x + orig.width / 2;
                const origCy = orig.y + orig.height / 2;
                const dx = curPt.x - origCx;
                const dy = curPt.y - origCy;
                const angleRad = Math.atan2(dy, dx);
                let deg = (angleRad * 180 / Math.PI) - 90;
                while (deg < 0) deg += 360;
                deg = deg % 360;

                // Polar snap to 0, 45, 90, 135, 180, 225, 270, 315
                const snapAngles = [0, 45, 90, 135, 180, 225, 270, 315, 360];
                for (const sa of snapAngles) {
                    if (Math.abs(deg - sa) < 3.5) {
                        deg = sa % 360;
                        break;
                    }
                }
                u.rotation = Math.round(deg * 10) / 10;
            } else if (grip.role === 'underlay_corner') {
                const anchor = grip.anchor;
                const origDist = Math.hypot(base.x - anchor.x, base.y - anchor.y);
                const curDist = Math.hypot(curPt.x - anchor.x, curPt.y - anchor.y);
                if (origDist > 1e-4) {
                    const factor = Math.max(0.05, curDist / origDist);
                    const newW = Math.max(0.2, orig.width * factor);
                    const newH = Math.max(0.2, orig.height * factor);

                    const rad = (u.rotation || 0) * Math.PI / 180;
                    const cos = Math.cos(rad);
                    const sin = Math.sin(rad);

                    let anchorLocalX, anchorLocalY;
                    const nhw = newW / 2;
                    const nhh = newH / 2;
                    if (grip.cornerIdx === 0) { anchorLocalX = nhw; anchorLocalY = nhh; }
                    else if (grip.cornerIdx === 1) { anchorLocalX = -nhw; anchorLocalY = nhh; }
                    else if (grip.cornerIdx === 2) { anchorLocalX = -nhw; anchorLocalY = -nhh; }
                    else { anchorLocalX = nhw; anchorLocalY = -nhh; }

                    const newCx = anchor.x - (anchorLocalX * cos - anchorLocalY * sin);
                    const newCy = anchor.y - (anchorLocalX * sin + anchorLocalY * cos);

                    u.width = newW;
                    u.height = newH;
                    u.x = newCx - nhw;
                    u.y = newCy - nhh;
                }
            }

            this.isDirty = true;
            if (typeof window !== 'undefined' && window.cadUnderlayManager) {
                window.cadUnderlayManager.updateHud();
            }
            return;
        }

        const ent = this.getEntity(grip.entityId);
        if (!ent) return;

        // Atomic Group Integrity: Groups / Blocks can NEVER stretch individual entities!
        const mode = (grip.isGroup && this.gripMode === 'STRETCH') ? 'MOVE' : this.gripMode;

        if (mode === 'STRETCH') {
            if (ent.type === 'LINE') {
                if (grip.role === 'start') {
                    ent.x1 = curPt.x; ent.y1 = curPt.y;
                } else if (grip.role === 'end') {
                    ent.x2 = curPt.x; ent.y2 = curPt.y;
                } else if (grip.role === 'mid') {
                    const dx = curPt.x - base.x;
                    const dy = curPt.y - base.y;
                    const orig = grip.origEntity;
                    ent.x1 = orig.x1 + dx; ent.y1 = orig.y1 + dy;
                    ent.x2 = orig.x2 + dx; ent.y2 = orig.y2 + dy;
                }
            } else if (ent.type === 'RECTANGLE') {
                if (grip.role === 'corner') {
                    if (grip.index === 0) { ent.x1 = curPt.x; ent.y1 = curPt.y; }
                    else if (grip.index === 1) { ent.x2 = curPt.x; ent.y1 = curPt.y; }
                    else if (grip.index === 2) { ent.x2 = curPt.x; ent.y2 = curPt.y; }
                    else if (grip.index === 3) { ent.x1 = curPt.x; ent.y2 = curPt.y; }
                } else if (grip.role === 'center') {
                    const dx = curPt.x - base.x;
                    const dy = curPt.y - base.y;
                    const orig = grip.origEntity;
                    ent.x1 = orig.x1 + dx; ent.y1 = orig.y1 + dy;
                    ent.x2 = orig.x2 + dx; ent.y2 = orig.y2 + dy;
                }
            } else if (ent.type === 'CIRCLE') {
                if (grip.role === 'center') {
                    ent.cx = curPt.x; ent.cy = curPt.y;
                } else if (grip.role === 'quadrant') {
                    ent.r = Math.max(0.01, Math.hypot(curPt.x - ent.cx, curPt.y - ent.cy));
                }
            } else if (ent.type === 'ARC') {
                if (grip.role === 'center') {
                    ent.cx = curPt.x; ent.cy = curPt.y;
                } else if (grip.role === 'start') {
                    ent.startAngle = Math.atan2(curPt.y - ent.cy, curPt.x - ent.cx);
                    ent.r = Math.max(0.01, Math.hypot(curPt.x - ent.cx, curPt.y - ent.cy));
                } else if (grip.role === 'end') {
                    ent.endAngle = Math.atan2(curPt.y - ent.cy, curPt.x - ent.cx);
                    ent.r = Math.max(0.01, Math.hypot(curPt.x - ent.cx, curPt.y - ent.cy));
                } else if (grip.role === 'mid') {
                    ent.r = Math.max(0.01, Math.hypot(curPt.x - ent.cx, curPt.y - ent.cy));
                }
            } else if (ent.type === 'POLYLINE' && e.points) {
                if (grip.role === 'vertex') {
                    if (ent.points[grip.index]) {
                        ent.points[grip.index].x = curPt.x;
                        ent.points[grip.index].y = curPt.y;
                    }
                } else if (grip.role === 'mid') {
                    const dx = curPt.x - base.x;
                    const dy = curPt.y - base.y;
                    const orig = grip.origEntity;
                    if (orig.points && orig.points[grip.index]) {
                        ent.points[grip.index].x = orig.points[grip.index].x + dx;
                        ent.points[grip.index].y = orig.points[grip.index].y + dy;
                        const nextIdx = (grip.index + 1) % ent.points.length;
                        ent.points[nextIdx].x = orig.points[nextIdx].x + dx;
                        ent.points[nextIdx].y = orig.points[nextIdx].y + dy;
                    }
                }
            } else if (ent.type === 'TEXT') {
                ent.x = curPt.x; ent.y = curPt.y;
            } else if (ent.type === 'DIMENSION') {
                if (grip.role === 'start') {
                    ent.x1 = curPt.x; ent.y1 = curPt.y;
                } else if (grip.role === 'end') {
                    ent.x2 = curPt.x; ent.y2 = curPt.y;
                } else if (grip.role === 'mid') {
                    const dx = curPt.x - base.x;
                    const dy = curPt.y - base.y;
                    const orig = grip.origEntity;
                    ent.x1 = orig.x1 + dx; ent.y1 = orig.y1 + dy;
                    ent.x2 = orig.x2 + dx; ent.y2 = orig.y2 + dy;
                } else if (grip.role === 'dimline') {
                    const dx = ent.x2 - ent.x1;
                    const dy = ent.y2 - ent.y1;
                    const len = Math.hypot(dx, dy);
                    if (len > 1e-6) {
                        const nx = -dy / len;
                        const ny = dx / len;
                        ent.offset = (curPt.x - ent.x1) * nx + (curPt.y - ent.y1) * ny;
                    }
                }
                ent.text = Math.hypot(ent.x2 - ent.x1, ent.y2 - ent.y1).toFixed(2) + 'm';
            }
            delete ent._bb;
            this._spatialDirty = true;
        } else if (mode === 'MOVE') {
            const dx = curPt.x - base.x;
            const dy = curPt.y - base.y;
            for (const orig of grip.origSelectedEntities) {
                const e = this.getEntity(orig.id);
                if (!e) continue;
                delete e._bb;
                if (e.type === 'LINE' || e.type === 'DIMENSION' || e.type === 'RECTANGLE') {
                    e.x1 = orig.x1 + dx; e.y1 = orig.y1 + dy;
                    e.x2 = orig.x2 + dx; e.y2 = orig.y2 + dy;
                } else if (e.type === 'CIRCLE' || e.type === 'ARC') {
                    e.cx = orig.cx + dx; e.cy = orig.cy + dy;
                } else if (e.type === 'POLYLINE' && e.points) {
                    e.points = orig.points.map(p => ({ x: p.x + dx, y: p.y + dy }));
                } else if (e.type === 'TEXT') {
                    e.x = orig.x + dx; e.y = orig.y + dy;
                }
            }
            this._spatialDirty = true;
        } else if (mode === 'ROTATE') {
            const angle = Math.atan2(curPt.y - base.y, curPt.x - base.x);
            const cos = Math.cos(angle);
            const sin = Math.sin(angle);
            const rotPt = (x, y) => ({
                x: base.x + (x - base.x) * cos - (y - base.y) * sin,
                y: base.y + (x - base.x) * sin + (y - base.y) * cos
            });
            for (const orig of grip.origSelectedEntities) {
                const e = this.getEntity(orig.id);
                if (!e) continue;
                delete e._bb;
                if (e.type === 'LINE' || e.type === 'DIMENSION') {
                    const p1 = rotPt(orig.x1, orig.y1);
                    const p2 = rotPt(orig.x2, orig.y2);
                    e.x1 = p1.x; e.y1 = p1.y; e.x2 = p2.x; e.y2 = p2.y;
                } else if (e.type === 'RECTANGLE') {
                    const p1 = rotPt(orig.x1, orig.y1);
                    const p2 = rotPt(orig.x2, orig.y1);
                    const p3 = rotPt(orig.x2, orig.y2);
                    const p4 = rotPt(orig.x1, orig.y2);
                    e.type = 'POLYLINE';
                    e.points = [p1, p2, p3, p4];
                    e.closed = true;
                } else if (e.type === 'CIRCLE') {
                    const c = rotPt(orig.cx, orig.cy);
                    e.cx = c.x; e.cy = c.y;
                } else if (e.type === 'ARC') {
                    const c = rotPt(orig.cx, orig.cy);
                    e.cx = c.x; e.cy = c.y;
                    e.startAngle = orig.startAngle + angle;
                    e.endAngle = orig.endAngle + angle;
                } else if (e.type === 'POLYLINE' && e.points) {
                    e.points = orig.points.map(p => rotPt(p.x, p.y));
                } else if (e.type === 'TEXT') {
                    const p = rotPt(orig.x, orig.y);
                    e.x = p.x; e.y = p.y;
                    e.rotation = (orig.rotation || 0) + angle;
                }
            }
            this._spatialDirty = true;
        } else if (mode === 'SCALE') {
            const curDist = Math.hypot(curPt.x - base.x, curPt.y - base.y);
            const factor = Math.max(0.01, curDist);
            const scalePt = (x, y) => ({
                x: base.x + (x - base.x) * factor,
                y: base.y + (y - base.y) * factor
            });
            for (const orig of grip.origSelectedEntities) {
                const e = this.getEntity(orig.id);
                if (!e) continue;
                delete e._bb;
                if (e.type === 'LINE' || e.type === 'DIMENSION' || e.type === 'RECTANGLE') {
                    const p1 = scalePt(orig.x1, orig.y1);
                    const p2 = scalePt(orig.x2, orig.y2);
                    e.x1 = p1.x; e.y1 = p1.y; e.x2 = p2.x; e.y2 = p2.y;
                    if (e.type === 'DIMENSION') {
                        e.text = Math.hypot(e.x2 - e.x1, e.y2 - e.y1).toFixed(2) + 'm';
                    }
                } else if (e.type === 'CIRCLE') {
                    const c = scalePt(orig.cx, orig.cy);
                    e.cx = c.x; e.cy = c.y;
                    e.r = Math.max(0.01, orig.r * factor);
                } else if (e.type === 'ARC') {
                    const c = scalePt(orig.cx, orig.cy);
                    e.cx = c.x; e.cy = c.y;
                    e.r = Math.max(0.01, orig.r * factor);
                } else if (e.type === 'POLYLINE' && e.points) {
                    e.points = orig.points.map(p => scalePt(p.x, p.y));
                } else if (e.type === 'TEXT') {
                    const p = scalePt(orig.x, orig.y);
                    e.x = p.x; e.y = p.y;
                    e.height = Math.max(0.05, (orig.height || 0.3) * factor);
                }
            }
            this._spatialDirty = true;
        }
    }

    _renderSelectionBox(ctx) {
        if (!this.selectStart || !this.selectCurrent) return;

        const x = Math.min(this.selectStart.x, this.selectCurrent.x);
        const y = Math.min(this.selectStart.y, this.selectCurrent.y);
        const w = Math.abs(this.selectCurrent.x - this.selectStart.x);
        const h = Math.abs(this.selectCurrent.y - this.selectStart.y);

        const isCrossing = this.selectCurrent.x < this.selectStart.x;

        ctx.save();
        if (isCrossing) {
            // Right-to-Left: GREEN Crossing Box with dashed outline
            ctx.fillStyle = 'rgba(34, 197, 94, 0.18)';
            ctx.strokeStyle = '#22c55e';
            ctx.setLineDash([5, 3]);
        } else {
            // Left-to-Right: BLUE Window Box with solid outline
            ctx.fillStyle = 'rgba(59, 130, 246, 0.18)';
            ctx.strokeStyle = '#3b82f6';
            ctx.setLineDash([]);
        }
        ctx.fillRect(x, y, w, h);
        ctx.strokeRect(x, y, w, h);
        ctx.restore();
    }

    _renderUCSIcon(ctx) {
        ctx.save();
        const origin = this.worldToScreen(0, 0);
        
        // Either pinned to bottom-left (if origin offscreen) or at true (0,0)
        const isPinned = origin.x < 40 || origin.x > this.canvas.width - 40 || origin.y < 40 || origin.y > this.canvas.height - 40;
        const ucsX = isPinned ? 35 : origin.x;
        const ucsY = isPinned ? this.canvas.height - 35 : origin.y;
        const len = 25;

        // X Axis (Red)
        ctx.strokeStyle = '#ef4444';
        ctx.fillStyle = '#ef4444';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(ucsX, ucsY);
        ctx.lineTo(ucsX + len, ucsY);
        ctx.stroke();
        ctx.font = 'bold 10px sans-serif';
        ctx.fillText('X', ucsX + len + 4, ucsY + 4);

        // Y Axis (Green)
        ctx.strokeStyle = '#22c55e';
        ctx.fillStyle = '#22c55e';
        ctx.beginPath();
        ctx.moveTo(ucsX, ucsY);
        ctx.lineTo(ucsX, ucsY - len);
        ctx.stroke();
        ctx.fillText('Y', ucsX - 4, ucsY - len - 4);

        // Origin box / dot
        ctx.fillStyle = '#94a3b8';
        ctx.fillRect(ucsX - 2, ucsY - 2, 4, 4);

        ctx.restore();
    }

    _renderCrosshair(ctx) {
        ctx.save();
        const x = this.mouseScreen.x;
        const y = this.mouseScreen.y;
        const pb = this.pickboxSize;

        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 1;

        if (this.crosshairFullscreen) {
            // Fullscreen classic lines
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(x - pb, y);
            ctx.moveTo(x + pb, y);
            ctx.lineTo(this.canvas.width, y);

            ctx.moveTo(x, 0);
            ctx.lineTo(x, y - pb);
            ctx.moveTo(x, y + pb);
            ctx.lineTo(x, this.canvas.height);
            ctx.stroke();
        } else {
            // 40px lines
            const len = 40;
            ctx.beginPath();
            ctx.moveTo(x - len, y);
            ctx.lineTo(x - pb, y);
            ctx.moveTo(x + pb, y);
            ctx.lineTo(x + len, y);

            ctx.moveTo(x, y - len);
            ctx.lineTo(x, y - pb);
            ctx.moveTo(x, y + pb);
            ctx.lineTo(x, y + len);
            ctx.stroke();
        }

        // Center Pickbox Square
        ctx.strokeRect(x - pb, y - pb, pb * 2, pb * 2);

        // Dynamic Input tooltip if active (only when no basepoint active)
        if (this.dynamicInput && (!this.commandSystem || !this.commandSystem.getBasePoint())) {
            ctx.font = '10px "JetBrains Mono", monospace';
            const wCoord = this.snappedPoint || this.mouseWorld;
            const coordText = `${wCoord.x.toFixed(2)}, ${wCoord.y.toFixed(2)}`;
            ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
            ctx.fillRect(x + 15, y + 15, ctx.measureText(coordText).width + 12, 20);
            ctx.strokeStyle = '#475569';
            ctx.strokeRect(x + 15, y + 15, ctx.measureText(coordText).width + 12, 20);
            ctx.fillStyle = '#f8fafc';
            ctx.fillText(coordText, x + 21, y + 29);
        }

        ctx.restore();
    }

    computePointerWorld(sx, sy, isShiftKey = false) {
        const rawWorld = this.screenToWorld(sx, sy);

        // 1. Snap (AutoCAD standard: OSNAP always takes absolute priority over Ortho)
        let snap = null;
        if (typeof OSnap !== 'undefined' && OSnap.enabled) {
            snap = OSnap.findSnap(this, rawWorld.x, rawWorld.y);
        }

        if (snap) {
            this.activeSnap = snap;
            this.snappedPoint = { x: snap.x, y: snap.y };
            return { x: snap.x, y: snap.y, snapped: true };
        }

        this.activeSnap = null;
        this.snappedPoint = null;

        // 2. Ortho constraint (AutoCAD TEMPOVERRIDES: Shift key temporarily inverts Ortho mode)
        const isOrtho = isShiftKey ? !this.orthoEnabled : this.orthoEnabled;
        if (isOrtho) {
            let base = null;
            if (this.commandSystem && typeof this.commandSystem.getBasePoint === 'function') {
                base = this.commandSystem.getBasePoint();
            }
            if (!base && this.commandSystem && this.commandSystem.commandData) {
                if (this.commandSystem.commandData.basePoint) base = this.commandSystem.commandData.basePoint;
                else if (this.commandSystem.commandData.p1) base = this.commandSystem.commandData.p1;
                else if (this.commandSystem.commandData.points && this.commandSystem.commandData.points.length > 0) {
                    base = this.commandSystem.commandData.points[this.commandSystem.commandData.points.length - 1];
                }
            }
            if (!base && this.isDraggingSelection && this.dragBaseWorld) {
                base = this.dragBaseWorld;
            }

            if (base) {
                const dx = Math.abs(rawWorld.x - base.x);
                const dy = Math.abs(rawWorld.y - base.y);
                if (dx >= dy) {
                    return { x: rawWorld.x, y: base.y, snapped: false, ortho: true };
                } else {
                    return { x: base.x, y: rawWorld.y, snapped: false, ortho: true };
                }
            }
        }

        return { x: rawWorld.x, y: rawWorld.y, snapped: false, ortho: false };
    }

    _updateCursorWithShift(isShift) {
        this.shiftPressed = isShift;
        const effectiveOrtho = this.shiftPressed ? !this.orthoEnabled : this.orthoEnabled;
        const btnOrtho = document.getElementById('btnOrthoToggle');
        if (btnOrtho) btnOrtho.classList.toggle('active', !!effectiveOrtho);

        if (this.mouseScreen) {
            const eff = this.computePointerWorld(this.mouseScreen.x, this.mouseScreen.y, isShift);
            this.mouseWorld = { x: eff.x, y: eff.y };
            if (this.commandSystem) {
                this.commandSystem.handleCanvasMouseMove(this.mouseWorld);
            }
            this.requestRender();
            if (window.cadcloneUI) {
                if (window.cadcloneUI.updateCoords) window.cadcloneUI.updateCoords(this.mouseWorld);
                if (window.cadcloneUI.updateDynamicHud) window.cadcloneUI.updateDynamicHud(this.mouseWorld, this.mouseScreen);
            }
        }
    }

    initMouseEvents(commandSystem) {
        this.commandSystem = commandSystem;
        const c = this.canvas;

        window.addEventListener('resize', () => {
            this.initCanvasSize();
            this.render();
        });

        // AutoCAD TEMPOVERRIDES: Shift Key Ortho toggle listener
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Shift' && !e.repeat) {
                this._updateCursorWithShift(true);
            }
        });
        window.addEventListener('keyup', (e) => {
            if (e.key === 'Shift') {
                this._updateCursorWithShift(false);
            }
        });

        c.addEventListener('mousemove', (e) => {
            const rect = c.getBoundingClientRect();
            const sx = e.clientX - rect.left;
            const sy = e.clientY - rect.top;
            this.mouseScreen = { x: sx, y: sy };

            if (this.isPanning) {
                this.originX += (sx - this.panStart.x);
                this.originY += (sy - this.panStart.y);
                this.panStart = { x: sx, y: sy };
                this.requestRender();
                return;
            }

            const eff = this.computePointerWorld(sx, sy, !!e.shiftKey);
            const effectiveWorld = { x: eff.x, y: eff.y };
            this.mouseWorld = effectiveWorld;

            if (this.isSelecting || this.isBoxSelecting) {
                this.selectCurrent = { x: sx, y: sy };
            }

            // Direct Drag-to-Move
            if (this.isDraggingSelection && this.selectedIds.size > 0 && this.dragLastWorld) {
                const totalDist = Math.hypot(effectiveWorld.x - this.dragBaseWorld.x, effectiveWorld.y - this.dragBaseWorld.y);
                if (totalDist > (4 / this.zoom) || this.dragMoved) {
                    if (!this.dragMoved) {
                        this.saveStateForUndo();
                        this.dragMoved = true;
                    }
                    const dx = effectiveWorld.x - this.dragLastWorld.x;
                    const dy = effectiveWorld.y - this.dragLastWorld.y;
                    this.translateSelected(dx, dy);
                    this.dragLastWorld = { x: effectiveWorld.x, y: effectiveWorld.y };
                    c.style.cursor = 'move';
                    this.requestRender();
                    if (window.cadcloneUI && window.cadcloneUI.updatePropertiesPanel) window.cadcloneUI.updatePropertiesPanel();
                    return;
                }
            }

            // Direct Underlay Drag-to-Move
            if (this.isDraggingUnderlay && this.underlay && this.dragLastWorld) {
                const totalDist = Math.hypot(effectiveWorld.x - this.dragBaseWorld.x, effectiveWorld.y - this.dragBaseWorld.y);
                if (totalDist > (4 / this.zoom) || this.dragMoved) {
                    if (!this.dragMoved) {
                        this.saveStateForUndo();
                        this.dragMoved = true;
                    }
                    const dx = effectiveWorld.x - this.dragLastWorld.x;
                    const dy = effectiveWorld.y - this.dragLastWorld.y;
                    this.underlay.x += dx;
                    this.underlay.y += dy;
                    this.dragLastWorld = { x: effectiveWorld.x, y: effectiveWorld.y };
                    c.style.cursor = 'move';
                    this.isDirty = true;
                    this.requestRender();
                    if (typeof window !== 'undefined' && window.cadUnderlayManager) {
                        window.cadUnderlayManager.updateHud();
                    }
                    if (window.cadcloneUI && window.cadcloneUI.updatePropertiesPanel) window.cadcloneUI.updatePropertiesPanel();
                    return;
                }
            }

            // Grip Hover & Active Stretch Preview (Item 6)
            if (this.activeGrip) {
                this.updateGripPreview(effectiveWorld);
                this.activeGripMoved = true;
            } else if ((this.selectedIds.size > 0 || (this.underlay && this.underlay.visible && this.underlay.selected)) && (!this.commandSystem || !this.commandSystem.currentCommand)) {
                const hg = this.findGripAt(sx, sy);
                if (hg !== this.hoveredGrip) {
                    this.hoveredGrip = hg;
                    if (hg) {
                        if (hg.role === 'underlay_rot') c.style.cursor = 'grab';
                        else if (hg.role === 'underlay_center') c.style.cursor = 'move';
                        else if (hg.role === 'underlay_corner') c.style.cursor = 'pointer';
                        else c.style.cursor = 'pointer';
                    } else {
                        c.style.cursor = 'crosshair';
                    }
                }
            } else if (this.hoveredGrip) {
                this.hoveredGrip = null;
                c.style.cursor = 'crosshair';
            }

            if (this.commandSystem) {
                this.commandSystem.handleCanvasMouseMove(effectiveWorld);
            }

            this.requestRender();

            if (window.cadcloneUI) {
                if (window.cadcloneUI.updateCoords) window.cadcloneUI.updateCoords(effectiveWorld);
                if (window.cadcloneUI.updateDynamicHud) window.cadcloneUI.updateDynamicHud(effectiveWorld, this.mouseScreen);
            }
        });

        c.addEventListener('mousedown', (e) => {
            const rect = c.getBoundingClientRect();
            const sx = e.clientX - rect.left;
            const sy = e.clientY - rect.top;

            if (e.button === 1) { // Middle click pan
                this.isPanning = true;
                this.panStart = { x: sx, y: sy };
                c.style.cursor = 'grab';
                return;
            }

            if (e.button === 0) { // Left click
                const isTrimOrExtend = this.commandSystem && 
                    (this.commandSystem.currentCommand?.name === 'TRIM' || this.commandSystem.currentCommand?.name === 'EXTEND');
                const eff = this.computePointerWorld(sx, sy, !!e.shiftKey);
                const effectiveWorld = isTrimOrExtend ? this.screenToWorld(sx, sy) : { x: eff.x, y: eff.y };

                // 1. If currently manipulating an active hot grip, click commits edit!
                if (this.activeGrip) {
                    this.commitGripEdit(effectiveWorld);
                    return;
                }

                // 2. If active command is running
                if (this.commandSystem && this.commandSystem.currentCommand) {
                    this.commandSystem.handleCanvasClick(effectiveWorld, e);
                    this.render();
                } else {
                    // 3. Check if clicked a grip of any currently selected entity or underlay
                    const clickedGrip = this.findGripAt(sx, sy);
                    if (clickedGrip) {
                        this.startGripEdit(clickedGrip);
                        return;
                    }

                    const hit = this.findEntityAt(sx, sy);
                    if (hit) {
                        if (this.underlay) this.underlay.selected = false;
                        if (e.shiftKey) {
                            this.toggleEntityAndGroup(hit);
                        } else {
                            if (!this.selectedIds.has(hit.id)) {
                                this.selectEntityAndGroup(hit, false);
                            }
                        }
                        // Start direct drag-to-move!
                        this.isDraggingSelection = true;
                        this.dragBaseWorld = { x: effectiveWorld.x, y: effectiveWorld.y };
                        this.dragLastWorld = { x: effectiveWorld.x, y: effectiveWorld.y };
                        this.dragMoved = false;
                        this.isBoxSelecting = false;
                    } else if (this.underlay && this.underlay.visible && !this.underlay.locked && this.isPointInsideUnderlay(effectiveWorld.x, effectiveWorld.y)) {
                        // Clicked inside the underlay image!
                        if (!e.shiftKey) this.selectedIds.clear();
                        this.underlay.selected = true;
                        this.isDraggingUnderlay = true;
                        this.dragBaseWorld = { x: effectiveWorld.x, y: effectiveWorld.y };
                        this.dragLastWorld = { x: effectiveWorld.x, y: effectiveWorld.y };
                        this.dragMoved = false;
                        this.isBoxSelecting = false;
                    } else {
                        if (this.underlay) this.underlay.selected = false;
                        if (this.isBoxSelecting) {
                            // Second click finishes 2-click box selection
                            this.isBoxSelecting = false;
                            this.selectByBox(this.selectStart, { x: sx, y: sy }, e.shiftKey);
                            this.selectStart = null;
                            this.selectCurrent = null;
                        } else {
                            if (!e.shiftKey) this.selectedIds.clear();
                            this.isSelecting = true;
                            this.selectStart = { x: sx, y: sy };
                            this.selectCurrent = { x: sx, y: sy };
                        }
                    }
                    this.render();
                    if (window.cadcloneUI && window.cadcloneUI.updatePropertiesPanel) window.cadcloneUI.updatePropertiesPanel();
                }
            }
        });

        window.addEventListener('mouseup', (e) => {
            if (e.button === 1 && this.isPanning) {
                this.isPanning = false;
                c.style.cursor = 'crosshair';
            }
            if (e.button === 0) {
                // Finish Grip Drag-to-Move if mouse was dragged while holding grip
                if (this.activeGrip && this.activeGripIsMouseDown && this.activeGripMoved) {
                    const rect = c.getBoundingClientRect();
                    const eff = this.computePointerWorld(e.clientX - rect.left, e.clientY - rect.top, !!e.shiftKey);
                    this.commitGripEdit(eff);
                    this.activeGripIsMouseDown = false;
                    this.activeGripMoved = false;
                } else {
                    this.activeGripIsMouseDown = false;
                }

                // Finish Underlay Drag-to-Move
                if (this.isDraggingUnderlay) {
                    if (this.dragMoved && this.commandSystem) {
                        this.commandSystem.logHistory('Calco reposicionado.');
                    }
                    this.isDraggingUnderlay = false;
                    this.dragBaseWorld = null;
                    this.dragLastWorld = null;
                    this.dragMoved = false;
                    c.style.cursor = 'crosshair';
                }

                // Finish Drag-to-Move
                if (this.isDraggingSelection) {
                    if (this.dragMoved) {
                        if (this.commandSystem) {
                            this.commandSystem.logHistory(`Movido(s) ${this.selectedIds.size} objeto(s).`);
                        }
                    }
                    this.isDraggingSelection = false;
                    this.dragBaseWorld = null;
                    this.dragLastWorld = null;
                    this.dragMoved = false;
                    c.style.cursor = 'crosshair';
                }

                // Finish Drag Box Selection or start 2-click Box Selection
                if (this.isSelecting) {
                    this.isSelecting = false;
                    if (this.selectStart && this.selectCurrent) {
                        const dx = Math.abs(this.selectCurrent.x - this.selectStart.x);
                        const dy = Math.abs(this.selectCurrent.y - this.selectStart.y);
                        if (dx > 4 || dy > 4) {
                            this.selectByBox(this.selectStart, this.selectCurrent, e.shiftKey);
                            this.selectStart = null;
                            this.selectCurrent = null;
                        } else {
                            this.isBoxSelecting = true;
                        }
                    }
                    this.render();
                    if (window.cadcloneUI && window.cadcloneUI.updatePropertiesPanel) window.cadcloneUI.updatePropertiesPanel();
                }
            }
        });

        c.addEventListener('wheel', (e) => {
            e.preventDefault();
            const rect = c.getBoundingClientRect();
            const sx = e.clientX - rect.left;
            const sy = e.clientY - rect.top;
            const factor = e.deltaY < 0 ? 1.15 : (1 / 1.15);
            this.zoomAt(sx, sy, factor);
        }, { passive: false });

        c.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            if (window.cadcloneUI && window.cadcloneUI.showContextMenu) {
                window.cadcloneUI.showContextMenu(e.clientX, e.clientY);
            }
        });

        c.addEventListener('dblclick', (e) => {
            if (e.button === 1) {
                this.zoomExtents();
                return;
            }
            if (e.button === 0) {
                const rect = c.getBoundingClientRect();
                const sx = e.clientX - rect.left;
                const sy = e.clientY - rect.top;
                let hit = this.findEntityAt(sx, sy);
                if (!hit) {
                    const grip = this.findGripAt(sx, sy);
                    if (grip && grip.entityId) {
                        hit = this.getEntity(grip.entityId);
                    }
                }
                if (hit) {
                    this.clearSelection();
                    this.selectEntityAndGroup(hit, false);
                    if (window.cadcloneUI && window.cadcloneUI.togglePropertiesPanel) {
                        window.cadcloneUI.togglePropertiesPanel(true);
                    }
                    this.render();
                    return;
                }
                if (this.underlay && this.underlay.visible) {
                    const world = this.screenToWorld(sx, sy);
                    if (this.isPointInsideUnderlay(world.x, world.y)) {
                        this.clearSelection();
                        this.underlay.selected = true;
                        if (window.cadcloneUI && window.cadcloneUI.togglePropertiesPanel) {
                            window.cadcloneUI.togglePropertiesPanel(true);
                        }
                        this.render();
                        return;
                    }
                }
                if (!this.commandSystem || !this.commandSystem.currentCommand) {
                    this.zoomExtents();
                }
            }
        });
    }

    // -------------------------------------------------------------
    // Architectural Block System (Item 7)
    // -------------------------------------------------------------
    insertBlock(blockId, insertPtOrX, yOrRotation = 0, rotationRad = 0) {
        let insertPt = { x: 0, y: 0 };
        let rot = 0;
        if (typeof insertPtOrX === 'number') {
            insertPt = { x: insertPtOrX, y: (typeof yOrRotation === 'number' ? yOrRotation : 0) };
            rot = typeof rotationRad === 'number' ? rotationRad : 0;
        } else {
            insertPt = insertPtOrX || { x: 0, y: 0 };
            rot = typeof yOrRotation === 'number' ? yOrRotation : 0;
        }

        const lib = (typeof CADBlockLibrary !== 'undefined') ? CADBlockLibrary : (CADEngine.BlockLibrary || {});
        const blockDef = lib[blockId];
        if (!blockDef) return [];

        this.saveStateForUndo();

        const cos = Math.cos(rot);
        const sin = Math.sin(rot);
        const transformPt = (x, y) => ({
            x: insertPt.x + x * cos - y * sin,
            y: insertPt.y + x * sin + y * cos
        });

        const targetLayer = blockDef.layer || this.activeLayer || '0';
        if (!this.layers[targetLayer]) {
            this.addLayer(targetLayer, blockDef.color || '#ffffff');
        }

        const blockInstanceId = 'blk_' + (this._idCounter++);
        const newEntities = [];
        const newIds = new Set();

        for (const templ of blockDef.entities) {
            const ent = {
                id: this.nextId(),
                layer: targetLayer,
                color: null,
                blockId: blockId,
                blockInstanceId: blockInstanceId
            };

            if (templ.type === 'LINE') {
                const p1 = transformPt(templ.x1, templ.y1);
                const p2 = transformPt(templ.x2, templ.y2);
                Object.assign(ent, { type: 'LINE', x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y });
            } else if (templ.type === 'CIRCLE') {
                const c = transformPt(templ.cx, templ.cy);
                Object.assign(ent, { type: 'CIRCLE', cx: c.x, cy: c.y, r: templ.r });
            } else if (templ.type === 'ARC') {
                const c = transformPt(templ.cx, templ.cy);
                Object.assign(ent, {
                    type: 'ARC',
                    cx: c.x,
                    cy: c.y,
                    r: templ.r,
                    startAngle: (templ.startAngle + rotationRad) % (2 * Math.PI),
                    endAngle: (templ.endAngle + rotationRad) % (2 * Math.PI)
                });
            } else if (templ.type === 'POLYLINE' && templ.points) {
                const pts = templ.points.map(p => transformPt(p.x, p.y));
                Object.assign(ent, { type: 'POLYLINE', points: pts, closed: !!templ.closed });
            } else if (templ.type === 'TEXT') {
                const p = transformPt(templ.x, templ.y);
                Object.assign(ent, {
                    type: 'TEXT',
                    x: p.x,
                    y: p.y,
                    text: templ.text,
                    height: templ.height,
                    rotation: rotationRad
                });
            }

            this.entities.push(ent);
            newEntities.push(ent);
            newIds.add(ent.id);
        }

        this.selectedIds = newIds;
        this.render();
        if (window.cadcloneUI && window.cadcloneUI.updatePropertiesPanel) {
            window.cadcloneUI.updatePropertiesPanel();
        }
        return newEntities;
    }

    getBlockPreviewEntities(blockId, insertPt, rotationRad = 0) {
        const lib = (typeof CADBlockLibrary !== 'undefined') ? CADBlockLibrary : (CADEngine.BlockLibrary || {});
        const blockDef = lib[blockId];
        if (!blockDef) return [];

        const cos = Math.cos(rotationRad);
        const sin = Math.sin(rotationRad);
        const transformPt = (x, y) => ({
            x: insertPt.x + x * cos - y * sin,
            y: insertPt.y + x * sin + y * cos
        });

        const previewList = [];
        for (const templ of blockDef.entities) {
            const ent = { color: '#38bdf8' };
            if (templ.type === 'LINE') {
                const p1 = transformPt(templ.x1, templ.y1);
                const p2 = transformPt(templ.x2, templ.y2);
                Object.assign(ent, { type: 'LINE', x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y });
            } else if (templ.type === 'CIRCLE') {
                const c = transformPt(templ.cx, templ.cy);
                Object.assign(ent, { type: 'CIRCLE', cx: c.x, cy: c.y, r: templ.r });
            } else if (templ.type === 'ARC') {
                const c = transformPt(templ.cx, templ.cy);
                Object.assign(ent, {
                    type: 'ARC',
                    cx: c.x,
                    cy: c.y,
                    r: templ.r,
                    startAngle: (templ.startAngle + rotationRad) % (2 * Math.PI),
                    endAngle: (templ.endAngle + rotationRad) % (2 * Math.PI)
                });
            } else if (templ.type === 'POLYLINE' && templ.points) {
                const pts = templ.points.map(p => transformPt(p.x, p.y));
                Object.assign(ent, { type: 'POLYLINE', points: pts, closed: !!templ.closed });
            } else if (templ.type === 'TEXT') {
                const p = transformPt(templ.x, templ.y);
                Object.assign(ent, {
                    type: 'TEXT',
                    x: p.x,
                    y: p.y,
                    text: templ.text,
                    height: templ.height
                });
            }
            previewList.push(ent);
        }
        return previewList;
    }

    // -------------------------------------------------------------
    // Architectural Model Starter: 25.00m x 10.00m Complete Floor Plan
    // -------------------------------------------------------------
    loadSampleFloorPlan() {
        this.clear();
        const W = 0.15; // Wall thickness (15cm)

        // 1. LOT BOUNDARY (25.00 x 10.00 m)
        this.addLine(0, 0, 25.00, 0, 'Alvenaria');         // Muro frontal
        this.addLine(0, 10.00, 25.00, 10.00, 'Alvenaria'); // Muro fundos
        this.addLine(0, 0, 0, 10.00, 'Alvenaria');         // Divisa esquerda
        this.addLine(25.00, 0, 25.00, 10.00, 'Alvenaria'); // Divisa direita

        // 2. MAIN RESIDENCE EXTERNAL WALLS (X: 5.00 to 19.00, Y: 1.50 to 9.10)
        this.addLine(5.00, 1.50, 19.00, 1.50, 'Alvenaria');
        this.addLine(5.00, 1.50 + W, 19.00, 1.50 + W, 'Alvenaria');

        this.addLine(5.00, 9.10, 19.00, 9.10, 'Alvenaria');
        this.addLine(5.00, 9.10 - W, 19.00, 9.10 - W, 'Alvenaria');

        this.addLine(5.00, 1.50, 5.00, 9.10, 'Alvenaria');
        this.addLine(5.00 + W, 1.50, 5.00 + W, 9.10, 'Alvenaria');

        this.addLine(19.00, 1.50, 19.00, 9.10, 'Alvenaria');
        this.addLine(19.00 - W, 1.50, 19.00 - W, 9.10, 'Alvenaria');

        // 3. MAIN HORIZONTAL INTERNAL DIVIDERS
        // Y = 4.50 (Between Social Area and Mid Utility/Garden/Office Area)
        this.addLine(5.00, 4.50, 19.00, 4.50, 'Alvenaria');
        this.addLine(5.00, 4.50 + W, 19.00, 4.50 + W, 'Alvenaria');

        // Y = 5.85 (Between Mid Area and Bedroom Suites Area)
        this.addLine(5.00, 5.85, 19.00, 5.85, 'Alvenaria');
        this.addLine(5.00, 5.85 + W, 19.00, 5.85 + W, 'Alvenaria');

        // 4. MAIN VERTICAL INTERNAL DIVIDERS
        // Column 1 wall at X = 8.85
        this.addLine(8.85, 4.50, 8.85, 9.10, 'Alvenaria');
        this.addLine(8.85 - W, 4.50, 8.85 - W, 9.10, 'Alvenaria');

        // Column 2 wall at X = 12.15
        this.addLine(12.15, 4.50, 12.15, 9.10, 'Alvenaria');
        this.addLine(12.15 + W, 4.50, 12.15 + W, 9.10, 'Alvenaria');

        // Column 3 wall at X = 16.00
        this.addLine(16.00, 1.50, 16.00, 9.10, 'Alvenaria');
        this.addLine(16.00 - W, 1.50, 16.00 - W, 9.10, 'Alvenaria');

        // 5. EN-SUITE BATHROOMS & JARDIM DE INVERNO (Column 2: 8.85 to 12.15)
        // Divider wall between Suite 1 Bath & Suite 2 Bath at X = 10.50 (Y: 6.85 to 9.10)
        this.addLine(10.50, 6.85, 10.50, 9.10, 'Alvenaria');
        this.addLine(10.50 - W, 6.85, 10.50, 9.10, 'Alvenaria');

        // Horizontal wall separating Baths from Jardim at Y = 6.85
        this.addLine(8.85, 6.85, 12.15, 6.85, 'Alvenaria');
        this.addLine(8.85, 6.85 + W, 12.15, 6.85 + W, 'Alvenaria');

        // Jardim de Inverno glass frame enclosure
        this.addRectangle(8.95, 4.60, 12.05, 6.75, 'Esquadrias');
        this.addRectangle(9.05, 4.70, 11.95, 6.65, 'Esquadrias');

        // Bathroom Social (BANH.) wall at X = 14.10 (Y: 4.50 to 5.85)
        this.addLine(14.10, 4.50, 14.10, 5.85, 'Alvenaria');
        this.addLine(14.10 - W, 4.50, 14.10, 5.85, 'Alvenaria');

        // Closet partition walls in Suite 1 and Suite 2
        this.addLine(7.60, 6.85, 7.60, 9.10, 'Alvenaria');
        this.addLine(13.40, 6.85, 13.40, 9.10, 'Alvenaria');

        // 6. GARAGEM (Carport) & PROJECTION
        this.addLine(0, 4.50, 5.00, 4.50, 'Projecao');
        this.addLine(0, 0, 0.40, 0, 'Alvenaria');
        this.addLine(4.60, 0, 5.00, 0, 'Alvenaria');

        // 7. ESQUADRIAS (DOORS & WINDOWS)
        this.insertBlock('DOOR_80', 5.00, 4.20, -Math.PI / 2);
        this.insertBlock('DOOR_70', 5.80, 4.50, 0);
        this.insertBlock('DOOR_80', 5.30, 5.85, 0);
        this.insertBlock('DOOR_80', 15.20, 5.85, 0);
        this.insertBlock('DOOR_80', 16.30, 5.85, 0);
        this.insertBlock('DOOR_70', 13.80, 4.50, Math.PI / 2);
        this.insertBlock('DOOR_70', 8.85, 7.30, 0);
        this.insertBlock('DOOR_70', 12.15, 7.30, Math.PI);
        this.insertBlock('DOOR_SLIDING', 6.20, 1.50, 0);
        this.insertBlock('DOOR_SLIDING', 13.00, 1.50, 0);
        this.insertBlock('DOOR_SLIDING', 16.00, 2.20, Math.PI / 2);
        this.insertBlock('WINDOW_150', 5.80, 9.10, 0);
        this.insertBlock('WINDOW_150', 13.80, 9.10, 0);
        this.insertBlock('WINDOW_120', 16.80, 9.10, 0);

        // 8. BLOCKS: MOBÍLIA, ELETROS, VEÍCULOS & LAZER
        this.insertBlock('CAR_SEDAN', 2.70, 3.25, 0);
        this.insertBlock('CAR_SUV', 2.70, 1.25, 0);

        this.insertBlock('SOFA_L', 5.40, 1.80, 0);
        this.insertBlock('COFFEE_TABLE', 6.50, 2.70, 0);
        this.insertBlock('TV_RACK', 5.80, 4.00, 0);

        this.insertBlock('ISLAND_COOKTOP', 9.20, 3.20, 0);
        this.insertBlock('KITCHEN_DOUBLE_SINK', 9.50, 1.55, 0);

        this.insertBlock('TABLE_DINING_6', 13.00, 2.50, 0);

        this.insertBlock('ARMCHAIR', 16.80, 3.20, -0.4);
        this.insertBlock('BAR_STOOL', 17.80, 3.60, 0);

        this.insertBlock('LAUNDRY_TUB', 6.20, 5.20, 0);
        this.insertBlock('WASHING_MACHINE', 7.40, 5.20, 0);

        this.insertBlock('PALM_STARBURST', 10.50, 5.65, 0);

        this.insertBlock('BED_KING', 5.40, 6.70, 0);
        this.insertBlock('WARDROBE_3', 7.90, 6.70, Math.PI / 2);

        this.insertBlock('TOILET', 9.60, 8.80, 0);
        this.insertBlock('VANITY_BATH', 9.00, 7.10, 0);
        this.insertBlock('SHOWER_BOX', 8.90, 8.10, 0);

        this.insertBlock('TOILET', 11.40, 8.80, 0);
        this.insertBlock('VANITY_BATH', 11.20, 7.10, 0);
        this.insertBlock('SHOWER_BOX', 11.20, 8.10, 0);

        this.insertBlock('BED_DOUBLE', 13.80, 6.70, 0);
        this.insertBlock('WARDROBE_3', 12.60, 6.70, Math.PI / 2);

        this.insertBlock('TOILET', 13.30, 5.60, 0);
        this.insertBlock('VANITY_BATH', 13.30, 4.60, 0);

        this.insertBlock('DESK_OFFICE', 16.50, 4.65, 0);

        this.insertBlock('BED_SINGLE', 16.50, 7.00, 0);
        this.insertBlock('NIGHTSTAND', 16.50, 6.45, 0);
        this.insertBlock('WARDROBE_3', 18.20, 6.80, Math.PI / 2);

        this.insertBlock('TREE_PLANT_1', 22.50, 7.50, 0);

        this.insertBlock('SWIMMING_POOL', 20.30, 0.70, 0);
        this.insertBlock('LOUNGER_POOL', 20.80, 5.20, -Math.PI / 2);
        this.insertBlock('LOUNGER_POOL', 22.20, 5.20, -Math.PI / 2);

        this.insertBlock('BUSH_ROW', 5.20, 9.35, 0);
        this.insertBlock('BUSH_ROW', 8.20, 9.35, 0);
        this.insertBlock('BUSH_ROW', 12.20, 9.35, 0);
        this.insertBlock('BUSH_ROW', 15.20, 9.35, 0);

        // 9. AMBIENT TEXT LABELS
        const texts = [
            { x: 2.50, y: 4.35, t: 'GARAGEM' },
            { x: 2.10, y: 7.00, t: 'gramado' },
            { x: 6.40, y: 3.60, t: 'SALA' },
            { x: 10.10, y: 2.30, t: 'COZINHA' },
            { x: 13.50, y: 2.30, t: 'JANTAR' },
            { x: 17.20, y: 2.30, t: 'VARANDA' },
            { x: 6.20, y: 4.80, t: 'LAVANDERIA' },
            { x: 10.10, y: 4.90, t: 'JARDIM' },
            { x: 12.80, y: 5.15, t: 'BANH.' },
            { x: 16.80, y: 4.80, t: 'ESCRITÓRIO' },
            { x: 6.00, y: 8.30, t: 'SUÍTE' },
            { x: 7.70, y: 7.80, t: 'closet' },
            { x: 9.20, y: 7.60, t: 'BANH.' },
            { x: 11.60, y: 7.60, t: 'BANH.' },
            { x: 14.50, y: 7.30, t: 'SUÍTE' },
            { x: 12.70, y: 7.80, t: 'closet' },
            { x: 17.20, y: 8.40, t: 'DORM.' },
            { x: 21.50, y: 6.50, t: 'gramado' },
            { x: 22.30, y: 1.90, t: 'piscina' },
            { x: 0.00, y: -0.60, t: 'PLANTA' }
        ];

        for (const item of texts) {
            const h = item.t === 'PLANTA' ? 0.38 : (item.t.startsWith('gram') || item.t.startsWith('pisc') || item.t.startsWith('closet') ? 0.18 : 0.22);
            this.addText(item.x, item.y, item.t, h, 'Textos');
        }

        // 9.1 DESTAQUE DO EXEMPLO DEMONSTRATIVO (Texto em amarelo centralizado no recuo inferior)
        const demoText = this.addText(8.60, 0.65, 'EXEMPLO DEMONSTRATIVO', 0.40, 'Cotas');
        if (demoText) demoText.color = '#ffff00';

        // 10. COTAS DIMENSIONAIS ABNT (DIMLINEAR)
        // Top subdivisions (offset 0.60)
        this.addDimension(0.00, 10.00, 5.00, 10.00, 0.60, 'Cotas');
        this.addDimension(5.00, 10.00, 8.85, 10.00, 0.60, 'Cotas');
        this.addDimension(8.85, 10.00, 12.15, 10.00, 0.60, 'Cotas');
        this.addDimension(12.15, 10.00, 16.00, 10.00, 0.60, 'Cotas');
        this.addDimension(16.00, 10.00, 19.00, 10.00, 0.60, 'Cotas');
        this.addDimension(19.00, 10.00, 25.00, 10.00, 0.60, 'Cotas');

        // Top overall 25,00 m (offset 1.30)
        this.addDimension(0.00, 10.00, 25.00, 10.00, 1.30, 'Cotas');

        // Right subdivisions (offset -0.60 to place outside of X = 25.00)
        this.addDimension(25.00, 9.10, 25.00, 10.00, -0.60, 'Cotas'); // 0.90
        this.addDimension(25.00, 5.85, 25.00, 9.10, -0.60, 'Cotas');  // 3.25
        this.addDimension(25.00, 4.50, 25.00, 5.85, -0.60, 'Cotas');  // 1.35
        this.addDimension(25.00, 1.50, 25.00, 4.50, -0.60, 'Cotas');  // 3.00
        this.addDimension(25.00, 0.00, 25.00, 1.50, -0.60, 'Cotas');  // 1.50

        // Right overall 10,00 m (offset -1.30 to place outside of X = 25.00)
        this.addDimension(25.00, 0.00, 25.00, 10.00, -1.30, 'Cotas');

        // 11. CADCLONE LOGO UNDERLAY (Exibição da marca com calco técnico à esquerda da planta)
        if (typeof Image !== 'undefined') {
            const logoImg = new Image();
            const applyLogoUnderlay = () => {
                this.setUnderlay({
                    type: 'image',
                    fileName: 'cadicon.png',
                    img: logoImg,
                    image: logoImg,
                    src: 'cadicon.png?v=1.6.0',
                    dataUrl: 'cadicon.png?v=1.6.0',
                    x: -16.50,
                    y: -1.00,
                    width: 14.11,
                    height: 14.11,
                    rotation: 0,
                    opacity: 1.0,
                    visible: true,
                    locked: false
                });
                this.zoomExtents();
                if (typeof window !== 'undefined' && window.cadUnderlayManager) {
                    window.cadUnderlayManager.updateHud();
                }
                if (typeof window !== 'undefined' && window.cadcloneUI && typeof window.cadcloneUI.getActiveDocument === 'function') {
                    const curDoc = window.cadcloneUI.getActiveDocument();
                    if (curDoc && curDoc.state) {
                        curDoc.state.underlay = this.underlay;
                        curDoc.state.zoom = this.zoom;
                        curDoc.state.originX = this.originX;
                        curDoc.state.originY = this.originY;
                    }
                }
            };

            logoImg.onload = applyLogoUnderlay;
            logoImg.src = 'cadicon.png?v=1.6.0';
            if (logoImg.complete && logoImg.naturalWidth) {
                applyLogoUnderlay();
            }
        }

        // Center and frame
        this.zoomExtents();
        return this.entities;
    }

    /**
     * High-Resolution Framed Image Export (PNG & JPEG)
     * Renders directly onto an offscreen canvas with solid, 100% opaque background
     * (NO transparency / checkerboard), bounding-box auto-framing (zoom extents),
     * scaled architectural lineweights and crisp text/dimensions.
     */
    renderExportImage(options = {}) {
        const {
            format = 'png',           // 'png' or 'jpeg'
            theme = 'white',          // 'white' (Prancha Técnica) or 'dark' (AutoCAD Model Space)
            width = 2560,             // 1920, 2560, 3840
            fit = 'extents',          // 'extents' or 'currentView'
            includeUnderlay = true,   // include background image/pdf if present
            includeWatermark = true,  // discreet engineering title block tag
            projectName = 'PROJETO RESIDENCIAL',
            author = 'CADClone Engenharia'
        } = options;

        if (typeof document === 'undefined') return null;

        const offCanvas = document.createElement('canvas');
        const offCtx = offCanvas.getContext('2d');
        if (!offCtx) return null;

        let outW = parseInt(width, 10) || 2560;
        let outH = 1440;
        let exportZoom = 50;
        let exportOriginX = 0;
        let exportOriginY = 0;

        if (fit === 'currentView') {
            const scale = outW / (this.canvas.width || 1280);
            outH = Math.max(100, Math.round((this.canvas.height || 720) * scale));
            exportZoom = this.zoom * scale;
            exportOriginX = this.originX * scale;
            exportOriginY = this.originY * scale;
        } else {
            // Auto-fit drawing extents (Bounding box of all visible entities + underlay)
            let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
            let count = 0;

            for (let i = 0; i < this.entities.length; i++) {
                const e = this.entities[i];
                if (this.hiddenEntityIds && this.hiddenEntityIds.has(e.id)) continue;
                const lyr = this.layers[e.layer || '0'] || this.layers['0'];
                if (lyr && lyr.visible === false) continue;

                const bb = e._bb || this.getEntityBoundingBox(e);
                if (!bb || !isFinite(bb.minX) || !isFinite(bb.maxX)) continue;
                const bw = bb.maxX - bb.minX;
                const bh = bb.maxY - bb.minY;
                if (bw > 1000000 || bh > 1000000 || Math.abs(bb.minX) > 5000000 || Math.abs(bb.maxX) > 5000000) continue;

                minX = Math.min(minX, bb.minX);
                minY = Math.min(minY, bb.minY);
                maxX = Math.max(maxX, bb.maxX);
                maxY = Math.max(maxY, bb.maxY);
                count++;
            }

            if (includeUnderlay && this.underlay && this.underlay.visible && (this.underlay.image || this.underlay.img)) {
                const u = this.underlay;
                const uw = u.width || 10;
                const uh = u.height || 10;
                minX = Math.min(minX, u.x);
                minY = Math.min(minY, u.y);
                maxX = Math.max(maxX, u.x + uw);
                maxY = Math.max(maxY, u.y + uh);
                count++;
            }

            if (!isFinite(minX) || count === 0) {
                minX = 0; minY = 0; maxX = 25; maxY = 15;
            }

            const cadW = Math.max(0.5, maxX - minX);
            const cadH = Math.max(0.5, maxY - minY);

            // Compute ideal aspect ratio for canvas
            const rawH = Math.round(outW * (cadH / cadW));
            // Clamp height within 1:3 and 3:1 aspect ratio
            outH = Math.max(Math.round(outW * 0.4), Math.min(Math.round(outW * 1.35), rawH));

            // Margins (6% border margin so drawing doesn't touch the image edges)
            const padX = Math.max(35, Math.round(outW * 0.06));
            const padY = Math.max(35, Math.round(outH * 0.06));
            const usableW = outW - padX * 2;
            const usableH = outH - padY * 2;

            exportZoom = Math.min(usableW / cadW, usableH / cadH);
            const midX = (minX + maxX) / 2;
            const midY = (minY + maxY) / 2;
            exportOriginX = outW / 2 - midX * exportZoom;
            exportOriginY = outH / 2 + midY * exportZoom;
        }

        offCanvas.width = outW;
        offCanvas.height = outH;

        // 1. FILL SOLID, 100% OPAQUE BACKGROUND (ZERO TRANSPARENCY)
        const isWhite = (theme === 'white');
        const bgColor = isWhite ? '#ffffff' : '#18191c';
        offCtx.fillStyle = bgColor;
        offCtx.fillRect(0, 0, outW, outH);

        const scaleFactor = Math.max(1, outW / 1400);

        // Frame border
        if (isWhite) {
            offCtx.strokeStyle = '#cbd5e1';
            offCtx.lineWidth = Math.max(1, 1.5 * scaleFactor);
            const borderPad = Math.round(12 * scaleFactor);
            offCtx.strokeRect(borderPad, borderPad, outW - borderPad * 2, outH - borderPad * 2);
        } else {
            offCtx.strokeStyle = '#2d3748';
            offCtx.lineWidth = Math.max(1, 1 * scaleFactor);
            const borderPad = Math.round(8 * scaleFactor);
            offCtx.strokeRect(borderPad, borderPad, outW - borderPad * 2, outH - borderPad * 2);
        }

        // Temporarily swap engine's view transform so worldToScreen uses export coordinate system
        const prevZoom = this.zoom;
        const prevOriginX = this.originX;
        const prevOriginY = this.originY;

        this.zoom = exportZoom;
        this.originX = exportOriginX;
        this.originY = exportOriginY;

        try {
            // 2. Render Underlay if present & enabled
            if (includeUnderlay && this.underlay && this.underlay.visible && (this.underlay.image || this.underlay.img)) {
                const u = this.underlay;
                const imgObj = u.image || u.img;
                const sTopLeft = this.worldToScreen(u.x, u.y + (u.height || 10));
                const sW = (u.width || 10) * this.zoom;
                const sH = (u.height || 10) * this.zoom;

                offCtx.save();
                offCtx.globalAlpha = (typeof u.opacity === 'number') ? u.opacity : 0.85;
                if (u.rotation) {
                    const centerS = this.worldToScreen(u.x + (u.width || 10) / 2, u.y + (u.height || 10) / 2);
                    offCtx.translate(centerS.x, centerS.y);
                    offCtx.rotate(-u.rotation * Math.PI / 180);
                    offCtx.drawImage(imgObj, -sW / 2, -sH / 2, sW, sH);
                } else {
                    offCtx.drawImage(imgObj, sTopLeft.x, sTopLeft.y, sW, sH);
                }
                offCtx.restore();
            }

            // 3. Render all visible entities with high-res styling
            for (let i = 0; i < this.entities.length; i++) {
                const e = this.entities[i];
                if (this.hiddenEntityIds && this.hiddenEntityIds.has(e.id)) continue;
                const lyr = this.layers[e.layer || '0'] || this.layers['0'];
                if (lyr && lyr.visible === false) continue;

                this._drawEntityForExport(offCtx, e, lyr, isWhite, scaleFactor);
            }

            // 4. Discreet Technical Title Block Footer
            if (includeWatermark) {
                offCtx.save();
                const fontSize = Math.max(10, Math.round(11 * scaleFactor));
                offCtx.font = `600 ${fontSize}px "JetBrains Mono", -apple-system, sans-serif`;
                offCtx.fillStyle = isWhite ? '#64748b' : '#94a3b8';
                offCtx.textAlign = 'right';
                offCtx.textBaseline = 'bottom';
                const dateStr = new Date().toLocaleDateString('pt-BR');
                const tag = `CADCLONE • ${projectName.toUpperCase()} • ${dateStr}`;
                offCtx.fillText(tag, outW - 25 * scaleFactor, outH - 20 * scaleFactor);

                offCtx.textAlign = 'left';
                offCtx.fillText(`ENGENHARIA CIVIL & ARQUITETURA • ALTA RESOLUÇÃO`, 25 * scaleFactor, outH - 20 * scaleFactor);
                offCtx.restore();
            }

        } finally {
            // Always restore engine transform
            this.zoom = prevZoom;
            this.originX = prevOriginX;
            this.originY = prevOriginY;
        }

        const mime = format === 'jpeg' || format === 'jpg' ? 'image/jpeg' : 'image/png';
        const quality = (format === 'jpeg' || format === 'jpg') ? 0.95 : undefined;
        return {
            canvas: offCanvas,
            dataUrl: offCanvas.toDataURL(mime, quality),
            width: outW,
            height: outH,
            format: (format === 'jpeg' || format === 'jpg') ? 'jpeg' : 'png'
        };
    }

    _adaptColorForExport(hexColor, isWhite) {
        if (!isWhite) return hexColor || '#ffffff';
        if (!hexColor) return '#0f172a';
        const c = hexColor.trim().toLowerCase();
        if (c === '#ffffff' || c === '#fff' || c === 'white') return '#0f172a'; // black/charcoal
        if (c === '#ffff00' || c === '#ff0' || c === 'yellow') return '#b45309'; // dark amber for dimensions
        if (c === '#00ffff' || c === '#0ff' || c === 'cyan') return '#0369a1'; // technical architectural blue
        if (c === '#00ff00' || c === '#0f0' || c === 'lime') return '#15803d'; // technical forest green
        if (c === '#00ffc8') return '#0f766e'; // teal
        if (c === '#eab308') return '#b45309';
        if (c === '#facc15') return '#b45309';
        if (c === '#38bdf8') return '#0284c7';
        if (c === '#94a3b8') return '#475569';
        if (c === '#ff00ff' || c === 'magenta') return '#9333ea';

        if (c.startsWith('#') && (c.length === 7 || c.length === 4)) {
            let r = 0, g = 0, b = 0;
            if (c.length === 7) {
                r = parseInt(c.slice(1, 3), 16);
                g = parseInt(c.slice(3, 5), 16);
                b = parseInt(c.slice(5, 7), 16);
            } else {
                r = parseInt(c[1] + c[1], 16);
                g = parseInt(c[2] + c[2], 16);
                b = parseInt(c[3] + c[3], 16);
            }
            const lum = (0.299 * r + 0.587 * g + 0.114 * b);
            if (lum > 210) return '#1e293b';
            if (lum > 165 && g > 180 && r > 180) return '#b45309';
        }
        return hexColor;
    }

    _drawEntityForExport(ctx, e, lyr, isWhite, scaleFactor) {
        const rawColor = e.color || (lyr && lyr.color) || '#ffffff';
        const strokeColor = this._adaptColorForExport(rawColor, isWhite);
        const baseWeight = Math.max(1, (e.lineweight || (lyr && lyr.lineweight) || 1));
        
        let lineWidth = Math.max(1.5, baseWeight * scaleFactor);
        const layerName = ((lyr && lyr.name) || e.layer || '').toUpperCase();
        if (layerName.includes('ALVENARIA') || layerName.includes('ESTRUTURA') || layerName.includes('WALL')) {
            lineWidth = Math.max(lineWidth, 2.5 * scaleFactor);
        }

        ctx.strokeStyle = strokeColor;
        ctx.fillStyle = strokeColor;
        ctx.lineWidth = lineWidth;

        const linetype = this.getEffectiveLinetype(e);
        let hasCustomDash = false;
        if (linetype && linetype !== 'CONTINUOUS') {
            const dash = this.getLineDashPattern(linetype);
            if (dash && dash.length > 0) {
                ctx.setLineDash(dash.map(d => d * scaleFactor));
                hasCustomDash = true;
            }
        }

        if (e.type === 'LINE') {
            const p1 = this.worldToScreen(e.x1, e.y1);
            const p2 = this.worldToScreen(e.x2, e.y2);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
        } else if (e.type === 'CIRCLE') {
            const c = this.worldToScreen(e.cx, e.cy);
            const rPx = e.r * this.zoom;
            ctx.beginPath();
            ctx.arc(c.x, c.y, rPx, 0, Math.PI * 2);
            ctx.stroke();
        } else if (e.type === 'ARC') {
            const c = this.worldToScreen(e.cx, e.cy);
            const rPx = e.r * this.zoom;
            ctx.beginPath();
            ctx.arc(c.x, c.y, rPx, -e.endAngle, -e.startAngle);
            ctx.stroke();
        } else if (e.type === 'POLYLINE' && e.points && e.points.length >= 2) {
            ctx.beginPath();
            const start = this.worldToScreen(e.points[0].x, e.points[0].y);
            ctx.moveTo(start.x, start.y);
            for (let i = 1; i < e.points.length; i++) {
                const p = this.worldToScreen(e.points[i].x, e.points[i].y);
                ctx.lineTo(p.x, p.y);
            }
            if (e.closed) ctx.closePath();
            ctx.stroke();
        } else if (e.type === 'RECTANGLE') {
            const p1 = this.worldToScreen(e.x1, e.y1);
            const p2 = this.worldToScreen(e.x2, e.y2);
            ctx.beginPath();
            ctx.rect(Math.min(p1.x, p2.x), Math.min(p1.y, p2.y), Math.abs(p2.x - p1.x), Math.abs(p2.y - p1.y));
            ctx.stroke();
        } else if (e.type === 'TEXT') {
            const p = this.worldToScreen(e.x, e.y);
            const hPx = Math.max(12 * scaleFactor, (e.height || 0.3) * this.zoom);
            ctx.save();
            ctx.translate(p.x, p.y);
            if (e.rotation) ctx.rotate(-e.rotation);
            ctx.font = `600 ${hPx}px "JetBrains Mono", monospace`;
            ctx.fillText(e.text || '', 0, 0);
            ctx.restore();
        } else if (e.type === 'DIMENSION') {
            const dx = e.x2 - e.x1;
            const dy = e.y2 - e.y1;
            const len = Math.hypot(dx, dy);
            const off = (typeof e.offset === 'number') ? e.offset : 0;
            let nx = 0, ny = 0;
            if (len > 1e-6 && off !== 0) {
                nx = -dy / len;
                ny = dx / len;
            }

            const orig1 = this.worldToScreen(e.x1, e.y1);
            const orig2 = this.worldToScreen(e.x2, e.y2);
            const p1 = this.worldToScreen(e.x1 + nx * off, e.y1 + ny * off);
            const p2 = this.worldToScreen(e.x2 + nx * off, e.y2 + ny * off);

            ctx.save();
            ctx.setLineDash([]);

            // Extension witness lines
            if (Math.abs(off) > 0.05) {
                ctx.beginPath();
                ctx.moveTo(orig1.x, orig1.y);
                ctx.lineTo(p1.x, p1.y);
                ctx.moveTo(orig2.x, orig2.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.lineWidth = Math.max(1, 0.8 * scaleFactor);
                ctx.stroke();
            }

            // Dimension line
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.lineWidth = Math.max(1.2, 1.1 * scaleFactor);
            ctx.stroke();

            // Arrowheads & Text scale (DIMSCALE / DIMTXT)
            const ang = Math.atan2(p2.y - p1.y, p2.x - p1.x);
            const tScale = (typeof e.textScale === 'number' && e.textScale > 0)
                ? e.textScale
                : ((typeof e.textHeight === 'number' && e.textHeight > 0) ? (e.textHeight / 0.22) : 1.0);
            const arrowLen = Math.round(8.5 * scaleFactor * tScale);
            const arrowWing = Math.round(3.2 * scaleFactor * tScale);
            this._drawExportArrowhead(ctx, p1.x, p1.y, ang, arrowLen, arrowWing);
            this._drawExportArrowhead(ctx, p2.x, p2.y, ang + Math.PI, arrowLen, arrowWing);

            // Dimension text (bold, legible, aligned along dimension line)
            const midX = (p1.x + p2.x) / 2;
            const midY = (p1.y + p2.y) / 2;
            let textAng = ang;
            if (textAng > Math.PI / 2 || textAng < -Math.PI / 2) {
                textAng += Math.PI;
            }
            ctx.save();
            ctx.translate(midX, midY);
            ctx.rotate(textAng);
            const textPt = Math.max(10, Math.round(11.5 * scaleFactor * tScale));
            ctx.font = `600 ${textPt}px "JetBrains Mono", monospace`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';
            const txt = e.text || (len.toFixed(2) + 'm');
            ctx.fillText(txt, 0, -3 * scaleFactor * tScale);
            ctx.restore();
            ctx.restore();
        }

        if (hasCustomDash) {
            ctx.setLineDash([]);
        }
    }

    _drawExportArrowhead(ctx, x, y, ang, length, wing) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(ang);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(length, -wing);
        ctx.lineTo(length, wing);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }
}

// -----------------------------------------------------------------
// Standard Architectural & Civil Engineering Block Library Catalog
// -----------------------------------------------------------------
var CADBlockLibrary = (typeof CADBlockLibrary !== 'undefined' && Object.keys(CADBlockLibrary).length > 0) ? CADBlockLibrary : {
    'DOOR_70': {
        id: 'DOOR_70',
        name: 'Porta 70cm - Giro',
        category: 'doors',
        categoryName: 'Esquadrias',
        dimensions: '0.70m x 0.15m',
        layer: 'Esquadrias',
        color: '#ff00ff',
        svgPreview: `<svg viewBox="-0.1 -0.1 0.9 0.9" width="48" height="48" stroke="#ff00ff" stroke-width="0.02" fill="none"><line x1="0" y1="0" x2="0" y2="0.7"/><line x1="0" y1="0" x2="0.7" y2="0"/><path d="M 0.7 0 A 0.7 0.7 0 0 1 0 0.7" stroke-dasharray="0.04,0.04"/></svg>`,
        entities: [
            { type: 'LINE', x1: 0, y1: 0, x2: 0, y2: 0.15 },
            { type: 'LINE', x1: 0.70, y1: 0, x2: 0.70, y2: 0.15 },
            { type: 'LINE', x1: 0, y1: 0, x2: 0, y2: 0.70 },
            { type: 'LINE', x1: 0, y1: 0, x2: 0.70, y2: 0 },
            { type: 'ARC', cx: 0, cy: 0, r: 0.70, startAngle: 0, endAngle: Math.PI / 2 }
        ]
    },
    'DOOR_80': {
        id: 'DOOR_80',
        name: 'Porta 80cm - Giro Padrão',
        category: 'doors',
        categoryName: 'Esquadrias',
        dimensions: '0.80m x 0.15m',
        layer: 'Esquadrias',
        color: '#ff00ff',
        svgPreview: `<svg viewBox="-0.1 -0.1 1.0 1.0" width="48" height="48" stroke="#ff00ff" stroke-width="0.02" fill="none"><line x1="0" y1="0" x2="0" y2="0.8"/><line x1="0" y1="0" x2="0.8" y2="0"/><path d="M 0.8 0 A 0.8 0.8 0 0 1 0 0.8" stroke-dasharray="0.04,0.04"/></svg>`,
        entities: [
            { type: 'LINE', x1: 0, y1: 0, x2: 0, y2: 0.15 },
            { type: 'LINE', x1: 0.80, y1: 0, x2: 0.80, y2: 0.15 },
            { type: 'LINE', x1: 0, y1: 0, x2: 0, y2: 0.80 },
            { type: 'LINE', x1: 0, y1: 0, x2: 0.80, y2: 0 },
            { type: 'ARC', cx: 0, cy: 0, r: 0.80, startAngle: 0, endAngle: Math.PI / 2 }
        ]
    },
    'DOOR_90': {
        id: 'DOOR_90',
        name: 'Porta 90cm - Entrada / PNE',
        category: 'doors',
        categoryName: 'Esquadrias',
        dimensions: '0.90m x 0.15m',
        layer: 'Esquadrias',
        color: '#ff00ff',
        svgPreview: `<svg viewBox="-0.1 -0.1 1.1 1.1" width="48" height="48" stroke="#ff00ff" stroke-width="0.02" fill="none"><line x1="0" y1="0" x2="0" y2="0.9"/><line x1="0" y1="0" x2="0.9" y2="0"/><path d="M 0.9 0 A 0.9 0.9 0 0 1 0 0.9" stroke-dasharray="0.04,0.04"/></svg>`,
        entities: [
            { type: 'LINE', x1: 0, y1: 0, x2: 0, y2: 0.15 },
            { type: 'LINE', x1: 0.90, y1: 0, x2: 0.90, y2: 0.15 },
            { type: 'LINE', x1: 0, y1: 0, x2: 0, y2: 0.90 },
            { type: 'LINE', x1: 0, y1: 0, x2: 0.90, y2: 0 },
            { type: 'ARC', cx: 0, cy: 0, r: 0.90, startAngle: 0, endAngle: Math.PI / 2 }
        ]
    },
    'WINDOW_120': {
        id: 'WINDOW_120',
        name: 'Janela 1.20m - Correr',
        category: 'doors',
        categoryName: 'Esquadrias',
        dimensions: '1.20m x 0.15m',
        layer: 'Esquadrias',
        color: '#ff00ff',
        svgPreview: `<svg viewBox="-0.1 -0.05 1.4 0.25" width="48" height="32" stroke="#ff00ff" stroke-width="0.015" fill="none"><rect x="0" y="0" width="1.2" height="0.15"/><line x1="0" y1="0.05" x2="0.65" y2="0.05"/><line x1="0.55" y1="0.1" x2="1.2" y2="0.1"/></svg>`,
        entities: [
            { type: 'LINE', x1: 0, y1: 0, x2: 1.20, y2: 0 },
            { type: 'LINE', x1: 0, y1: 0.15, x2: 1.20, y2: 0.15 },
            { type: 'LINE', x1: 0, y1: 0, x2: 0, y2: 0.15 },
            { type: 'LINE', x1: 1.20, y1: 0, x2: 1.20, y2: 0.15 },
            { type: 'LINE', x1: 0, y1: 0.05, x2: 0.65, y2: 0.05 },
            { type: 'LINE', x1: 0.55, y1: 0.10, x2: 1.20, y2: 0.10 }
        ]
    },
    'WINDOW_150': {
        id: 'WINDOW_150',
        name: 'Janela 1.50m - Correr',
        category: 'doors',
        categoryName: 'Esquadrias',
        dimensions: '1.50m x 0.15m',
        layer: 'Esquadrias',
        color: '#ff00ff',
        svgPreview: `<svg viewBox="-0.1 -0.05 1.7 0.25" width="48" height="32" stroke="#ff00ff" stroke-width="0.015" fill="none"><rect x="0" y="0" width="1.5" height="0.15"/><line x1="0" y1="0.05" x2="0.8" y2="0.05"/><line x1="0.7" y1="0.1" x2="1.5" y2="0.1"/></svg>`,
        entities: [
            { type: 'LINE', x1: 0, y1: 0, x2: 1.50, y2: 0 },
            { type: 'LINE', x1: 0, y1: 0.15, x2: 1.50, y2: 0.15 },
            { type: 'LINE', x1: 0, y1: 0, x2: 0, y2: 0.15 },
            { type: 'LINE', x1: 1.50, y1: 0, x2: 1.50, y2: 0.15 },
            { type: 'LINE', x1: 0, y1: 0.05, x2: 0.80, y2: 0.05 },
            { type: 'LINE', x1: 0.70, y1: 0.10, x2: 1.50, y2: 0.10 }
        ]
    },
    'TOILET': {
        id: 'TOILET',
        name: 'Vaso Sanitário c/ Caixa',
        category: 'sanitary',
        categoryName: 'Sanitários',
        dimensions: '0.48m x 0.65m',
        layer: 'Hidraulica',
        color: '#3b82f6',
        svgPreview: `<svg viewBox="-0.3 -0.5 0.6 0.7" width="48" height="48" stroke="#3b82f6" stroke-width="0.015" fill="none"><rect x="-0.24" y="0" width="0.48" height="0.18" rx="0.02"/><path d="M -0.18 0 L -0.18 -0.25 A 0.18 0.18 0 0 0 0.18 -0.25 L 0.18 0 Z"/></svg>`,
        entities: [
            { type: 'LINE', x1: -0.24, y1: 0, x2: 0.24, y2: 0 },
            { type: 'LINE', x1: 0.24, y1: 0, x2: 0.24, y2: 0.18 },
            { type: 'LINE', x1: 0.24, y1: 0.18, x2: -0.24, y2: 0.18 },
            { type: 'LINE', x1: -0.24, y1: 0.18, x2: -0.24, y2: 0 },
            { type: 'LINE', x1: -0.18, y1: 0, x2: -0.18, y2: -0.25 },
            { type: 'LINE', x1: 0.18, y1: 0, x2: 0.18, y2: -0.25 },
            { type: 'ARC', cx: 0, cy: -0.25, r: 0.18, startAngle: Math.PI, endAngle: 2 * Math.PI },
            { type: 'ARC', cx: 0, cy: -0.23, r: 0.13, startAngle: Math.PI, endAngle: 2 * Math.PI }
        ]
    },
    'SINK_BATH': {
        id: 'SINK_BATH',
        name: 'Lavatório / Pia Banheiro',
        category: 'sanitary',
        categoryName: 'Sanitários',
        dimensions: '0.60m x 0.45m',
        layer: 'Hidraulica',
        color: '#3b82f6',
        svgPreview: `<svg viewBox="-0.35 -0.5 0.7 0.55" width="48" height="48" stroke="#3b82f6" stroke-width="0.015" fill="none"><rect x="-0.3" y="-0.45" width="0.6" height="0.45"/><circle cx="0" cy="-0.22" r="0.14"/><circle cx="0" cy="-0.08" r="0.025"/></svg>`,
        entities: [
            { type: 'LINE', x1: -0.30, y1: 0, x2: 0.30, y2: 0 },
            { type: 'LINE', x1: 0.30, y1: 0, x2: 0.30, y2: -0.45 },
            { type: 'LINE', x1: 0.30, y1: -0.45, x2: -0.30, y2: -0.45 },
            { type: 'LINE', x1: -0.30, y1: -0.45, x2: -0.30, y2: 0 },
            { type: 'CIRCLE', cx: 0, cy: -0.24, r: 0.15 },
            { type: 'CIRCLE', cx: 0, cy: -0.07, r: 0.025 }
        ]
    },
    'SINK_KITCHEN': {
        id: 'SINK_KITCHEN',
        name: 'Bancada Cozinha c/ Cuba',
        category: 'sanitary',
        categoryName: 'Sanitários',
        dimensions: '1.20m x 0.60m',
        layer: 'Hidraulica',
        color: '#3b82f6',
        svgPreview: `<svg viewBox="-0.1 -0.65 1.3 0.75" width="54" height="32" stroke="#3b82f6" stroke-width="0.015" fill="none"><rect x="0" y="-0.6" width="1.2" height="0.6"/><rect x="0.35" y="-0.5" width="0.5" height="0.4"/><circle cx="0.6" cy="-0.3" r="0.03"/></svg>`,
        entities: [
            { type: 'LINE', x1: 0, y1: 0, x2: 1.20, y2: 0 },
            { type: 'LINE', x1: 1.20, y1: 0, x2: 1.20, y2: -0.60 },
            { type: 'LINE', x1: 1.20, y1: -0.60, x2: 0, y2: -0.60 },
            { type: 'LINE', x1: 0, y1: -0.60, x2: 0, y2: 0 },
            { type: 'LINE', x1: 0.35, y1: -0.10, x2: 0.85, y2: -0.10 },
            { type: 'LINE', x1: 0.85, y1: -0.10, x2: 0.85, y2: -0.50 },
            { type: 'LINE', x1: 0.85, y1: -0.50, x2: 0.35, y2: -0.50 },
            { type: 'LINE', x1: 0.35, y1: -0.50, x2: 0.35, y2: -0.10 },
            { type: 'CIRCLE', cx: 0.60, cy: -0.30, r: 0.035 }
        ]
    },
    'LEVEL_FLOOR': {
        id: 'LEVEL_FLOOR',
        name: 'Nível em Planta (+0.00)',
        category: 'symbols',
        categoryName: 'Símbolos',
        dimensions: '0.40m x 0.40m',
        layer: 'Textos',
        color: '#00ff00',
        svgPreview: `<svg viewBox="-0.3 -0.3 0.6 0.6" width="48" height="48" stroke="#00ff00" stroke-width="0.02" fill="none"><circle cx="0" cy="0" r="0.2"/><line x1="-0.25" y1="0" x2="0.25" y2="0"/><line x1="0" y1="-0.25" x2="0" y2="0.25"/></svg>`,
        entities: [
            { type: 'CIRCLE', cx: 0, cy: 0, r: 0.20 },
            { type: 'LINE', x1: -0.28, y1: 0, x2: 0.28, y2: 0 },
            { type: 'LINE', x1: 0, y1: -0.28, x2: 0, y2: 0.28 },
            { type: 'TEXT', x: 0.28, y: 0.08, text: '+0.00', height: 0.22 }
        ]
    },
    'NORTH_ARROW': {
        id: 'NORTH_ARROW',
        name: 'Indicação de Norte',
        category: 'symbols',
        categoryName: 'Símbolos',
        dimensions: '0.60m x 0.60m',
        layer: 'Textos',
        color: '#00ff00',
        svgPreview: `<svg viewBox="-0.35 -0.35 0.7 0.7" width="48" height="48" stroke="#00ff00" stroke-width="0.02" fill="none"><circle cx="0" cy="0" r="0.3"/><polygon points="0,-0.28 -0.09,0.15 0,0.05 0.09,0.15" fill="#00ff00"/></svg>`,
        entities: [
            { type: 'CIRCLE', cx: 0, cy: 0, r: 0.30 },
            { type: 'POLYLINE', points: [{ x: 0, y: 0.28 }, { x: -0.09, y: -0.15 }, { x: 0, y: -0.05 }, { x: 0.09, y: -0.15 }], closed: true },
            { type: 'TEXT', x: -0.05, y: 0.35, text: 'N', height: 0.22 }
        ]
    },

    // --- VEÍCULOS ---
    'CAR_SEDAN': {
        id: 'CAR_SEDAN',
        name: 'Carro Sedan - Planta',
        category: 'vehicles',
        categoryName: 'Veículos',
        dimensions: '4.30m x 1.80m',
        layer: 'Veiculos',
        color: '#38bdf8',
        svgPreview: `<svg viewBox="-2.3 -1.2 4.6 2.4" width="60" height="32" stroke="#38bdf8" stroke-width="0.08" fill="none"><rect x="-2.0" y="-0.85" width="4.0" height="1.7" rx="0.4"/><line x1="0.5" y1="-0.7" x2="0.8" y2="0.7"/><line x1="-0.7" y1="-0.7" x2="-0.9" y2="0.7"/><line x1="0.8" y1="0" x2="1.9" y2="0"/></svg>`,
        entities: [
            // Body contour
            { type: 'POLYLINE', points: [
                { x: 2.10, y: 0.60 }, { x: 2.15, y: 0.30 }, { x: 2.15, y: -0.30 }, { x: 2.10, y: -0.60 },
                { x: 1.85, y: -0.85 }, { x: 1.20, y: -0.88 }, { x: -1.40, y: -0.88 }, { x: -1.95, y: -0.85 },
                { x: -2.15, y: -0.50 }, { x: -2.15, y: 0.50 }, { x: -1.95, y: 0.85 }, { x: -1.40, y: 0.88 },
                { x: 1.20, y: 0.88 }, { x: 1.85, y: 0.85 }
            ], closed: true },
            // Windshield (front)
            { type: 'POLYLINE', points: [{ x: 0.55, y: 0.74 }, { x: 0.85, y: 0.62 }, { x: 0.85, y: -0.62 }, { x: 0.55, y: -0.74 }], closed: false },
            // Rear window
            { type: 'POLYLINE', points: [{ x: -0.85, y: 0.74 }, { x: -1.15, y: 0.62 }, { x: -1.15, y: -0.62 }, { x: -0.85, y: -0.74 }], closed: false },
            // Roof side lines
            { type: 'LINE', x1: 0.55, y1: 0.74, x2: -0.85, y2: 0.74 },
            { type: 'LINE', x1: 0.55, y1: -0.74, x2: -0.85, y2: -0.74 },
            // Hood & trunk centerlines
            { type: 'LINE', x1: 1.0, y1: 0, x2: 2.10, y2: 0 },
            { type: 'LINE', x1: -1.25, y1: 0, x2: -2.10, y2: 0 },
            // Side mirrors
            { type: 'LINE', x1: 0.75, y1: 0.88, x2: 0.85, y2: 1.04 },
            { type: 'LINE', x1: 0.75, y1: -0.88, x2: 0.85, y2: -1.04 },
            // 4 Wheels
            { type: 'POLYLINE', points: [{ x: 1.0, y: 0.70 }, { x: 1.5, y: 0.70 }, { x: 1.5, y: 0.88 }, { x: 1.0, y: 0.88 }], closed: true },
            { type: 'POLYLINE', points: [{ x: 1.0, y: -0.88 }, { x: 1.5, y: -0.88 }, { x: 1.5, y: -0.70 }, { x: 1.0, y: -0.70 }], closed: true },
            { type: 'POLYLINE', points: [{ x: -1.5, y: 0.70 }, { x: -1.0, y: 0.70 }, { x: -1.0, y: 0.88 }, { x: -1.5, y: 0.88 }], closed: true },
            { type: 'POLYLINE', points: [{ x: -1.5, y: -0.88 }, { x: -1.0, y: -0.88 }, { x: -1.0, y: -0.70 }, { x: -1.5, y: -0.70 }], closed: true }
        ]
    },

    'CAR_SUV': {
        id: 'CAR_SUV',
        name: 'Veículo SUV / Camionete',
        category: 'vehicles',
        categoryName: 'Veículos',
        dimensions: '4.30m x 1.85m',
        layer: 'Veiculos',
        color: '#38bdf8',
        svgPreview: `<svg viewBox="-2.4 -1.2 4.8 2.4" width="60" height="30" stroke="#38bdf8" stroke-width="0.08" fill="none"><rect x="-1.9" y="-0.88" width="4.0" height="1.76" rx="0.3"/><circle cx="-1.92" cy="0" r="0.22"/><line x1="0.5" y1="-0.7" x2="0.8" y2="0.7"/><line x1="-0.8" y1="-0.7" x2="-1.0" y2="0.7"/></svg>`,
        entities: [
            { type: 'POLYLINE', points: [
                { x: 2.11, y: 0.62 }, { x: 2.15, y: 0.28 }, { x: 2.15, y: -0.28 }, { x: 2.11, y: -0.62 },
                { x: 1.89, y: -0.87 }, { x: 1.33, y: -0.90 }, { x: -1.27, y: -0.90 }, { x: -1.75, y: -0.85 },
                { x: -1.88, y: -0.52 }, { x: -1.88, y: 0.52 }, { x: -1.75, y: 0.85 }, { x: -1.27, y: 0.90 },
                { x: 1.33, y: 0.90 }, { x: 1.89, y: 0.87 }
            ], closed: true },
            { type: 'POLYLINE', points: [{ x: 0.55, y: 0.74 }, { x: 0.85, y: 0.65 }, { x: 0.85, y: -0.65 }, { x: 0.55, y: -0.74 }], closed: false },
            { type: 'POLYLINE', points: [{ x: -0.90, y: 0.74 }, { x: -1.20, y: 0.65 }, { x: -1.20, y: -0.65 }, { x: -0.90, y: -0.74 }], closed: false },
            { type: 'LINE', x1: 0.55, y1: 0.74, x2: -0.90, y2: 0.74 },
            { type: 'LINE', x1: 0.55, y1: -0.74, x2: -0.90, y2: -0.74 },
            // Roof rack bars
            { type: 'LINE', x1: -0.70, y1: 0.55, x2: 0.45, y2: 0.55 },
            { type: 'LINE', x1: -0.70, y1: -0.55, x2: 0.45, y2: -0.55 },
            // Spare tire at rear (tucked flush with rear bumper at -2.15)
            { type: 'CIRCLE', cx: -1.92, cy: 0, r: 0.23 },
            // Mirrors
            { type: 'LINE', x1: 0.75, y1: 0.90, x2: 0.85, y2: 1.05 },
            { type: 'LINE', x1: 0.75, y1: -0.90, x2: 0.85, y2: -1.05 },
            // Wheels
            { type: 'POLYLINE', points: [{ x: 1.0, y: 0.70 }, { x: 1.55, y: 0.70 }, { x: 1.55, y: 0.90 }, { x: 1.0, y: 0.90 }], closed: true },
            { type: 'POLYLINE', points: [{ x: 1.0, y: -0.90 }, { x: 1.55, y: -0.90 }, { x: 1.55, y: -0.70 }, { x: 1.0, y: -0.70 }], closed: true },
            { type: 'POLYLINE', points: [{ x: -1.55, y: 0.70 }, { x: -1.0, y: 0.70 }, { x: -1.0, y: 0.90 }, { x: -1.55, y: 0.90 }], closed: true },
            { type: 'POLYLINE', points: [{ x: -1.55, y: -0.90 }, { x: -1.0, y: -0.90 }, { x: -1.0, y: -0.70 }, { x: -1.55, y: -0.70 }], closed: true }
        ]
    },

    'MOTORCYCLE': {
        id: 'MOTORCYCLE',
        name: 'Moto / Motocicleta - Planta',
        category: 'vehicles',
        categoryName: 'Veículos',
        dimensions: '2.10m x 0.80m',
        layer: 'Veiculos',
        color: '#38bdf8',
        svgPreview: `<svg viewBox="-1.2 -0.5 2.4 1.0" width="54" height="26" stroke="#38bdf8" stroke-width="0.05" fill="none"><rect x="0.6" y="-0.07" width="0.45" height="0.14"/><rect x="-1.05" y="-0.07" width="0.45" height="0.14"/><line x1="0.5" y1="-0.35" x2="0.5" y2="0.35"/><ellipse cx="0.2" cy="0" rx="0.3" ry="0.15"/></svg>`,
        entities: [
            // Front & rear wheels
            { type: 'POLYLINE', points: [{ x: 0.65, y: -0.06 }, { x: 1.05, y: -0.06 }, { x: 1.05, y: 0.06 }, { x: 0.65, y: 0.06 }], closed: true },
            { type: 'POLYLINE', points: [{ x: -1.05, y: -0.08 }, { x: -0.60, y: -0.08 }, { x: -0.60, y: 0.08 }, { x: -1.05, y: 0.08 }], closed: true },
            // Handlebars & mirrors
            { type: 'LINE', x1: 0.50, y1: -0.38, x2: 0.50, y2: 0.38 },
            { type: 'CIRCLE', cx: 0.48, cy: -0.38, r: 0.05 },
            { type: 'CIRCLE', cx: 0.48, cy: 0.38, r: 0.05 },
            // Tank & frame
            { type: 'POLYLINE', points: [{ x: 0.05, y: -0.18 }, { x: 0.45, y: -0.15 }, { x: 0.48, y: 0 }, { x: 0.45, y: 0.15 }, { x: 0.05, y: 0.18 }], closed: true },
            // Seat
            { type: 'POLYLINE', points: [{ x: -0.55, y: -0.14 }, { x: 0.05, y: -0.16 }, { x: 0.05, y: 0.16 }, { x: -0.55, y: 0.14 }], closed: true },
            // Headlight arc
            { type: 'ARC', cx: 0.95, cy: 0, r: 0.10, startAngle: -Math.PI / 2, endAngle: Math.PI / 2 }
        ]
    },

    'BICYCLE': {
        id: 'BICYCLE',
        name: 'Bicicleta - Planta',
        category: 'vehicles',
        categoryName: 'Veículos',
        dimensions: '1.75m x 0.60m',
        layer: 'Veiculos',
        color: '#38bdf8',
        svgPreview: `<svg viewBox="-1.0 -0.4 2.0 0.8" width="50" height="24" stroke="#38bdf8" stroke-width="0.04" fill="none"><line x1="0.55" y1="0" x2="0.85" y2="0"/><line x1="-0.85" y1="0" x2="-0.55" y2="0"/><line x1="-0.55" y1="0" x2="0.55" y2="0"/><line x1="0.45" y1="-0.28" x2="0.45" y2="0.28"/></svg>`,
        entities: [
            { type: 'LINE', x1: 0.58, y1: 0, x2: 0.88, y2: 0 },
            { type: 'LINE', x1: -0.88, y1: 0, x2: -0.58, y2: 0 },
            { type: 'LINE', x1: -0.58, y1: 0, x2: 0.58, y2: 0 },
            { type: 'LINE', x1: 0.48, y1: -0.28, x2: 0.48, y2: 0.28 },
            { type: 'LINE', x1: -0.05, y1: -0.16, x2: -0.05, y2: 0.16 },
            { type: 'POLYLINE', points: [{ x: -0.35, y: -0.08 }, { x: -0.15, y: 0 }, { x: -0.35, y: 0.08 }], closed: true }
        ]
    },

    // --- PAISAGISMO & VEGETAÇÃO ---
    'TREE_PLANT_1': {
        id: 'TREE_PLANT_1',
        name: 'Árvore Frondosa - Planta',
        category: 'vegetation',
        categoryName: 'Paisagismo',
        dimensions: 'Ø 3.00m',
        layer: 'Vegetacao',
        color: '#22c55e',
        svgPreview: `<svg viewBox="-1.6 -1.6 3.2 3.2" width="48" height="48" stroke="#22c55e" stroke-width="0.08" fill="none"><circle cx="0" cy="0" r="1.45"/><circle cx="0" cy="0" r="0.2" fill="#22c55e"/><circle cx="0.6" cy="0.6" r="0.6"/><circle cx="-0.6" cy="0.6" r="0.6"/><circle cx="0" cy="-0.8" r="0.5"/></svg>`,
        entities: [
            { type: 'CIRCLE', cx: 0, cy: 0, r: 1.50 },
            { type: 'CIRCLE', cx: 0, cy: 0, r: 0.22 },
            // Leaf crown lobes
            { type: 'CIRCLE', cx: 0.75, cy: 0.65, r: 0.65 },
            { type: 'CIRCLE', cx: -0.75, cy: 0.65, r: 0.65 },
            { type: 'CIRCLE', cx: 0.85, cy: -0.55, r: 0.60 },
            { type: 'CIRCLE', cx: -0.85, cy: -0.55, r: 0.60 },
            { type: 'CIRCLE', cx: 0, cy: -1.0, r: 0.55 },
            { type: 'CIRCLE', cx: 0, cy: 1.0, r: 0.55 },
            // Branches
            { type: 'LINE', x1: 0, y1: 0, x2: 0.70, y2: 0.70 },
            { type: 'LINE', x1: 0, y1: 0, x2: -0.70, y2: 0.70 },
            { type: 'LINE', x1: 0, y1: 0, x2: 0.70, y2: -0.65 },
            { type: 'LINE', x1: 0, y1: 0, x2: -0.70, y2: -0.65 }
        ]
    },

    'TREE_PLANT_2': {
        id: 'TREE_PLANT_2',
        name: 'Árvore Média / Arbusto',
        category: 'vegetation',
        categoryName: 'Paisagismo',
        dimensions: 'Ø 1.80m',
        layer: 'Vegetacao',
        color: '#22c55e',
        svgPreview: `<svg viewBox="-1.0 -1.0 2.0 2.0" width="48" height="48" stroke="#22c55e" stroke-width="0.06" fill="none"><circle cx="0" cy="0" r="0.9"/><circle cx="0" cy="0" r="0.65" stroke-dasharray="0.1,0.1"/><circle cx="0" cy="0" r="0.15" fill="#22c55e"/></svg>`,
        entities: [
            { type: 'CIRCLE', cx: 0, cy: 0, r: 0.90 },
            { type: 'CIRCLE', cx: 0, cy: 0, r: 0.65 },
            { type: 'CIRCLE', cx: 0, cy: 0, r: 0.14 },
            { type: 'LINE', x1: 0, y1: 0, x2: 0.50, y2: 0.50 },
            { type: 'LINE', x1: 0, y1: 0, x2: -0.50, y2: 0.50 },
            { type: 'LINE', x1: 0, y1: 0, x2: 0.50, y2: -0.50 },
            { type: 'LINE', x1: 0, y1: 0, x2: -0.50, y2: -0.50 }
        ]
    },

    'PALM_TREE': {
        id: 'PALM_TREE',
        name: 'Palmeira Tropical - Planta',
        category: 'vegetation',
        categoryName: 'Paisagismo',
        dimensions: 'Ø 2.50m',
        layer: 'Vegetacao',
        color: '#22c55e',
        svgPreview: `<svg viewBox="-1.4 -1.4 2.8 2.8" width="48" height="48" stroke="#22c55e" stroke-width="0.06" fill="none"><circle cx="0" cy="0" r="0.22" fill="#22c55e"/><line x1="0" y1="0" x2="1.2" y2="0"/><line x1="0" y1="0" x2="-1.2" y2="0"/><line x1="0" y1="0" x2="0" y2="1.2"/><line x1="0" y1="0" x2="0" y2="-1.2"/><line x1="0" y1="0" x2="0.85" y2="0.85"/><line x1="0" y1="0" x2="-0.85" y2="0.85"/><line x1="0" y1="0" x2="0.85" y2="-0.85"/><line x1="0" y1="0" x2="-0.85" y2="-0.85"/></svg>`,
        entities: [
            { type: 'CIRCLE', cx: 0, cy: 0, r: 0.22 },
            // 8 radial fronds with herringbone leaflet pairs
            { type: 'LINE', x1: 0, y1: 0, x2: 1.25, y2: 0 },
            { type: 'LINE', x1: 0, y1: 0, x2: -1.25, y2: 0 },
            { type: 'LINE', x1: 0, y1: 0, x2: 0, y2: 1.25 },
            { type: 'LINE', x1: 0, y1: 0, x2: 0, y2: -1.25 },
            { type: 'LINE', x1: 0, y1: 0, x2: 0.88, y2: 0.88 },
            { type: 'LINE', x1: 0, y1: 0, x2: -0.88, y2: 0.88 },
            { type: 'LINE', x1: 0, y1: 0, x2: 0.88, y2: -0.88 },
            { type: 'LINE', x1: 0, y1: 0, x2: -0.88, y2: -0.88 }
        ]
    },

    'TREE_ELEV': {
        id: 'TREE_ELEV',
        name: 'Árvore em Fachada / Elevação',
        category: 'vegetation',
        categoryName: 'Paisagismo',
        dimensions: '3.00m x 4.50m',
        layer: 'Vegetacao',
        color: '#22c55e',
        svgPreview: `<svg viewBox="-1.6 -0.2 3.2 4.8" width="36" height="52" stroke="#22c55e" stroke-width="0.08" fill="none"><line x1="-1.4" y1="0" x2="1.4" y2="0"/><polygon points="-0.2,0 -0.15,1.8 0.15,1.8 0.2,0"/><circle cx="0" cy="3.0" r="1.3"/><circle cx="-0.5" cy="3.2" r="0.7"/><circle cx="0.5" cy="3.1" r="0.7"/></svg>`,
        entities: [
            { type: 'LINE', x1: -1.50, y1: 0, x2: 1.50, y2: 0 },
            { type: 'POLYLINE', points: [{ x: -0.22, y: 0 }, { x: -0.15, y: 1.80 }, { x: 0.15, y: 1.80 }, { x: 0.22, y: 0 }], closed: true },
            { type: 'CIRCLE', cx: 0, cy: 3.0, r: 1.40 },
            { type: 'CIRCLE', cx: -0.65, cy: 3.20, r: 0.75 },
            { type: 'CIRCLE', cx: 0.65, cy: 3.10, r: 0.75 },
            { type: 'CIRCLE', cx: 0, cy: 3.50, r: 0.70 }
        ]
    },

    // --- MOBILIÁRIO ---
    'SOFA_3': {
        id: 'SOFA_3',
        name: 'Sofá 3 Lugares - Planta',
        category: 'furniture',
        categoryName: 'Mobiliário',
        dimensions: '2.10m x 0.85m',
        layer: 'Mobiliario',
        color: '#f59e0b',
        svgPreview: `<svg viewBox="-0.1 -0.1 2.3 1.05" width="56" height="28" stroke="#f59e0b" stroke-width="0.04" fill="none"><rect x="0" y="0" width="2.1" height="0.85"/><line x1="0" y1="0.68" x2="2.1" y2="0.68"/><line x1="0.18" y1="0" x2="0.18" y2="0.68"/><line x1="1.92" y1="0" x2="1.92" y2="0.68"/><line x1="0.76" y1="0" x2="0.76" y2="0.68"/><line x1="1.34" y1="0" x2="1.34" y2="0.68"/></svg>`,
        entities: [
            { type: 'LINE', x1: 0, y1: 0, x2: 2.10, y2: 0 },
            { type: 'LINE', x1: 2.10, y1: 0, x2: 2.10, y2: 0.85 },
            { type: 'LINE', x1: 2.10, y1: 0.85, x2: 0, y2: 0.85 },
            { type: 'LINE', x1: 0, y1: 0.85, x2: 0, y2: 0 },
            { type: 'LINE', x1: 0, y1: 0.68, x2: 2.10, y2: 0.68 },
            { type: 'LINE', x1: 0.18, y1: 0, x2: 0.18, y2: 0.68 },
            { type: 'LINE', x1: 1.92, y1: 0, x2: 1.92, y2: 0.68 },
            { type: 'LINE', x1: 0.76, y1: 0, x2: 0.76, y2: 0.68 },
            { type: 'LINE', x1: 1.34, y1: 0, x2: 1.34, y2: 0.68 }
        ]
    },

    'SOFA_2': {
        id: 'SOFA_2',
        name: 'Sofá 2 Lugares - Planta',
        category: 'furniture',
        categoryName: 'Mobiliário',
        dimensions: '1.50m x 0.85m',
        layer: 'Mobiliario',
        color: '#f59e0b',
        svgPreview: `<svg viewBox="-0.1 -0.1 1.7 1.05" width="48" height="30" stroke="#f59e0b" stroke-width="0.04" fill="none"><rect x="0" y="0" width="1.5" height="0.85"/><line x1="0" y1="0.68" x2="1.5" y2="0.68"/><line x1="0.18" y1="0" x2="0.18" y2="0.68"/><line x1="1.32" y1="0" x2="1.32" y2="0.68"/><line x1="0.75" y1="0" x2="0.75" y2="0.68"/></svg>`,
        entities: [
            { type: 'LINE', x1: 0, y1: 0, x2: 1.50, y2: 0 },
            { type: 'LINE', x1: 1.50, y1: 0, x2: 1.50, y2: 0.85 },
            { type: 'LINE', x1: 1.50, y1: 0.85, x2: 0, y2: 0.85 },
            { type: 'LINE', x1: 0, y1: 0.85, x2: 0, y2: 0 },
            { type: 'LINE', x1: 0, y1: 0.68, x2: 1.50, y2: 0.68 },
            { type: 'LINE', x1: 0.18, y1: 0, x2: 0.18, y2: 0.68 },
            { type: 'LINE', x1: 1.32, y1: 0, x2: 1.32, y2: 0.68 },
            { type: 'LINE', x1: 0.75, y1: 0, x2: 0.75, y2: 0.68 }
        ]
    },

    'ARMCHAIR': {
        id: 'ARMCHAIR',
        name: 'Poltrona Individual',
        category: 'furniture',
        categoryName: 'Mobiliário',
        dimensions: '0.85m x 0.85m',
        layer: 'Mobiliario',
        color: '#f59e0b',
        svgPreview: `<svg viewBox="-0.1 -0.1 1.05 1.05" width="40" height="40" stroke="#f59e0b" stroke-width="0.04" fill="none"><rect x="0" y="0" width="0.85" height="0.85"/><line x1="0" y1="0.68" x2="0.85" y2="0.68"/><line x1="0.16" y1="0" x2="0.16" y2="0.68"/><line x1="0.69" y1="0" x2="0.69" y2="0.68"/></svg>`,
        entities: [
            { type: 'LINE', x1: 0, y1: 0, x2: 0.85, y2: 0 },
            { type: 'LINE', x1: 0.85, y1: 0, x2: 0.85, y2: 0.85 },
            { type: 'LINE', x1: 0.85, y1: 0.85, x2: 0, y2: 0.85 },
            { type: 'LINE', x1: 0, y1: 0.85, x2: 0, y2: 0 },
            { type: 'LINE', x1: 0, y1: 0.68, x2: 0.85, y2: 0.68 },
            { type: 'LINE', x1: 0.16, y1: 0, x2: 0.16, y2: 0.68 },
            { type: 'LINE', x1: 0.69, y1: 0, x2: 0.69, y2: 0.68 }
        ]
    },

    'TABLE_DINING_6': {
        id: 'TABLE_DINING_6',
        name: 'Mesa de Jantar 6 Cadeiras',
        category: 'furniture',
        categoryName: 'Mobiliário',
        dimensions: '1.60m x 1.25m',
        layer: 'Mobiliario',
        color: '#f59e0b',
        svgPreview: `<svg viewBox="-0.1 -0.1 1.8 1.45" width="54" height="42" stroke="#f59e0b" stroke-width="0.035" fill="none"><rect x="0" y="0.18" width="1.6" height="0.89"/><rect x="0.15" y="0" width="0.38" height="0.18"/><rect x="0.61" y="0" width="0.38" height="0.18"/><rect x="1.07" y="0" width="0.38" height="0.18"/><rect x="0.15" y="1.07" width="0.38" height="0.18"/><rect x="0.61" y="1.07" width="0.38" height="0.18"/><rect x="1.07" y="1.07" width="0.38" height="0.18"/></svg>`,
        entities: [
            // Table top
            { type: 'LINE', x1: 0, y1: 0.18, x2: 1.60, y2: 0.18 },
            { type: 'LINE', x1: 1.60, y1: 0.18, x2: 1.60, y2: 1.07 },
            { type: 'LINE', x1: 1.60, y1: 1.07, x2: 0, y2: 1.07 },
            { type: 'LINE', x1: 0, y1: 1.07, x2: 0, y2: 0.18 },
            // 3 Bottom chairs
            { type: 'POLYLINE', points: [{ x: 0.15, y: 0.18 }, { x: 0.15, y: 0 }, { x: 0.53, y: 0 }, { x: 0.53, y: 0.18 }], closed: false },
            { type: 'POLYLINE', points: [{ x: 0.61, y: 0.18 }, { x: 0.61, y: 0 }, { x: 0.99, y: 0 }, { x: 0.99, y: 0.18 }], closed: false },
            { type: 'POLYLINE', points: [{ x: 1.07, y: 0.18 }, { x: 1.07, y: 0 }, { x: 1.45, y: 0 }, { x: 1.45, y: 0.18 }], closed: false },
            // 3 Top chairs
            { type: 'POLYLINE', points: [{ x: 0.15, y: 1.07 }, { x: 0.15, y: 1.25 }, { x: 0.53, y: 1.25 }, { x: 0.53, y: 1.07 }], closed: false },
            { type: 'POLYLINE', points: [{ x: 0.61, y: 1.07 }, { x: 0.61, y: 1.25 }, { x: 0.99, y: 1.25 }, { x: 0.99, y: 1.07 }], closed: false },
            { type: 'POLYLINE', points: [{ x: 1.07, y: 1.07 }, { x: 1.07, y: 1.25 }, { x: 1.45, y: 1.25 }, { x: 1.45, y: 1.07 }], closed: false }
        ]
    },

    'TABLE_DINING_4': {
        id: 'TABLE_DINING_4',
        name: 'Mesa de Jantar 4 Cadeiras',
        category: 'furniture',
        categoryName: 'Mobiliário',
        dimensions: '1.20m x 1.20m',
        layer: 'Mobiliario',
        color: '#f59e0b',
        svgPreview: `<svg viewBox="-0.1 -0.1 1.4 1.4" width="46" height="46" stroke="#f59e0b" stroke-width="0.035" fill="none"><rect x="0.2" y="0.2" width="0.8" height="0.8"/><rect x="0.38" y="0.02" width="0.44" height="0.18"/><rect x="0.38" y="1.0" width="0.44" height="0.18"/><rect x="0.02" y="0.38" width="0.18" height="0.44"/><rect x="1.0" y="0.38" width="0.18" height="0.44"/></svg>`,
        entities: [
            // Table top
            { type: 'LINE', x1: 0.20, y1: 0.20, x2: 1.00, y2: 0.20 },
            { type: 'LINE', x1: 1.00, y1: 0.20, x2: 1.00, y2: 1.00 },
            { type: 'LINE', x1: 1.00, y1: 1.00, x2: 0.20, y2: 1.00 },
            { type: 'LINE', x1: 0.20, y1: 1.00, x2: 0.20, y2: 0.20 },
            // 4 Chairs
            { type: 'POLYLINE', points: [{ x: 0.38, y: 0.20 }, { x: 0.38, y: 0.02 }, { x: 0.82, y: 0.02 }, { x: 0.82, y: 0.20 }], closed: false },
            { type: 'POLYLINE', points: [{ x: 0.38, y: 1.00 }, { x: 0.38, y: 1.18 }, { x: 0.82, y: 1.18 }, { x: 0.82, y: 1.00 }], closed: false },
            { type: 'POLYLINE', points: [{ x: 0.20, y: 0.38 }, { x: 0.02, y: 0.38 }, { x: 0.02, y: 0.82 }, { x: 0.20, y: 0.82 }], closed: false },
            { type: 'POLYLINE', points: [{ x: 1.00, y: 0.38 }, { x: 1.18, y: 0.38 }, { x: 1.18, y: 0.82 }, { x: 1.00, y: 0.82 }], closed: false }
        ]
    },

    'BED_DOUBLE': {
        id: 'BED_DOUBLE',
        name: 'Cama Casal Queen - Planta',
        category: 'furniture',
        categoryName: 'Mobiliário',
        dimensions: '1.60m x 2.00m',
        layer: 'Mobiliario',
        color: '#f59e0b',
        svgPreview: `<svg viewBox="-0.1 -0.1 1.8 2.2" width="38" height="48" stroke="#f59e0b" stroke-width="0.05" fill="none"><rect x="0" y="0" width="1.6" height="0.1"/><rect x="0" y="0.1" width="1.6" height="1.9"/><rect x="0.1" y="0.15" width="0.65" height="0.4" rx="0.05"/><rect x="0.85" y="0.15" width="0.65" height="0.4" rx="0.05"/><line x1="0" y1="0.8" x2="1.6" y2="0.8"/></svg>`,
        entities: [
            // Headboard
            { type: 'LINE', x1: 0, y1: 0, x2: 1.60, y2: 0 },
            { type: 'LINE', x1: 1.60, y1: 0, x2: 1.60, y2: 0.10 },
            { type: 'LINE', x1: 1.60, y1: 0.10, x2: 0, y2: 0.10 },
            { type: 'LINE', x1: 0, y1: 0.10, x2: 0, y2: 0 },
            // Mattress
            { type: 'LINE', x1: 0, y1: 0.10, x2: 1.60, y2: 0.10 },
            { type: 'LINE', x1: 1.60, y1: 0.10, x2: 1.60, y2: 2.00 },
            { type: 'LINE', x1: 1.60, y1: 2.00, x2: 0, y2: 2.00 },
            { type: 'LINE', x1: 0, y1: 2.00, x2: 0, y2: 0.10 },
            // 2 Pillows
            { type: 'POLYLINE', points: [{ x: 0.10, y: 0.15 }, { x: 0.75, y: 0.15 }, { x: 0.75, y: 0.55 }, { x: 0.10, y: 0.55 }], closed: true },
            { type: 'POLYLINE', points: [{ x: 0.85, y: 0.15 }, { x: 1.50, y: 0.15 }, { x: 1.50, y: 0.55 }, { x: 0.85, y: 0.55 }], closed: true },
            // Blanket fold
            { type: 'LINE', x1: 0, y1: 0.80, x2: 1.60, y2: 0.80 }
        ]
    },

    'BED_SINGLE': {
        id: 'BED_SINGLE',
        name: 'Cama Solteiro - Planta',
        category: 'furniture',
        categoryName: 'Mobiliário',
        dimensions: '0.90m x 1.90m',
        layer: 'Mobiliario',
        color: '#f59e0b',
        svgPreview: `<svg viewBox="-0.1 -0.1 1.1 2.1" width="28" height="48" stroke="#f59e0b" stroke-width="0.05" fill="none"><rect x="0" y="0" width="0.9" height="0.1"/><rect x="0" y="0.1" width="0.9" height="1.8"/><rect x="0.15" y="0.15" width="0.6" height="0.38" rx="0.05"/><line x1="0" y1="0.8" x2="0.9" y2="0.8"/></svg>`,
        entities: [
            // Headboard
            { type: 'LINE', x1: 0, y1: 0, x2: 0.90, y2: 0 },
            { type: 'LINE', x1: 0.90, y1: 0, x2: 0.90, y2: 0.10 },
            { type: 'LINE', x1: 0.90, y1: 0.10, x2: 0, y2: 0.10 },
            { type: 'LINE', x1: 0, y1: 0.10, x2: 0, y2: 0 },
            // Mattress
            { type: 'LINE', x1: 0, y1: 0.10, x2: 0.90, y2: 0.10 },
            { type: 'LINE', x1: 0.90, y1: 0.10, x2: 0.90, y2: 1.90 },
            { type: 'LINE', x1: 0.90, y1: 1.90, x2: 0, y2: 1.90 },
            { type: 'LINE', x1: 0, y1: 1.90, x2: 0, y2: 0.10 },
            // Pillow
            { type: 'POLYLINE', points: [{ x: 0.15, y: 0.15 }, { x: 0.75, y: 0.15 }, { x: 0.75, y: 0.50 }, { x: 0.15, y: 0.50 }], closed: true },
            { type: 'LINE', x1: 0, y1: 0.80, x2: 0.90, y2: 0.80 }
        ]
    },

    // --- COZINHA & ELETRODOMÉSTICOS ---
    'STOVE_4': {
        id: 'STOVE_4',
        name: 'Fogão 4 Bocas - Planta',
        category: 'fixtures',
        categoryName: 'Sanitários & Eletros',
        dimensions: '0.60m x 0.60m',
        layer: 'Hidraulica',
        color: '#a855f7',
        svgPreview: `<svg viewBox="-0.05 -0.05 0.7 0.7" width="44" height="44" stroke="#a855f7" stroke-width="0.02" fill="none"><rect x="0" y="0" width="0.6" height="0.6"/><line x1="0.08" y1="0.04" x2="0.52" y2="0.04"/><circle cx="0.18" cy="0.22" r="0.08"/><circle cx="0.42" cy="0.22" r="0.08"/><circle cx="0.18" cy="0.44" r="0.07"/><circle cx="0.42" cy="0.44" r="0.07"/></svg>`,
        entities: [
            { type: 'LINE', x1: 0, y1: 0, x2: 0.60, y2: 0 },
            { type: 'LINE', x1: 0.60, y1: 0, x2: 0.60, y2: 0.60 },
            { type: 'LINE', x1: 0.60, y1: 0.60, x2: 0, y2: 0.60 },
            { type: 'LINE', x1: 0, y1: 0.60, x2: 0, y2: 0 },
            { type: 'LINE', x1: 0.08, y1: 0.04, x2: 0.52, y2: 0.04 },
            { type: 'CIRCLE', cx: 0.18, cy: 0.22, r: 0.08 },
            { type: 'CIRCLE', cx: 0.42, cy: 0.22, r: 0.08 },
            { type: 'CIRCLE', cx: 0.18, cy: 0.44, r: 0.07 },
            { type: 'CIRCLE', cx: 0.42, cy: 0.44, r: 0.07 }
        ]
    },

    'FRIDGE_DUPLEX': {
        id: 'FRIDGE_DUPLEX',
        name: 'Geladeira Duplex - Planta',
        category: 'fixtures',
        categoryName: 'Sanitários & Eletros',
        dimensions: '0.75m x 0.75m',
        layer: 'Hidraulica',
        color: '#a855f7',
        svgPreview: `<svg viewBox="-0.05 -0.05 0.85 0.85" width="44" height="44" stroke="#a855f7" stroke-width="0.02" fill="none"><rect x="0" y="0" width="0.75" height="0.75"/><line x1="0" y1="0.12" x2="0.75" y2="0.12"/><line x1="0.62" y1="0.04" x2="0.62" y2="0.10"/><line x1="0.62" y1="0.14" x2="0.62" y2="0.20"/></svg>`,
        entities: [
            { type: 'LINE', x1: 0, y1: 0, x2: 0.75, y2: 0 },
            { type: 'LINE', x1: 0.75, y1: 0, x2: 0.75, y2: 0.75 },
            { type: 'LINE', x1: 0.75, y1: 0.75, x2: 0, y2: 0.75 },
            { type: 'LINE', x1: 0, y1: 0.75, x2: 0, y2: 0 },
            { type: 'LINE', x1: 0, y1: 0.12, x2: 0.75, y2: 0.12 },
            { type: 'LINE', x1: 0.62, y1: 0.04, x2: 0.62, y2: 0.10 },
            { type: 'LINE', x1: 0.62, y1: 0.14, x2: 0.62, y2: 0.20 }
        ]
    },

    'WASHING_MACHINE': {
        id: 'WASHING_MACHINE',
        name: 'Máquina de Lavar Roupas',
        category: 'fixtures',
        categoryName: 'Sanitários & Eletros',
        dimensions: '0.60m x 0.65m',
        layer: 'Hidraulica',
        color: '#a855f7',
        svgPreview: `<svg viewBox="-0.05 -0.05 0.7 0.75" width="44" height="44" stroke="#a855f7" stroke-width="0.02" fill="none"><rect x="0" y="0" width="0.6" height="0.65"/><line x1="0" y1="0.52" x2="0.6" y2="0.52"/><circle cx="0.3" cy="0.28" r="0.19"/><circle cx="0.3" cy="0.28" r="0.14"/></svg>`,
        entities: [
            { type: 'LINE', x1: 0, y1: 0, x2: 0.60, y2: 0 },
            { type: 'LINE', x1: 0.60, y1: 0, x2: 0.60, y2: 0.65 },
            { type: 'LINE', x1: 0.60, y1: 0.65, x2: 0, y2: 0.65 },
            { type: 'LINE', x1: 0, y1: 0.65, x2: 0, y2: 0 },
            { type: 'LINE', x1: 0, y1: 0.52, x2: 0.60, y2: 0.52 },
            { type: 'CIRCLE', cx: 0.30, cy: 0.28, r: 0.19 },
            { type: 'CIRCLE', cx: 0.30, cy: 0.28, r: 0.14 }
        ]
    },

    // --- SÍMBOLOS, PESSOAS & ACESSIBILIDADE ---
    'PERSON_TOP': {
        id: 'PERSON_TOP',
        name: 'Escala Humana - Planta',
        category: 'symbols',
        categoryName: 'Símbolos & Pessoas',
        dimensions: '0.50m x 0.40m',
        layer: 'Textos',
        color: '#22c55e',
        svgPreview: `<svg viewBox="-0.35 -0.3 0.7 0.6" width="44" height="44" stroke="#22c55e" stroke-width="0.025" fill="none"><circle cx="0" cy="0" r="0.11" fill="#22c55e"/><path d="M -0.24 -0.06 C -0.16 0.08 0.16 0.08 0.24 -0.06 L 0.18 -0.16 L -0.18 -0.16 Z"/></svg>`,
        entities: [
            { type: 'CIRCLE', cx: 0, cy: 0, r: 0.11 },
            { type: 'POLYLINE', points: [
                { x: -0.24, y: -0.06 }, { x: -0.16, y: 0.08 }, { x: 0, y: 0.10 },
                { x: 0.16, y: 0.08 }, { x: 0.24, y: -0.06 }, { x: 0.18, y: -0.16 }, { x: -0.18, y: -0.16 }
            ], closed: true }
        ]
    },

    'WHEELCHAIR': {
        id: 'WHEELCHAIR',
        name: 'Cadeirante / PNE NBR 9050',
        category: 'symbols',
        categoryName: 'Símbolos & Pessoas',
        dimensions: '0.70m x 0.90m',
        layer: 'Textos',
        color: '#38bdf8',
        svgPreview: `<svg viewBox="-0.45 -0.45 0.9 0.9" width="44" height="44" stroke="#38bdf8" stroke-width="0.03" fill="none"><rect x="-0.22" y="-0.2" width="0.44" height="0.45"/><rect x="-0.34" y="-0.28" width="0.08" height="0.56" rx="0.02"/><rect x="0.26" y="-0.28" width="0.08" height="0.56" rx="0.02"/><line x1="-0.16" y1="0.35" x2="0.16" y2="0.35"/></svg>`,
        entities: [
            // Seat
            { type: 'LINE', x1: -0.22, y1: -0.20, x2: 0.22, y2: -0.20 },
            { type: 'LINE', x1: 0.22, y1: -0.20, x2: 0.22, y2: 0.25 },
            { type: 'LINE', x1: 0.22, y1: 0.25, x2: -0.22, y2: 0.25 },
            { type: 'LINE', x1: -0.22, y1: 0.25, x2: -0.22, y2: -0.20 },
            // Wheels
            { type: 'POLYLINE', points: [{ x: -0.34, y: -0.28 }, { x: -0.26, y: -0.28 }, { x: -0.26, y: 0.28 }, { x: -0.34, y: 0.28 }], closed: true },
            { type: 'POLYLINE', points: [{ x: 0.26, y: -0.28 }, { x: 0.34, y: -0.28 }, { x: 0.34, y: 0.28 }, { x: 0.26, y: 0.28 }], closed: true },
            // Footrests
            { type: 'LINE', x1: -0.16, y1: 0.36, x2: 0.16, y2: 0.36 }
        ]
    }
};

CADEngine.BlockLibrary = (typeof CADBlockLibrary !== 'undefined') ? CADBlockLibrary : {};
CADEngine.Linetypes = (typeof CADLinetypes !== 'undefined') ? CADLinetypes : {};

if (typeof window !== 'undefined') {
    window.CADBlockLibrary = CADEngine.BlockLibrary;
    window.CADLinetypes = CADEngine.Linetypes;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CADEngine, CADBlockLibrary: CADEngine.BlockLibrary, CADLinetypes: CADEngine.Linetypes };
}


