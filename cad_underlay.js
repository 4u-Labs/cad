/**
 * CADClone — PDF & Image Underlay (Calco Técnico) Manager
 * Enables attaching architectural & engineering PDFs or raster images (PNG/JPG)
 * as high-DPI background underlays for drawing, tracing, adding objects,
 * calibrating real-world 1:1 metric scales, and exporting.
 */

class CADUnderlayManager {
    constructor(engine, ui) {
        this.engine = engine;
        this.ui = ui;
        this.pdfDoc = null;
        this.currentPdfFile = null;

        this.hudBar = document.getElementById('cadUnderlayBar');
        this.pdfInput = document.getElementById('cadPdfInput');
        this.imageInput = document.getElementById('cadImageInput');
        this.dropOverlay = document.getElementById('cadDropOverlay');
        this.pageModal = document.getElementById('cadPdfPageModal');

        this.initFileInputs();
        this.initHud();
        this.initDragAndDrop();
    }

    t(key, fallback) {
        if (this.ui && typeof this.ui.t === 'function') {
            const val = this.ui.t(key);
            if (val && val !== key) return val;
        }
        return fallback || key;
    }

    initFileInputs() {
        if (this.pdfInput) {
            this.pdfInput.addEventListener('change', (e) => {
                const file = e.target.files && e.target.files[0];
                if (file) {
                    this.loadPdfFile(file);
                }
                this.pdfInput.value = '';
            });
        }

        if (this.imageInput) {
            this.imageInput.addEventListener('change', (e) => {
                const file = e.target.files && e.target.files[0];
                if (file) {
                    this.loadImageFile(file);
                }
                this.imageInput.value = '';
            });
        }
    }

    openPdfPicker() {
        if (this.pdfInput) {
            this.pdfInput.click();
        }
    }

    openImagePicker() {
        if (this.imageInput) {
            this.imageInput.click();
        }
    }

    initHud() {
        const slider = document.getElementById('underlayOpacitySlider');
        const opacityVal = document.getElementById('underlayOpacityVal');
        const visBtn = document.getElementById('underlayVisBtn');
        const lockBtn = document.getElementById('underlayLockBtn');
        const calibBtn = document.getElementById('underlayCalibrateBtn');
        const removeBtn = document.getElementById('underlayRemoveBtn');

        if (slider) {
            slider.addEventListener('input', (e) => {
                const val = parseFloat(e.target.value);
                this.engine.setUnderlayOpacity(val);
                if (opacityVal) opacityVal.textContent = Math.round(val * 100) + '%';
            });
        }

        if (visBtn) {
            visBtn.addEventListener('click', () => {
                const vis = this.engine.toggleUnderlayVisible();
                this.updateHud();
            });
        }

        if (lockBtn) {
            lockBtn.addEventListener('click', () => {
                const locked = this.engine.toggleUnderlayLocked();
                this.updateHud();
                const isEn = this.ui && this.ui.currentLang === 'en';
                if (this.ui && this.ui.showNotification) {
                    this.ui.showNotification(locked ? (isEn ? 'Underlay position locked' : 'Posição do calco travada') : (isEn ? 'Underlay unlocked' : 'Posição do calco destravada'), 'info');
                }
            });
        }

        const rotateBtn = document.getElementById('underlayRotateBtn');
        const zoomInBtn = document.getElementById('underlayZoomInBtn');
        const zoomOutBtn = document.getElementById('underlayZoomOutBtn');
        const moveBtn = document.getElementById('underlayMoveBtn');

        if (rotateBtn) {
            rotateBtn.addEventListener('click', () => {
                if (!this.engine.underlay) return;
                const newRot = this.engine.rotateUnderlay(90, true);
                this.updateHud();
                const isEn = this.ui && this.ui.currentLang === 'en';
                if (this.ui && this.ui.showNotification) {
                    this.ui.showNotification(isEn ? `Underlay rotated to ${newRot}°` : `Calco girado para ${newRot}°`, 'info');
                }
            });
        }

        if (zoomInBtn) {
            zoomInBtn.addEventListener('click', () => {
                if (!this.engine.underlay) return;
                const res = this.engine.scaleUnderlay(1.10);
                this.updateHud();
                const isEn = this.ui && this.ui.currentLang === 'en';
                if (this.ui && this.ui.showNotification && res) {
                    this.ui.showNotification(isEn ? `Underlay enlarged: ${res.width.toFixed(2)}m × ${res.height.toFixed(2)}m (+10%)` : `Calco ampliado: ${res.width.toFixed(2)}m × ${res.height.toFixed(2)}m (+10%)`, 'info');
                }
            });
        }

        if (zoomOutBtn) {
            zoomOutBtn.addEventListener('click', () => {
                if (!this.engine.underlay) return;
                const res = this.engine.scaleUnderlay(1 / 1.10);
                this.updateHud();
                const isEn = this.ui && this.ui.currentLang === 'en';
                if (this.ui && this.ui.showNotification && res) {
                    this.ui.showNotification(isEn ? `Underlay reduced: ${res.width.toFixed(2)}m × ${res.height.toFixed(2)}m (-10%)` : `Calco reduzido: ${res.width.toFixed(2)}m × ${res.height.toFixed(2)}m (-10%)`, 'info');
                }
            });
        }

        if (moveBtn) {
            moveBtn.addEventListener('click', () => {
                if (this.ui && this.ui.cmdSystem) {
                    this.ui.cmdSystem.execute('UNDERLAYMOVE');
                }
            });
        }

        if (calibBtn) {
            calibBtn.addEventListener('click', () => {
                if (this.ui && this.ui.cmdSystem) {
                    this.ui.cmdSystem.execute('CALIBRATE');
                }
            });
        }

        if (removeBtn) {
            removeBtn.addEventListener('click', () => {
                const isEn = this.ui && this.ui.currentLang === 'en';
                const msg = isEn ? 'Are you sure you want to remove the underlay?' : 'Tem certeza que deseja remover o calco PDF/Imagem?';
                if (confirm(msg)) {
                    this.engine.removeUnderlay();
                    this.updateHud();
                    if (this.ui && this.ui.showNotification) {
                        this.ui.showNotification(isEn ? 'Underlay removed' : 'Calco removido', 'info');
                    }
                }
            });
        }
    }

