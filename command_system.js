/**
 * CADClone — Command System & AutoCAD Command Line Interpreter
 * Emulates the classic AutoCAD command prompt, alias routing, 
 * coordinate inputs (@dx,dy, dist<angle), multi-step interactive workflows,
 * and keyboard shortcuts (Space=Enter, Esc=Cancel, Enter=Repeat).
 */

class CommandSystem {
    constructor(engine, commandLineInput, commandHistoryEl, promptLabelEl) {
        this.engine = engine;
        this.inputEl = commandLineInput;
        this.historyEl = commandHistoryEl;
        this.promptEl = promptLabelEl;

        this.currentCommand = null;
        this.commandStep = 0;
        this.commandData = {};
        this.lastExecutedCommand = 'LINE';

        // Autocomplete state
        this.suggestions = [];
        this.selectedSuggestionIndex = -1;
        this.autoCompletePopup = null;
        this.autoCompleteList = null;

        // Recent commands history
        this.recentCommands = ['LINE', 'CIRCLE', 'RECTANG', 'OFFSET', 'TRIM'];

        // AutoCAD Standard Command Aliases Dictionary
        this.aliases = {
            'L': 'LINE',
            'PL': 'PLINE',
            'C': 'CIRCLE',
            'REC': 'RECTANG',
            'RECTANGLE': 'RECTANG',
            'A': 'ARC',
            'M': 'MOVE',
            'CO': 'COPY',
            'CP': 'COPY',
            'RO': 'ROTATE',
            'TR': 'TRIM',
            'EX': 'EXTEND',
            'F': 'FILLET',
            'CHA': 'CHAMFER',
            'O': 'OFFSET',
            'E': 'ERASE',
            'DEL': 'ERASE',
            'MI': 'MIRROR',
            'SC': 'SCALE',
            'Z': 'ZOOM',
            'P': 'PAN',
            'DI': 'DIST',
            'DIST': 'DIST',
            'DAL': 'DIMALIGNED',
            'DIMALIGNED': 'DIMALIGNED',
            'DIM': 'DIMALIGNED',
            'COTA': 'DIMALIGNED',
            'COTAS': 'DIMALIGNED',
            'DLI': 'DIMLINEAR',
            'DIMLINEAR': 'DIMLINEAR',
            'DIMLIN': 'DIMLINEAR',
            'DIMSCALE': 'DIMSCALE',
            'DIMTXT': 'DIMTXT',
            'DIMTEXT': 'DIMTXT',
            'D': 'DIMSTYLE',
            'DIMSTYLE': 'DIMSTYLE',
            'DIMESTILO': 'DIMSTYLE',
            'T': 'MTEXT',
            'MT': 'MTEXT',
            'DT': 'TEXT',
            'TEXT': 'TEXT',
            'MTEXT': 'MTEXT',
            'H': 'HATCH',
            'LA': 'LAYER',
            'LAYER': 'LAYER',
            'U': 'UNDO',
            'REDO': 'REDO',
            'RE': 'REGEN',
            'PRINT': 'PLOT',
            'PLOT': 'PLOT',
            'EXPORT': 'EXPORT',
            'EXPORTIMG': 'EXPORT',
            'EXPORTOUT': 'EXPORT',
            'PNG': 'PNG',
            'JPG': 'JPG',
            'JPEG': 'JPG',
            'SAVE': 'QSAVE',
            'QSAVE': 'QSAVE',
            'AUTOSAVE': 'AUTOSAVE',
            'RECOVER': 'RECOVER',
            'DRAWINGRECOVERY': 'RECOVER',
            'RECOVERY': 'RECOVER',
            'OPEN': 'OPEN',
            'SELALL': 'SELECTALL',
            'EXTENTS': 'ZOOM_EXTENTS',
            'PR': 'PROPERTIES',
            'PROPS': 'PROPERTIES',
            'CH': 'PROPERTIES',
            'PROP': 'PROPERTIES',
            'PROPERTIES': 'PROPERTIES',
            'I': 'INSERT',
            'INSERT': 'INSERT',
            'B': 'BLOCK',
            'BLOCK': 'BLOCK',
            'MAKEBLOCK': 'BLOCK',
            'G': 'GROUP',
            'GROUP': 'GROUP',
            'UNG': 'UNGROUP',
            'UNGROUP': 'UNGROUP',
            'X': 'EXPLODE',
            'EXPLODE': 'EXPLODE',
            'LTS': 'LTSCALE',
            'LTSCALE': 'LTSCALE',
            'LT': 'LINETYPE',
            'LINETYPE': 'LINETYPE',
            'NEW': 'NEW',
            'NOVO': 'NEW',
            'SAMPLE': 'SAMPLE',
            'PLANTA': 'SAMPLE',
            'EXEMPLO': 'SAMPLE',
            'PDF': 'PDFATTACH',
            'PDFATTACH': 'PDFATTACH',
            'IMAGE': 'IMAGEATTACH',
            'IMAGEATTACH': 'IMAGEATTACH',
            'IMG': 'IMAGEATTACH',
            'UNDERLAY': 'UNDERLAY',
            'CALCO': 'UNDERLAY',
            'CALIBRATE': 'CALIBRATE',
            'CALIBRAR': 'CALIBRATE',
            'ESCALA': 'CALIBRATE',
            'ALINHAR': 'CALIBRATE',
            'UNDERLAYROTATE': 'UNDERLAYROTATE',
            'ROTCALCO': 'UNDERLAYROTATE',
            'GIRARCALCO': 'UNDERLAYROTATE',
            'ROTIMG': 'UNDERLAYROTATE',
            'GIRAR': 'UNDERLAYROTATE',
            'UNDERLAYSCALE': 'UNDERLAYSCALE',
            'ESCALACALCO': 'UNDERLAYSCALE',
            'SCALECALCO': 'UNDERLAYSCALE',
            'UNDERLAYMOVE': 'UNDERLAYMOVE',
            'MOVERCALCO': 'UNDERLAYMOVE',
            'MOVECALCO': 'UNDERLAYMOVE'
        };

        // AutoCAD Autocomplete Catalog with descriptions
        this.commandCatalog = [
            { alias: 'NEW', name: 'NEW', desc: 'Inicia um novo desenho em branco (Ctrl+N)', descEn: 'Creates a new blank drawing (Ctrl+N)' },
            { alias: 'PLANTA', name: 'SAMPLE', desc: 'Carrega a Planta Baixa Residencial modelo de 25x10m', descEn: 'Loads the full 25x10m Residential Sample Floor Plan' },
            { alias: 'L', name: 'LINE', desc: 'Desenha segmentos de linha reta contínua', descEn: 'Draws continuous straight line segments' },
            { alias: 'PL', name: 'PLINE', desc: 'Desenha polilinha conectada com múltiplos segmentos', descEn: 'Draws connected 2D polyline segments' },
            { alias: 'C', name: 'CIRCLE', desc: 'Desenha círculos por centro e raio', descEn: 'Draws circle by center point and radius' },
            { alias: 'REC', name: 'RECTANG', desc: 'Desenha retângulos ortogonais por dois cantos', descEn: 'Draws rectangular polyline by two corners' },
            { alias: 'A', name: 'ARC', desc: 'Desenha arcos circulares usando 3 pontos', descEn: 'Draws 3-point circular arc' },
            { alias: 'M', name: 'MOVE', desc: 'Move objetos selecionados com ponto base', descEn: 'Moves selected objects from base point' },
            { alias: 'CO', name: 'COPY', desc: 'Copia objetos mantendo os originais', descEn: 'Copies selected objects with base point' },
            { alias: 'RO', name: 'ROTATE', desc: 'Rotaciona objetos em torno de um ponto em graus', descEn: 'Rotates objects around base point by angle' },
            { alias: 'SC', name: 'SCALE', desc: 'Altera a escala de objetos selecionados com ponto base', descEn: 'Scales objects equally in all directions' },
            { alias: 'MI', name: 'MIRROR', desc: 'Espelha objetos selecionados em torno de um eixo', descEn: 'Mirrors selected objects across reflection line' },
            { alias: 'B', name: 'BLOCK', desc: 'Cria uma definição de bloco novo a partir dos objetos selecionados', descEn: 'Creates a block definition from selected objects' },
            { alias: 'G', name: 'GROUP', desc: 'Agrupa objetos soltos em um único conjunto selecionável', descEn: 'Groups objects into a selectable set' },
            { alias: 'UNG', name: 'UNGROUP', desc: 'Desagrupa um conjunto de objetos previamente agrupados', descEn: 'Ungroups previously grouped objects' },
            { alias: 'X', name: 'EXPLODE', desc: 'Decompõe blocos em primitivas ou polilinhas em linhas', descEn: 'Explodes blocks or polylines into primitives' },
            { alias: 'F', name: 'FILLET', desc: 'Une ou arredonda linhas em cantos perfeitos', descEn: 'Rounds or fillets edges between intersecting lines' },
            { alias: 'O', name: 'OFFSET', desc: 'Cria paralelas ou cópias concêntricas com distância', descEn: 'Creates concentric circles, parallel lines and curves' },
            { alias: 'TR', name: 'TRIM', desc: 'Apara / corta extremidades de objetos que se cruzam', descEn: 'Trims objects to meet the edges of other objects' },
            { alias: 'EX', name: 'EXTEND', desc: 'Estende linhas até o limite de outro objeto', descEn: 'Extends objects to meet the edges of other objects' },
            { alias: 'E', name: 'ERASE', desc: 'Apaga ou exclui entidades selecionadas', descEn: 'Removes selected objects from the drawing' },
            { alias: 'DIM', name: 'DIMALIGNED', desc: 'Cria cota com encaixe magnético em endpoints (horizontal, vertical ou inclinada)', descEn: 'Creates aligned dimension with endpoint snap' },
            { alias: 'DAL', name: 'DIMALIGNED', desc: 'Cria cota alinhada a qualquer peça (horizontal, vertical ou inclinada)', descEn: 'Creates aligned dimension for any piece' },
            { alias: 'DLI', name: 'DIMLINEAR', desc: 'Cria cota linear ortogonal projetada (horizontal ou vertical)', descEn: 'Creates projected horizontal or vertical linear dimension' },
            { alias: 'DIMSCALE', name: 'DIMSCALE', desc: 'Ajusta o fator de escala global das cotas (DIMSCALE)', descEn: 'Sets the overall scale factor applied to dimension variables' },
            { alias: 'DIMTXT', name: 'DIMTXT', desc: 'Define a altura do texto das cotas dimensionais em metros (m)', descEn: 'Sets the height of dimension text in meters' },
            { alias: 'MT', name: 'MTEXT', desc: 'Insere texto técnico formatado no desenho', descEn: 'Creates a multiline text object' },
            { alias: 'Z', name: 'ZOOM', desc: 'Ajusta visualização da tela (ex: Z E para Zoom Extents)', descEn: 'Increases or decreases apparent size of objects' },
            { alias: 'LA', name: 'LAYER', desc: 'Abre o Gerenciador de Propriedades de Camadas', descEn: 'Manages layers and layer properties' },
            { alias: 'U', name: 'UNDO', desc: 'Desfaz a última ação realizada', descEn: 'Reverses the effect of previous commands' },
            { alias: 'REDO', name: 'REDO', desc: 'Restaura a ação desfeita pelo Undo', descEn: 'Reverses previous Undo action' },
            { alias: 'RE', name: 'REGEN', desc: 'Regenera a tela e recalcula as curvas vetoriais', descEn: 'Regenerates the entire drawing from current viewport' },
            { alias: 'PLOT', name: 'PLOT', desc: 'Gera prancha técnica ABNT para impressão ou PDF', descEn: 'Plots drawing to PDF sheet or printer' },
            { alias: 'EXPORT', name: 'EXPORT', desc: 'Exporta imagem em alta resolução com fundo sólido (PNG/JPG)', descEn: 'Exports high-resolution framed drawing image (PNG/JPG)' },
            { alias: 'PNG', name: 'PNG', desc: 'Exporta imagem PNG em alta resolução com fundo sólido', descEn: 'Exports high-resolution solid background PNG image' },
            { alias: 'JPG', name: 'JPG', desc: 'Exporta imagem JPEG do projeto com enquadramento automático', descEn: 'Exports project JPEG image' },
            { alias: 'QSAVE', name: 'QSAVE', desc: 'Salva o projeto em arquivo DXF nativo', descEn: 'Quickly saves the current drawing as DXF' },
            { alias: 'AUTOSAVE', name: 'AUTOSAVE', desc: 'Salva imediatamente o desenho no cache de segurança', descEn: 'Immediately saves drawing snapshot to local cache' },
            { alias: 'RECOVER', name: 'RECOVER', desc: 'AutoCAD Drawing Recovery: restaura projeto do AutoSave', descEn: 'Drawing Recovery: restores drawing from AutoSave cache' },
            { alias: 'OPEN', name: 'OPEN', desc: 'Abre desenhos técnicos em formato DXF ou DWG', descEn: 'Opens an existing DXF or DWG drawing file' },
            { alias: 'PDFATTACH', name: 'PDFATTACH', desc: 'Anexa projeto ou prancha PDF sob o desenho como calco técnico', descEn: 'Attaches a PDF sheet or drawing underlay under the model' },
            { alias: 'IMAGEATTACH', name: 'IMAGEATTACH', desc: 'Anexa imagem PNG/JPG sob o desenho como calco técnico', descEn: 'Attaches a PNG/JPG raster image underlay under the model' },
            { alias: 'CALIBRATE', name: 'CALIBRATE', desc: 'Calibra a escala métrica real 1:1 do calco PDF por 2 pontos', descEn: 'Calibrates 1:1 real-world scale of PDF underlay by 2 reference points' },
            { alias: 'UNDERLAY', name: 'UNDERLAY', desc: 'Exibe a barra de controle do calco PDF (opacidade, trava, escala)', descEn: 'Shows underlay control HUD bar (opacity, lock, scale, remove)' },
            { alias: 'PR', name: 'PROPERTIES', desc: 'Abre a Paleta de Propriedades Rápidas (Ctrl+1)', descEn: 'Opens the Quick Properties inspector panel' },
            { alias: 'D', name: 'DIMSTYLE', desc: 'Abre Paleta de Propriedades e Estilo da Cota (DIMSCALE / DIMTXT)', descEn: 'Opens Properties panel and Dimension Style' },
            { alias: 'I', name: 'INSERT', desc: 'Insere blocos de esquadrias, sanitários e símbolos ABNT', descEn: 'Inserts architectural and engineering blocks' },
            { alias: 'LTS', name: 'LTSCALE', desc: 'Ajusta o fator de escala global dos tipos de linha (tracejado/centro)', descEn: 'Sets global linetype scale factor' },
            { alias: 'LT', name: 'LINETYPE', desc: 'Gerencia e lista os tipos de linha técnicos ABNT', descEn: 'Loads, sets, and modifies linetypes' }
        ];

        // Command definitions with multi-step workflows
        this.commandDefs = {
            'LINE': {
                name: 'LINE',
                start: () => {
                    this.setPrompt('LINE Specify first point:');
                    this.commandData = { points: [] };
                    this.commandStep = 1;
                },
                onClick: (pt) => {
                    if (this.commandStep === 1) {
                        this.commandData.points.push(pt);
                        this.setPrompt('LINE Specify next point or [Undo]:');
                        this.commandStep = 2;
                    } else if (this.commandStep === 2) {
                        const lastPt = this.commandData.points[this.commandData.points.length - 1];
                        this.engine.addLine(lastPt.x, lastPt.y, pt.x, pt.y);
                        this.commandData.points.push(pt);
                        this.setPrompt('LINE Specify next point or [Close/Undo]:');
                    }
                },
                onMouseMove: (pt) => {
                    if (this.commandStep === 2 && this.commandData.points.length > 0) {
                        this.commandData.lastMouseWorld = pt;
                        const lastPt = this.commandData.points[this.commandData.points.length - 1];
                        this.engine.previewEntity = {
                            type: 'LINE',
                            x1: lastPt.x,
                            y1: lastPt.y,
                            x2: pt.x,
                            y2: pt.y,
                            color: '#00ffff'
                        };
                        const dist = Math.hypot(pt.x - lastPt.x, pt.y - lastPt.y);
                        let angDeg = Math.atan2(pt.y - lastPt.y, pt.x - lastPt.x) * (180 / Math.PI);
                        if (angDeg < 0) angDeg += 360;
                        this.setPrompt(`LINE Specify next point or [Close/Undo] <${dist.toFixed(2)}m @${angDeg.toFixed(1)}°>:`);
                        this.engine.requestRender();
                    }
                },
                onEnter: (input) => {
                    input = (input || '').trim();
                    if (!input) {
                        this.cancel();
                        return;
                    }
                    if (input.toUpperCase() === 'C' && this.commandData.points.length >= 2) {
                        const firstPt = this.commandData.points[0];
                        const lastPt = this.commandData.points[this.commandData.points.length - 1];
                        this.engine.addLine(lastPt.x, lastPt.y, firstPt.x, firstPt.y);
                        this.cancel();
                        return;
                    }
                    if (input.toUpperCase() === 'U' && this.commandData.points.length > 1) {
                        this.commandData.points.pop();
                        this.engine.undo();
                        this.engine.render();
                        return;
                    }
                    if (this.commandStep === 2 && this.commandData.points.length > 0) {
                        const lastPt = this.commandData.points[this.commandData.points.length - 1];
                        const coordPt = this.parseCoordinates(input, lastPt);
                        if (coordPt) {
                            this.engine.addLine(lastPt.x, lastPt.y, coordPt.x, coordPt.y);
                            this.commandData.points.push(coordPt);
                            this.setPrompt('LINE Specify next point or [Close/Undo]:');
                            this.engine.render();
                            return;
                        }
                        const dist = parseFloat(input);
                        if (!isNaN(dist) && dist > 0) {
                            const mouse = this.commandData.lastMouseWorld || this.engine.mouseWorld;
                            let ang = Math.atan2(mouse.y - lastPt.y, mouse.x - lastPt.x);
                            if (this.engine.orthoEnabled) {
                                const dxRaw = Math.abs(mouse.x - lastPt.x);
                                const dyRaw = Math.abs(mouse.y - lastPt.y);
                                if (dxRaw >= dyRaw) ang = (mouse.x >= lastPt.x) ? 0 : Math.PI;
                                else ang = (mouse.y >= lastPt.y) ? Math.PI / 2 : -Math.PI / 2;
                            }
                            const nextPt = {
                                x: lastPt.x + dist * Math.cos(ang),
                                y: lastPt.y + dist * Math.sin(ang)
                            };
                            this.engine.addLine(lastPt.x, lastPt.y, nextPt.x, nextPt.y);
                            this.commandData.points.push(nextPt);
                            this.setPrompt('LINE Specify next point or [Close/Undo]:');
                            this.engine.render();
                            return;
                        }
                    }
                    this.cancel();
                }
            },

            'PLINE': {
                name: 'PLINE',
                start: () => {
                    this.setPrompt('PLINE Specify start point:');
                    this.commandData = { points: [] };
                    this.commandStep = 1;
                },
                onClick: (pt) => {
                    if (this.commandStep === 1) {
                        this.commandData.points.push(pt);
                        this.setPrompt('PLINE Specify next point or [Close/Undo]:');
                        this.commandStep = 2;
                    } else if (this.commandStep === 2) {
                        this.commandData.points.push(pt);
                        this.setPrompt('PLINE Specify next point or [Close/Undo]:');
                    }
                },
                onMouseMove: (pt) => {
                    if (this.commandStep === 2 && this.commandData.points.length > 0) {
                        this.commandData.lastMouseWorld = pt;
                        const lastPt = this.commandData.points[this.commandData.points.length - 1];
                        const pts = [...this.commandData.points, pt];
                        this.engine.previewEntity = {
                            type: 'POLYLINE',
                            points: pts,
                            color: '#00ffff'
                        };
                        const dist = Math.hypot(pt.x - lastPt.x, pt.y - lastPt.y);
                        let angDeg = Math.atan2(pt.y - lastPt.y, pt.x - lastPt.x) * (180 / Math.PI);
                        if (angDeg < 0) angDeg += 360;
                        this.setPrompt(`PLINE Specify next point or [Close/Undo] <${dist.toFixed(2)}m @${angDeg.toFixed(1)}°>:`);
                        this.engine.requestRender();
                    }
                },
                onEnter: (input) => {
                    input = (input || '').trim();
                    const pts = this.commandData.points;
                    if (!input) {
                        if (pts.length >= 2) {
                            this.engine.addPolyline(pts, false);
                        }
                        this.cancel();
                        return;
                    }
                    if (input.toUpperCase() === 'C' && pts.length >= 2) {
                        this.engine.addPolyline(pts, true);
                        this.cancel();
                        return;
                    }
                    if (input.toUpperCase() === 'U' && pts.length > 1) {
                        pts.pop();
                        this.engine.render();
                        return;
                    }
                    if (this.commandStep === 2 && pts.length > 0) {
                        const lastPt = pts[pts.length - 1];
                        const coordPt = this.parseCoordinates(input, lastPt);
                        if (coordPt) {
                            pts.push(coordPt);
                            this.setPrompt('PLINE Specify next point or [Close/Undo]:');
                            this.engine.render();
                            return;
                        }
                        const dist = parseFloat(input);
                        if (!isNaN(dist) && dist > 0) {
                            const mouse = this.commandData.lastMouseWorld || this.engine.mouseWorld;
                            let ang = Math.atan2(mouse.y - lastPt.y, mouse.x - lastPt.x);
                            if (this.engine.orthoEnabled) {
                                const dxRaw = Math.abs(mouse.x - lastPt.x);
                                const dyRaw = Math.abs(mouse.y - lastPt.y);
                                if (dxRaw >= dyRaw) ang = (mouse.x >= lastPt.x) ? 0 : Math.PI;
                                else ang = (mouse.y >= lastPt.y) ? Math.PI / 2 : -Math.PI / 2;
                            }
                            const nextPt = {
                                x: lastPt.x + dist * Math.cos(ang),
                                y: lastPt.y + dist * Math.sin(ang)
                            };
                            pts.push(nextPt);
                            this.setPrompt('PLINE Specify next point or [Close/Undo]:');
                            this.engine.render();
                            return;
                        }
                    }
                    if (pts.length >= 2) {
                        this.engine.addPolyline(pts, false);
                    }
                    this.cancel();
                }
            },

            'CIRCLE': {
                name: 'CIRCLE',
                start: () => {
                    this.setPrompt('CIRCLE Specify center point for circle:');
                    this.commandData = {};
                    this.commandStep = 1;
                },
                onClick: (pt) => {
                    if (this.commandStep === 1) {
                        this.commandData.center = pt;
                        this.setPrompt('CIRCLE Specify radius of circle or [Diameter]:');
                        this.commandStep = 2;
                    } else if (this.commandStep === 2) {
                        const dx = pt.x - this.commandData.center.x;
                        const dy = pt.y - this.commandData.center.y;
                        const r = Math.sqrt(dx * dx + dy * dy);
                        this.engine.addCircle(this.commandData.center.x, this.commandData.center.y, r);
                        this.cancel();
                    }
                },
                onMouseMove: (pt) => {
                    if (this.commandStep === 2 && this.commandData.center) {
                        const dx = pt.x - this.commandData.center.x;
                        const dy = pt.y - this.commandData.center.y;
                        const r = Math.sqrt(dx * dx + dy * dy);
                        this.engine.previewEntity = {
                            type: 'CIRCLE',
                            cx: this.commandData.center.x,
                            cy: this.commandData.center.y,
                            r: r,
                            color: '#00ffff'
                        };
                        const promptText = this.commandData.isDiameter 
                            ? `CIRCLE Specify diameter of circle <${(r * 2).toFixed(2)}m>:` 
                            : `CIRCLE Specify radius of circle or [Diameter] <${r.toFixed(2)}m>:`;
                        this.setPrompt(promptText);
                        this.engine.requestRender();
                    }
                },
                onEnter: (input) => {
                    input = (input || '').trim();
                    if (this.commandStep === 2 && input) {
                        if (input.toUpperCase() === 'D') {
                            this.commandData.isDiameter = true;
                            this.setPrompt('CIRCLE Specify diameter of circle:');
                            return;
                        }
                        const val = parseFloat(input);
                        if (!isNaN(val) && val > 0) {
                            const r = this.commandData.isDiameter ? (val / 2) : val;
                            this.engine.addCircle(this.commandData.center.x, this.commandData.center.y, r);
                            this.cancel();
                        }
                    }
                }
            },

            'RECTANG': {
                name: 'RECTANG',
                start: () => {
                    this.setPrompt('RECTANG Specify first corner point:');
                    this.commandData = {};
                    this.commandStep = 1;
                },
                onClick: (pt) => {
                    if (this.commandStep === 1) {
                        this.commandData.p1 = pt;
                        this.setPrompt('RECTANG Specify other corner point:');
                        this.commandStep = 2;
                    } else if (this.commandStep === 2) {
                        this.engine.addRectangle(this.commandData.p1.x, this.commandData.p1.y, pt.x, pt.y);
                        this.cancel();
                    }
                },
                onMouseMove: (pt) => {
                    if (this.commandStep === 2 && this.commandData.p1) {
                        this.commandData.lastMouseWorld = pt;
                        this.engine.previewEntity = {
                            type: 'RECTANGLE',
                            x1: this.commandData.p1.x,
                            y1: this.commandData.p1.y,
                            x2: pt.x,
                            y2: pt.y,
                            color: '#00ffff'
                        };
                        const w = Math.abs(pt.x - this.commandData.p1.x);
                        const h = Math.abs(pt.y - this.commandData.p1.y);
                        this.setPrompt(`RECTANG Specify other corner point <${w.toFixed(2)}m x ${h.toFixed(2)}m>:`);
                        this.engine.requestRender();
                    }
                },
                onEnter: (input) => {
                    if (this.commandStep === 2 && input && this.commandData.p1) {
                        input = input.trim();
                        let coords = null;
                        if (input.includes(',')) {
                            const parts = input.replace('@', '').split(',');
                            const w = parseFloat(parts[0]);
                            const h = parseFloat(parts[1]);
                            if (!isNaN(w) && !isNaN(h)) {
                                coords = { x: this.commandData.p1.x + w, y: this.commandData.p1.y + h };
                            }
                        } else {
                            coords = this.parseCoordinates(input, this.commandData.p1);
                        }
                        if (coords) {
                            this.engine.addRectangle(this.commandData.p1.x, this.commandData.p1.y, coords.x, coords.y);
                            this.cancel();
                        }
                    }
                }
            },

            'ARC': {
                name: 'ARC',
                start: () => {
                    this.setPrompt('ARC Specify start point of arc:');
                    this.commandData = {};
                    this.commandStep = 1;
                },
                onClick: (pt) => {
                    if (this.commandStep === 1) {
                        this.commandData.p1 = pt;
                        this.setPrompt('ARC Specify second point of arc:');
                        this.commandStep = 2;
                    } else if (this.commandStep === 2) {
                        this.commandData.p2 = pt;
                        this.setPrompt('ARC Specify end point of arc:');
                        this.commandStep = 3;
                    } else if (this.commandStep === 3) {
                        const p1 = this.commandData.p1;
                        const p2 = this.commandData.p2;
                        const p3 = pt;
                        const circle = this.getCircleFrom3Points(p1, p2, p3);
                        if (circle) {
                            let startAngle = Math.atan2(p1.y - circle.y, p1.x - circle.x);
                            let endAngle = Math.atan2(p3.y - circle.y, p3.x - circle.x);
                            this.engine.addArc(circle.x, circle.y, circle.r, startAngle, endAngle);
                        } else {
                            this.engine.addLine(p1.x, p1.y, p2.x, p2.y);
                            this.engine.addLine(p2.x, p2.y, p3.x, p3.y);
                        }
                        this.cancel();
                    }
                },
                onMouseMove: (pt) => {
                    if (this.commandStep === 2 && this.commandData.p1) {
                        this.engine.previewEntity = {
                            type: 'LINE',
                            x1: this.commandData.p1.x,
                            y1: this.commandData.p1.y,
                            x2: pt.x,
                            y2: pt.y,
                            color: '#00ffff'
                        };
                        this.engine.requestRender();
                    } else if (this.commandStep === 3 && this.commandData.p1 && this.commandData.p2) {
                        const circle = this.getCircleFrom3Points(this.commandData.p1, this.commandData.p2, pt);
                        if (circle) {
                            let startAngle = Math.atan2(this.commandData.p1.y - circle.y, this.commandData.p1.x - circle.x);
                            let endAngle = Math.atan2(pt.y - circle.y, pt.x - circle.x);
                            this.engine.previewEntity = {
                                type: 'ARC',
                                cx: circle.x,
                                cy: circle.y,
                                r: circle.r,
                                startAngle: startAngle,
                                endAngle: endAngle,
                                color: '#00ffff'
                            };
                            this.engine.requestRender();
                        }
                    }
                }
            },

            'MOVE': {
                name: 'MOVE',
                start: () => {
                    if (this.engine.selectedIds.size === 0) {
                        this.setPrompt('MOVE Select objects (Click objects and press Enter):');
                        this.commandStep = 0;
                    } else {
                        this.setPrompt('MOVE Specify base point:');
                        this.commandStep = 1;
                    }
                },
                onClick: (pt) => {
                    if (this.commandStep === 0) {
                        const hit = this.engine.findEntityAt(this.engine.mouseScreen.x, this.engine.mouseScreen.y);
                        if (hit) {
                            if (this.engine.selectEntityAndGroup) this.engine.selectEntityAndGroup(hit, true);
                            else this.engine.selectedIds.add(hit.id);
                            this.setPrompt(`MOVE Select objects: (${this.engine.selectedIds.size} selected, press Enter when done)`);
                            this.engine.requestRender();
                        }
                    } else if (this.commandStep === 1) {
                        this.commandData.basePoint = { x: pt.x, y: pt.y };
                        this.setPrompt('MOVE Specify second point or [Distance / @X,Y]:');
                        this.commandStep = 2;
                    } else if (this.commandStep === 2) {
                        const bp = this.commandData.basePoint;
                        const dx = pt.x - bp.x;
                        const dy = pt.y - bp.y;
                        this.engine.previewEntities = null;
                        this.engine.rubberband = null;
                        this.engine.moveSelected(dx, dy);
                        this.cancel();
                    }
                },
                onMouseMove: (worldPt) => {
                    if (this.commandStep === 2 && this.commandData.basePoint) {
                        this.commandData.lastMouseWorld = worldPt;
                        const bp = this.commandData.basePoint;
                        const dx = worldPt.x - bp.x;
                        const dy = worldPt.y - bp.y;

                        // 1. Rubberband guideline connecting base point to cursor
                        this.engine.rubberband = {
                            type: 'LINE',
                            x1: bp.x,
                            y1: bp.y,
                            x2: worldPt.x,
                            y2: worldPt.y,
                            color: '#00e5ff'
                        };

                        // 2. Real-time ghost preview of the moving block/selection
                        const previews = [];
                        for (const id of this.engine.selectedIds) {
                            const ent = this.engine.entities.find(e => e.id === id);
                            if (ent) {
                                const clone = JSON.parse(JSON.stringify(ent));
                                if (clone.type === 'LINE' || clone.type === 'DIMENSION') {
                                    clone.x1 += dx; clone.y1 += dy;
                                    clone.x2 += dx; clone.y2 += dy;
                                } else if (clone.type === 'CIRCLE' || clone.type === 'ARC') {
                                    clone.cx += dx; clone.cy += dy;
                                } else if (clone.type === 'POLYLINE' && clone.points) {
                                    for (let i = 0; i < clone.points.length; i++) {
                                        clone.points[i].x += dx;
                                        clone.points[i].y += dy;
                                    }
                                } else if (clone.type === 'TEXT') {
                                    clone.x += dx; clone.y += dy;
                                }
                                previews.push(clone);
                            }
                        }
                        this.engine.previewEntities = previews;

                        // 3. Dynamic prompt with distance and angle
                        const dist = Math.hypot(dx, dy);
                        let angDeg = Math.atan2(dy, dx) * (180 / Math.PI);
                        if (angDeg < 0) angDeg += 360;
                        this.setPrompt(`MOVE Specify second point or distance <${dist.toFixed(2)}m @${angDeg.toFixed(1)}°>:`);
                        this.engine.requestRender();
                    }
                },
                onEnter: (input) => {
                    if (this.commandStep === 0) {
                        if (this.engine.selectedIds.size > 0) {
                            this.setPrompt('MOVE Specify base point:');
                            this.commandStep = 1;
                        } else {
                            this.cancel();
                        }
                        return;
                    }
                    if (this.commandStep === 2 && this.commandData.basePoint) {
                        const bp = this.commandData.basePoint;
                        input = (input || '').trim();

                        if (!input) {
                            const pt = this.commandData.lastMouseWorld || this.engine.mouseWorld;
                            const dx = pt.x - bp.x;
                            const dy = pt.y - bp.y;
                            this.engine.previewEntities = null;
                            this.engine.rubberband = null;
                            this.engine.moveSelected(dx, dy);
                            this.cancel();
                            return;
                        }

                        const coordPt = this.parseCoordinates(input, bp);
                        if (coordPt) {
                            const dx = coordPt.x - bp.x;
                            const dy = coordPt.y - bp.y;
                            this.engine.previewEntities = null;
                            this.engine.rubberband = null;
                            this.engine.moveSelected(dx, dy);
                            this.cancel();
                            return;
                        }

                        const dist = parseFloat(input);
                        if (!isNaN(dist)) {
                            const mouse = this.commandData.lastMouseWorld || this.engine.mouseWorld;
                            let ang = Math.atan2(mouse.y - bp.y, mouse.x - bp.x);
                            if (this.engine.orthoEnabled) {
                                const dxRaw = Math.abs(mouse.x - bp.x);
                                const dyRaw = Math.abs(mouse.y - bp.y);
                                if (dxRaw >= dyRaw) ang = (mouse.x >= bp.x) ? 0 : Math.PI;
                                else ang = (mouse.y >= bp.y) ? Math.PI / 2 : -Math.PI / 2;
                            }
                            const dx = dist * Math.cos(ang);
                            const dy = dist * Math.sin(ang);
                            this.engine.previewEntities = null;
                            this.engine.rubberband = null;
                            this.engine.moveSelected(dx, dy);
                            this.cancel();
                            return;
                        }
                    }
                }
            },

            'COPY': {
                name: 'COPY',
                start: () => {
                    if (this.engine.selectedIds.size === 0) {
                        this.setPrompt('COPY Select objects (Click objects and press Enter):');
                        this.commandStep = 0;
                    } else {
                        this.setPrompt('COPY Specify base point:');
                        this.commandStep = 1;
                    }
                },
                onClick: (pt) => {
                    if (this.commandStep === 0) {
                        const hit = this.engine.findEntityAt(this.engine.mouseScreen.x, this.engine.mouseScreen.y);
                        if (hit) {
                            if (this.engine.selectEntityAndGroup) this.engine.selectEntityAndGroup(hit, true);
                            else this.engine.selectedIds.add(hit.id);
                            this.setPrompt(`COPY Select objects: (${this.engine.selectedIds.size} selected, press Enter when done)`);
                            this.engine.requestRender();
                        }
                    } else if (this.commandStep === 1) {
                        this.commandData.basePoint = { x: pt.x, y: pt.y };
                        this.setPrompt('COPY Specify second point or [Distance / Exit]:');
                        this.commandStep = 2;
                    } else if (this.commandStep === 2) {
                        const bp = this.commandData.basePoint;
                        const dx = pt.x - bp.x;
                        const dy = pt.y - bp.y;
                        this.engine.copySelected(dx, dy);
                        this.setPrompt('COPY Specify next point or [Enter to Exit]:');
                    }
                },
                onMouseMove: (worldPt) => {
                    if (this.commandStep === 2 && this.commandData.basePoint) {
                        this.commandData.lastMouseWorld = worldPt;
                        const bp = this.commandData.basePoint;
                        const dx = worldPt.x - bp.x;
                        const dy = worldPt.y - bp.y;

                        this.engine.rubberband = {
                            type: 'LINE',
                            x1: bp.x,
                            y1: bp.y,
                            x2: worldPt.x,
                            y2: worldPt.y,
                            color: '#00e5ff'
                        };

                        const previews = [];
                        for (const id of this.engine.selectedIds) {
                            const ent = this.engine.entities.find(e => e.id === id);
                            if (ent) {
                                const clone = JSON.parse(JSON.stringify(ent));
                                if (clone.type === 'LINE' || clone.type === 'DIMENSION') {
                                    clone.x1 += dx; clone.y1 += dy;
                                    clone.x2 += dx; clone.y2 += dy;
                                } else if (clone.type === 'CIRCLE' || clone.type === 'ARC') {
                                    clone.cx += dx; clone.cy += dy;
                                } else if (clone.type === 'POLYLINE' && clone.points) {
                                    for (let i = 0; i < clone.points.length; i++) {
                                        clone.points[i].x += dx;
                                        clone.points[i].y += dy;
                                    }
                                } else if (clone.type === 'TEXT') {
                                    clone.x += dx; clone.y += dy;
                                }
                                previews.push(clone);
                            }
                        }
                        this.engine.previewEntities = previews;

                        const dist = Math.hypot(dx, dy);
                        let angDeg = Math.atan2(dy, dx) * (180 / Math.PI);
                        if (angDeg < 0) angDeg += 360;
                        this.setPrompt(`COPY Specify second point or distance <${dist.toFixed(2)}m @${angDeg.toFixed(1)}°>:`);
                        this.engine.requestRender();
                    }
                },
                onEnter: (input) => {
                    if (this.commandStep === 0) {
                        if (this.engine.selectedIds.size > 0) {
                            this.setPrompt('COPY Specify base point:');
                            this.commandStep = 1;
                        } else {
                            this.cancel();
                        }
                        return;
                    }
                    if (this.commandStep === 2) {
                        input = (input || '').trim();
                        if (!input) {
                            this.cancel();
                            return;
                        }
                        const bp = this.commandData.basePoint;
                        const coordPt = this.parseCoordinates(input, bp);
                        if (coordPt) {
                            const dx = coordPt.x - bp.x;
                            const dy = coordPt.y - bp.y;
                            this.engine.copySelected(dx, dy);
                            this.setPrompt('COPY Specify next point or [Enter to Exit]:');
                            return;
                        }
                        const dist = parseFloat(input);
                        if (!isNaN(dist) && bp) {
                            const mouse = this.commandData.lastMouseWorld || this.engine.mouseWorld;
                            let ang = Math.atan2(mouse.y - bp.y, mouse.x - bp.x);
                            if (this.engine.orthoEnabled) {
                                const dxRaw = Math.abs(mouse.x - bp.x);
                                const dyRaw = Math.abs(mouse.y - bp.y);
                                if (dxRaw >= dyRaw) ang = (mouse.x >= bp.x) ? 0 : Math.PI;
                                else ang = (mouse.y >= bp.y) ? Math.PI / 2 : -Math.PI / 2;
                            }
                            const dx = dist * Math.cos(ang);
                            const dy = dist * Math.sin(ang);
                            this.engine.copySelected(dx, dy);
                            this.setPrompt('COPY Specify next point or [Enter to Exit]:');
                            return;
                        }
                        this.cancel();
                    }
                }
            },

            'ROTATE': {
                name: 'ROTATE',
                start: () => {
                    if (this.engine.selectedIds.size === 0) {
                        this.setPrompt('ROTATE Select objects (Click objects and press Enter):');
                        this.commandStep = 0;
                    } else {
                        this.setPrompt('ROTATE Specify base point:');
                        this.commandStep = 1;
                    }
                },
                onClick: (pt) => {
                    if (this.commandStep === 0) {
                        const hit = this.engine.findEntityAt(this.engine.mouseScreen.x, this.engine.mouseScreen.y);
                        if (hit) {
                            if (this.engine.selectEntityAndGroup) this.engine.selectEntityAndGroup(hit, true);
                            else this.engine.selectedIds.add(hit.id);
                            this.setPrompt(`ROTATE Select objects: (${this.engine.selectedIds.size} selected, press Enter when done)`);
                            this.engine.requestRender();
                        }
                    } else if (this.commandStep === 1) {
                        this.commandData.basePoint = { x: pt.x, y: pt.y };
                        this.setPrompt('ROTATE Specify rotation angle or [Reference / Angle]:');
                        this.commandStep = 2;
                    } else if (this.commandStep === 2) {
                        const bp = this.commandData.basePoint;
                        const angle = Math.atan2(pt.y - bp.y, pt.x - bp.x);
                        this.engine.previewEntities = null;
                        this.engine.rubberband = null;
                        this.engine.rotateSelected(bp.x, bp.y, angle);
                        this.cancel();
                    }
                },
                onMouseMove: (worldPt) => {
                    if (this.commandStep === 2 && this.commandData.basePoint) {
                        const bp = this.commandData.basePoint;
                        const angle = Math.atan2(worldPt.y - bp.y, worldPt.x - bp.x);
                        let deg = angle * (180 / Math.PI);
                        if (deg < 0) deg += 360;

                        this.engine.rubberband = {
                            type: 'LINE',
                            x1: bp.x,
                            y1: bp.y,
                            x2: worldPt.x,
                            y2: worldPt.y,
                            color: '#00e5ff'
                        };

                        const cos = Math.cos(angle);
                        const sin = Math.sin(angle);
                        const rotPt = (x, y) => ({
                            x: bp.x + (x - bp.x) * cos - (y - bp.y) * sin,
                            y: bp.y + (x - bp.x) * sin + (y - bp.y) * cos
                        });

                        const previews = [];
                        for (const id of this.engine.selectedIds) {
                            const ent = this.engine.entities.find(e => e.id === id);
                            if (ent) {
                                const clone = JSON.parse(JSON.stringify(ent));
                                if (clone.type === 'LINE' || clone.type === 'DIMENSION') {
                                    const p1 = rotPt(clone.x1, clone.y1);
                                    const p2 = rotPt(clone.x2, clone.y2);
                                    clone.x1 = p1.x; clone.y1 = p1.y; clone.x2 = p2.x; clone.y2 = p2.y;
                                } else if (clone.type === 'CIRCLE') {
                                    const c = rotPt(clone.cx, clone.cy);
                                    clone.cx = c.x; clone.cy = c.y;
                                } else if (clone.type === 'ARC') {
                                    const c = rotPt(clone.cx, clone.cy);
                                    clone.cx = c.x; clone.cy = c.y;
                                    clone.startAngle = (clone.startAngle + angle) % (2 * Math.PI);
                                    clone.endAngle = (clone.endAngle + angle) % (2 * Math.PI);
                                } else if (clone.type === 'POLYLINE' && clone.points) {
                                    clone.points = clone.points.map(p => rotPt(p.x, p.y));
                                } else if (clone.type === 'TEXT') {
                                    const p = rotPt(clone.x, clone.y);
                                    clone.x = p.x; clone.y = p.y;
                                    clone.rotation = (clone.rotation || 0) + angle;
                                }
                                previews.push(clone);
                            }
                        }
                        this.engine.previewEntities = previews;
                        this.setPrompt(`ROTATE Specify rotation angle <${deg.toFixed(1)}°>:`);
                        this.engine.requestRender();
                    }
                },
                onEnter: (input) => {
                    if (this.commandStep === 0) {
                        if (this.engine.selectedIds.size > 0) {
                            this.setPrompt('ROTATE Specify base point:');
                            this.commandStep = 1;
                        } else {
                            this.cancel();
                        }
                        return;
                    }
                    if (this.commandStep === 2 && input) {
                        const deg = parseFloat(input);
                        if (!isNaN(deg)) {
                            const rad = deg * (Math.PI / 180);
                            const bp = this.commandData.basePoint;
                            this.engine.previewEntities = null;
                            this.engine.rubberband = null;
                            this.engine.rotateSelected(bp.x, bp.y, rad);
                            this.cancel();
                        }
                    }
                }
            },

            'SCALE': {
                name: 'SCALE',
                start: () => {
                    if (this.engine.selectedIds.size === 0) {
                        this.setPrompt('SCALE Select objects (Click objects and press Enter):');
                        this.commandStep = 0;
                    } else {
                        this.setPrompt('SCALE Specify base point:');
                        this.commandStep = 1;
                    }
                },
                onClick: (pt) => {
                    if (this.commandStep === 0) {
                        const hit = this.engine.findEntityAt(this.engine.mouseScreen.x, this.engine.mouseScreen.y);
                        if (hit) {
                            if (this.engine.selectEntityAndGroup) this.engine.selectEntityAndGroup(hit, true);
                            else this.engine.selectedIds.add(hit.id);
                            this.setPrompt(`SCALE Select objects: (${this.engine.selectedIds.size} selected, press Enter when done)`);
                            this.engine.requestRender();
                        }
                    } else if (this.commandStep === 1) {
                        this.commandData.basePoint = { x: pt.x, y: pt.y };
                        this.setPrompt('SCALE Specify scale factor or [Reference / Copy]:');
                        this.commandStep = 2;
                    } else if (this.commandStep === 2) {
                        const bp = this.commandData.basePoint;
                        const dist = Math.hypot(pt.x - bp.x, pt.y - bp.y);
                        const factor = Math.max(0.01, dist);
                        this.engine.previewEntities = null;
                        this.engine.rubberband = null;
                        this.engine.scaleSelected(bp.x, bp.y, factor);
                        this.cancel();
                    }
                },
                onMouseMove: (worldPt) => {
                    if (this.commandStep === 2 && this.commandData.basePoint) {
                        const bp = this.commandData.basePoint;
                        const dist = Math.hypot(worldPt.x - bp.x, worldPt.y - bp.y);
                        const factor = Math.max(0.01, dist);

                        this.engine.rubberband = {
                            type: 'LINE',
                            x1: bp.x,
                            y1: bp.y,
                            x2: worldPt.x,
                            y2: worldPt.y,
                            color: '#00e5ff'
                        };

                        const scalePt = (x, y) => ({
                            x: bp.x + (x - bp.x) * factor,
                            y: bp.y + (y - bp.y) * factor
                        });

                        const previews = [];
                        for (const id of this.engine.selectedIds) {
                            const ent = this.engine.entities.find(e => e.id === id);
                            if (ent) {
                                const clone = JSON.parse(JSON.stringify(ent));
                                if (clone.type === 'LINE' || clone.type === 'DIMENSION') {
                                    const p1 = scalePt(clone.x1, clone.y1);
                                    const p2 = scalePt(clone.x2, clone.y2);
                                    clone.x1 = p1.x; clone.y1 = p1.y; clone.x2 = p2.x; clone.y2 = p2.y;
                                    if (clone.type === 'DIMENSION' && typeof clone.offset === 'number') {
                                        clone.offset *= factor;
                                    }
                                } else if (clone.type === 'CIRCLE') {
                                    const c = scalePt(clone.cx, clone.cy);
                                    clone.cx = c.x; clone.cy = c.y;
                                    clone.r *= factor;
                                } else if (clone.type === 'ARC') {
                                    const c = scalePt(clone.cx, clone.cy);
                                    clone.cx = c.x; clone.cy = c.y;
                                    clone.r *= factor;
                                } else if (clone.type === 'POLYLINE' && clone.points) {
                                    clone.points = clone.points.map(p => scalePt(p.x, p.y));
                                } else if (clone.type === 'TEXT') {
                                    const p = scalePt(clone.x, clone.y);
                                    clone.x = p.x; clone.y = p.y;
                                    clone.height = (clone.height || 0.3) * factor;
                                }
                                previews.push(clone);
                            }
                        }
                        this.engine.previewEntities = previews;
                        this.setPrompt(`SCALE Specify scale factor <${factor.toFixed(2)}x>:`);
                        this.engine.requestRender();
                    }
                },
                onEnter: (input) => {
                    if (this.commandStep === 0) {
                        if (this.engine.selectedIds.size > 0) {
                            this.setPrompt('SCALE Specify base point:');
                            this.commandStep = 1;
                        } else {
                            this.cancel();
                        }
                        return;
                    }
                    if (this.commandStep === 2 && input) {
                        const factor = parseFloat(input);
                        if (!isNaN(factor) && factor > 0) {
                            const bp = this.commandData.basePoint;
                            this.engine.previewEntities = null;
                            this.engine.rubberband = null;
                            this.engine.scaleSelected(bp.x, bp.y, factor);
                            this.cancel();
                        }
                    }
                }
            },

            'MIRROR': {
                name: 'MIRROR',
                start: () => {
                    if (this.engine.selectedIds.size === 0) {
                        this.setPrompt('MIRROR Select objects (Click objects and press Enter):');
                        this.commandStep = 0;
                    } else {
                        this.setPrompt('MIRROR Specify first point of mirror line:');
                        this.commandStep = 1;
                    }
                },
                onClick: (pt) => {
                    if (this.commandStep === 0) {
                        const hit = this.engine.findEntityAt(this.engine.mouseScreen.x, this.engine.mouseScreen.y);
                        if (hit) {
                            if (this.engine.selectEntityAndGroup) this.engine.selectEntityAndGroup(hit, true);
                            else this.engine.selectedIds.add(hit.id);
                            this.setPrompt(`MIRROR Select objects: (${this.engine.selectedIds.size} selected, press Enter when done)`);
                            this.engine.requestRender();
                        }
                    } else if (this.commandStep === 1) {
                        this.commandData.p1 = { x: pt.x, y: pt.y };
                        this.setPrompt('MIRROR Specify second point of mirror line:');
                        this.commandStep = 2;
                    } else if (this.commandStep === 2) {
                        this.commandData.p2 = { x: pt.x, y: pt.y };
                        this.setPrompt('MIRROR Erase source objects? [Yes/No] <N>:');
                        this.commandStep = 3;
                    }
                },
                onMouseMove: (worldPt) => {
                    if (this.commandStep === 2 && this.commandData.p1) {
                        const p1 = this.commandData.p1;
                        this.engine.rubberband = {
                            type: 'LINE',
                            x1: p1.x,
                            y1: p1.y,
                            x2: worldPt.x,
                            y2: worldPt.y,
                            color: '#00e5ff'
                        };

                        const dx = worldPt.x - p1.x;
                        const dy = worldPt.y - p1.y;
                        const len = Math.hypot(dx, dy);
                        if (len > 1e-6) {
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

                            const previews = [];
                            for (const id of this.engine.selectedIds) {
                                const ent = this.engine.entities.find(e => e.id === id);
                                if (ent) {
                                    const clone = JSON.parse(JSON.stringify(ent));
                                    if (clone.type === 'LINE' || clone.type === 'DIMENSION') {
                                        const rp1 = reflectPt(clone.x1, clone.y1);
                                        const rp2 = reflectPt(clone.x2, clone.y2);
                                        clone.x1 = rp1.x; clone.y1 = rp1.y; clone.x2 = rp2.x; clone.y2 = rp2.y;
                                    } else if (clone.type === 'CIRCLE') {
                                        const c = reflectPt(clone.cx, clone.cy);
                                        clone.cx = c.x; clone.cy = c.y;
                                    } else if (clone.type === 'ARC') {
                                        const c = reflectPt(clone.cx, clone.cy);
                                        clone.cx = c.x; clone.cy = c.y;
                                        clone.startAngle = 2 * axisAngle - clone.endAngle;
                                        clone.endAngle = 2 * axisAngle - clone.startAngle;
                                    } else if (clone.type === 'POLYLINE' && clone.points) {
                                        clone.points = clone.points.map(p => reflectPt(p.x, p.y));
                                    } else if (clone.type === 'TEXT') {
                                        const p = reflectPt(clone.x, clone.y);
                                        clone.x = p.x; clone.y = p.y;
                                    }
                                    previews.push(clone);
                                }
                            }
                            this.engine.previewEntities = previews;
                        }
                        this.engine.requestRender();
                    }
                },
                onEnter: (input) => {
                    if (this.commandStep === 0) {
                        if (this.engine.selectedIds.size > 0) {
                            this.setPrompt('MIRROR Specify first point of mirror line:');
                            this.commandStep = 1;
                        } else {
                            this.cancel();
                        }
                        return;
                    }
                    if (this.commandStep === 2) {
                        this.commandData.p2 = this.engine.mouseWorld;
                        this.setPrompt('MIRROR Erase source objects? [Yes/No] <N>:');
                        this.commandStep = 3;
                        return;
                    }
                    if (this.commandStep === 3) {
                        input = (input || '').trim().toUpperCase();
                        const eraseSource = (input === 'Y' || input === 'YES');
                        this.engine.previewEntities = null;
                        this.engine.rubberband = null;
                        this.engine.mirrorSelected(this.commandData.p1, this.commandData.p2, eraseSource);
                        this.cancel();
                    }
                }
            },

            'BLOCK': {
                name: 'BLOCK',
                start: () => {
                    if (this.engine.selectedIds.size === 0) {
                        this.setPrompt('BLOCK Select objects to convert to block (Click and press Enter):');
                        this.commandStep = 0;
                    } else {
                        this.setPrompt('BLOCK Specify insertion base point:');
                        this.commandStep = 1;
                    }
                },
                onClick: (pt) => {
                    if (this.commandStep === 0) {
                        const hit = this.engine.findEntityAt(this.engine.mouseScreen.x, this.engine.mouseScreen.y);
                        if (hit) {
                            if (this.engine.selectEntityAndGroup) this.engine.selectEntityAndGroup(hit, true);
                            else this.engine.selectedIds.add(hit.id);
                            this.setPrompt(`BLOCK Select objects: (${this.engine.selectedIds.size} selected, press Enter when done)`);
                            this.engine.requestRender();
                        }
                    } else if (this.commandStep === 1) {
                        this.commandData.basePoint = { x: pt.x, y: pt.y };
                        const name = prompt('Nome do novo Bloco (ex: MESA_REUNIAO):', `BLOCO_${Date.now().toString().slice(-4)}`);
                        if (name && name.trim()) {
                            const res = this.engine.createBlockFromSelection(name.trim(), this.commandData.basePoint);
                            if (res) {
                                this.logHistory(`BLOCK "${res.blockId}" criado com sucesso (${res.count} entidades agrupadas).`);
                            }
                        }
                        this.cancel();
                    }
                },
                onEnter: (input) => {
                    if (this.commandStep === 0) {
                        if (this.engine.selectedIds.size > 0) {
                            this.setPrompt('BLOCK Specify insertion base point:');
                            this.commandStep = 1;
                        } else {
                            this.cancel();
                        }
                        return;
                    }
                    if (this.commandStep === 1) {
                        const name = (input || '').trim() || `BLOCO_${Date.now().toString().slice(-4)}`;
                        const res = this.engine.createBlockFromSelection(name, null);
                        if (res) {
                            this.logHistory(`BLOCK "${res.blockId}" criado com sucesso (${res.count} entidades agrupadas).`);
                        }
                        this.cancel();
                    }
                }
            },

            'GROUP': {
                name: 'GROUP',
                start: () => {
                    if (this.engine.selectedIds.size === 0) {
                        this.setPrompt('GROUP Select objects to group:');
                        this.commandStep = 0;
                    } else {
                        const count = this.engine.groupSelected();
                        this.logHistory(`GROUP: ${count} objetos agrupados com sucesso.`);
                        this.cancel();
                    }
                },
                onClick: () => {
                    const hit = this.engine.findEntityAt(this.engine.mouseScreen.x, this.engine.mouseScreen.y);
                    if (hit) {
                        this.engine.selectedIds.add(hit.id);
                        const count = this.engine.groupSelected();
                        this.logHistory(`GROUP: ${count} objetos agrupados com sucesso.`);
                        this.cancel();
                    }
                },
                onEnter: () => {
                    if (this.engine.selectedIds.size > 0) {
                        const count = this.engine.groupSelected();
                        this.logHistory(`GROUP: ${count} objetos agrupados com sucesso.`);
                    }
                    this.cancel();
                }
            },

            'UNGROUP': {
                name: 'UNGROUP',
                start: () => {
                    if (this.engine.selectedIds.size === 0) {
                        this.setPrompt('UNGROUP Selecione o grupo ou bloco para desagrupar:');
                        this.commandStep = 1;
                    } else {
                        const count = this.engine.ungroupSelected();
                        this.logHistory(count > 0 ? `UNGROUP: ${count} objeto(s) desagrupados.` : 'UNGROUP: Nenhum grupo selecionado.');
                        this.cancel();
                    }
                },
                onClick: () => {
                    const hit = this.engine.findEntityAt(this.engine.mouseScreen.x, this.engine.mouseScreen.y);
                    if (hit) {
                        this.engine.selectEntityAndGroup(hit, false);
                        const count = this.engine.ungroupSelected();
                        this.logHistory(count > 0 ? `UNGROUP: ${count} objeto(s) desagrupados com sucesso.` : 'UNGROUP: O objeto clicado não pertence a um grupo.');
                    }
                    this.cancel();
                }
            },

            'EXPLODE': {
                name: 'EXPLODE',
                start: () => {
                    if (this.engine.selectedIds.size === 0) {
                        this.setPrompt('EXPLODE Select objects to explode:');
                        this.commandStep = 1;
                    } else {
                        const count = this.engine.explodeSelected();
                        this.logHistory(`EXPLODE ${count} object(s) exploded.`);
                        this.cancel();
                    }
                },
                onClick: () => {
                    const hit = this.engine.findEntityAt(this.engine.mouseScreen.x, this.engine.mouseScreen.y);
                    if (hit) {
                        this.engine.selectedIds.add(hit.id);
                        const count = this.engine.explodeSelected();
                        this.logHistory(`EXPLODE ${count} object(s) exploded.`);
                        this.cancel();
                    }
                },
                onEnter: () => {
                    if (this.engine.selectedIds.size > 0) {
                        const count = this.engine.explodeSelected();
                        this.logHistory(`EXPLODE ${count} object(s) exploded.`);
                    }
                    this.cancel();
                }
            },

            'FILLET': {
                name: 'FILLET',
                start: () => {
                    this.setPrompt('FILLET Select first line:');
                    this.commandData = {};
                    this.commandStep = 1;
                },
                onClick: (pt) => {
                    if (this.commandStep === 1) {
                        const hit = this.engine.findEntityAt(this.engine.mouseScreen.x, this.engine.mouseScreen.y);
                        if (hit && hit.type === 'LINE') {
                            this.commandData.line1 = hit;
                            this.setPrompt('FILLET Select second line:');
                            this.commandStep = 2;
                        } else {
                            this.logHistory('FILLET: Entity must be a LINE.');
                        }
                    } else if (this.commandStep === 2) {
                        const hit = this.engine.findEntityAt(this.engine.mouseScreen.x, this.engine.mouseScreen.y);
                        if (hit && hit.type === 'LINE' && hit.id !== this.commandData.line1.id) {
                            const success = this.engine.filletLines(this.commandData.line1, hit);
                            if (success) {
                                this.logHistory('FILLET: Corner joined.');
                            } else {
                                this.logHistory('FILLET: Lines are parallel or collinear.');
                            }
                            this.cancel();
                        } else {
                            this.logHistory('FILLET: Select a distinct second line.');
                        }
                    }
                },
                onEnter: () => {
                    this.cancel();
                }
            },

            'OFFSET': {
                name: 'OFFSET',
                start: () => {
                    const defaultDist = this.commandData.lastDist || 0.15;
                    this.setPrompt(`OFFSET Specify offset distance <${defaultDist}>:`);
                    this.commandStep = 1;
                },
                onClick: (pt) => {
                    if (this.commandStep === 2) {
                        const ent = this.engine.findEntityAt(this.engine.mouseScreen.x, this.engine.mouseScreen.y);
                        if (ent) {
                            this.commandData.selectedEntity = ent;
                            this.setPrompt('OFFSET Specify point on side to offset:');
                            this.commandStep = 3;
                        }
                    } else if (this.commandStep === 3) {
                        this.engine.offsetEntity(this.commandData.selectedEntity, this.commandData.dist, pt.x, pt.y);
                        this.setPrompt('OFFSET Select object to offset or [Exit/Undo]:');
                        this.commandStep = 2;
                    }
                },
                onEnter: (input) => {
                    if (this.commandStep === 1) {
                        let dist = parseFloat(input);
                        if (isNaN(dist)) dist = this.commandData.lastDist || 0.15;
                        this.commandData.dist = dist;
                        this.commandData.lastDist = dist;
                        this.setPrompt('OFFSET Select object to offset or [Exit/Undo]:');
                        this.commandStep = 2;
                    } else {
                        this.cancel();
                    }
                }
            },

            'TRIM': {
                name: 'TRIM',
                start: () => {
                    this.setPrompt('TRIM Select object to trim or [Shift=Extend / Enter=Exit]:');
                    this.commandData = {};
                    this.commandStep = 1;
                },
                onClick: (pt, e) => {
                    if (e && e.shiftKey) {
                        const res = this.engine.extendEntityAt(pt);
                        this.logHistory(res.message);
                    } else {
                        const res = this.engine.trimEntityAt(pt);
                        this.logHistory(res.message);
                    }
                    this.setPrompt('TRIM Select object to trim or [Shift=Extend / Enter=Exit]:');
                },
                onEnter: () => {
                    this.cancel();
                }
            },

            'EXTEND': {
                name: 'EXTEND',
                start: () => {
                    this.setPrompt('EXTEND Select object to extend or [Shift=Trim / Enter=Exit]:');
                    this.commandData = {};
                    this.commandStep = 1;
                },
                onClick: (pt, e) => {
                    if (e && e.shiftKey) {
                        const res = this.engine.trimEntityAt(pt);
                        this.logHistory(res.message);
                    } else {
                        const res = this.engine.extendEntityAt(pt);
                        this.logHistory(res.message);
                    }
                    this.setPrompt('EXTEND Select object to extend or [Shift=Trim / Enter=Exit]:');
                },
                onEnter: () => {
                    this.cancel();
                }
            },

            'ERASE': {
                name: 'ERASE',
                start: () => {
                    if (this.engine.selectedIds.size > 0) {
                        const count = this.engine.selectedIds.size;
                        this.engine.deleteSelected();
                        this.logHistory(`ERASE ${count} object(s) deleted.`);
                        this.cancel();
                    } else {
                        this.setPrompt('ERASE Select objects:');
                        this.commandStep = 1;
                    }
                },
                onClick: () => {},
                onEnter: () => {
                    if (this.engine.selectedIds.size > 0) {
                        this.engine.deleteSelected();
                    }
                    this.cancel();
                }
            },

            'DIST': {
                name: 'DIST',
                start: () => {
                    this.setPrompt('DIST Specify first point:');
                    this.commandData = {};
                    this.commandStep = 1;
                },
                onClick: (pt) => {
                    if (this.commandStep === 1) {
                        this.commandData.p1 = pt;
                        this.setPrompt('DIST Specify second point:');
                        this.commandStep = 2;
                    } else if (this.commandStep === 2) {
                        const p1 = this.commandData.p1;
                        const p2 = pt;
                        const dx = p2.x - p1.x;
                        const dy = p2.y - p1.y;
                        const dist = Math.sqrt(dx * dx + dy * dy);
                        const angleDeg = (Math.atan2(dy, dx) * 180 / Math.PI + 360) % 360;

                        this.logHistory(`Distance = ${dist.toFixed(4)} m,  Angle in XY Plane = ${angleDeg.toFixed(1)}°`);
                        this.logHistory(`Delta X = ${dx.toFixed(4)} m,  Delta Y = ${dy.toFixed(4)} m,  Delta Z = 0.0000 m`);
                        this.cancel();
                    }
                },
                onMouseMove: (pt) => {
                    if (this.commandStep === 2 && this.commandData.p1) {
                        this.engine.previewEntity = {
                            type: 'LINE',
                            x1: this.commandData.p1.x,
                            y1: this.commandData.p1.y,
                            x2: pt.x,
                            y2: pt.y,
                            color: '#eab308'
                        };
                    }
                }
            },

            'DIMALIGNED': {
                name: 'DIMALIGNED',
                start: () => {
                    this.setPrompt('DIMALIGNED: Especifique a 1ª origem da cota (clique no Endpoint):');
                    this.commandData = {};
                    this.commandStep = 1;
                },
                onClick: (pt) => {
                    if (this.commandStep === 1) {
                        this.commandData.p1 = { x: pt.x, y: pt.y };
                        this.setPrompt('DIMALIGNED: Especifique a 2ª origem da cota (clique no 2º Endpoint):');
                        this.commandStep = 2;
                    } else if (this.commandStep === 2) {
                        const p1 = this.commandData.p1;
                        const dist = Math.hypot(pt.x - p1.x, pt.y - p1.y);
                        if (dist < 1e-4) {
                            this.logHistory('Os pontos inicial e final da cota não podem ser coincidentes.');
                            return;
                        }
                        this.commandData.p2 = { x: pt.x, y: pt.y };
                        this.setPrompt('DIMALIGNED: Posicione a linha de cota com o mouse e clique para fixar:');
                        this.commandStep = 3;
                    } else if (this.commandStep === 3) {
                        const p1 = this.commandData.p1;
                        const p2 = this.commandData.p2;
                        const dx = p2.x - p1.x;
                        const dy = p2.y - p1.y;
                        const len = Math.hypot(dx, dy);
                        let offset = 0.5;
                        if (len > 1e-6) {
                            const nx = -dy / len;
                            const ny = dx / len;
                            offset = (pt.x - p1.x) * nx + (pt.y - p1.y) * ny;
                        }
                        this.engine.previewEntity = null;
                        this.engine.rubberband = null;
                        this.engine.addDimension(p1.x, p1.y, p2.x, p2.y, offset);
                        this.logHistory(`Cota inserida: ${len.toFixed(2)}m (offset: ${offset.toFixed(2)}m)`);
                        this.cancel();
                    }
                },
                onMouseMove: (pt) => {
                    if (this.commandStep === 2 && this.commandData.p1) {
                        const p1 = this.commandData.p1;
                        this.engine.rubberband = {
                            type: 'LINE',
                            x1: p1.x,
                            y1: p1.y,
                            x2: pt.x,
                            y2: pt.y,
                            color: '#00e5ff'
                        };
                        const dist = Math.hypot(pt.x - p1.x, pt.y - p1.y);
                        let angDeg = Math.atan2(pt.y - p1.y, pt.x - p1.x) * (180 / Math.PI);
                        if (angDeg < 0) angDeg += 360;
                        this.setPrompt(`DIMALIGNED: Especifique a 2ª origem <${dist.toFixed(2)}m @${angDeg.toFixed(1)}°>:`);
                        this.engine.requestRender();
                    } else if (this.commandStep === 3 && this.commandData.p1 && this.commandData.p2) {
                        const p1 = this.commandData.p1;
                        const p2 = this.commandData.p2;
                        const dx = p2.x - p1.x;
                        const dy = p2.y - p1.y;
                        const len = Math.hypot(dx, dy);
                        let offset = 0.5;
                        if (len > 1e-6) {
                            const nx = -dy / len;
                            const ny = dx / len;
                            offset = (pt.x - p1.x) * nx + (pt.y - p1.y) * ny;
                        }
                        this.engine.previewEntity = {
                            type: 'DIMENSION',
                            x1: p1.x,
                            y1: p1.y,
                            x2: p2.x,
                            y2: p2.y,
                            offset: offset,
                            color: '#00ffff'
                        };
                        this.engine.requestRender();
                    }
                },
                onEnter: (input) => {
                    input = (input || '').trim();
                    if (this.commandStep === 3 && input) {
                        const num = parseFloat(input);
                        if (!isNaN(num)) {
                            const p1 = this.commandData.p1;
                            const p2 = this.commandData.p2;
                            const dx = p2.x - p1.x;
                            const dy = p2.y - p1.y;
                            const len = Math.hypot(dx, dy);
                            this.engine.previewEntity = null;
                            this.engine.rubberband = null;
                            this.engine.addDimension(p1.x, p1.y, p2.x, p2.y, num);
                            this.logHistory(`Cota inserida: ${len.toFixed(2)}m (offset: ${num.toFixed(2)}m)`);
                            this.cancel();
                            return;
                        }
                    }
                    this.cancel();
                }
            },

            'DIMLINEAR': {
                name: 'DIMLINEAR',
                start: () => {
                    this.setPrompt('DIMLINEAR: Especifique a 1ª origem da cota linear (clique no Endpoint):');
                    this.commandData = {};
                    this.commandStep = 1;
                },
                onClick: (pt) => {
                    if (this.commandStep === 1) {
                        this.commandData.p1 = { x: pt.x, y: pt.y };
                        this.setPrompt('DIMLINEAR: Especifique a 2ª origem da cota linear (clique no 2º Endpoint):');
                        this.commandStep = 2;
                    } else if (this.commandStep === 2) {
                        const p1 = this.commandData.p1;
                        const dist = Math.hypot(pt.x - p1.x, pt.y - p1.y);
                        if (dist < 1e-4) {
                            this.logHistory('Os pontos inicial e final da cota não podem ser coincidentes.');
                            return;
                        }
                        this.commandData.p2 = { x: pt.x, y: pt.y };
                        this.setPrompt('DIMLINEAR: Posicione a linha de cota e clique para fixar:');
                        this.commandStep = 3;
                    } else if (this.commandStep === 3) {
                        const p1 = this.commandData.p1;
                        const p2 = this.commandData.p2;
                        const midX = (p1.x + p2.x) / 2;
                        const midY = (p1.y + p2.y) / 2;
                        const isHorizontal = Math.abs(pt.y - midY) >= Math.abs(pt.x - midX);

                        this.engine.previewEntity = null;
                        this.engine.rubberband = null;

                        if (isHorizontal) {
                            const offset = pt.y - p1.y;
                            this.engine.addDimension(p1.x, p1.y, p2.x, p1.y, offset);
                            this.logHistory(`Cota linear horizontal inserida: ${Math.abs(p2.x - p1.x).toFixed(2)}m`);
                        } else {
                            const offset = -(pt.x - p1.x);
                            this.engine.addDimension(p1.x, p1.y, p1.x, p2.y, offset);
                            this.logHistory(`Cota linear vertical inserida: ${Math.abs(p2.y - p1.y).toFixed(2)}m`);
                        }
                        this.cancel();
                    }
                },
                onMouseMove: (pt) => {
                    if (this.commandStep === 2 && this.commandData.p1) {
                        const p1 = this.commandData.p1;
                        this.engine.rubberband = {
                            type: 'LINE',
                            x1: p1.x,
                            y1: p1.y,
                            x2: pt.x,
                            y2: pt.y,
                            color: '#00e5ff'
                        };
                        const dist = Math.hypot(pt.x - p1.x, pt.y - p1.y);
                        this.setPrompt(`DIMLINEAR: Especifique a 2ª origem <${dist.toFixed(2)}m>:`);
                        this.engine.requestRender();
                    } else if (this.commandStep === 3 && this.commandData.p1 && this.commandData.p2) {
                        const p1 = this.commandData.p1;
                        const p2 = this.commandData.p2;
                        const midX = (p1.x + p2.x) / 2;
                        const midY = (p1.y + p2.y) / 2;
                        const isHorizontal = Math.abs(pt.y - midY) >= Math.abs(pt.x - midX);

                        if (isHorizontal) {
                            const offset = pt.y - p1.y;
                            this.engine.previewEntity = {
                                type: 'DIMENSION',
                                x1: p1.x, y1: p1.y,
                                x2: p2.x, y2: p1.y,
                                offset: offset,
                                color: '#00ffff'
                            };
                        } else {
                            const offset = -(pt.x - p1.x);
                            this.engine.previewEntity = {
                                type: 'DIMENSION',
                                x1: p1.x, y1: p1.y,
                                x2: p1.x, y2: p2.y,
                                offset: offset,
                                color: '#00ffff'
                            };
                        }
                        this.engine.requestRender();
                    }
                }
            },

            'MTEXT': {
                name: 'MTEXT',
                start: () => {
                    this.setPrompt('MTEXT Specify insertion point:');
                    this.commandData = this.commandData || {};
                    this.commandStep = 1;
                },
                onClick: (pt) => {
                    if (this.commandStep === 1) {
                        this.commandData.pt = pt;
                        const defaultTxt = this.commandData.presetText || '';
                        const txt = defaultTxt || prompt('Texto Técnico (ex: DORMITÓRIO 12.50 m²):');
                        if (txt && txt.trim()) {
                            this.engine.addText(pt.x, pt.y, txt.trim(), 0.3);
                        }
                        this.cancel();
                    }
                }
            },

            'ZOOM': {
                name: 'ZOOM',
                start: () => {
                    this.setPrompt('ZOOM [All/Extents/Window] <real time>:');
                    this.commandStep = 1;
                },
                onEnter: (input) => {
                    const arg = (input || '').toUpperCase().trim();
                    if (arg === 'E' || arg === 'EXTENTS' || arg === 'A' || arg === 'ALL') {
                        this.engine.zoomExtents();
                        this.logHistory('Regenerating model... Zoom Extents complete.');
                    }
                    this.cancel();
                }
            },

            'UNDO': {
                name: 'UNDO',
                start: () => {
                    const res = this.engine.undo();
                    this.logHistory(res ? 'UNDO previous command undone.' : 'Nothing to undo.');
                    this.cancel();
                }
            },

            'REDO': {
                name: 'REDO',
                start: () => {
                    const res = this.engine.redo();
                    this.logHistory(res ? 'REDO command restored.' : 'Nothing to redo.');
                    this.cancel();
                }
            },

            'REGEN': {
                name: 'REGEN',
                start: () => {
                    this.engine.render();
                    this.logHistory('Regenerating drawing.');
                    this.cancel();
                }
            },

            'LAYER': {
                name: 'LAYER',
                start: () => {
                    if (window.cadcloneUI && window.cadcloneUI.openLayerModal) {
                        window.cadcloneUI.openLayerModal();
                    }
                    this.cancel();
                }
            },

            'PLOT': {
                name: 'PLOT',
                start: () => {
                    if (window.cadcloneUI && window.cadcloneUI.openPlotModal) {
                        window.cadcloneUI.openPlotModal();
                    }
                    this.cancel();
                }
            },

            'EXPORT': {
                name: 'EXPORT',
                start: () => {
                    if (window.cadcloneUI && window.cadcloneUI.openExportImageModal) {
                        window.cadcloneUI.openExportImageModal('png');
                    }
                    this.cancel();
                }
            },

            'PNG': {
                name: 'PNG',
                start: () => {
                    if (window.cadcloneUI && window.cadcloneUI.openExportImageModal) {
                        window.cadcloneUI.openExportImageModal('png');
                    }
                    this.cancel();
                }
            },

            'JPG': {
                name: 'JPG',
                start: () => {
                    if (window.cadcloneUI && window.cadcloneUI.openExportImageModal) {
                        window.cadcloneUI.openExportImageModal('jpeg');
                    }
                    this.cancel();
                }
            },

            'QSAVE': {
                name: 'QSAVE',
                start: () => {
                    if (window.cadcloneUI && window.cadcloneUI.saveDXF) {
                        window.cadcloneUI.saveDXF();
                    }
                    this.cancel();
                }
            },

            'AUTOSAVE': {
                name: 'AUTOSAVE',
                start: () => {
                    if (window.cadcloneUI && window.cadcloneUI.performAutoSave) {
                        window.cadcloneUI.performAutoSave(true);
                        this.logHistory('AutoSave manual executado: desenho protegido no cache local.');
                    }
                    this.cancel();
                }
            },

            'RECOVER': {
                name: 'RECOVER',
                start: () => {
                    if (window.cadcloneUI) {
                        const raw = localStorage.getItem('cadclone_autosave');
                        if (raw) {
                            try {
                                const data = JSON.parse(raw);
                                window.cadcloneUI.pendingRecoveryData = data;
                                window.cadcloneUI.showRecoveryModal(data);
                                this.logHistory('AutoCAD Drawing Recovery: Abrindo assistente de restauração...');
                            } catch(e) {
                                this.logHistory('Erro ao ler backup de AutoSave.');
                            }
                        } else {
                            this.logHistory('Nenhum backup de recuperação encontrado no cache local.');
                        }
                    }
                    this.cancel();
                }
            },

            'OPEN': {
                name: 'OPEN',
                start: () => {
                    const input = document.getElementById('cadFileInput');
                    if (input) input.click();
                    this.cancel();
                }
            },

            'PROPERTIES': {
                name: 'PROPERTIES',
                start: () => {
                    if (window.cadcloneUI && window.cadcloneUI.togglePropertiesPanel) {
                        window.cadcloneUI.togglePropertiesPanel();
                    }
                    this.cancel();
                }
            },

            'INSERT': {
                name: 'INSERT',
                start: (args) => {
                    const blockId = (args || '').toUpperCase().trim();
                    const lib = (typeof CADBlockLibrary !== 'undefined') ? CADBlockLibrary : (CADEngine.BlockLibrary || {});
                    if (blockId && lib[blockId]) {
                        this.startBlockPlacement(blockId);
                    } else if (window.cadcloneUI && window.cadcloneUI.openBlockPalette) {
                        window.cadcloneUI.openBlockPalette();
                    } else {
                        this.setPrompt('INSERT: Especifique o nome do bloco ou use a galeria.');
                    }
                }
            },

            'LTSCALE': {
                name: 'LTSCALE',
                start: (args) => {
                    const argVal = parseFloat(args);
                    if (!isNaN(argVal) && argVal > 0) {
                        this.engine.setLinetypeScale(argVal);
                        this.logHistory(`LTSCALE = ${argVal.toFixed(4)}`);
                        this.setPrompt(`Command: LTSCALE definido para ${argVal.toFixed(4)}.`);
                        if (window.cadcloneUI && window.cadcloneUI.updatePropertiesPanel) {
                            window.cadcloneUI.updatePropertiesPanel();
                        }
                        this.cancel();
                    } else {
                        const cur = (this.engine.ltscale || 1.0).toFixed(4);
                        this.setPrompt(`Enter new linetype scale factor <${cur}>: `);
                        this.commandStep = 1;
                    }
                },
                onEnter: (input) => {
                    if (this.commandStep === 1) {
                        const str = (input || '').trim();
                        if (!str) {
                            this.cancel();
                            return;
                        }
                        const val = parseFloat(str);
                        if (!isNaN(val) && val > 0) {
                            this.engine.setLinetypeScale(val);
                            this.logHistory(`LTSCALE = ${val.toFixed(4)}`);
                            this.setPrompt(`Command: LTSCALE definido para ${val.toFixed(4)}.`);
                            if (window.cadcloneUI && window.cadcloneUI.updatePropertiesPanel) {
                                window.cadcloneUI.updatePropertiesPanel();
                            }
                        } else {
                            this.setPrompt('Requires valid positive numeric value.');
                        }
                        this.cancel();
                    }
                }
            },

            'DIMSCALE': {
                name: 'DIMSCALE',
                start: (args) => {
                    const argVal = parseFloat(args);
                    if (!isNaN(argVal) && argVal > 0) {
                        this.engine.setDimScale(argVal);
                        this.logHistory(`DIMSCALE = ${argVal.toFixed(2)}`);
                        this.setPrompt(`Command: DIMSCALE definido para ${argVal.toFixed(2)}.`);
                        if (window.cadcloneUI && window.cadcloneUI.updatePropertiesPanel) {
                            window.cadcloneUI.updatePropertiesPanel();
                        }
                        this.cancel();
                    } else {
                        const cur = (this.engine.defaultDimScale || 1.0).toFixed(2);
                        this.setPrompt(`Enter new value for DIMSCALE <${cur}>: `);
                        this.commandStep = 1;
                    }
                },
                onEnter: (input) => {
                    if (this.commandStep === 1) {
                        const str = (input || '').trim();
                        if (!str) {
                            this.cancel();
                            return;
                        }
                        const val = parseFloat(str);
                        if (!isNaN(val) && val > 0) {
                            this.engine.setDimScale(val);
                            this.logHistory(`DIMSCALE = ${val.toFixed(2)}`);
                            this.setPrompt(`Command: DIMSCALE definido para ${val.toFixed(2)}.`);
                            if (window.cadcloneUI && window.cadcloneUI.updatePropertiesPanel) {
                                window.cadcloneUI.updatePropertiesPanel();
                            }
                        } else {
                            this.setPrompt('Requires valid positive numeric value.');
                        }
                        this.cancel();
                    }
                }
            },

            'DIMTXT': {
                name: 'DIMTXT',
                start: (args) => {
                    const argVal = parseFloat(args);
                    if (!isNaN(argVal) && argVal > 0) {
                        this.engine.setDimTextHeight(argVal);
                        this.logHistory(`DIMTXT = ${argVal.toFixed(2)}m`);
                        this.setPrompt(`Command: DIMTXT definido para ${argVal.toFixed(2)}m.`);
                        if (window.cadcloneUI && window.cadcloneUI.updatePropertiesPanel) {
                            window.cadcloneUI.updatePropertiesPanel();
                        }
                        this.cancel();
                    } else {
                        const cur = (this.engine.defaultDimTextHeight || 0.22).toFixed(2);
                        this.setPrompt(`Enter new value for DIMTXT <${cur}>: `);
                        this.commandStep = 1;
                    }
                },
                onEnter: (input) => {
                    if (this.commandStep === 1) {
                        const str = (input || '').trim();
                        if (!str) {
                            this.cancel();
                            return;
                        }
                        const val = parseFloat(str);
                        if (!isNaN(val) && val > 0) {
                            this.engine.setDimTextHeight(val);
                            this.logHistory(`DIMTXT = ${val.toFixed(2)}m`);
                            this.setPrompt(`Command: DIMTXT definido para ${val.toFixed(2)}m.`);
                            if (window.cadcloneUI && window.cadcloneUI.updatePropertiesPanel) {
                                window.cadcloneUI.updatePropertiesPanel();
                            }
                        } else {
                            this.setPrompt('Requires valid positive numeric value.');
                        }
                        this.cancel();
                    }
                }
            },

            'DIMSTYLE': {
                name: 'DIMSTYLE',
                start: () => {
                    const isEn = window.cadcloneUI && window.cadcloneUI.currentLang === 'en';
                    if (window.cadcloneUI && window.cadcloneUI.togglePropertiesPanel) {
                        window.cadcloneUI.togglePropertiesPanel(true);
                    }
                    this.logHistory(isEn ? 'DIMSTYLE: Properties panel opened. Adjust DIMSCALE or text height.' : 'DIMSTYLE: Paleta de Propriedades aberta. Ajuste DIMSCALE e Altura do Texto da Cota.');
                    this.setPrompt(isEn ? 'Command: DIMSTYLE (Properties panel opened)' : 'Command: DIMSTYLE (Painel de Propriedades aberto)');
                    this.cancel();
                }
            },

            'LINETYPE': {
                name: 'LINETYPE',
                start: () => {
                    const curLts = (this.engine.ltscale || 1.0).toFixed(2);
                    this.logHistory(`--- Tipos de Linha ABNT Carregados ---`);
                    this.logHistory(`CONTINUOUS: Linha contínua cheia`);
                    this.logHistory(`DASHED: Tracejada 0.30m / 0.15m (Projeções/Vigas)`);
                    this.logHistory(`HIDDEN: Oculta 0.15m / 0.10m (Instalações/Arestas)`);
                    this.logHistory(`CENTER: Centro 0.60m / 0.15m / 0.08m / 0.15m (Eixos)`);
                    this.logHistory(`PHANTOM: Traço-dois-pontos (Divisas/Limites)`);
                    this.logHistory(`LTSCALE Atual: ${curLts}. Digite LTS para alterar.`);
                    this.setPrompt(`Command: Linetypes listados no histórico. Digite LTS para ajustar escala.`);
                    this.cancel();
                }
            },

            'NEW': {
                name: 'NEW',
                start: () => {
                    if (typeof window !== 'undefined' && window.cadcloneUI && window.cadcloneUI.newDrawing) {
                        window.cadcloneUI.newDrawing();
                    } else {
                        this.engine.clear();
                        this.engine.zoomExtents();
                    }
                    this.cancel();
                }
            },

            'SAMPLE': {
                name: 'SAMPLE',
                start: () => {
                    if (typeof window !== 'undefined' && window.cadcloneUI && window.cadcloneUI.loadSampleDrawing) {
                        window.cadcloneUI.loadSampleDrawing(true);
                    } else {
                        this.engine.loadSampleFloorPlan();
                    }
                    this.cancel();
                }
            },

            'PDFATTACH': {
                name: 'PDFATTACH',
                start: () => {
                    const input = document.getElementById('cadPdfInput');
                    if (input) {
                        input.value = '';
                        input.click();
                    } else if (window.cadUnderlayManager) {
                        window.cadUnderlayManager.openPdfPicker();
                    }
                    this.cancel();
                }
            },

            'IMAGEATTACH': {
                name: 'IMAGEATTACH',
                start: () => {
                    const input = document.getElementById('cadImageInput');
                    if (input) {
                        input.value = '';
                        input.click();
                    } else if (window.cadUnderlayManager) {
                        window.cadUnderlayManager.openImagePicker();
                    }
                    this.cancel();
                }
            },

            'UNDERLAY': {
                name: 'UNDERLAY',
                start: () => {
                    if (window.cadUnderlayManager) {
                        window.cadUnderlayManager.toggleBar();
                    }
                    this.cancel();
                }
            },

            'CALIBRATE': {
                name: 'CALIBRATE',
                start: () => {
                    if (!this.engine.underlay) {
                        const isEn = window.cadcloneUI && window.cadcloneUI.currentLang === 'en';
                        this.logHistory(isEn ? 'CALIBRATE: No underlay attached. Use PDFATTACH first.' : 'CALIBRATE: Nenhum calco ativo. Use PDFATTACH primeiro.');
                        this.cancel();
                        return;
                    }
                    this.engine.isCalibratingUnderlay = true;
                    this.engine.underlayCalibrationPts = [];
                    this.commandStep = 1;
                    this.commandData = { pt1: null, pt2: null };
                    const isEn = window.cadcloneUI && window.cadcloneUI.currentLang === 'en';
                    this.setPrompt(isEn ? 'CALIBRATE: Specify first reference point on underlay:' : 'CALIBRATE: Clique no primeiro ponto de referência no calco:');
                },
                onClick: (pt) => {
                    const isEn = window.cadcloneUI && window.cadcloneUI.currentLang === 'en';
                    if (this.commandStep === 1) {
                        this.commandData.pt1 = { x: pt.x, y: pt.y };
                        this.engine.underlayCalibrationPts = [{ x: pt.x, y: pt.y }];
                        this.commandStep = 2;
                        this.setPrompt(isEn ? 'CALIBRATE: Specify second reference point on underlay:' : 'CALIBRATE: Clique no segundo ponto de referência no calco:');
                        this.engine.requestRender();
                    } else if (this.commandStep === 2) {
                        this.commandData.pt2 = { x: pt.x, y: pt.y };
                        this.engine.underlayCalibrationPts = [this.commandData.pt1, { x: pt.x, y: pt.y }];
                        const measuredDist = Math.hypot(this.commandData.pt2.x - this.commandData.pt1.x, this.commandData.pt2.y - this.commandData.pt1.y);
                        this.commandStep = 3;
                        this.setPrompt(isEn ? `CALIBRATE: Enter real distance in meters <current: ${measuredDist.toFixed(2)}m>:` : `CALIBRATE: Digite a distância real em metros <atual: ${measuredDist.toFixed(2)}m>:`);
                        this.engine.requestRender();
                    }
                },
                onMouseMove: (pt) => {
                    if (this.commandStep === 2 && this.commandData.pt1) {
                        const p1 = this.commandData.pt1;
                        this.engine.rubberband = {
                            x1: p1.x,
                            y1: p1.y,
                            x2: pt.x,
                            y2: pt.y,
                            color: '#00e5ff'
                        };
                        const dist = Math.hypot(pt.x - p1.x, pt.y - p1.y);
                        const isEn = window.cadcloneUI && window.cadcloneUI.currentLang === 'en';
                        this.setPrompt(isEn ? `CALIBRATE: Specify second point <${dist.toFixed(2)}m>:` : `CALIBRATE: Clique no segundo ponto <${dist.toFixed(2)}m>:`);
                        this.engine.requestRender();
                    }
                },
                onEnter: (input) => {
                    const isEn = window.cadcloneUI && window.cadcloneUI.currentLang === 'en';
                    if (this.commandStep === 3) {
                        const val = parseFloat((input || '').replace(',', '.'));
                        if (!isNaN(val) && val > 0) {
                            const ok = this.engine.calibrateUnderlayScale(this.commandData.pt1, this.commandData.pt2, val);
                            if (ok) {
                                this.logHistory(isEn ? `CALIBRATE: Underlay scaled to 1:1 metric scale (${val}m).` : `CALIBRATE: Calco ajustado com precisão para escala real métrica 1:1 (${val}m).`);
                                if (window.cadcloneUI && window.cadcloneUI.showNotification) {
                                    window.cadcloneUI.showNotification(isEn ? `Underlay calibrated to ${val}m!` : `Calco calibrado para ${val}m!`, 'success');
                                }
                            } else {
                                this.logHistory(isEn ? 'CALIBRATE: Calibration failed (distance too small).' : 'CALIBRATE: Falha na calibração (distância muito curta).');
                            }
                        } else {
                            this.logHistory(isEn ? 'CALIBRATE: Invalid distance.' : 'CALIBRATE: Distância inválida.');
                        }
                    }
                    this.cancel();
                }
            },

            'UNDERLAYROTATE': {
                name: 'UNDERLAYROTATE',
                start: () => {
                    const isEn = window.cadcloneUI && window.cadcloneUI.currentLang === 'en';
                    if (!this.engine.underlay) {
                        this.logHistory(isEn ? 'UNDERLAYROTATE: No underlay attached. Use PDFATTACH or IMAGEATTACH first.' : 'UNDERLAYROTATE: Nenhum calco ativo. Use PDFATTACH ou IMAGEATTACH primeiro.');
                        this.cancel();
                        return;
                    }
                    if (this.engine.underlay.locked) {
                        this.logHistory(isEn ? 'UNDERLAYROTATE: Underlay is locked. Unlock it first.' : 'UNDERLAYROTATE: O calco está travado. Destrave-o primeiro.');
                        this.cancel();
                        return;
                    }
                    this.setPrompt(isEn ? 'UNDERLAYROTATE: Enter rotation angle in degrees <90>: ' : 'UNDERLAYROTATE: Digite o ângulo de rotação em graus <90>: ');
                    this.commandStep = 1;
                },
                onInput: (raw) => {
                    const isEn = window.cadcloneUI && window.cadcloneUI.currentLang === 'en';
                    const val = raw.trim() === '' ? 90 : parseFloat(raw);
                    if (isNaN(val)) {
                        this.logHistory(isEn ? 'UNDERLAYROTATE: Invalid angle.' : 'UNDERLAYROTATE: Ângulo inválido.');
                        this.cancel();
                        return;
                    }
                    const newRot = this.engine.rotateUnderlay(val, true);
                    this.logHistory(isEn ? `UNDERLAYROTATE: Underlay rotated by ${val}° (Current: ${newRot}°).` : `UNDERLAYROTATE: Calco girado em ${val}° (Orientação atual: ${newRot}°).`);
                    if (window.cadcloneUI && window.cadcloneUI.underlayMgr) window.cadcloneUI.underlayMgr.updateHud();
                    this.cancel();
                }
            },

            'UNDERLAYSCALE': {
                name: 'UNDERLAYSCALE',
                start: () => {
                    const isEn = window.cadcloneUI && window.cadcloneUI.currentLang === 'en';
                    if (!this.engine.underlay) {
                        this.logHistory(isEn ? 'UNDERLAYSCALE: No underlay attached. Use PDFATTACH or IMAGEATTACH first.' : 'UNDERLAYSCALE: Nenhum calco ativo. Use PDFATTACH ou IMAGEATTACH primeiro.');
                        this.cancel();
                        return;
                    }
                    if (this.engine.underlay.locked) {
                        this.logHistory(isEn ? 'UNDERLAYSCALE: Underlay is locked. Unlock it first.' : 'UNDERLAYSCALE: O calco está travado. Destrave-o primeiro.');
                        this.cancel();
                        return;
                    }
                    this.setPrompt(isEn ? 'UNDERLAYSCALE: Enter scale factor (e.g. 1.2 to enlarge, 0.8 to shrink) or [Calibrate]: ' : 'UNDERLAYSCALE: Digite o fator de escala (ex: 1.2 para aumentar, 0.8 para diminuir) ou [Calibrar]: ');
                    this.commandStep = 1;
                },
                onInput: (raw) => {
                    const isEn = window.cadcloneUI && window.cadcloneUI.currentLang === 'en';
                    const str = raw.trim().toUpperCase();
                    if (str === 'C' || str === 'CALIBRAR' || str === 'CALIBRATE') {
                        this.execute('CALIBRATE');
                        return;
                    }
                    const factor = parseFloat(raw);
                    if (isNaN(factor) || factor <= 0) {
                        this.logHistory(isEn ? 'UNDERLAYSCALE: Invalid scale factor.' : 'UNDERLAYSCALE: Fator de escala inválido.');
                        this.cancel();
                        return;
                    }
                    const res = this.engine.scaleUnderlay(factor);
                    if (res) {
                        this.logHistory(isEn ? `UNDERLAYSCALE: Underlay scaled by ${factor}x (${res.width.toFixed(2)}m × ${res.height.toFixed(2)}m).` : `UNDERLAYSCALE: Calco escalonado por ${factor}x (${res.width.toFixed(2)}m × ${res.height.toFixed(2)}m).`);
                        if (window.cadcloneUI && window.cadcloneUI.underlayMgr) window.cadcloneUI.underlayMgr.updateHud();
                    }
                    this.cancel();
                }
            },

            'UNDERLAYMOVE': {
                name: 'UNDERLAYMOVE',
                start: () => {
                    const isEn = window.cadcloneUI && window.cadcloneUI.currentLang === 'en';
                    if (!this.engine.underlay) {
                        this.logHistory(isEn ? 'UNDERLAYMOVE: No underlay attached. Use PDFATTACH or IMAGEATTACH first.' : 'UNDERLAYMOVE: Nenhum calco ativo. Use PDFATTACH ou IMAGEATTACH primeiro.');
                        this.cancel();
                        return;
                    }
                    if (this.engine.underlay.locked) {
                        this.logHistory(isEn ? 'UNDERLAYMOVE: Underlay is locked. Unlock it first.' : 'UNDERLAYMOVE: O calco está travado. Destrave-o primeiro.');
                        this.cancel();
                        return;
                    }
                    this.engine.isMovingUnderlay = true;
                    this.commandData.basePoint = null;
                    this.setPrompt(isEn ? 'UNDERLAYMOVE: Click base point on underlay to drag from:' : 'UNDERLAYMOVE: Clique no ponto base do calco:');
                    this.commandStep = 1;
                },
                onClick: (pt) => {
                    const isEn = window.cadcloneUI && window.cadcloneUI.currentLang === 'en';
                    if (this.commandStep === 1) {
                        this.commandData.basePoint = { x: pt.x, y: pt.y };
                        this.setPrompt(isEn ? 'UNDERLAYMOVE: Specify destination point:' : 'UNDERLAYMOVE: Clique no ponto de destino:');
                        this.commandStep = 2;
                    } else if (this.commandStep === 2) {
                        const bp = this.commandData.basePoint;
                        const dx = pt.x - bp.x;
                        const dy = pt.y - bp.y;
                        this.engine.moveUnderlay(dx, dy);
                        this.engine.isMovingUnderlay = false;
                        this.engine.rubberband = null;
                        this.logHistory(isEn ? `UNDERLAYMOVE: Underlay moved by (${dx.toFixed(2)}m, ${dy.toFixed(2)}m).` : `UNDERLAYMOVE: Calco movido em (${dx.toFixed(2)}m, ${dy.toFixed(2)}m).`);
                        if (window.cadcloneUI && window.cadcloneUI.underlayMgr) window.cadcloneUI.underlayMgr.updateHud();
                        this.cancel();
                    }
                },
                onMouseMove: (worldPt) => {
                    if (this.commandStep === 2 && this.commandData.basePoint) {
                        this.engine.rubberband = {
                            type: 'LINE',
                            x1: this.commandData.basePoint.x,
                            y1: this.commandData.basePoint.y,
                            x2: worldPt.x,
                            y2: worldPt.y,
                            color: '#38bdf8'
                        };
                        this.engine.requestRender();
                    }
                },
                onCancel: () => {
                    this.engine.isMovingUnderlay = false;
                    this.engine.rubberband = null;
                }
            }
        };

        this.initEventListeners();
    }

