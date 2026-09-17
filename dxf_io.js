/**
 * CADClone — Native DXF Import & Export Engine
 * Implements AutoCAD R12 / R2000 DXF generation and parsing
 */

const DxfIO = {
    // AutoCAD Color Index (ACI) to RGB Hex
    aciToHex: {
        1: '#ff0000', // Red
        2: '#ffff00', // Yellow
        3: '#00ff00', // Green
        4: '#00ffff', // Cyan
        5: '#0000ff', // Blue
        6: '#ff00ff', // Magenta
        7: '#ffffff', // White
        8: '#808080', // Dark Gray
        9: '#c0c0c0'  // Light Gray
    },

    hexToAci(hex) {
        if (!hex) return 7;
        hex = hex.toLowerCase();
        for (const [aci, color] of Object.entries(this.aciToHex)) {
            if (color.toLowerCase() === hex) return parseInt(aci);
        }
        return 7;
    },

    getEntityColor(e) {
        if (!e) return null;
        if (e.color !== undefined && e.color !== null) {
            if (typeof e.color === 'number') {
                return '#' + (e.color & 0xffffff).toString(16).padStart(6, '0');
            }
            if (typeof e.color === 'string' && e.color.startsWith('#')) {
                return e.color;
            }
        }
        if (typeof e.colorIndex === 'number' && e.colorIndex > 0 && e.colorIndex < 256) {
            if (this.aciToHex[e.colorIndex]) return this.aciToHex[e.colorIndex];
        }
        return null;
    },

    /**
     * Alias for exportDXF
     */
    export(cadOrEntities, maybeLayers) {
        return this.exportDXF(cadOrEntities, maybeLayers);
    },

    /**
     * Alias for importDXF
     */
    import(cadOrStr, maybeDxfStr) {
        return this.importDXF(cadOrStr, maybeDxfStr);
    },

    /**
     * Export CADClone document to standard ASCII DXF (AutoCAD R12/2000 compatible)
     */
    exportDXF(cadOrEntities, maybeLayers) {
        let entities = [];
        let layers = {};
        if (Array.isArray(cadOrEntities)) {
            entities = cadOrEntities;
            layers = maybeLayers || { '0': { name: '0', color: '#ffffff' } };
        } else if (cadOrEntities && cadOrEntities.entities) {
            entities = cadOrEntities.entities;
            layers = cadOrEntities.layers || { '0': { name: '0', color: '#ffffff' } };
        }

        const lines = [];
        const add = (code, val) => {
            lines.push(code.toString().trim());
            lines.push(val.toString().trim());
        };

        // 1. SECTION HEADER
        add(0, 'SECTION');
        add(2, 'HEADER');
        add(9, '$ACADVER');
        add(1, 'AC1009'); // AutoCAD R12 (most universally accepted)
        add(9, '$INSUNITS');
        add(70, 6); // Meters (Civil Engineering standard)
        add(9, '$LTSCALE');
        add(40, ((cadOrEntities && cadOrEntities.ltscale) || 1.0).toFixed(4));
        add(0, 'ENDSEC');

        // 2. SECTION TABLES
        add(0, 'SECTION');
        add(2, 'TABLES');

        // TABLE LTYPE
        add(0, 'TABLE');
        add(2, 'LTYPE');
        add(70, 5);

        // CONTINUOUS
        add(0, 'LTYPE');
        add(2, 'CONTINUOUS');
        add(70, 0);
        add(3, 'Solid line');
        add(72, 65);
        add(73, 0);
        add(40, 0.0);

        // DASHED
        add(0, 'LTYPE');
        add(2, 'DASHED');
        add(70, 0);
        add(3, '__ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __');
        add(72, 65);
        add(73, 2);
        add(40, 0.45);
        add(49, 0.30);
        add(49, -0.15);

        // HIDDEN
        add(0, 'LTYPE');
        add(2, 'HIDDEN');
        add(70, 0);
        add(3, '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _');
        add(72, 65);
        add(73, 2);
        add(40, 0.25);
        add(49, 0.15);
        add(49, -0.10);

        // CENTER
        add(0, 'LTYPE');
        add(2, 'CENTER');
        add(70, 0);
        add(3, '____ _ ____ _ ____ _ ____ _ ____ _ ____');
        add(72, 65);
        add(73, 4);
        add(40, 0.98);
        add(49, 0.60);
        add(49, -0.15);
        add(49, 0.08);
        add(49, -0.15);

        // PHANTOM
        add(0, 'LTYPE');
        add(2, 'PHANTOM');
        add(70, 0);
        add(3, '_____ _ _ _____ _ _ _____ _ _ _____');
        add(72, 65);
        add(73, 6);
        add(40, 1.21);
        add(49, 0.60);
        add(49, -0.15);
        add(49, 0.08);
        add(49, -0.15);
        add(49, 0.08);
        add(49, -0.15);

        add(0, 'ENDTAB');
        
        // TABLE LAYER
        add(0, 'TABLE');
        add(2, 'LAYER');
        add(70, Object.keys(layers).length);
        for (const [name, lyr] of Object.entries(layers)) {
            add(0, 'LAYER');
            add(2, name);
            add(70, 0);
            add(62, this.hexToAci(lyr.color)); // Color index
            add(6, lyr.linetype || 'CONTINUOUS');
        }
        add(0, 'ENDTAB');
        add(0, 'ENDSEC');

        // 3. SECTION ENTITIES
        add(0, 'SECTION');
        add(2, 'ENTITIES');

        for (const ent of entities) {
            const layer = ent.layer || '0';
            const color = ent.color ? this.hexToAci(ent.color) : 256; // 256 = ByLayer
            const linetype = (ent.linetype && ent.linetype !== 'ByLayer') ? ent.linetype.toUpperCase() : null;

            if (ent.type === 'LINE') {
                add(0, 'LINE');
                add(8, layer);
                if (color !== 256) add(62, color);
                if (linetype) add(6, linetype);
                add(10, ent.x1.toFixed(4));
                add(20, ent.y1.toFixed(4));
                add(30, 0.0);
                add(11, ent.x2.toFixed(4));
                add(21, ent.y2.toFixed(4));
                add(31, 0.0);
            } else if (ent.type === 'CIRCLE') {
                add(0, 'CIRCLE');
                add(8, layer);
                if (color !== 256) add(62, color);
                if (linetype) add(6, linetype);
                add(10, ent.cx.toFixed(4));
                add(20, ent.cy.toFixed(4));
                add(30, 0.0);
                add(40, ent.r.toFixed(4));
            } else if (ent.type === 'ARC') {
                add(0, 'ARC');
                add(8, layer);
                if (color !== 256) add(62, color);
                if (linetype) add(6, linetype);
                add(10, ent.cx.toFixed(4));
                add(20, ent.cy.toFixed(4));
                add(30, 0.0);
                add(40, ent.r.toFixed(4));
                add(50, (ent.startAngle * 180 / Math.PI).toFixed(2));
                add(51, (ent.endAngle * 180 / Math.PI).toFixed(2));
            } else if (ent.type === 'POLYLINE') {
                add(0, 'POLYLINE');
                add(8, layer);
                if (color !== 256) add(62, color);
                if (linetype) add(6, linetype);
                add(66, 1);
                add(70, ent.closed ? 1 : 0);
                for (const pt of ent.points) {
                    add(0, 'VERTEX');
                    add(8, layer);
                    add(10, pt.x.toFixed(4));
                    add(20, pt.y.toFixed(4));
                    add(30, 0.0);
                }
                add(0, 'SEQEND');
            } else if (ent.type === 'TEXT') {
                add(0, 'TEXT');
                add(8, layer);
                if (color !== 256) add(62, color);
                add(10, ent.x.toFixed(4));
                add(20, ent.y.toFixed(4));
                add(30, 0.0);
                add(40, (ent.height || 0.25).toFixed(4));
                add(1, ent.text);
                if (ent.rotation) add(50, (ent.rotation * 180 / Math.PI).toFixed(2));
            } else if (ent.type === 'DIMENSION') {
                // Export dimension line + text
                add(0, 'LINE');
                add(8, layer);
                add(10, ent.x1.toFixed(4));
                add(20, ent.y1.toFixed(4));
                add(30, 0.0);
                add(11, ent.x2.toFixed(4));
                add(21, ent.y2.toFixed(4));
                add(31, 0.0);
                
                add(0, 'TEXT');
                add(8, layer);
                add(10, ((ent.x1 + ent.x2) / 2).toFixed(4));
                add(20, (((ent.y1 + ent.y2) / 2) + 0.15).toFixed(4));
                add(30, 0.0);
                add(40, (ent.height || 0.20).toFixed(4));
                add(1, ent.text || Math.hypot(ent.x2 - ent.x1, ent.y2 - ent.y1).toFixed(2) + 'm');
            }
        }

        add(0, 'ENDSEC');
        add(0, 'EOF');

        return lines.join('\r\n');
    },

    /**
     * Parse and import DXF text into CADClone engine or returns entity array
     */
    importDXF(cadOrStr, maybeDxfStr) {
        let cad = null;
        let dxfString = '';
        if (typeof cadOrStr === 'string') {
            dxfString = cadOrStr;
            cad = maybeDxfStr || null;
        } else {
            cad = cadOrStr;
            dxfString = maybeDxfStr || '';
        }

        const target = cad || {
            entities: [],
            layers: {},
            nextId: () => 'ent_' + Math.random().toString(36).substr(2, 9),
            saveStateForUndo: () => {},
            zoomExtents: () => {},
            addLayer: (name, color) => { target.layers[name] = { name, color }; }
        };

        if (target.saveStateForUndo) target.saveStateForUndo();

        // 1. Try DxfParser library if available
        if (typeof DxfParser !== 'undefined') {
            try {
                const parser = new DxfParser();
                const dxf = parser.parseSync(dxfString);
                if (dxf && dxf.entities) {
                    this._loadParsedEntities(target, dxf);
                    if (target.getEntityBoundingBox) {
                        for (let i = 0; i < target.entities.length; i++) {
                            if (!target.entities[i]._bb) target.getEntityBoundingBox(target.entities[i]);
                        }
                    }
                    if (typeof OSnap !== 'undefined') OSnap.invalidateGrid();
                    if (target.zoomExtents) target.zoomExtents();
                    if (target.requestRender) target.requestRender();
                    return target.entities;
                }
            } catch (err) {
                console.warn('DxfParser failed, falling back to native parser:', err);
            }
        }

        // 2. Fallback native chunk parser
        this._nativeParseDXF(target, dxfString);
        if (target.getEntityBoundingBox) {
            for (let i = 0; i < target.entities.length; i++) {
                if (!target.entities[i]._bb) target.getEntityBoundingBox(target.entities[i]);
            }
        }
        if (typeof OSnap !== 'undefined') OSnap.invalidateGrid();
        if (target.zoomExtents) target.zoomExtents();
        if (target.requestRender) target.requestRender();
        return target.entities;
    },

    _loadParsedEntities(cad, dxf) {
        if (!dxf || !dxf.entities) return;

        // Import layers if available
        if (dxf.tables && dxf.tables.layer && dxf.tables.layer.layers) {
            for (const [name, lyr] of Object.entries(dxf.tables.layer.layers)) {
                if (cad.layers && !cad.layers[name]) {
                    const color = this.aciToHex[lyr.color] || '#ffffff';
                    const lt = lyr.lineType || 'CONTINUOUS';
                    if (typeof cad.addLayer === 'function') {
                        cad.addLayer(name, color, lt);
                    } else {
                        cad.layers[name] = { name, color, linetype: lt, visible: true };
                    }
                }
            }
        }

        for (const e of dxf.entities) {
            const layer = e.layer || '0';
            const linetype = (e.lineType || e.lineTypeName || e.linetype || null);
            const ltProp = linetype ? { linetype: linetype.toUpperCase() } : {};
            const entColor = this.getEntityColor(e);

            if (e.type === 'LINE') {
                if (e.vertices && e.vertices.length >= 2) {
                    cad.entities.push({
                        id: cad.nextId(),
                        type: 'LINE',
                        x1: e.vertices[0].x,
                        y1: e.vertices[0].y,
                        x2: e.vertices[1].x,
                        y2: e.vertices[1].y,
                        layer: layer,
                        color: entColor,
                        ...ltProp
                    });
                }
            } else if (e.type === 'CIRCLE') {
                if (!isFinite(e.radius) || isNaN(e.radius) || e.radius <= 0 || e.radius > 500000 ||
                    !e.center || !isFinite(e.center.x) || !isFinite(e.center.y) ||
                    Math.abs(e.center.x) > 2000000 || Math.abs(e.center.y) > 2000000) {
                    continue;
                }
                cad.entities.push({
                    id: cad.nextId(),
                    type: 'CIRCLE',
                    cx: e.center.x,
                    cy: e.center.y,
                    r: e.radius,
                    layer: layer,
                    color: entColor,
                    ...ltProp
                });
            } else if (e.type === 'ARC') {
                if (!isFinite(e.radius) || isNaN(e.radius) || e.radius <= 0 || e.radius > 500000 ||
                    !e.center || !isFinite(e.center.x) || !isFinite(e.center.y) ||
                    Math.abs(e.center.x) > 2000000 || Math.abs(e.center.y) > 2000000) {
                    continue;
                }
                cad.entities.push({
                    id: cad.nextId(),
                    type: 'ARC',
                    cx: e.center.x,
                    cy: e.center.y,
                    r: e.radius,
                    startAngle: typeof e.startAngle === 'number' ? e.startAngle : 0,
                    endAngle: typeof e.endAngle === 'number' ? e.endAngle : Math.PI,
                    layer: layer,
                    color: entColor,
                    ...ltProp
                });
            } else if (e.type === 'LWPOLYLINE' || e.type === 'POLYLINE') {
                const points = (e.vertices || []).map(v => ({ x: v.x, y: v.y }));
                if (points.length >= 2) {
                    cad.entities.push({
                        id: cad.nextId(),
                        type: 'POLYLINE',
                        points: points,
                        closed: !!(e.shape || e.closed),
                        layer: layer,
                        color: entColor,
                        ...ltProp
                    });
                }
            } else if (e.type === 'TEXT' || e.type === 'MTEXT') {
                cad.entities.push({
                    id: cad.nextId(),
                    type: 'TEXT',
                    x: e.startPoint ? e.startPoint.x : (e.position ? e.position.x : 0),
                    y: e.startPoint ? e.startPoint.y : (e.position ? e.position.y : 0),
                    text: e.text || e.string || '',
                    height: e.textHeight || 0.25,
                    rotation: e.rotation ? (e.rotation * Math.PI / 180) : 0,
                    layer: layer,
                    color: entColor
                });
            } else if (e.type === 'INSERT') {
                // Expand AutoCAD Blocks into CADClone entities
                const blockDef = dxf.blocks && dxf.blocks[e.name];
                if (blockDef && Array.isArray(blockDef.entities) && blockDef.entities.length > 0) {
                    const rotDeg = e.rotation || 0;
                    const rotRad = rotDeg * Math.PI / 180;
                    const cosA = Math.cos(rotRad);
                    const sinA = Math.sin(rotRad);
                    const sx = (typeof e.xScale === 'number' && e.xScale !== 0) ? e.xScale : 1;
                    const sy = (typeof e.yScale === 'number' && e.yScale !== 0) ? e.yScale : 1;
                    const posX = (e.position && typeof e.position.x === 'number') ? e.position.x : 0;
                    const posY = (e.position && typeof e.position.y === 'number') ? e.position.y : 0;
                    const transformPt = (x, y) => ({
                        x: posX + (x * sx * cosA - y * sy * sinA),
                        y: posY + (x * sinA + y * sy * cosA)
                    });

                    for (const subEnt of blockDef.entities) {
                        const subLayer = (subEnt.layer && subEnt.layer !== '0') ? subEnt.layer : layer;
                        const subColor = this.getEntityColor(subEnt) || entColor;
                        const subLinetype = (subEnt.lineType || e.lineType || null);
                        const subLt = subLinetype ? { linetype: subLinetype.toUpperCase() } : {};

                        if (subEnt.type === 'LINE' && subEnt.vertices && subEnt.vertices.length >= 2) {
                            const p1 = transformPt(subEnt.vertices[0].x, subEnt.vertices[0].y);
                            const p2 = transformPt(subEnt.vertices[1].x, subEnt.vertices[1].y);
                            cad.entities.push({
                                id: cad.nextId(),
                                type: 'LINE',
                                x1: p1.x, y1: p1.y,
                                x2: p2.x, y2: p2.y,
                                layer: subLayer,
                                color: subColor,
                                ...subLt
                            });
                        } else if (subEnt.type === 'CIRCLE' && subEnt.center && subEnt.radius > 0) {
                            const cp = transformPt(subEnt.center.x, subEnt.center.y);
                            cad.entities.push({
                                id: cad.nextId(),
                                type: 'CIRCLE',
                                cx: cp.x, cy: cp.y,
                                r: subEnt.radius * Math.abs(sx),
                                layer: subLayer,
                                color: subColor,
                                ...subLt
                            });
                        } else if (subEnt.type === 'ARC' && subEnt.center && subEnt.radius > 0) {
                            const cp = transformPt(subEnt.center.x, subEnt.center.y);
                            cad.entities.push({
                                id: cad.nextId(),
                                type: 'ARC',
                                cx: cp.x, cy: cp.y,
                                r: subEnt.radius * Math.abs(sx),
                                startAngle: (subEnt.startAngle || 0) + rotRad,
                                endAngle: (subEnt.endAngle || Math.PI) + rotRad,
                                layer: subLayer,
                                color: subColor,
                                ...subLt
                            });
                        } else if ((subEnt.type === 'LWPOLYLINE' || subEnt.type === 'POLYLINE') && subEnt.vertices && subEnt.vertices.length >= 2) {
                            const pts = subEnt.vertices.map(v => transformPt(v.x, v.y));
                            cad.entities.push({
                                id: cad.nextId(),
                                type: 'POLYLINE',
                                points: pts,
                                closed: !!(subEnt.shape || subEnt.closed),
                                layer: subLayer,
                                color: subColor,
                                ...subLt
                            });
                        } else if (subEnt.type === 'TEXT' || subEnt.type === 'MTEXT') {
                            const tp = transformPt(
                                subEnt.startPoint ? subEnt.startPoint.x : (subEnt.position ? subEnt.position.x : 0),
                                subEnt.startPoint ? subEnt.startPoint.y : (subEnt.position ? subEnt.position.y : 0)
                            );
                            cad.entities.push({
                                id: cad.nextId(),
                                type: 'TEXT',
                                x: tp.x, y: tp.y,
                                text: subEnt.text || subEnt.string || '',
                                height: (subEnt.textHeight || 0.25) * Math.abs(sy),
                                rotation: (subEnt.rotation ? (subEnt.rotation * Math.PI / 180) : 0) + rotRad,
                                layer: subLayer,
                                color: subColor
                            });
                        }
                    }
                }
            } else if (e.type === 'ELLIPSE' && e.center) {
                const cx = e.center.x || 0;
                const cy = e.center.y || 0;
                const mx = e.majorAxisEndPoint ? e.majorAxisEndPoint.x : 1;
                const my = e.majorAxisEndPoint ? e.majorAxisEndPoint.y : 0;
                const majorR = Math.hypot(mx, my) || 1;
                const rot = Math.atan2(my, mx);
                const minorR = majorR * (e.axisRatio !== undefined ? e.axisRatio : 1);
                const startA = typeof e.startAngle === 'number' ? e.startAngle : 0;
                let endA = typeof e.endAngle === 'number' ? e.endAngle : (Math.PI * 2);
                if (endA <= startA) endA += Math.PI * 2;
                const steps = 36;
                const pts = [];
                for (let i = 0; i <= steps; i++) {
                    const t = startA + (endA - startA) * (i / steps);
                    const px = majorR * Math.cos(t);
                    const py = minorR * Math.sin(t);
                    pts.push({
                        x: cx + (px * Math.cos(rot) - py * Math.sin(rot)),
                        y: cy + (px * Math.sin(rot) + py * Math.cos(rot))
                    });
                }
                const closed = Math.abs((endA - startA) - Math.PI * 2) < 1e-4;
                cad.entities.push({
                    id: cad.nextId(),
                    type: 'POLYLINE',
                    points: pts,
                    closed: closed,
                    layer: layer,
                    color: entColor,
                    ...ltProp
                });
            } else if (e.type === 'SPLINE') {
                const rawPts = (e.fitPoints && e.fitPoints.length > 0) ? e.fitPoints : (e.controlPoints || []);
                if (rawPts.length >= 2) {
                    cad.entities.push({
                        id: cad.nextId(),
                        type: 'POLYLINE',
                        points: rawPts.map(p => ({ x: p.x, y: p.y })),
                        closed: !!e.closed,
                        layer: layer,
                        color: entColor,
                        ...ltProp
                    });
                }
            } else if (e.type === 'SOLID' || e.type === '3DFACE') {
                const pts = (e.points || e.vertices || []).map(v => ({ x: v.x, y: v.y }));
                if (pts.length >= 3) {
                    cad.entities.push({
                        id: cad.nextId(),
                        type: 'POLYLINE',
                        points: pts,
                        closed: true,
                        layer: layer,
                        color: entColor,
                        ...ltProp
                    });
                }
            } else if (e.type === 'DIMENSION') {
                const p1 = e.linearOrAngularPoint1 || e.anchorPoint;
                const p2 = e.linearOrAngularPoint2 || e.middleOfText;
                if (p1 && p2) {
                    cad.entities.push({
                        id: cad.nextId(),
                        type: 'DIMENSION',
                        x1: p1.x, y1: p1.y,
                        x2: p2.x, y2: p2.y,
                        text: e.text || (e.actualMeasurement ? e.actualMeasurement.toFixed(2) + 'm' : null),
                        layer: layer || 'Cotas',
                        color: entColor
                    });
                }
            } else if (e.type === 'POINT' && e.position) {
                cad.entities.push({
                    id: cad.nextId(),
                    type: 'CIRCLE',
                    cx: e.position.x,
                    cy: e.position.y,
                    r: 0.05,
                    layer: layer,
                    color: entColor
                });
            }
        }
    },

    _nativeParseDXF(cad, text) {
        const rawLines = text.split(/\r?\n/).map(l => l.trim());
        let count = 0;
        let inEntities = false;
        let curType = null;
        let cur = {};
        let activePoly = null;
        let curVertex = null;

        const flushEntity = () => {
            if (activePoly && activePoly.points.length >= 2) {
                cad.entities.push({
                    id: cad.nextId(),
                    type: 'POLYLINE',
                    points: activePoly.points,
                    closed: !!activePoly.closed,
                    layer: activePoly.layer || '0',
                    color: null,
                    ...(activePoly.linetype ? { linetype: activePoly.linetype.toUpperCase() } : {})
                });
                count++;
                activePoly = null;
                curVertex = null;
            } else if (curType && this._addEntityFromRaw(cad, curType, cur)) {
                count++;
                curType = null;
                cur = {};
            }
        };

        for (let i = 0; i < rawLines.length - 1; i += 2) {
            const code = parseInt(rawLines[i]);
            const val = rawLines[i + 1];

            if (code === 0 && val === 'SECTION') {
                if (rawLines[i + 2] === '2' && rawLines[i + 3] === 'ENTITIES') {
                    inEntities = true;
                }
            } else if (code === 0 && val === 'ENDSEC') {
                inEntities = false;
                flushEntity();
            }

            if (!inEntities) continue;

            if (code === 0) {
                if (val === 'VERTEX') {
                    if (curVertex && !isNaN(curVertex.x) && !isNaN(curVertex.y) && activePoly) {
                        activePoly.points.push(curVertex);
                    }
                    curVertex = { x: 0, y: 0 };
                    continue;
                } else if (val === 'SEQEND') {
                    if (curVertex && !isNaN(curVertex.x) && !isNaN(curVertex.y) && activePoly) {
                        activePoly.points.push(curVertex);
                        curVertex = null;
                    }
                    flushEntity();
                    curType = null;
                    cur = {};
                    continue;
                }

                // If starting a new entity, flush previous
                flushEntity();

                curType = val;
                cur = {};

                if (val === 'POLYLINE' || val === 'LWPOLYLINE') {
                    activePoly = { points: [], closed: false, layer: '0' };
                    curVertex = null;
                }
            } else {
                if (activePoly) {
                    if (code === 8) activePoly.layer = val;
                    else if (code === 6) activePoly.linetype = val;
                    else if (code === 70) activePoly.closed = (parseInt(val) & 1) !== 0;
                    else if (curVertex) {
                        if (code === 10) curVertex.x = parseFloat(val);
                        else if (code === 20) curVertex.y = parseFloat(val);
                    } else if (code === 10 || code === 20) {
                        // LWPOLYLINE inline coordinates
                        if (!cur.lwPoint) cur.lwPoint = {};
                        if (code === 10) cur.lwPoint.x = parseFloat(val);
                        if (code === 20) {
                            cur.lwPoint.y = parseFloat(val);
                            activePoly.points.push({ x: cur.lwPoint.x, y: cur.lwPoint.y });
                            cur.lwPoint = {};
                        }
                    }
                } else {
                    if (code === 8) cur.layer = val;
                    else if (code === 6) cur.linetype = val;
                    else if (code === 10) cur.x1 = parseFloat(val);
                    else if (code === 20) cur.y1 = parseFloat(val);
                    else if (code === 11) cur.x2 = parseFloat(val);
                    else if (code === 21) cur.y2 = parseFloat(val);
                    else if (code === 40) cur.r = parseFloat(val);
                    else if (code === 50) cur.startAngle = parseFloat(val) * Math.PI / 180;
                    else if (code === 51) cur.endAngle = parseFloat(val) * Math.PI / 180;
                    else if (code === 1) cur.text = val;
                }
            }
        }

        flushEntity();
        return count;
    },

    _addEntityFromRaw(cad, type, cur) {
        const layer = cur.layer || '0';
        const ltProp = cur.linetype ? { linetype: cur.linetype.toUpperCase() } : {};
        if (type === 'LINE' && !isNaN(cur.x1) && !isNaN(cur.x2)) {
            cad.entities.push({
                id: cad.nextId(),
                type: 'LINE',
                x1: cur.x1, y1: cur.y1, x2: cur.x2, y2: cur.y2,
                layer: layer, color: null,
                ...ltProp
            });
            return true;
        } else if (type === 'CIRCLE' && !isNaN(cur.x1) && !isNaN(cur.r) && cur.r > 0 && cur.r <= 500000 && Math.abs(cur.x1) <= 2000000) {
            cad.entities.push({
                id: cad.nextId(),
                type: 'CIRCLE',
                cx: cur.x1, cy: cur.y1, r: cur.r,
                layer: layer, color: null,
                ...ltProp
            });
            return true;
        } else if (type === 'ARC' && !isNaN(cur.x1) && !isNaN(cur.r) && cur.r > 0 && cur.r <= 500000 && Math.abs(cur.x1) <= 2000000) {
            cad.entities.push({
                id: cad.nextId(),
                type: 'ARC',
                cx: cur.x1, cy: cur.y1, r: cur.r,
                startAngle: cur.startAngle || 0,
                endAngle: cur.endAngle || Math.PI,
                layer: layer, color: null,
                ...ltProp
            });
            return true;
        } else if (type === 'TEXT' && cur.text) {
            cad.entities.push({
                id: cad.nextId(),
                type: 'TEXT',
                x: cur.x1 || 0, y: cur.y1 || 0,
                text: cur.text,
                height: cur.r || 0.25,
                layer: layer, color: null
            });
            return true;
        }
        return false;
    }
};

if (typeof window !== 'undefined') {
    window.DxfIO = DxfIO;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DxfIO;
}