    updateHud() {
        const bar = document.getElementById('cadUnderlayBar');
        if (!bar) return;

        const u = this.engine.underlay;
        if (!u) {
            bar.style.display = 'none';
            return;
        }

        bar.style.display = 'flex';

        const slider = document.getElementById('underlayOpacitySlider');
        const opacityVal = document.getElementById('underlayOpacityVal');
        const visBtn = document.getElementById('underlayVisBtn');
        const lockBtn = document.getElementById('underlayLockBtn');
        const nameBadge = document.getElementById('underlayFileName');
        const dimsBadge = document.getElementById('underlayDimsBadge');

        if (slider) slider.value = u.opacity !== undefined ? u.opacity : 0.5;
        if (opacityVal) opacityVal.textContent = Math.round((u.opacity !== undefined ? u.opacity : 0.5) * 100) + '%';

        if (visBtn) {
            if (u.visible) {
                visBtn.classList.remove('active-off');
                visBtn.innerHTML = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>';
                visBtn.title = this.t('underlay_btn_hide', 'Ocultar Calco');
            } else {
                visBtn.classList.add('active-off');
                visBtn.innerHTML = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';
                visBtn.title = this.t('underlay_btn_show', 'Exibir Calco');
            }
        }

        if (lockBtn) {
            if (u.locked) {
                lockBtn.classList.add('active-locked');
                lockBtn.innerHTML = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>';
                lockBtn.title = this.t('underlay_btn_unlock', 'Destravar Calco');
            } else {
                lockBtn.classList.remove('active-locked');
                lockBtn.innerHTML = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>';
                lockBtn.title = this.t('underlay_btn_lock', 'Travar Calco');
            }
        }

        if (nameBadge) {
            const typeIcon = u.type === 'pdf' ? '📄' : '🖼️';
            const pageStr = (u.type === 'pdf' && u.page) ? ` (pág. ${u.page})` : '';
            nameBadge.textContent = `${typeIcon} ${u.fileName || 'Underlay'}${pageStr}`;
        }

        if (dimsBadge) {
            dimsBadge.textContent = `${(u.width || 0).toFixed(2)}m × ${(u.height || 0).toFixed(2)}m`;
        }

        const rotBadge = document.getElementById('underlayRotBadge');
        if (rotBadge) {
            rotBadge.textContent = `${Math.round(u.rotation || 0)}°`;
        }
    }

    toggleBar() {
        const bar = document.getElementById('cadUnderlayBar');
        if (!bar) return;
        if (bar.style.display === 'none' || !bar.style.display) {
            if (this.engine.underlay) {
                this.updateHud();
            } else {
                const isEn = this.ui && this.ui.currentLang === 'en';
                if (this.ui && this.ui.showNotification) {
                    this.ui.showNotification(isEn ? 'No underlay attached. Use "Attach PDF" or drag a PDF into CADClone.' : 'Nenhum calco ativo. Use "Anexar PDF" ou arraste um PDF para a tela.', 'info');
                }
            }
        } else {
            bar.style.display = 'none';
        }
    }