    initEventListeners() {
        window.addEventListener('keydown', (e) => {
            // Ctrl+1: Properties Inspector (works even if focused)
            if ((e.ctrlKey || e.metaKey) && e.key === '1') {
                e.preventDefault();
                if (window.cadcloneUI && window.cadcloneUI.togglePropertiesPanel) {
                    window.cadcloneUI.togglePropertiesPanel();
                }
                return;
            }

            if (document.activeElement && 
               (document.activeElement.tagName === 'INPUT' || 
                document.activeElement.tagName === 'TEXTAREA' || 
                document.activeElement.tagName === 'SELECT')) {
                return;
            }

            // Function Keys (AutoCAD Standard)
            if (e.key === 'F2') {
                e.preventDefault();
                if (window.cadcloneUI) {
                    window.cadcloneUI.restoreCommandDock();
                    window.cadcloneUI.toggleHistoryExpanded();
                }
                return;
            }
            if ((e.ctrlKey || e.metaKey) && e.key === '9') {
                e.preventDefault();
                if (window.cadcloneUI) {
                    window.cadcloneUI.toggleCommandDockVisible();
                }
                return;
            }
            if (e.key === 'F3') {
                e.preventDefault();
                this.toggleSnap();
                return;
            }
            if (e.key === 'F7') {
                e.preventDefault();
                this.toggleGrid();
                return;
            }
            if (e.key === 'F8') {
                e.preventDefault();
                this.toggleOrtho();
                return;
            }
            if (e.key === 'F10') {
                e.preventDefault();
                this.togglePolar();
                return;
            }
            if (e.key === 'F12') {
                e.preventDefault();
                this.toggleDyn();
                return;
            }

            // ESC = Cancel current command / deselect
            if (e.key === 'Escape') {
                e.preventDefault();
                if (this.engine.activeGrip) {
                    this.engine.cancelGripEdit();
                    return;
                }
                this.cancel();
                return;
            }

            // Command-specific key interceptor (e.g. 'R' rotation during block placement)
            if (this.currentCommand && this.currentCommand.onKey && this.currentCommand.onKey(e.key)) {
                e.preventDefault();
                return;
            }

            // Delete / Backspace
            if (e.key === 'Delete' || e.key === 'Backspace') {
                if (this.engine.selectedIds && this.engine.selectedIds.size > 0) {
                    e.preventDefault();
                    this.execute('ERASE');
                    return;
                } else if (e.key === 'Delete') {
                    e.preventDefault();
                    this.execute('ERASE');
                    return;
                }
            }

            // Spacebar or Enter in viewport repeats last command or confirms step / cycles grip mode
            if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                if (this.engine.activeGrip) {
                    this.engine.cycleGripMode();
                    return;
                }
                if (this.currentCommand) {
                    this.currentCommand.onEnter ? this.currentCommand.onEnter('') : this.cancel();
                } else {
                    this.execute(this.lastExecutedCommand);
                }
                return;
            }

            // If user types a digit or period and dynamic input is active with a basepoint, route to dynamic input!
            if (this.engine.dynamicInput && this.getBasePoint() && /^[0-9.]$/.test(e.key) && !e.ctrlKey && !e.altKey && !e.metaKey) {
                const dynInput = document.getElementById('dynDistInput');
                if (dynInput) {
                    dynInput.focus();
                    return;
                }
            }

            // Any alphanumeric character starts typing in command line
            if (e.key.length === 1 && !e.ctrlKey && !e.altKey && !e.metaKey) {
                if (window.cadcloneUI && window.cadcloneUI.restoreCommandDock) {
                    window.cadcloneUI.restoreCommandDock();
                }
                this.inputEl.focus();
            }
        });

