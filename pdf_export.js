/**
 * CADClone — Technical PDF Export with ABNT Standards (NBR 10068 / NBR 10582)
 * Generates vector PDF sheets with standard margins (25mm binding),
 * technical title block (carimbo), and scale calculation (1:50, 1:100, etc.).
 */

const PDFExport = {
    exportSheet(cad, options = {}) {
        const {
            paperSize = 'a4',       // 'a4' or 'a3'
            orientation = 'landscape', // 'landscape' or 'portrait'
            projectName = 'PROJETO RESIDENCIAL UNIFAMILIAR',
            discipline = 'PROJETO ARQUITETÔNICO / CIVIL',
            author = 'Engenheiro Responsável',
            crea = 'CREA/CAU: 123456-D',
            client = 'Cliente Padrão',
            scale = '1:50',
            sheetNumber = '01/01',
            fileName = 'prancha_tecnica.pdf'
        } = options;

        const { jsPDF } = window.jspdf || {};
        if (!jsPDF) {
            alert('Biblioteca jsPDF não encontrada.');
            return;
        }

        // Sheet dimensions in mm
        let widthMm = 297;
        let heightMm = 210;

        if (paperSize.toLowerCase() === 'a3') {
            widthMm = orientation === 'landscape' ? 420 : 297;
            heightMm = orientation === 'landscape' ? 297 : 420;
        } else {
            widthMm = orientation === 'landscape' ? 297 : 210;
            heightMm = orientation === 'landscape' ? 210 : 297;
        }

        const doc = new jsPDF({
            orientation: orientation,
            unit: 'mm',
            format: [widthMm, heightMm]
        });

        // ABNT Margins (NBR 10068): Left = 25mm, others = 7mm (A4) or 10mm (A3)
        const leftMargin = 25;
        const otherMargin = paperSize.toLowerCase() === 'a3' ? 10 : 7;
        const rightMargin = otherMargin;
        const topMargin = otherMargin;
        const bottomMargin = otherMargin;

        const drawingArea = {
            x: leftMargin,
            y: topMargin,
            w: widthMm - leftMargin - rightMargin,
            h: heightMm - topMargin - bottomMargin
        };

        // 1. Draw outer sheet boundary and ABNT margins
        doc.setDrawColor(0, 0, 0);
        doc.setLineWidth(0.5); // Thick border
        doc.rect(drawingArea.x, drawingArea.y, drawingArea.w, drawingArea.h);

        // 2. Draw ABNT Title Block (Carimbo) at Bottom-Right
        const carimboW = Math.min(175, drawingArea.w); // standard ABNT carimbo width 175mm
        const carimboH = 35; // mm
        const carimboX = drawingArea.x + drawingArea.w - carimboW;
        const carimboY = drawingArea.y + drawingArea.h - carimboH;

        doc.rect(carimboX, carimboY, carimboW, carimboH);

        // Subdivisions in carimbo
        doc.setLineWidth(0.25);
        // Header line
        doc.line(carimboX, carimboY + 10, carimboX + carimboW, carimboY + 10);
        // Middle line
        doc.line(carimboX, carimboY + 22, carimboX + carimboW, carimboY + 22);

        // Vertical splits
        doc.line(carimboX + 110, carimboY, carimboX + 110, carimboY + 22);
        doc.line(carimboX + 50, carimboY + 22, carimboX + 50, carimboY + carimboH);
        doc.line(carimboX + 90, carimboY + 22, carimboX + 90, carimboY + carimboH);
        doc.line(carimboX + 130, carimboY + 22, carimboX + 130, carimboY + carimboH);

        // Texts in Carimbo
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8);
        doc.text('CADCLONE — ENGENHARIA & ARQUITETURA', carimboX + 3, carimboY + 5);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(6.5);
        doc.text(discipline.toUpperCase(), carimboX + 3, carimboY + 8.5);

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(7);
        doc.text('PROJETO:', carimboX + 3, carimboY + 14);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        doc.text(projectName, carimboX + 3, carimboY + 19);

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(6.5);
        doc.text('RESPONSÁVEL TÉCNICO:', carimboX + 113, carimboY + 5);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(7.5);
        doc.text(author, carimboX + 113, carimboY + 11);
        doc.text(crea, carimboX + 113, carimboY + 16);

        // Bottom fields
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(6);
        doc.text('CLIENTE:', carimboX + 3, carimboY + 25.5);
        doc.setFont('helvetica', 'normal');
        doc.text(client, carimboX + 3, carimboY + 31);

        doc.setFont('helvetica', 'bold');
        doc.text('ESCALA:', carimboX + 52, carimboY + 25.5);
        doc.setFont('helvetica', 'normal');
        doc.text(scale, carimboX + 52, carimboY + 31);

        doc.setFont('helvetica', 'bold');
        doc.text('DATA:', carimboX + 92, carimboY + 25.5);
        doc.setFont('helvetica', 'normal');
        const todayStr = new Date().toLocaleDateString('pt-BR');
        doc.text(todayStr, carimboX + 92, carimboY + 31);

        doc.setFont('helvetica', 'bold');
        doc.text('PRANCHA:', carimboX + 132, carimboY + 25.5);
        doc.setFont('helvetica', 'normal');
        doc.text(sheetNumber, carimboX + 132, carimboY + 31);

        // 3. Render CAD Drawing into Usable Canvas Area
        const usableW = drawingArea.w;
        const usableH = drawingArea.h - carimboH; // leave space above carimbo

        // Calculate entities bounding box in meters
        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
        for (const e of cad.entities) {
            const lyr = cad.layers[e.layer || '0'];
            if (lyr && lyr.visible === false) continue;

            const box = cad.getEntityBoundingBox(e);
            if (box) {
                minX = Math.min(minX, box.minX);
                minY = Math.min(minY, box.minY);
                maxX = Math.max(maxX, box.maxX);
                maxY = Math.max(maxY, box.maxY);
            }
        }

        // Include underlay in bounds if present & visible
        if (cad.underlay && cad.underlay.visible) {
            minX = Math.min(minX, cad.underlay.x);
            minY = Math.min(minY, cad.underlay.y);
            maxX = Math.max(maxX, cad.underlay.x + cad.underlay.width);
            maxY = Math.max(maxY, cad.underlay.y + cad.underlay.height);
        }

        if (minX !== Infinity) {
            const cadW = (maxX - minX) || 1;
            const cadH = (maxY - minY) || 1;

            // Fit drawing into usable mm space (with 10mm safety padding)
            const pad = 10;
            const targetW = usableW - pad * 2;
            const targetH = usableH - pad * 2;

            const scaleRatio = Math.min(targetW / cadW, targetH / cadH);

            const offsetX = drawingArea.x + pad + (targetW - cadW * scaleRatio) / 2;
            // Y is inverted in PDF (0 at top) vs World (positive UP)
            const offsetY = drawingArea.y + pad + (targetH - cadH * scaleRatio) / 2;

            const toPdfX = (wx) => offsetX + (wx - minX) * scaleRatio;
            const toPdfY = (wy) => offsetY + (maxY - wy) * scaleRatio;

            // Render underlay (calco técnico) behind vector entities
            if (cad.underlay && cad.underlay.visible) {
                const uSrc = cad.underlay.dataUrl || (cad.underlay.img && cad.underlay.img.src);
                if (uSrc) {
                    try {
                        const uPdfX = toPdfX(cad.underlay.x);
                        const uPdfY = toPdfY(cad.underlay.y + cad.underlay.height);
                        const uPdfW = cad.underlay.width * scaleRatio;
                        const uPdfH = cad.underlay.height * scaleRatio;
                        doc.addImage(uSrc, 'PNG', uPdfX, uPdfY, uPdfW, uPdfH);
                    } catch (err) {
                        console.warn('Could not add underlay to exported PDF:', err);
                    }
                }
            }

            // Draw entities in PDF
            doc.setLineWidth(0.2);

            for (const e of cad.entities) {
                const lyr = cad.layers[e.layer || '0'];
                if (lyr && lyr.visible === false) continue;

                // Determine stroke color
                const cHex = (lyr && lyr.color) || '#000000';
                const rgb = this.hexToRgb(cHex);
                // Convert pure white or very light colors to dark gray/black for paper printing
                const isLight = (rgb.r * 0.299 + rgb.g * 0.587 + rgb.b * 0.114) > 200;
                if (isLight) {
                    doc.setDrawColor(30, 30, 30);
                    doc.setTextColor(30, 30, 30);
                } else {
                    doc.setDrawColor(rgb.r, rgb.g, rgb.b);
                    doc.setTextColor(rgb.r, rgb.g, rgb.b);
                }

                // Determine Linetype & Dash pattern
                const linetype = (cad.getEffectiveLinetype ? cad.getEffectiveLinetype(e) : (e.linetype || (lyr && lyr.linetype) || 'CONTINUOUS')).toUpperCase();
                let dashPattern = [];
                if (linetype === 'DASHED') dashPattern = [3.0, 1.5];
                else if (linetype === 'HIDDEN') dashPattern = [1.5, 1.0];
                else if (linetype === 'CENTER') dashPattern = [6.0, 1.5, 0.8, 1.5];
                else if (linetype === 'PHANTOM') dashPattern = [6.0, 1.5, 0.8, 1.5, 0.8, 1.5];
                else if (linetype === 'DOT') dashPattern = [0.5, 1.5];
                else if (linetype === 'DASHDOT') dashPattern = [3.0, 1.5, 0.5, 1.5];

                if (doc.setLineDashPattern) {
                    doc.setLineDashPattern(dashPattern, 0);
                }

                if (e.type === 'LINE') {
                    doc.line(toPdfX(e.x1), toPdfY(e.y1), toPdfX(e.x2), toPdfY(e.y2));
                } else if (e.type === 'CIRCLE') {
                    const cx = toPdfX(e.cx);
                    const cy = toPdfY(e.cy);
                    const r = e.r * scaleRatio;
                    doc.circle(cx, cy, r, 'S');
                } else if (e.type === 'POLYLINE' && e.points && e.points.length >= 2) {
                    for (let i = 0; i < e.points.length - 1; i++) {
                        doc.line(toPdfX(e.points[i].x), toPdfY(e.points[i].y), toPdfX(e.points[i + 1].x), toPdfY(e.points[i + 1].y));
                    }
                    if (e.closed) {
                        const first = e.points[0];
                        const last = e.points[e.points.length - 1];
                        doc.line(toPdfX(last.x), toPdfY(last.y), toPdfX(first.x), toPdfY(first.y));
                    }
                } else if (e.type === 'TEXT') {
                    doc.setFontSize(Math.max(6, (e.height || 0.3) * scaleRatio * 2));
                    doc.text(e.text || '', toPdfX(e.x), toPdfY(e.y));
                } else if (e.type === 'DIMENSION') {
                    if (doc.setLineDashPattern) doc.setLineDashPattern([], 0);
                    doc.line(toPdfX(e.x1), toPdfY(e.y1), toPdfX(e.x2), toPdfY(e.y2));
                    const midX = (toPdfX(e.x1) + toPdfX(e.x2)) / 2;
                    const midY = (toPdfY(e.y1) + toPdfY(e.y2)) / 2;
                    doc.setFontSize(7);
                    doc.text(e.text || '', midX, midY - 1, { align: 'center' });
                }

                if (doc.setLineDashPattern && dashPattern.length > 0) {
                    doc.setLineDashPattern([], 0);
                }
            }
        }

        // Save PDF
        doc.save(fileName);
    },

    hexToRgb(hex) {
        let clean = hex.replace('#', '');
        if (clean.length === 3) {
            clean = clean.split('').map(c => c + c).join('');
        }
        const num = parseInt(clean, 16);
        return {
            r: (num >> 16) & 255,
            g: (num >> 8) & 255,
            b: num & 255
        };
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = PDFExport;
}