    initDragAndDrop() {
        const container = document.getElementById('viewportContainer') || document.body;
        const overlay = document.getElementById('cadDropOverlay');

        ['dragenter', 'dragover'].forEach(name => {
            container.addEventListener(name, (e) => {
                e.preventDefault();
                e.stopPropagation();
                if (overlay) overlay.style.display = 'flex';
            });
        });

        ['dragleave', 'drop'].forEach(name => {
            container.addEventListener(name, (e) => {
                e.preventDefault();
                e.stopPropagation();
                if (overlay && (e.type === 'drop' || e.target === overlay)) {
                    overlay.style.display = 'none';
                }
            });
        });

        container.addEventListener('drop', (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (overlay) overlay.style.display = 'none';

            const files = e.dataTransfer && e.dataTransfer.files;
            if (!files || files.length === 0) return;

            const file = files[0];
            const ext = (file.name.split('.').pop() || '').toLowerCase();

            if (ext === 'pdf') {
                this.loadPdfFile(file);
            } else if (['png', 'jpg', 'jpeg', 'webp', 'bmp', 'svg'].includes(ext)) {
                this.loadImageFile(file);
            } else if (['dxf', 'dwg'].includes(ext)) {
                if (this.ui && typeof this.ui.handleFileSelected === 'function') {
                    this.ui.handleFileSelected(file);
                }
            } else {
                const isEn = this.ui && this.ui.currentLang === 'en';
                alert(isEn ? `Unsupported file format: .${ext}. Please use .pdf, .png, .jpg, or .dxf` : `Formato não suportado: .${ext}. Use arquivos .pdf, .png, .jpg ou .dxf`);
            }
        });
    }

    async loadPdfFile(file) {
        if (!window.pdfjsLib) {
            alert('PDF.js não está carregado. Verifique libs/pdf.min.js.');
            return;
        }

        const isEn = this.ui && this.ui.currentLang === 'en';
        if (this.ui && this.ui.showNotification) {
            this.ui.showNotification(isEn ? `Loading PDF: ${file.name}...` : `Carregando PDF: ${file.name}...`, 'info');
        }

        try {
            const arrayBuffer = await file.arrayBuffer();
            const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
            this.pdfDoc = await loadingTask.promise;
            this.currentPdfFile = file;

            if (this.pdfDoc.numPages === 1) {
                await this.renderPdfPage(this.pdfDoc, 1, file.name);
            } else {
                this.showPageSelectionModal(this.pdfDoc, file);
            }
        } catch (err) {
            console.error('Error loading PDF underlay:', err);
            alert((isEn ? 'Failed to read PDF file: ' : 'Erro ao processar arquivo PDF: ') + err.message);
        }
    }

    showPageSelectionModal(pdfDoc, file) {
        const modal = document.getElementById('cadPdfPageModal');
        const grid = document.getElementById('pdfPageGrid');
        const title = document.getElementById('pdfModalFileName');
        if (!modal || !grid) {
            // Fallback: render page 1 if modal missing
            this.renderPdfPage(pdfDoc, 1, file.name);
            return;
        }

        if (title) title.textContent = file.name;
        grid.innerHTML = '';

        const isEn = this.ui && this.ui.currentLang === 'en';

        for (let i = 1; i <= pdfDoc.numPages; i++) {
            const pageNum = i;
            const card = document.createElement('div');
            card.className = 'pdf-page-card';
            card.innerHTML = `
                <div class="pdf-page-preview" id="pdfThumb_${pageNum}">
                    <span class="pdf-thumb-placeholder">${isEn ? 'Page' : 'Página'} ${pageNum}</span>
                </div>
                <div class="pdf-page-label">${isEn ? 'Page' : 'Página'} ${pageNum} / ${pdfDoc.numPages}</div>
            `;
            card.addEventListener('click', async () => {
                this.closePageModal();
                await this.renderPdfPage(pdfDoc, pageNum, file.name);
            });
            grid.appendChild(card);

            // Render async thumbnail
            pdfDoc.getPage(pageNum).then(page => {
                const thumbViewport = page.getViewport({ scale: 0.3 });
                const thumbCanvas = document.createElement('canvas');
                thumbCanvas.width = thumbViewport.width;
                thumbCanvas.height = thumbViewport.height;
                const thumbCtx = thumbCanvas.getContext('2d');
                page.render({ canvasContext: thumbCtx, viewport: thumbViewport }).promise.then(() => {
                    const container = document.getElementById(`pdfThumb_${pageNum}`);
                    if (container) {
                        container.innerHTML = '';
                        container.appendChild(thumbCanvas);
                    }
                });
            }).catch(e => console.warn('Thumb error:', e));
        }

        modal.style.display = 'flex';
    }