        if (this.inputEl) {
            this.inputEl.addEventListener('keydown', (e) => this.handleCommandLineKeyDown(e));
            this.inputEl.addEventListener('input', () => this.handleCommandLineInput());
        }

        document.addEventListener('click', (e) => {
            const dock = document.getElementById('commandDock');
            if (dock && !dock.contains(e.target)) {
                this.hideSuggestions();
            }
        });
    }

    handleCommandLineKeyDown(e) {
        if (e.key === 'Escape') {
            e.preventDefault();
            this.hideSuggestions();
            this.inputEl.value = '';
            this.cancel();
            this.inputEl.blur();
            return;
        }

        // Navigate autocomplete suggestions if visible
        if (this.suggestions.length > 0) {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                this.selectedSuggestionIndex = (this.selectedSuggestionIndex + 1) % this.suggestions.length;
                this.renderSuggestions();
                return;
            }
            if (e.key === 'ArrowUp') {
                e.preventDefault();
                this.selectedSuggestionIndex = (this.selectedSuggestionIndex - 1 + this.suggestions.length) % this.suggestions.length;
                this.renderSuggestions();
                return;
            }
            if (e.key === 'Tab') {
                e.preventDefault();
                if (this.selectedSuggestionIndex >= 0 && this.selectedSuggestionIndex < this.suggestions.length) {
                    const current = this.suggestions[this.selectedSuggestionIndex];
                    this.inputEl.value = current.name;
                    this.selectedSuggestionIndex = (this.selectedSuggestionIndex + 1) % this.suggestions.length;
                    this.renderSuggestions();
                }
                return;
            }
            if (e.key === 'Enter' || e.key === ' ') {
                if (this.selectedSuggestionIndex >= 0 && this.selectedSuggestionIndex < this.suggestions.length) {
                    e.preventDefault();
                    const chosen = this.suggestions[this.selectedSuggestionIndex].name;
                    this.executeSuggestion(chosen);
                    return;
                }
            }
        }

        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.hideSuggestions();
            const val = this.inputEl.value.trim();
            this.inputEl.value = '';

            if (this.currentCommand) {
                if (this.currentCommand.onEnter) {
                    this.currentCommand.onEnter(val);
                } else {
                    this.cancel();
                }
            } else {
                if (val) {
                    this.execute(val);
                } else {
                    this.execute(this.lastExecutedCommand);
                }
            }
        }
    }

    setPrompt(text) {
        if (this.promptEl) {
            this.promptEl.textContent = text;
        }
    }

    setLanguage(lang) {
        this.currentLang = lang;
        if (!this.currentCommand) {
            const promptLbl = (window.cadcloneUI && window.cadcloneUI.t) 
                ? window.cadcloneUI.t('cmd_prompt') 
                : (lang === 'en' ? 'Command: ' : 'Comando: ');
            this.setPrompt(promptLbl);
        }
    }

    logHistory(msg) {
        if (!this.historyEl) return;
        const line = document.createElement('div');
        line.className = 'history-line';
        line.textContent = msg;
        this.historyEl.appendChild(line);
        this.historyEl.scrollTop = this.historyEl.scrollHeight;
    }

    execute(cmdRaw) {
        this.hideSuggestions();
        const parts = cmdRaw.trim().split(/\s+/);
        const cmdName = parts[0].toUpperCase();
        const arg = parts.slice(1).join(' ').toUpperCase();

        const resolvedName = this.aliases[cmdName] || cmdName;

        this.logHistory(`Command: ${cmdRaw}`);

        if ((resolvedName === 'ZOOM' || cmdName === 'Z') && arg === 'E') {
            this.engine.zoomExtents();
            this.logHistory('Regenerating model... Zoom Extents complete.');
            this.setPrompt('Command: ');
            return;
        }

        if (this.currentCommand && !this.commandDefs[resolvedName] && !this.aliases[cmdName]) {
            if (this.currentCommand.onEnter) {
                this.currentCommand.onEnter(cmdRaw.trim());
                return;
            }
        }

        const cmd = this.commandDefs[resolvedName];
        if (cmd) {
            this.lastExecutedCommand = resolvedName;
            this.recentCommands = [resolvedName, ...this.recentCommands.filter(c => c !== resolvedName)].slice(0, 6);
            this.currentCommand = cmd;
            cmd.start(arg);
        } else {
            this.logHistory(`Unknown command "${cmdRaw}". Press F1 for help or type L, C, REC, M, CO, Z, LA.`);
            this.setPrompt('Command: ');
        }
    }

    getBasePoint() {
        if (this.engine.activeGrip && this.engine.gripBasePt) {
            return this.engine.gripBasePt;
        }
        if (!this.currentCommand || !this.commandData) return null;
        const cmdName = this.currentCommand.name;
        if (cmdName === 'DIMALIGNED' || cmdName === 'DIMLINEAR') {
            if (this.commandStep === 2) return this.commandData.p1 || null;
            return null; // Step 3: full perpendicular freedom for dimension line offset
        }
        if (this.commandData.basePoint) return this.commandData.basePoint;
        if (this.commandData.center) return this.commandData.center;
        if (this.commandData.p1) return this.commandData.p1;
        if (this.commandData.points && this.commandData.points.length > 0) {
            return this.commandData.points[this.commandData.points.length - 1];
        }
        return null;
    }

    getSuggestions(query) {
        query = (query || '').toUpperCase().trim();
        if (!query) return [];

        const exactAlias = [];
        const prefixAlias = [];
        const prefixName = [];
        const contains = [];
        const seen = new Set();

        const addCandidate = (list, cmd) => {
            if (!seen.has(cmd.name)) {
                seen.add(cmd.name);
                list.push(cmd);
            }
        };

        for (const cmd of this.commandCatalog) {
            if (cmd.alias === query) {
                addCandidate(exactAlias, cmd);
            } else if (cmd.alias.startsWith(query)) {
                addCandidate(prefixAlias, cmd);
            } else if (cmd.name.startsWith(query)) {
                addCandidate(prefixName, cmd);
            } else if (cmd.name.includes(query) || cmd.alias.includes(query)) {
                addCandidate(contains, cmd);
            }
        }

        return [...exactAlias, ...prefixAlias, ...prefixName, ...contains].slice(0, 6);
    }

    getAutoCompleteElements() {
        if (!this.autoCompletePopup) {
            this.autoCompletePopup = document.getElementById('commandAutoComplete');
        }
        if (!this.autoCompleteList) {
            this.autoCompleteList = document.getElementById('autoCompleteList');
        }
        return { popup: this.autoCompletePopup, list: this.autoCompleteList };
    }

    handleCommandLineInput() {
        if (this.currentCommand) {
            this.hideSuggestions();
            return;
        }
        const val = this.inputEl.value.trim();
        if (!val) {
            this.hideSuggestions();
            return;
        }

        this.suggestions = this.getSuggestions(val);
        if (this.suggestions.length > 0) {
            this.selectedSuggestionIndex = 0;
            this.renderSuggestions();
        } else {
            this.hideSuggestions();
        }
    }

    renderSuggestions() {
        const { popup, list } = this.getAutoCompleteElements();
        if (!popup || !list) return;

        if (this.suggestions.length === 0) {
            popup.style.display = 'none';
            return;
        }

        const isEn = window.cadcloneUI && window.cadcloneUI.currentLang === 'en';
        list.innerHTML = '';
        this.suggestions.forEach((item, index) => {
            const row = document.createElement('div');
            row.className = `autocomplete-item ${index === this.selectedSuggestionIndex ? 'selected' : ''}`;
            const desc = (isEn && item.descEn) ? item.descEn : item.desc;
            row.innerHTML = `
                <span class="ac-alias">${item.alias}</span>
                <span class="ac-name">${item.name}</span>
                <span class="ac-desc">${desc}</span>
            `;

            row.addEventListener('mousedown', (e) => {
                e.preventDefault();
                this.executeSuggestion(item.name);
            });

            list.appendChild(row);
        });

        popup.style.display = 'block';

        const selectedEl = list.children[this.selectedSuggestionIndex];
        if (selectedEl) {
            selectedEl.scrollIntoView({ block: 'nearest' });
        }
    }

    hideSuggestions() {
        const { popup } = this.getAutoCompleteElements();
        if (popup) {
            popup.style.display = 'none';
        }
        this.suggestions = [];
        this.selectedSuggestionIndex = -1;
    }

    executeSuggestion(cmdName) {
        this.hideSuggestions();
        this.inputEl.value = '';
        this.execute(cmdName);
    }

    cancelCommand() {
        return this.cancel();
    }

    cancel() {
        this.hideSuggestions();
        if (this.engine.activeGrip) {
            this.engine.cancelGripEdit();
            return;
        }
        this.currentCommand = null;
        this.commandStep = 0;
        this.commandData = {};
        this.engine.previewEntity = null;
        this.engine.previewEntities = null;
        this.engine.rubberband = null;
        this.engine.isCalibratingUnderlay = false;
        this.engine.underlayCalibrationPts = [];
        if (typeof this.engine.clearSelection === 'function') {
            this.engine.clearSelection(false);
        } else {
            this.engine.selectedIds.clear();
            if (this.engine.underlay) this.engine.underlay.selected = false;
        }
        this.engine.isBoxSelecting = false;
        this.engine.selectStart = null;
        this.engine.selectCurrent = null;
        this.engine.isDraggingSelection = false;
        this.engine.dragMoved = false;
        const promptLbl = (window.cadcloneUI && window.cadcloneUI.t) ? window.cadcloneUI.t('cmd_prompt') : 'Command: ';
        this.setPrompt(promptLbl);
        if (window.cadcloneUI && window.cadcloneUI.hideDynamicHud) {
            window.cadcloneUI.hideDynamicHud();
        }
        this.engine.render();
        if (window.cadcloneUI && window.cadcloneUI.updatePropertiesPanel) {
            window.cadcloneUI.updatePropertiesPanel();
        }
    }

    startBlockPlacement(blockId) {
        const lib = (typeof CADBlockLibrary !== 'undefined') ? CADBlockLibrary : (CADEngine.BlockLibrary || {});
        const def = lib[blockId];
        const isEn = window.cadcloneUI && window.cadcloneUI.currentLang === 'en';
        if (!def) {
            this.setPrompt(isEn ? `INSERT: Block "${blockId}" not found.` : `INSERT: Bloco "${blockId}" não encontrado.`);
            return;
        }

        const blockName = (isEn && typeof CAD_BLOCK_NAMES_EN !== 'undefined' && CAD_BLOCK_NAMES_EN[def.name]) ? CAD_BLOCK_NAMES_EN[def.name] : def.name;
        let rotation = 0;
        this.commandData = { blockId, rotation, lastWorldPt: null };
        this.commandStep = 1;
        this.setPrompt(isEn 
            ? `INSERT [${blockName}]: Click to place block [Press 'R' to rotate 90°]`
            : `INSERT [${def.name}]: Clique para posicionar o bloco [Pressione 'R' para girar 90°]`);

        this.currentCommand = {
            name: 'INSERT',
            onKey: (key) => {
                if (key === 'r' || key === 'R') {
                    rotation = (rotation + Math.PI / 2) % (2 * Math.PI);
                    this.commandData.rotation = rotation;
                    const deg = Math.round((rotation * 180) / Math.PI);
                    this.setPrompt(`INSERT [${def.name}]: Rotação = ${deg}°. Clique para posicionar [Pressione 'R' para girar]`);
                    const pt = this.commandData.lastWorldPt || this.engine.lastSnapPoint || { x: 0, y: 0 };
                    this.engine.previewEntities = this.engine.getBlockPreviewEntities(blockId, pt, rotation);
                    this.engine.render();
                    return true;
                }
                return false;
            },
            onMouseMove: (worldPt) => {
                this.commandData.lastWorldPt = worldPt;
                this.engine.previewEntities = this.engine.getBlockPreviewEntities(blockId, worldPt, rotation);
                this.engine.render();
            },
            onClick: (worldPt) => {
                const inserted = this.engine.insertBlock(blockId, worldPt, rotation);
                this.engine.previewEntities = null;
                this.currentCommand = null;
                this.commandStep = 0;
                this.commandData = {};
                const count = inserted ? inserted.length : 0;
                this.setPrompt(`Command: Bloco "${def.name}" inserido (${count} entidades).`);
                if (window.cadcloneUI && window.cadcloneUI.hideDynamicHud) {
                    window.cadcloneUI.hideDynamicHud();
                }
                this.engine.render();
                if (window.cadcloneUI && window.cadcloneUI.updatePropertiesPanel) {
                    window.cadcloneUI.updatePropertiesPanel();
                }
            },
            onEnter: (val) => {
                const upper = (val || '').trim().toUpperCase();
                if (upper === 'R') {
                    rotation = (rotation + Math.PI / 2) % (2 * Math.PI);
                    this.commandData.rotation = rotation;
                    const deg = Math.round((rotation * 180) / Math.PI);
                    this.setPrompt(`INSERT [${def.name}]: Rotação = ${deg}°. Especifique ponto de inserção:`);
                    return;
                }
                const pt = this.parseCoordinates(val, { x: 0, y: 0 });
                if (pt) {
                    const inserted = this.engine.insertBlock(blockId, pt, rotation);
                    this.engine.previewEntities = null;
                    this.currentCommand = null;
                    this.commandStep = 0;
                    this.commandData = {};
                    const count = inserted ? inserted.length : 0;
                    this.setPrompt(`Command: Bloco "${def.name}" inserido (${count} entidades).`);
                    this.engine.render();
                    if (window.cadcloneUI && window.cadcloneUI.updatePropertiesPanel) {
                        window.cadcloneUI.updatePropertiesPanel();
                    }
                } else if (!val) {
                    this.cancel();
                }
            }
        };
    }

    handleCanvasClick(worldPt, event = null) {
        if (this.engine.activeGrip) {
            this.engine.commitGripEdit(worldPt);
            return;
        }
        if (this.currentCommand && this.currentCommand.onClick) {
            this.currentCommand.onClick(worldPt, event);
        }
    }

    handleCanvasMouseMove(worldPt) {
        if (this.engine.activeGrip) {
            this.engine.updateGripPreview(worldPt);
            return;
        }
        if (this.currentCommand && this.currentCommand.onMouseMove) {
            this.currentCommand.onMouseMove(worldPt);
        }
    }

    parseCoordinates(str, refPt) {
        str = str.trim();
        if (!str) return null;

        let isRelative = false;
        if (str.startsWith('@')) {
            isRelative = true;
            str = str.substring(1);
        }

        if (str.includes('<')) {
            const [distStr, angStr] = str.split('<');
            const dist = parseFloat(distStr);
            const angDeg = parseFloat(angStr);
            if (!isNaN(dist) && !isNaN(angDeg)) {
                const angRad = angDeg * (Math.PI / 180);
                const dx = dist * Math.cos(angRad);
                const dy = dist * Math.sin(angRad);
                const base = (isRelative && refPt) ? refPt : { x: 0, y: 0 };
                return { x: base.x + dx, y: base.y + dy };
            }
        }

        if (str.includes(',')) {
            const [xStr, yStr] = str.split(',');
            const x = parseFloat(xStr);
            const y = parseFloat(yStr);
            if (!isNaN(x) && !isNaN(y)) {
                if (isRelative && refPt) {
                    return { x: refPt.x + x, y: refPt.y + y };
                }
                return { x, y };
            }
        }

        return null;
    }

    getCircleFrom3Points(p1, p2, p3) {
        const x1 = p1.x, y1 = p1.y;
        const x2 = p2.x, y2 = p2.y;
        const x3 = p3.x, y3 = p3.y;

        const d = 2 * (x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2));
        if (Math.abs(d) < 1e-6) return null;

        const ux = ((x1 * x1 + y1 * y1) * (y2 - y3) + (x2 * x2 + y2 * y2) * (y3 - y1) + (x3 * x3 + y3 * y3) * (y1 - y2)) / d;
        const uy = ((x1 * x1 + y1 * y1) * (x3 - x2) + (x2 * x2 + y2 * y2) * (x1 - x3) + (x3 * x3 + y3 * y3) * (x2 - x1)) / d;
        const r = Math.sqrt((x1 - ux) * (x1 - ux) + (y1 - uy) * (y1 - uy));

        return { x: ux, y: uy, r };
    }

    toggleSnap() {
        this.engine.snapManager.enabled = !this.engine.snapManager.enabled;
        this.logHistory(`<Snap ${this.engine.snapManager.enabled ? 'on' : 'off'}>`);
        if (window.cadcloneUI) window.cadcloneUI.updateStatusBar();
    }

    toggleGrid() {
        this.engine.gridEnabled = !this.engine.gridEnabled;
        this.logHistory(`<Grid ${this.engine.gridEnabled ? 'on' : 'off'}>`);
        this.engine.render();
        if (window.cadcloneUI) window.cadcloneUI.updateStatusBar();
    }

    toggleOrtho() {
        this.engine.orthoEnabled = !this.engine.orthoEnabled;
        if (this.engine.orthoEnabled) this.engine.polarEnabled = false;
        this.logHistory(`<Ortho ${this.engine.orthoEnabled ? 'on' : 'off'}>`);
        if (window.cadcloneUI) window.cadcloneUI.updateStatusBar();
    }

    togglePolar() {
        this.engine.polarEnabled = !this.engine.polarEnabled;
        if (this.engine.polarEnabled) this.engine.orthoEnabled = false;
        this.logHistory(`<Polar Tracking ${this.engine.polarEnabled ? 'on' : 'off'}>`);
        if (window.cadcloneUI) window.cadcloneUI.updateStatusBar();
    }

    toggleDyn() {
        this.engine.dynamicInput = !this.engine.dynamicInput;
        this.logHistory(`<Dynamic Input ${this.engine.dynamicInput ? 'on' : 'off'}>`);
        if (window.cadcloneUI) window.cadcloneUI.updateStatusBar();
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = CommandSystem;
}