    closePageModal() {
        const modal = document.getElementById('cadPdfPageModal');
        if (modal) modal.style.display = 'none';
    }

    async renderPdfPage(pdfDoc, pageNum, fileName) {
        const isEn = this.ui && this.ui.currentLang === 'en';
        if (this.ui && this.ui.showNotification) {
            this.ui.showNotification(isEn ? `Rasterizing high-resolution page ${pageNum}...` : `Processando página ${pageNum} em alta resolução...`, 'info');
        }

        try {
            const page = await pdfDoc.getPage(pageNum);
            // High-DPI scale (2.5x) for pin-sharp linework and text
            const renderScale = 2.5;
            const viewport = page.getViewport({ scale: renderScale });

            const offCanvas = document.createElement('canvas');
            offCanvas.width = viewport.width;
            offCanvas.height = viewport.height;
            const ctx = offCanvas.getContext('2d', { alpha: false });

            // Background white fill
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, offCanvas.width, offCanvas.height);

            await page.render({
                canvasContext: ctx,
                viewport: viewport
            }).promise;

            const dataUrl = offCanvas.toDataURL('image/png');
            const img = new Image();

            img.onload = () => {
                const aspect = viewport.width / viewport.height;
                // Default real-world metric width: 25.0 meters
                let worldW = 25.0;
                let worldH = worldW / aspect;

                let worldX = 0;
                let worldY = 0;

                this.engine.setUnderlay({
                    type: 'pdf',
                    fileName: fileName,
                    page: pageNum,
                    totalPages: pdfDoc.numPages,
                    img: img,
                    dataUrl: dataUrl,
                    x: worldX,
                    y: worldY,
                    width: worldW,
                    height: worldH,
                    rotation: 0,
                    opacity: 0.5,
                    visible: true,
                    locked: false
                });

                this.updateHud();

                // If drawing is empty, zoom extents to frame the PDF
                if (this.engine.entities.length === 0) {
                    this.engine.zoomExtents();
                }

                if (this.ui && this.ui.cmdSystem) {
                    this.ui.cmdSystem.logHistory(isEn ? 
                        `PDF attached: "${fileName}" (Page ${pageNum}). Type CALIBRATE to set 1:1 metric scale.` : 
                        `PDF anexado: "${fileName}" (Página ${pageNum}). Digite CALIBRAR para ajustar a escala 1:1.`);
                }

                if (this.ui && this.ui.showNotification) {
                    this.ui.showNotification(isEn ? 
                        `PDF Attached! Use "Calibrate Scale" to adjust 1:1 metric scale.` : 
                        `PDF Anexado! Clique em "Calibrar Escala" para ajustar a escala métrica 1:1.`, 'success');
                }
            };

            img.src = dataUrl;
        } catch (err) {
            console.error('Error rendering PDF page:', err);
            alert((isEn ? 'Failed to render PDF page: ' : 'Falha ao renderizar página do PDF: ') + err.message);
        }
    }

    loadImageFile(file) {
        const isEn = this.ui && this.ui.currentLang === 'en';
        const reader = new FileReader();

        reader.onload = (e) => {
            const dataUrl = e.target.result;
            const img = new Image();

            img.onload = () => {
                const aspect = img.width / img.height;
                const worldW = 25.0;
                const worldH = worldW / aspect;

                this.engine.setUnderlay({
                    type: 'image',
                    fileName: file.name,
                    img: img,
                    dataUrl: dataUrl,
                    x: 0,
                    y: 0,
                    width: worldW,
                    height: worldH,
                    rotation: 0,
                    opacity: 0.5,
                    visible: true,
                    locked: false
                });

                this.updateHud();

                if (this.engine.entities.length === 0) {
                    this.engine.zoomExtents();
                }

                if (this.ui && this.ui.cmdSystem) {
                    this.ui.cmdSystem.logHistory(isEn ? 
                        `Image attached: "${file.name}". Type CALIBRATE to set 1:1 metric scale.` : 
                        `Imagem anexada: "${file.name}". Digite CALIBRAR para ajustar a escala 1:1.`);
                }

                if (this.ui && this.ui.showNotification) {
                    this.ui.showNotification(isEn ? 
                        `Image Attached! Use "Calibrate Scale" to set 1:1 scale.` : 
                        `Imagem Anexada! Use "Calibrar Escala" para ajustar a escala 1:1.`, 'success');
                }
            };

            img.src = dataUrl;
        };

        reader.readAsDataURL(file);
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = CADUnderlayManager;
}
