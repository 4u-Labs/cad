// CADClone Block Library v1.1.2
var CADBlockLibrary = {
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
    },

// ==========================================
    // NOVOS BLOCOS ARQUITETÔNICOS EXPANDIDOS
    // ==========================================

    // --- MOBILIÁRIO: SALA & ESTAR ---
    'SOFA_L': {
        id: 'SOFA_L',
        name: 'Sofá de Canto em L',
        category: 'furniture',
        categoryName: 'Mobiliário',
        dimensions: '2.40m x 2.00m',
        layer: 'Mobiliario',
        color: '#f59e0b',
        svgPreview: `<svg viewBox="-0.1 -0.1 2.6 2.2" width="48" height="42" stroke="#f59e0b" stroke-width="0.05" fill="none"><path d="M 0 0 L 2.4 0 L 2.4 0.85 L 0.85 0.85 L 0.85 2.0 L 0 2.0 Z"/><line x1="0" y1="0.65" x2="2.4" y2="0.65"/><line x1="0.65" y1="0.65" x2="0.65" y2="2.0"/></svg>`,
        entities: [
            // Outer contour L-shape
            { type: 'POLYLINE', points: [
                { x: 0, y: 0 }, { x: 2.40, y: 0 }, { x: 2.40, y: 0.90 },
                { x: 0.90, y: 0.90 }, { x: 0.90, y: 2.00 }, { x: 0, y: 2.00 }
            ], closed: true },
            // Backrests
            { type: 'LINE', x1: 0, y1: 0.70, x2: 2.40, y2: 0.70 },
            { type: 'LINE', x1: 0.70, y1: 0.70, x2: 0.70, y2: 2.00 },
            // Armrests
            { type: 'LINE', x1: 2.22, y1: 0, x2: 2.22, y2: 0.70 },
            { type: 'LINE', x1: 0, y1: 1.82, x2: 0.70, y2: 1.82 },
            // Cushion divisions
            { type: 'LINE', x1: 0.70, y1: 0, x2: 0.70, y2: 0.70 },
            { type: 'LINE', x1: 1.45, y1: 0, x2: 1.45, y2: 0.70 },
            { type: 'LINE', x1: 0, y1: 1.25, x2: 0.70, y2: 1.25 }
        ]
    },

    'COFFEE_TABLE': {
        id: 'COFFEE_TABLE',
        name: 'Mesa de Centro Sala',
        category: 'furniture',
        categoryName: 'Mobiliário',
        dimensions: '1.00m x 0.60m',
        layer: 'Mobiliario',
        color: '#f59e0b',
        svgPreview: `<svg viewBox="-0.1 -0.1 1.2 0.8" width="46" height="30" stroke="#f59e0b" stroke-width="0.04" fill="none"><rect x="0" y="0" width="1.0" height="0.6"/><rect x="0.1" y="0.1" width="0.8" height="0.4" stroke-dasharray="0.08,0.04"/></svg>`,
        entities: [
            { type: 'LINE', x1: 0, y1: 0, x2: 1.00, y2: 0 },
            { type: 'LINE', x1: 1.00, y1: 0, x2: 1.00, y2: 0.60 },
            { type: 'LINE', x1: 1.00, y1: 0.60, x2: 0, y2: 0.60 },
            { type: 'LINE', x1: 0, y1: 0.60, x2: 0, y2: 0 },
            { type: 'LINE', x1: 0.10, y1: 0.10, x2: 0.90, y2: 0.10 },
            { type: 'LINE', x1: 0.90, y1: 0.10, x2: 0.90, y2: 0.50 },
            { type: 'LINE', x1: 0.90, y1: 0.50, x2: 0.10, y2: 0.50 },
            { type: 'LINE', x1: 0.10, y1: 0.50, x2: 0.10, y2: 0.10 }
        ]
    },

    'TV_RACK': {
        id: 'TV_RACK',
        name: 'Painel & Rack c/ TV 65"',
        category: 'furniture',
        categoryName: 'Mobiliário',
        dimensions: '1.80m x 0.40m',
        layer: 'Mobiliario',
        color: '#f59e0b',
        svgPreview: `<svg viewBox="-0.1 -0.05 2.0 0.5" width="54" height="22" stroke="#f59e0b" stroke-width="0.04" fill="none"><rect x="0" y="0" width="1.8" height="0.4"/><rect x="0.2" y="0.15" width="1.4" height="0.08" fill="#f59e0b" fill-opacity="0.3"/></svg>`,
        entities: [
            // Rack base
            { type: 'LINE', x1: 0, y1: 0, x2: 1.80, y2: 0 },
            { type: 'LINE', x1: 1.80, y1: 0, x2: 1.80, y2: 0.40 },
            { type: 'LINE', x1: 1.80, y1: 0.40, x2: 0, y2: 0.40 },
            { type: 'LINE', x1: 0, y1: 0.40, x2: 0, y2: 0 },
            // TV Screen
            { type: 'LINE', x1: 0.20, y1: 0.16, x2: 1.60, y2: 0.16 },
            { type: 'LINE', x1: 1.60, y1: 0.16, x2: 1.60, y2: 0.24 },
            { type: 'LINE', x1: 1.60, y1: 0.24, x2: 0.20, y2: 0.24 },
            { type: 'LINE', x1: 0.20, y1: 0.24, x2: 0.20, y2: 0.16 },
            // TV Base stand
            { type: 'LINE', x1: 0.75, y1: 0.12, x2: 1.05, y2: 0.12 },
            { type: 'LINE', x1: 1.05, y1: 0.12, x2: 1.05, y2: 0.28 },
            { type: 'LINE', x1: 1.05, y1: 0.28, x2: 0.75, y2: 0.28 },
            { type: 'LINE', x1: 0.75, y1: 0.28, x2: 0.75, y2: 0.12 }
        ]
    },

    'TABLE_DINING_8': {
        id: 'TABLE_DINING_8',
        name: 'Mesa de Jantar 8 Cadeiras',
        category: 'furniture',
        categoryName: 'Mobiliário',
        dimensions: '2.20m x 1.25m',
        layer: 'Mobiliario',
        color: '#f59e0b',
        svgPreview: `<svg viewBox="-0.1 -0.1 2.4 1.45" width="56" height="36" stroke="#f59e0b" stroke-width="0.035" fill="none"><rect x="0" y="0.18" width="2.2" height="0.89"/><rect x="0.1" y="0" width="0.4" height="0.18"/><rect x="0.6" y="0" width="0.4" height="0.18"/><rect x="1.1" y="0" width="0.4" height="0.18"/><rect x="1.6" y="0" width="0.4" height="0.18"/><rect x="0.1" y="1.07" width="0.4" height="0.18"/><rect x="0.6" y="1.07" width="0.4" height="0.18"/><rect x="1.1" y="1.07" width="0.4" height="0.18"/><rect x="1.6" y="1.07" width="0.4" height="0.18"/></svg>`,
        entities: [
            // Table top
            { type: 'LINE', x1: 0, y1: 0.18, x2: 2.20, y2: 0.18 },
            { type: 'LINE', x1: 2.20, y1: 0.18, x2: 2.20, y2: 1.07 },
            { type: 'LINE', x1: 2.20, y1: 1.07, x2: 0, y2: 1.07 },
            { type: 'LINE', x1: 0, y1: 1.07, x2: 0, y2: 0.18 },
            // 4 Bottom chairs
            { type: 'POLYLINE', points: [{ x: 0.12, y: 0.18 }, { x: 0.12, y: 0 }, { x: 0.52, y: 0 }, { x: 0.52, y: 0.18 }], closed: false },
            { type: 'POLYLINE', points: [{ x: 0.65, y: 0.18 }, { x: 0.65, y: 0 }, { x: 1.05, y: 0 }, { x: 1.05, y: 0.18 }], closed: false },
            { type: 'POLYLINE', points: [{ x: 1.18, y: 0.18 }, { x: 1.18, y: 0 }, { x: 1.58, y: 0 }, { x: 1.58, y: 0.18 }], closed: false },
            { type: 'POLYLINE', points: [{ x: 1.70, y: 0.18 }, { x: 1.70, y: 0 }, { x: 2.10, y: 0 }, { x: 2.10, y: 0.18 }], closed: false },
            // 4 Top chairs
            { type: 'POLYLINE', points: [{ x: 0.12, y: 1.07 }, { x: 0.12, y: 1.25 }, { x: 0.52, y: 1.25 }, { x: 0.52, y: 1.07 }], closed: false },
            { type: 'POLYLINE', points: [{ x: 0.65, y: 1.07 }, { x: 0.65, y: 1.25 }, { x: 1.05, y: 1.25 }, { x: 1.05, y: 1.07 }], closed: false },
            { type: 'POLYLINE', points: [{ x: 1.18, y: 1.07 }, { x: 1.18, y: 1.25 }, { x: 1.58, y: 1.25 }, { x: 1.58, y: 1.07 }], closed: false },
            { type: 'POLYLINE', points: [{ x: 1.70, y: 1.07 }, { x: 1.70, y: 1.25 }, { x: 2.10, y: 1.25 }, { x: 2.10, y: 1.07 }], closed: false }
        ]
    },

    // --- MOBILIÁRIO: DORMITÓRIO & ESCRITÓRIO ---
    'BED_KING': {
        id: 'BED_KING',
        name: 'Cama King Size c/ Criados',
        category: 'furniture',
        categoryName: 'Mobiliário',
        dimensions: '2.70m x 2.10m',
        layer: 'Mobiliario',
        color: '#f59e0b',
        svgPreview: `<svg viewBox="-0.1 -0.1 2.9 2.3" width="50" height="42" stroke="#f59e0b" stroke-width="0.04" fill="none"><rect x="0" y="0" width="2.7" height="0.1"/><rect x="0.38" y="0.1" width="1.94" height="2.0"/><rect x="0" y="0.1" width="0.38" height="0.45"/><rect x="2.32" y="0.1" width="0.38" height="0.45"/><circle cx="0.19" cy="0.32" r="0.1"/><circle cx="2.51" cy="0.32" r="0.1"/></svg>`,
        entities: [
            // Headboard
            { type: 'LINE', x1: 0, y1: 0, x2: 2.70, y2: 0 },
            { type: 'LINE', x1: 2.70, y1: 0, x2: 2.70, y2: 0.10 },
            { type: 'LINE', x1: 2.70, y1: 0.10, x2: 0, y2: 0.10 },
            { type: 'LINE', x1: 0, y1: 0.10, x2: 0, y2: 0 },
            // Left nightstand
            { type: 'LINE', x1: 0, y1: 0.10, x2: 0.38, y2: 0.10 },
            { type: 'LINE', x1: 0.38, y1: 0.10, x2: 0.38, y2: 0.50 },
            { type: 'LINE', x1: 0.38, y1: 0.50, x2: 0, y2: 0.50 },
            { type: 'LINE', x1: 0, y1: 0.50, x2: 0, y2: 0.10 },
            { type: 'CIRCLE', cx: 0.19, cy: 0.30, r: 0.10 },
            // Right nightstand
            { type: 'LINE', x1: 2.32, y1: 0.10, x2: 2.70, y2: 0.10 },
            { type: 'LINE', x1: 2.70, y1: 0.10, x2: 2.70, y2: 0.50 },
            { type: 'LINE', x1: 2.70, y1: 0.50, x2: 2.32, y2: 0.50 },
            { type: 'LINE', x1: 2.32, y1: 0.50, x2: 2.32, y2: 0.10 },
            { type: 'CIRCLE', cx: 2.51, cy: 0.30, r: 0.10 },
            // Mattress (1.94 x 2.00)
            { type: 'LINE', x1: 0.38, y1: 0.10, x2: 2.32, y2: 0.10 },
            { type: 'LINE', x1: 2.32, y1: 0.10, x2: 2.32, y2: 2.10 },
            { type: 'LINE', x1: 2.32, y1: 2.10, x2: 0.38, y2: 2.10 },
            { type: 'LINE', x1: 0.38, y1: 2.10, x2: 0.38, y2: 0.10 },
            // 2 Large pillows
            { type: 'POLYLINE', points: [{ x: 0.48, y: 0.16 }, { x: 1.25, y: 0.16 }, { x: 1.25, y: 0.60 }, { x: 0.48, y: 0.60 }], closed: true },
            { type: 'POLYLINE', points: [{ x: 1.45, y: 0.16 }, { x: 2.22, y: 0.16 }, { x: 2.22, y: 0.60 }, { x: 1.45, y: 0.60 }], closed: true },
            // Blanket fold
            { type: 'LINE', x1: 0.38, y1: 0.90, x2: 2.32, y2: 0.90 }
        ]
    },

    'NIGHTSTAND': {
        id: 'NIGHTSTAND',
        name: 'Mesa de Cabeceira / Criado',
        category: 'furniture',
        categoryName: 'Mobiliário',
        dimensions: '0.45m x 0.45m',
        layer: 'Mobiliario',
        color: '#f59e0b',
        svgPreview: `<svg viewBox="-0.05 -0.05 0.55 0.55" width="38" height="38" stroke="#f59e0b" stroke-width="0.03" fill="none"><rect x="0" y="0" width="0.45" height="0.45"/><circle cx="0.225" cy="0.225" r="0.12"/></svg>`,
        entities: [
            { type: 'LINE', x1: 0, y1: 0, x2: 0.45, y2: 0 },
            { type: 'LINE', x1: 0.45, y1: 0, x2: 0.45, y2: 0.45 },
            { type: 'LINE', x1: 0.45, y1: 0.45, x2: 0, y2: 0.45 },
            { type: 'LINE', x1: 0, y1: 0.45, x2: 0, y2: 0 },
            { type: 'CIRCLE', cx: 0.225, cy: 0.225, r: 0.11 }
        ]
    },

    'WARDROBE_3': {
        id: 'WARDROBE_3',
        name: 'Closet / Roupeiro 3 Portas',
        category: 'furniture',
        categoryName: 'Mobiliário',
        dimensions: '2.10m x 0.60m',
        layer: 'Mobiliario',
        color: '#f59e0b',
        svgPreview: `<svg viewBox="-0.1 -0.05 2.3 0.7" width="56" height="24" stroke="#f59e0b" stroke-width="0.04" fill="none"><rect x="0" y="0" width="2.1" height="0.6"/><line x1="0.7" y1="0" x2="0.7" y2="0.6"/><line x1="1.4" y1="0" x2="1.4" y2="0.6"/><line x1="0" y1="0.3" x2="2.1" y2="0.3" stroke-dasharray="0.1,0.05"/></svg>`,
        entities: [
            // Outer cabinet
            { type: 'LINE', x1: 0, y1: 0, x2: 2.10, y2: 0 },
            { type: 'LINE', x1: 2.10, y1: 0, x2: 2.10, y2: 0.60 },
            { type: 'LINE', x1: 2.10, y1: 0.60, x2: 0, y2: 0.60 },
            { type: 'LINE', x1: 0, y1: 0.60, x2: 0, y2: 0 },
            // 3 doors
            { type: 'LINE', x1: 0.70, y1: 0, x2: 0.70, y2: 0.60 },
            { type: 'LINE', x1: 1.40, y1: 0, x2: 1.40, y2: 0.60 },
            // Clothes rail
            { type: 'LINE', x1: 0.05, y1: 0.30, x2: 2.05, y2: 0.30 },
            // Handles
            { type: 'LINE', x1: 0.66, y1: 0.04, x2: 0.66, y2: 0.12 },
            { type: 'LINE', x1: 0.74, y1: 0.04, x2: 0.74, y2: 0.12 },
            { type: 'LINE', x1: 1.44, y1: 0.04, x2: 1.44, y2: 0.12 }
        ]
    },

    'DESK_OFFICE': {
        id: 'DESK_OFFICE',
        name: 'Mesa Escritório c/ Cadeira',
        category: 'furniture',
        categoryName: 'Mobiliário',
        dimensions: '1.50m x 1.10m',
        layer: 'Mobiliario',
        color: '#f59e0b',
        svgPreview: `<svg viewBox="-0.1 -0.1 1.7 1.3" width="48" height="38" stroke="#f59e0b" stroke-width="0.04" fill="none"><rect x="0" y="0.5" width="1.5" height="0.6"/><rect x="0.45" y="0.95" width="0.6" height="0.08"/><circle cx="0.75" cy="0.25" r="0.22"/><path d="M 0.55 0.15 Q 0.75 0.05 0.95 0.15"/></svg>`,
        entities: [
            // Desk table (1.50 x 0.60)
            { type: 'LINE', x1: 0, y1: 0.50, x2: 1.50, y2: 0.50 },
            { type: 'LINE', x1: 1.50, y1: 0.50, x2: 1.50, y2: 1.10 },
            { type: 'LINE', x1: 1.50, y1: 1.10, x2: 0, y2: 1.10 },
            { type: 'LINE', x1: 0, y1: 1.10, x2: 0, y2: 0.50 },
            // Monitor
            { type: 'LINE', x1: 0.45, y1: 0.95, x2: 1.05, y2: 0.95 },
            { type: 'LINE', x1: 1.05, y1: 0.95, x2: 1.05, y2: 1.02 },
            { type: 'LINE', x1: 1.05, y1: 1.02, x2: 0.45, y2: 1.02 },
            { type: 'LINE', x1: 0.45, y1: 1.02, x2: 0.45, y2: 0.95 },
            // Keyboard
            { type: 'LINE', x1: 0.52, y1: 0.68, x2: 0.98, y2: 0.68 },
            { type: 'LINE', x1: 0.98, y1: 0.68, x2: 0.98, y2: 0.82 },
            { type: 'LINE', x1: 0.98, y1: 0.82, x2: 0.52, y2: 0.82 },
            { type: 'LINE', x1: 0.52, y1: 0.82, x2: 0.52, y2: 0.68 },
            // Chair seat
            { type: 'CIRCLE', cx: 0.75, cy: 0.25, r: 0.22 },
            // Chair backrest
            { type: 'ARC', cx: 0.75, cy: 0.10, r: 0.22, startAngle: 0.6, endAngle: Math.PI - 0.6 },
            // Chair armrests
            { type: 'LINE', x1: 0.50, y1: 0.15, x2: 0.50, y2: 0.35 },
            { type: 'LINE', x1: 1.00, y1: 0.15, x2: 1.00, y2: 0.35 }
        ]
    },

    // --- COZINHA, SERVIÇO & SANITÁRIOS ---
    'ISLAND_COOKTOP': {
        id: 'ISLAND_COOKTOP',
        name: 'Ilha Cozinha c/ Cooktop & Banquetas',
        category: 'fixtures',
        categoryName: 'Sanitários & Eletros',
        dimensions: '2.00m x 1.15m',
        layer: 'Hidraulica',
        color: '#a855f7',
        svgPreview: `<svg viewBox="-0.1 -0.4 2.2 1.5" width="54" height="36" stroke="#a855f7" stroke-width="0.04" fill="none"><rect x="0" y="0" width="2.0" height="0.8"/><rect x="0.6" y="0.15" width="0.8" height="0.5"/><circle cx="0.4" cy="-0.2" r="0.16"/><circle cx="1.0" cy="-0.2" r="0.16"/><circle cx="1.6" cy="-0.2" r="0.16"/></svg>`,
        entities: [
            // Island counter
            { type: 'LINE', x1: 0, y1: 0, x2: 2.00, y2: 0 },
            { type: 'LINE', x1: 2.00, y1: 0, x2: 2.00, y2: 0.80 },
            { type: 'LINE', x1: 2.00, y1: 0.80, x2: 0, y2: 0.80 },
            { type: 'LINE', x1: 0, y1: 0.80, x2: 0, y2: 0 },
            // Cooktop (0.75 x 0.50)
            { type: 'LINE', x1: 0.62, y1: 0.15, x2: 1.38, y2: 0.15 },
            { type: 'LINE', x1: 1.38, y1: 0.15, x2: 1.38, y2: 0.65 },
            { type: 'LINE', x1: 1.38, y1: 0.65, x2: 0.62, y2: 0.65 },
            { type: 'LINE', x1: 0.62, y1: 0.65, x2: 0.62, y2: 0.15 },
            // 5 Burners
            { type: 'CIRCLE', cx: 1.00, cy: 0.40, r: 0.09 },
            { type: 'CIRCLE', cx: 0.76, cy: 0.26, r: 0.06 },
            { type: 'CIRCLE', cx: 1.24, cy: 0.26, r: 0.06 },
            { type: 'CIRCLE', cx: 0.76, cy: 0.54, r: 0.06 },
            { type: 'CIRCLE', cx: 1.24, cy: 0.54, r: 0.06 },
            // 3 Stools
            { type: 'CIRCLE', cx: 0.40, cy: -0.20, r: 0.18 },
            { type: 'CIRCLE', cx: 1.00, cy: -0.20, r: 0.18 },
            { type: 'CIRCLE', cx: 1.60, cy: -0.20, r: 0.18 }
        ]
    },

    'STOVE_5': {
        id: 'STOVE_5',
        name: 'Cooktop 5 Bocas Gourmet',
        category: 'fixtures',
        categoryName: 'Sanitários & Eletros',
        dimensions: '0.75m x 0.52m',
        layer: 'Hidraulica',
        color: '#a855f7',
        svgPreview: `<svg viewBox="-0.05 -0.05 0.85 0.6" width="46" height="34" stroke="#a855f7" stroke-width="0.02" fill="none"><rect x="0" y="0" width="0.75" height="0.52" rx="0.02"/><circle cx="0.375" cy="0.26" r="0.09"/><circle cx="0.16" cy="0.14" r="0.06"/><circle cx="0.59" cy="0.14" r="0.06"/><circle cx="0.16" cy="0.38" r="0.06"/><circle cx="0.59" cy="0.38" r="0.06"/></svg>`,
        entities: [
            { type: 'LINE', x1: 0, y1: 0, x2: 0.75, y2: 0 },
            { type: 'LINE', x1: 0.75, y1: 0, x2: 0.75, y2: 0.52 },
            { type: 'LINE', x1: 0.75, y1: 0.52, x2: 0, y2: 0.52 },
            { type: 'LINE', x1: 0, y1: 0.52, x2: 0, y2: 0 },
            { type: 'CIRCLE', cx: 0.375, cy: 0.26, r: 0.09 },
            { type: 'CIRCLE', cx: 0.16, cy: 0.14, r: 0.06 },
            { type: 'CIRCLE', cx: 0.59, cy: 0.14, r: 0.06 },
            { type: 'CIRCLE', cx: 0.16, cy: 0.38, r: 0.06 },
            { type: 'CIRCLE', cx: 0.59, cy: 0.38, r: 0.06 }
        ]
    },

    'KITCHEN_DOUBLE_SINK': {
        id: 'KITCHEN_DOUBLE_SINK',
        name: 'Bancada Pia Cuba Dupla',
        category: 'fixtures',
        categoryName: 'Sanitários & Eletros',
        dimensions: '1.60m x 0.60m',
        layer: 'Hidraulica',
        color: '#3b82f6',
        svgPreview: `<svg viewBox="-0.1 -0.05 1.8 0.7" width="54" height="26" stroke="#3b82f6" stroke-width="0.03" fill="none"><rect x="0" y="0" width="1.6" height="0.6"/><rect x="0.3" y="0.1" width="0.45" height="0.4"/><rect x="0.85" y="0.1" width="0.45" height="0.4"/><circle cx="0.8" cy="0.5" r="0.03"/></svg>`,
        entities: [
            // Countertop
            { type: 'LINE', x1: 0, y1: 0, x2: 1.60, y2: 0 },
            { type: 'LINE', x1: 1.60, y1: 0, x2: 1.60, y2: 0.60 },
            { type: 'LINE', x1: 1.60, y1: 0.60, x2: 0, y2: 0.60 },
            { type: 'LINE', x1: 0, y1: 0.60, x2: 0, y2: 0 },
            // Left basin
            { type: 'LINE', x1: 0.30, y1: 0.10, x2: 0.75, y2: 0.10 },
            { type: 'LINE', x1: 0.75, y1: 0.10, x2: 0.75, y2: 0.50 },
            { type: 'LINE', x1: 0.75, y1: 0.50, x2: 0.30, y2: 0.50 },
            { type: 'LINE', x1: 0.30, y1: 0.50, x2: 0.30, y2: 0.10 },
            { type: 'CIRCLE', cx: 0.525, cy: 0.30, r: 0.04 },
            // Right basin
            { type: 'LINE', x1: 0.85, y1: 0.10, x2: 1.30, y2: 0.10 },
            { type: 'LINE', x1: 1.30, y1: 0.10, x2: 1.30, y2: 0.50 },
            { type: 'LINE', x1: 1.30, y1: 0.50, x2: 0.85, y2: 0.50 },
            { type: 'LINE', x1: 0.85, y1: 0.50, x2: 0.85, y2: 0.10 },
            { type: 'CIRCLE', cx: 1.075, cy: 0.30, r: 0.04 },
            // Swivel faucet
            { type: 'CIRCLE', cx: 0.80, cy: 0.52, r: 0.03 }
        ]
    },

    'LAUNDRY_TUB': {
        id: 'LAUNDRY_TUB',
        name: 'Tanque de Lavanderia Duplo',
        category: 'fixtures',
        categoryName: 'Sanitários & Eletros',
        dimensions: '1.10m x 0.60m',
        layer: 'Hidraulica',
        color: '#3b82f6',
        svgPreview: `<svg viewBox="-0.05 -0.05 1.2 0.7" width="50" height="30" stroke="#3b82f6" stroke-width="0.03" fill="none"><rect x="0" y="0" width="1.1" height="0.6"/><rect x="0.08" y="0.08" width="0.44" height="0.44"/><rect x="0.58" y="0.08" width="0.44" height="0.44"/><line x1="0.12" y1="0.14" x2="0.48" y2="0.14"/><line x1="0.12" y1="0.22" x2="0.48" y2="0.22"/></svg>`,
        entities: [
            { type: 'LINE', x1: 0, y1: 0, x2: 1.10, y2: 0 },
            { type: 'LINE', x1: 1.10, y1: 0, x2: 1.10, y2: 0.60 },
            { type: 'LINE', x1: 1.10, y1: 0.60, x2: 0, y2: 0.60 },
            { type: 'LINE', x1: 0, y1: 0.60, x2: 0, y2: 0 },
            // Left scrub tub
            { type: 'LINE', x1: 0.08, y1: 0.08, x2: 0.52, y2: 0.08 },
            { type: 'LINE', x1: 0.52, y1: 0.08, x2: 0.52, y2: 0.52 },
            { type: 'LINE', x1: 0.52, y1: 0.52, x2: 0.08, y2: 0.52 },
            { type: 'LINE', x1: 0.08, y1: 0.52, x2: 0.08, y2: 0.08 },
            { type: 'LINE', x1: 0.12, y1: 0.16, x2: 0.48, y2: 0.16 },
            { type: 'LINE', x1: 0.12, y1: 0.24, x2: 0.48, y2: 0.24 },
            { type: 'LINE', x1: 0.12, y1: 0.32, x2: 0.48, y2: 0.32 },
            { type: 'CIRCLE', cx: 0.30, cy: 0.42, r: 0.04 },
            // Right tub
            { type: 'LINE', x1: 0.58, y1: 0.08, x2: 1.02, y2: 0.08 },
            { type: 'LINE', x1: 1.02, y1: 0.08, x2: 1.02, y2: 0.52 },
            { type: 'LINE', x1: 1.02, y1: 0.52, x2: 0.58, y2: 0.52 },
            { type: 'LINE', x1: 0.58, y1: 0.52, x2: 0.58, y2: 0.08 },
            { type: 'CIRCLE', cx: 0.80, cy: 0.30, r: 0.04 }
        ]
    },

    'VANITY_BATH': {
        id: 'VANITY_BATH',
        name: 'Bancada Banheiro c/ Cuba',
        category: 'fixtures',
        categoryName: 'Sanitários & Eletros',
        dimensions: '0.90m x 0.50m',
        layer: 'Hidraulica',
        color: '#3b82f6',
        svgPreview: `<svg viewBox="-0.05 -0.05 1.0 0.6" width="46" height="30" stroke="#3b82f6" stroke-width="0.03" fill="none"><rect x="0" y="0" width="0.9" height="0.5"/><ellipse cx="0.45" cy="0.25" rx="0.22" ry="0.15"/><circle cx="0.45" cy="0.42" r="0.025"/></svg>`,
        entities: [
            { type: 'LINE', x1: 0, y1: 0, x2: 0.90, y2: 0 },
            { type: 'LINE', x1: 0.90, y1: 0, x2: 0.90, y2: 0.50 },
            { type: 'LINE', x1: 0.90, y1: 0.50, x2: 0, y2: 0.50 },
            { type: 'LINE', x1: 0, y1: 0.50, x2: 0, y2: 0 },
            // Undermount oval basin
            { type: 'LINE', x1: 0.25, y1: 0.12, x2: 0.65, y2: 0.12 },
            { type: 'LINE', x1: 0.65, y1: 0.12, x2: 0.65, y2: 0.38 },
            { type: 'LINE', x1: 0.65, y1: 0.38, x2: 0.25, y2: 0.38 },
            { type: 'LINE', x1: 0.25, y1: 0.38, x2: 0.25, y2: 0.12 },
            { type: 'CIRCLE', cx: 0.45, cy: 0.25, r: 0.04 },
            { type: 'CIRCLE', cx: 0.45, cy: 0.43, r: 0.025 }
        ]
    },

    'SHOWER_BOX': {
        id: 'SHOWER_BOX',
        name: 'Box Chuveiro em Canto',
        category: 'fixtures',
        categoryName: 'Sanitários & Eletros',
        dimensions: '0.90m x 0.90m',
        layer: 'Hidraulica',
        color: '#3b82f6',
        svgPreview: `<svg viewBox="-0.05 -0.05 1.0 1.0" width="44" height="44" stroke="#3b82f6" stroke-width="0.03" fill="none"><rect x="0" y="0" width="0.9" height="0.9"/><line x1="0" y1="0.45" x2="0.9" y2="0.45" stroke-dasharray="0.08,0.04"/><circle cx="0.45" cy="0.45" r="0.12"/><circle cx="0.8" cy="0.8" r="0.04"/></svg>`,
        entities: [
            // Glass perimeter
            { type: 'LINE', x1: 0, y1: 0, x2: 0.90, y2: 0 },
            { type: 'LINE', x1: 0.90, y1: 0, x2: 0.90, y2: 0.90 },
            { type: 'LINE', x1: 0.90, y1: 0.90, x2: 0, y2: 0.90 },
            { type: 'LINE', x1: 0, y1: 0.90, x2: 0, y2: 0 },
            // Sliding door line
            { type: 'LINE', x1: 0.05, y1: 0.45, x2: 0.85, y2: 0.45 },
            // Shower head
            { type: 'CIRCLE', cx: 0.45, cy: 0.45, r: 0.12 },
            // Floor drain
            { type: 'CIRCLE', cx: 0.78, cy: 0.78, r: 0.04 }
        ]
    },

    'BATHTUB': {
        id: 'BATHTUB',
        name: 'Banheira de Imersão / Hidro',
        category: 'fixtures',
        categoryName: 'Sanitários & Eletros',
        dimensions: '1.70m x 0.80m',
        layer: 'Hidraulica',
        color: '#3b82f6',
        svgPreview: `<svg viewBox="-0.1 -0.1 1.9 1.0" width="54" height="28" stroke="#3b82f6" stroke-width="0.03" fill="none"><rect x="0" y="0" width="1.7" height="0.8" rx="0.1"/><rect x="0.1" y="0.1" width="1.5" height="0.6" rx="0.25"/><circle cx="0.3" cy="0.4" r="0.04"/></svg>`,
        entities: [
            // Outer rim
            { type: 'LINE', x1: 0, y1: 0, x2: 1.70, y2: 0 },
            { type: 'LINE', x1: 1.70, y1: 0, x2: 1.70, y2: 0.80 },
            { type: 'LINE', x1: 1.70, y1: 0.80, x2: 0, y2: 0.80 },
            { type: 'LINE', x1: 0, y1: 0.80, x2: 0, y2: 0 },
            // Inner tub
            { type: 'LINE', x1: 0.30, y1: 0.12, x2: 1.40, y2: 0.12 },
            { type: 'LINE', x1: 1.40, y1: 0.68, x2: 0.30, y2: 0.68 },
            { type: 'ARC', cx: 0.30, cy: 0.40, r: 0.28, startAngle: Math.PI / 2, endAngle: 3 * Math.PI / 2 },
            { type: 'ARC', cx: 1.40, cy: 0.40, r: 0.28, startAngle: -Math.PI / 2, endAngle: Math.PI / 2 },
            // Drain
            { type: 'CIRCLE', cx: 0.35, cy: 0.40, r: 0.04 }
        ]
    },

    'BAR_STOOL': {
        id: 'BAR_STOOL',
        name: 'Banqueta Alta / Bar',
        category: 'furniture',
        categoryName: 'Mobiliário',
        dimensions: 'Ø 0.40m',
        layer: 'Mobiliario',
        color: '#f59e0b',
        svgPreview: `<svg viewBox="-0.25 -0.25 0.5 0.5" width="38" height="38" stroke="#f59e0b" stroke-width="0.03" fill="none"><circle cx="0" cy="0" r="0.2"/><circle cx="0" cy="0" r="0.12"/></svg>`,
        entities: [
            { type: 'CIRCLE', cx: 0, cy: 0, r: 0.20 },
            { type: 'CIRCLE', cx: 0, cy: 0, r: 0.13 }
        ]
    },

    // --- ESQUADRIAS EXPANDIDAS ---
    'DOOR_DOUBLE': {
        id: 'DOOR_DOUBLE',
        name: 'Porta Dupla 1.60m - Giro',
        category: 'doors',
        categoryName: 'Esquadrias',
        dimensions: '1.60m x 0.15m',
        layer: 'Esquadrias',
        color: '#ff00ff',
        svgPreview: `<svg viewBox="-0.1 -0.1 1.8 1.0" width="54" height="32" stroke="#ff00ff" stroke-width="0.02" fill="none"><line x1="0" y1="0" x2="0" y2="0.8"/><line x1="1.6" y1="0" x2="1.6" y2="0.8"/><path d="M 0 0.8 A 0.8 0.8 0 0 1 0.8 0" stroke-dasharray="0.04,0.04"/><path d="M 1.6 0.8 A 0.8 0.8 0 0 0 0.8 0" stroke-dasharray="0.04,0.04"/></svg>`,
        entities: [
            { type: 'LINE', x1: 0, y1: 0, x2: 0, y2: 0.15 },
            { type: 'LINE', x1: 1.60, y1: 0, x2: 1.60, y2: 0.15 },
            { type: 'LINE', x1: 0, y1: 0, x2: 0, y2: 0.80 },
            { type: 'LINE', x1: 1.60, y1: 0, x2: 1.60, y2: 0.80 },
            { type: 'ARC', cx: 0, cy: 0, r: 0.80, startAngle: 0, endAngle: Math.PI / 2 },
            { type: 'ARC', cx: 1.60, cy: 0, r: 0.80, startAngle: Math.PI / 2, endAngle: Math.PI }
        ]
    },

    'DOOR_SLIDING': {
        id: 'DOOR_SLIDING',
        name: 'Porta de Correr 2 Folhas 1.60m',
        category: 'doors',
        categoryName: 'Esquadrias',
        dimensions: '1.60m x 0.15m',
        layer: 'Esquadrias',
        color: '#ff00ff',
        svgPreview: `<svg viewBox="-0.1 -0.05 1.8 0.25" width="54" height="24" stroke="#ff00ff" stroke-width="0.02" fill="none"><rect x="0" y="0" width="1.6" height="0.15"/><line x1="0" y1="0.05" x2="0.85" y2="0.05"/><line x1="0.75" y1="0.10" x2="1.60" y2="0.10"/></svg>`,
        entities: [
            { type: 'LINE', x1: 0, y1: 0, x2: 1.60, y2: 0 },
            { type: 'LINE', x1: 1.60, y1: 0, x2: 1.60, y2: 0.15 },
            { type: 'LINE', x1: 1.60, y1: 0.15, x2: 0, y2: 0.15 },
            { type: 'LINE', x1: 0, y1: 0.15, x2: 0, y2: 0 },
            { type: 'LINE', x1: 0, y1: 0.05, x2: 0.85, y2: 0.05 },
            { type: 'LINE', x1: 0.75, y1: 0.10, x2: 1.60, y2: 0.10 }
        ]
    },

    'WINDOW_100': {
        id: 'WINDOW_100',
        name: 'Janela 1.00m - Correr',
        category: 'doors',
        categoryName: 'Esquadrias',
        dimensions: '1.00m x 0.15m',
        layer: 'Esquadrias',
        color: '#ff00ff',
        svgPreview: `<svg viewBox="-0.1 -0.05 1.2 0.25" width="46" height="24" stroke="#ff00ff" stroke-width="0.02" fill="none"><rect x="0" y="0" width="1.0" height="0.15"/><line x1="0" y1="0.05" x2="0.55" y2="0.05"/><line x1="0.45" y1="0.10" x2="1.0" y2="0.10"/></svg>`,
        entities: [
            { type: 'LINE', x1: 0, y1: 0, x2: 1.00, y2: 0 },
            { type: 'LINE', x1: 1.00, y1: 0, x2: 1.00, y2: 0.15 },
            { type: 'LINE', x1: 1.00, y1: 0.15, x2: 0, y2: 0.15 },
            { type: 'LINE', x1: 0, y1: 0.15, x2: 0, y2: 0 },
            { type: 'LINE', x1: 0, y1: 0.05, x2: 0.55, y2: 0.05 },
            { type: 'LINE', x1: 0.45, y1: 0.10, x2: 1.00, y2: 0.10 }
        ]
    },

    'WINDOW_200': {
        id: 'WINDOW_200',
        name: 'Janela 2.00m - 4 Folhas',
        category: 'doors',
        categoryName: 'Esquadrias',
        dimensions: '2.00m x 0.15m',
        layer: 'Esquadrias',
        color: '#ff00ff',
        svgPreview: `<svg viewBox="-0.1 -0.05 2.2 0.25" width="56" height="24" stroke="#ff00ff" stroke-width="0.02" fill="none"><rect x="0" y="0" width="2.0" height="0.15"/><line x1="0" y1="0.05" x2="1.05" y2="0.05"/><line x1="0.95" y1="0.10" x2="2.0" y2="0.10"/></svg>`,
        entities: [
            { type: 'LINE', x1: 0, y1: 0, x2: 2.00, y2: 0 },
            { type: 'LINE', x1: 2.00, y1: 0, x2: 2.00, y2: 0.15 },
            { type: 'LINE', x1: 2.00, y1: 0.15, x2: 0, y2: 0.15 },
            { type: 'LINE', x1: 0, y1: 0.15, x2: 0, y2: 0 },
            { type: 'LINE', x1: 0, y1: 0.05, x2: 0.55, y2: 0.05 },
            { type: 'LINE', x1: 0.50, y1: 0.10, x2: 1.05, y2: 0.10 },
            { type: 'LINE', x1: 0.95, y1: 0.10, x2: 1.50, y2: 0.10 },
            { type: 'LINE', x1: 1.45, y1: 0.05, x2: 2.00, y2: 0.05 }
        ]
    },

    // --- LAZER & EXTERNA ---
    'SWIMMING_POOL': {
        id: 'SWIMMING_POOL',
        name: 'Piscina Retangular c/ Escada',
        category: 'leisure',
        categoryName: 'Lazer & Externa',
        dimensions: '4.00m x 2.40m',
        layer: 'Piso',
        color: '#0284c7',
        svgPreview: `<svg viewBox="-0.2 -0.2 4.4 2.8" width="56" height="34" stroke="#0284c7" stroke-width="0.08" fill="none"><rect x="0" y="0" width="4.0" height="2.4" rx="0.15"/><rect x="0.2" y="0.2" width="3.6" height="2.0" rx="0.1"/><line x1="0.2" y1="0.7" x2="1.0" y2="0.7"/><line x1="0.2" y1="1.2" x2="1.0" y2="1.2"/><line x1="0.2" y1="1.7" x2="1.0" y2="1.7"/><line x1="1.0" y1="0.2" x2="1.0" y2="2.2"/></svg>`,
        entities: [
            // Coping border (4.00 x 2.40 m)
            { type: 'LINE', x1: 0, y1: 0, x2: 4.00, y2: 0 },
            { type: 'LINE', x1: 4.00, y1: 0, x2: 4.00, y2: 2.40 },
            { type: 'LINE', x1: 4.00, y1: 2.40, x2: 0, y2: 2.40 },
            { type: 'LINE', x1: 0, y1: 2.40, x2: 0, y2: 0 },
            // Pool basin (3.60 x 2.00 m)
            { type: 'LINE', x1: 0.20, y1: 0.20, x2: 3.80, y2: 0.20 },
            { type: 'LINE', x1: 3.80, y1: 0.20, x2: 3.80, y2: 2.20 },
            { type: 'LINE', x1: 3.80, y1: 2.20, x2: 0.20, y2: 2.20 },
            { type: 'LINE', x1: 0.20, y1: 2.20, x2: 0.20, y2: 0.20 },
            // Shallow end stairs
            { type: 'LINE', x1: 0.20, y1: 0.70, x2: 1.00, y2: 0.70 },
            { type: 'LINE', x1: 0.20, y1: 1.20, x2: 1.00, y2: 1.20 },
            { type: 'LINE', x1: 0.20, y1: 1.70, x2: 1.00, y2: 1.70 },
            { type: 'LINE', x1: 1.00, y1: 0.20, x2: 1.00, y2: 2.20 }
        ]
    },

    'LOUNGER_POOL': {
        id: 'LOUNGER_POOL',
        name: 'Espreguiçadeira de Piscina',
        category: 'leisure',
        categoryName: 'Lazer & Externa',
        dimensions: '1.95m x 0.65m',
        layer: 'Mobiliario',
        color: '#f59e0b',
        svgPreview: `<svg viewBox="-0.1 -0.1 2.15 0.85" width="52" height="26" stroke="#f59e0b" stroke-width="0.04" fill="none"><rect x="0" y="0" width="1.95" height="0.65" rx="0.05"/><line x1="0.6" y1="0" x2="0.6" y2="0.65"/><rect x="0.1" y="0.12" width="0.4" height="0.41" rx="0.05"/></svg>`,
        entities: [
            // Frame
            { type: 'LINE', x1: 0, y1: 0, x2: 1.95, y2: 0 },
            { type: 'LINE', x1: 1.95, y1: 0, x2: 1.95, y2: 0.65 },
            { type: 'LINE', x1: 1.95, y1: 0.65, x2: 0, y2: 0.65 },
            { type: 'LINE', x1: 0, y1: 0.65, x2: 0, y2: 0 },
            // Reclined backrest joint
            { type: 'LINE', x1: 0.65, y1: 0, x2: 0.65, y2: 0.65 },
            // Head pillow
            { type: 'POLYLINE', points: [{ x: 0.10, y: 0.12 }, { x: 0.50, y: 0.12 }, { x: 0.50, y: 0.53 }, { x: 0.10, y: 0.53 }], closed: true },
            // Slats
            { type: 'LINE', x1: 0.85, y1: 0.05, x2: 0.85, y2: 0.60 },
            { type: 'LINE', x1: 1.10, y1: 0.05, x2: 1.10, y2: 0.60 },
            { type: 'LINE', x1: 1.35, y1: 0.05, x2: 1.35, y2: 0.60 },
            { type: 'LINE', x1: 1.60, y1: 0.05, x2: 1.60, y2: 0.60 }
        ]
    },

    'SUN_UMBRELLA': {
        id: 'SUN_UMBRELLA',
        name: 'Guarda-Sol c/ Mesa Externa',
        category: 'leisure',
        categoryName: 'Lazer & Externa',
        dimensions: 'Ø 2.20m',
        layer: 'Mobiliario',
        color: '#f59e0b',
        svgPreview: `<svg viewBox="-1.2 -1.2 2.4 2.4" width="46" height="46" stroke="#f59e0b" stroke-width="0.05" fill="none"><circle cx="0" cy="0" r="1.1"/><line x1="-1.1" y1="0" x2="1.1" y2="0"/><line x1="0" y1="-1.1" x2="0" y2="1.1"/><circle cx="0" cy="0" r="0.45"/></svg>`,
        entities: [
            // Canopy
            { type: 'CIRCLE', cx: 0, cy: 0, r: 1.10 },
            // 8 Ribs
            { type: 'LINE', x1: -1.10, y1: 0, x2: 1.10, y2: 0 },
            { type: 'LINE', x1: 0, y1: -1.10, x2: 0, y2: 1.10 },
            { type: 'LINE', x1: -0.78, y1: -0.78, x2: 0.78, y2: 0.78 },
            { type: 'LINE', x1: -0.78, y1: 0.78, x2: 0.78, y2: -0.78 },
            // Center table
            { type: 'CIRCLE', cx: 0, cy: 0, r: 0.45 }
        ]
    },

    // --- PAISAGISMO EXPANDIDO ---
    'PALM_STARBURST': {
        id: 'PALM_STARBURST',
        name: 'Agave / Cica Ornamental',
        category: 'vegetation',
        categoryName: 'Paisagismo',
        dimensions: 'Ø 1.60m',
        layer: 'Vegetacao',
        color: '#22c55e',
        svgPreview: `<svg viewBox="-0.9 -0.9 1.8 1.8" width="48" height="48" stroke="#22c55e" stroke-width="0.05" fill="none"><circle cx="0" cy="0" r="0.15" fill="#22c55e"/><path d="M 0 0 L 0.8 0 L 0.6 0.15 Z M 0 0 L 0 0.8 L -0.15 0.6 Z M 0 0 L -0.8 0 L -0.6 -0.15 Z M 0 0 L 0 -0.8 L 0.15 -0.6 Z"/><path d="M 0 0 L 0.55 0.55 L 0.35 0.65 Z M 0 0 L -0.55 0.55 L -0.65 0.35 Z M 0 0 L -0.55 -0.55 L -0.35 -0.65 Z M 0 0 L 0.55 -0.55 L 0.65 -0.35 Z"/></svg>`,
        entities: [
            { type: 'CIRCLE', cx: 0, cy: 0, r: 0.15 },
            // 16 radial spiky starburst fronds (exact architectural top-view)
            { type: 'LINE', x1: 0, y1: 0, x2: 0.80, y2: 0 },
            { type: 'LINE', x1: 0, y1: 0, x2: -0.80, y2: 0 },
            { type: 'LINE', x1: 0, y1: 0, x2: 0, y2: 0.80 },
            { type: 'LINE', x1: 0, y1: 0, x2: 0, y2: -0.80 },
            { type: 'LINE', x1: 0, y1: 0, x2: 0.56, y2: 0.56 },
            { type: 'LINE', x1: 0, y1: 0, x2: -0.56, y2: 0.56 },
            { type: 'LINE', x1: 0, y1: 0, x2: 0.56, y2: -0.56 },
            { type: 'LINE', x1: 0, y1: 0, x2: -0.56, y2: -0.56 },
            { type: 'LINE', x1: 0, y1: 0, x2: 0.74, y2: 0.31 },
            { type: 'LINE', x1: 0, y1: 0, x2: 0.31, y2: 0.74 },
            { type: 'LINE', x1: 0, y1: 0, x2: -0.74, y2: 0.31 },
            { type: 'LINE', x1: 0, y1: 0, x2: -0.31, y2: 0.74 },
            { type: 'LINE', x1: 0, y1: 0, x2: 0.74, y2: -0.31 },
            { type: 'LINE', x1: 0, y1: 0, x2: 0.31, y2: -0.74 },
            { type: 'LINE', x1: 0, y1: 0, x2: -0.74, y2: -0.31 },
            { type: 'LINE', x1: 0, y1: 0, x2: -0.31, y2: -0.74 }
        ]
    },

    'BUSH_ROW': {
        id: 'BUSH_ROW',
        name: 'Fileira de Arbustos / Cerca Viva',
        category: 'vegetation',
        categoryName: 'Paisagismo',
        dimensions: '1.80m x 0.45m',
        layer: 'Vegetacao',
        color: '#22c55e',
        svgPreview: `<svg viewBox="-0.1 -0.05 2.0 0.55" width="56" height="22" stroke="#22c55e" stroke-width="0.04" fill="none"><rect x="0" y="0" width="1.8" height="0.45" stroke-dasharray="0.08,0.04"/><circle cx="0.25" cy="0.22" r="0.18"/><circle cx="0.65" cy="0.22" r="0.18"/><circle cx="1.15" cy="0.22" r="0.18"/><circle cx="1.55" cy="0.22" r="0.18"/></svg>`,
        entities: [
            // Border box
            { type: 'LINE', x1: 0, y1: 0, x2: 1.80, y2: 0 },
            { type: 'LINE', x1: 1.80, y1: 0, x2: 1.80, y2: 0.45 },
            { type: 'LINE', x1: 1.80, y1: 0.45, x2: 0, y2: 0.45 },
            { type: 'LINE', x1: 0, y1: 0.45, x2: 0, y2: 0 },
            // 4 Dense shrub lobes
            { type: 'CIRCLE', cx: 0.25, cy: 0.225, r: 0.18 },
            { type: 'CIRCLE', cx: 0.65, cy: 0.225, r: 0.18 },
            { type: 'CIRCLE', cx: 1.15, cy: 0.225, r: 0.18 },
            { type: 'CIRCLE', cx: 1.55, cy: 0.225, r: 0.18 },
            // Center dots
            { type: 'CIRCLE', cx: 0.25, cy: 0.225, r: 0.03 },
            { type: 'CIRCLE', cx: 0.65, cy: 0.225, r: 0.03 },
            { type: 'CIRCLE', cx: 1.15, cy: 0.225, r: 0.03 },
            { type: 'CIRCLE', cx: 1.55, cy: 0.225, r: 0.03 }
        ]
    },

    'SHRUB_ROUND': {
        id: 'SHRUB_ROUND',
        name: 'Arbusto Ornamental Redondo',
        category: 'vegetation',
        categoryName: 'Paisagismo',
        dimensions: 'Ø 0.60m',
        layer: 'Vegetacao',
        color: '#22c55e',
        svgPreview: `<svg viewBox="-0.4 -0.4 0.8 0.8" width="38" height="38" stroke="#22c55e" stroke-width="0.04" fill="none"><circle cx="0" cy="0" r="0.3"/><circle cx="0" cy="0" r="0.18" stroke-dasharray="0.06,0.03"/><circle cx="0" cy="0" r="0.04" fill="#22c55e"/></svg>`,
        entities: [
            { type: 'CIRCLE', cx: 0, cy: 0, r: 0.30 },
            { type: 'CIRCLE', cx: 0, cy: 0, r: 0.18 },
            { type: 'CIRCLE', cx: 0, cy: 0, r: 0.04 }
        ]
    },

    // --- VEÍCULOS ADICIONAIS ---
    'CAR_COMPACT': {
        id: 'CAR_COMPACT',
        name: 'Carro Compacto / Hatch',
        category: 'vehicles',
        categoryName: 'Veículos',
        dimensions: '3.85m x 1.70m',
        layer: 'Veiculos',
        color: '#38bdf8',
        svgPreview: `<svg viewBox="-2.1 -1.0 4.2 2.0" width="56" height="28" stroke="#38bdf8" stroke-width="0.07" fill="none"><rect x="-1.8" y="-0.8" width="3.6" height="1.6" rx="0.4"/><line x1="0.4" y1="-0.65" x2="0.65" y2="0.65"/><line x1="-1.1" y1="-0.65" x2="-1.2" y2="0.65"/></svg>`,
        entities: [
            // Body contour
            { type: 'POLYLINE', points: [
                { x: 1.85, y: 0.55 }, { x: 1.90, y: 0.25 }, { x: 1.90, y: -0.25 }, { x: 1.85, y: -0.55 },
                { x: 1.60, y: -0.80 }, { x: 1.00, y: -0.82 }, { x: -1.40, y: -0.82 }, { x: -1.85, y: -0.65 },
                { x: -1.90, y: -0.30 }, { x: -1.90, y: 0.30 }, { x: -1.85, y: 0.65 }, { x: -1.40, y: 0.82 },
                { x: 1.00, y: 0.82 }, { x: 1.60, y: 0.80 }
            ], closed: true },
            // Front windshield
            { type: 'POLYLINE', points: [{ x: 0.40, y: 0.70 }, { x: 0.70, y: 0.60 }, { x: 0.70, y: -0.60 }, { x: 0.40, y: -0.70 }], closed: false },
            // Rear hatch window
            { type: 'POLYLINE', points: [{ x: -1.30, y: 0.65 }, { x: -1.55, y: 0.55 }, { x: -1.55, y: -0.55 }, { x: -1.30, y: -0.65 }], closed: false },
            // Side mirrors
            { type: 'LINE', x1: 0.70, y1: 0.82, x2: 0.78, y2: 0.98 },
            { type: 'LINE', x1: 0.70, y1: -0.82, x2: 0.78, y2: -0.98 }
        ]
    },

    // --- SÍMBOLOS & INDICAÇÕES ---
    'SECTION_CUT': {
        id: 'SECTION_CUT',
        name: 'Indicação de Corte A-A',
        category: 'symbols',
        categoryName: 'Símbolos & Pessoas',
        dimensions: '1.20m x 0.60m',
        layer: 'Textos',
        color: '#00ff00',
        svgPreview: `<svg viewBox="-0.3 -0.3 1.5 0.6" width="50" height="24" stroke="#00ff00" stroke-width="0.04" fill="none"><circle cx="0" cy="0" r="0.22"/><polygon points="0.22,0 0.55,-0.12 0.55,0.12" fill="#00ff00"/><line x1="0.55" y1="0" x2="1.1" y2="0" stroke-dasharray="0.1,0.05"/></svg>`,
        entities: [
            { type: 'CIRCLE', cx: 0, cy: 0, r: 0.22 },
            { type: 'POLYLINE', points: [{ x: 0.22, y: 0 }, { x: 0.55, y: -0.12 }, { x: 0.55, y: 0.12 }], closed: true },
            { type: 'LINE', x1: 0.55, y1: 0, x2: 1.20, y2: 0 },
            { type: 'TEXT', x: -0.06, y: -0.07, text: 'A', height: 0.16 }
        ]
    },

    'ENTRY_ARROW': {
        id: 'ENTRY_ARROW',
        name: 'Seta de Entrada / Acesso',
        category: 'symbols',
        categoryName: 'Símbolos & Pessoas',
        dimensions: '1.00m x 0.40m',
        layer: 'Textos',
        color: '#00ff00',
        svgPreview: `<svg viewBox="-0.1 -0.3 1.2 0.6" width="48" height="24" stroke="#00ff00" stroke-width="0.04" fill="none"><line x1="0" y1="0" x2="0.7" y2="0"/><polygon points="0.7,-0.15 1.0,0 0.7,0.15" fill="#00ff00"/></svg>`,
        entities: [
            { type: 'LINE', x1: 0, y1: 0, x2: 0.70, y2: 0 },
            { type: 'POLYLINE', points: [{ x: 0.70, y: -0.16 }, { x: 1.00, y: 0 }, { x: 0.70, y: 0.16 }], closed: true },
            { type: 'TEXT', x: 0.05, y: 0.10, text: 'ACESSO', height: 0.16 }
        ]
    },

    "BUS_ARTICULATED": {
        "id": "BUS_ARTICULATED",
        "name": "Ônibus urbano articulado",
        "name_en": "Articulated City Bus",
        "category": "urbanism",
        "categoryName": "Urbanismo & Praças",
        "dimensions": "18.00m x 2.60m",
        "layer": "Urbanismo",
        "color": "#00e5ff",
        "svgPreview": "<svg viewBox=\"-9.5 -1.5 19 3\" width=\"70\" height=\"20\" stroke=\"#00e5ff\" stroke-width=\"0.1\" fill=\"none\"><rect x=\"-9\" y=\"-1.3\" width=\"8\" height=\"2.6\" rx=\"0.3\"/><rect x=\"0.5\" y=\"-1.3\" width=\"8.5\" height=\"2.6\" rx=\"0.3\"/><line x1=\"-1\" y1=\"-1.1\" x2=\"0.5\" y2=\"-1.1\"/><line x1=\"-1\" y1=\"1.1\" x2=\"0.5\" y2=\"1.1\"/><circle cx=\"-5\" cy=\"0\" r=\"0.8\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0.5,
                        "y1": -1.3,
                        "x2": 9.0,
                        "y2": -1.3
                },
                {
                        "type": "LINE",
                        "x1": 9.0,
                        "y1": -1.3,
                        "x2": 9.0,
                        "y2": 1.3
                },
                {
                        "type": "LINE",
                        "x1": 9.0,
                        "y1": 1.3,
                        "x2": 0.5,
                        "y2": 1.3
                },
                {
                        "type": "LINE",
                        "x1": 0.5,
                        "y1": 1.3,
                        "x2": 0.5,
                        "y2": -1.3
                },
                {
                        "type": "LINE",
                        "x1": 8.0,
                        "y1": -1.2,
                        "x2": 8.0,
                        "y2": 1.2
                },
                {
                        "type": "LINE",
                        "x1": -9.0,
                        "y1": -1.3,
                        "x2": -1.0,
                        "y2": -1.3
                },
                {
                        "type": "LINE",
                        "x1": -1.0,
                        "y1": -1.3,
                        "x2": -1.0,
                        "y2": 1.3
                },
                {
                        "type": "LINE",
                        "x1": -1.0,
                        "y1": 1.3,
                        "x2": -9.0,
                        "y2": 1.3
                },
                {
                        "type": "LINE",
                        "x1": -9.0,
                        "y1": 1.3,
                        "x2": -9.0,
                        "y2": -1.3
                },
                {
                        "type": "LINE",
                        "x1": -1.0,
                        "y1": -1.3,
                        "x2": -0.7,
                        "y2": -1.1
                },
                {
                        "type": "LINE",
                        "x1": -0.7,
                        "y1": -1.1,
                        "x2": -0.3,
                        "y2": -1.3
                },
                {
                        "type": "LINE",
                        "x1": -0.3,
                        "y1": -1.3,
                        "x2": 0.1,
                        "y2": -1.1
                },
                {
                        "type": "LINE",
                        "x1": 0.1,
                        "y1": -1.1,
                        "x2": 0.5,
                        "y2": -1.3
                },
                {
                        "type": "LINE",
                        "x1": -1.0,
                        "y1": 1.3,
                        "x2": -0.7,
                        "y2": 1.1
                },
                {
                        "type": "LINE",
                        "x1": -0.7,
                        "y1": 1.1,
                        "x2": -0.3,
                        "y2": 1.3
                },
                {
                        "type": "LINE",
                        "x1": -0.3,
                        "y1": 1.3,
                        "x2": 0.1,
                        "y2": 1.1
                },
                {
                        "type": "LINE",
                        "x1": 0.1,
                        "y1": 1.1,
                        "x2": 0.5,
                        "y2": 1.3
                },
                {
                        "type": "CIRCLE",
                        "cx": -0.25,
                        "cy": 0,
                        "r": 0.8
                },
                {
                        "type": "LINE",
                        "x1": 6.5,
                        "y1": -1.3,
                        "x2": 5.3,
                        "y2": -1.3
                },
                {
                        "type": "LINE",
                        "x1": 2.0,
                        "y1": -1.3,
                        "x2": 0.8,
                        "y2": -1.3
                },
                {
                        "type": "LINE",
                        "x1": -4.5,
                        "y1": -1.3,
                        "x2": -5.7,
                        "y2": -1.3
                },
                {
                        "type": "LINE",
                        "x1": -8.5,
                        "y1": 0.8,
                        "x2": -1.5,
                        "y2": 0.8
                },
                {
                        "type": "LINE",
                        "x1": -8.5,
                        "y1": -0.8,
                        "x2": -6.0,
                        "y2": -0.8
                },
                {
                        "type": "LINE",
                        "x1": 1.0,
                        "y1": 0.8,
                        "x2": 7.5,
                        "y2": 0.8
                }
        ]
},

    "BUS_COACH": {
        "id": "BUS_COACH",
        "name": "Ônibus rodoviário",
        "name_en": "Intercity Coach Bus",
        "category": "urbanism",
        "categoryName": "Urbanismo & Praças",
        "dimensions": "14.00m x 2.60m",
        "layer": "Urbanismo",
        "color": "#00e5ff",
        "svgPreview": "<svg viewBox=\"-7.5 -1.5 15 3\" width=\"60\" height=\"20\" stroke=\"#00e5ff\" stroke-width=\"0.1\" fill=\"none\"><rect x=\"-7\" y=\"-1.3\" width=\"14\" height=\"2.6\" rx=\"0.5\"/><line x1=\"5.8\" y1=\"-1.2\" x2=\"5.8\" y2=\"1.2\"/><line x1=\"-7\" y1=\"0\" x2=\"5.8\" y2=\"0\" stroke-dasharray=\"0.4,0.4\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": -7.0,
                        "y1": -1.3,
                        "x2": 7.0,
                        "y2": -1.3
                },
                {
                        "type": "LINE",
                        "x1": 7.0,
                        "y1": -1.3,
                        "x2": 7.0,
                        "y2": 1.3
                },
                {
                        "type": "LINE",
                        "x1": 7.0,
                        "y1": 1.3,
                        "x2": -7.0,
                        "y2": 1.3
                },
                {
                        "type": "LINE",
                        "x1": -7.0,
                        "y1": 1.3,
                        "x2": -7.0,
                        "y2": -1.3
                },
                {
                        "type": "ARC",
                        "cx": 6.2,
                        "cy": 0,
                        "r": 1.3,
                        "startAngle": -1.5707963267948966,
                        "endAngle": 1.5707963267948966
                },
                {
                        "type": "LINE",
                        "x1": 5.8,
                        "y1": -1.2,
                        "x2": 5.8,
                        "y2": 1.2
                },
                {
                        "type": "LINE",
                        "x1": -6.5,
                        "y1": 0,
                        "x2": 5.5,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": -6.8,
                        "y1": 0.2,
                        "x2": -5.6,
                        "y2": 0.2
                },
                {
                        "type": "LINE",
                        "x1": -5.6,
                        "y1": 0.2,
                        "x2": -5.6,
                        "y2": 1.2
                },
                {
                        "type": "LINE",
                        "x1": -5.6,
                        "y1": 1.2,
                        "x2": -6.8,
                        "y2": 1.2
                },
                {
                        "type": "LINE",
                        "x1": -6.8,
                        "y1": 1.2,
                        "x2": -6.8,
                        "y2": 0.2
                },
                {
                        "type": "LINE",
                        "x1": -2.5,
                        "y1": -1.3,
                        "x2": 3.5,
                        "y2": -1.3
                },
                {
                        "type": "LINE",
                        "x1": -2.5,
                        "y1": 1.3,
                        "x2": 3.5,
                        "y2": 1.3
                }
        ]
},

    "LRV_TRAM": {
        "id": "LRV_TRAM",
        "name": "VLT / bonde",
        "name_en": "Light Rail Tram (LRV)",
        "category": "urbanism",
        "categoryName": "Urbanismo & Praças",
        "dimensions": "30.00m x 2.40m",
        "layer": "Urbanismo",
        "color": "#00e5ff",
        "svgPreview": "<svg viewBox=\"-16 -1.5 32 3\" width=\"75\" height=\"15\" stroke=\"#00e5ff\" stroke-width=\"0.12\" fill=\"none\"><rect x=\"-15\" y=\"-1.2\" width=\"9\" height=\"2.4\" rx=\"0.3\"/><rect x=\"-5\" y=\"-1.2\" width=\"10\" height=\"2.4\" rx=\"0.3\"/><rect x=\"6\" y=\"-1.2\" width=\"9\" height=\"2.4\" rx=\"0.3\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 6.0,
                        "y1": -1.2,
                        "x2": 15.0,
                        "y2": -1.2
                },
                {
                        "type": "LINE",
                        "x1": 15.0,
                        "y1": -1.2,
                        "x2": 15.0,
                        "y2": 1.2
                },
                {
                        "type": "LINE",
                        "x1": 15.0,
                        "y1": 1.2,
                        "x2": 6.0,
                        "y2": 1.2
                },
                {
                        "type": "LINE",
                        "x1": 6.0,
                        "y1": 1.2,
                        "x2": 6.0,
                        "y2": -1.2
                },
                {
                        "type": "ARC",
                        "cx": 14.0,
                        "cy": 0,
                        "r": 1.2,
                        "startAngle": -1.5707963267948966,
                        "endAngle": 1.5707963267948966
                },
                {
                        "type": "LINE",
                        "x1": -5.0,
                        "y1": -1.2,
                        "x2": 5.0,
                        "y2": -1.2
                },
                {
                        "type": "LINE",
                        "x1": 5.0,
                        "y1": -1.2,
                        "x2": 5.0,
                        "y2": 1.2
                },
                {
                        "type": "LINE",
                        "x1": 5.0,
                        "y1": 1.2,
                        "x2": -5.0,
                        "y2": 1.2
                },
                {
                        "type": "LINE",
                        "x1": -5.0,
                        "y1": 1.2,
                        "x2": -5.0,
                        "y2": -1.2
                },
                {
                        "type": "LINE",
                        "x1": -15.0,
                        "y1": -1.2,
                        "x2": -6.0,
                        "y2": -1.2
                },
                {
                        "type": "LINE",
                        "x1": -6.0,
                        "y1": -1.2,
                        "x2": -6.0,
                        "y2": 1.2
                },
                {
                        "type": "LINE",
                        "x1": -6.0,
                        "y1": 1.2,
                        "x2": -15.0,
                        "y2": 1.2
                },
                {
                        "type": "LINE",
                        "x1": -15.0,
                        "y1": 1.2,
                        "x2": -15.0,
                        "y2": -1.2
                },
                {
                        "type": "ARC",
                        "cx": -14.0,
                        "cy": 0,
                        "r": 1.2,
                        "startAngle": 1.5707963267948966,
                        "endAngle": 4.71238898038469
                },
                {
                        "type": "LINE",
                        "x1": 5.0,
                        "y1": -1.1,
                        "x2": 6.0,
                        "y2": -1.1
                },
                {
                        "type": "LINE",
                        "x1": 5.0,
                        "y1": 1.1,
                        "x2": 6.0,
                        "y2": 1.1
                },
                {
                        "type": "LINE",
                        "x1": -6.0,
                        "y1": -1.1,
                        "x2": -5.0,
                        "y2": -1.1
                },
                {
                        "type": "LINE",
                        "x1": -6.0,
                        "y1": 1.1,
                        "x2": -5.0,
                        "y2": 1.1
                },
                {
                        "type": "LINE",
                        "x1": -1.0,
                        "y1": -0.8,
                        "x2": 1.0,
                        "y2": 0.8
                },
                {
                        "type": "LINE",
                        "x1": -1.0,
                        "y1": 0.8,
                        "x2": 1.0,
                        "y2": -0.8
                }
        ]
},

    "BUS_SHELTER": {
        "id": "BUS_SHELTER",
        "name": "Abrigo de ônibus completo",
        "name_en": "Complete Bus Shelter",
        "category": "urbanism",
        "categoryName": "Urbanismo & Praças",
        "dimensions": "4.00m x 1.80m",
        "layer": "Urbanismo",
        "color": "#00e5ff",
        "svgPreview": "<svg viewBox=\"-0.5 -0.5 4.5 2.5\" width=\"48\" height=\"32\" stroke=\"#00e5ff\" stroke-width=\"0.05\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"4.0\" height=\"1.8\"/><line x1=\"0.5\" y1=\"0.3\" x2=\"3.5\" y2=\"0.3\"/><rect x=\"0.8\" y1=\"0.4\" width=\"2.4\" height=\"0.45\"/><circle cx=\"3.6\" cy=\"1.2\" r=\"0.2\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 4.0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 4.0,
                        "y1": 0,
                        "x2": 4.0,
                        "y2": 1.8
                },
                {
                        "type": "LINE",
                        "x1": 4.0,
                        "y1": 1.8,
                        "x2": 0,
                        "y2": 1.8
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 1.8,
                        "x2": 0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 0.3,
                        "y1": 0.2,
                        "x2": 3.7,
                        "y2": 0.2
                },
                {
                        "type": "LINE",
                        "x1": 0.3,
                        "y1": 0.2,
                        "x2": 0.3,
                        "y2": 1.5
                },
                {
                        "type": "CIRCLE",
                        "cx": 0.8,
                        "cy": 0.2,
                        "r": 0.08
                },
                {
                        "type": "CIRCLE",
                        "cx": 3.2,
                        "cy": 0.2,
                        "r": 0.08
                },
                {
                        "type": "LINE",
                        "x1": 0.8,
                        "y1": 0.4,
                        "x2": 3.2,
                        "y2": 0.4
                },
                {
                        "type": "LINE",
                        "x1": 3.2,
                        "y1": 0.4,
                        "x2": 3.2,
                        "y2": 0.85
                },
                {
                        "type": "LINE",
                        "x1": 3.2,
                        "y1": 0.85,
                        "x2": 0.8,
                        "y2": 0.85
                },
                {
                        "type": "LINE",
                        "x1": 0.8,
                        "y1": 0.85,
                        "x2": 0.8,
                        "y2": 0.4
                },
                {
                        "type": "CIRCLE",
                        "cx": 3.6,
                        "cy": 1.2,
                        "r": 0.22
                },
                {
                        "type": "LINE",
                        "x1": 0.2,
                        "y1": 1.5,
                        "x2": 0.8,
                        "y2": 1.5
                },
                {
                        "type": "LINE",
                        "x1": 0.8,
                        "y1": 1.5,
                        "x2": 0.8,
                        "y2": 1.7
                },
                {
                        "type": "LINE",
                        "x1": 0.8,
                        "y1": 1.7,
                        "x2": 0.2,
                        "y2": 1.7
                },
                {
                        "type": "LINE",
                        "x1": 0.2,
                        "y1": 1.7,
                        "x2": 0.2,
                        "y2": 1.5
                }
        ]
},

    "BIKE_RACK_URBAN": {
        "id": "BIKE_RACK_URBAN",
        "name": "Bicicletário urbano",
        "name_en": "Urban Bike Rack (6 Slots)",
        "category": "urbanism",
        "categoryName": "Urbanismo & Praças",
        "dimensions": "3.00m x 1.20m",
        "layer": "Urbanismo",
        "color": "#00e5ff",
        "svgPreview": "<svg viewBox=\"-0.2 -0.2 3.4 1.6\" width=\"48\" height=\"30\" stroke=\"#00e5ff\" stroke-width=\"0.04\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"3.0\" height=\"1.2\" stroke-dasharray=\"0.1,0.1\"/><rect x=\"0.3\" y=\"0.2\" width=\"0.1\" height=\"0.8\"/><rect x=\"0.8\" y=\"0.2\" width=\"0.1\" height=\"0.8\"/><rect x=\"1.3\" y=\"0.2\" width=\"0.1\" height=\"0.8\"/><rect x=\"1.8\" y=\"0.2\" width=\"0.1\" height=\"0.8\"/><rect x=\"2.3\" y=\"0.2\" width=\"0.1\" height=\"0.8\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 3.0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 3.0,
                        "y1": 0,
                        "x2": 3.0,
                        "y2": 1.2
                },
                {
                        "type": "LINE",
                        "x1": 3.0,
                        "y1": 1.2,
                        "x2": 0,
                        "y2": 1.2
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 1.2,
                        "x2": 0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 0.3,
                        "y1": 0.2,
                        "x2": 0.38,
                        "y2": 0.2
                },
                {
                        "type": "LINE",
                        "x1": 0.38,
                        "y1": 0.2,
                        "x2": 0.38,
                        "y2": 1.0
                },
                {
                        "type": "LINE",
                        "x1": 0.38,
                        "y1": 1.0,
                        "x2": 0.3,
                        "y2": 1.0
                },
                {
                        "type": "LINE",
                        "x1": 0.3,
                        "y1": 1.0,
                        "x2": 0.3,
                        "y2": 0.2
                },
                {
                        "type": "LINE",
                        "x1": 0.8,
                        "y1": 0.2,
                        "x2": 0.88,
                        "y2": 0.2
                },
                {
                        "type": "LINE",
                        "x1": 0.88,
                        "y1": 0.2,
                        "x2": 0.88,
                        "y2": 1.0
                },
                {
                        "type": "LINE",
                        "x1": 0.88,
                        "y1": 1.0,
                        "x2": 0.8,
                        "y2": 1.0
                },
                {
                        "type": "LINE",
                        "x1": 0.8,
                        "y1": 1.0,
                        "x2": 0.8,
                        "y2": 0.2
                },
                {
                        "type": "LINE",
                        "x1": 1.3,
                        "y1": 0.2,
                        "x2": 1.38,
                        "y2": 0.2
                },
                {
                        "type": "LINE",
                        "x1": 1.38,
                        "y1": 0.2,
                        "x2": 1.38,
                        "y2": 1.0
                },
                {
                        "type": "LINE",
                        "x1": 1.38,
                        "y1": 1.0,
                        "x2": 1.3,
                        "y2": 1.0
                },
                {
                        "type": "LINE",
                        "x1": 1.3,
                        "y1": 1.0,
                        "x2": 1.3,
                        "y2": 0.2
                },
                {
                        "type": "LINE",
                        "x1": 1.8,
                        "y1": 0.2,
                        "x2": 1.88,
                        "y2": 0.2
                },
                {
                        "type": "LINE",
                        "x1": 1.88,
                        "y1": 0.2,
                        "x2": 1.88,
                        "y2": 1.0
                },
                {
                        "type": "LINE",
                        "x1": 1.88,
                        "y1": 1.0,
                        "x2": 1.8,
                        "y2": 1.0
                },
                {
                        "type": "LINE",
                        "x1": 1.8,
                        "y1": 1.0,
                        "x2": 1.8,
                        "y2": 0.2
                },
                {
                        "type": "LINE",
                        "x1": 2.3,
                        "y1": 0.2,
                        "x2": 2.38,
                        "y2": 0.2
                },
                {
                        "type": "LINE",
                        "x1": 2.38,
                        "y1": 0.2,
                        "x2": 2.38,
                        "y2": 1.0
                },
                {
                        "type": "LINE",
                        "x1": 2.38,
                        "y1": 1.0,
                        "x2": 2.3,
                        "y2": 1.0
                },
                {
                        "type": "LINE",
                        "x1": 2.3,
                        "y1": 1.0,
                        "x2": 2.3,
                        "y2": 0.2
                },
                {
                        "type": "LINE",
                        "x1": 2.7,
                        "y1": 0.2,
                        "x2": 2.78,
                        "y2": 0.2
                },
                {
                        "type": "LINE",
                        "x1": 2.78,
                        "y1": 0.2,
                        "x2": 2.78,
                        "y2": 1.0
                },
                {
                        "type": "LINE",
                        "x1": 2.78,
                        "y1": 1.0,
                        "x2": 2.7,
                        "y2": 1.0
                },
                {
                        "type": "LINE",
                        "x1": 2.7,
                        "y1": 1.0,
                        "x2": 2.7,
                        "y2": 0.2
                }
        ]
},

    "INFO_TOTEM": {
        "id": "INFO_TOTEM",
        "name": "Totem de informações",
        "name_en": "Information Wayfinding Totem",
        "category": "urbanism",
        "categoryName": "Urbanismo & Praças",
        "dimensions": "0.80m x 0.35m",
        "layer": "Urbanismo",
        "color": "#00e5ff",
        "svgPreview": "<svg viewBox=\"-0.1 -0.1 1.0 0.55\" width=\"48\" height=\"28\" stroke=\"#00e5ff\" stroke-width=\"0.02\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"0.8\" height=\"0.35\" rx=\"0.05\"/><circle cx=\"0.4\" cy=\"0.175\" r=\"0.08\"/><line x1=\"0.4\" y1=\"0.13\" x2=\"0.4\" y2=\"0.22\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 0.8,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 0.8,
                        "y1": 0,
                        "x2": 0.8,
                        "y2": 0.35
                },
                {
                        "type": "LINE",
                        "x1": 0.8,
                        "y1": 0.35,
                        "x2": 0,
                        "y2": 0.35
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0.35,
                        "x2": 0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 0.08,
                        "y1": 0.06,
                        "x2": 0.72,
                        "y2": 0.06
                },
                {
                        "type": "LINE",
                        "x1": 0.72,
                        "y1": 0.06,
                        "x2": 0.72,
                        "y2": 0.29
                },
                {
                        "type": "LINE",
                        "x1": 0.72,
                        "y1": 0.29,
                        "x2": 0.08,
                        "y2": 0.29
                },
                {
                        "type": "LINE",
                        "x1": 0.08,
                        "y1": 0.29,
                        "x2": 0.08,
                        "y2": 0.06
                },
                {
                        "type": "CIRCLE",
                        "cx": 0.4,
                        "cy": 0.175,
                        "r": 0.06
                }
        ]
},

    "BENCH_MODERN": {
        "id": "BENCH_MODERN",
        "name": "Banco de praça moderno",
        "name_en": "Modern Park Bench",
        "category": "urbanism",
        "categoryName": "Urbanismo & Praças",
        "dimensions": "2.00m x 0.60m",
        "layer": "Urbanismo",
        "color": "#00e5ff",
        "svgPreview": "<svg viewBox=\"-0.1 -0.1 2.2 0.8\" width=\"48\" height=\"28\" stroke=\"#00e5ff\" stroke-width=\"0.03\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"2.0\" height=\"0.6\" rx=\"0.05\"/><line x1=\"0\" y1=\"0.15\" x2=\"2.0\" y2=\"0.15\"/><line x1=\"0\" y1=\"0.30\" x2=\"2.0\" y2=\"0.30\"/><line x1=\"0\" y1=\"0.45\" x2=\"2.0\" y2=\"0.45\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 2.0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 2.0,
                        "y1": 0,
                        "x2": 2.0,
                        "y2": 0.6
                },
                {
                        "type": "LINE",
                        "x1": 2.0,
                        "y1": 0.6,
                        "x2": 0,
                        "y2": 0.6
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0.6,
                        "x2": 0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0.15,
                        "x2": 2.0,
                        "y2": 0.15
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0.3,
                        "x2": 2.0,
                        "y2": 0.3
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0.45,
                        "x2": 2.0,
                        "y2": 0.45
                },
                {
                        "type": "LINE",
                        "x1": 0.05,
                        "y1": 0,
                        "x2": 0.17,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 0.17,
                        "y1": 0,
                        "x2": 0.17,
                        "y2": 0.6
                },
                {
                        "type": "LINE",
                        "x1": 0.17,
                        "y1": 0.6,
                        "x2": 0.05,
                        "y2": 0.6
                },
                {
                        "type": "LINE",
                        "x1": 0.05,
                        "y1": 0.6,
                        "x2": 0.05,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 1.83,
                        "y1": 0,
                        "x2": 1.95,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 1.95,
                        "y1": 0,
                        "x2": 1.95,
                        "y2": 0.6
                },
                {
                        "type": "LINE",
                        "x1": 1.95,
                        "y1": 0.6,
                        "x2": 1.83,
                        "y2": 0.6
                },
                {
                        "type": "LINE",
                        "x1": 1.83,
                        "y1": 0.6,
                        "x2": 1.83,
                        "y2": 0
                }
        ]
},

    "RECYCLE_BIN_4": {
        "id": "RECYCLE_BIN_4",
        "name": "Lixeira seletiva",
        "name_en": "4-Stream Recycling Station",
        "category": "urbanism",
        "categoryName": "Urbanismo & Praças",
        "dimensions": "1.60m x 0.45m",
        "layer": "Urbanismo",
        "color": "#00e5ff",
        "svgPreview": "<svg viewBox=\"-0.1 -0.1 1.8 0.65\" width=\"48\" height=\"28\" stroke=\"#00e5ff\" stroke-width=\"0.02\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"1.6\" height=\"0.45\"/><circle cx=\"0.2\" cy=\"0.225\" r=\"0.14\"/><circle cx=\"0.6\" cy=\"0.225\" r=\"0.14\"/><circle cx=\"1.0\" cy=\"0.225\" r=\"0.14\"/><circle cx=\"1.4\" cy=\"0.225\" r=\"0.14\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 1.6,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 1.6,
                        "y1": 0,
                        "x2": 1.6,
                        "y2": 0.45
                },
                {
                        "type": "LINE",
                        "x1": 1.6,
                        "y1": 0.45,
                        "x2": 0,
                        "y2": 0.45
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0.45,
                        "x2": 0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 0.05,
                        "y1": 0.05,
                        "x2": 0.4,
                        "y2": 0.05
                },
                {
                        "type": "LINE",
                        "x1": 0.4,
                        "y1": 0.05,
                        "x2": 0.4,
                        "y2": 0.4
                },
                {
                        "type": "LINE",
                        "x1": 0.4,
                        "y1": 0.4,
                        "x2": 0.05,
                        "y2": 0.4
                },
                {
                        "type": "LINE",
                        "x1": 0.05,
                        "y1": 0.4,
                        "x2": 0.05,
                        "y2": 0.05
                },
                {
                        "type": "LINE",
                        "x1": 0.43,
                        "y1": 0.05,
                        "x2": 0.78,
                        "y2": 0.05
                },
                {
                        "type": "LINE",
                        "x1": 0.78,
                        "y1": 0.05,
                        "x2": 0.78,
                        "y2": 0.4
                },
                {
                        "type": "LINE",
                        "x1": 0.78,
                        "y1": 0.4,
                        "x2": 0.43,
                        "y2": 0.4
                },
                {
                        "type": "LINE",
                        "x1": 0.43,
                        "y1": 0.4,
                        "x2": 0.43,
                        "y2": 0.05
                },
                {
                        "type": "LINE",
                        "x1": 0.81,
                        "y1": 0.05,
                        "x2": 1.16,
                        "y2": 0.05
                },
                {
                        "type": "LINE",
                        "x1": 1.16,
                        "y1": 0.05,
                        "x2": 1.16,
                        "y2": 0.4
                },
                {
                        "type": "LINE",
                        "x1": 1.16,
                        "y1": 0.4,
                        "x2": 0.81,
                        "y2": 0.4
                },
                {
                        "type": "LINE",
                        "x1": 0.81,
                        "y1": 0.4,
                        "x2": 0.81,
                        "y2": 0.05
                },
                {
                        "type": "LINE",
                        "x1": 1.2,
                        "y1": 0.05,
                        "x2": 1.55,
                        "y2": 0.05
                },
                {
                        "type": "LINE",
                        "x1": 1.55,
                        "y1": 0.05,
                        "x2": 1.55,
                        "y2": 0.4
                },
                {
                        "type": "LINE",
                        "x1": 1.55,
                        "y1": 0.4,
                        "x2": 1.2,
                        "y2": 0.4
                },
                {
                        "type": "LINE",
                        "x1": 1.2,
                        "y1": 0.4,
                        "x2": 1.2,
                        "y2": 0.05
                },
                {
                        "type": "CIRCLE",
                        "cx": 0.225,
                        "cy": 0.225,
                        "r": 0.1
                },
                {
                        "type": "CIRCLE",
                        "cx": 0.605,
                        "cy": 0.225,
                        "r": 0.1
                },
                {
                        "type": "CIRCLE",
                        "cx": 0.985,
                        "cy": 0.225,
                        "r": 0.1
                },
                {
                        "type": "CIRCLE",
                        "cx": 1.375,
                        "cy": 0.225,
                        "r": 0.1
                }
        ]
},

    "DRINK_FOUNTAIN": {
        "id": "DRINK_FOUNTAIN",
        "name": "Bebedouro público",
        "name_en": "Public Drinking Fountain",
        "category": "urbanism",
        "categoryName": "Urbanismo & Praças",
        "dimensions": "0.50m x 0.50m",
        "layer": "Urbanismo",
        "color": "#00e5ff",
        "svgPreview": "<svg viewBox=\"-0.1 -0.1 0.7 0.7\" width=\"40\" height=\"40\" stroke=\"#00e5ff\" stroke-width=\"0.02\" fill=\"none\"><circle cx=\"0.25\" cy=\"0.25\" r=\"0.22\"/><circle cx=\"0.25\" cy=\"0.25\" r=\"0.12\"/><line x1=\"0.25\" y1=\"0.1\" x2=\"0.25\" y2=\"0.2\"/></svg>",
        "entities": [
                {
                        "type": "CIRCLE",
                        "cx": 0.25,
                        "cy": 0.25,
                        "r": 0.24
                },
                {
                        "type": "CIRCLE",
                        "cx": 0.25,
                        "cy": 0.25,
                        "r": 0.15
                },
                {
                        "type": "CIRCLE",
                        "cx": 0.25,
                        "cy": 0.12,
                        "r": 0.03
                },
                {
                        "type": "LINE",
                        "x1": 0.05,
                        "y1": 0.22,
                        "x2": 0.45,
                        "y2": 0.22
                },
                {
                        "type": "LINE",
                        "x1": 0.45,
                        "y1": 0.22,
                        "x2": 0.45,
                        "y2": 0.28
                },
                {
                        "type": "LINE",
                        "x1": 0.45,
                        "y1": 0.28,
                        "x2": 0.05,
                        "y2": 0.28
                },
                {
                        "type": "LINE",
                        "x1": 0.05,
                        "y1": 0.28,
                        "x2": 0.05,
                        "y2": 0.22
                }
        ]
},

    "ORNAMENTAL_FOUNTAIN": {
        "id": "ORNAMENTAL_FOUNTAIN",
        "name": "Fonte d’água ornamental",
        "name_en": "Ornamental Octagonal Fountain",
        "category": "urbanism",
        "categoryName": "Urbanismo & Praças",
        "dimensions": "3.00m x 3.00m",
        "layer": "Urbanismo",
        "color": "#00e5ff",
        "svgPreview": "<svg viewBox=\"-1.8 -1.8 3.6 3.6\" width=\"48\" height=\"48\" stroke=\"#00e5ff\" stroke-width=\"0.06\" fill=\"none\"><polygon points=\"1.5,0.6 0.6,1.5 -0.6,1.5 -1.5,0.6 -1.5,-0.6 -0.6,-1.5 0.6,-1.5 1.5,-0.6\"/><circle cx=\"0\" cy=\"0\" r=\"0.6\"/><circle cx=\"0\" cy=\"0\" r=\"0.2\"/></svg>",
        "entities": [
                {
                        "type": "POLYLINE",
                        "points": [
                                {
                                        "x": 1.5,
                                        "y": 0.0
                                },
                                {
                                        "x": 1.061,
                                        "y": 1.061
                                },
                                {
                                        "x": 0.0,
                                        "y": 1.5
                                },
                                {
                                        "x": -1.061,
                                        "y": 1.061
                                },
                                {
                                        "x": -1.5,
                                        "y": 0.0
                                },
                                {
                                        "x": -1.061,
                                        "y": -1.061
                                },
                                {
                                        "x": -0.0,
                                        "y": -1.5
                                },
                                {
                                        "x": 1.061,
                                        "y": -1.061
                                }
                        ],
                        "closed": true
                },
                {
                        "type": "POLYLINE",
                        "points": [
                                {
                                        "x": 1.3,
                                        "y": 0.0
                                },
                                {
                                        "x": 0.919,
                                        "y": 0.919
                                },
                                {
                                        "x": 0.0,
                                        "y": 1.3
                                },
                                {
                                        "x": -0.919,
                                        "y": 0.919
                                },
                                {
                                        "x": -1.3,
                                        "y": 0.0
                                },
                                {
                                        "x": -0.919,
                                        "y": -0.919
                                },
                                {
                                        "x": -0.0,
                                        "y": -1.3
                                },
                                {
                                        "x": 0.919,
                                        "y": -0.919
                                }
                        ],
                        "closed": true
                },
                {
                        "type": "CIRCLE",
                        "cx": 0,
                        "cy": 0,
                        "r": 0.6
                },
                {
                        "type": "CIRCLE",
                        "cx": 0,
                        "cy": 0,
                        "r": 0.2
                },
                {
                        "type": "LINE",
                        "x1": -0.9,
                        "y1": 0,
                        "x2": -0.3,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 0.3,
                        "y1": 0,
                        "x2": 0.9,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": -0.9,
                        "x2": 0,
                        "y2": -0.3
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0.3,
                        "x2": 0,
                        "y2": 0.9
                }
        ]
},

    "CIRCULAR_FOUNTAIN": {
        "id": "CIRCULAR_FOUNTAIN",
        "name": "Chafariz circular",
        "name_en": "Circular Tiered Fountain",
        "category": "urbanism",
        "categoryName": "Urbanismo & Praças",
        "dimensions": "4.50m x 4.50m",
        "layer": "Urbanismo",
        "color": "#00e5ff",
        "svgPreview": "<svg viewBox=\"-2.5 -2.5 5 5\" width=\"48\" height=\"48\" stroke=\"#00e5ff\" stroke-width=\"0.08\" fill=\"none\"><circle cx=\"0\" cy=\"0\" r=\"2.25\"/><circle cx=\"0\" cy=\"0\" r=\"1.5\"/><circle cx=\"0\" cy=\"0\" r=\"0.75\"/><circle cx=\"0\" cy=\"0\" r=\"0.25\"/></svg>",
        "entities": [
                {
                        "type": "CIRCLE",
                        "cx": 0,
                        "cy": 0,
                        "r": 2.25
                },
                {
                        "type": "CIRCLE",
                        "cx": 0,
                        "cy": 0,
                        "r": 2.05
                },
                {
                        "type": "CIRCLE",
                        "cx": 0,
                        "cy": 0,
                        "r": 1.4
                },
                {
                        "type": "CIRCLE",
                        "cx": 0,
                        "cy": 0,
                        "r": 0.7
                },
                {
                        "type": "CIRCLE",
                        "cx": 0,
                        "cy": 0,
                        "r": 0.25
                }
        ]
},

    "URBAN_SCULPTURE": {
        "id": "URBAN_SCULPTURE",
        "name": "Escultura urbana",
        "name_en": "Contemporary Urban Sculpture",
        "category": "urbanism",
        "categoryName": "Urbanismo & Praças",
        "dimensions": "2.50m x 1.80m",
        "layer": "Urbanismo",
        "color": "#00e5ff",
        "svgPreview": "<svg viewBox=\"-1.5 -1.1 3.0 2.2\" width=\"48\" height=\"38\" stroke=\"#00e5ff\" stroke-width=\"0.05\" fill=\"none\"><rect x=\"-1.2\" y=\"-0.8\" width=\"2.4\" height=\"1.6\"/><ellipse cx=\"0\" cy=\"0\" rx=\"1.0\" ry=\"0.4\" transform=\"rotate(30)\"/><circle cx=\"0\" cy=\"0\" r=\"0.3\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": -1.25,
                        "y1": -0.9,
                        "x2": 1.25,
                        "y2": -0.9
                },
                {
                        "type": "LINE",
                        "x1": 1.25,
                        "y1": -0.9,
                        "x2": 1.25,
                        "y2": 0.9
                },
                {
                        "type": "LINE",
                        "x1": 1.25,
                        "y1": 0.9,
                        "x2": -1.25,
                        "y2": 0.9
                },
                {
                        "type": "LINE",
                        "x1": -1.25,
                        "y1": 0.9,
                        "x2": -1.25,
                        "y2": -0.9
                },
                {
                        "type": "LINE",
                        "x1": -1.0,
                        "y1": -0.7,
                        "x2": 1.0,
                        "y2": -0.7
                },
                {
                        "type": "LINE",
                        "x1": 1.0,
                        "y1": -0.7,
                        "x2": 1.0,
                        "y2": 0.7
                },
                {
                        "type": "LINE",
                        "x1": 1.0,
                        "y1": 0.7,
                        "x2": -1.0,
                        "y2": 0.7
                },
                {
                        "type": "LINE",
                        "x1": -1.0,
                        "y1": 0.7,
                        "x2": -1.0,
                        "y2": -0.7
                },
                {
                        "type": "LINE",
                        "x1": -0.8,
                        "y1": -0.5,
                        "x2": 0.8,
                        "y2": 0.5
                },
                {
                        "type": "LINE",
                        "x1": -0.8,
                        "y1": 0.5,
                        "x2": 0.8,
                        "y2": -0.5
                },
                {
                        "type": "CIRCLE",
                        "cx": 0,
                        "cy": 0,
                        "r": 0.45
                }
        ]
},

    "PARK_KIOSK": {
        "id": "PARK_KIOSK",
        "name": "Quiosque de praça",
        "name_en": "Park Concession Kiosk",
        "category": "urbanism",
        "categoryName": "Urbanismo & Praças",
        "dimensions": "3.50m x 3.50m",
        "layer": "Urbanismo",
        "color": "#00e5ff",
        "svgPreview": "<svg viewBox=\"-2 -2 4 4\" width=\"48\" height=\"48\" stroke=\"#00e5ff\" stroke-width=\"0.06\" fill=\"none\"><polygon points=\"1.7,0.7 0.7,1.7 -0.7,1.7 -1.7,0.7 -1.7,-0.7 -0.7,-1.7 0.7,-1.7 1.7,-0.7\"/><rect x=\"-1.2\" y=\"-1.2\" width=\"2.4\" height=\"2.4\"/></svg>",
        "entities": [
                {
                        "type": "POLYLINE",
                        "points": [
                                {
                                        "x": 1.75,
                                        "y": 0.0
                                },
                                {
                                        "x": 1.237,
                                        "y": 1.237
                                },
                                {
                                        "x": 0.0,
                                        "y": 1.75
                                },
                                {
                                        "x": -1.237,
                                        "y": 1.237
                                },
                                {
                                        "x": -1.75,
                                        "y": 0.0
                                },
                                {
                                        "x": -1.237,
                                        "y": -1.237
                                },
                                {
                                        "x": -0.0,
                                        "y": -1.75
                                },
                                {
                                        "x": 1.237,
                                        "y": -1.237
                                }
                        ],
                        "closed": true
                },
                {
                        "type": "LINE",
                        "x1": -1.25,
                        "y1": -1.25,
                        "x2": 1.25,
                        "y2": -1.25
                },
                {
                        "type": "LINE",
                        "x1": 1.25,
                        "y1": -1.25,
                        "x2": 1.25,
                        "y2": 1.25
                },
                {
                        "type": "LINE",
                        "x1": 1.25,
                        "y1": 1.25,
                        "x2": -1.25,
                        "y2": 1.25
                },
                {
                        "type": "LINE",
                        "x1": -1.25,
                        "y1": 1.25,
                        "x2": -1.25,
                        "y2": -1.25
                },
                {
                        "type": "LINE",
                        "x1": -1.25,
                        "y1": -0.6,
                        "x2": 1.25,
                        "y2": -0.6
                },
                {
                        "type": "LINE",
                        "x1": 0.5,
                        "y1": -1.25,
                        "x2": 0.5,
                        "y2": 1.25
                }
        ]
},

    "GAZEBO_BANDSTAND": {
        "id": "GAZEBO_BANDSTAND",
        "name": "Coreto",
        "name_en": "Traditional Hexagonal Bandstand",
        "category": "urbanism",
        "categoryName": "Urbanismo & Praças",
        "dimensions": "6.00m x 6.00m",
        "layer": "Urbanismo",
        "color": "#00e5ff",
        "svgPreview": "<svg viewBox=\"-3.5 -3.5 7 7\" width=\"48\" height=\"48\" stroke=\"#00e5ff\" stroke-width=\"0.1\" fill=\"none\"><polygon points=\"3,0 1.5,2.6 -1.5,2.6 -3,0 -1.5,-2.6 1.5,-2.6\"/><polygon points=\"2.5,0 1.25,2.16 -1.25,2.16 -2.5,0 -1.25,-2.16 1.25,-2.16\"/><circle cx=\"0\" cy=\"0\" r=\"0.4\"/></svg>",
        "entities": [
                {
                        "type": "POLYLINE",
                        "points": [
                                {
                                        "x": 3.0,
                                        "y": 0.0
                                },
                                {
                                        "x": 1.5,
                                        "y": 2.598
                                },
                                {
                                        "x": -1.5,
                                        "y": 2.598
                                },
                                {
                                        "x": -3.0,
                                        "y": 0.0
                                },
                                {
                                        "x": -1.5,
                                        "y": -2.598
                                },
                                {
                                        "x": 1.5,
                                        "y": -2.598
                                }
                        ],
                        "closed": true
                },
                {
                        "type": "POLYLINE",
                        "points": [
                                {
                                        "x": 2.5,
                                        "y": 0.0
                                },
                                {
                                        "x": 1.25,
                                        "y": 2.165
                                },
                                {
                                        "x": -1.25,
                                        "y": 2.165
                                },
                                {
                                        "x": -2.5,
                                        "y": 0.0
                                },
                                {
                                        "x": -1.25,
                                        "y": -2.165
                                },
                                {
                                        "x": 1.25,
                                        "y": -2.165
                                }
                        ],
                        "closed": true
                },
                {
                        "type": "POLYLINE",
                        "points": [
                                {
                                        "x": 0.4,
                                        "y": 0.0
                                },
                                {
                                        "x": 0.346,
                                        "y": 0.2
                                },
                                {
                                        "x": 0.2,
                                        "y": 0.346
                                },
                                {
                                        "x": 0.0,
                                        "y": 0.4
                                },
                                {
                                        "x": -0.2,
                                        "y": 0.346
                                },
                                {
                                        "x": -0.346,
                                        "y": 0.2
                                },
                                {
                                        "x": -0.4,
                                        "y": 0.0
                                },
                                {
                                        "x": -0.346,
                                        "y": -0.2
                                },
                                {
                                        "x": -0.2,
                                        "y": -0.346
                                },
                                {
                                        "x": -0.0,
                                        "y": -0.4
                                },
                                {
                                        "x": 0.2,
                                        "y": -0.346
                                },
                                {
                                        "x": 0.346,
                                        "y": -0.2
                                }
                        ],
                        "closed": true
                },
                {
                        "type": "LINE",
                        "x1": -0.8,
                        "y1": -3.4,
                        "x2": 0.8,
                        "y2": -3.4
                },
                {
                        "type": "LINE",
                        "x1": 0.8,
                        "y1": -3.4,
                        "x2": 0.8,
                        "y2": -3.0
                },
                {
                        "type": "LINE",
                        "x1": 0.8,
                        "y1": -3.0,
                        "x2": -0.8,
                        "y2": -3.0
                },
                {
                        "type": "LINE",
                        "x1": -0.8,
                        "y1": -3.0,
                        "x2": -0.8,
                        "y2": -3.4
                },
                {
                        "type": "LINE",
                        "x1": -0.8,
                        "y1": -3.2,
                        "x2": 0.8,
                        "y2": -3.2
                },
                {
                        "type": "LINE",
                        "x1": 0.8,
                        "y1": -3.2,
                        "x2": 0.8,
                        "y2": -3.0
                },
                {
                        "type": "LINE",
                        "x1": 0.8,
                        "y1": -3.0,
                        "x2": -0.8,
                        "y2": -3.0
                },
                {
                        "type": "LINE",
                        "x1": -0.8,
                        "y1": -3.0,
                        "x2": -0.8,
                        "y2": -3.2
                }
        ]
},

    "INCLUSIVE_PLAYGROUND": {
        "id": "INCLUSIVE_PLAYGROUND",
        "name": "Playground inclusivo",
        "name_en": "Inclusive Accessible Playground",
        "category": "urbanism",
        "categoryName": "Urbanismo & Praças",
        "dimensions": "8.00m x 6.00m",
        "layer": "Urbanismo",
        "color": "#00e5ff",
        "svgPreview": "<svg viewBox=\"-0.5 -0.5 9 7\" width=\"56\" height=\"42\" stroke=\"#00e5ff\" stroke-width=\"0.1\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"8\" height=\"6\" rx=\"0.4\"/><circle cx=\"2\" cy=\"2\" r=\"1.2\"/><rect x=\"4.5\" y=\"1\" width=\"2.5\" height=\"4\"/><line x1=\"5.75\" y1=\"1\" x2=\"5.75\" y2=\"5\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 8.0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 8.0,
                        "y1": 0,
                        "x2": 8.0,
                        "y2": 6.0
                },
                {
                        "type": "LINE",
                        "x1": 8.0,
                        "y1": 6.0,
                        "x2": 0,
                        "y2": 6.0
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 6.0,
                        "x2": 0,
                        "y2": 0
                },
                {
                        "type": "CIRCLE",
                        "cx": 2.0,
                        "cy": 2.0,
                        "r": 1.2
                },
                {
                        "type": "CIRCLE",
                        "cx": 2.0,
                        "cy": 2.0,
                        "r": 0.3
                },
                {
                        "type": "LINE",
                        "x1": 4.5,
                        "y1": 1.0,
                        "x2": 7.3,
                        "y2": 1.0
                },
                {
                        "type": "LINE",
                        "x1": 7.3,
                        "y1": 1.0,
                        "x2": 7.3,
                        "y2": 5.0
                },
                {
                        "type": "LINE",
                        "x1": 7.3,
                        "y1": 5.0,
                        "x2": 4.5,
                        "y2": 5.0
                },
                {
                        "type": "LINE",
                        "x1": 4.5,
                        "y1": 5.0,
                        "x2": 4.5,
                        "y2": 1.0
                },
                {
                        "type": "LINE",
                        "x1": 4.5,
                        "y1": 2.0,
                        "x2": 7.3,
                        "y2": 2.0
                },
                {
                        "type": "LINE",
                        "x1": 0.8,
                        "y1": 4.2,
                        "x2": 3.8,
                        "y2": 4.2
                },
                {
                        "type": "LINE",
                        "x1": 3.8,
                        "y1": 4.2,
                        "x2": 3.8,
                        "y2": 5.4
                },
                {
                        "type": "LINE",
                        "x1": 3.8,
                        "y1": 5.4,
                        "x2": 0.8,
                        "y2": 5.4
                },
                {
                        "type": "LINE",
                        "x1": 0.8,
                        "y1": 5.4,
                        "x2": 0.8,
                        "y2": 4.2
                }
        ]
},

    "OUTDOOR_GYM": {
        "id": "OUTDOOR_GYM",
        "name": "Academia ao ar livre",
        "name_en": "Outdoor Fitness Station",
        "category": "urbanism",
        "categoryName": "Urbanismo & Praças",
        "dimensions": "6.00m x 4.00m",
        "layer": "Urbanismo",
        "color": "#00e5ff",
        "svgPreview": "<svg viewBox=\"-0.5 -0.5 7 5\" width=\"56\" height=\"40\" stroke=\"#00e5ff\" stroke-width=\"0.08\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"6\" height=\"4\" stroke-dasharray=\"0.2,0.2\"/><circle cx=\"1.5\" cy=\"2\" r=\"0.8\"/><circle cx=\"4.5\" cy=\"2\" r=\"0.8\"/><rect x=\"2.5\" y=\"1.2\" width=\"1.0\" height=\"1.6\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 6.0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 6.0,
                        "y1": 0,
                        "x2": 6.0,
                        "y2": 4.0
                },
                {
                        "type": "LINE",
                        "x1": 6.0,
                        "y1": 4.0,
                        "x2": 0,
                        "y2": 4.0
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 4.0,
                        "x2": 0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 1.0,
                        "y1": 1.2,
                        "x2": 2.0,
                        "y2": 1.2
                },
                {
                        "type": "LINE",
                        "x1": 2.0,
                        "y1": 1.2,
                        "x2": 2.0,
                        "y2": 2.8
                },
                {
                        "type": "LINE",
                        "x1": 2.0,
                        "y1": 2.8,
                        "x2": 1.0,
                        "y2": 2.8
                },
                {
                        "type": "LINE",
                        "x1": 1.0,
                        "y1": 2.8,
                        "x2": 1.0,
                        "y2": 1.2
                },
                {
                        "type": "CIRCLE",
                        "cx": 4.5,
                        "cy": 2.0,
                        "r": 0.8
                },
                {
                        "type": "LINE",
                        "x1": 2.5,
                        "y1": 1.0,
                        "x2": 3.5,
                        "y2": 1.0
                },
                {
                        "type": "LINE",
                        "x1": 2.5,
                        "y1": 3.0,
                        "x2": 3.5,
                        "y2": 3.0
                }
        ]
},

    "BIKE_HOOP": {
        "id": "BIKE_HOOP",
        "name": "Paraciclo",
        "name_en": "Single Bicycle Parking Hoop",
        "category": "urbanism",
        "categoryName": "Urbanismo & Praças",
        "dimensions": "1.00m x 0.20m",
        "layer": "Urbanismo",
        "color": "#00e5ff",
        "svgPreview": "<svg viewBox=\"-0.1 -0.1 1.2 0.4\" width=\"48\" height=\"20\" stroke=\"#00e5ff\" stroke-width=\"0.02\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"1.0\" height=\"0.2\" rx=\"0.1\"/><circle cx=\"0.1\" cy=\"0.1\" r=\"0.05\"/><circle cx=\"0.9\" cy=\"0.1\" r=\"0.05\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 1.0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 1.0,
                        "y1": 0,
                        "x2": 1.0,
                        "y2": 0.2
                },
                {
                        "type": "LINE",
                        "x1": 1.0,
                        "y1": 0.2,
                        "x2": 0,
                        "y2": 0.2
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0.2,
                        "x2": 0,
                        "y2": 0
                },
                {
                        "type": "CIRCLE",
                        "cx": 0.12,
                        "cy": 0.1,
                        "r": 0.05
                },
                {
                        "type": "CIRCLE",
                        "cx": 0.88,
                        "cy": 0.1,
                        "r": 0.05
                },
                {
                        "type": "LINE",
                        "x1": 0.12,
                        "y1": 0.1,
                        "x2": 0.88,
                        "y2": 0.1
                }
        ]
},

    "URBAN_PLANTER": {
        "id": "URBAN_PLANTER",
        "name": "Floreira urbana",
        "name_en": "Urban Concrete Planter Box",
        "category": "urbanism",
        "categoryName": "Urbanismo & Praças",
        "dimensions": "1.80m x 0.60m",
        "layer": "Urbanismo",
        "color": "#00e5ff",
        "svgPreview": "<svg viewBox=\"-0.1 -0.1 2.0 0.8\" width=\"48\" height=\"24\" stroke=\"#00e5ff\" stroke-width=\"0.03\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"1.8\" height=\"0.6\" rx=\"0.05\"/><circle cx=\"0.45\" cy=\"0.3\" r=\"0.2\"/><circle cx=\"0.9\" cy=\"0.3\" r=\"0.2\"/><circle cx=\"1.35\" cy=\"0.3\" r=\"0.2\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 1.8,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 1.8,
                        "y1": 0,
                        "x2": 1.8,
                        "y2": 0.6
                },
                {
                        "type": "LINE",
                        "x1": 1.8,
                        "y1": 0.6,
                        "x2": 0,
                        "y2": 0.6
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0.6,
                        "x2": 0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 0.1,
                        "y1": 0.08,
                        "x2": 1.7,
                        "y2": 0.08
                },
                {
                        "type": "LINE",
                        "x1": 1.7,
                        "y1": 0.08,
                        "x2": 1.7,
                        "y2": 0.52
                },
                {
                        "type": "LINE",
                        "x1": 1.7,
                        "y1": 0.52,
                        "x2": 0.1,
                        "y2": 0.52
                },
                {
                        "type": "LINE",
                        "x1": 0.1,
                        "y1": 0.52,
                        "x2": 0.1,
                        "y2": 0.08
                },
                {
                        "type": "CIRCLE",
                        "cx": 0.45,
                        "cy": 0.3,
                        "r": 0.18
                },
                {
                        "type": "CIRCLE",
                        "cx": 0.9,
                        "cy": 0.3,
                        "r": 0.18
                },
                {
                        "type": "CIRCLE",
                        "cx": 1.35,
                        "cy": 0.3,
                        "r": 0.18
                }
        ]
},

    "EV_CHARGER_STREET": {
        "id": "EV_CHARGER_STREET",
        "name": "Poste com carregador para veículos elétricos",
        "name_en": "Streetlight with EV Charger",
        "category": "urbanism",
        "categoryName": "Urbanismo & Praças",
        "dimensions": "0.60m x 0.40m",
        "layer": "Urbanismo",
        "color": "#00e5ff",
        "svgPreview": "<svg viewBox=\"-0.1 -0.1 0.8 0.6\" width=\"48\" height=\"36\" stroke=\"#00e5ff\" stroke-width=\"0.03\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"0.6\" height=\"0.4\" rx=\"0.05\"/><circle cx=\"0.3\" cy=\"0.2\" r=\"0.12\"/><polygon points=\"0.3,0.12 0.25,0.22 0.32,0.22 0.28,0.28\" fill=\"#00e5ff\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 0.6,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 0.6,
                        "y1": 0,
                        "x2": 0.6,
                        "y2": 0.4
                },
                {
                        "type": "LINE",
                        "x1": 0.6,
                        "y1": 0.4,
                        "x2": 0,
                        "y2": 0.4
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0.4,
                        "x2": 0,
                        "y2": 0
                },
                {
                        "type": "CIRCLE",
                        "cx": 0.3,
                        "cy": 0.2,
                        "r": 0.12
                },
                {
                        "type": "POLYLINE",
                        "points": [
                                {
                                        "x": 0.3,
                                        "y": 0.28
                                },
                                {
                                        "x": 0.25,
                                        "y": 0.2
                                },
                                {
                                        "x": 0.32,
                                        "y": 0.2
                                },
                                {
                                        "x": 0.28,
                                        "y": 0.12
                                }
                        ],
                        "closed": false
                }
        ]
},

    "TRUCK_CRANE_MUNCK": {
        "id": "TRUCK_CRANE_MUNCK",
        "name": "Caminhão munck",
        "name_en": "Truck-Mounted Crane (Munck)",
        "category": "mobility",
        "categoryName": "Mobilidade & Transportes",
        "dimensions": "9.00m x 2.50m",
        "layer": "Transportes",
        "color": "#f59e0b",
        "svgPreview": "<svg viewBox=\"-4.8 -1.5 9.6 3\" width=\"60\" height=\"22\" stroke=\"#f59e0b\" stroke-width=\"0.08\" fill=\"none\"><rect x=\"-4.5\" y=\"-1.25\" width=\"9\" height=\"2.5\" rx=\"0.3\"/><rect x=\"2.5\" y=\"-1.25\" width=\"2.0\" height=\"2.5\"/><circle cx=\"1.5\" cy=\"0\" r=\"0.6\"/><line x1=\"1.5\" y1=\"0\" x2=\"-3.0\" y2=\"0\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": -4.5,
                        "y1": -1.25,
                        "x2": 4.5,
                        "y2": -1.25
                },
                {
                        "type": "LINE",
                        "x1": 4.5,
                        "y1": -1.25,
                        "x2": 4.5,
                        "y2": 1.25
                },
                {
                        "type": "LINE",
                        "x1": 4.5,
                        "y1": 1.25,
                        "x2": -4.5,
                        "y2": 1.25
                },
                {
                        "type": "LINE",
                        "x1": -4.5,
                        "y1": 1.25,
                        "x2": -4.5,
                        "y2": -1.25
                },
                {
                        "type": "LINE",
                        "x1": 2.3,
                        "y1": -1.25,
                        "x2": 4.5,
                        "y2": -1.25
                },
                {
                        "type": "LINE",
                        "x1": 4.5,
                        "y1": -1.25,
                        "x2": 4.5,
                        "y2": 1.25
                },
                {
                        "type": "LINE",
                        "x1": 4.5,
                        "y1": 1.25,
                        "x2": 2.3,
                        "y2": 1.25
                },
                {
                        "type": "LINE",
                        "x1": 2.3,
                        "y1": 1.25,
                        "x2": 2.3,
                        "y2": -1.25
                },
                {
                        "type": "LINE",
                        "x1": 3.8,
                        "y1": -1.1,
                        "x2": 3.8,
                        "y2": 1.1
                },
                {
                        "type": "CIRCLE",
                        "cx": 1.2,
                        "cy": 0,
                        "r": 0.65
                },
                {
                        "type": "LINE",
                        "x1": 1.2,
                        "y1": 0,
                        "x2": -3.2,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 1.2,
                        "y1": -1.25,
                        "x2": 1.2,
                        "y2": -1.75
                },
                {
                        "type": "LINE",
                        "x1": 1.2,
                        "y1": 1.25,
                        "x2": 1.2,
                        "y2": 1.75
                },
                {
                        "type": "LINE",
                        "x1": -4.3,
                        "y1": -1.15,
                        "x2": 0.9,
                        "y2": -1.15
                },
                {
                        "type": "LINE",
                        "x1": 0.9,
                        "y1": -1.15,
                        "x2": 0.9,
                        "y2": 1.15
                },
                {
                        "type": "LINE",
                        "x1": 0.9,
                        "y1": 1.15,
                        "x2": -4.3,
                        "y2": 1.15
                },
                {
                        "type": "LINE",
                        "x1": -4.3,
                        "y1": 1.15,
                        "x2": -4.3,
                        "y2": -1.15
                }
        ]
},

    "FIRE_TRUCK": {
        "id": "FIRE_TRUCK",
        "name": "Caminhão de bombeiros",
        "name_en": "Fire Engine Truck",
        "category": "mobility",
        "categoryName": "Mobilidade & Transportes",
        "dimensions": "9.50m x 2.60m",
        "layer": "Transportes",
        "color": "#f59e0b",
        "svgPreview": "<svg viewBox=\"-5 -1.5 10 3\" width=\"60\" height=\"22\" stroke=\"#f59e0b\" stroke-width=\"0.08\" fill=\"none\"><rect x=\"-4.75\" y=\"-1.3\" width=\"9.5\" height=\"2.6\" rx=\"0.3\"/><line x1=\"2.8\" y1=\"-1.2\" x2=\"2.8\" y2=\"1.2\"/><rect x=\"-3.5\" y=\"-0.4\" width=\"5.0\" height=\"0.8\"/><circle cx=\"4.0\" cy=\"0\" r=\"0.2\" fill=\"#f59e0b\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": -4.75,
                        "y1": -1.3,
                        "x2": 4.75,
                        "y2": -1.3
                },
                {
                        "type": "LINE",
                        "x1": 4.75,
                        "y1": -1.3,
                        "x2": 4.75,
                        "y2": 1.3
                },
                {
                        "type": "LINE",
                        "x1": 4.75,
                        "y1": 1.3,
                        "x2": -4.75,
                        "y2": 1.3
                },
                {
                        "type": "LINE",
                        "x1": -4.75,
                        "y1": 1.3,
                        "x2": -4.75,
                        "y2": -1.3
                },
                {
                        "type": "LINE",
                        "x1": 2.0,
                        "y1": -1.3,
                        "x2": 4.75,
                        "y2": -1.3
                },
                {
                        "type": "LINE",
                        "x1": 4.75,
                        "y1": -1.3,
                        "x2": 4.75,
                        "y2": 1.3
                },
                {
                        "type": "LINE",
                        "x1": 4.75,
                        "y1": 1.3,
                        "x2": 2.0,
                        "y2": 1.3
                },
                {
                        "type": "LINE",
                        "x1": 2.0,
                        "y1": 1.3,
                        "x2": 2.0,
                        "y2": -1.3
                },
                {
                        "type": "LINE",
                        "x1": 3.8,
                        "y1": -1.15,
                        "x2": 3.8,
                        "y2": 1.15
                },
                {
                        "type": "CIRCLE",
                        "cx": 4.0,
                        "cy": 0,
                        "r": 0.25
                },
                {
                        "type": "LINE",
                        "x1": -4.2,
                        "y1": -0.4,
                        "x2": 1.6,
                        "y2": -0.4
                },
                {
                        "type": "LINE",
                        "x1": 1.6,
                        "y1": -0.4,
                        "x2": 1.6,
                        "y2": 0.4
                },
                {
                        "type": "LINE",
                        "x1": 1.6,
                        "y1": 0.4,
                        "x2": -4.2,
                        "y2": 0.4
                },
                {
                        "type": "LINE",
                        "x1": -4.2,
                        "y1": 0.4,
                        "x2": -4.2,
                        "y2": -0.4
                },
                {
                        "type": "LINE",
                        "x1": -3.2,
                        "y1": -0.4,
                        "x2": -3.2,
                        "y2": 0.4
                },
                {
                        "type": "LINE",
                        "x1": -2.2,
                        "y1": -0.4,
                        "x2": -2.2,
                        "y2": 0.4
                },
                {
                        "type": "LINE",
                        "x1": -1.2,
                        "y1": -0.4,
                        "x2": -1.2,
                        "y2": 0.4
                },
                {
                        "type": "LINE",
                        "x1": -0.2,
                        "y1": -0.4,
                        "x2": -0.2,
                        "y2": 0.4
                },
                {
                        "type": "CIRCLE",
                        "cx": 1.0,
                        "cy": 0,
                        "r": 0.5
                }
        ]
},

    "AMBULANCE_RESCUE": {
        "id": "AMBULANCE_RESCUE",
        "name": "Ambulância",
        "name_en": "Emergency Ambulance",
        "category": "mobility",
        "categoryName": "Mobilidade & Transportes",
        "dimensions": "5.80m x 2.20m",
        "layer": "Transportes",
        "color": "#f59e0b",
        "svgPreview": "<svg viewBox=\"-3.2 -1.3 6.4 2.6\" width=\"56\" height=\"24\" stroke=\"#f59e0b\" stroke-width=\"0.06\" fill=\"none\"><rect x=\"-2.9\" y=\"-1.1\" width=\"5.8\" height=\"2.2\" rx=\"0.3\"/><line x1=\"1.3\" y1=\"-1.0\" x2=\"1.3\" y2=\"1.0\"/><rect x=\"-2.0\" y=\"-0.4\" width=\"2.4\" height=\"0.8\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": -2.9,
                        "y1": -1.1,
                        "x2": 2.9,
                        "y2": -1.1
                },
                {
                        "type": "LINE",
                        "x1": 2.9,
                        "y1": -1.1,
                        "x2": 2.9,
                        "y2": 1.1
                },
                {
                        "type": "LINE",
                        "x1": 2.9,
                        "y1": 1.1,
                        "x2": -2.9,
                        "y2": 1.1
                },
                {
                        "type": "LINE",
                        "x1": -2.9,
                        "y1": 1.1,
                        "x2": -2.9,
                        "y2": -1.1
                },
                {
                        "type": "LINE",
                        "x1": 1.2,
                        "y1": -1.05,
                        "x2": 1.2,
                        "y2": 1.05
                },
                {
                        "type": "LINE",
                        "x1": 2.2,
                        "y1": -0.95,
                        "x2": 2.2,
                        "y2": 0.95
                },
                {
                        "type": "LINE",
                        "x1": -2.0,
                        "y1": -0.35,
                        "x2": 0.2,
                        "y2": -0.35
                },
                {
                        "type": "LINE",
                        "x1": 0.2,
                        "y1": -0.35,
                        "x2": 0.2,
                        "y2": 0.35
                },
                {
                        "type": "LINE",
                        "x1": 0.2,
                        "y1": 0.35,
                        "x2": -2.0,
                        "y2": 0.35
                },
                {
                        "type": "LINE",
                        "x1": -2.0,
                        "y1": 0.35,
                        "x2": -2.0,
                        "y2": -0.35
                },
                {
                        "type": "CIRCLE",
                        "cx": 0.6,
                        "cy": 0.5,
                        "r": 0.25
                },
                {
                        "type": "LINE",
                        "x1": -0.5,
                        "y1": 0,
                        "x2": 0.1,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": -0.2,
                        "y1": -0.3,
                        "x2": -0.2,
                        "y2": 0.3
                }
        ]
},

    "POLICE_CAR": {
        "id": "POLICE_CAR",
        "name": "Viatura policial",
        "name_en": "Police Patrol Cruiser",
        "category": "mobility",
        "categoryName": "Mobilidade & Transportes",
        "dimensions": "4.80m x 1.90m",
        "layer": "Transportes",
        "color": "#f59e0b",
        "svgPreview": "<svg viewBox=\"-2.6 -1.1 5.2 2.2\" width=\"54\" height=\"24\" stroke=\"#f59e0b\" stroke-width=\"0.06\" fill=\"none\"><rect x=\"-2.4\" y=\"-0.95\" width=\"4.8\" height=\"1.9\" rx=\"0.4\"/><line x1=\"0.8\" y1=\"-0.85\" x2=\"0.8\" y2=\"0.85\"/><rect x=\"-0.2\" y=\"-0.5\" width=\"0.4\" height=\"1.0\" fill=\"#f59e0b\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": -2.4,
                        "y1": -0.95,
                        "x2": 2.4,
                        "y2": -0.95
                },
                {
                        "type": "LINE",
                        "x1": 2.4,
                        "y1": -0.95,
                        "x2": 2.4,
                        "y2": 0.95
                },
                {
                        "type": "LINE",
                        "x1": 2.4,
                        "y1": 0.95,
                        "x2": -2.4,
                        "y2": 0.95
                },
                {
                        "type": "LINE",
                        "x1": -2.4,
                        "y1": 0.95,
                        "x2": -2.4,
                        "y2": -0.95
                },
                {
                        "type": "LINE",
                        "x1": 0.8,
                        "y1": -0.8,
                        "x2": 0.8,
                        "y2": 0.8
                },
                {
                        "type": "LINE",
                        "x1": -1.4,
                        "y1": -0.75,
                        "x2": -1.4,
                        "y2": 0.75
                },
                {
                        "type": "LINE",
                        "x1": -0.15,
                        "y1": -0.55,
                        "x2": 0.15,
                        "y2": -0.55
                },
                {
                        "type": "LINE",
                        "x1": 0.15,
                        "y1": -0.55,
                        "x2": 0.15,
                        "y2": 0.55
                },
                {
                        "type": "LINE",
                        "x1": 0.15,
                        "y1": 0.55,
                        "x2": -0.15,
                        "y2": 0.55
                },
                {
                        "type": "LINE",
                        "x1": -0.15,
                        "y1": 0.55,
                        "x2": -0.15,
                        "y2": -0.55
                },
                {
                        "type": "LINE",
                        "x1": 2.45,
                        "y1": -0.5,
                        "x2": 2.45,
                        "y2": 0.5
                }
        ]
},

    "FORKLIFT": {
        "id": "FORKLIFT",
        "name": "Empilhadeira",
        "name_en": "Industrial Forklift",
        "category": "mobility",
        "categoryName": "Mobilidade & Transportes",
        "dimensions": "2.80m x 1.20m",
        "layer": "Transportes",
        "color": "#f59e0b",
        "svgPreview": "<svg viewBox=\"-1.6 -0.8 3.2 1.6\" width=\"48\" height=\"28\" stroke=\"#f59e0b\" stroke-width=\"0.04\" fill=\"none\"><rect x=\"-1.2\" y=\"-0.6\" width=\"1.6\" height=\"1.2\" rx=\"0.2\"/><rect x=\"-0.5\" y=\"-0.45\" width=\"0.8\" height=\"0.9\"/><line x1=\"0.4\" y1=\"-0.3\" x2=\"1.3\" y2=\"-0.3\"/><line x1=\"0.4\" y1=\"0.3\" x2=\"1.3\" y2=\"0.3\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": -1.2,
                        "y1": -0.6,
                        "x2": 0.4,
                        "y2": -0.6
                },
                {
                        "type": "LINE",
                        "x1": 0.4,
                        "y1": -0.6,
                        "x2": 0.4,
                        "y2": 0.6
                },
                {
                        "type": "LINE",
                        "x1": 0.4,
                        "y1": 0.6,
                        "x2": -1.2,
                        "y2": 0.6
                },
                {
                        "type": "LINE",
                        "x1": -1.2,
                        "y1": 0.6,
                        "x2": -1.2,
                        "y2": -0.6
                },
                {
                        "type": "LINE",
                        "x1": -0.55,
                        "y1": -0.45,
                        "x2": 0.3,
                        "y2": -0.45
                },
                {
                        "type": "LINE",
                        "x1": 0.3,
                        "y1": -0.45,
                        "x2": 0.3,
                        "y2": 0.45
                },
                {
                        "type": "LINE",
                        "x1": 0.3,
                        "y1": 0.45,
                        "x2": -0.55,
                        "y2": 0.45
                },
                {
                        "type": "LINE",
                        "x1": -0.55,
                        "y1": 0.45,
                        "x2": -0.55,
                        "y2": -0.45
                },
                {
                        "type": "CIRCLE",
                        "cx": -0.15,
                        "cy": 0,
                        "r": 0.22
                },
                {
                        "type": "LINE",
                        "x1": 0.4,
                        "y1": -0.45,
                        "x2": 0.55,
                        "y2": -0.45
                },
                {
                        "type": "LINE",
                        "x1": 0.55,
                        "y1": -0.45,
                        "x2": 0.55,
                        "y2": 0.45
                },
                {
                        "type": "LINE",
                        "x1": 0.55,
                        "y1": 0.45,
                        "x2": 0.4,
                        "y2": 0.45
                },
                {
                        "type": "LINE",
                        "x1": 0.4,
                        "y1": 0.45,
                        "x2": 0.4,
                        "y2": -0.45
                },
                {
                        "type": "LINE",
                        "x1": 0.55,
                        "y1": -0.3,
                        "x2": 1.45,
                        "y2": -0.3
                },
                {
                        "type": "LINE",
                        "x1": 0.55,
                        "y1": 0.3,
                        "x2": 1.45,
                        "y2": 0.3
                }
        ]
},

    "BACKHOE_LOADER": {
        "id": "BACKHOE_LOADER",
        "name": "Retroescavadeira",
        "name_en": "Backhoe Loader",
        "category": "mobility",
        "categoryName": "Mobilidade & Transportes",
        "dimensions": "7.20m x 2.40m",
        "layer": "Transportes",
        "color": "#f59e0b",
        "svgPreview": "<svg viewBox=\"-3.8 -1.4 7.6 2.8\" width=\"56\" height=\"24\" stroke=\"#f59e0b\" stroke-width=\"0.07\" fill=\"none\"><rect x=\"-1.8\" y=\"-1.1\" width=\"3.6\" height=\"2.2\" rx=\"0.2\"/><rect x=\"1.8\" y=\"-1.2\" width=\"1.2\" height=\"2.4\"/><line x1=\"-1.8\" y1=\"0\" x2=\"-3.5\" y2=\"0\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": -1.8,
                        "y1": -1.1,
                        "x2": 1.8,
                        "y2": -1.1
                },
                {
                        "type": "LINE",
                        "x1": 1.8,
                        "y1": -1.1,
                        "x2": 1.8,
                        "y2": 1.1
                },
                {
                        "type": "LINE",
                        "x1": 1.8,
                        "y1": 1.1,
                        "x2": -1.8,
                        "y2": 1.1
                },
                {
                        "type": "LINE",
                        "x1": -1.8,
                        "y1": 1.1,
                        "x2": -1.8,
                        "y2": -1.1
                },
                {
                        "type": "LINE",
                        "x1": -0.9,
                        "y1": -0.8,
                        "x2": 0.7,
                        "y2": -0.8
                },
                {
                        "type": "LINE",
                        "x1": 0.7,
                        "y1": -0.8,
                        "x2": 0.7,
                        "y2": 0.8
                },
                {
                        "type": "LINE",
                        "x1": 0.7,
                        "y1": 0.8,
                        "x2": -0.9,
                        "y2": 0.8
                },
                {
                        "type": "LINE",
                        "x1": -0.9,
                        "y1": 0.8,
                        "x2": -0.9,
                        "y2": -0.8
                },
                {
                        "type": "LINE",
                        "x1": 1.8,
                        "y1": -1.2,
                        "x2": 3.0,
                        "y2": -1.2
                },
                {
                        "type": "LINE",
                        "x1": 3.0,
                        "y1": -1.2,
                        "x2": 3.0,
                        "y2": 1.2
                },
                {
                        "type": "LINE",
                        "x1": 3.0,
                        "y1": 1.2,
                        "x2": 1.8,
                        "y2": 1.2
                },
                {
                        "type": "LINE",
                        "x1": 1.8,
                        "y1": 1.2,
                        "x2": 1.8,
                        "y2": -1.2
                },
                {
                        "type": "LINE",
                        "x1": -1.8,
                        "y1": 0,
                        "x2": -3.2,
                        "y2": 0.3
                },
                {
                        "type": "LINE",
                        "x1": -3.2,
                        "y1": 0.3,
                        "x2": -4.5,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": -4.8,
                        "y1": -0.35,
                        "x2": -4.4,
                        "y2": -0.35
                },
                {
                        "type": "LINE",
                        "x1": -4.4,
                        "y1": -0.35,
                        "x2": -4.4,
                        "y2": 0.35
                },
                {
                        "type": "LINE",
                        "x1": -4.4,
                        "y1": 0.35,
                        "x2": -4.8,
                        "y2": 0.35
                },
                {
                        "type": "LINE",
                        "x1": -4.8,
                        "y1": 0.35,
                        "x2": -4.8,
                        "y2": -0.35
                }
        ]
},

    "HYDRAULIC_EXCAVATOR": {
        "id": "HYDRAULIC_EXCAVATOR",
        "name": "Escavadeira hidráulica",
        "name_en": "Hydraulic Crawler Excavator",
        "category": "mobility",
        "categoryName": "Mobilidade & Transportes",
        "dimensions": "8.50m x 3.00m",
        "layer": "Transportes",
        "color": "#f59e0b",
        "svgPreview": "<svg viewBox=\"-4.5 -1.7 9 3.4\" width=\"56\" height=\"24\" stroke=\"#f59e0b\" stroke-width=\"0.08\" fill=\"none\"><rect x=\"-2.2\" y=\"-1.5\" width=\"4.4\" height=\"0.6\"/><rect x=\"-2.2\" y=\"0.9\" width=\"4.4\" height=\"0.6\"/><rect x=\"-1.8\" y=\"-0.8\" width=\"3.4\" height=\"1.6\"/><line x1=\"1.6\" y1=\"0\" x2=\"4.0\" y2=\"0\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": -2.2,
                        "y1": -1.5,
                        "x2": 2.2,
                        "y2": -1.5
                },
                {
                        "type": "LINE",
                        "x1": 2.2,
                        "y1": -1.5,
                        "x2": 2.2,
                        "y2": -0.9
                },
                {
                        "type": "LINE",
                        "x1": 2.2,
                        "y1": -0.9,
                        "x2": -2.2,
                        "y2": -0.9
                },
                {
                        "type": "LINE",
                        "x1": -2.2,
                        "y1": -0.9,
                        "x2": -2.2,
                        "y2": -1.5
                },
                {
                        "type": "LINE",
                        "x1": -2.2,
                        "y1": 0.9,
                        "x2": 2.2,
                        "y2": 0.9
                },
                {
                        "type": "LINE",
                        "x1": 2.2,
                        "y1": 0.9,
                        "x2": 2.2,
                        "y2": 1.5
                },
                {
                        "type": "LINE",
                        "x1": 2.2,
                        "y1": 1.5,
                        "x2": -2.2,
                        "y2": 1.5
                },
                {
                        "type": "LINE",
                        "x1": -2.2,
                        "y1": 1.5,
                        "x2": -2.2,
                        "y2": 0.9
                },
                {
                        "type": "CIRCLE",
                        "cx": 0,
                        "cy": 0,
                        "r": 1.1
                },
                {
                        "type": "LINE",
                        "x1": -1.8,
                        "y1": -0.8,
                        "x2": 1.6,
                        "y2": -0.8
                },
                {
                        "type": "LINE",
                        "x1": 1.6,
                        "y1": -0.8,
                        "x2": 1.6,
                        "y2": 0.8
                },
                {
                        "type": "LINE",
                        "x1": 1.6,
                        "y1": 0.8,
                        "x2": -1.8,
                        "y2": 0.8
                },
                {
                        "type": "LINE",
                        "x1": -1.8,
                        "y1": 0.8,
                        "x2": -1.8,
                        "y2": -0.8
                },
                {
                        "type": "LINE",
                        "x1": 0.2,
                        "y1": 0.1,
                        "x2": 1.4,
                        "y2": 0.1
                },
                {
                        "type": "LINE",
                        "x1": 1.4,
                        "y1": 0.1,
                        "x2": 1.4,
                        "y2": 0.8
                },
                {
                        "type": "LINE",
                        "x1": 1.4,
                        "y1": 0.8,
                        "x2": 0.2,
                        "y2": 0.8
                },
                {
                        "type": "LINE",
                        "x1": 0.2,
                        "y1": 0.8,
                        "x2": 0.2,
                        "y2": 0.1
                },
                {
                        "type": "LINE",
                        "x1": 1.6,
                        "y1": -0.2,
                        "x2": 4.0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 4.0,
                        "y1": -0.4,
                        "x2": 4.8,
                        "y2": -0.4
                },
                {
                        "type": "LINE",
                        "x1": 4.8,
                        "y1": -0.4,
                        "x2": 4.8,
                        "y2": 0.4
                },
                {
                        "type": "LINE",
                        "x1": 4.8,
                        "y1": 0.4,
                        "x2": 4.0,
                        "y2": 0.4
                },
                {
                        "type": "LINE",
                        "x1": 4.0,
                        "y1": 0.4,
                        "x2": 4.0,
                        "y2": -0.4
                }
        ]
},

    "MOBILE_CRANE": {
        "id": "MOBILE_CRANE",
        "name": "Guindaste telescópico",
        "name_en": "All-Terrain Mobile Crane",
        "category": "mobility",
        "categoryName": "Mobilidade & Transportes",
        "dimensions": "12.50m x 2.80m",
        "layer": "Transportes",
        "color": "#f59e0b",
        "svgPreview": "<svg viewBox=\"-6.5 -1.7 13 3.4\" width=\"65\" height=\"20\" stroke=\"#f59e0b\" stroke-width=\"0.08\" fill=\"none\"><rect x=\"-6\" y=\"-1.3\" width=\"12\" height=\"2.6\" rx=\"0.3\"/><rect x=\"-5\" y=\"-0.5\" width=\"10\" height=\"1.0\"/><circle cx=\"-2\" cy=\"0\" r=\"1.1\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": -6.0,
                        "y1": -1.3,
                        "x2": 6.0,
                        "y2": -1.3
                },
                {
                        "type": "LINE",
                        "x1": 6.0,
                        "y1": -1.3,
                        "x2": 6.0,
                        "y2": 1.3
                },
                {
                        "type": "LINE",
                        "x1": 6.0,
                        "y1": 1.3,
                        "x2": -6.0,
                        "y2": 1.3
                },
                {
                        "type": "LINE",
                        "x1": -6.0,
                        "y1": 1.3,
                        "x2": -6.0,
                        "y2": -1.3
                },
                {
                        "type": "LINE",
                        "x1": 4.5,
                        "y1": -1.3,
                        "x2": 6.0,
                        "y2": -1.3
                },
                {
                        "type": "LINE",
                        "x1": 6.0,
                        "y1": -1.3,
                        "x2": 6.0,
                        "y2": 1.3
                },
                {
                        "type": "LINE",
                        "x1": 6.0,
                        "y1": 1.3,
                        "x2": 4.5,
                        "y2": 1.3
                },
                {
                        "type": "LINE",
                        "x1": 4.5,
                        "y1": 1.3,
                        "x2": 4.5,
                        "y2": -1.3
                },
                {
                        "type": "CIRCLE",
                        "cx": -1.5,
                        "cy": 0,
                        "r": 1.2
                },
                {
                        "type": "LINE",
                        "x1": -5.5,
                        "y1": -0.5,
                        "x2": 5.0,
                        "y2": -0.5
                },
                {
                        "type": "LINE",
                        "x1": 5.0,
                        "y1": -0.5,
                        "x2": 5.0,
                        "y2": 0.5
                },
                {
                        "type": "LINE",
                        "x1": 5.0,
                        "y1": 0.5,
                        "x2": -5.5,
                        "y2": 0.5
                },
                {
                        "type": "LINE",
                        "x1": -5.5,
                        "y1": 0.5,
                        "x2": -5.5,
                        "y2": -0.5
                },
                {
                        "type": "LINE",
                        "x1": 3.5,
                        "y1": -2.1,
                        "x2": 4.3,
                        "y2": -2.1
                },
                {
                        "type": "LINE",
                        "x1": 4.3,
                        "y1": -2.1,
                        "x2": 4.3,
                        "y2": -1.3
                },
                {
                        "type": "LINE",
                        "x1": 4.3,
                        "y1": -1.3,
                        "x2": 3.5,
                        "y2": -1.3
                },
                {
                        "type": "LINE",
                        "x1": 3.5,
                        "y1": -1.3,
                        "x2": 3.5,
                        "y2": -2.1
                },
                {
                        "type": "LINE",
                        "x1": 3.5,
                        "y1": 1.3,
                        "x2": 4.3,
                        "y2": 1.3
                },
                {
                        "type": "LINE",
                        "x1": 4.3,
                        "y1": 1.3,
                        "x2": 4.3,
                        "y2": 2.1
                },
                {
                        "type": "LINE",
                        "x1": 4.3,
                        "y1": 2.1,
                        "x2": 3.5,
                        "y2": 2.1
                },
                {
                        "type": "LINE",
                        "x1": 3.5,
                        "y1": 2.1,
                        "x2": 3.5,
                        "y2": 1.3
                },
                {
                        "type": "LINE",
                        "x1": -4.5,
                        "y1": -2.1,
                        "x2": -3.7,
                        "y2": -2.1
                },
                {
                        "type": "LINE",
                        "x1": -3.7,
                        "y1": -2.1,
                        "x2": -3.7,
                        "y2": -1.3
                },
                {
                        "type": "LINE",
                        "x1": -3.7,
                        "y1": -1.3,
                        "x2": -4.5,
                        "y2": -1.3
                },
                {
                        "type": "LINE",
                        "x1": -4.5,
                        "y1": -1.3,
                        "x2": -4.5,
                        "y2": -2.1
                },
                {
                        "type": "LINE",
                        "x1": -4.5,
                        "y1": 1.3,
                        "x2": -3.7,
                        "y2": 1.3
                },
                {
                        "type": "LINE",
                        "x1": -3.7,
                        "y1": 1.3,
                        "x2": -3.7,
                        "y2": 2.1
                },
                {
                        "type": "LINE",
                        "x1": -3.7,
                        "y1": 2.1,
                        "x2": -4.5,
                        "y2": 2.1
                },
                {
                        "type": "LINE",
                        "x1": -4.5,
                        "y1": 2.1,
                        "x2": -4.5,
                        "y2": 1.3
                }
        ]
},

    "LOWBOY_SEMITRAILER": {
        "id": "LOWBOY_SEMITRAILER",
        "name": "Carreta prancha",
        "name_en": "Lowboy Equipment Trailer",
        "category": "mobility",
        "categoryName": "Mobilidade & Transportes",
        "dimensions": "16.50m x 3.00m",
        "layer": "Transportes",
        "color": "#f59e0b",
        "svgPreview": "<svg viewBox=\"-8.5 -1.7 17 3.4\" width=\"70\" height=\"18\" stroke=\"#f59e0b\" stroke-width=\"0.08\" fill=\"none\"><rect x=\"4.5\" y=\"-1.3\" width=\"3.5\" height=\"2.6\" rx=\"0.3\"/><rect x=\"-8\" y=\"-1.5\" width=\"12.5\" height=\"3.0\"/><line x1=\"-8\" y1=\"-0.8\" x2=\"4.5\" y2=\"-0.8\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 4.5,
                        "y1": -1.3,
                        "x2": 8.0,
                        "y2": -1.3
                },
                {
                        "type": "LINE",
                        "x1": 8.0,
                        "y1": -1.3,
                        "x2": 8.0,
                        "y2": 1.3
                },
                {
                        "type": "LINE",
                        "x1": 8.0,
                        "y1": 1.3,
                        "x2": 4.5,
                        "y2": 1.3
                },
                {
                        "type": "LINE",
                        "x1": 4.5,
                        "y1": 1.3,
                        "x2": 4.5,
                        "y2": -1.3
                },
                {
                        "type": "CIRCLE",
                        "cx": 5.0,
                        "cy": 0,
                        "r": 0.4
                },
                {
                        "type": "LINE",
                        "x1": -8.0,
                        "y1": -1.5,
                        "x2": 4.5,
                        "y2": -1.5
                },
                {
                        "type": "LINE",
                        "x1": 4.5,
                        "y1": -1.5,
                        "x2": 4.5,
                        "y2": 1.5
                },
                {
                        "type": "LINE",
                        "x1": 4.5,
                        "y1": 1.5,
                        "x2": -8.0,
                        "y2": 1.5
                },
                {
                        "type": "LINE",
                        "x1": -8.0,
                        "y1": 1.5,
                        "x2": -8.0,
                        "y2": -1.5
                },
                {
                        "type": "LINE",
                        "x1": -8.0,
                        "y1": -0.75,
                        "x2": 4.5,
                        "y2": -0.75
                },
                {
                        "type": "LINE",
                        "x1": -8.0,
                        "y1": 0.75,
                        "x2": 4.5,
                        "y2": 0.75
                }
        ]
},

    "CONCRETE_MIXER_TRUCK": {
        "id": "CONCRETE_MIXER_TRUCK",
        "name": "Caminhão betoneira",
        "name_en": "Concrete Mixer Truck",
        "category": "mobility",
        "categoryName": "Mobilidade & Transportes",
        "dimensions": "8.80m x 2.50m",
        "layer": "Transportes",
        "color": "#f59e0b",
        "svgPreview": "<svg viewBox=\"-4.6 -1.4 9.2 2.8\" width=\"60\" height=\"22\" stroke=\"#f59e0b\" stroke-width=\"0.08\" fill=\"none\"><rect x=\"-4.3\" y=\"-1.2\" width=\"8.6\" height=\"2.4\" rx=\"0.3\"/><rect x=\"2.5\" y=\"-1.2\" width=\"1.8\" height=\"2.4\"/><polygon points=\"-3.5,0 -2.5,1.0 1.5,0.7 2.0,0 1.5,-0.7 -2.5,-1.0\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": -4.3,
                        "y1": -1.2,
                        "x2": 4.3,
                        "y2": -1.2
                },
                {
                        "type": "LINE",
                        "x1": 4.3,
                        "y1": -1.2,
                        "x2": 4.3,
                        "y2": 1.2
                },
                {
                        "type": "LINE",
                        "x1": 4.3,
                        "y1": 1.2,
                        "x2": -4.3,
                        "y2": 1.2
                },
                {
                        "type": "LINE",
                        "x1": -4.3,
                        "y1": 1.2,
                        "x2": -4.3,
                        "y2": -1.2
                },
                {
                        "type": "LINE",
                        "x1": 2.3,
                        "y1": -1.2,
                        "x2": 4.3,
                        "y2": -1.2
                },
                {
                        "type": "LINE",
                        "x1": 4.3,
                        "y1": -1.2,
                        "x2": 4.3,
                        "y2": 1.2
                },
                {
                        "type": "LINE",
                        "x1": 4.3,
                        "y1": 1.2,
                        "x2": 2.3,
                        "y2": 1.2
                },
                {
                        "type": "LINE",
                        "x1": 2.3,
                        "y1": 1.2,
                        "x2": 2.3,
                        "y2": -1.2
                },
                {
                        "type": "POLYLINE",
                        "points": [
                                {
                                        "x": 0.6,
                                        "y": 0.0
                                },
                                {
                                        "x": 0.453,
                                        "y": 0.55
                                },
                                {
                                        "x": 0.05,
                                        "y": 0.953
                                },
                                {
                                        "x": -0.5,
                                        "y": 1.1
                                },
                                {
                                        "x": -1.05,
                                        "y": 0.953
                                },
                                {
                                        "x": -1.453,
                                        "y": 0.55
                                },
                                {
                                        "x": -1.6,
                                        "y": 0.0
                                },
                                {
                                        "x": -1.453,
                                        "y": -0.55
                                },
                                {
                                        "x": -1.05,
                                        "y": -0.953
                                },
                                {
                                        "x": -0.5,
                                        "y": -1.1
                                },
                                {
                                        "x": 0.05,
                                        "y": -0.953
                                },
                                {
                                        "x": 0.453,
                                        "y": -0.55
                                }
                        ],
                        "closed": true
                },
                {
                        "type": "LINE",
                        "x1": -3.2,
                        "y1": -0.5,
                        "x2": 1.6,
                        "y2": -0.9
                },
                {
                        "type": "LINE",
                        "x1": -3.2,
                        "y1": 0.5,
                        "x2": 1.6,
                        "y2": 0.9
                },
                {
                        "type": "LINE",
                        "x1": -3.8,
                        "y1": 0,
                        "x2": -4.5,
                        "y2": 0.4
                }
        ]
},

    "MOTORCYCLE_TOP": {
        "id": "MOTORCYCLE_TOP",
        "name": "Motocicleta vista superior",
        "name_en": "Motorcycle (Top View)",
        "category": "mobility",
        "categoryName": "Mobilidade & Transportes",
        "dimensions": "2.10m x 0.85m",
        "layer": "Transportes",
        "color": "#f59e0b",
        "svgPreview": "<svg viewBox=\"-1.2 -0.5 2.4 1.0\" width=\"48\" height=\"24\" stroke=\"#f59e0b\" stroke-width=\"0.04\" fill=\"none\"><line x1=\"-0.9\" y1=\"0\" x2=\"0.9\" y2=\"0\" stroke-width=\"0.1\"/><line x1=\"0.5\" y1=\"-0.4\" x2=\"0.5\" y2=\"0.4\"/><rect x=\"-0.2\" y=\"-0.2\" width=\"0.8\" height=\"0.4\" rx=\"0.1\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0.75,
                        "y1": -0.06,
                        "x2": 1.1,
                        "y2": -0.06
                },
                {
                        "type": "LINE",
                        "x1": 1.1,
                        "y1": -0.06,
                        "x2": 1.1,
                        "y2": 0.06
                },
                {
                        "type": "LINE",
                        "x1": 1.1,
                        "y1": 0.06,
                        "x2": 0.75,
                        "y2": 0.06
                },
                {
                        "type": "LINE",
                        "x1": 0.75,
                        "y1": 0.06,
                        "x2": 0.75,
                        "y2": -0.06
                },
                {
                        "type": "LINE",
                        "x1": -0.95,
                        "y1": -0.08,
                        "x2": -0.6,
                        "y2": -0.08
                },
                {
                        "type": "LINE",
                        "x1": -0.6,
                        "y1": -0.08,
                        "x2": -0.6,
                        "y2": 0.08
                },
                {
                        "type": "LINE",
                        "x1": -0.6,
                        "y1": 0.08,
                        "x2": -0.95,
                        "y2": 0.08
                },
                {
                        "type": "LINE",
                        "x1": -0.95,
                        "y1": 0.08,
                        "x2": -0.95,
                        "y2": -0.08
                },
                {
                        "type": "LINE",
                        "x1": 0.5,
                        "y1": -0.42,
                        "x2": 0.5,
                        "y2": 0.42
                },
                {
                        "type": "CIRCLE",
                        "cx": 0.55,
                        "cy": -0.4,
                        "r": 0.04
                },
                {
                        "type": "CIRCLE",
                        "cx": 0.55,
                        "cy": 0.4,
                        "r": 0.04
                },
                {
                        "type": "LINE",
                        "x1": -0.2,
                        "y1": -0.18,
                        "x2": 0.45,
                        "y2": -0.18
                },
                {
                        "type": "LINE",
                        "x1": 0.45,
                        "y1": -0.18,
                        "x2": 0.45,
                        "y2": 0.18
                },
                {
                        "type": "LINE",
                        "x1": 0.45,
                        "y1": 0.18,
                        "x2": -0.2,
                        "y2": 0.18
                },
                {
                        "type": "LINE",
                        "x1": -0.2,
                        "y1": 0.18,
                        "x2": -0.2,
                        "y2": -0.18
                },
                {
                        "type": "LINE",
                        "x1": -0.65,
                        "y1": -0.15,
                        "x2": -0.2,
                        "y2": -0.15
                },
                {
                        "type": "LINE",
                        "x1": -0.2,
                        "y1": -0.15,
                        "x2": -0.2,
                        "y2": 0.15
                },
                {
                        "type": "LINE",
                        "x1": -0.2,
                        "y1": 0.15,
                        "x2": -0.65,
                        "y2": 0.15
                },
                {
                        "type": "LINE",
                        "x1": -0.65,
                        "y1": 0.15,
                        "x2": -0.65,
                        "y2": -0.15
                }
        ]
},

    "BICYCLE_TOP": {
        "id": "BICYCLE_TOP",
        "name": "Bicicleta vista superior",
        "name_en": "Bicycle (Top View)",
        "category": "mobility",
        "categoryName": "Mobilidade & Transportes",
        "dimensions": "1.75m x 0.60m",
        "layer": "Transportes",
        "color": "#f59e0b",
        "svgPreview": "<svg viewBox=\"-1.0 -0.4 2.0 0.8\" width=\"48\" height=\"22\" stroke=\"#f59e0b\" stroke-width=\"0.03\" fill=\"none\"><line x1=\"-0.8\" y1=\"0\" x2=\"0.8\" y2=\"0\"/><line x1=\"0.4\" y1=\"-0.3\" x2=\"0.4\" y2=\"0.3\"/><rect x=\"-0.1\" y=\"-0.08\" width=\"0.25\" height=\"0.16\" rx=\"0.04\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0.55,
                        "y1": 0,
                        "x2": 0.85,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": -0.85,
                        "y1": 0,
                        "x2": -0.55,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 0.45,
                        "y1": -0.3,
                        "x2": 0.45,
                        "y2": 0.3
                },
                {
                        "type": "LINE",
                        "x1": -0.55,
                        "y1": 0,
                        "x2": 0.45,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": -0.15,
                        "y1": -0.08,
                        "x2": 0.1,
                        "y2": -0.08
                },
                {
                        "type": "LINE",
                        "x1": 0.1,
                        "y1": -0.08,
                        "x2": 0.1,
                        "y2": 0.08
                },
                {
                        "type": "LINE",
                        "x1": 0.1,
                        "y1": 0.08,
                        "x2": -0.15,
                        "y2": 0.08
                },
                {
                        "type": "LINE",
                        "x1": -0.15,
                        "y1": 0.08,
                        "x2": -0.15,
                        "y2": -0.08
                }
        ]
},

    "E_SCOOTER_TOP": {
        "id": "E_SCOOTER_TOP",
        "name": "Patinete elétrico",
        "name_en": "Electric Kick Scooter",
        "category": "mobility",
        "categoryName": "Mobilidade & Transportes",
        "dimensions": "1.10m x 0.45m",
        "layer": "Transportes",
        "color": "#f59e0b",
        "svgPreview": "<svg viewBox=\"-0.6 -0.3 1.2 0.6\" width=\"48\" height=\"24\" stroke=\"#f59e0b\" stroke-width=\"0.03\" fill=\"none\"><rect x=\"-0.3\" y=\"-0.08\" width=\"0.6\" height=\"0.16\" rx=\"0.04\"/><line x1=\"0.3\" y1=\"-0.2\" x2=\"0.3\" y2=\"0.2\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": -0.35,
                        "y1": -0.08,
                        "x2": 0.35,
                        "y2": -0.08
                },
                {
                        "type": "LINE",
                        "x1": 0.35,
                        "y1": -0.08,
                        "x2": 0.35,
                        "y2": 0.08
                },
                {
                        "type": "LINE",
                        "x1": 0.35,
                        "y1": 0.08,
                        "x2": -0.35,
                        "y2": 0.08
                },
                {
                        "type": "LINE",
                        "x1": -0.35,
                        "y1": 0.08,
                        "x2": -0.35,
                        "y2": -0.08
                },
                {
                        "type": "LINE",
                        "x1": 0.35,
                        "y1": -0.22,
                        "x2": 0.35,
                        "y2": 0.22
                },
                {
                        "type": "CIRCLE",
                        "cx": 0.45,
                        "cy": 0,
                        "r": 0.08
                },
                {
                        "type": "CIRCLE",
                        "cx": -0.45,
                        "cy": 0,
                        "r": 0.08
                }
        ]
},

    "EV_CHARGING_STATION": {
        "id": "EV_CHARGING_STATION",
        "name": "Estação de recarga veicular",
        "name_en": "EV Parking Stall with Charger",
        "category": "mobility",
        "categoryName": "Mobilidade & Transportes",
        "dimensions": "2.50m x 5.00m",
        "layer": "Transportes",
        "color": "#f59e0b",
        "svgPreview": "<svg viewBox=\"-0.2 -0.2 2.9 5.4\" width=\"36\" height=\"60\" stroke=\"#f59e0b\" stroke-width=\"0.08\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"2.5\" height=\"5.0\"/><rect x=\"0.7\" y=\"0.2\" width=\"1.1\" height=\"0.4\" rx=\"0.05\"/><circle cx=\"1.25\" cy=\"2.5\" r=\"0.6\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 2.5,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 2.5,
                        "y1": 0,
                        "x2": 2.5,
                        "y2": 5.0
                },
                {
                        "type": "LINE",
                        "x1": 2.5,
                        "y1": 5.0,
                        "x2": 0,
                        "y2": 5.0
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 5.0,
                        "x2": 0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 0.7,
                        "y1": 0.2,
                        "x2": 1.8,
                        "y2": 0.2
                },
                {
                        "type": "LINE",
                        "x1": 1.8,
                        "y1": 0.2,
                        "x2": 1.8,
                        "y2": 0.6
                },
                {
                        "type": "LINE",
                        "x1": 1.8,
                        "y1": 0.6,
                        "x2": 0.7,
                        "y2": 0.6
                },
                {
                        "type": "LINE",
                        "x1": 0.7,
                        "y1": 0.6,
                        "x2": 0.7,
                        "y2": 0.2
                },
                {
                        "type": "CIRCLE",
                        "cx": 1.25,
                        "cy": 2.5,
                        "r": 0.6
                },
                {
                        "type": "TEXT",
                        "x": 0.9,
                        "y": 2.6,
                        "text": "EV",
                        "height": 0.35
                }
        ]
},

    "AUTOMATIC_BARRIER": {
        "id": "AUTOMATIC_BARRIER",
        "name": "Cancela automática",
        "name_en": "Automatic Boom Barrier Gate",
        "category": "mobility",
        "categoryName": "Mobilidade & Transportes",
        "dimensions": "3.80m x 0.40m",
        "layer": "Transportes",
        "color": "#f59e0b",
        "svgPreview": "<svg viewBox=\"-0.2 -0.2 4.2 0.8\" width=\"56\" height=\"18\" stroke=\"#f59e0b\" stroke-width=\"0.04\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"0.4\" height=\"0.4\" rx=\"0.05\"/><line x1=\"0.4\" y1=\"0.2\" x2=\"3.8\" y2=\"0.2\" stroke-width=\"0.08\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 0.4,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 0.4,
                        "y1": 0,
                        "x2": 0.4,
                        "y2": 0.4
                },
                {
                        "type": "LINE",
                        "x1": 0.4,
                        "y1": 0.4,
                        "x2": 0,
                        "y2": 0.4
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0.4,
                        "x2": 0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 0.4,
                        "y1": 0.2,
                        "x2": 3.8,
                        "y2": 0.2
                },
                {
                        "type": "LINE",
                        "x1": 1.0,
                        "y1": 0.15,
                        "x2": 1.0,
                        "y2": 0.25
                },
                {
                        "type": "LINE",
                        "x1": 1.8,
                        "y1": 0.15,
                        "x2": 1.8,
                        "y2": 0.25
                },
                {
                        "type": "LINE",
                        "x1": 2.6,
                        "y1": 0.15,
                        "x2": 2.6,
                        "y2": 0.25
                },
                {
                        "type": "LINE",
                        "x1": 3.4,
                        "y1": 0.15,
                        "x2": 3.4,
                        "y2": 0.25
                }
        ]
},

    "TOLL_BOOTH": {
        "id": "TOLL_BOOTH",
        "name": "Cabine de pedágio",
        "name_en": "Highway Toll Booth",
        "category": "mobility",
        "categoryName": "Mobilidade & Transportes",
        "dimensions": "4.00m x 2.00m",
        "layer": "Transportes",
        "color": "#f59e0b",
        "svgPreview": "<svg viewBox=\"-0.2 -0.2 4.4 2.4\" width=\"54\" height=\"30\" stroke=\"#f59e0b\" stroke-width=\"0.05\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"4.0\" height=\"2.0\" rx=\"0.2\"/><rect x=\"1.0\" y=\"0.3\" width=\"2.0\" height=\"1.4\"/><line x1=\"0\" y1=\"1.0\" x2=\"1.0\" y2=\"1.0\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 4.0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 4.0,
                        "y1": 0,
                        "x2": 4.0,
                        "y2": 2.0
                },
                {
                        "type": "LINE",
                        "x1": 4.0,
                        "y1": 2.0,
                        "x2": 0,
                        "y2": 2.0
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 2.0,
                        "x2": 0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 1.0,
                        "y1": 0.4,
                        "x2": 3.0,
                        "y2": 0.4
                },
                {
                        "type": "LINE",
                        "x1": 3.0,
                        "y1": 0.4,
                        "x2": 3.0,
                        "y2": 1.6
                },
                {
                        "type": "LINE",
                        "x1": 3.0,
                        "y1": 1.6,
                        "x2": 1.0,
                        "y2": 1.6
                },
                {
                        "type": "LINE",
                        "x1": 1.0,
                        "y1": 1.6,
                        "x2": 1.0,
                        "y2": 0.4
                },
                {
                        "type": "LINE",
                        "x1": 1.0,
                        "y1": 1.0,
                        "x2": 0.3,
                        "y2": 1.0
                },
                {
                        "type": "LINE",
                        "x1": 3.2,
                        "y1": 0.4,
                        "x2": 3.2,
                        "y2": -1.8
                }
        ]
},

    "TOWER_CRANE": {
        "id": "TOWER_CRANE",
        "name": "Grua de torre",
        "name_en": "Construction Tower Crane (50m Jib)",
        "category": "construction",
        "categoryName": "Construção & Canteiro",
        "dimensions": "55.00m x 4.00m",
        "layer": "Canteiro",
        "color": "#eab308",
        "svgPreview": "<svg viewBox=\"-18 -26 58 52\" width=\"56\" height=\"50\" stroke=\"#eab308\" stroke-width=\"0.3\" fill=\"none\"><circle cx=\"0\" cy=\"0\" r=\"25\" stroke-dasharray=\"1,1\"/><rect x=\"-1.5\" y=\"-1.5\" width=\"3\" height=\"3\"/><line x1=\"-15\" y1=\"0\" x2=\"35\" y2=\"0\" stroke-width=\"0.8\"/><rect x=\"-14\" y=\"-1\" width=\"5\" height=\"2\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": -1.0,
                        "y1": -1.0,
                        "x2": 1.0,
                        "y2": -1.0
                },
                {
                        "type": "LINE",
                        "x1": 1.0,
                        "y1": -1.0,
                        "x2": 1.0,
                        "y2": 1.0
                },
                {
                        "type": "LINE",
                        "x1": 1.0,
                        "y1": 1.0,
                        "x2": -1.0,
                        "y2": 1.0
                },
                {
                        "type": "LINE",
                        "x1": -1.0,
                        "y1": 1.0,
                        "x2": -1.0,
                        "y2": -1.0
                },
                {
                        "type": "LINE",
                        "x1": -1.0,
                        "y1": -1.0,
                        "x2": 1.0,
                        "y2": 1.0
                },
                {
                        "type": "LINE",
                        "x1": -1.0,
                        "y1": 1.0,
                        "x2": 1.0,
                        "y2": -1.0
                },
                {
                        "type": "LINE",
                        "x1": 1.0,
                        "y1": -0.6,
                        "x2": 2.2,
                        "y2": -0.6
                },
                {
                        "type": "LINE",
                        "x1": 2.2,
                        "y1": -0.6,
                        "x2": 2.2,
                        "y2": 0.6
                },
                {
                        "type": "LINE",
                        "x1": 2.2,
                        "y1": 0.6,
                        "x2": 1.0,
                        "y2": 0.6
                },
                {
                        "type": "LINE",
                        "x1": 1.0,
                        "y1": 0.6,
                        "x2": 1.0,
                        "y2": -0.6
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": -0.4,
                        "x2": 50.0,
                        "y2": -0.1
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0.4,
                        "x2": 50.0,
                        "y2": 0.1
                },
                {
                        "type": "LINE",
                        "x1": 24.5,
                        "y1": -0.6,
                        "x2": 25.5,
                        "y2": -0.6
                },
                {
                        "type": "LINE",
                        "x1": 25.5,
                        "y1": -0.6,
                        "x2": 25.5,
                        "y2": 0.6
                },
                {
                        "type": "LINE",
                        "x1": 25.5,
                        "y1": 0.6,
                        "x2": 24.5,
                        "y2": 0.6
                },
                {
                        "type": "LINE",
                        "x1": 24.5,
                        "y1": 0.6,
                        "x2": 24.5,
                        "y2": -0.6
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": -0.5,
                        "x2": -15.0,
                        "y2": -0.5
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0.5,
                        "x2": -15.0,
                        "y2": 0.5
                },
                {
                        "type": "LINE",
                        "x1": -14.5,
                        "y1": -0.9,
                        "x2": -10.0,
                        "y2": -0.9
                },
                {
                        "type": "LINE",
                        "x1": -10.0,
                        "y1": -0.9,
                        "x2": -10.0,
                        "y2": 0.9
                },
                {
                        "type": "LINE",
                        "x1": -10.0,
                        "y1": 0.9,
                        "x2": -14.5,
                        "y2": 0.9
                },
                {
                        "type": "LINE",
                        "x1": -14.5,
                        "y1": 0.9,
                        "x2": -14.5,
                        "y2": -0.9
                },
                {
                        "type": "POLYLINE",
                        "points": [
                                {
                                        "x": 50.0,
                                        "y": 0.0
                                },
                                {
                                        "x": 48.296,
                                        "y": 12.941
                                },
                                {
                                        "x": 43.301,
                                        "y": 25.0
                                },
                                {
                                        "x": 35.355,
                                        "y": 35.355
                                },
                                {
                                        "x": 25.0,
                                        "y": 43.301
                                },
                                {
                                        "x": 12.941,
                                        "y": 48.296
                                },
                                {
                                        "x": 0.0,
                                        "y": 50.0
                                },
                                {
                                        "x": -12.941,
                                        "y": 48.296
                                },
                                {
                                        "x": -25.0,
                                        "y": 43.301
                                },
                                {
                                        "x": -35.355,
                                        "y": 35.355
                                },
                                {
                                        "x": -43.301,
                                        "y": 25.0
                                },
                                {
                                        "x": -48.296,
                                        "y": 12.941
                                },
                                {
                                        "x": -50.0,
                                        "y": 0.0
                                },
                                {
                                        "x": -48.296,
                                        "y": -12.941
                                },
                                {
                                        "x": -43.301,
                                        "y": -25.0
                                },
                                {
                                        "x": -35.355,
                                        "y": -35.355
                                },
                                {
                                        "x": -25.0,
                                        "y": -43.301
                                },
                                {
                                        "x": -12.941,
                                        "y": -48.296
                                },
                                {
                                        "x": -0.0,
                                        "y": -50.0
                                },
                                {
                                        "x": 12.941,
                                        "y": -48.296
                                },
                                {
                                        "x": 25.0,
                                        "y": -43.301
                                },
                                {
                                        "x": 35.355,
                                        "y": -35.355
                                },
                                {
                                        "x": 43.301,
                                        "y": -25.0
                                },
                                {
                                        "x": 48.296,
                                        "y": -12.941
                                }
                        ],
                        "closed": true
                }
        ]
},

    "HOIST_ELEVATOR": {
        "id": "HOIST_ELEVATOR",
        "name": "Elevador cremalheira",
        "name_en": "Rack & Pinion Construction Hoist",
        "category": "construction",
        "categoryName": "Construção & Canteiro",
        "dimensions": "2.40m x 1.80m",
        "layer": "Canteiro",
        "color": "#eab308",
        "svgPreview": "<svg viewBox=\"-0.2 -0.2 2.8 2.2\" width=\"48\" height=\"38\" stroke=\"#eab308\" stroke-width=\"0.04\" fill=\"none\"><rect x=\"0.4\" y=\"0\" width=\"1.6\" height=\"1.8\"/><rect x=\"0\" y=\"0.5\" width=\"0.4\" height=\"0.8\"/><line x1=\"0.4\" y1=\"0.9\" x2=\"2.0\" y2=\"0.9\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0.45,
                        "x2": 0.45,
                        "y2": 0.45
                },
                {
                        "type": "LINE",
                        "x1": 0.45,
                        "y1": 0.45,
                        "x2": 0.45,
                        "y2": 1.35
                },
                {
                        "type": "LINE",
                        "x1": 0.45,
                        "y1": 1.35,
                        "x2": 0,
                        "y2": 1.35
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 1.35,
                        "x2": 0,
                        "y2": 0.45
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0.45,
                        "x2": 0.45,
                        "y2": 1.35
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 1.35,
                        "x2": 0.45,
                        "y2": 0.45
                },
                {
                        "type": "LINE",
                        "x1": 0.45,
                        "y1": 0,
                        "x2": 2.4,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 2.4,
                        "y1": 0,
                        "x2": 2.4,
                        "y2": 1.8
                },
                {
                        "type": "LINE",
                        "x1": 2.4,
                        "y1": 1.8,
                        "x2": 0.45,
                        "y2": 1.8
                },
                {
                        "type": "LINE",
                        "x1": 0.45,
                        "y1": 1.8,
                        "x2": 0.45,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 0.45,
                        "y1": 0.9,
                        "x2": 2.4,
                        "y2": 0.9
                },
                {
                        "type": "LINE",
                        "x1": 2.4,
                        "y1": 0.15,
                        "x2": 2.4,
                        "y2": 0.75
                },
                {
                        "type": "LINE",
                        "x1": 2.4,
                        "y1": 1.05,
                        "x2": 2.4,
                        "y2": 1.65
                }
        ]
},

    "FAÇADE_SCAFFOLDING": {
        "id": "FAÇADE_SCAFFOLDING",
        "name": "Andaime fachadeiro",
        "name_en": "Façade Scaffolding Bay",
        "category": "construction",
        "categoryName": "Construção & Canteiro",
        "dimensions": "4.00m x 1.05m",
        "layer": "Canteiro",
        "color": "#eab308",
        "svgPreview": "<svg viewBox=\"-0.2 -0.2 4.4 1.45\" width=\"56\" height=\"24\" stroke=\"#eab308\" stroke-width=\"0.04\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"4.0\" height=\"1.05\"/><line x1=\"2.0\" y1=\"0\" x2=\"2.0\" y2=\"1.05\"/><line x1=\"0\" y1=\"0\" x2=\"2.0\" y2=\"1.05\"/><line x1=\"2.0\" y1=\"0\" x2=\"4.0\" y2=\"1.05\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 4.0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 4.0,
                        "y1": 0,
                        "x2": 4.0,
                        "y2": 1.05
                },
                {
                        "type": "LINE",
                        "x1": 4.0,
                        "y1": 1.05,
                        "x2": 0,
                        "y2": 1.05
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 1.05,
                        "x2": 0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 2.0,
                        "y1": 0,
                        "x2": 2.0,
                        "y2": 1.05
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 2.0,
                        "y2": 1.05
                },
                {
                        "type": "LINE",
                        "x1": 2.0,
                        "y1": 0,
                        "x2": 0,
                        "y2": 1.05
                },
                {
                        "type": "LINE",
                        "x1": 2.0,
                        "y1": 0,
                        "x2": 4.0,
                        "y2": 1.05
                },
                {
                        "type": "LINE",
                        "x1": 4.0,
                        "y1": 0,
                        "x2": 2.0,
                        "y2": 1.05
                },
                {
                        "type": "LINE",
                        "x1": 0.2,
                        "y1": 0.15,
                        "x2": 0.9,
                        "y2": 0.15
                },
                {
                        "type": "LINE",
                        "x1": 0.9,
                        "y1": 0.15,
                        "x2": 0.9,
                        "y2": 0.9
                },
                {
                        "type": "LINE",
                        "x1": 0.9,
                        "y1": 0.9,
                        "x2": 0.2,
                        "y2": 0.9
                },
                {
                        "type": "LINE",
                        "x1": 0.2,
                        "y1": 0.9,
                        "x2": 0.2,
                        "y2": 0.15
                }
        ]
},

    "STEEL_SHORING": {
        "id": "STEEL_SHORING",
        "name": "Escoramento metálico",
        "name_en": "Modular Steel Shoring Tower",
        "category": "construction",
        "categoryName": "Construção & Canteiro",
        "dimensions": "3.00m x 2.00m",
        "layer": "Canteiro",
        "color": "#eab308",
        "svgPreview": "<svg viewBox=\"-0.2 -0.2 3.4 2.4\" width=\"48\" height=\"34\" stroke=\"#eab308\" stroke-width=\"0.04\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"3.0\" height=\"2.0\"/><line x1=\"1.5\" y1=\"0\" x2=\"1.5\" y2=\"2.0\"/><line x1=\"0\" y1=\"1.0\" x2=\"3.0\" y2=\"1.0\"/><circle cx=\"0\" cy=\"0\" r=\"0.1\"/><circle cx=\"3\" cy=\"0\" r=\"0.1\"/><circle cx=\"0\" cy=\"2\" r=\"0.1\"/><circle cx=\"3\" cy=\"2\" r=\"0.1\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 3.0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 3.0,
                        "y1": 0,
                        "x2": 3.0,
                        "y2": 2.0
                },
                {
                        "type": "LINE",
                        "x1": 3.0,
                        "y1": 2.0,
                        "x2": 0,
                        "y2": 2.0
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 2.0,
                        "x2": 0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 1.5,
                        "y1": 0,
                        "x2": 1.5,
                        "y2": 2.0
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 1.0,
                        "x2": 3.0,
                        "y2": 1.0
                },
                {
                        "type": "CIRCLE",
                        "cx": 0,
                        "cy": 0,
                        "r": 0.12
                },
                {
                        "type": "CIRCLE",
                        "cx": 3.0,
                        "cy": 0,
                        "r": 0.12
                },
                {
                        "type": "CIRCLE",
                        "cx": 0,
                        "cy": 2.0,
                        "r": 0.12
                },
                {
                        "type": "CIRCLE",
                        "cx": 3.0,
                        "cy": 2.0,
                        "r": 0.12
                },
                {
                        "type": "CIRCLE",
                        "cx": 1.5,
                        "cy": 1.0,
                        "r": 0.12
                }
        ]
},

    "OFFICE_CONTAINER": {
        "id": "OFFICE_CONTAINER",
        "name": "Contêiner de obra mobiliado",
        "name_en": "Furnished 20ft Site Office Container",
        "category": "construction",
        "categoryName": "Construção & Canteiro",
        "dimensions": "6.00m x 2.40m",
        "layer": "Canteiro",
        "color": "#eab308",
        "svgPreview": "<svg viewBox=\"-0.3 -0.3 6.6 3.0\" width=\"56\" height=\"26\" stroke=\"#eab308\" stroke-width=\"0.06\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"6.0\" height=\"2.4\" rx=\"0.1\"/><rect x=\"1.5\" y=\"0.6\" width=\"2.0\" height=\"1.2\"/><rect x=\"4.8\" y=\"0\" width=\"1.2\" height=\"1.2\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 6.0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 6.0,
                        "y1": 0,
                        "x2": 6.0,
                        "y2": 2.4
                },
                {
                        "type": "LINE",
                        "x1": 6.0,
                        "y1": 2.4,
                        "x2": 0,
                        "y2": 2.4
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 2.4,
                        "x2": 0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 0.5,
                        "y1": 0,
                        "x2": 1.3,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 1.8,
                        "y1": 0.6,
                        "x2": 3.8,
                        "y2": 0.6
                },
                {
                        "type": "LINE",
                        "x1": 3.8,
                        "y1": 0.6,
                        "x2": 3.8,
                        "y2": 1.8
                },
                {
                        "type": "LINE",
                        "x1": 3.8,
                        "y1": 1.8,
                        "x2": 1.8,
                        "y2": 1.8
                },
                {
                        "type": "LINE",
                        "x1": 1.8,
                        "y1": 1.8,
                        "x2": 1.8,
                        "y2": 0.6
                },
                {
                        "type": "CIRCLE",
                        "cx": 2.3,
                        "cy": 0.35,
                        "r": 0.2
                },
                {
                        "type": "CIRCLE",
                        "cx": 3.3,
                        "cy": 0.35,
                        "r": 0.2
                },
                {
                        "type": "CIRCLE",
                        "cx": 2.3,
                        "cy": 2.05,
                        "r": 0.2
                },
                {
                        "type": "CIRCLE",
                        "cx": 3.3,
                        "cy": 2.05,
                        "r": 0.2
                },
                {
                        "type": "LINE",
                        "x1": 0.2,
                        "y1": 0.9,
                        "x2": 0.5,
                        "y2": 0.9
                },
                {
                        "type": "LINE",
                        "x1": 0.5,
                        "y1": 0.9,
                        "x2": 0.5,
                        "y2": 1.7
                },
                {
                        "type": "LINE",
                        "x1": 0.5,
                        "y1": 1.7,
                        "x2": 0.2,
                        "y2": 1.7
                },
                {
                        "type": "LINE",
                        "x1": 0.2,
                        "y1": 1.7,
                        "x2": 0.2,
                        "y2": 0.9
                },
                {
                        "type": "LINE",
                        "x1": 4.7,
                        "y1": 0,
                        "x2": 6.0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 6.0,
                        "y1": 0,
                        "x2": 6.0,
                        "y2": 1.2
                },
                {
                        "type": "LINE",
                        "x1": 6.0,
                        "y1": 1.2,
                        "x2": 4.7,
                        "y2": 1.2
                },
                {
                        "type": "LINE",
                        "x1": 4.7,
                        "y1": 1.2,
                        "x2": 4.7,
                        "y2": 0
                },
                {
                        "type": "CIRCLE",
                        "cx": 5.4,
                        "cy": 0.6,
                        "r": 0.22
                }
        ]
},

    "PORTABLE_TOILET": {
        "id": "PORTABLE_TOILET",
        "name": "Banheiro químico",
        "name_en": "Portable Chemical Toilet (Porta-Potty)",
        "category": "construction",
        "categoryName": "Construção & Canteiro",
        "dimensions": "1.10m x 1.10m",
        "layer": "Canteiro",
        "color": "#eab308",
        "svgPreview": "<svg viewBox=\"-0.1 -0.1 1.3 1.3\" width=\"40\" height=\"40\" stroke=\"#eab308\" stroke-width=\"0.03\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"1.1\" height=\"1.1\" rx=\"0.08\"/><circle cx=\"0.55\" cy=\"0.75\" r=\"0.25\"/><line x1=\"0.1\" y1=\"0.1\" x2=\"0.9\" y2=\"0.1\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 1.1,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 1.1,
                        "y1": 0,
                        "x2": 1.1,
                        "y2": 1.1
                },
                {
                        "type": "LINE",
                        "x1": 1.1,
                        "y1": 1.1,
                        "x2": 0,
                        "y2": 1.1
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 1.1,
                        "x2": 0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 0.1,
                        "y1": 0,
                        "x2": 0.9,
                        "y2": 0
                },
                {
                        "type": "ARC",
                        "cx": 0.1,
                        "cy": 0,
                        "r": 0.8,
                        "startAngle": 0,
                        "endAngle": 1.5707963267948966
                },
                {
                        "type": "LINE",
                        "x1": 0.25,
                        "y1": 0.6,
                        "x2": 0.85,
                        "y2": 0.6
                },
                {
                        "type": "LINE",
                        "x1": 0.85,
                        "y1": 0.6,
                        "x2": 0.85,
                        "y2": 1.05
                },
                {
                        "type": "LINE",
                        "x1": 0.85,
                        "y1": 1.05,
                        "x2": 0.25,
                        "y2": 1.05
                },
                {
                        "type": "LINE",
                        "x1": 0.25,
                        "y1": 1.05,
                        "x2": 0.25,
                        "y2": 0.6
                },
                {
                        "type": "CIRCLE",
                        "cx": 0.55,
                        "cy": 0.78,
                        "r": 0.18
                }
        ]
},

    "CONCRETE_BATCH_PLANT": {
        "id": "CONCRETE_BATCH_PLANT",
        "name": "Central de concreto",
        "name_en": "Concrete Batching Plant",
        "category": "construction",
        "categoryName": "Construção & Canteiro",
        "dimensions": "12.00m x 6.00m",
        "layer": "Canteiro",
        "color": "#eab308",
        "svgPreview": "<svg viewBox=\"-0.5 -0.5 13 7\" width=\"56\" height=\"32\" stroke=\"#eab308\" stroke-width=\"0.1\" fill=\"none\"><circle cx=\"2\" cy=\"2\" r=\"1.5\"/><circle cx=\"5.5\" cy=\"2\" r=\"1.5\"/><rect x=\"8\" y=\"0.5\" width=\"3.5\" height=\"5\"/></svg>",
        "entities": [
                {
                        "type": "CIRCLE",
                        "cx": 2.0,
                        "cy": 2.2,
                        "r": 1.6
                },
                {
                        "type": "CIRCLE",
                        "cx": 2.0,
                        "cy": 2.2,
                        "r": 0.5
                },
                {
                        "type": "CIRCLE",
                        "cx": 5.5,
                        "cy": 2.2,
                        "r": 1.6
                },
                {
                        "type": "CIRCLE",
                        "cx": 5.5,
                        "cy": 2.2,
                        "r": 0.5
                },
                {
                        "type": "LINE",
                        "x1": 8.0,
                        "y1": 0.5,
                        "x2": 11.8,
                        "y2": 0.5
                },
                {
                        "type": "LINE",
                        "x1": 11.8,
                        "y1": 0.5,
                        "x2": 11.8,
                        "y2": 5.5
                },
                {
                        "type": "LINE",
                        "x1": 11.8,
                        "y1": 5.5,
                        "x2": 8.0,
                        "y2": 5.5
                },
                {
                        "type": "LINE",
                        "x1": 8.0,
                        "y1": 5.5,
                        "x2": 8.0,
                        "y2": 0.5
                },
                {
                        "type": "LINE",
                        "x1": 8.0,
                        "y1": 2.1,
                        "x2": 11.8,
                        "y2": 2.1
                },
                {
                        "type": "LINE",
                        "x1": 8.0,
                        "y1": 3.8,
                        "x2": 11.8,
                        "y2": 3.8
                },
                {
                        "type": "LINE",
                        "x1": 3.0,
                        "y1": 4.2,
                        "x2": 6.0,
                        "y2": 4.2
                },
                {
                        "type": "LINE",
                        "x1": 6.0,
                        "y1": 4.2,
                        "x2": 6.0,
                        "y2": 6.0
                },
                {
                        "type": "LINE",
                        "x1": 6.0,
                        "y1": 6.0,
                        "x2": 3.0,
                        "y2": 6.0
                },
                {
                        "type": "LINE",
                        "x1": 3.0,
                        "y1": 6.0,
                        "x2": 3.0,
                        "y2": 4.2
                }
        ]
},

    "CONCRETE_PUMP_TRUCK": {
        "id": "CONCRETE_PUMP_TRUCK",
        "name": "Bomba lança de concreto",
        "name_en": "Concrete Boom Pump Truck",
        "category": "construction",
        "categoryName": "Construção & Canteiro",
        "dimensions": "11.00m x 2.60m",
        "layer": "Canteiro",
        "color": "#eab308",
        "svgPreview": "<svg viewBox=\"-5.8 -2.5 11.6 5\" width=\"60\" height=\"26\" stroke=\"#eab308\" stroke-width=\"0.08\" fill=\"none\"><rect x=\"-5.5\" y=\"-1.3\" width=\"11\" height=\"2.6\" rx=\"0.3\"/><rect x=\"3.5\" y=\"-1.3\" width=\"2.0\" height=\"2.6\"/><line x1=\"-3\" y1=\"0\" x2=\"3\" y2=\"0\" stroke-width=\"0.2\"/><line x1=\"2\" y1=\"-1.3\" x2=\"3.5\" y2=\"-2.2\"/><line x1=\"2\" y1=\"1.3\" x2=\"3.5\" y2=\"2.2\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": -5.5,
                        "y1": -1.3,
                        "x2": 5.5,
                        "y2": -1.3
                },
                {
                        "type": "LINE",
                        "x1": 5.5,
                        "y1": -1.3,
                        "x2": 5.5,
                        "y2": 1.3
                },
                {
                        "type": "LINE",
                        "x1": 5.5,
                        "y1": 1.3,
                        "x2": -5.5,
                        "y2": 1.3
                },
                {
                        "type": "LINE",
                        "x1": -5.5,
                        "y1": 1.3,
                        "x2": -5.5,
                        "y2": -1.3
                },
                {
                        "type": "LINE",
                        "x1": 3.5,
                        "y1": -1.3,
                        "x2": 5.5,
                        "y2": -1.3
                },
                {
                        "type": "LINE",
                        "x1": 5.5,
                        "y1": -1.3,
                        "x2": 5.5,
                        "y2": 1.3
                },
                {
                        "type": "LINE",
                        "x1": 5.5,
                        "y1": 1.3,
                        "x2": 3.5,
                        "y2": 1.3
                },
                {
                        "type": "LINE",
                        "x1": 3.5,
                        "y1": 1.3,
                        "x2": 3.5,
                        "y2": -1.3
                },
                {
                        "type": "LINE",
                        "x1": -3.5,
                        "y1": -0.2,
                        "x2": 3.0,
                        "y2": -0.2
                },
                {
                        "type": "LINE",
                        "x1": -3.5,
                        "y1": 0.2,
                        "x2": 3.0,
                        "y2": 0.2
                },
                {
                        "type": "CIRCLE",
                        "cx": 0.5,
                        "cy": 0,
                        "r": 0.8
                },
                {
                        "type": "LINE",
                        "x1": -5.3,
                        "y1": -0.9,
                        "x2": -3.5,
                        "y2": -0.9
                },
                {
                        "type": "LINE",
                        "x1": -3.5,
                        "y1": -0.9,
                        "x2": -3.5,
                        "y2": 0.9
                },
                {
                        "type": "LINE",
                        "x1": -3.5,
                        "y1": 0.9,
                        "x2": -5.3,
                        "y2": 0.9
                },
                {
                        "type": "LINE",
                        "x1": -5.3,
                        "y1": 0.9,
                        "x2": -5.3,
                        "y2": -0.9
                },
                {
                        "type": "LINE",
                        "x1": 2.0,
                        "y1": -1.3,
                        "x2": 3.8,
                        "y2": -2.4
                },
                {
                        "type": "LINE",
                        "x1": 2.0,
                        "y1": 1.3,
                        "x2": 3.8,
                        "y2": 2.4
                },
                {
                        "type": "LINE",
                        "x1": -3.5,
                        "y1": -1.3,
                        "x2": -5.0,
                        "y2": -2.4
                },
                {
                        "type": "LINE",
                        "x1": -3.5,
                        "y1": 1.3,
                        "x2": -5.0,
                        "y2": 2.4
                }
        ]
},

    "PROJECT_BILLBOARD": {
        "id": "PROJECT_BILLBOARD",
        "name": "Placa de obra completa",
        "name_en": "Construction Project Billboard",
        "category": "construction",
        "categoryName": "Construção & Canteiro",
        "dimensions": "4.00m x 2.50m",
        "layer": "Canteiro",
        "color": "#eab308",
        "svgPreview": "<svg viewBox=\"-0.2 -0.2 4.4 2.9\" width=\"48\" height=\"34\" stroke=\"#eab308\" stroke-width=\"0.05\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"4.0\" height=\"2.5\"/><line x1=\"0\" y1=\"0.8\" x2=\"4.0\" y2=\"0.8\"/><line x1=\"0\" y1=\"1.6\" x2=\"4.0\" y2=\"1.6\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 4.0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 4.0,
                        "y1": 0,
                        "x2": 4.0,
                        "y2": 2.5
                },
                {
                        "type": "LINE",
                        "x1": 4.0,
                        "y1": 2.5,
                        "x2": 0,
                        "y2": 2.5
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 2.5,
                        "x2": 0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0.8,
                        "x2": 4.0,
                        "y2": 0.8
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 1.6,
                        "x2": 4.0,
                        "y2": 1.6
                },
                {
                        "type": "LINE",
                        "x1": 2.5,
                        "y1": 0.8,
                        "x2": 2.5,
                        "y2": 2.5
                },
                {
                        "type": "TEXT",
                        "x": 0.2,
                        "y": 0.45,
                        "text": "OBRA / PROJETO",
                        "height": 0.3
                },
                {
                        "type": "TEXT",
                        "x": 0.2,
                        "y": 1.25,
                        "text": "CREA / CAU ART",
                        "height": 0.22
                },
                {
                        "type": "TEXT",
                        "x": 0.2,
                        "y": 2.05,
                        "text": "ALVARÁ Nº",
                        "height": 0.22
                }
        ]
},

    "CONSTRUCTION_HOARDING": {
        "id": "CONSTRUCTION_HOARDING",
        "name": "Tapume com portão",
        "name_en": "Site Hoarding with Gate",
        "category": "construction",
        "categoryName": "Construção & Canteiro",
        "dimensions": "5.00m x 0.20m",
        "layer": "Canteiro",
        "color": "#eab308",
        "svgPreview": "<svg viewBox=\"-0.2 -0.2 5.4 0.6\" width=\"56\" height=\"16\" stroke=\"#eab308\" stroke-width=\"0.03\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"5.0\" height=\"0.2\"/><line x1=\"1.0\" y1=\"0\" x2=\"1.0\" y2=\"0.2\"/><line x1=\"4.0\" y1=\"0\" x2=\"4.0\" y2=\"0.2\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 5.0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 5.0,
                        "y1": 0,
                        "x2": 5.0,
                        "y2": 0.2
                },
                {
                        "type": "LINE",
                        "x1": 5.0,
                        "y1": 0.2,
                        "x2": 0,
                        "y2": 0.2
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0.2,
                        "x2": 0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 0.95,
                        "y1": -0.05,
                        "x2": 1.1,
                        "y2": -0.05
                },
                {
                        "type": "LINE",
                        "x1": 1.1,
                        "y1": -0.05,
                        "x2": 1.1,
                        "y2": 0.25
                },
                {
                        "type": "LINE",
                        "x1": 1.1,
                        "y1": 0.25,
                        "x2": 0.95,
                        "y2": 0.25
                },
                {
                        "type": "LINE",
                        "x1": 0.95,
                        "y1": 0.25,
                        "x2": 0.95,
                        "y2": -0.05
                },
                {
                        "type": "LINE",
                        "x1": 3.95,
                        "y1": -0.05,
                        "x2": 4.1,
                        "y2": -0.05
                },
                {
                        "type": "LINE",
                        "x1": 4.1,
                        "y1": -0.05,
                        "x2": 4.1,
                        "y2": 0.25
                },
                {
                        "type": "LINE",
                        "x1": 4.1,
                        "y1": 0.25,
                        "x2": 3.95,
                        "y2": 0.25
                },
                {
                        "type": "LINE",
                        "x1": 3.95,
                        "y1": 0.25,
                        "x2": 3.95,
                        "y2": -0.05
                },
                {
                        "type": "LINE",
                        "x1": 4.1,
                        "y1": 0.1,
                        "x2": 4.9,
                        "y2": 0.1
                }
        ]
},

    "SPT_DRILLING_RIG": {
        "id": "SPT_DRILLING_RIG",
        "name": "Sondagem de solo",
        "name_en": "Soil Investigation Rig (SPT Tripod)",
        "category": "construction",
        "categoryName": "Construção & Canteiro",
        "dimensions": "2.50m x 2.00m",
        "layer": "Canteiro",
        "color": "#eab308",
        "svgPreview": "<svg viewBox=\"-1.5 -1.2 3.0 2.4\" width=\"44\" height=\"36\" stroke=\"#eab308\" stroke-width=\"0.04\" fill=\"none\"><polygon points=\"0,-1.0 -1.1,0.9 1.1,0.9\"/><circle cx=\"0\" cy=\"0\" r=\"0.3\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": -1.0,
                        "x2": -1.2,
                        "y2": 1.0
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": -1.0,
                        "x2": 1.2,
                        "y2": 1.0
                },
                {
                        "type": "LINE",
                        "x1": -1.2,
                        "y1": 1.0,
                        "x2": 1.2,
                        "y2": 1.0
                },
                {
                        "type": "CIRCLE",
                        "cx": 0,
                        "cy": 0,
                        "r": 0.25
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": -1.0,
                        "x2": 0,
                        "y2": 0
                }
        ]
},

    "STEEL_PROFILES_RACK": {
        "id": "STEEL_PROFILES_RACK",
        "name": "Perfis metálicos organizados",
        "name_en": "Organized Steel Profiles Rack",
        "category": "construction",
        "categoryName": "Construção & Canteiro",
        "dimensions": "6.00m x 1.50m",
        "layer": "Canteiro",
        "color": "#eab308",
        "svgPreview": "<svg viewBox=\"-0.2 -0.2 6.4 1.9\" width=\"56\" height=\"20\" stroke=\"#eab308\" stroke-width=\"0.04\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"6.0\" height=\"1.5\"/><line x1=\"0\" y1=\"0.3\" x2=\"6.0\" y2=\"0.3\"/><line x1=\"0\" y1=\"0.6\" x2=\"6.0\" y2=\"0.6\"/><line x1=\"0\" y1=\"0.9\" x2=\"6.0\" y2=\"0.9\"/><line x1=\"0\" y1=\"1.2\" x2=\"6.0\" y2=\"1.2\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 6.0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 6.0,
                        "y1": 0,
                        "x2": 6.0,
                        "y2": 1.5
                },
                {
                        "type": "LINE",
                        "x1": 6.0,
                        "y1": 1.5,
                        "x2": 0,
                        "y2": 1.5
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 1.5,
                        "x2": 0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0.3,
                        "x2": 6.0,
                        "y2": 0.3
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0.6,
                        "x2": 6.0,
                        "y2": 0.6
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0.9,
                        "x2": 6.0,
                        "y2": 0.9
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 1.2,
                        "x2": 6.0,
                        "y2": 1.2
                },
                {
                        "type": "LINE",
                        "x1": 0.5,
                        "y1": -0.05,
                        "x2": 0.65,
                        "y2": -0.05
                },
                {
                        "type": "LINE",
                        "x1": 0.65,
                        "y1": -0.05,
                        "x2": 0.65,
                        "y2": 1.55
                },
                {
                        "type": "LINE",
                        "x1": 0.65,
                        "y1": 1.55,
                        "x2": 0.5,
                        "y2": 1.55
                },
                {
                        "type": "LINE",
                        "x1": 0.5,
                        "y1": 1.55,
                        "x2": 0.5,
                        "y2": -0.05
                },
                {
                        "type": "LINE",
                        "x1": 3.0,
                        "y1": -0.05,
                        "x2": 3.15,
                        "y2": -0.05
                },
                {
                        "type": "LINE",
                        "x1": 3.15,
                        "y1": -0.05,
                        "x2": 3.15,
                        "y2": 1.55
                },
                {
                        "type": "LINE",
                        "x1": 3.15,
                        "y1": 1.55,
                        "x2": 3.0,
                        "y2": 1.55
                },
                {
                        "type": "LINE",
                        "x1": 3.0,
                        "y1": 1.55,
                        "x2": 3.0,
                        "y2": -0.05
                },
                {
                        "type": "LINE",
                        "x1": 5.3,
                        "y1": -0.05,
                        "x2": 5.45,
                        "y2": -0.05
                },
                {
                        "type": "LINE",
                        "x1": 5.45,
                        "y1": -0.05,
                        "x2": 5.45,
                        "y2": 1.55
                },
                {
                        "type": "LINE",
                        "x1": 5.45,
                        "y1": 1.55,
                        "x2": 5.3,
                        "y2": 1.55
                },
                {
                        "type": "LINE",
                        "x1": 5.3,
                        "y1": 1.55,
                        "x2": 5.3,
                        "y2": -0.05
                }
        ]
},

    "COLUMN_BEAM_FORMWORK": {
        "id": "COLUMN_BEAM_FORMWORK",
        "name": "Formas de pilares e vigas",
        "name_en": "Plywood Column & Beam Formwork",
        "category": "construction",
        "categoryName": "Construção & Canteiro",
        "dimensions": "2.00m x 2.00m",
        "layer": "Canteiro",
        "color": "#eab308",
        "svgPreview": "<svg viewBox=\"-0.2 -0.2 2.4 2.4\" width=\"44\" height=\"44\" stroke=\"#eab308\" stroke-width=\"0.04\" fill=\"none\"><rect x=\"0.5\" y=\"0.5\" width=\"1.0\" height=\"1.0\"/><rect x=\"0.3\" y=\"0.3\" width=\"1.4\" height=\"1.4\"/><line x1=\"0\" y1=\"0\" x2=\"0.3\" y2=\"0.3\"/><line x1=\"2\" y1=\"0\" x2=\"1.7\" y2=\"0.3\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0.7,
                        "y1": 0.7,
                        "x2": 1.3,
                        "y2": 0.7
                },
                {
                        "type": "LINE",
                        "x1": 1.3,
                        "y1": 0.7,
                        "x2": 1.3,
                        "y2": 1.3
                },
                {
                        "type": "LINE",
                        "x1": 1.3,
                        "y1": 1.3,
                        "x2": 0.7,
                        "y2": 1.3
                },
                {
                        "type": "LINE",
                        "x1": 0.7,
                        "y1": 1.3,
                        "x2": 0.7,
                        "y2": 0.7
                },
                {
                        "type": "LINE",
                        "x1": 0.6,
                        "y1": 0.6,
                        "x2": 1.4,
                        "y2": 0.6
                },
                {
                        "type": "LINE",
                        "x1": 1.4,
                        "y1": 0.6,
                        "x2": 1.4,
                        "y2": 1.4
                },
                {
                        "type": "LINE",
                        "x1": 1.4,
                        "y1": 1.4,
                        "x2": 0.6,
                        "y2": 1.4
                },
                {
                        "type": "LINE",
                        "x1": 0.6,
                        "y1": 1.4,
                        "x2": 0.6,
                        "y2": 0.6
                },
                {
                        "type": "LINE",
                        "x1": 0.45,
                        "y1": 0.45,
                        "x2": 1.55,
                        "y2": 0.45
                },
                {
                        "type": "LINE",
                        "x1": 1.55,
                        "y1": 0.45,
                        "x2": 1.55,
                        "y2": 1.55
                },
                {
                        "type": "LINE",
                        "x1": 1.55,
                        "y1": 1.55,
                        "x2": 0.45,
                        "y2": 1.55
                },
                {
                        "type": "LINE",
                        "x1": 0.45,
                        "y1": 1.55,
                        "x2": 0.45,
                        "y2": 0.45
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 0.45,
                        "y2": 0.45
                },
                {
                        "type": "LINE",
                        "x1": 2.0,
                        "y1": 0,
                        "x2": 1.55,
                        "y2": 0.45
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 2.0,
                        "x2": 0.45,
                        "y2": 1.55
                },
                {
                        "type": "LINE",
                        "x1": 2.0,
                        "y1": 2.0,
                        "x2": 1.55,
                        "y2": 1.55
                }
        ]
},

    "CAGED_LADDER": {
        "id": "CAGED_LADDER",
        "name": "Escada marinheiro",
        "name_en": "Caged Safety Ladder with Platform",
        "category": "construction",
        "categoryName": "Construção & Canteiro",
        "dimensions": "0.80m x 0.70m",
        "layer": "Canteiro",
        "color": "#eab308",
        "svgPreview": "<svg viewBox=\"-0.1 -0.1 1.0 0.9\" width=\"40\" height=\"36\" stroke=\"#eab308\" stroke-width=\"0.03\" fill=\"none\"><line x1=\"0.1\" y1=\"0.6\" x2=\"0.7\" y2=\"0.6\"/><circle cx=\"0.4\" cy=\"0.35\" r=\"0.32\"/><line x1=\"0.25\" y1=\"0.6\" x2=\"0.25\" y2=\"0.15\"/><line x1=\"0.55\" y1=\"0.6\" x2=\"0.55\" y2=\"0.15\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0.05,
                        "y1": 0.65,
                        "x2": 0.75,
                        "y2": 0.65
                },
                {
                        "type": "LINE",
                        "x1": 0.2,
                        "y1": 0.65,
                        "x2": 0.2,
                        "y2": 0.55
                },
                {
                        "type": "LINE",
                        "x1": 0.6,
                        "y1": 0.65,
                        "x2": 0.6,
                        "y2": 0.55
                },
                {
                        "type": "LINE",
                        "x1": 0.2,
                        "y1": 0.58,
                        "x2": 0.6,
                        "y2": 0.58
                },
                {
                        "type": "ARC",
                        "cx": 0.4,
                        "cy": 0.35,
                        "r": 0.35,
                        "startAngle": 3.141592653589793,
                        "endAngle": 6.283185307179586
                }
        ]
},

    "LIFELINE_ANCHOR": {
        "id": "LIFELINE_ANCHOR",
        "name": "Linha de vida",
        "name_en": "Horizontal Lifeline Anchor System",
        "category": "construction",
        "categoryName": "Construção & Canteiro",
        "dimensions": "10.00m x 0.30m",
        "layer": "Canteiro",
        "color": "#eab308",
        "svgPreview": "<svg viewBox=\"-0.5 -0.3 11 0.6\" width=\"60\" height=\"12\" stroke=\"#eab308\" stroke-width=\"0.04\" fill=\"none\"><line x1=\"0\" y1=\"0\" x2=\"10\" y2=\"0\" stroke-width=\"0.08\"/><circle cx=\"0\" cy=\"0\" r=\"0.15\" fill=\"#eab308\"/><circle cx=\"10\" cy=\"0\" r=\"0.15\" fill=\"#eab308\"/><circle cx=\"5\" cy=\"0\" r=\"0.15\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": -0.15,
                        "y1": -0.15,
                        "x2": 0.15,
                        "y2": -0.15
                },
                {
                        "type": "LINE",
                        "x1": 0.15,
                        "y1": -0.15,
                        "x2": 0.15,
                        "y2": 0.15
                },
                {
                        "type": "LINE",
                        "x1": 0.15,
                        "y1": 0.15,
                        "x2": -0.15,
                        "y2": 0.15
                },
                {
                        "type": "LINE",
                        "x1": -0.15,
                        "y1": 0.15,
                        "x2": -0.15,
                        "y2": -0.15
                },
                {
                        "type": "LINE",
                        "x1": 9.85,
                        "y1": -0.15,
                        "x2": 10.15,
                        "y2": -0.15
                },
                {
                        "type": "LINE",
                        "x1": 10.15,
                        "y1": -0.15,
                        "x2": 10.15,
                        "y2": 0.15
                },
                {
                        "type": "LINE",
                        "x1": 10.15,
                        "y1": 0.15,
                        "x2": 9.85,
                        "y2": 0.15
                },
                {
                        "type": "LINE",
                        "x1": 9.85,
                        "y1": 0.15,
                        "x2": 9.85,
                        "y2": -0.15
                },
                {
                        "type": "LINE",
                        "x1": 4.85,
                        "y1": -0.15,
                        "x2": 5.15,
                        "y2": -0.15
                },
                {
                        "type": "LINE",
                        "x1": 5.15,
                        "y1": -0.15,
                        "x2": 5.15,
                        "y2": 0.15
                },
                {
                        "type": "LINE",
                        "x1": 5.15,
                        "y1": 0.15,
                        "x2": 4.85,
                        "y2": 0.15
                },
                {
                        "type": "LINE",
                        "x1": 4.85,
                        "y1": 0.15,
                        "x2": 4.85,
                        "y2": -0.15
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 10.0,
                        "y2": 0
                }
        ]
},

    "SAFETY_RAILING_EDGE": {
        "id": "SAFETY_RAILING_EDGE",
        "name": "Guarda-corpo provisório",
        "name_en": "Temporary Edge Protection (NR-18)",
        "category": "construction",
        "categoryName": "Construção & Canteiro",
        "dimensions": "3.00m x 0.15m",
        "layer": "Canteiro",
        "color": "#eab308",
        "svgPreview": "<svg viewBox=\"-0.2 -0.2 3.4 0.5\" width=\"56\" height=\"16\" stroke=\"#eab308\" stroke-width=\"0.03\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"3.0\" height=\"0.15\"/><line x1=\"0\" y1=\"0.07\" x2=\"3.0\" y2=\"0.07\"/><circle cx=\"0.1\" cy=\"0.07\" r=\"0.05\"/><circle cx=\"1.5\" cy=\"0.07\" r=\"0.05\"/><circle cx=\"2.9\" cy=\"0.07\" r=\"0.05\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 3.0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 3.0,
                        "y1": 0,
                        "x2": 3.0,
                        "y2": 0.15
                },
                {
                        "type": "LINE",
                        "x1": 3.0,
                        "y1": 0.15,
                        "x2": 0,
                        "y2": 0.15
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0.15,
                        "x2": 0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 0.05,
                        "y1": -0.05,
                        "x2": 0.15,
                        "y2": -0.05
                },
                {
                        "type": "LINE",
                        "x1": 0.15,
                        "y1": -0.05,
                        "x2": 0.15,
                        "y2": 0.2
                },
                {
                        "type": "LINE",
                        "x1": 0.15,
                        "y1": 0.2,
                        "x2": 0.05,
                        "y2": 0.2
                },
                {
                        "type": "LINE",
                        "x1": 0.05,
                        "y1": 0.2,
                        "x2": 0.05,
                        "y2": -0.05
                },
                {
                        "type": "LINE",
                        "x1": 1.45,
                        "y1": -0.05,
                        "x2": 1.55,
                        "y2": -0.05
                },
                {
                        "type": "LINE",
                        "x1": 1.55,
                        "y1": -0.05,
                        "x2": 1.55,
                        "y2": 0.2
                },
                {
                        "type": "LINE",
                        "x1": 1.55,
                        "y1": 0.2,
                        "x2": 1.45,
                        "y2": 0.2
                },
                {
                        "type": "LINE",
                        "x1": 1.45,
                        "y1": 0.2,
                        "x2": 1.45,
                        "y2": -0.05
                },
                {
                        "type": "LINE",
                        "x1": 2.85,
                        "y1": -0.05,
                        "x2": 2.95,
                        "y2": -0.05
                },
                {
                        "type": "LINE",
                        "x1": 2.95,
                        "y1": -0.05,
                        "x2": 2.95,
                        "y2": 0.2
                },
                {
                        "type": "LINE",
                        "x1": 2.95,
                        "y1": 0.2,
                        "x2": 2.85,
                        "y2": 0.2
                },
                {
                        "type": "LINE",
                        "x1": 2.85,
                        "y1": 0.2,
                        "x2": 2.85,
                        "y2": -0.05
                }
        ]
},

    "SCISSOR_LIFT": {
        "id": "SCISSOR_LIFT",
        "name": "Plataforma elevatória",
        "name_en": "Mobile Scissor Lift Work Platform",
        "category": "construction",
        "categoryName": "Construção & Canteiro",
        "dimensions": "2.40m x 1.20m",
        "layer": "Canteiro",
        "color": "#eab308",
        "svgPreview": "<svg viewBox=\"-0.2 -0.2 2.8 1.6\" width=\"48\" height=\"28\" stroke=\"#eab308\" stroke-width=\"0.04\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"2.4\" height=\"1.2\" rx=\"0.1\"/><rect x=\"0.2\" y=\"0.1\" width=\"2.0\" height=\"1.0\"/><line x1=\"0.2\" y1=\"0.1\" x2=\"2.2\" y2=\"1.1\"/><line x1=\"0.2\" y1=\"1.1\" x2=\"2.2\" y2=\"0.1\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 2.4,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 2.4,
                        "y1": 0,
                        "x2": 2.4,
                        "y2": 1.2
                },
                {
                        "type": "LINE",
                        "x1": 2.4,
                        "y1": 1.2,
                        "x2": 0,
                        "y2": 1.2
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 1.2,
                        "x2": 0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 0.15,
                        "y1": 0.1,
                        "x2": 2.25,
                        "y2": 0.1
                },
                {
                        "type": "LINE",
                        "x1": 2.25,
                        "y1": 0.1,
                        "x2": 2.25,
                        "y2": 1.1
                },
                {
                        "type": "LINE",
                        "x1": 2.25,
                        "y1": 1.1,
                        "x2": 0.15,
                        "y2": 1.1
                },
                {
                        "type": "LINE",
                        "x1": 0.15,
                        "y1": 1.1,
                        "x2": 0.15,
                        "y2": 0.1
                },
                {
                        "type": "LINE",
                        "x1": 0.15,
                        "y1": 0.1,
                        "x2": 2.25,
                        "y2": 1.1
                },
                {
                        "type": "LINE",
                        "x1": 0.15,
                        "y1": 1.1,
                        "x2": 2.25,
                        "y2": 0.1
                },
                {
                        "type": "LINE",
                        "x1": 0.2,
                        "y1": -0.06,
                        "x2": 0.6,
                        "y2": -0.06
                },
                {
                        "type": "LINE",
                        "x1": 0.6,
                        "y1": -0.06,
                        "x2": 0.6,
                        "y2": 0.06
                },
                {
                        "type": "LINE",
                        "x1": 0.6,
                        "y1": 0.06,
                        "x2": 0.2,
                        "y2": 0.06
                },
                {
                        "type": "LINE",
                        "x1": 0.2,
                        "y1": 0.06,
                        "x2": 0.2,
                        "y2": -0.06
                },
                {
                        "type": "LINE",
                        "x1": 1.8,
                        "y1": -0.06,
                        "x2": 2.2,
                        "y2": -0.06
                },
                {
                        "type": "LINE",
                        "x1": 2.2,
                        "y1": -0.06,
                        "x2": 2.2,
                        "y2": 0.06
                },
                {
                        "type": "LINE",
                        "x1": 2.2,
                        "y1": 0.06,
                        "x2": 1.8,
                        "y2": 0.06
                },
                {
                        "type": "LINE",
                        "x1": 1.8,
                        "y1": 0.06,
                        "x2": 1.8,
                        "y2": -0.06
                },
                {
                        "type": "LINE",
                        "x1": 0.2,
                        "y1": 1.14,
                        "x2": 0.6,
                        "y2": 1.14
                },
                {
                        "type": "LINE",
                        "x1": 0.6,
                        "y1": 1.14,
                        "x2": 0.6,
                        "y2": 1.26
                },
                {
                        "type": "LINE",
                        "x1": 0.6,
                        "y1": 1.26,
                        "x2": 0.2,
                        "y2": 1.26
                },
                {
                        "type": "LINE",
                        "x1": 0.2,
                        "y1": 1.26,
                        "x2": 0.2,
                        "y2": 1.14
                },
                {
                        "type": "LINE",
                        "x1": 1.8,
                        "y1": 1.14,
                        "x2": 2.2,
                        "y2": 1.14
                },
                {
                        "type": "LINE",
                        "x1": 2.2,
                        "y1": 1.14,
                        "x2": 2.2,
                        "y2": 1.26
                },
                {
                        "type": "LINE",
                        "x1": 2.2,
                        "y1": 1.26,
                        "x2": 1.8,
                        "y2": 1.26
                },
                {
                        "type": "LINE",
                        "x1": 1.8,
                        "y1": 1.26,
                        "x2": 1.8,
                        "y2": 1.14
                }
        ]
},

    "PALM_TREE_STAGES": {
        "id": "PALM_TREE_STAGES",
        "name": "Palmeiras em vários estágios",
        "name_en": "Imperial Palm Tree (Multi-Frond)",
        "category": "vegetation",
        "categoryName": "Paisagismo Diferenciado",
        "dimensions": "3.50m x 3.50m",
        "layer": "Paisagismo",
        "color": "#10b981",
        "svgPreview": "<svg viewBox=\"-2 -2 4 4\" width=\"48\" height=\"48\" stroke=\"#10b981\" stroke-width=\"0.06\" fill=\"none\"><circle cx=\"0\" cy=\"0\" r=\"0.35\"/><path d=\"M0,0 L0,1.8 M0,0 L1.3,1.3 M0,0 L1.8,0 M0,0 L1.3,-1.3 M0,0 L0,-1.8 M0,0 L-1.3,-1.3 M0,0 L-1.8,0 M0,0 L-1.3,1.3\"/></svg>",
        "entities": [
                {
                        "type": "CIRCLE",
                        "cx": 0,
                        "cy": 0,
                        "r": 0.35
                },
                {
                        "type": "CIRCLE",
                        "cx": 0,
                        "cy": 0,
                        "r": 0.2
                },
                {
                        "type": "ARC",
                        "cx": 0.9,
                        "cy": 0.9,
                        "r": 1.25,
                        "startAngle": 3.141592653589793,
                        "endAngle": 4.71238898038469
                },
                {
                        "type": "ARC",
                        "cx": -0.9,
                        "cy": 0.9,
                        "r": 1.25,
                        "startAngle": 4.71238898038469,
                        "endAngle": 6.283185307179586
                },
                {
                        "type": "ARC",
                        "cx": -0.9,
                        "cy": -0.9,
                        "r": 1.25,
                        "startAngle": 0,
                        "endAngle": 1.5707963267948966
                },
                {
                        "type": "ARC",
                        "cx": 0.9,
                        "cy": -0.9,
                        "r": 1.25,
                        "startAngle": 1.5707963267948966,
                        "endAngle": 3.141592653589793
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 0,
                        "y2": 1.75
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 0,
                        "y2": -1.75
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 1.75,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": -1.75,
                        "y2": 0
                }
        ]
},

    "ORNAMENTAL_FLOWERING_TREE": {
        "id": "ORNAMENTAL_FLOWERING_TREE",
        "name": "Árvores com copa ornamental",
        "name_en": "Ornamental Flowering Tree Canopy",
        "category": "vegetation",
        "categoryName": "Paisagismo Diferenciado",
        "dimensions": "5.00m x 5.00m",
        "layer": "Paisagismo",
        "color": "#10b981",
        "svgPreview": "<svg viewBox=\"-2.8 -2.8 5.6 5.6\" width=\"48\" height=\"48\" stroke=\"#10b981\" stroke-width=\"0.08\" fill=\"none\"><circle cx=\"0\" cy=\"0\" r=\"2.5\"/><circle cx=\"0\" cy=\"0\" r=\"0.3\"/><path d=\"M0,0 Q1,1 2,0 Q1,-1 0,0 Q-1,1 -2,0 Q-1,-1 0,0\"/></svg>",
        "entities": [
                {
                        "type": "POLYLINE",
                        "points": [
                                {
                                        "x": 2.5,
                                        "y": 0.0
                                },
                                {
                                        "x": 2.378,
                                        "y": 0.773
                                },
                                {
                                        "x": 2.023,
                                        "y": 1.469
                                },
                                {
                                        "x": 1.469,
                                        "y": 2.023
                                },
                                {
                                        "x": 0.773,
                                        "y": 2.378
                                },
                                {
                                        "x": 0.0,
                                        "y": 2.5
                                },
                                {
                                        "x": -0.773,
                                        "y": 2.378
                                },
                                {
                                        "x": -1.469,
                                        "y": 2.023
                                },
                                {
                                        "x": -2.023,
                                        "y": 1.469
                                },
                                {
                                        "x": -2.378,
                                        "y": 0.773
                                },
                                {
                                        "x": -2.5,
                                        "y": 0.0
                                },
                                {
                                        "x": -2.378,
                                        "y": -0.773
                                },
                                {
                                        "x": -2.023,
                                        "y": -1.469
                                },
                                {
                                        "x": -1.469,
                                        "y": -2.023
                                },
                                {
                                        "x": -0.773,
                                        "y": -2.378
                                },
                                {
                                        "x": -0.0,
                                        "y": -2.5
                                },
                                {
                                        "x": 0.773,
                                        "y": -2.378
                                },
                                {
                                        "x": 1.469,
                                        "y": -2.023
                                },
                                {
                                        "x": 2.023,
                                        "y": -1.469
                                },
                                {
                                        "x": 2.378,
                                        "y": -0.773
                                }
                        ],
                        "closed": true
                },
                {
                        "type": "POLYLINE",
                        "points": [
                                {
                                        "x": 2.2,
                                        "y": 0.0
                                },
                                {
                                        "x": 2.033,
                                        "y": 0.842
                                },
                                {
                                        "x": 1.556,
                                        "y": 1.556
                                },
                                {
                                        "x": 0.842,
                                        "y": 2.033
                                },
                                {
                                        "x": 0.0,
                                        "y": 2.2
                                },
                                {
                                        "x": -0.842,
                                        "y": 2.033
                                },
                                {
                                        "x": -1.556,
                                        "y": 1.556
                                },
                                {
                                        "x": -2.033,
                                        "y": 0.842
                                },
                                {
                                        "x": -2.2,
                                        "y": 0.0
                                },
                                {
                                        "x": -2.033,
                                        "y": -0.842
                                },
                                {
                                        "x": -1.556,
                                        "y": -1.556
                                },
                                {
                                        "x": -0.842,
                                        "y": -2.033
                                },
                                {
                                        "x": -0.0,
                                        "y": -2.2
                                },
                                {
                                        "x": 0.842,
                                        "y": -2.033
                                },
                                {
                                        "x": 1.556,
                                        "y": -1.556
                                },
                                {
                                        "x": 2.033,
                                        "y": -0.842
                                }
                        ],
                        "closed": true
                },
                {
                        "type": "CIRCLE",
                        "cx": 0,
                        "cy": 0,
                        "r": 0.35
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 1.6,
                        "y2": 1.2
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": -1.5,
                        "y2": 1.3
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": -1.6,
                        "y2": -1.1
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 1.4,
                        "y2": -1.3
                }
        ]
},

    "VERTICAL_GARDEN_WALL": {
        "id": "VERTICAL_GARDEN_WALL",
        "name": "Jardim vertical",
        "name_en": "Living Green Wall System",
        "category": "vegetation",
        "categoryName": "Paisagismo Diferenciado",
        "dimensions": "3.00m x 0.30m",
        "layer": "Paisagismo",
        "color": "#10b981",
        "svgPreview": "<svg viewBox=\"-0.2 -0.1 3.4 0.5\" width=\"56\" height=\"18\" stroke=\"#10b981\" stroke-width=\"0.03\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"3.0\" height=\"0.3\"/><circle cx=\"0.5\" cy=\"0.15\" r=\"0.12\"/><circle cx=\"1.1\" cy=\"0.15\" r=\"0.12\"/><circle cx=\"1.7\" cy=\"0.15\" r=\"0.12\"/><circle cx=\"2.3\" cy=\"0.15\" r=\"0.12\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 3.0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 3.0,
                        "y1": 0,
                        "x2": 3.0,
                        "y2": 0.3
                },
                {
                        "type": "LINE",
                        "x1": 3.0,
                        "y1": 0.3,
                        "x2": 0,
                        "y2": 0.3
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0.3,
                        "x2": 0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0.05,
                        "x2": 3.0,
                        "y2": 0.05
                },
                {
                        "type": "CIRCLE",
                        "cx": 0.4,
                        "cy": 0.18,
                        "r": 0.1
                },
                {
                        "type": "CIRCLE",
                        "cx": 0.9,
                        "cy": 0.18,
                        "r": 0.1
                },
                {
                        "type": "CIRCLE",
                        "cx": 1.4,
                        "cy": 0.18,
                        "r": 0.1
                },
                {
                        "type": "CIRCLE",
                        "cx": 1.9,
                        "cy": 0.18,
                        "r": 0.1
                },
                {
                        "type": "CIRCLE",
                        "cx": 2.4,
                        "cy": 0.18,
                        "r": 0.1
                }
        ]
},

    "PERGOLA_VINE": {
        "id": "PERGOLA_VINE",
        "name": "Pergolado com trepadeiras",
        "name_en": "Timber Pergola with Vines",
        "category": "vegetation",
        "categoryName": "Paisagismo Diferenciado",
        "dimensions": "4.00m x 3.00m",
        "layer": "Paisagismo",
        "color": "#10b981",
        "svgPreview": "<svg viewBox=\"-0.3 -0.3 4.6 3.6\" width=\"52\" height=\"40\" stroke=\"#10b981\" stroke-width=\"0.06\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"4.0\" height=\"3.0\"/><line x1=\"0.8\" y1=\"0\" x2=\"0.8\" y2=\"3.0\"/><line x1=\"1.6\" y1=\"0\" x2=\"1.6\" y2=\"3.0\"/><line x1=\"2.4\" y1=\"0\" x2=\"2.4\" y2=\"3.0\"/><line x1=\"3.2\" y1=\"0\" x2=\"3.2\" y2=\"3.0\"/><circle cx=\"0.2\" cy=\"0.2\" r=\"0.15\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 4.0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 4.0,
                        "y1": 0,
                        "x2": 4.0,
                        "y2": 3.0
                },
                {
                        "type": "LINE",
                        "x1": 4.0,
                        "y1": 3.0,
                        "x2": 0,
                        "y2": 3.0
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 3.0,
                        "x2": 0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 0.8,
                        "y1": 0,
                        "x2": 0.8,
                        "y2": 3.0
                },
                {
                        "type": "LINE",
                        "x1": 1.6,
                        "y1": 0,
                        "x2": 1.6,
                        "y2": 3.0
                },
                {
                        "type": "LINE",
                        "x1": 2.4,
                        "y1": 0,
                        "x2": 2.4,
                        "y2": 3.0
                },
                {
                        "type": "LINE",
                        "x1": 3.2,
                        "y1": 0,
                        "x2": 3.2,
                        "y2": 3.0
                },
                {
                        "type": "LINE",
                        "x1": 0.05,
                        "y1": 0.05,
                        "x2": 0.25,
                        "y2": 0.05
                },
                {
                        "type": "LINE",
                        "x1": 0.25,
                        "y1": 0.05,
                        "x2": 0.25,
                        "y2": 0.25
                },
                {
                        "type": "LINE",
                        "x1": 0.25,
                        "y1": 0.25,
                        "x2": 0.05,
                        "y2": 0.25
                },
                {
                        "type": "LINE",
                        "x1": 0.05,
                        "y1": 0.25,
                        "x2": 0.05,
                        "y2": 0.05
                },
                {
                        "type": "LINE",
                        "x1": 3.75,
                        "y1": 0.05,
                        "x2": 3.95,
                        "y2": 0.05
                },
                {
                        "type": "LINE",
                        "x1": 3.95,
                        "y1": 0.05,
                        "x2": 3.95,
                        "y2": 0.25
                },
                {
                        "type": "LINE",
                        "x1": 3.95,
                        "y1": 0.25,
                        "x2": 3.75,
                        "y2": 0.25
                },
                {
                        "type": "LINE",
                        "x1": 3.75,
                        "y1": 0.25,
                        "x2": 3.75,
                        "y2": 0.05
                },
                {
                        "type": "LINE",
                        "x1": 0.05,
                        "y1": 2.75,
                        "x2": 0.25,
                        "y2": 2.75
                },
                {
                        "type": "LINE",
                        "x1": 0.25,
                        "y1": 2.75,
                        "x2": 0.25,
                        "y2": 2.95
                },
                {
                        "type": "LINE",
                        "x1": 0.25,
                        "y1": 2.95,
                        "x2": 0.05,
                        "y2": 2.95
                },
                {
                        "type": "LINE",
                        "x1": 0.05,
                        "y1": 2.95,
                        "x2": 0.05,
                        "y2": 2.75
                },
                {
                        "type": "LINE",
                        "x1": 3.75,
                        "y1": 2.75,
                        "x2": 3.95,
                        "y2": 2.75
                },
                {
                        "type": "LINE",
                        "x1": 3.95,
                        "y1": 2.75,
                        "x2": 3.95,
                        "y2": 2.95
                },
                {
                        "type": "LINE",
                        "x1": 3.95,
                        "y1": 2.95,
                        "x2": 3.75,
                        "y2": 2.95
                },
                {
                        "type": "LINE",
                        "x1": 3.75,
                        "y1": 2.95,
                        "x2": 3.75,
                        "y2": 2.75
                }
        ]
},

    "ORNAMENTAL_POND": {
        "id": "ORNAMENTAL_POND",
        "name": "Lago ornamental",
        "name_en": "Organic Ornamental Koi Pond",
        "category": "vegetation",
        "categoryName": "Paisagismo Diferenciado",
        "dimensions": "5.00m x 3.50m",
        "layer": "Paisagismo",
        "color": "#10b981",
        "svgPreview": "<svg viewBox=\"-2.8 -2.0 5.6 4.0\" width=\"56\" height=\"40\" stroke=\"#10b981\" stroke-width=\"0.08\" fill=\"none\"><path d=\"M-2.2,0 C-2.5,1.5 -0.5,1.8 1.0,1.5 C2.4,1.2 2.5,-0.8 1.2,-1.5 C-0.5,-2.0 -2.0,-1.0 -2.2,0 Z\"/><circle cx=\"0.5\" cy=\"0.2\" r=\"0.3\"/></svg>",
        "entities": [
                {
                        "type": "POLYLINE",
                        "points": [
                                {
                                        "x": 2.0,
                                        "y": 0.0
                                },
                                {
                                        "x": 1.848,
                                        "y": 0.765
                                },
                                {
                                        "x": 1.414,
                                        "y": 1.414
                                },
                                {
                                        "x": 0.765,
                                        "y": 1.848
                                },
                                {
                                        "x": 0.0,
                                        "y": 2.0
                                },
                                {
                                        "x": -0.765,
                                        "y": 1.848
                                },
                                {
                                        "x": -1.414,
                                        "y": 1.414
                                },
                                {
                                        "x": -1.848,
                                        "y": 0.765
                                },
                                {
                                        "x": -2.0,
                                        "y": 0.0
                                },
                                {
                                        "x": -1.848,
                                        "y": -0.765
                                },
                                {
                                        "x": -1.414,
                                        "y": -1.414
                                },
                                {
                                        "x": -0.765,
                                        "y": -1.848
                                },
                                {
                                        "x": -0.0,
                                        "y": -2.0
                                },
                                {
                                        "x": 0.765,
                                        "y": -1.848
                                },
                                {
                                        "x": 1.414,
                                        "y": -1.414
                                },
                                {
                                        "x": 1.848,
                                        "y": -0.765
                                }
                        ],
                        "closed": true
                },
                {
                        "type": "POLYLINE",
                        "points": [
                                {
                                        "x": 1.4,
                                        "y": 0.0
                                },
                                {
                                        "x": 1.212,
                                        "y": 0.7
                                },
                                {
                                        "x": 0.7,
                                        "y": 1.212
                                },
                                {
                                        "x": 0.0,
                                        "y": 1.4
                                },
                                {
                                        "x": -0.7,
                                        "y": 1.212
                                },
                                {
                                        "x": -1.212,
                                        "y": 0.7
                                },
                                {
                                        "x": -1.4,
                                        "y": 0.0
                                },
                                {
                                        "x": -1.212,
                                        "y": -0.7
                                },
                                {
                                        "x": -0.7,
                                        "y": -1.212
                                },
                                {
                                        "x": -0.0,
                                        "y": -1.4
                                },
                                {
                                        "x": 0.7,
                                        "y": -1.212
                                },
                                {
                                        "x": 1.212,
                                        "y": -0.7
                                }
                        ],
                        "closed": true
                },
                {
                        "type": "CIRCLE",
                        "cx": 0.8,
                        "cy": 0.5,
                        "r": 0.3
                },
                {
                        "type": "CIRCLE",
                        "cx": -0.7,
                        "cy": -0.4,
                        "r": 0.25
                }
        ]
},

    "ARTIFICIAL_WATERFALL": {
        "id": "ARTIFICIAL_WATERFALL",
        "name": "Cascata artificial",
        "name_en": "Tiered Artificial Waterfall",
        "category": "vegetation",
        "categoryName": "Paisagismo Diferenciado",
        "dimensions": "2.50m x 1.50m",
        "layer": "Paisagismo",
        "color": "#10b981",
        "svgPreview": "<svg viewBox=\"-1.5 -1.0 3.0 2.0\" width=\"48\" height=\"34\" stroke=\"#10b981\" stroke-width=\"0.05\" fill=\"none\"><rect x=\"-1.25\" y=\"-0.75\" width=\"2.5\" height=\"1.5\" rx=\"0.3\"/><line x1=\"-1.0\" y1=\"-0.2\" x2=\"1.0\" y2=\"-0.2\"/><line x1=\"-0.8\" y1=\"0.3\" x2=\"0.8\" y2=\"0.3\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": -1.25,
                        "y1": -0.75,
                        "x2": 1.25,
                        "y2": -0.75
                },
                {
                        "type": "LINE",
                        "x1": 1.25,
                        "y1": -0.75,
                        "x2": 1.25,
                        "y2": 0.75
                },
                {
                        "type": "LINE",
                        "x1": 1.25,
                        "y1": 0.75,
                        "x2": -1.25,
                        "y2": 0.75
                },
                {
                        "type": "LINE",
                        "x1": -1.25,
                        "y1": 0.75,
                        "x2": -1.25,
                        "y2": -0.75
                },
                {
                        "type": "LINE",
                        "x1": -1.0,
                        "y1": -0.5,
                        "x2": 1.0,
                        "y2": -0.5
                },
                {
                        "type": "LINE",
                        "x1": 1.0,
                        "y1": -0.5,
                        "x2": 1.0,
                        "y2": -0.1
                },
                {
                        "type": "LINE",
                        "x1": 1.0,
                        "y1": -0.1,
                        "x2": -1.0,
                        "y2": -0.1
                },
                {
                        "type": "LINE",
                        "x1": -1.0,
                        "y1": -0.1,
                        "x2": -1.0,
                        "y2": -0.5
                },
                {
                        "type": "LINE",
                        "x1": -0.75,
                        "y1": -0.1,
                        "x2": 0.75,
                        "y2": -0.1
                },
                {
                        "type": "LINE",
                        "x1": 0.75,
                        "y1": -0.1,
                        "x2": 0.75,
                        "y2": 0.3
                },
                {
                        "type": "LINE",
                        "x1": 0.75,
                        "y1": 0.3,
                        "x2": -0.75,
                        "y2": 0.3
                },
                {
                        "type": "LINE",
                        "x1": -0.75,
                        "y1": 0.3,
                        "x2": -0.75,
                        "y2": -0.1
                },
                {
                        "type": "POLYLINE",
                        "points": [
                                {
                                        "x": 0.4,
                                        "y": 0.5
                                },
                                {
                                        "x": 0.324,
                                        "y": 0.735
                                },
                                {
                                        "x": 0.124,
                                        "y": 0.88
                                },
                                {
                                        "x": -0.124,
                                        "y": 0.88
                                },
                                {
                                        "x": -0.324,
                                        "y": 0.735
                                },
                                {
                                        "x": -0.4,
                                        "y": 0.5
                                },
                                {
                                        "x": -0.324,
                                        "y": 0.265
                                },
                                {
                                        "x": -0.124,
                                        "y": 0.12
                                },
                                {
                                        "x": 0.124,
                                        "y": 0.12
                                },
                                {
                                        "x": 0.324,
                                        "y": 0.265
                                }
                        ],
                        "closed": true
                }
        ]
},

    "WALL_WATER_FOUNTAIN": {
        "id": "WALL_WATER_FOUNTAIN",
        "name": "Fonte de parede",
        "name_en": "Wall-Mounted Classical Fountain",
        "category": "vegetation",
        "categoryName": "Paisagismo Diferenciado",
        "dimensions": "1.50m x 0.50m",
        "layer": "Paisagismo",
        "color": "#10b981",
        "svgPreview": "<svg viewBox=\"-0.8 -0.3 1.6 0.6\" width=\"48\" height=\"20\" stroke=\"#10b981\" stroke-width=\"0.03\" fill=\"none\"><line x1=\"-0.75\" y1=\"0.25\" x2=\"0.75\" y2=\"0.25\" stroke-width=\"0.08\"/><arc cx=\"0\" cy=\"0.25\" r=\"0.45\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": -0.75,
                        "y1": 0.15,
                        "x2": 0.75,
                        "y2": 0.15
                },
                {
                        "type": "LINE",
                        "x1": 0.75,
                        "y1": 0.15,
                        "x2": 0.75,
                        "y2": 0.25
                },
                {
                        "type": "LINE",
                        "x1": 0.75,
                        "y1": 0.25,
                        "x2": -0.75,
                        "y2": 0.25
                },
                {
                        "type": "LINE",
                        "x1": -0.75,
                        "y1": 0.25,
                        "x2": -0.75,
                        "y2": 0.15
                },
                {
                        "type": "ARC",
                        "cx": 0,
                        "cy": 0.15,
                        "r": 0.45,
                        "startAngle": 3.141592653589793,
                        "endAngle": 6.283185307179586
                },
                {
                        "type": "CIRCLE",
                        "cx": 0,
                        "cy": 0.15,
                        "r": 0.06
                }
        ]
},

    "REFLECTING_POOL": {
        "id": "REFLECTING_POOL",
        "name": "Espelho d’água",
        "name_en": "Reflecting Pool with Overflow Edge",
        "category": "vegetation",
        "categoryName": "Paisagismo Diferenciado",
        "dimensions": "6.00m x 2.00m",
        "layer": "Paisagismo",
        "color": "#10b981",
        "svgPreview": "<svg viewBox=\"-0.3 -0.3 6.6 2.6\" width=\"56\" height=\"24\" stroke=\"#10b981\" stroke-width=\"0.06\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"6.0\" height=\"2.0\"/><rect x=\"0.2\" y=\"0.2\" width=\"5.6\" height=\"1.6\" stroke-dasharray=\"0.2,0.2\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 6.0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 6.0,
                        "y1": 0,
                        "x2": 6.0,
                        "y2": 2.0
                },
                {
                        "type": "LINE",
                        "x1": 6.0,
                        "y1": 2.0,
                        "x2": 0,
                        "y2": 2.0
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 2.0,
                        "x2": 0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 0.15,
                        "y1": 0.15,
                        "x2": 5.85,
                        "y2": 0.15
                },
                {
                        "type": "LINE",
                        "x1": 5.85,
                        "y1": 0.15,
                        "x2": 5.85,
                        "y2": 1.85
                },
                {
                        "type": "LINE",
                        "x1": 5.85,
                        "y1": 1.85,
                        "x2": 0.15,
                        "y2": 1.85
                },
                {
                        "type": "LINE",
                        "x1": 0.15,
                        "y1": 1.85,
                        "x2": 0.15,
                        "y2": 0.15
                },
                {
                        "type": "CIRCLE",
                        "cx": 1.0,
                        "cy": 1.0,
                        "r": 0.08
                },
                {
                        "type": "CIRCLE",
                        "cx": 3.0,
                        "cy": 1.0,
                        "r": 0.08
                },
                {
                        "type": "CIRCLE",
                        "cx": 5.0,
                        "cy": 1.0,
                        "r": 0.08
                }
        ]
},

    "RAISED_GARDEN_BED": {
        "id": "RAISED_GARDEN_BED",
        "name": "Canteiro elevado",
        "name_en": "Raised Masonry Planter Bed",
        "category": "vegetation",
        "categoryName": "Paisagismo Diferenciado",
        "dimensions": "2.40m x 1.00m",
        "layer": "Paisagismo",
        "color": "#10b981",
        "svgPreview": "<svg viewBox=\"-0.2 -0.2 2.8 1.4\" width=\"48\" height=\"26\" stroke=\"#10b981\" stroke-width=\"0.04\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"2.4\" height=\"1.0\" rx=\"0.05\"/><rect x=\"0.15\" y=\"0.15\" width=\"2.1\" height=\"0.7\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 2.4,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 2.4,
                        "y1": 0,
                        "x2": 2.4,
                        "y2": 1.0
                },
                {
                        "type": "LINE",
                        "x1": 2.4,
                        "y1": 1.0,
                        "x2": 0,
                        "y2": 1.0
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 1.0,
                        "x2": 0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 0.15,
                        "y1": 0.15,
                        "x2": 2.25,
                        "y2": 0.15
                },
                {
                        "type": "LINE",
                        "x1": 2.25,
                        "y1": 0.15,
                        "x2": 2.25,
                        "y2": 0.85
                },
                {
                        "type": "LINE",
                        "x1": 2.25,
                        "y1": 0.85,
                        "x2": 0.15,
                        "y2": 0.85
                },
                {
                        "type": "LINE",
                        "x1": 0.15,
                        "y1": 0.85,
                        "x2": 0.15,
                        "y2": 0.15
                },
                {
                        "type": "CIRCLE",
                        "cx": 0.5,
                        "cy": 0.5,
                        "r": 0.25
                },
                {
                        "type": "CIRCLE",
                        "cx": 1.2,
                        "cy": 0.5,
                        "r": 0.25
                },
                {
                        "type": "CIRCLE",
                        "cx": 1.9,
                        "cy": 0.5,
                        "r": 0.25
                }
        ]
},

    "COMMUNITY_VEG_GARDEN": {
        "id": "COMMUNITY_VEG_GARDEN",
        "name": "Horta comunitária",
        "name_en": "Community Vegetable Garden Beds",
        "category": "vegetation",
        "categoryName": "Paisagismo Diferenciado",
        "dimensions": "4.00m x 2.50m",
        "layer": "Paisagismo",
        "color": "#10b981",
        "svgPreview": "<svg viewBox=\"-0.2 -0.2 4.4 2.9\" width=\"52\" height=\"34\" stroke=\"#10b981\" stroke-width=\"0.05\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"4.0\" height=\"2.5\"/><rect x=\"0.3\" y=\"0.3\" width=\"1.5\" height=\"1.9\"/><rect x=\"2.2\" y=\"0.3\" width=\"1.5\" height=\"1.9\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 4.0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 4.0,
                        "y1": 0,
                        "x2": 4.0,
                        "y2": 2.5
                },
                {
                        "type": "LINE",
                        "x1": 4.0,
                        "y1": 2.5,
                        "x2": 0,
                        "y2": 2.5
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 2.5,
                        "x2": 0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 0.3,
                        "y1": 0.3,
                        "x2": 1.8,
                        "y2": 0.3
                },
                {
                        "type": "LINE",
                        "x1": 1.8,
                        "y1": 0.3,
                        "x2": 1.8,
                        "y2": 2.2
                },
                {
                        "type": "LINE",
                        "x1": 1.8,
                        "y1": 2.2,
                        "x2": 0.3,
                        "y2": 2.2
                },
                {
                        "type": "LINE",
                        "x1": 0.3,
                        "y1": 2.2,
                        "x2": 0.3,
                        "y2": 0.3
                },
                {
                        "type": "LINE",
                        "x1": 0.3,
                        "y1": 0.9,
                        "x2": 1.8,
                        "y2": 0.9
                },
                {
                        "type": "LINE",
                        "x1": 0.3,
                        "y1": 1.5,
                        "x2": 1.8,
                        "y2": 1.5
                },
                {
                        "type": "LINE",
                        "x1": 2.2,
                        "y1": 0.3,
                        "x2": 3.7,
                        "y2": 0.3
                },
                {
                        "type": "LINE",
                        "x1": 3.7,
                        "y1": 0.3,
                        "x2": 3.7,
                        "y2": 2.2
                },
                {
                        "type": "LINE",
                        "x1": 3.7,
                        "y1": 2.2,
                        "x2": 2.2,
                        "y2": 2.2
                },
                {
                        "type": "LINE",
                        "x1": 2.2,
                        "y1": 2.2,
                        "x2": 2.2,
                        "y2": 0.3
                },
                {
                        "type": "LINE",
                        "x1": 2.2,
                        "y1": 0.9,
                        "x2": 3.7,
                        "y2": 0.9
                },
                {
                        "type": "LINE",
                        "x1": 2.2,
                        "y1": 1.5,
                        "x2": 3.7,
                        "y2": 1.5
                }
        ]
},

    "RAIN_GARDEN_SUDS": {
        "id": "RAIN_GARDEN_SUDS",
        "name": "Jardim de chuva",
        "name_en": "Bio-Retention Rain Garden (SUDS)",
        "category": "vegetation",
        "categoryName": "Paisagismo Diferenciado",
        "dimensions": "3.50m x 2.00m",
        "layer": "Paisagismo",
        "color": "#10b981",
        "svgPreview": "<svg viewBox=\"-1.9 -1.1 3.8 2.2\" width=\"52\" height=\"32\" stroke=\"#10b981\" stroke-width=\"0.05\" fill=\"none\"><ellipse cx=\"0\" cy=\"0\" rx=\"1.6\" ry=\"0.9\"/><ellipse cx=\"0\" cy=\"0\" rx=\"1.1\" ry=\"0.6\" stroke-dasharray=\"0.1,0.1\"/></svg>",
        "entities": [
                {
                        "type": "POLYLINE",
                        "points": [
                                {
                                        "x": 1.6,
                                        "y": 0.0
                                },
                                {
                                        "x": 1.478,
                                        "y": 0.612
                                },
                                {
                                        "x": 1.131,
                                        "y": 1.131
                                },
                                {
                                        "x": 0.612,
                                        "y": 1.478
                                },
                                {
                                        "x": 0.0,
                                        "y": 1.6
                                },
                                {
                                        "x": -0.612,
                                        "y": 1.478
                                },
                                {
                                        "x": -1.131,
                                        "y": 1.131
                                },
                                {
                                        "x": -1.478,
                                        "y": 0.612
                                },
                                {
                                        "x": -1.6,
                                        "y": 0.0
                                },
                                {
                                        "x": -1.478,
                                        "y": -0.612
                                },
                                {
                                        "x": -1.131,
                                        "y": -1.131
                                },
                                {
                                        "x": -0.612,
                                        "y": -1.478
                                },
                                {
                                        "x": -0.0,
                                        "y": -1.6
                                },
                                {
                                        "x": 0.612,
                                        "y": -1.478
                                },
                                {
                                        "x": 1.131,
                                        "y": -1.131
                                },
                                {
                                        "x": 1.478,
                                        "y": -0.612
                                }
                        ],
                        "closed": true
                },
                {
                        "type": "POLYLINE",
                        "points": [
                                {
                                        "x": 1.0,
                                        "y": 0.0
                                },
                                {
                                        "x": 0.866,
                                        "y": 0.5
                                },
                                {
                                        "x": 0.5,
                                        "y": 0.866
                                },
                                {
                                        "x": 0.0,
                                        "y": 1.0
                                },
                                {
                                        "x": -0.5,
                                        "y": 0.866
                                },
                                {
                                        "x": -0.866,
                                        "y": 0.5
                                },
                                {
                                        "x": -1.0,
                                        "y": 0.0
                                },
                                {
                                        "x": -0.866,
                                        "y": -0.5
                                },
                                {
                                        "x": -0.5,
                                        "y": -0.866
                                },
                                {
                                        "x": -0.0,
                                        "y": -1.0
                                },
                                {
                                        "x": 0.5,
                                        "y": -0.866
                                },
                                {
                                        "x": 0.866,
                                        "y": -0.5
                                }
                        ],
                        "closed": true
                },
                {
                        "type": "CIRCLE",
                        "cx": -0.7,
                        "cy": 0.2,
                        "r": 0.25
                },
                {
                        "type": "CIRCLE",
                        "cx": 0.5,
                        "cy": -0.3,
                        "r": 0.3
                }
        ]
},

    "POOL_DECK_CORNER": {
        "id": "POOL_DECK_CORNER",
        "name": "Borda de piscina com deck",
        "name_en": "Poolside Timber Deck Corner",
        "category": "vegetation",
        "categoryName": "Paisagismo Diferenciado",
        "dimensions": "4.00m x 4.00m",
        "layer": "Paisagismo",
        "color": "#10b981",
        "svgPreview": "<svg viewBox=\"-0.2 -0.2 4.4 4.4\" width=\"48\" height=\"48\" stroke=\"#10b981\" stroke-width=\"0.06\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"4.0\" height=\"4.0\"/><line x1=\"0\" y1=\"0.5\" x2=\"4.0\" y2=\"0.5\"/><line x1=\"0\" y1=\"1.0\" x2=\"4.0\" y2=\"1.0\"/><line x1=\"0\" y1=\"1.5\" x2=\"4.0\" y2=\"1.5\"/><rect x=\"2.0\" y=\"2.0\" width=\"2.0\" height=\"2.0\" fill=\"#00e5ff\" opacity=\"0.2\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 4.0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 4.0,
                        "y1": 0,
                        "x2": 4.0,
                        "y2": 4.0
                },
                {
                        "type": "LINE",
                        "x1": 4.0,
                        "y1": 4.0,
                        "x2": 0,
                        "y2": 4.0
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 4.0,
                        "x2": 0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0.5,
                        "x2": 4.0,
                        "y2": 0.5
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 1.0,
                        "x2": 4.0,
                        "y2": 1.0
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 1.5,
                        "x2": 4.0,
                        "y2": 1.5
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 2.0,
                        "x2": 2.0,
                        "y2": 2.0
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 2.5,
                        "x2": 2.0,
                        "y2": 2.5
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 3.0,
                        "x2": 2.0,
                        "y2": 3.0
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 3.5,
                        "x2": 2.0,
                        "y2": 3.5
                },
                {
                        "type": "LINE",
                        "x1": 2.0,
                        "y1": 2.0,
                        "x2": 4.0,
                        "y2": 2.0
                },
                {
                        "type": "LINE",
                        "x1": 4.0,
                        "y1": 2.0,
                        "x2": 4.0,
                        "y2": 4.0
                },
                {
                        "type": "LINE",
                        "x1": 4.0,
                        "y1": 4.0,
                        "x2": 2.0,
                        "y2": 4.0
                },
                {
                        "type": "LINE",
                        "x1": 2.0,
                        "y1": 4.0,
                        "x2": 2.0,
                        "y2": 2.0
                }
        ]
},

    "LANDSCAPE_BOULDER": {
        "id": "LANDSCAPE_BOULDER",
        "name": "Rocha paisagística",
        "name_en": "Natural Landscape Boulder Cluster",
        "category": "vegetation",
        "categoryName": "Paisagismo Diferenciado",
        "dimensions": "1.80m x 1.40m",
        "layer": "Paisagismo",
        "color": "#10b981",
        "svgPreview": "<svg viewBox=\"-1.0 -0.8 2.0 1.6\" width=\"44\" height=\"34\" stroke=\"#10b981\" stroke-width=\"0.04\" fill=\"none\"><polygon points=\"-0.8,-0.3 -0.5,-0.6 0.3,-0.5 0.8,-0.1 0.7,0.5 -0.2,0.6 -0.7,0.3\"/><line x1=\"-0.4\" y1=\"-0.2\" x2=\"0.3\" y2=\"0.1\"/></svg>",
        "entities": [
                {
                        "type": "POLYLINE",
                        "points": [
                                {
                                        "x": -0.85,
                                        "y": -0.3
                                },
                                {
                                        "x": -0.5,
                                        "y": -0.65
                                },
                                {
                                        "x": 0.35,
                                        "y": -0.55
                                },
                                {
                                        "x": 0.85,
                                        "y": -0.1
                                },
                                {
                                        "x": 0.75,
                                        "y": 0.55
                                },
                                {
                                        "x": -0.15,
                                        "y": 0.65
                                },
                                {
                                        "x": -0.75,
                                        "y": 0.35
                                }
                        ],
                        "closed": true
                },
                {
                        "type": "LINE",
                        "x1": -0.4,
                        "y1": -0.2,
                        "x2": 0.3,
                        "y2": 0.15
                }
        ]
},

    "GARDEN_BOLLARD_LIGHT": {
        "id": "GARDEN_BOLLARD_LIGHT",
        "name": "Iluminação de jardim",
        "name_en": "Landscape Path Bollard Light",
        "category": "vegetation",
        "categoryName": "Paisagismo Diferenciado",
        "dimensions": "0.25m x 0.25m",
        "layer": "Paisagismo",
        "color": "#10b981",
        "svgPreview": "<svg viewBox=\"-0.2 -0.2 0.4 0.4\" width=\"36\" height=\"36\" stroke=\"#10b981\" stroke-width=\"0.02\" fill=\"none\"><circle cx=\"0\" cy=\"0\" r=\"0.12\"/><circle cx=\"0\" cy=\"0\" r=\"0.05\" fill=\"#10b981\"/><line x1=\"-0.18\" y1=\"0\" x2=\"0.18\" y2=\"0\"/><line x1=\"0\" y1=\"-0.18\" x2=\"0\" y2=\"0.18\"/></svg>",
        "entities": [
                {
                        "type": "CIRCLE",
                        "cx": 0,
                        "cy": 0,
                        "r": 0.125
                },
                {
                        "type": "CIRCLE",
                        "cx": 0,
                        "cy": 0,
                        "r": 0.05
                },
                {
                        "type": "LINE",
                        "x1": -0.25,
                        "y1": 0,
                        "x2": 0.25,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": -0.25,
                        "x2": 0,
                        "y2": 0.25
                }
        ]
},

    "POPUP_SPRINKLER": {
        "id": "POPUP_SPRINKLER",
        "name": "Irrigador escamoteável",
        "name_en": "Pop-Up Lawn Sprinkler (180°)",
        "category": "vegetation",
        "categoryName": "Paisagismo Diferenciado",
        "dimensions": "0.15m x 0.15m",
        "layer": "Paisagismo",
        "color": "#10b981",
        "svgPreview": "<svg viewBox=\"-0.15 -0.15 0.3 0.3\" width=\"36\" height=\"36\" stroke=\"#10b981\" stroke-width=\"0.02\" fill=\"none\"><circle cx=\"0\" cy=\"0\" r=\"0.075\"/><path d=\"M -0.12 0 A 0.12 0.12 0 0 1 0.12 0\" stroke-dasharray=\"0.03,0.03\"/></svg>",
        "entities": [
                {
                        "type": "CIRCLE",
                        "cx": 0,
                        "cy": 0,
                        "r": 0.075
                },
                {
                        "type": "CIRCLE",
                        "cx": 0,
                        "cy": 0,
                        "r": 0.025
                },
                {
                        "type": "ARC",
                        "cx": 0,
                        "cy": 0,
                        "r": 0.2,
                        "startAngle": 0,
                        "endAngle": 3.141592653589793
                }
        ]
},

    "COWORKING_BENCH_6P": {
        "id": "COWORKING_BENCH_6P",
        "name": "Catálogo de mobiliário de coworking",
        "name_en": "6-Person Coworking Bench Desk",
        "category": "commercial",
        "categoryName": "Comercial & Corporativo",
        "dimensions": "3.60m x 1.40m",
        "layer": "Comercial",
        "color": "#8b5cf6",
        "svgPreview": "<svg viewBox=\"-0.2 -0.2 4.0 1.8\" width=\"56\" height=\"26\" stroke=\"#8b5cf6\" stroke-width=\"0.04\" fill=\"none\"><rect x=\"0\" y=\"0.2\" width=\"3.6\" height=\"1.0\"/><line x1=\"0\" y1=\"0.7\" x2=\"3.6\" y2=\"0.7\"/><circle cx=\"0.6\" cy=\"0.05\" r=\"0.15\"/><circle cx=\"1.8\" cy=\"0.05\" r=\"0.15\"/><circle cx=\"3.0\" cy=\"0.05\" r=\"0.15\"/><circle cx=\"0.6\" cy=\"1.35\" r=\"0.15\"/><circle cx=\"1.8\" cy=\"1.35\" r=\"0.15\"/><circle cx=\"3.0\" cy=\"1.35\" r=\"0.15\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0.2,
                        "x2": 3.6,
                        "y2": 0.2
                },
                {
                        "type": "LINE",
                        "x1": 3.6,
                        "y1": 0.2,
                        "x2": 3.6,
                        "y2": 1.2
                },
                {
                        "type": "LINE",
                        "x1": 3.6,
                        "y1": 1.2,
                        "x2": 0,
                        "y2": 1.2
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 1.2,
                        "x2": 0,
                        "y2": 0.2
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0.65,
                        "x2": 3.6,
                        "y2": 0.65
                },
                {
                        "type": "LINE",
                        "x1": 3.6,
                        "y1": 0.65,
                        "x2": 3.6,
                        "y2": 0.75
                },
                {
                        "type": "LINE",
                        "x1": 3.6,
                        "y1": 0.75,
                        "x2": 0,
                        "y2": 0.75
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0.75,
                        "x2": 0,
                        "y2": 0.65
                },
                {
                        "type": "CIRCLE",
                        "cx": 0.6,
                        "cy": 0.05,
                        "r": 0.22
                },
                {
                        "type": "CIRCLE",
                        "cx": 1.8,
                        "cy": 0.05,
                        "r": 0.22
                },
                {
                        "type": "CIRCLE",
                        "cx": 3.0,
                        "cy": 0.05,
                        "r": 0.22
                },
                {
                        "type": "CIRCLE",
                        "cx": 0.6,
                        "cy": 1.35,
                        "r": 0.22
                },
                {
                        "type": "CIRCLE",
                        "cx": 1.8,
                        "cy": 1.35,
                        "r": 0.22
                },
                {
                        "type": "CIRCLE",
                        "cx": 3.0,
                        "cy": 1.35,
                        "r": 0.22
                }
        ]
},

    "ACOUSTIC_PHONE_BOOTH": {
        "id": "ACOUSTIC_PHONE_BOOTH",
        "name": "Cabine acústica",
        "name_en": "Acoustic Privacy Phone Booth",
        "category": "commercial",
        "categoryName": "Comercial & Corporativo",
        "dimensions": "1.20m x 1.10m",
        "layer": "Comercial",
        "color": "#8b5cf6",
        "svgPreview": "<svg viewBox=\"-0.1 -0.1 1.4 1.3\" width=\"42\" height=\"40\" stroke=\"#8b5cf6\" stroke-width=\"0.03\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"1.2\" height=\"1.1\" rx=\"0.1\"/><rect x=\"0.1\" y=\"0.1\" width=\"1.0\" height=\"0.9\" stroke-dasharray=\"0.05,0.05\"/><rect x=\"0.3\" y=\"0.7\" width=\"0.6\" height=\"0.3\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 1.2,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 1.2,
                        "y1": 0,
                        "x2": 1.2,
                        "y2": 1.1
                },
                {
                        "type": "LINE",
                        "x1": 1.2,
                        "y1": 1.1,
                        "x2": 0,
                        "y2": 1.1
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 1.1,
                        "x2": 0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 0.08,
                        "y1": 0.08,
                        "x2": 1.12,
                        "y2": 0.08
                },
                {
                        "type": "LINE",
                        "x1": 1.12,
                        "y1": 0.08,
                        "x2": 1.12,
                        "y2": 1.02
                },
                {
                        "type": "LINE",
                        "x1": 1.12,
                        "y1": 1.02,
                        "x2": 0.08,
                        "y2": 1.02
                },
                {
                        "type": "LINE",
                        "x1": 0.08,
                        "y1": 1.02,
                        "x2": 0.08,
                        "y2": 0.08
                },
                {
                        "type": "LINE",
                        "x1": 0.25,
                        "y1": 0.2,
                        "x2": 0.95,
                        "y2": 0.2
                },
                {
                        "type": "LINE",
                        "x1": 0.95,
                        "y1": 0.2,
                        "x2": 0.95,
                        "y2": 0.55
                },
                {
                        "type": "LINE",
                        "x1": 0.95,
                        "y1": 0.55,
                        "x2": 0.25,
                        "y2": 0.55
                },
                {
                        "type": "LINE",
                        "x1": 0.25,
                        "y1": 0.55,
                        "x2": 0.25,
                        "y2": 0.2
                },
                {
                        "type": "LINE",
                        "x1": 0.35,
                        "y1": 0.65,
                        "x2": 0.85,
                        "y2": 0.65
                },
                {
                        "type": "LINE",
                        "x1": 0.85,
                        "y1": 0.65,
                        "x2": 0.85,
                        "y2": 0.95
                },
                {
                        "type": "LINE",
                        "x1": 0.85,
                        "y1": 0.95,
                        "x2": 0.35,
                        "y2": 0.95
                },
                {
                        "type": "LINE",
                        "x1": 0.35,
                        "y1": 0.95,
                        "x2": 0.35,
                        "y2": 0.65
                }
        ]
},

    "CORPORATE_LOUNGE_SET": {
        "id": "CORPORATE_LOUNGE_SET",
        "name": "Lounge corporativo",
        "name_en": "Corporate Lounge Seating Group",
        "category": "commercial",
        "categoryName": "Comercial & Corporativo",
        "dimensions": "3.50m x 3.00m",
        "layer": "Comercial",
        "color": "#8b5cf6",
        "svgPreview": "<svg viewBox=\"-0.2 -0.2 3.9 3.4\" width=\"48\" height=\"42\" stroke=\"#8b5cf6\" stroke-width=\"0.05\" fill=\"none\"><circle cx=\"1.75\" cy=\"1.5\" r=\"1.4\" stroke-dasharray=\"0.1,0.1\"/><circle cx=\"1.75\" cy=\"1.5\" r=\"0.45\"/><rect x=\"0.2\" y=\"1.1\" width=\"0.7\" height=\"0.8\" rx=\"0.3\"/><rect x=\"2.6\" y=\"1.1\" width=\"0.7\" height=\"0.8\" rx=\"0.3\"/><path d=\"M 0.6 0.4 Q 1.75 0 2.9 0.4\"/></svg>",
        "entities": [
                {
                        "type": "CIRCLE",
                        "cx": 1.75,
                        "cy": 1.5,
                        "r": 1.4
                },
                {
                        "type": "CIRCLE",
                        "cx": 1.75,
                        "cy": 1.5,
                        "r": 0.45
                },
                {
                        "type": "LINE",
                        "x1": 0.6,
                        "y1": 0.3,
                        "x2": 2.9,
                        "y2": 0.3
                },
                {
                        "type": "LINE",
                        "x1": 2.9,
                        "y1": 0.3,
                        "x2": 2.9,
                        "y2": 1.0
                },
                {
                        "type": "LINE",
                        "x1": 2.9,
                        "y1": 1.0,
                        "x2": 0.6,
                        "y2": 1.0
                },
                {
                        "type": "LINE",
                        "x1": 0.6,
                        "y1": 1.0,
                        "x2": 0.6,
                        "y2": 0.3
                },
                {
                        "type": "LINE",
                        "x1": 0.3,
                        "y1": 1.3,
                        "x2": 1.0,
                        "y2": 1.3
                },
                {
                        "type": "LINE",
                        "x1": 1.0,
                        "y1": 1.3,
                        "x2": 1.0,
                        "y2": 2.0
                },
                {
                        "type": "LINE",
                        "x1": 1.0,
                        "y1": 2.0,
                        "x2": 0.3,
                        "y2": 2.0
                },
                {
                        "type": "LINE",
                        "x1": 0.3,
                        "y1": 2.0,
                        "x2": 0.3,
                        "y2": 1.3
                },
                {
                        "type": "LINE",
                        "x1": 2.5,
                        "y1": 1.3,
                        "x2": 3.2,
                        "y2": 1.3
                },
                {
                        "type": "LINE",
                        "x1": 3.2,
                        "y1": 1.3,
                        "x2": 3.2,
                        "y2": 2.0
                },
                {
                        "type": "LINE",
                        "x1": 3.2,
                        "y1": 2.0,
                        "x2": 2.5,
                        "y2": 2.0
                },
                {
                        "type": "LINE",
                        "x1": 2.5,
                        "y1": 2.0,
                        "x2": 2.5,
                        "y2": 1.3
                }
        ]
},

    "CURVED_RECEPTION_DESK": {
        "id": "CURVED_RECEPTION_DESK",
        "name": "Recepção com balcão curvo",
        "name_en": "Curved Reception Welcome Counter",
        "category": "commercial",
        "categoryName": "Comercial & Corporativo",
        "dimensions": "3.20m x 1.80m",
        "layer": "Comercial",
        "color": "#8b5cf6",
        "svgPreview": "<svg viewBox=\"-0.2 -0.2 3.6 2.2\" width=\"52\" height=\"32\" stroke=\"#8b5cf6\" stroke-width=\"0.05\" fill=\"none\"><path d=\"M 0.2 1.6 A 1.8 1.8 0 0 1 3.0 1.6\"/><path d=\"M 0.5 1.6 A 1.5 1.5 0 0 1 2.7 1.6\"/><circle cx=\"1.6\" cy=\"0.9\" r=\"0.25\"/></svg>",
        "entities": [
                {
                        "type": "ARC",
                        "cx": 1.6,
                        "cy": 1.8,
                        "r": 1.8,
                        "startAngle": 3.641592653589793,
                        "endAngle": 5.783185307179586
                },
                {
                        "type": "ARC",
                        "cx": 1.6,
                        "cy": 1.8,
                        "r": 1.4,
                        "startAngle": 3.641592653589793,
                        "endAngle": 5.783185307179586
                },
                {
                        "type": "CIRCLE",
                        "cx": 1.6,
                        "cy": 0.85,
                        "r": 0.25
                }
        ]
},

    "SELF_SERVICE_KIOSK": {
        "id": "SELF_SERVICE_KIOSK",
        "name": "Totem de autoatendimento",
        "name_en": "Self-Service Touchscreen Kiosk",
        "category": "commercial",
        "categoryName": "Comercial & Corporativo",
        "dimensions": "0.70m x 0.60m",
        "layer": "Comercial",
        "color": "#8b5cf6",
        "svgPreview": "<svg viewBox=\"-0.1 -0.1 0.9 0.8\" width=\"40\" height=\"36\" stroke=\"#8b5cf6\" stroke-width=\"0.03\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"0.7\" height=\"0.6\" rx=\"0.06\"/><rect x=\"0.1\" y=\"0.1\" width=\"0.5\" height=\"0.25\"/><line x1=\"0.2\" y1=\"0.45\" x2=\"0.5\" y2=\"0.45\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 0.7,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 0.7,
                        "y1": 0,
                        "x2": 0.7,
                        "y2": 0.6
                },
                {
                        "type": "LINE",
                        "x1": 0.7,
                        "y1": 0.6,
                        "x2": 0,
                        "y2": 0.6
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0.6,
                        "x2": 0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 0.1,
                        "y1": 0.1,
                        "x2": 0.6,
                        "y2": 0.1
                },
                {
                        "type": "LINE",
                        "x1": 0.6,
                        "y1": 0.1,
                        "x2": 0.6,
                        "y2": 0.35
                },
                {
                        "type": "LINE",
                        "x1": 0.6,
                        "y1": 0.35,
                        "x2": 0.1,
                        "y2": 0.35
                },
                {
                        "type": "LINE",
                        "x1": 0.1,
                        "y1": 0.35,
                        "x2": 0.1,
                        "y2": 0.1
                },
                {
                        "type": "LINE",
                        "x1": 0.2,
                        "y1": 0.45,
                        "x2": 0.5,
                        "y2": 0.45
                },
                {
                        "type": "LINE",
                        "x1": 0.42,
                        "y1": 0.25,
                        "x2": 0.6,
                        "y2": 0.25
                },
                {
                        "type": "LINE",
                        "x1": 0.6,
                        "y1": 0.25,
                        "x2": 0.6,
                        "y2": 0.5
                },
                {
                        "type": "LINE",
                        "x1": 0.6,
                        "y1": 0.5,
                        "x2": 0.42,
                        "y2": 0.5
                },
                {
                        "type": "LINE",
                        "x1": 0.42,
                        "y1": 0.5,
                        "x2": 0.42,
                        "y2": 0.25
                }
        ]
},

    "ATM_BANK_MACHINE": {
        "id": "ATM_BANK_MACHINE",
        "name": "Caixa eletrônico",
        "name_en": "ATM Banking Machine (Built-in)",
        "category": "commercial",
        "categoryName": "Comercial & Corporativo",
        "dimensions": "1.00m x 0.90m",
        "layer": "Comercial",
        "color": "#8b5cf6",
        "svgPreview": "<svg viewBox=\"-0.1 -0.1 1.2 1.1\" width=\"42\" height=\"38\" stroke=\"#8b5cf6\" stroke-width=\"0.03\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"1.0\" height=\"0.9\"/><line x1=\"0\" y1=\"0.3\" x2=\"1.0\" y2=\"0.3\"/><rect x=\"0.2\" y=\"0.4\" width=\"0.6\" height=\"0.35\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 1.0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 1.0,
                        "y1": 0,
                        "x2": 1.0,
                        "y2": 0.9
                },
                {
                        "type": "LINE",
                        "x1": 1.0,
                        "y1": 0.9,
                        "x2": 0,
                        "y2": 0.9
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0.9,
                        "x2": 0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0.3,
                        "x2": 1.0,
                        "y2": 0.3
                },
                {
                        "type": "LINE",
                        "x1": 0.1,
                        "y1": 0.35,
                        "x2": 0.9,
                        "y2": 0.35
                },
                {
                        "type": "LINE",
                        "x1": 0.9,
                        "y1": 0.35,
                        "x2": 0.9,
                        "y2": 0.85
                },
                {
                        "type": "LINE",
                        "x1": 0.9,
                        "y1": 0.85,
                        "x2": 0.1,
                        "y2": 0.85
                },
                {
                        "type": "LINE",
                        "x1": 0.1,
                        "y1": 0.85,
                        "x2": 0.1,
                        "y2": 0.35
                },
                {
                        "type": "LINE",
                        "x1": 0.25,
                        "y1": 0.05,
                        "x2": 0.75,
                        "y2": 0.05
                },
                {
                        "type": "LINE",
                        "x1": 0.75,
                        "y1": 0.05,
                        "x2": 0.75,
                        "y2": 0.25
                },
                {
                        "type": "LINE",
                        "x1": 0.75,
                        "y1": 0.25,
                        "x2": 0.25,
                        "y2": 0.25
                },
                {
                        "type": "LINE",
                        "x1": 0.25,
                        "y1": 0.25,
                        "x2": 0.25,
                        "y2": 0.05
                }
        ]
},

    "VENDING_MACHINE": {
        "id": "VENDING_MACHINE",
        "name": "Máquina de vending",
        "name_en": "Refrigerated Snack/Drink Vending Machine",
        "category": "commercial",
        "categoryName": "Comercial & Corporativo",
        "dimensions": "1.10m x 0.85m",
        "layer": "Comercial",
        "color": "#8b5cf6",
        "svgPreview": "<svg viewBox=\"-0.1 -0.1 1.3 1.05\" width=\"44\" height=\"36\" stroke=\"#8b5cf6\" stroke-width=\"0.03\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"1.1\" height=\"0.85\"/><line x1=\"0\" y1=\"0.2\" x2=\"0.8\" y2=\"0.2\"/><rect x=\"0.85\" y=\"0.1\" width=\"0.2\" height=\"0.65\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 1.1,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 1.1,
                        "y1": 0,
                        "x2": 1.1,
                        "y2": 0.85
                },
                {
                        "type": "LINE",
                        "x1": 1.1,
                        "y1": 0.85,
                        "x2": 0,
                        "y2": 0.85
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0.85,
                        "x2": 0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 0.05,
                        "y1": 0.2,
                        "x2": 0.8,
                        "y2": 0.2
                },
                {
                        "type": "LINE",
                        "x1": 0.85,
                        "y1": 0.1,
                        "x2": 1.05,
                        "y2": 0.1
                },
                {
                        "type": "LINE",
                        "x1": 1.05,
                        "y1": 0.1,
                        "x2": 1.05,
                        "y2": 0.75
                },
                {
                        "type": "LINE",
                        "x1": 1.05,
                        "y1": 0.75,
                        "x2": 0.85,
                        "y2": 0.75
                },
                {
                        "type": "LINE",
                        "x1": 0.85,
                        "y1": 0.75,
                        "x2": 0.85,
                        "y2": 0.1
                },
                {
                        "type": "LINE",
                        "x1": 0.15,
                        "y1": 0.05,
                        "x2": 0.75,
                        "y2": 0.05
                },
                {
                        "type": "LINE",
                        "x1": 0.75,
                        "y1": 0.05,
                        "x2": 0.75,
                        "y2": 0.17
                },
                {
                        "type": "LINE",
                        "x1": 0.75,
                        "y1": 0.17,
                        "x2": 0.15,
                        "y2": 0.17
                },
                {
                        "type": "LINE",
                        "x1": 0.15,
                        "y1": 0.17,
                        "x2": 0.15,
                        "y2": 0.05
                }
        ]
},

    "ESPRESSO_COFFEE_STATION": {
        "id": "ESPRESSO_COFFEE_STATION",
        "name": "Máquina de café profissional",
        "name_en": "Commercial Espresso Coffee Station",
        "category": "commercial",
        "categoryName": "Comercial & Corporativo",
        "dimensions": "1.60m x 0.75m",
        "layer": "Comercial",
        "color": "#8b5cf6",
        "svgPreview": "<svg viewBox=\"-0.1 -0.1 1.8 0.95\" width=\"48\" height=\"26\" stroke=\"#8b5cf6\" stroke-width=\"0.03\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"1.6\" height=\"0.75\"/><rect x=\"0.4\" y=\"0.1\" width=\"0.8\" height=\"0.5\"/><circle cx=\"0.6\" cy=\"0.35\" r=\"0.1\"/><circle cx=\"1.0\" cy=\"0.35\" r=\"0.1\"/><circle cx=\"0.2\" cy=\"0.35\" r=\"0.12\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 1.6,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 1.6,
                        "y1": 0,
                        "x2": 1.6,
                        "y2": 0.75
                },
                {
                        "type": "LINE",
                        "x1": 1.6,
                        "y1": 0.75,
                        "x2": 0,
                        "y2": 0.75
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0.75,
                        "x2": 0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 0.4,
                        "y1": 0.1,
                        "x2": 1.2,
                        "y2": 0.1
                },
                {
                        "type": "LINE",
                        "x1": 1.2,
                        "y1": 0.1,
                        "x2": 1.2,
                        "y2": 0.6
                },
                {
                        "type": "LINE",
                        "x1": 1.2,
                        "y1": 0.6,
                        "x2": 0.4,
                        "y2": 0.6
                },
                {
                        "type": "LINE",
                        "x1": 0.4,
                        "y1": 0.6,
                        "x2": 0.4,
                        "y2": 0.1
                },
                {
                        "type": "CIRCLE",
                        "cx": 0.6,
                        "cy": 0.35,
                        "r": 0.1
                },
                {
                        "type": "CIRCLE",
                        "cx": 1.0,
                        "cy": 0.35,
                        "r": 0.1
                },
                {
                        "type": "CIRCLE",
                        "cx": 0.2,
                        "cy": 0.35,
                        "r": 0.12
                },
                {
                        "type": "LINE",
                        "x1": 1.3,
                        "y1": 0.25,
                        "x2": 1.5,
                        "y2": 0.25
                },
                {
                        "type": "LINE",
                        "x1": 1.5,
                        "y1": 0.25,
                        "x2": 1.5,
                        "y2": 0.5
                },
                {
                        "type": "LINE",
                        "x1": 1.5,
                        "y1": 0.5,
                        "x2": 1.3,
                        "y2": 0.5
                },
                {
                        "type": "LINE",
                        "x1": 1.3,
                        "y1": 0.5,
                        "x2": 1.3,
                        "y2": 0.25
                }
        ]
},

    "RETAIL_ISLAND_DISPLAY": {
        "id": "RETAIL_ISLAND_DISPLAY",
        "name": "Expositor de loja",
        "name_en": "Tiered Retail Island Display Table",
        "category": "commercial",
        "categoryName": "Comercial & Corporativo",
        "dimensions": "2.00m x 1.00m",
        "layer": "Comercial",
        "color": "#8b5cf6",
        "svgPreview": "<svg viewBox=\"-0.1 -0.1 2.2 1.2\" width=\"48\" height=\"26\" stroke=\"#8b5cf6\" stroke-width=\"0.03\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"2.0\" height=\"1.0\" rx=\"0.1\"/><rect x=\"0.2\" y=\"0.15\" width=\"1.6\" height=\"0.7\"/><rect x=\"0.5\" y=\"0.3\" width=\"1.0\" height=\"0.4\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 2.0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 2.0,
                        "y1": 0,
                        "x2": 2.0,
                        "y2": 1.0
                },
                {
                        "type": "LINE",
                        "x1": 2.0,
                        "y1": 1.0,
                        "x2": 0,
                        "y2": 1.0
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 1.0,
                        "x2": 0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 0.2,
                        "y1": 0.15,
                        "x2": 1.8,
                        "y2": 0.15
                },
                {
                        "type": "LINE",
                        "x1": 1.8,
                        "y1": 0.15,
                        "x2": 1.8,
                        "y2": 0.85
                },
                {
                        "type": "LINE",
                        "x1": 1.8,
                        "y1": 0.85,
                        "x2": 0.2,
                        "y2": 0.85
                },
                {
                        "type": "LINE",
                        "x1": 0.2,
                        "y1": 0.85,
                        "x2": 0.2,
                        "y2": 0.15
                },
                {
                        "type": "LINE",
                        "x1": 0.5,
                        "y1": 0.3,
                        "x2": 1.5,
                        "y2": 0.3
                },
                {
                        "type": "LINE",
                        "x1": 1.5,
                        "y1": 0.3,
                        "x2": 1.5,
                        "y2": 0.7
                },
                {
                        "type": "LINE",
                        "x1": 1.5,
                        "y1": 0.7,
                        "x2": 0.5,
                        "y2": 0.7
                },
                {
                        "type": "LINE",
                        "x1": 0.5,
                        "y1": 0.7,
                        "x2": 0.5,
                        "y2": 0.3
                }
        ]
},

    "GARMENT_RACK_HANGERS": {
        "id": "GARMENT_RACK_HANGERS",
        "name": "Arara de roupas",
        "name_en": "Garment Clothing Rack with Hangers",
        "category": "commercial",
        "categoryName": "Comercial & Corporativo",
        "dimensions": "1.50m x 0.55m",
        "layer": "Comercial",
        "color": "#8b5cf6",
        "svgPreview": "<svg viewBox=\"-0.1 -0.1 1.7 0.75\" width=\"48\" height=\"22\" stroke=\"#8b5cf6\" stroke-width=\"0.03\" fill=\"none\"><line x1=\"0.1\" y1=\"0.27\" x2=\"1.4\" y2=\"0.27\" stroke-width=\"0.06\"/><line x1=\"0.1\" y1=\"0\" x2=\"0.1\" y2=\"0.55\"/><line x1=\"1.4\" y1=\"0\" x2=\"1.4\" y2=\"0.55\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0.1,
                        "y1": 0.275,
                        "x2": 1.4,
                        "y2": 0.275
                },
                {
                        "type": "LINE",
                        "x1": 0.1,
                        "y1": 0.05,
                        "x2": 0.1,
                        "y2": 0.5
                },
                {
                        "type": "LINE",
                        "x1": 1.4,
                        "y1": 0.05,
                        "x2": 1.4,
                        "y2": 0.5
                },
                {
                        "type": "LINE",
                        "x1": 0.3,
                        "y1": 0.12,
                        "x2": 0.3,
                        "y2": 0.42
                },
                {
                        "type": "LINE",
                        "x1": 0.55,
                        "y1": 0.12,
                        "x2": 0.55,
                        "y2": 0.42
                },
                {
                        "type": "LINE",
                        "x1": 0.8,
                        "y1": 0.12,
                        "x2": 0.8,
                        "y2": 0.42
                },
                {
                        "type": "LINE",
                        "x1": 1.05,
                        "y1": 0.12,
                        "x2": 1.05,
                        "y2": 0.42
                }
        ]
},

    "MANNEQUIN_DUO": {
        "id": "MANNEQUIN_DUO",
        "name": "Manequins em poses variadas",
        "name_en": "Mannequin Display Pair (Male & Female)",
        "category": "commercial",
        "categoryName": "Comercial & Corporativo",
        "dimensions": "1.20m x 0.60m",
        "layer": "Comercial",
        "color": "#8b5cf6",
        "svgPreview": "<svg viewBox=\"-0.1 -0.1 1.4 0.8\" width=\"46\" height=\"28\" stroke=\"#8b5cf6\" stroke-width=\"0.03\" fill=\"none\"><circle cx=\"0.35\" cy=\"0.3\" r=\"0.22\"/><circle cx=\"0.95\" cy=\"0.3\" r=\"0.22\"/><line x1=\"0.2\" y1=\"0.3\" x2=\"0.5\" y2=\"0.3\"/><line x1=\"0.8\" y1=\"0.3\" x2=\"1.1\" y2=\"0.3\"/></svg>",
        "entities": [
                {
                        "type": "CIRCLE",
                        "cx": 0.35,
                        "cy": 0.3,
                        "r": 0.22
                },
                {
                        "type": "LINE",
                        "x1": 0.18,
                        "y1": 0.3,
                        "x2": 0.52,
                        "y2": 0.3
                },
                {
                        "type": "CIRCLE",
                        "cx": 0.35,
                        "cy": 0.3,
                        "r": 0.1
                },
                {
                        "type": "CIRCLE",
                        "cx": 0.95,
                        "cy": 0.3,
                        "r": 0.22
                },
                {
                        "type": "LINE",
                        "x1": 0.8,
                        "y1": 0.22,
                        "x2": 1.1,
                        "y2": 0.38
                },
                {
                        "type": "CIRCLE",
                        "cx": 0.95,
                        "cy": 0.3,
                        "r": 0.09
                }
        ]
},

    "CHECKOUT_COUNTER": {
        "id": "CHECKOUT_COUNTER",
        "name": "Balcão de checkout",
        "name_en": "Supermarket Checkout Register Counter",
        "category": "commercial",
        "categoryName": "Comercial & Corporativo",
        "dimensions": "2.40m x 1.10m",
        "layer": "Comercial",
        "color": "#8b5cf6",
        "svgPreview": "<svg viewBox=\"-0.1 -0.1 2.6 1.3\" width=\"52\" height=\"28\" stroke=\"#8b5cf6\" stroke-width=\"0.04\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"2.4\" height=\"1.1\" rx=\"0.1\"/><rect x=\"0.2\" y=\"0.2\" width=\"1.1\" height=\"0.4\"/><circle cx=\"1.6\" cy=\"0.75\" r=\"0.2\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 2.4,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 2.4,
                        "y1": 0,
                        "x2": 2.4,
                        "y2": 1.1
                },
                {
                        "type": "LINE",
                        "x1": 2.4,
                        "y1": 1.1,
                        "x2": 0,
                        "y2": 1.1
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 1.1,
                        "x2": 0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 0.15,
                        "y1": 0.2,
                        "x2": 1.25,
                        "y2": 0.2
                },
                {
                        "type": "LINE",
                        "x1": 1.25,
                        "y1": 0.2,
                        "x2": 1.25,
                        "y2": 0.65
                },
                {
                        "type": "LINE",
                        "x1": 1.25,
                        "y1": 0.65,
                        "x2": 0.15,
                        "y2": 0.65
                },
                {
                        "type": "LINE",
                        "x1": 0.15,
                        "y1": 0.65,
                        "x2": 0.15,
                        "y2": 0.2
                },
                {
                        "type": "LINE",
                        "x1": 1.3,
                        "y1": 0.2,
                        "x2": 1.9,
                        "y2": 0.2
                },
                {
                        "type": "LINE",
                        "x1": 1.9,
                        "y1": 0.2,
                        "x2": 1.9,
                        "y2": 0.65
                },
                {
                        "type": "LINE",
                        "x1": 1.9,
                        "y1": 0.65,
                        "x2": 1.3,
                        "y2": 0.65
                },
                {
                        "type": "LINE",
                        "x1": 1.3,
                        "y1": 0.65,
                        "x2": 1.3,
                        "y2": 0.2
                },
                {
                        "type": "LINE",
                        "x1": 1.95,
                        "y1": 0.15,
                        "x2": 2.3,
                        "y2": 0.15
                },
                {
                        "type": "LINE",
                        "x1": 2.3,
                        "y1": 0.15,
                        "x2": 2.3,
                        "y2": 0.95
                },
                {
                        "type": "LINE",
                        "x1": 2.3,
                        "y1": 0.95,
                        "x2": 1.95,
                        "y2": 0.95
                },
                {
                        "type": "LINE",
                        "x1": 1.95,
                        "y1": 0.95,
                        "x2": 1.95,
                        "y2": 0.15
                },
                {
                        "type": "CIRCLE",
                        "cx": 1.55,
                        "cy": 0.85,
                        "r": 0.2
                }
        ]
},

    "SHOPPING_CART": {
        "id": "SHOPPING_CART",
        "name": "Carrinho de supermercado",
        "name_en": "Supermarket Shopping Cart",
        "category": "commercial",
        "categoryName": "Comercial & Corporativo",
        "dimensions": "1.05m x 0.60m",
        "layer": "Comercial",
        "color": "#8b5cf6",
        "svgPreview": "<svg viewBox=\"-0.1 -0.1 1.25 0.8\" width=\"46\" height=\"30\" stroke=\"#8b5cf6\" stroke-width=\"0.03\" fill=\"none\"><polygon points=\"0.15,0.1 0.95,0.18 0.95,0.42 0.15,0.5\"/><line x1=\"0.05\" y1=\"0.15\" x2=\"0.05\" y2=\"0.45\" stroke-width=\"0.06\"/></svg>",
        "entities": [
                {
                        "type": "POLYLINE",
                        "points": [
                                {
                                        "x": 0.15,
                                        "y": 0.1
                                },
                                {
                                        "x": 0.95,
                                        "y": 0.18
                                },
                                {
                                        "x": 0.95,
                                        "y": 0.42
                                },
                                {
                                        "x": 0.15,
                                        "y": 0.5
                                }
                        ],
                        "closed": true
                },
                {
                        "type": "LINE",
                        "x1": 0.05,
                        "y1": 0.12,
                        "x2": 0.05,
                        "y2": 0.48
                },
                {
                        "type": "CIRCLE",
                        "cx": 0.2,
                        "cy": 0.12,
                        "r": 0.04
                },
                {
                        "type": "CIRCLE",
                        "cx": 0.2,
                        "cy": 0.48,
                        "r": 0.04
                },
                {
                        "type": "CIRCLE",
                        "cx": 0.9,
                        "cy": 0.2,
                        "r": 0.04
                },
                {
                        "type": "CIRCLE",
                        "cx": 0.9,
                        "cy": 0.4,
                        "r": 0.04
                }
        ]
},

    "SUPERMARKET_GONDOLA": {
        "id": "SUPERMARKET_GONDOLA",
        "name": "Gôndolas",
        "name_en": "Double-Sided Supermarket Gondola Shelving",
        "category": "commercial",
        "categoryName": "Comercial & Corporativo",
        "dimensions": "3.00m x 0.90m",
        "layer": "Comercial",
        "color": "#8b5cf6",
        "svgPreview": "<svg viewBox=\"-0.1 -0.1 3.2 1.1\" width=\"56\" height=\"20\" stroke=\"#8b5cf6\" stroke-width=\"0.04\" fill=\"none\"><rect x=\"0.2\" y=\"0\" width=\"2.6\" height=\"0.9\"/><line x1=\"0.2\" y1=\"0.45\" x2=\"2.8\" y2=\"0.45\"/><arc cx=\"0.2\" cy=\"0.45\" r=\"0.45\"/><arc cx=\"2.8\" cy=\"0.45\" r=\"0.45\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0.2,
                        "y1": 0.45,
                        "x2": 2.8,
                        "y2": 0.45
                },
                {
                        "type": "LINE",
                        "x1": 0.2,
                        "y1": 0,
                        "x2": 2.8,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 2.8,
                        "y1": 0,
                        "x2": 2.8,
                        "y2": 0.45
                },
                {
                        "type": "LINE",
                        "x1": 2.8,
                        "y1": 0.45,
                        "x2": 0.2,
                        "y2": 0.45
                },
                {
                        "type": "LINE",
                        "x1": 0.2,
                        "y1": 0.45,
                        "x2": 0.2,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 0.2,
                        "y1": 0.45,
                        "x2": 2.8,
                        "y2": 0.45
                },
                {
                        "type": "LINE",
                        "x1": 2.8,
                        "y1": 0.45,
                        "x2": 2.8,
                        "y2": 0.9
                },
                {
                        "type": "LINE",
                        "x1": 2.8,
                        "y1": 0.9,
                        "x2": 0.2,
                        "y2": 0.9
                },
                {
                        "type": "LINE",
                        "x1": 0.2,
                        "y1": 0.9,
                        "x2": 0.2,
                        "y2": 0.45
                },
                {
                        "type": "ARC",
                        "cx": 0.2,
                        "cy": 0.45,
                        "r": 0.45,
                        "startAngle": 1.5707963267948966,
                        "endAngle": 4.71238898038469
                },
                {
                        "type": "ARC",
                        "cx": 2.8,
                        "cy": 0.45,
                        "r": 0.45,
                        "startAngle": -1.5707963267948966,
                        "endAngle": 1.5707963267948966
                }
        ]
},

    "LED_OUTDOOR_SCREEN": {
        "id": "LED_OUTDOOR_SCREEN",
        "name": "Painel de LED publicitário",
        "name_en": "Outdoor Digital LED Screen Totem",
        "category": "commercial",
        "categoryName": "Comercial & Corporativo",
        "dimensions": "4.00m x 0.40m",
        "layer": "Comercial",
        "color": "#8b5cf6",
        "svgPreview": "<svg viewBox=\"-0.2 -0.2 4.4 0.8\" width=\"56\" height=\"16\" stroke=\"#8b5cf6\" stroke-width=\"0.04\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"4.0\" height=\"0.4\" rx=\"0.05\"/><line x1=\"0.1\" y1=\"0.2\" x2=\"3.9\" y2=\"0.2\" stroke-dasharray=\"0.1,0.1\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 4.0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 4.0,
                        "y1": 0,
                        "x2": 4.0,
                        "y2": 0.4
                },
                {
                        "type": "LINE",
                        "x1": 4.0,
                        "y1": 0.4,
                        "x2": 0,
                        "y2": 0.4
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0.4,
                        "x2": 0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 0.1,
                        "y1": 0.08,
                        "x2": 3.9,
                        "y2": 0.08
                },
                {
                        "type": "LINE",
                        "x1": 3.9,
                        "y1": 0.08,
                        "x2": 3.9,
                        "y2": 0.32
                },
                {
                        "type": "LINE",
                        "x1": 3.9,
                        "y1": 0.32,
                        "x2": 0.1,
                        "y2": 0.32
                },
                {
                        "type": "LINE",
                        "x1": 0.1,
                        "y1": 0.32,
                        "x2": 0.1,
                        "y2": 0.08
                },
                {
                        "type": "LINE",
                        "x1": 1.0,
                        "y1": 0.08,
                        "x2": 1.0,
                        "y2": 0.32
                },
                {
                        "type": "LINE",
                        "x1": 2.0,
                        "y1": 0.08,
                        "x2": 2.0,
                        "y2": 0.32
                },
                {
                        "type": "LINE",
                        "x1": 3.0,
                        "y1": 0.08,
                        "x2": 3.0,
                        "y2": 0.32
                }
        ]
},

    "UTILITY_POLE_MV": {
        "id": "UTILITY_POLE_MV",
        "name": "Poste de média tensão",
        "name_en": "Medium Voltage Utility Pole with Crossarm",
        "category": "infra",
        "categoryName": "Infraestrutura & Redes",
        "dimensions": "1.80m x 1.00m",
        "layer": "Instalações",
        "color": "#ec4899",
        "svgPreview": "<svg viewBox=\"-1.0 -0.6 2.0 1.2\" width=\"46\" height=\"28\" stroke=\"#ec4899\" stroke-width=\"0.04\" fill=\"none\"><circle cx=\"0\" cy=\"0\" r=\"0.25\"/><line x1=\"-0.8\" y1=\"0\" x2=\"0.8\" y2=\"0\" stroke-width=\"0.08\"/><circle cx=\"-0.7\" cy=\"0\" r=\"0.08\"/><circle cx=\"0\" cy=\"0\" r=\"0.08\"/><circle cx=\"0.7\" cy=\"0\" r=\"0.08\"/></svg>",
        "entities": [
                {
                        "type": "CIRCLE",
                        "cx": 0,
                        "cy": 0,
                        "r": 0.25
                },
                {
                        "type": "LINE",
                        "x1": -0.9,
                        "y1": -0.06,
                        "x2": 0.9,
                        "y2": -0.06
                },
                {
                        "type": "LINE",
                        "x1": 0.9,
                        "y1": -0.06,
                        "x2": 0.9,
                        "y2": 0.06
                },
                {
                        "type": "LINE",
                        "x1": 0.9,
                        "y1": 0.06,
                        "x2": -0.9,
                        "y2": 0.06
                },
                {
                        "type": "LINE",
                        "x1": -0.9,
                        "y1": 0.06,
                        "x2": -0.9,
                        "y2": -0.06
                },
                {
                        "type": "CIRCLE",
                        "cx": -0.75,
                        "cy": 0,
                        "r": 0.08
                },
                {
                        "type": "CIRCLE",
                        "cx": 0,
                        "cy": 0.15,
                        "r": 0.08
                },
                {
                        "type": "CIRCLE",
                        "cx": 0.75,
                        "cy": 0,
                        "r": 0.08
                }
        ]
},

    "TRANSFORMER_POLE": {
        "id": "TRANSFORMER_POLE",
        "name": "Transformador em poste",
        "name_en": "Pole-Mounted Step-Down Transformer",
        "category": "infra",
        "categoryName": "Infraestrutura & Redes",
        "dimensions": "1.60m x 1.20m",
        "layer": "Instalações",
        "color": "#ec4899",
        "svgPreview": "<svg viewBox=\"-0.9 -0.7 1.8 1.4\" width=\"46\" height=\"36\" stroke=\"#ec4899\" stroke-width=\"0.04\" fill=\"none\"><circle cx=\"0\" cy=\"-0.3\" r=\"0.2\"/><rect x=\"-0.5\" y=\"-0.1\" width=\"1.0\" height=\"0.6\" rx=\"0.1\"/><circle cx=\"-0.3\" cy=\"0.2\" r=\"0.06\"/><circle cx=\"0\" cy=\"0.2\" r=\"0.06\"/><circle cx=\"0.3\" cy=\"0.2\" r=\"0.06\"/></svg>",
        "entities": [
                {
                        "type": "CIRCLE",
                        "cx": 0,
                        "cy": -0.35,
                        "r": 0.2
                },
                {
                        "type": "LINE",
                        "x1": -0.55,
                        "y1": -0.1,
                        "x2": 0.55,
                        "y2": -0.1
                },
                {
                        "type": "LINE",
                        "x1": 0.55,
                        "y1": -0.1,
                        "x2": 0.55,
                        "y2": 0.6
                },
                {
                        "type": "LINE",
                        "x1": 0.55,
                        "y1": 0.6,
                        "x2": -0.55,
                        "y2": 0.6
                },
                {
                        "type": "LINE",
                        "x1": -0.55,
                        "y1": 0.6,
                        "x2": -0.55,
                        "y2": -0.1
                },
                {
                        "type": "LINE",
                        "x1": -0.55,
                        "y1": 0.1,
                        "x2": -0.65,
                        "y2": 0.1
                },
                {
                        "type": "LINE",
                        "x1": -0.55,
                        "y1": 0.4,
                        "x2": -0.65,
                        "y2": 0.4
                },
                {
                        "type": "LINE",
                        "x1": 0.55,
                        "y1": 0.1,
                        "x2": 0.65,
                        "y2": 0.1
                },
                {
                        "type": "LINE",
                        "x1": 0.55,
                        "y1": 0.4,
                        "x2": 0.65,
                        "y2": 0.4
                },
                {
                        "type": "CIRCLE",
                        "cx": -0.3,
                        "cy": 0.25,
                        "r": 0.06
                },
                {
                        "type": "CIRCLE",
                        "cx": 0,
                        "cy": 0.25,
                        "r": 0.06
                },
                {
                        "type": "CIRCLE",
                        "cx": 0.3,
                        "cy": 0.25,
                        "r": 0.06
                }
        ]
},

    "COMPACT_SUBSTATION": {
        "id": "COMPACT_SUBSTATION",
        "name": "Subestação compacta",
        "name_en": "Pad-Mounted Compact Substation",
        "category": "infra",
        "categoryName": "Infraestrutura & Redes",
        "dimensions": "3.50m x 2.20m",
        "layer": "Instalações",
        "color": "#ec4899",
        "svgPreview": "<svg viewBox=\"-0.2 -0.2 3.9 2.6\" width=\"52\" height=\"34\" stroke=\"#ec4899\" stroke-width=\"0.05\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"3.5\" height=\"2.2\" rx=\"0.1\"/><line x1=\"1.4\" y1=\"0\" x2=\"1.4\" y2=\"2.2\"/><line x1=\"2.4\" y1=\"0\" x2=\"2.4\" y2=\"2.2\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 3.5,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 3.5,
                        "y1": 0,
                        "x2": 3.5,
                        "y2": 2.2
                },
                {
                        "type": "LINE",
                        "x1": 3.5,
                        "y1": 2.2,
                        "x2": 0,
                        "y2": 2.2
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 2.2,
                        "x2": 0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 1.4,
                        "y1": 0,
                        "x2": 1.4,
                        "y2": 2.2
                },
                {
                        "type": "LINE",
                        "x1": 2.45,
                        "y1": 0,
                        "x2": 2.45,
                        "y2": 2.2
                },
                {
                        "type": "LINE",
                        "x1": 1.6,
                        "y1": 0.05,
                        "x2": 2.2,
                        "y2": 0.05
                },
                {
                        "type": "LINE",
                        "x1": 1.6,
                        "y1": 2.15,
                        "x2": 2.2,
                        "y2": 2.15
                }
        ]
},

    "TELECOM_TOWER_LATTICE": {
        "id": "TELECOM_TOWER_LATTICE",
        "name": "Torre de telecomunicações",
        "name_en": "Lattice Telecom Tower Footprint",
        "category": "infra",
        "categoryName": "Infraestrutura & Redes",
        "dimensions": "4.50m x 4.50m",
        "layer": "Instalações",
        "color": "#ec4899",
        "svgPreview": "<svg viewBox=\"-2.5 -2.5 5 5\" width=\"48\" height=\"48\" stroke=\"#ec4899\" stroke-width=\"0.06\" fill=\"none\"><polygon points=\"0,-2.25 1.95,1.12 -1.95,1.12\"/><polygon points=\"0,2.25 1.95,-1.12 -1.95,-1.12\"/><circle cx=\"0\" cy=\"0\" r=\"0.3\"/></svg>",
        "entities": [
                {
                        "type": "POLYLINE",
                        "points": [
                                {
                                        "x": 2.25,
                                        "y": 0.0
                                },
                                {
                                        "x": -1.125,
                                        "y": 1.949
                                },
                                {
                                        "x": -1.125,
                                        "y": -1.949
                                }
                        ],
                        "closed": true
                },
                {
                        "type": "POLYLINE",
                        "points": [
                                {
                                        "x": 1.2,
                                        "y": 0.0
                                },
                                {
                                        "x": -0.6,
                                        "y": 1.039
                                },
                                {
                                        "x": -0.6,
                                        "y": -1.039
                                }
                        ],
                        "closed": true
                },
                {
                        "type": "CIRCLE",
                        "cx": 0,
                        "cy": 0,
                        "r": 0.3
                },
                {
                        "type": "CIRCLE",
                        "cx": 0,
                        "cy": -2.25,
                        "r": 0.35
                },
                {
                        "type": "CIRCLE",
                        "cx": 1.95,
                        "cy": 1.125,
                        "r": 0.35
                },
                {
                        "type": "CIRCLE",
                        "cx": -1.95,
                        "cy": 1.125,
                        "r": 0.35
                }
        ]
},

    "SATELLITE_DISH": {
        "id": "SATELLITE_DISH",
        "name": "Antena parabólica",
        "name_en": "Motorized Parabolic Satellite Dish",
        "category": "infra",
        "categoryName": "Infraestrutura & Redes",
        "dimensions": "2.40m x 2.40m",
        "layer": "Instalações",
        "color": "#ec4899",
        "svgPreview": "<svg viewBox=\"-1.4 -1.4 2.8 2.8\" width=\"46\" height=\"46\" stroke=\"#ec4899\" stroke-width=\"0.04\" fill=\"none\"><circle cx=\"0\" cy=\"0\" r=\"1.2\"/><circle cx=\"0\" cy=\"0\" r=\"0.2\"/><line x1=\"0\" y1=\"0\" x2=\"0.8\" y2=\"0.8\"/><circle cx=\"0.8\" cy=\"0.8\" r=\"0.1\" fill=\"#ec4899\"/></svg>",
        "entities": [
                {
                        "type": "CIRCLE",
                        "cx": 0,
                        "cy": 0,
                        "r": 1.2
                },
                {
                        "type": "CIRCLE",
                        "cx": 0,
                        "cy": 0,
                        "r": 0.2
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 0.85,
                        "y2": 0.85
                },
                {
                        "type": "CIRCLE",
                        "cx": 0.85,
                        "cy": 0.85,
                        "r": 0.12
                }
        ]
},

    "TELECOM_RACK_19": {
        "id": "TELECOM_RACK_19",
        "name": "Rack de telecom",
        "name_en": "Standard 19-Inch 42U Telecom Rack",
        "category": "infra",
        "categoryName": "Infraestrutura & Redes",
        "dimensions": "0.80m x 1.00m",
        "layer": "Instalações",
        "color": "#ec4899",
        "svgPreview": "<svg viewBox=\"-0.1 -0.1 1.0 1.2\" width=\"40\" height=\"48\" stroke=\"#ec4899\" stroke-width=\"0.03\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"0.8\" height=\"1.0\"/><rect x=\"0.1\" y=\"0.1\" width=\"0.6\" height=\"0.8\"/><line x1=\"0.15\" y1=\"0.2\" x2=\"0.65\" y2=\"0.2\"/><line x1=\"0.15\" y1=\"0.5\" x2=\"0.65\" y2=\"0.5\"/><line x1=\"0.15\" y1=\"0.8\" x2=\"0.65\" y2=\"0.8\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 0.8,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 0.8,
                        "y1": 0,
                        "x2": 0.8,
                        "y2": 1.0
                },
                {
                        "type": "LINE",
                        "x1": 0.8,
                        "y1": 1.0,
                        "x2": 0,
                        "y2": 1.0
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 1.0,
                        "x2": 0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 0.12,
                        "y1": 0.1,
                        "x2": 0.68,
                        "y2": 0.1
                },
                {
                        "type": "LINE",
                        "x1": 0.68,
                        "y1": 0.1,
                        "x2": 0.68,
                        "y2": 0.9
                },
                {
                        "type": "LINE",
                        "x1": 0.68,
                        "y1": 0.9,
                        "x2": 0.12,
                        "y2": 0.9
                },
                {
                        "type": "LINE",
                        "x1": 0.12,
                        "y1": 0.9,
                        "x2": 0.12,
                        "y2": 0.1
                },
                {
                        "type": "LINE",
                        "x1": 0.16,
                        "y1": 0.25,
                        "x2": 0.64,
                        "y2": 0.25
                },
                {
                        "type": "LINE",
                        "x1": 0.16,
                        "y1": 0.5,
                        "x2": 0.64,
                        "y2": 0.5
                },
                {
                        "type": "LINE",
                        "x1": 0.16,
                        "y1": 0.75,
                        "x2": 0.64,
                        "y2": 0.75
                }
        ]
},

    "INDUSTRIAL_UPS_SYSTEM": {
        "id": "INDUSTRIAL_UPS_SYSTEM",
        "name": "Nobreak industrial",
        "name_en": "Modular 3-Phase Industrial UPS",
        "category": "infra",
        "categoryName": "Infraestrutura & Redes",
        "dimensions": "1.60m x 0.90m",
        "layer": "Instalações",
        "color": "#ec4899",
        "svgPreview": "<svg viewBox=\"-0.1 -0.1 1.8 1.1\" width=\"48\" height=\"30\" stroke=\"#ec4899\" stroke-width=\"0.04\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"1.6\" height=\"0.9\"/><line x1=\"0.6\" y1=\"0\" x2=\"0.6\" y2=\"0.9\"/><line x1=\"1.1\" y1=\"0\" x2=\"1.1\" y2=\"0.9\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 1.6,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 1.6,
                        "y1": 0,
                        "x2": 1.6,
                        "y2": 0.9
                },
                {
                        "type": "LINE",
                        "x1": 1.6,
                        "y1": 0.9,
                        "x2": 0,
                        "y2": 0.9
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0.9,
                        "x2": 0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 0.6,
                        "y1": 0,
                        "x2": 0.6,
                        "y2": 0.9
                },
                {
                        "type": "LINE",
                        "x1": 1.1,
                        "y1": 0,
                        "x2": 1.1,
                        "y2": 0.9
                },
                {
                        "type": "LINE",
                        "x1": 0.15,
                        "y1": 0.1,
                        "x2": 0.45,
                        "y2": 0.1
                },
                {
                        "type": "LINE",
                        "x1": 0.45,
                        "y1": 0.1,
                        "x2": 0.45,
                        "y2": 0.25
                },
                {
                        "type": "LINE",
                        "x1": 0.45,
                        "y1": 0.25,
                        "x2": 0.15,
                        "y2": 0.25
                },
                {
                        "type": "LINE",
                        "x1": 0.15,
                        "y1": 0.25,
                        "x2": 0.15,
                        "y2": 0.1
                }
        ]
},

    "DIESEL_GENERATOR_SET": {
        "id": "DIESEL_GENERATOR_SET",
        "name": "Gerador a diesel",
        "name_en": "Silenced Diesel Generator Set (Genset)",
        "category": "infra",
        "categoryName": "Infraestrutura & Redes",
        "dimensions": "3.20m x 1.40m",
        "layer": "Instalações",
        "color": "#ec4899",
        "svgPreview": "<svg viewBox=\"-0.2 -0.2 3.6 1.8\" width=\"54\" height=\"28\" stroke=\"#ec4899\" stroke-width=\"0.05\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"3.2\" height=\"1.4\" rx=\"0.1\"/><circle cx=\"0.5\" cy=\"0.7\" r=\"0.25\"/><rect x=\"2.5\" y=\"0.3\" width=\"0.5\" height=\"0.8\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 3.2,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 3.2,
                        "y1": 0,
                        "x2": 3.2,
                        "y2": 1.4
                },
                {
                        "type": "LINE",
                        "x1": 3.2,
                        "y1": 1.4,
                        "x2": 0,
                        "y2": 1.4
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 1.4,
                        "x2": 0,
                        "y2": 0
                },
                {
                        "type": "CIRCLE",
                        "cx": 0.55,
                        "cy": 0.7,
                        "r": 0.28
                },
                {
                        "type": "LINE",
                        "x1": 2.5,
                        "y1": 0.3,
                        "x2": 3.05,
                        "y2": 0.3
                },
                {
                        "type": "LINE",
                        "x1": 3.05,
                        "y1": 0.3,
                        "x2": 3.05,
                        "y2": 1.1
                },
                {
                        "type": "LINE",
                        "x1": 3.05,
                        "y1": 1.1,
                        "x2": 2.5,
                        "y2": 1.1
                },
                {
                        "type": "LINE",
                        "x1": 2.5,
                        "y1": 1.1,
                        "x2": 2.5,
                        "y2": 0.3
                },
                {
                        "type": "LINE",
                        "x1": 1.4,
                        "y1": 1.3,
                        "x2": 1.9,
                        "y2": 1.3
                },
                {
                        "type": "LINE",
                        "x1": 1.9,
                        "y1": 1.3,
                        "x2": 1.9,
                        "y2": 1.38
                },
                {
                        "type": "LINE",
                        "x1": 1.9,
                        "y1": 1.38,
                        "x2": 1.4,
                        "y2": 1.38
                },
                {
                        "type": "LINE",
                        "x1": 1.4,
                        "y1": 1.38,
                        "x2": 1.4,
                        "y2": 1.3
                }
        ]
},

    "SOLAR_GROUND_ARRAY": {
        "id": "SOLAR_GROUND_ARRAY",
        "name": "Painel solar em solo",
        "name_en": "Ground-Mounted Solar PV Table (4 Panels)",
        "category": "infra",
        "categoryName": "Infraestrutura & Redes",
        "dimensions": "4.50m x 2.20m",
        "layer": "Instalações",
        "color": "#ec4899",
        "svgPreview": "<svg viewBox=\"-0.2 -0.2 4.9 2.6\" width=\"56\" height=\"30\" stroke=\"#ec4899\" stroke-width=\"0.05\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"4.5\" height=\"2.2\"/><line x1=\"1.125\" y1=\"0\" x2=\"1.125\" y2=\"2.2\"/><line x1=\"2.25\" y1=\"0\" x2=\"2.25\" y2=\"2.2\"/><line x1=\"3.375\" y1=\"0\" x2=\"3.375\" y2=\"2.2\"/><line x1=\"0\" y1=\"1.1\" x2=\"4.5\" y2=\"1.1\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 4.5,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 4.5,
                        "y1": 0,
                        "x2": 4.5,
                        "y2": 2.2
                },
                {
                        "type": "LINE",
                        "x1": 4.5,
                        "y1": 2.2,
                        "x2": 0,
                        "y2": 2.2
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 2.2,
                        "x2": 0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 1.125,
                        "y1": 0,
                        "x2": 1.125,
                        "y2": 2.2
                },
                {
                        "type": "LINE",
                        "x1": 2.25,
                        "y1": 0,
                        "x2": 2.25,
                        "y2": 2.2
                },
                {
                        "type": "LINE",
                        "x1": 3.375,
                        "y1": 0,
                        "x2": 3.375,
                        "y2": 2.2
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 1.1,
                        "x2": 4.5,
                        "y2": 1.1
                }
        ]
},

    "SOLAR_TRACKER_1AXIS": {
        "id": "SOLAR_TRACKER_1AXIS",
        "name": "Tracker solar",
        "name_en": "Single-Axis Solar PV Tracking Array",
        "category": "infra",
        "categoryName": "Infraestrutura & Redes",
        "dimensions": "6.00m x 2.40m",
        "layer": "Instalações",
        "color": "#ec4899",
        "svgPreview": "<svg viewBox=\"-0.2 -0.2 6.4 2.8\" width=\"58\" height=\"26\" stroke=\"#ec4899\" stroke-width=\"0.05\" fill=\"none\"><line x1=\"0\" y1=\"1.2\" x2=\"6.0\" y2=\"1.2\" stroke-width=\"0.1\"/><rect x=\"0.2\" y=\"0.2\" width=\"5.6\" height=\"2.0\" stroke-dasharray=\"0.2,0.2\"/><circle cx=\"0.5\" cy=\"1.2\" r=\"0.15\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 1.2,
                        "x2": 6.0,
                        "y2": 1.2
                },
                {
                        "type": "LINE",
                        "x1": 0.2,
                        "y1": 0.2,
                        "x2": 5.8,
                        "y2": 0.2
                },
                {
                        "type": "LINE",
                        "x1": 5.8,
                        "y1": 0.2,
                        "x2": 5.8,
                        "y2": 2.2
                },
                {
                        "type": "LINE",
                        "x1": 5.8,
                        "y1": 2.2,
                        "x2": 0.2,
                        "y2": 2.2
                },
                {
                        "type": "LINE",
                        "x1": 0.2,
                        "y1": 2.2,
                        "x2": 0.2,
                        "y2": 0.2
                },
                {
                        "type": "LINE",
                        "x1": 0.4,
                        "y1": 1.05,
                        "x2": 0.6,
                        "y2": 1.05
                },
                {
                        "type": "LINE",
                        "x1": 0.6,
                        "y1": 1.05,
                        "x2": 0.6,
                        "y2": 1.35
                },
                {
                        "type": "LINE",
                        "x1": 0.6,
                        "y1": 1.35,
                        "x2": 0.4,
                        "y2": 1.35
                },
                {
                        "type": "LINE",
                        "x1": 0.4,
                        "y1": 1.35,
                        "x2": 0.4,
                        "y2": 1.05
                },
                {
                        "type": "LINE",
                        "x1": 2.9,
                        "y1": 1.05,
                        "x2": 3.1,
                        "y2": 1.05
                },
                {
                        "type": "LINE",
                        "x1": 3.1,
                        "y1": 1.05,
                        "x2": 3.1,
                        "y2": 1.35
                },
                {
                        "type": "LINE",
                        "x1": 3.1,
                        "y1": 1.35,
                        "x2": 2.9,
                        "y2": 1.35
                },
                {
                        "type": "LINE",
                        "x1": 2.9,
                        "y1": 1.35,
                        "x2": 2.9,
                        "y2": 1.05
                },
                {
                        "type": "LINE",
                        "x1": 5.4,
                        "y1": 1.05,
                        "x2": 5.6,
                        "y2": 1.05
                },
                {
                        "type": "LINE",
                        "x1": 5.6,
                        "y1": 1.05,
                        "x2": 5.6,
                        "y2": 1.35
                },
                {
                        "type": "LINE",
                        "x1": 5.6,
                        "y1": 1.35,
                        "x2": 5.4,
                        "y2": 1.35
                },
                {
                        "type": "LINE",
                        "x1": 5.4,
                        "y1": 1.35,
                        "x2": 5.4,
                        "y2": 1.05
                }
        ]
},

    "MET_STATION_TOWER": {
        "id": "MET_STATION_TOWER",
        "name": "Estação meteorológica",
        "name_en": "Automated Weather Monitoring Station",
        "category": "infra",
        "categoryName": "Infraestrutura & Redes",
        "dimensions": "2.00m x 2.00m",
        "layer": "Instalações",
        "color": "#ec4899",
        "svgPreview": "<svg viewBox=\"-1.2 -1.2 2.4 2.4\" width=\"46\" height=\"46\" stroke=\"#ec4899\" stroke-width=\"0.04\" fill=\"none\"><circle cx=\"0\" cy=\"0\" r=\"0.9\" stroke-dasharray=\"0.1,0.1\"/><circle cx=\"0\" cy=\"0\" r=\"0.2\"/><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-0.8\"/><line x1=\"0\" y1=\"0\" x2=\"0.7\" y2=\"0.4\"/><line x1=\"0\" y1=\"0\" x2=\"-0.7\" y2=\"0.4\"/></svg>",
        "entities": [
                {
                        "type": "CIRCLE",
                        "cx": 0,
                        "cy": 0,
                        "r": 0.25
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 0,
                        "y2": -0.8
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 0.7,
                        "y2": 0.4
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": -0.7,
                        "y2": 0.4
                },
                {
                        "type": "CIRCLE",
                        "cx": 0,
                        "cy": -0.8,
                        "r": 0.08
                },
                {
                        "type": "CIRCLE",
                        "cx": 0.7,
                        "cy": 0.4,
                        "r": 0.08
                },
                {
                        "type": "CIRCLE",
                        "cx": -0.7,
                        "cy": 0.4,
                        "r": 0.08
                },
                {
                        "type": "CIRCLE",
                        "cx": 0.7,
                        "cy": -0.4,
                        "r": 0.15
                }
        ]
},

    "INSPECTION_CHAMBER_SEWER": {
        "id": "INSPECTION_CHAMBER_SEWER",
        "name": "Caixa de inspeção",
        "name_en": "Sanitary Sewer Inspection Chamber",
        "category": "infra",
        "categoryName": "Infraestrutura & Redes",
        "dimensions": "0.60m x 0.60m",
        "layer": "Instalações",
        "color": "#ec4899",
        "svgPreview": "<svg viewBox=\"-0.1 -0.1 0.8 0.8\" width=\"38\" height=\"38\" stroke=\"#ec4899\" stroke-width=\"0.03\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"0.6\" height=\"0.6\"/><circle cx=\"0.3\" cy=\"0.3\" r=\"0.2\"/><line x1=\"0.1\" y1=\"0.3\" x2=\"0.5\" y2=\"0.3\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 0.6,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 0.6,
                        "y1": 0,
                        "x2": 0.6,
                        "y2": 0.6
                },
                {
                        "type": "LINE",
                        "x1": 0.6,
                        "y1": 0.6,
                        "x2": 0,
                        "y2": 0.6
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0.6,
                        "x2": 0,
                        "y2": 0
                },
                {
                        "type": "CIRCLE",
                        "cx": 0.3,
                        "cy": 0.3,
                        "r": 0.22
                },
                {
                        "type": "LINE",
                        "x1": 0.08,
                        "y1": 0.3,
                        "x2": 0.52,
                        "y2": 0.3
                }
        ]
},

    "STREET_FIRE_HYDRANT": {
        "id": "STREET_FIRE_HYDRANT",
        "name": "Hidrante urbano",
        "name_en": "Street Fire Hydrant (Pillar Type)",
        "category": "infra",
        "categoryName": "Infraestrutura & Redes",
        "dimensions": "0.50m x 0.50m",
        "layer": "Instalações",
        "color": "#ec4899",
        "svgPreview": "<svg viewBox=\"-0.3 -0.3 0.6 0.6\" width=\"38\" height=\"38\" stroke=\"#ec4899\" stroke-width=\"0.03\" fill=\"none\"><circle cx=\"0\" cy=\"0\" r=\"0.16\"/><circle cx=\"-0.18\" cy=\"0\" r=\"0.06\"/><circle cx=\"0.18\" cy=\"0\" r=\"0.06\"/><circle cx=\"0\" cy=\"-0.18\" r=\"0.08\"/></svg>",
        "entities": [
                {
                        "type": "CIRCLE",
                        "cx": 0,
                        "cy": 0,
                        "r": 0.18
                },
                {
                        "type": "CIRCLE",
                        "cx": -0.2,
                        "cy": 0,
                        "r": 0.06
                },
                {
                        "type": "CIRCLE",
                        "cx": 0.2,
                        "cy": 0,
                        "r": 0.06
                },
                {
                        "type": "CIRCLE",
                        "cx": 0,
                        "cy": -0.2,
                        "r": 0.08
                },
                {
                        "type": "CIRCLE",
                        "cx": 0,
                        "cy": 0,
                        "r": 0.05
                }
        ]
},

    "GAS_METER_SHELTER": {
        "id": "GAS_METER_SHELTER",
        "name": "Abrigo de gás",
        "name_en": "Outdoor Gas Meter Shelter",
        "category": "infra",
        "categoryName": "Infraestrutura & Redes",
        "dimensions": "1.40m x 0.60m",
        "layer": "Instalações",
        "color": "#ec4899",
        "svgPreview": "<svg viewBox=\"-0.1 -0.1 1.6 0.8\" width=\"46\" height=\"24\" stroke=\"#ec4899\" stroke-width=\"0.03\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"1.4\" height=\"0.6\"/><line x1=\"0.7\" y1=\"0\" x2=\"0.7\" y2=\"0.6\"/><circle cx=\"0.35\" cy=\"0.3\" r=\"0.1\"/><circle cx=\"1.05\" cy=\"0.3\" r=\"0.1\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 1.4,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 1.4,
                        "y1": 0,
                        "x2": 1.4,
                        "y2": 0.6
                },
                {
                        "type": "LINE",
                        "x1": 1.4,
                        "y1": 0.6,
                        "x2": 0,
                        "y2": 0.6
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0.6,
                        "x2": 0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 0.7,
                        "y1": 0,
                        "x2": 0.7,
                        "y2": 0.6
                },
                {
                        "type": "CIRCLE",
                        "cx": 0.35,
                        "cy": 0.3,
                        "r": 0.12
                },
                {
                        "type": "CIRCLE",
                        "cx": 1.05,
                        "cy": 0.3,
                        "r": 0.12
                }
        ]
},

    "LPG_GAS_STORAGE": {
        "id": "LPG_GAS_STORAGE",
        "name": "Central de GLP",
        "name_en": "Commercial LPG Tank Storage with Cage",
        "category": "infra",
        "categoryName": "Infraestrutura & Redes",
        "dimensions": "3.00m x 1.50m",
        "layer": "Instalações",
        "color": "#ec4899",
        "svgPreview": "<svg viewBox=\"-0.2 -0.2 3.4 1.9\" width=\"52\" height=\"28\" stroke=\"#ec4899\" stroke-width=\"0.04\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"3.0\" height=\"1.5\" stroke-dasharray=\"0.1,0.1\"/><circle cx=\"0.8\" cy=\"0.75\" r=\"0.45\"/><circle cx=\"2.2\" cy=\"0.75\" r=\"0.45\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 3.0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 3.0,
                        "y1": 0,
                        "x2": 3.0,
                        "y2": 1.5
                },
                {
                        "type": "LINE",
                        "x1": 3.0,
                        "y1": 1.5,
                        "x2": 0,
                        "y2": 1.5
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 1.5,
                        "x2": 0,
                        "y2": 0
                },
                {
                        "type": "CIRCLE",
                        "cx": 0.85,
                        "cy": 0.75,
                        "r": 0.45
                },
                {
                        "type": "CIRCLE",
                        "cx": 0.85,
                        "cy": 0.75,
                        "r": 0.15
                },
                {
                        "type": "CIRCLE",
                        "cx": 2.15,
                        "cy": 0.75,
                        "r": 0.45
                },
                {
                        "type": "CIRCLE",
                        "cx": 2.15,
                        "cy": 0.75,
                        "r": 0.15
                },
                {
                        "type": "LINE",
                        "x1": 0.85,
                        "y1": 0.75,
                        "x2": 2.15,
                        "y2": 0.75
                }
        ]
},

    "GROUND_WATER_TANK": {
        "id": "GROUND_WATER_TANK",
        "name": "Reservatório apoiado",
        "name_en": "Ground-Level Circular Potable Water Tank",
        "category": "infra",
        "categoryName": "Infraestrutura & Redes",
        "dimensions": "6.00m x 6.00m",
        "layer": "Instalações",
        "color": "#ec4899",
        "svgPreview": "<svg viewBox=\"-3.5 -3.5 7 7\" width=\"48\" height=\"48\" stroke=\"#ec4899\" stroke-width=\"0.08\" fill=\"none\"><circle cx=\"0\" cy=\"0\" r=\"3.0\"/><circle cx=\"0\" cy=\"0\" r=\"2.8\"/><circle cx=\"1.5\" cy=\"0\" r=\"0.4\"/></svg>",
        "entities": [
                {
                        "type": "POLYLINE",
                        "points": [
                                {
                                        "x": 3.0,
                                        "y": 0.0
                                },
                                {
                                        "x": 2.898,
                                        "y": 0.776
                                },
                                {
                                        "x": 2.598,
                                        "y": 1.5
                                },
                                {
                                        "x": 2.121,
                                        "y": 2.121
                                },
                                {
                                        "x": 1.5,
                                        "y": 2.598
                                },
                                {
                                        "x": 0.776,
                                        "y": 2.898
                                },
                                {
                                        "x": 0.0,
                                        "y": 3.0
                                },
                                {
                                        "x": -0.776,
                                        "y": 2.898
                                },
                                {
                                        "x": -1.5,
                                        "y": 2.598
                                },
                                {
                                        "x": -2.121,
                                        "y": 2.121
                                },
                                {
                                        "x": -2.598,
                                        "y": 1.5
                                },
                                {
                                        "x": -2.898,
                                        "y": 0.776
                                },
                                {
                                        "x": -3.0,
                                        "y": 0.0
                                },
                                {
                                        "x": -2.898,
                                        "y": -0.776
                                },
                                {
                                        "x": -2.598,
                                        "y": -1.5
                                },
                                {
                                        "x": -2.121,
                                        "y": -2.121
                                },
                                {
                                        "x": -1.5,
                                        "y": -2.598
                                },
                                {
                                        "x": -0.776,
                                        "y": -2.898
                                },
                                {
                                        "x": -0.0,
                                        "y": -3.0
                                },
                                {
                                        "x": 0.776,
                                        "y": -2.898
                                },
                                {
                                        "x": 1.5,
                                        "y": -2.598
                                },
                                {
                                        "x": 2.121,
                                        "y": -2.121
                                },
                                {
                                        "x": 2.598,
                                        "y": -1.5
                                },
                                {
                                        "x": 2.898,
                                        "y": -0.776
                                }
                        ],
                        "closed": true
                },
                {
                        "type": "POLYLINE",
                        "points": [
                                {
                                        "x": 2.75,
                                        "y": 0.0
                                },
                                {
                                        "x": 2.615,
                                        "y": 0.85
                                },
                                {
                                        "x": 2.225,
                                        "y": 1.616
                                },
                                {
                                        "x": 1.616,
                                        "y": 2.225
                                },
                                {
                                        "x": 0.85,
                                        "y": 2.615
                                },
                                {
                                        "x": 0.0,
                                        "y": 2.75
                                },
                                {
                                        "x": -0.85,
                                        "y": 2.615
                                },
                                {
                                        "x": -1.616,
                                        "y": 2.225
                                },
                                {
                                        "x": -2.225,
                                        "y": 1.616
                                },
                                {
                                        "x": -2.615,
                                        "y": 0.85
                                },
                                {
                                        "x": -2.75,
                                        "y": 0.0
                                },
                                {
                                        "x": -2.615,
                                        "y": -0.85
                                },
                                {
                                        "x": -2.225,
                                        "y": -1.616
                                },
                                {
                                        "x": -1.616,
                                        "y": -2.225
                                },
                                {
                                        "x": -0.85,
                                        "y": -2.615
                                },
                                {
                                        "x": -0.0,
                                        "y": -2.75
                                },
                                {
                                        "x": 0.85,
                                        "y": -2.615
                                },
                                {
                                        "x": 1.616,
                                        "y": -2.225
                                },
                                {
                                        "x": 2.225,
                                        "y": -1.616
                                },
                                {
                                        "x": 2.615,
                                        "y": -0.85
                                }
                        ],
                        "closed": true
                },
                {
                        "type": "CIRCLE",
                        "cx": 1.5,
                        "cy": 0,
                        "r": 0.4
                },
                {
                        "type": "LINE",
                        "x1": -3.25,
                        "y1": -0.3,
                        "x2": -2.9,
                        "y2": -0.3
                },
                {
                        "type": "LINE",
                        "x1": -2.9,
                        "y1": -0.3,
                        "x2": -2.9,
                        "y2": 0.3
                },
                {
                        "type": "LINE",
                        "x1": -2.9,
                        "y1": 0.3,
                        "x2": -3.25,
                        "y2": 0.3
                },
                {
                        "type": "LINE",
                        "x1": -3.25,
                        "y1": 0.3,
                        "x2": -3.25,
                        "y2": -0.3
                }
        ]
},

    "ELEVATED_CUP_TANK": {
        "id": "ELEVATED_CUP_TANK",
        "name": "Reservatório taça",
        "name_en": "Elevated Cup-Style Water Tower",
        "category": "infra",
        "categoryName": "Infraestrutura & Redes",
        "dimensions": "4.00m x 4.00m",
        "layer": "Instalações",
        "color": "#ec4899",
        "svgPreview": "<svg viewBox=\"-2.4 -2.4 4.8 4.8\" width=\"48\" height=\"48\" stroke=\"#ec4899\" stroke-width=\"0.06\" fill=\"none\"><circle cx=\"0\" cy=\"0\" r=\"2.0\"/><circle cx=\"0\" cy=\"0\" r=\"0.75\"/><circle cx=\"0\" cy=\"0\" r=\"0.3\"/></svg>",
        "entities": [
                {
                        "type": "POLYLINE",
                        "points": [
                                {
                                        "x": 2.0,
                                        "y": 0.0
                                },
                                {
                                        "x": 1.902,
                                        "y": 0.618
                                },
                                {
                                        "x": 1.618,
                                        "y": 1.176
                                },
                                {
                                        "x": 1.176,
                                        "y": 1.618
                                },
                                {
                                        "x": 0.618,
                                        "y": 1.902
                                },
                                {
                                        "x": 0.0,
                                        "y": 2.0
                                },
                                {
                                        "x": -0.618,
                                        "y": 1.902
                                },
                                {
                                        "x": -1.176,
                                        "y": 1.618
                                },
                                {
                                        "x": -1.618,
                                        "y": 1.176
                                },
                                {
                                        "x": -1.902,
                                        "y": 0.618
                                },
                                {
                                        "x": -2.0,
                                        "y": 0.0
                                },
                                {
                                        "x": -1.902,
                                        "y": -0.618
                                },
                                {
                                        "x": -1.618,
                                        "y": -1.176
                                },
                                {
                                        "x": -1.176,
                                        "y": -1.618
                                },
                                {
                                        "x": -0.618,
                                        "y": -1.902
                                },
                                {
                                        "x": -0.0,
                                        "y": -2.0
                                },
                                {
                                        "x": 0.618,
                                        "y": -1.902
                                },
                                {
                                        "x": 1.176,
                                        "y": -1.618
                                },
                                {
                                        "x": 1.618,
                                        "y": -1.176
                                },
                                {
                                        "x": 1.902,
                                        "y": -0.618
                                }
                        ],
                        "closed": true
                },
                {
                        "type": "POLYLINE",
                        "points": [
                                {
                                        "x": 1.2,
                                        "y": 0.0
                                },
                                {
                                        "x": 1.109,
                                        "y": 0.459
                                },
                                {
                                        "x": 0.849,
                                        "y": 0.849
                                },
                                {
                                        "x": 0.459,
                                        "y": 1.109
                                },
                                {
                                        "x": 0.0,
                                        "y": 1.2
                                },
                                {
                                        "x": -0.459,
                                        "y": 1.109
                                },
                                {
                                        "x": -0.849,
                                        "y": 0.849
                                },
                                {
                                        "x": -1.109,
                                        "y": 0.459
                                },
                                {
                                        "x": -1.2,
                                        "y": 0.0
                                },
                                {
                                        "x": -1.109,
                                        "y": -0.459
                                },
                                {
                                        "x": -0.849,
                                        "y": -0.849
                                },
                                {
                                        "x": -0.459,
                                        "y": -1.109
                                },
                                {
                                        "x": -0.0,
                                        "y": -1.2
                                },
                                {
                                        "x": 0.459,
                                        "y": -1.109
                                },
                                {
                                        "x": 0.849,
                                        "y": -0.849
                                },
                                {
                                        "x": 1.109,
                                        "y": -0.459
                                }
                        ],
                        "closed": true
                },
                {
                        "type": "CIRCLE",
                        "cx": 0,
                        "cy": 0,
                        "r": 0.6
                },
                {
                        "type": "CIRCLE",
                        "cx": 0,
                        "cy": 0,
                        "r": 0.25
                }
        ]
},

    "SEWAGE_LIFT_STATION": {
        "id": "SEWAGE_LIFT_STATION",
        "name": "Estação elevatória de esgoto",
        "name_en": "Submersible Sewage Lift Pump Station",
        "category": "infra",
        "categoryName": "Infraestrutura & Redes",
        "dimensions": "3.00m x 2.50m",
        "layer": "Instalações",
        "color": "#ec4899",
        "svgPreview": "<svg viewBox=\"-0.2 -0.2 3.4 2.9\" width=\"48\" height=\"40\" stroke=\"#ec4899\" stroke-width=\"0.05\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"3.0\" height=\"2.5\"/><circle cx=\"1.0\" cy=\"1.25\" r=\"0.75\"/><circle cx=\"2.2\" cy=\"1.25\" r=\"0.5\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 3.0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 3.0,
                        "y1": 0,
                        "x2": 3.0,
                        "y2": 2.5
                },
                {
                        "type": "LINE",
                        "x1": 3.0,
                        "y1": 2.5,
                        "x2": 0,
                        "y2": 2.5
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 2.5,
                        "x2": 0,
                        "y2": 0
                },
                {
                        "type": "CIRCLE",
                        "cx": 1.1,
                        "cy": 1.25,
                        "r": 0.85
                },
                {
                        "type": "CIRCLE",
                        "cx": 0.85,
                        "cy": 1.25,
                        "r": 0.22
                },
                {
                        "type": "CIRCLE",
                        "cx": 1.35,
                        "cy": 1.25,
                        "r": 0.22
                },
                {
                        "type": "LINE",
                        "x1": 2.05,
                        "y1": 0.4,
                        "x2": 2.85,
                        "y2": 0.4
                },
                {
                        "type": "LINE",
                        "x1": 2.85,
                        "y1": 0.4,
                        "x2": 2.85,
                        "y2": 2.1
                },
                {
                        "type": "LINE",
                        "x1": 2.85,
                        "y1": 2.1,
                        "x2": 2.05,
                        "y2": 2.1
                },
                {
                        "type": "LINE",
                        "x1": 2.05,
                        "y1": 2.1,
                        "x2": 2.05,
                        "y2": 0.4
                }
        ]
},

    "FERRIS_WHEEL": {
        "id": "FERRIS_WHEEL",
        "name": "Roda-gigante",
        "name_en": "Giant Observation Ferris Wheel",
        "category": "special",
        "categoryName": "Blocos Diferentões",
        "dimensions": "22.00m x 4.50m",
        "layer": "Especiais",
        "color": "#f43f5e",
        "svgPreview": "<svg viewBox=\"-12 -3 24 6\" width=\"65\" height=\"20\" stroke=\"#f43f5e\" stroke-width=\"0.1\" fill=\"none\"><line x1=\"-11\" y1=\"0\" x2=\"11\" y2=\"0\" stroke-width=\"0.2\"/><circle cx=\"0\" cy=\"0\" r=\"1.5\"/><rect x=\"-1\" y=\"-1.8\" width=\"2\" height=\"3.6\"/><circle cx=\"-9\" cy=\"0\" r=\"0.6\"/><circle cx=\"9\" cy=\"0\" r=\"0.6\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": -10.0,
                        "y1": 0,
                        "x2": 10.0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": -1.2,
                        "y1": -2.0,
                        "x2": 1.2,
                        "y2": -2.0
                },
                {
                        "type": "LINE",
                        "x1": 1.2,
                        "y1": -2.0,
                        "x2": 1.2,
                        "y2": 2.0
                },
                {
                        "type": "LINE",
                        "x1": 1.2,
                        "y1": 2.0,
                        "x2": -1.2,
                        "y2": 2.0
                },
                {
                        "type": "LINE",
                        "x1": -1.2,
                        "y1": 2.0,
                        "x2": -1.2,
                        "y2": -2.0
                },
                {
                        "type": "CIRCLE",
                        "cx": 0,
                        "cy": 0,
                        "r": 1.6
                },
                {
                        "type": "LINE",
                        "x1": 9.2,
                        "y1": -0.6,
                        "x2": 10.6,
                        "y2": -0.6
                },
                {
                        "type": "LINE",
                        "x1": 10.6,
                        "y1": -0.6,
                        "x2": 10.6,
                        "y2": 0.6
                },
                {
                        "type": "LINE",
                        "x1": 10.6,
                        "y1": 0.6,
                        "x2": 9.2,
                        "y2": 0.6
                },
                {
                        "type": "LINE",
                        "x1": 9.2,
                        "y1": 0.6,
                        "x2": 9.2,
                        "y2": -0.6
                },
                {
                        "type": "LINE",
                        "x1": -10.6,
                        "y1": -0.6,
                        "x2": -9.2,
                        "y2": -0.6
                },
                {
                        "type": "LINE",
                        "x1": -9.2,
                        "y1": -0.6,
                        "x2": -9.2,
                        "y2": 0.6
                },
                {
                        "type": "LINE",
                        "x1": -9.2,
                        "y1": 0.6,
                        "x2": -10.6,
                        "y2": 0.6
                },
                {
                        "type": "LINE",
                        "x1": -10.6,
                        "y1": 0.6,
                        "x2": -10.6,
                        "y2": -0.6
                },
                {
                        "type": "LINE",
                        "x1": -0.6,
                        "y1": 9.2,
                        "x2": 0.6,
                        "y2": 9.2
                },
                {
                        "type": "LINE",
                        "x1": 0.6,
                        "y1": 9.2,
                        "x2": 0.6,
                        "y2": 10.6
                },
                {
                        "type": "LINE",
                        "x1": 0.6,
                        "y1": 10.6,
                        "x2": -0.6,
                        "y2": 10.6
                },
                {
                        "type": "LINE",
                        "x1": -0.6,
                        "y1": 10.6,
                        "x2": -0.6,
                        "y2": 9.2
                },
                {
                        "type": "LINE",
                        "x1": -0.6,
                        "y1": -10.6,
                        "x2": 0.6,
                        "y2": -10.6
                },
                {
                        "type": "LINE",
                        "x1": 0.6,
                        "y1": -10.6,
                        "x2": 0.6,
                        "y2": -9.2
                },
                {
                        "type": "LINE",
                        "x1": 0.6,
                        "y1": -9.2,
                        "x2": -0.6,
                        "y2": -9.2
                },
                {
                        "type": "LINE",
                        "x1": -0.6,
                        "y1": -9.2,
                        "x2": -0.6,
                        "y2": -10.6
                },
                {
                        "type": "LINE",
                        "x1": 6.5,
                        "y1": 6.5,
                        "x2": 7.7,
                        "y2": 6.5
                },
                {
                        "type": "LINE",
                        "x1": 7.7,
                        "y1": 6.5,
                        "x2": 7.7,
                        "y2": 7.7
                },
                {
                        "type": "LINE",
                        "x1": 7.7,
                        "y1": 7.7,
                        "x2": 6.5,
                        "y2": 7.7
                },
                {
                        "type": "LINE",
                        "x1": 6.5,
                        "y1": 7.7,
                        "x2": 6.5,
                        "y2": 6.5
                },
                {
                        "type": "LINE",
                        "x1": -7.7,
                        "y1": 6.5,
                        "x2": -6.5,
                        "y2": 6.5
                },
                {
                        "type": "LINE",
                        "x1": -6.5,
                        "y1": 6.5,
                        "x2": -6.5,
                        "y2": 7.7
                },
                {
                        "type": "LINE",
                        "x1": -6.5,
                        "y1": 7.7,
                        "x2": -7.7,
                        "y2": 7.7
                },
                {
                        "type": "LINE",
                        "x1": -7.7,
                        "y1": 7.7,
                        "x2": -7.7,
                        "y2": 6.5
                },
                {
                        "type": "LINE",
                        "x1": 6.5,
                        "y1": -7.7,
                        "x2": 7.7,
                        "y2": -7.7
                },
                {
                        "type": "LINE",
                        "x1": 7.7,
                        "y1": -7.7,
                        "x2": 7.7,
                        "y2": -6.5
                },
                {
                        "type": "LINE",
                        "x1": 7.7,
                        "y1": -6.5,
                        "x2": 6.5,
                        "y2": -6.5
                },
                {
                        "type": "LINE",
                        "x1": 6.5,
                        "y1": -6.5,
                        "x2": 6.5,
                        "y2": -7.7
                },
                {
                        "type": "LINE",
                        "x1": -7.7,
                        "y1": -7.7,
                        "x2": -6.5,
                        "y2": -7.7
                },
                {
                        "type": "LINE",
                        "x1": -6.5,
                        "y1": -7.7,
                        "x2": -6.5,
                        "y2": -6.5
                },
                {
                        "type": "LINE",
                        "x1": -6.5,
                        "y1": -6.5,
                        "x2": -7.7,
                        "y2": -6.5
                },
                {
                        "type": "LINE",
                        "x1": -7.7,
                        "y1": -6.5,
                        "x2": -7.7,
                        "y2": -7.7
                },
                {
                        "type": "LINE",
                        "x1": -4.0,
                        "y1": -2.2,
                        "x2": 4.0,
                        "y2": -2.2
                },
                {
                        "type": "LINE",
                        "x1": 4.0,
                        "y1": -2.2,
                        "x2": 4.0,
                        "y2": 2.2
                },
                {
                        "type": "LINE",
                        "x1": 4.0,
                        "y1": 2.2,
                        "x2": -4.0,
                        "y2": 2.2
                },
                {
                        "type": "LINE",
                        "x1": -4.0,
                        "y1": 2.2,
                        "x2": -4.0,
                        "y2": -2.2
                }
        ]
},

    "PARK_CAROUSEL": {
        "id": "PARK_CAROUSEL",
        "name": "Carrossel de parque",
        "name_en": "Vintage Theme Park Carousel",
        "category": "special",
        "categoryName": "Blocos Diferentões",
        "dimensions": "9.00m x 9.00m",
        "layer": "Especiais",
        "color": "#f43f5e",
        "svgPreview": "<svg viewBox=\"-5 -5 10 10\" width=\"48\" height=\"48\" stroke=\"#f43f5e\" stroke-width=\"0.1\" fill=\"none\"><circle cx=\"0\" cy=\"0\" r=\"4.5\"/><circle cx=\"0\" cy=\"0\" r=\"3.2\"/><circle cx=\"0\" cy=\"0\" r=\"1.2\"/><circle cx=\"0\" cy=\"0\" r=\"0.4\"/></svg>",
        "entities": [
                {
                        "type": "POLYLINE",
                        "points": [
                                {
                                        "x": 4.5,
                                        "y": 0.0
                                },
                                {
                                        "x": 4.347,
                                        "y": 1.165
                                },
                                {
                                        "x": 3.897,
                                        "y": 2.25
                                },
                                {
                                        "x": 3.182,
                                        "y": 3.182
                                },
                                {
                                        "x": 2.25,
                                        "y": 3.897
                                },
                                {
                                        "x": 1.165,
                                        "y": 4.347
                                },
                                {
                                        "x": 0.0,
                                        "y": 4.5
                                },
                                {
                                        "x": -1.165,
                                        "y": 4.347
                                },
                                {
                                        "x": -2.25,
                                        "y": 3.897
                                },
                                {
                                        "x": -3.182,
                                        "y": 3.182
                                },
                                {
                                        "x": -3.897,
                                        "y": 2.25
                                },
                                {
                                        "x": -4.347,
                                        "y": 1.165
                                },
                                {
                                        "x": -4.5,
                                        "y": 0.0
                                },
                                {
                                        "x": -4.347,
                                        "y": -1.165
                                },
                                {
                                        "x": -3.897,
                                        "y": -2.25
                                },
                                {
                                        "x": -3.182,
                                        "y": -3.182
                                },
                                {
                                        "x": -2.25,
                                        "y": -3.897
                                },
                                {
                                        "x": -1.165,
                                        "y": -4.347
                                },
                                {
                                        "x": -0.0,
                                        "y": -4.5
                                },
                                {
                                        "x": 1.165,
                                        "y": -4.347
                                },
                                {
                                        "x": 2.25,
                                        "y": -3.897
                                },
                                {
                                        "x": 3.182,
                                        "y": -3.182
                                },
                                {
                                        "x": 3.897,
                                        "y": -2.25
                                },
                                {
                                        "x": 4.347,
                                        "y": -1.165
                                }
                        ],
                        "closed": true
                },
                {
                        "type": "POLYLINE",
                        "points": [
                                {
                                        "x": 3.2,
                                        "y": 0.0
                                },
                                {
                                        "x": 2.956,
                                        "y": 1.225
                                },
                                {
                                        "x": 2.263,
                                        "y": 2.263
                                },
                                {
                                        "x": 1.225,
                                        "y": 2.956
                                },
                                {
                                        "x": 0.0,
                                        "y": 3.2
                                },
                                {
                                        "x": -1.225,
                                        "y": 2.956
                                },
                                {
                                        "x": -2.263,
                                        "y": 2.263
                                },
                                {
                                        "x": -2.956,
                                        "y": 1.225
                                },
                                {
                                        "x": -3.2,
                                        "y": 0.0
                                },
                                {
                                        "x": -2.956,
                                        "y": -1.225
                                },
                                {
                                        "x": -2.263,
                                        "y": -2.263
                                },
                                {
                                        "x": -1.225,
                                        "y": -2.956
                                },
                                {
                                        "x": -0.0,
                                        "y": -3.2
                                },
                                {
                                        "x": 1.225,
                                        "y": -2.956
                                },
                                {
                                        "x": 2.263,
                                        "y": -2.263
                                },
                                {
                                        "x": 2.956,
                                        "y": -1.225
                                }
                        ],
                        "closed": true
                },
                {
                        "type": "POLYLINE",
                        "points": [
                                {
                                        "x": 1.2,
                                        "y": 0.0
                                },
                                {
                                        "x": 1.039,
                                        "y": 0.6
                                },
                                {
                                        "x": 0.6,
                                        "y": 1.039
                                },
                                {
                                        "x": 0.0,
                                        "y": 1.2
                                },
                                {
                                        "x": -0.6,
                                        "y": 1.039
                                },
                                {
                                        "x": -1.039,
                                        "y": 0.6
                                },
                                {
                                        "x": -1.2,
                                        "y": 0.0
                                },
                                {
                                        "x": -1.039,
                                        "y": -0.6
                                },
                                {
                                        "x": -0.6,
                                        "y": -1.039
                                },
                                {
                                        "x": -0.0,
                                        "y": -1.2
                                },
                                {
                                        "x": 0.6,
                                        "y": -1.039
                                },
                                {
                                        "x": 1.039,
                                        "y": -0.6
                                }
                        ],
                        "closed": true
                },
                {
                        "type": "CIRCLE",
                        "cx": 0,
                        "cy": 0,
                        "r": 0.4
                },
                {
                        "type": "CIRCLE",
                        "cx": 3.2,
                        "cy": 0,
                        "r": 0.35
                },
                {
                        "type": "CIRCLE",
                        "cx": -3.2,
                        "cy": 0,
                        "r": 0.35
                },
                {
                        "type": "CIRCLE",
                        "cx": 0,
                        "cy": 3.2,
                        "r": 0.35
                },
                {
                        "type": "CIRCLE",
                        "cx": 0,
                        "cy": -3.2,
                        "r": 0.35
                },
                {
                        "type": "CIRCLE",
                        "cx": 2.26,
                        "cy": 2.26,
                        "r": 0.35
                },
                {
                        "type": "CIRCLE",
                        "cx": -2.26,
                        "cy": 2.26,
                        "r": 0.35
                },
                {
                        "type": "CIRCLE",
                        "cx": 2.26,
                        "cy": -2.26,
                        "r": 0.35
                },
                {
                        "type": "CIRCLE",
                        "cx": -2.26,
                        "cy": -2.26,
                        "r": 0.35
                }
        ]
},

    "EVENT_STAGE": {
        "id": "EVENT_STAGE",
        "name": "Palco de eventos",
        "name_en": "Outdoor Festival Event Concert Stage",
        "category": "special",
        "categoryName": "Blocos Diferentões",
        "dimensions": "14.00m x 10.00m",
        "layer": "Especiais",
        "color": "#f43f5e",
        "svgPreview": "<svg viewBox=\"-0.5 -0.5 15 11\" width=\"56\" height=\"42\" stroke=\"#f43f5e\" stroke-width=\"0.15\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"14\" height=\"10\"/><rect x=\"2\" y=\"1.5\" width=\"10\" height=\"7\"/><rect x=\"0\" y=\"8.5\" width=\"2\" height=\"1.5\"/><rect x=\"12\" y=\"8.5\" width=\"2\" height=\"1.5\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 14.0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 14.0,
                        "y1": 0,
                        "x2": 14.0,
                        "y2": 10.0
                },
                {
                        "type": "LINE",
                        "x1": 14.0,
                        "y1": 10.0,
                        "x2": 0,
                        "y2": 10.0
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 10.0,
                        "x2": 0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 1.5,
                        "y1": 1.0,
                        "x2": 12.5,
                        "y2": 1.0
                },
                {
                        "type": "LINE",
                        "x1": 12.5,
                        "y1": 1.0,
                        "x2": 12.5,
                        "y2": 8.5
                },
                {
                        "type": "LINE",
                        "x1": 12.5,
                        "y1": 8.5,
                        "x2": 1.5,
                        "y2": 8.5
                },
                {
                        "type": "LINE",
                        "x1": 1.5,
                        "y1": 8.5,
                        "x2": 1.5,
                        "y2": 1.0
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 1.0,
                        "x2": 1.5,
                        "y2": 1.0
                },
                {
                        "type": "LINE",
                        "x1": 1.5,
                        "y1": 1.0,
                        "x2": 1.5,
                        "y2": 8.5
                },
                {
                        "type": "LINE",
                        "x1": 1.5,
                        "y1": 8.5,
                        "x2": 0,
                        "y2": 8.5
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 8.5,
                        "x2": 0,
                        "y2": 1.0
                },
                {
                        "type": "LINE",
                        "x1": 12.5,
                        "y1": 1.0,
                        "x2": 14.0,
                        "y2": 1.0
                },
                {
                        "type": "LINE",
                        "x1": 14.0,
                        "y1": 1.0,
                        "x2": 14.0,
                        "y2": 8.5
                },
                {
                        "type": "LINE",
                        "x1": 14.0,
                        "y1": 8.5,
                        "x2": 12.5,
                        "y2": 8.5
                },
                {
                        "type": "LINE",
                        "x1": 12.5,
                        "y1": 8.5,
                        "x2": 12.5,
                        "y2": 1.0
                },
                {
                        "type": "LINE",
                        "x1": 0.2,
                        "y1": 8.5,
                        "x2": 2.0,
                        "y2": 8.5
                },
                {
                        "type": "LINE",
                        "x1": 2.0,
                        "y1": 8.5,
                        "x2": 2.0,
                        "y2": 10.0
                },
                {
                        "type": "LINE",
                        "x1": 2.0,
                        "y1": 10.0,
                        "x2": 0.2,
                        "y2": 10.0
                },
                {
                        "type": "LINE",
                        "x1": 0.2,
                        "y1": 10.0,
                        "x2": 0.2,
                        "y2": 8.5
                },
                {
                        "type": "LINE",
                        "x1": 12.0,
                        "y1": 8.5,
                        "x2": 13.8,
                        "y2": 8.5
                },
                {
                        "type": "LINE",
                        "x1": 13.8,
                        "y1": 8.5,
                        "x2": 13.8,
                        "y2": 10.0
                },
                {
                        "type": "LINE",
                        "x1": 13.8,
                        "y1": 10.0,
                        "x2": 12.0,
                        "y2": 10.0
                },
                {
                        "type": "LINE",
                        "x1": 12.0,
                        "y1": 10.0,
                        "x2": 12.0,
                        "y2": 8.5
                }
        ]
},

    "PYRAMID_GAZEBO_TENT": {
        "id": "PYRAMID_GAZEBO_TENT",
        "name": "Tenda piramidal",
        "name_en": "Pyramid Canopy Event Tent (5x5m)",
        "category": "special",
        "categoryName": "Blocos Diferentões",
        "dimensions": "5.00m x 5.00m",
        "layer": "Especiais",
        "color": "#f43f5e",
        "svgPreview": "<svg viewBox=\"-0.2 -0.2 5.4 5.4\" width=\"44\" height=\"44\" stroke=\"#f43f5e\" stroke-width=\"0.06\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"5.0\" height=\"5.0\"/><line x1=\"0\" y1=\"0\" x2=\"5.0\" y2=\"5.0\"/><line x1=\"0\" y1=\"5.0\" x2=\"5.0\" y2=\"0\"/><circle cx=\"2.5\" cy=\"2.5\" r=\"0.25\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 5.0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 5.0,
                        "y1": 0,
                        "x2": 5.0,
                        "y2": 5.0
                },
                {
                        "type": "LINE",
                        "x1": 5.0,
                        "y1": 5.0,
                        "x2": 0,
                        "y2": 5.0
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 5.0,
                        "x2": 0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 5.0,
                        "y2": 5.0
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 5.0,
                        "x2": 5.0,
                        "y2": 0
                },
                {
                        "type": "CIRCLE",
                        "cx": 2.5,
                        "cy": 2.5,
                        "r": 0.25
                },
                {
                        "type": "LINE",
                        "x1": 0.05,
                        "y1": 0.05,
                        "x2": 0.25,
                        "y2": 0.05
                },
                {
                        "type": "LINE",
                        "x1": 0.25,
                        "y1": 0.05,
                        "x2": 0.25,
                        "y2": 0.25
                },
                {
                        "type": "LINE",
                        "x1": 0.25,
                        "y1": 0.25,
                        "x2": 0.05,
                        "y2": 0.25
                },
                {
                        "type": "LINE",
                        "x1": 0.05,
                        "y1": 0.25,
                        "x2": 0.05,
                        "y2": 0.05
                },
                {
                        "type": "LINE",
                        "x1": 4.75,
                        "y1": 0.05,
                        "x2": 4.95,
                        "y2": 0.05
                },
                {
                        "type": "LINE",
                        "x1": 4.95,
                        "y1": 0.05,
                        "x2": 4.95,
                        "y2": 0.25
                },
                {
                        "type": "LINE",
                        "x1": 4.95,
                        "y1": 0.25,
                        "x2": 4.75,
                        "y2": 0.25
                },
                {
                        "type": "LINE",
                        "x1": 4.75,
                        "y1": 0.25,
                        "x2": 4.75,
                        "y2": 0.05
                },
                {
                        "type": "LINE",
                        "x1": 0.05,
                        "y1": 4.75,
                        "x2": 0.25,
                        "y2": 4.75
                },
                {
                        "type": "LINE",
                        "x1": 0.25,
                        "y1": 4.75,
                        "x2": 0.25,
                        "y2": 4.95
                },
                {
                        "type": "LINE",
                        "x1": 0.25,
                        "y1": 4.95,
                        "x2": 0.05,
                        "y2": 4.95
                },
                {
                        "type": "LINE",
                        "x1": 0.05,
                        "y1": 4.95,
                        "x2": 0.05,
                        "y2": 4.75
                },
                {
                        "type": "LINE",
                        "x1": 4.75,
                        "y1": 4.75,
                        "x2": 4.95,
                        "y2": 4.75
                },
                {
                        "type": "LINE",
                        "x1": 4.95,
                        "y1": 4.75,
                        "x2": 4.95,
                        "y2": 4.95
                },
                {
                        "type": "LINE",
                        "x1": 4.95,
                        "y1": 4.95,
                        "x2": 4.75,
                        "y2": 4.95
                },
                {
                        "type": "LINE",
                        "x1": 4.75,
                        "y1": 4.95,
                        "x2": 4.75,
                        "y2": 4.75
                }
        ]
},

    "FOOD_TRUCK_GOURMET": {
        "id": "FOOD_TRUCK_GOURMET",
        "name": "Food truck",
        "name_en": "Gourmet Kitchen Food Truck",
        "category": "special",
        "categoryName": "Blocos Diferentões",
        "dimensions": "6.50m x 2.30m",
        "layer": "Especiais",
        "color": "#f43f5e",
        "svgPreview": "<svg viewBox=\"-3.5 -1.5 7 3\" width=\"56\" height=\"24\" stroke=\"#f43f5e\" stroke-width=\"0.06\" fill=\"none\"><rect x=\"-3.25\" y=\"-1.15\" width=\"6.5\" height=\"2.3\" rx=\"0.3\"/><rect x=\"1.75\" y=\"-1.15\" width=\"1.5\" height=\"2.3\"/><line x1=\"-2.2\" y1=\"1.15\" x2=\"0.8\" y2=\"1.15\" stroke-width=\"0.15\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": -3.25,
                        "y1": -1.15,
                        "x2": 3.25,
                        "y2": -1.15
                },
                {
                        "type": "LINE",
                        "x1": 3.25,
                        "y1": -1.15,
                        "x2": 3.25,
                        "y2": 1.15
                },
                {
                        "type": "LINE",
                        "x1": 3.25,
                        "y1": 1.15,
                        "x2": -3.25,
                        "y2": 1.15
                },
                {
                        "type": "LINE",
                        "x1": -3.25,
                        "y1": 1.15,
                        "x2": -3.25,
                        "y2": -1.15
                },
                {
                        "type": "LINE",
                        "x1": 1.75,
                        "y1": -1.15,
                        "x2": 3.25,
                        "y2": -1.15
                },
                {
                        "type": "LINE",
                        "x1": 3.25,
                        "y1": -1.15,
                        "x2": 3.25,
                        "y2": 1.15
                },
                {
                        "type": "LINE",
                        "x1": 3.25,
                        "y1": 1.15,
                        "x2": 1.75,
                        "y2": 1.15
                },
                {
                        "type": "LINE",
                        "x1": 1.75,
                        "y1": 1.15,
                        "x2": 1.75,
                        "y2": -1.15
                },
                {
                        "type": "LINE",
                        "x1": 2.75,
                        "y1": -1.05,
                        "x2": 2.75,
                        "y2": 1.05
                },
                {
                        "type": "LINE",
                        "x1": -2.2,
                        "y1": 1.15,
                        "x2": 1.0,
                        "y2": 1.15
                },
                {
                        "type": "LINE",
                        "x1": 1.0,
                        "y1": 1.15,
                        "x2": 1.0,
                        "y2": 1.55
                },
                {
                        "type": "LINE",
                        "x1": 1.0,
                        "y1": 1.55,
                        "x2": -2.2,
                        "y2": 1.55
                },
                {
                        "type": "LINE",
                        "x1": -2.2,
                        "y1": 1.55,
                        "x2": -2.2,
                        "y2": 1.15
                },
                {
                        "type": "LINE",
                        "x1": -1.8,
                        "y1": -1.05,
                        "x2": -0.2,
                        "y2": -1.05
                },
                {
                        "type": "LINE",
                        "x1": -0.2,
                        "y1": -1.05,
                        "x2": -0.2,
                        "y2": -0.45
                },
                {
                        "type": "LINE",
                        "x1": -0.2,
                        "y1": -0.45,
                        "x2": -1.8,
                        "y2": -0.45
                },
                {
                        "type": "LINE",
                        "x1": -1.8,
                        "y1": -0.45,
                        "x2": -1.8,
                        "y2": -1.05
                },
                {
                        "type": "LINE",
                        "x1": -3.0,
                        "y1": -1.05,
                        "x2": -2.0,
                        "y2": -1.05
                },
                {
                        "type": "LINE",
                        "x1": -2.0,
                        "y1": -1.05,
                        "x2": -2.0,
                        "y2": -0.5
                },
                {
                        "type": "LINE",
                        "x1": -2.0,
                        "y1": -0.5,
                        "x2": -3.0,
                        "y2": -0.5
                },
                {
                        "type": "LINE",
                        "x1": -3.0,
                        "y1": -0.5,
                        "x2": -3.0,
                        "y2": -1.05
                }
        ]
},

    "FOOD_TRAILER": {
        "id": "FOOD_TRAILER",
        "name": "Trailer de lanches",
        "name_en": "Towable Concession Snack Trailer",
        "category": "special",
        "categoryName": "Blocos Diferentões",
        "dimensions": "4.00m x 2.10m",
        "layer": "Especiais",
        "color": "#f43f5e",
        "svgPreview": "<svg viewBox=\"-2.3 -1.3 4.6 2.6\" width=\"50\" height=\"28\" stroke=\"#f43f5e\" stroke-width=\"0.05\" fill=\"none\"><rect x=\"-1.8\" y=\"-1.05\" width=\"3.6\" height=\"2.1\" rx=\"0.3\"/><line x1=\"1.8\" y1=\"0\" x2=\"2.3\" y2=\"0\" stroke-width=\"0.1\"/><line x1=\"-1.2\" y1=\"1.05\" x2=\"1.2\" y2=\"1.05\" stroke-width=\"0.12\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": -1.8,
                        "y1": -1.05,
                        "x2": 1.8,
                        "y2": -1.05
                },
                {
                        "type": "LINE",
                        "x1": 1.8,
                        "y1": -1.05,
                        "x2": 1.8,
                        "y2": 1.05
                },
                {
                        "type": "LINE",
                        "x1": 1.8,
                        "y1": 1.05,
                        "x2": -1.8,
                        "y2": 1.05
                },
                {
                        "type": "LINE",
                        "x1": -1.8,
                        "y1": 1.05,
                        "x2": -1.8,
                        "y2": -1.05
                },
                {
                        "type": "LINE",
                        "x1": 1.8,
                        "y1": -0.4,
                        "x2": 2.3,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 1.8,
                        "y1": 0.4,
                        "x2": 2.3,
                        "y2": 0
                },
                {
                        "type": "CIRCLE",
                        "cx": 2.3,
                        "cy": 0,
                        "r": 0.06
                },
                {
                        "type": "LINE",
                        "x1": -1.2,
                        "y1": 1.05,
                        "x2": 1.2,
                        "y2": 1.05
                },
                {
                        "type": "LINE",
                        "x1": 1.2,
                        "y1": 1.05,
                        "x2": 1.2,
                        "y2": 1.4
                },
                {
                        "type": "LINE",
                        "x1": 1.2,
                        "y1": 1.4,
                        "x2": -1.2,
                        "y2": 1.4
                },
                {
                        "type": "LINE",
                        "x1": -1.2,
                        "y1": 1.4,
                        "x2": -1.2,
                        "y2": 1.05
                },
                {
                        "type": "LINE",
                        "x1": -1.7,
                        "y1": -0.95,
                        "x2": 1.7,
                        "y2": -0.95
                },
                {
                        "type": "LINE",
                        "x1": 1.7,
                        "y1": -0.95,
                        "x2": 1.7,
                        "y2": -0.45
                },
                {
                        "type": "LINE",
                        "x1": 1.7,
                        "y1": -0.45,
                        "x2": -1.7,
                        "y2": -0.45
                },
                {
                        "type": "LINE",
                        "x1": -1.7,
                        "y1": -0.45,
                        "x2": -1.7,
                        "y2": -0.95
                }
        ]
},

    "COFFEE_CONTAINER": {
        "id": "COFFEE_CONTAINER",
        "name": "Container café",
        "name_en": "Converted Shipping Container Coffee Bar",
        "category": "special",
        "categoryName": "Blocos Diferentões",
        "dimensions": "6.00m x 2.40m",
        "layer": "Especiais",
        "color": "#f43f5e",
        "svgPreview": "<svg viewBox=\"-0.3 -0.3 6.6 3.0\" width=\"56\" height=\"26\" stroke=\"#f43f5e\" stroke-width=\"0.06\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"6.0\" height=\"2.4\"/><line x1=\"1.0\" y1=\"2.4\" x2=\"5.0\" y2=\"2.4\" stroke-width=\"0.15\"/><circle cx=\"0.5\" cy=\"0.6\" r=\"0.3\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 6.0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 6.0,
                        "y1": 0,
                        "x2": 6.0,
                        "y2": 2.4
                },
                {
                        "type": "LINE",
                        "x1": 6.0,
                        "y1": 2.4,
                        "x2": 0,
                        "y2": 2.4
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 2.4,
                        "x2": 0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 0.5,
                        "y1": 0,
                        "x2": 0.5,
                        "y2": 2.4
                },
                {
                        "type": "LINE",
                        "x1": 5.5,
                        "y1": 0,
                        "x2": 5.5,
                        "y2": 2.4
                },
                {
                        "type": "LINE",
                        "x1": 1.0,
                        "y1": 2.4,
                        "x2": 5.0,
                        "y2": 2.4
                },
                {
                        "type": "LINE",
                        "x1": 5.0,
                        "y1": 2.4,
                        "x2": 5.0,
                        "y2": 2.9
                },
                {
                        "type": "LINE",
                        "x1": 5.0,
                        "y1": 2.9,
                        "x2": 1.0,
                        "y2": 2.9
                },
                {
                        "type": "LINE",
                        "x1": 1.0,
                        "y1": 2.9,
                        "x2": 1.0,
                        "y2": 2.4
                },
                {
                        "type": "LINE",
                        "x1": 1.5,
                        "y1": 0.8,
                        "x2": 2.7,
                        "y2": 0.8
                },
                {
                        "type": "LINE",
                        "x1": 2.7,
                        "y1": 0.8,
                        "x2": 2.7,
                        "y2": 1.4
                },
                {
                        "type": "LINE",
                        "x1": 2.7,
                        "y1": 1.4,
                        "x2": 1.5,
                        "y2": 1.4
                },
                {
                        "type": "LINE",
                        "x1": 1.5,
                        "y1": 1.4,
                        "x2": 1.5,
                        "y2": 0.8
                },
                {
                        "type": "CIRCLE",
                        "cx": 1.8,
                        "cy": 3.1,
                        "r": 0.2
                },
                {
                        "type": "CIRCLE",
                        "cx": 3.0,
                        "cy": 3.1,
                        "r": 0.2
                },
                {
                        "type": "CIRCLE",
                        "cx": 4.2,
                        "cy": 3.1,
                        "r": 0.2
                }
        ]
},

    "COMMERCIAL_AIRPLANE": {
        "id": "COMMERCIAL_AIRPLANE",
        "name": "Avião comercial em planta",
        "name_en": "Commercial Passenger Jet (B737/A320)",
        "category": "special",
        "categoryName": "Blocos Diferentões",
        "dimensions": "37.00m x 35.00m",
        "layer": "Especiais",
        "color": "#f43f5e",
        "svgPreview": "<svg viewBox=\"-18 -20 36 40\" width=\"50\" height=\"56\" stroke=\"#f43f5e\" stroke-width=\"0.4\" fill=\"none\"><ellipse cx=\"0\" cy=\"0\" rx=\"2.0\" ry=\"18\"/><polygon points=\"0,2 17,-8 17,-11 0,-4\"/><polygon points=\"0,2 -17,-8 -17,-11 0,-4\"/><polygon points=\"0,-14 6,-18 6,-19 0,-17\"/><polygon points=\"0,-14 -6,-18 -6,-19 0,-17\"/></svg>",
        "entities": [
                {
                        "type": "POLYLINE",
                        "points": [
                                {
                                        "x": 2.0,
                                        "y": 0.0
                                },
                                {
                                        "x": 1.879,
                                        "y": 0.684
                                },
                                {
                                        "x": 1.532,
                                        "y": 1.286
                                },
                                {
                                        "x": 1.0,
                                        "y": 1.732
                                },
                                {
                                        "x": 0.347,
                                        "y": 1.97
                                },
                                {
                                        "x": -0.347,
                                        "y": 1.97
                                },
                                {
                                        "x": -1.0,
                                        "y": 1.732
                                },
                                {
                                        "x": -1.532,
                                        "y": 1.286
                                },
                                {
                                        "x": -1.879,
                                        "y": 0.684
                                },
                                {
                                        "x": -2.0,
                                        "y": 0.0
                                },
                                {
                                        "x": -1.879,
                                        "y": -0.684
                                },
                                {
                                        "x": -1.532,
                                        "y": -1.286
                                },
                                {
                                        "x": -1.0,
                                        "y": -1.732
                                },
                                {
                                        "x": -0.347,
                                        "y": -1.97
                                },
                                {
                                        "x": 0.347,
                                        "y": -1.97
                                },
                                {
                                        "x": 1.0,
                                        "y": -1.732
                                },
                                {
                                        "x": 1.532,
                                        "y": -1.286
                                },
                                {
                                        "x": 1.879,
                                        "y": -0.684
                                }
                        ],
                        "closed": true
                },
                {
                        "type": "LINE",
                        "x1": -1.9,
                        "y1": -13.0,
                        "x2": -1.9,
                        "y2": 13.0
                },
                {
                        "type": "LINE",
                        "x1": 1.9,
                        "y1": -13.0,
                        "x2": 1.9,
                        "y2": 13.0
                },
                {
                        "type": "ARC",
                        "cx": 0,
                        "cy": 15.0,
                        "r": 2.0,
                        "startAngle": 0,
                        "endAngle": 3.141592653589793
                },
                {
                        "type": "POLYLINE",
                        "points": [
                                {
                                        "x": 1.9,
                                        "y": 2.0
                                },
                                {
                                        "x": 17.5,
                                        "y": -8.0
                                },
                                {
                                        "x": 17.5,
                                        "y": -11.0
                                },
                                {
                                        "x": 1.9,
                                        "y": -5.0
                                }
                        ],
                        "closed": true
                },
                {
                        "type": "POLYLINE",
                        "points": [
                                {
                                        "x": -1.9,
                                        "y": 2.0
                                },
                                {
                                        "x": -17.5,
                                        "y": -8.0
                                },
                                {
                                        "x": -17.5,
                                        "y": -11.0
                                },
                                {
                                        "x": -1.9,
                                        "y": -5.0
                                }
                        ],
                        "closed": true
                },
                {
                        "type": "LINE",
                        "x1": 5.0,
                        "y1": -4.5,
                        "x2": 6.8,
                        "y2": -4.5
                },
                {
                        "type": "LINE",
                        "x1": 6.8,
                        "y1": -4.5,
                        "x2": 6.8,
                        "y2": -0.7
                },
                {
                        "type": "LINE",
                        "x1": 6.8,
                        "y1": -0.7,
                        "x2": 5.0,
                        "y2": -0.7
                },
                {
                        "type": "LINE",
                        "x1": 5.0,
                        "y1": -0.7,
                        "x2": 5.0,
                        "y2": -4.5
                },
                {
                        "type": "LINE",
                        "x1": -6.8,
                        "y1": -4.5,
                        "x2": -5.0,
                        "y2": -4.5
                },
                {
                        "type": "LINE",
                        "x1": -5.0,
                        "y1": -4.5,
                        "x2": -5.0,
                        "y2": -0.7
                },
                {
                        "type": "LINE",
                        "x1": -5.0,
                        "y1": -0.7,
                        "x2": -6.8,
                        "y2": -0.7
                },
                {
                        "type": "LINE",
                        "x1": -6.8,
                        "y1": -0.7,
                        "x2": -6.8,
                        "y2": -4.5
                },
                {
                        "type": "POLYLINE",
                        "points": [
                                {
                                        "x": 0.8,
                                        "y": -14.0
                                },
                                {
                                        "x": 6.5,
                                        "y": -18.5
                                },
                                {
                                        "x": 6.5,
                                        "y": -19.5
                                },
                                {
                                        "x": 0.8,
                                        "y": -17.0
                                }
                        ],
                        "closed": true
                },
                {
                        "type": "POLYLINE",
                        "points": [
                                {
                                        "x": -0.8,
                                        "y": -14.0
                                },
                                {
                                        "x": -6.5,
                                        "y": -18.5
                                },
                                {
                                        "x": -6.5,
                                        "y": -19.5
                                },
                                {
                                        "x": -0.8,
                                        "y": -17.0
                                }
                        ],
                        "closed": true
                }
        ]
},

    "HELICOPTER_TOP": {
        "id": "HELICOPTER_TOP",
        "name": "Helicóptero em planta",
        "name_en": "Light Utility Helicopter (Top View)",
        "category": "special",
        "categoryName": "Blocos Diferentões",
        "dimensions": "13.00m x 11.00m",
        "layer": "Especiais",
        "color": "#f43f5e",
        "svgPreview": "<svg viewBox=\"-6 -7 12 14\" width=\"48\" height=\"56\" stroke=\"#f43f5e\" stroke-width=\"0.15\" fill=\"none\"><circle cx=\"0\" cy=\"1\" r=\"5.5\" stroke-dasharray=\"0.3,0.3\"/><ellipse cx=\"0\" cy=\"1\" rx=\"1.2\" ry=\"2.8\"/><line x1=\"0\" y1=\"-1.8\" x2=\"0\" y2=\"-6.0\"/><line x1=\"0\" y1=\"-6\" x2=\"1.2\" y2=\"-6\"/><line x1=\"-5.5\" y1=\"1\" x2=\"5.5\" y2=\"1\"/><line x1=\"0\" y1=\"-4.5\" x2=\"0\" y2=\"6.5\"/></svg>",
        "entities": [
                {
                        "type": "POLYLINE",
                        "points": [
                                {
                                        "x": 1.3,
                                        "y": 1.0
                                },
                                {
                                        "x": 1.171,
                                        "y": 1.564
                                },
                                {
                                        "x": 0.811,
                                        "y": 2.016
                                },
                                {
                                        "x": 0.289,
                                        "y": 2.267
                                },
                                {
                                        "x": -0.289,
                                        "y": 2.267
                                },
                                {
                                        "x": -0.811,
                                        "y": 2.016
                                },
                                {
                                        "x": -1.171,
                                        "y": 1.564
                                },
                                {
                                        "x": -1.3,
                                        "y": 1.0
                                },
                                {
                                        "x": -1.171,
                                        "y": 0.436
                                },
                                {
                                        "x": -0.811,
                                        "y": -0.016
                                },
                                {
                                        "x": -0.289,
                                        "y": -0.267
                                },
                                {
                                        "x": 0.289,
                                        "y": -0.267
                                },
                                {
                                        "x": 0.811,
                                        "y": -0.016
                                },
                                {
                                        "x": 1.171,
                                        "y": 0.436
                                }
                        ],
                        "closed": true
                },
                {
                        "type": "ARC",
                        "cx": 0,
                        "cy": 2.8,
                        "r": 1.1,
                        "startAngle": 0,
                        "endAngle": 3.141592653589793
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": -0.3,
                        "x2": 0,
                        "y2": -6.2
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": -6.2,
                        "x2": 1.4,
                        "y2": -6.2
                },
                {
                        "type": "LINE",
                        "x1": -5.5,
                        "y1": 1.0,
                        "x2": 5.5,
                        "y2": 1.0
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": -4.5,
                        "x2": 0,
                        "y2": 6.5
                },
                {
                        "type": "POLYLINE",
                        "points": [
                                {
                                        "x": 5.5,
                                        "y": 1.0
                                },
                                {
                                        "x": 5.313,
                                        "y": 2.424
                                },
                                {
                                        "x": 4.763,
                                        "y": 3.75
                                },
                                {
                                        "x": 3.889,
                                        "y": 4.889
                                },
                                {
                                        "x": 2.75,
                                        "y": 5.763
                                },
                                {
                                        "x": 1.424,
                                        "y": 6.313
                                },
                                {
                                        "x": 0.0,
                                        "y": 6.5
                                },
                                {
                                        "x": -1.424,
                                        "y": 6.313
                                },
                                {
                                        "x": -2.75,
                                        "y": 5.763
                                },
                                {
                                        "x": -3.889,
                                        "y": 4.889
                                },
                                {
                                        "x": -4.763,
                                        "y": 3.75
                                },
                                {
                                        "x": -5.313,
                                        "y": 2.424
                                },
                                {
                                        "x": -5.5,
                                        "y": 1.0
                                },
                                {
                                        "x": -5.313,
                                        "y": -0.424
                                },
                                {
                                        "x": -4.763,
                                        "y": -1.75
                                },
                                {
                                        "x": -3.889,
                                        "y": -2.889
                                },
                                {
                                        "x": -2.75,
                                        "y": -3.763
                                },
                                {
                                        "x": -1.424,
                                        "y": -4.313
                                },
                                {
                                        "x": -0.0,
                                        "y": -4.5
                                },
                                {
                                        "x": 1.424,
                                        "y": -4.313
                                },
                                {
                                        "x": 2.75,
                                        "y": -3.763
                                },
                                {
                                        "x": 3.889,
                                        "y": -2.889
                                },
                                {
                                        "x": 4.763,
                                        "y": -1.75
                                },
                                {
                                        "x": 5.313,
                                        "y": -0.424
                                }
                        ],
                        "closed": true
                },
                {
                        "type": "LINE",
                        "x1": -1.2,
                        "y1": -0.8,
                        "x2": -1.2,
                        "y2": 2.8
                },
                {
                        "type": "LINE",
                        "x1": 1.2,
                        "y1": -0.8,
                        "x2": 1.2,
                        "y2": 2.8
                }
        ]
},

    "SPEEDBOAT": {
        "id": "SPEEDBOAT",
        "name": "Barco / lancha",
        "name_en": "Sport Speedboat / Day Cruiser",
        "category": "special",
        "categoryName": "Blocos Diferentões",
        "dimensions": "8.50m x 2.80m",
        "layer": "Especiais",
        "color": "#f43f5e",
        "svgPreview": "<svg viewBox=\"-4.5 -1.6 9 3.2\" width=\"56\" height=\"20\" stroke=\"#f43f5e\" stroke-width=\"0.08\" fill=\"none\"><path d=\"M-4.0,-1.3 L1.0,-1.4 L4.0,0 L1.0,1.4 L-4.0,1.3 Z\"/><path d=\"M-0.5,-1.1 Q1.5,-0.9 2.0,0 Q1.5,0.9 -0.5,1.1\"/><rect x=\"-3.5\" y=\"-1.0\" width=\"2.0\" height=\"2.0\"/></svg>",
        "entities": [
                {
                        "type": "POLYLINE",
                        "points": [
                                {
                                        "x": -4.2,
                                        "y": -1.3
                                },
                                {
                                        "x": 1.5,
                                        "y": -1.4
                                },
                                {
                                        "x": 4.25,
                                        "y": 0
                                },
                                {
                                        "x": 1.5,
                                        "y": 1.4
                                },
                                {
                                        "x": -4.2,
                                        "y": 1.3
                                }
                        ],
                        "closed": true
                },
                {
                        "type": "ARC",
                        "cx": 0.8,
                        "cy": 0,
                        "r": 1.2,
                        "startAngle": -1.2707963267948965,
                        "endAngle": 1.2707963267948965
                },
                {
                        "type": "CIRCLE",
                        "cx": 0.2,
                        "cy": -0.5,
                        "r": 0.28
                },
                {
                        "type": "CIRCLE",
                        "cx": 0.2,
                        "cy": 0.5,
                        "r": 0.28
                },
                {
                        "type": "LINE",
                        "x1": -3.8,
                        "y1": -1.0,
                        "x2": -1.6,
                        "y2": -1.0
                },
                {
                        "type": "LINE",
                        "x1": -1.6,
                        "y1": -1.0,
                        "x2": -1.6,
                        "y2": 1.0
                },
                {
                        "type": "LINE",
                        "x1": -1.6,
                        "y1": 1.0,
                        "x2": -3.8,
                        "y2": 1.0
                },
                {
                        "type": "LINE",
                        "x1": -3.8,
                        "y1": 1.0,
                        "x2": -3.8,
                        "y2": -1.0
                }
        ]
},

    "PASSENGER_TRAIN_CAR": {
        "id": "PASSENGER_TRAIN_CAR",
        "name": "Trem",
        "name_en": "Passenger Rail Train Coach",
        "category": "special",
        "categoryName": "Blocos Diferentões",
        "dimensions": "22.00m x 3.00m",
        "layer": "Especiais",
        "color": "#f43f5e",
        "svgPreview": "<svg viewBox=\"-11.5 -1.8 23 3.6\" width=\"70\" height=\"15\" stroke=\"#f43f5e\" stroke-width=\"0.1\" fill=\"none\"><rect x=\"-11\" y=\"-1.5\" width=\"22\" height=\"3\" rx=\"0.4\"/><line x1=\"-11\" y1=\"0\" x2=\"11\" y2=\"0\" stroke-dasharray=\"0.6,0.6\"/><rect x=\"-9.5\" y=\"-1.2\" width=\"3\" height=\"2.4\"/><rect x=\"6.5\" y=\"-1.2\" width=\"3\" height=\"2.4\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": -11.0,
                        "y1": -1.5,
                        "x2": 11.0,
                        "y2": -1.5
                },
                {
                        "type": "LINE",
                        "x1": 11.0,
                        "y1": -1.5,
                        "x2": 11.0,
                        "y2": 1.5
                },
                {
                        "type": "LINE",
                        "x1": 11.0,
                        "y1": 1.5,
                        "x2": -11.0,
                        "y2": 1.5
                },
                {
                        "type": "LINE",
                        "x1": -11.0,
                        "y1": 1.5,
                        "x2": -11.0,
                        "y2": -1.5
                },
                {
                        "type": "LINE",
                        "x1": -11.4,
                        "y1": -0.6,
                        "x2": -11.0,
                        "y2": -0.6
                },
                {
                        "type": "LINE",
                        "x1": -11.0,
                        "y1": -0.6,
                        "x2": -11.0,
                        "y2": 0.6
                },
                {
                        "type": "LINE",
                        "x1": -11.0,
                        "y1": 0.6,
                        "x2": -11.4,
                        "y2": 0.6
                },
                {
                        "type": "LINE",
                        "x1": -11.4,
                        "y1": 0.6,
                        "x2": -11.4,
                        "y2": -0.6
                },
                {
                        "type": "LINE",
                        "x1": 11.0,
                        "y1": -0.6,
                        "x2": 11.4,
                        "y2": -0.6
                },
                {
                        "type": "LINE",
                        "x1": 11.4,
                        "y1": -0.6,
                        "x2": 11.4,
                        "y2": 0.6
                },
                {
                        "type": "LINE",
                        "x1": 11.4,
                        "y1": 0.6,
                        "x2": 11.0,
                        "y2": 0.6
                },
                {
                        "type": "LINE",
                        "x1": 11.0,
                        "y1": 0.6,
                        "x2": 11.0,
                        "y2": -0.6
                },
                {
                        "type": "LINE",
                        "x1": -10.0,
                        "y1": 0,
                        "x2": 10.0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 6.5,
                        "y1": -1.2,
                        "x2": 9.7,
                        "y2": -1.2
                },
                {
                        "type": "LINE",
                        "x1": 9.7,
                        "y1": -1.2,
                        "x2": 9.7,
                        "y2": 1.2
                },
                {
                        "type": "LINE",
                        "x1": 9.7,
                        "y1": 1.2,
                        "x2": 6.5,
                        "y2": 1.2
                },
                {
                        "type": "LINE",
                        "x1": 6.5,
                        "y1": 1.2,
                        "x2": 6.5,
                        "y2": -1.2
                },
                {
                        "type": "LINE",
                        "x1": -9.7,
                        "y1": -1.2,
                        "x2": -6.5,
                        "y2": -1.2
                },
                {
                        "type": "LINE",
                        "x1": -6.5,
                        "y1": -1.2,
                        "x2": -6.5,
                        "y2": 1.2
                },
                {
                        "type": "LINE",
                        "x1": -6.5,
                        "y1": 1.2,
                        "x2": -9.7,
                        "y2": 1.2
                },
                {
                        "type": "LINE",
                        "x1": -9.7,
                        "y1": 1.2,
                        "x2": -9.7,
                        "y2": -1.2
                }
        ]
},

    "METRO_STATION_DIAGRAM": {
        "id": "METRO_STATION_DIAGRAM",
        "name": "Estação de metrô esquemática",
        "name_en": "Schematic Metro Station Platform",
        "category": "special",
        "categoryName": "Blocos Diferentões",
        "dimensions": "40.00m x 8.00m",
        "layer": "Especiais",
        "color": "#f43f5e",
        "svgPreview": "<svg viewBox=\"-20 -4.5 40 9\" width=\"75\" height=\"18\" stroke=\"#f43f5e\" stroke-width=\"0.2\" fill=\"none\"><rect x=\"-19\" y=\"-2\" width=\"38\" height=\"4\"/><line x1=\"-20\" y1=\"-3.5\" x2=\"20\" y2=\"-3.5\" stroke-dasharray=\"1,1\"/><line x1=\"-20\" y1=\"3.5\" x2=\"20\" y2=\"3.5\" stroke-dasharray=\"1,1\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": -19.0,
                        "y1": -2.2,
                        "x2": 19.0,
                        "y2": -2.2
                },
                {
                        "type": "LINE",
                        "x1": 19.0,
                        "y1": -2.2,
                        "x2": 19.0,
                        "y2": 2.2
                },
                {
                        "type": "LINE",
                        "x1": 19.0,
                        "y1": 2.2,
                        "x2": -19.0,
                        "y2": 2.2
                },
                {
                        "type": "LINE",
                        "x1": -19.0,
                        "y1": 2.2,
                        "x2": -19.0,
                        "y2": -2.2
                },
                {
                        "type": "LINE",
                        "x1": -20.0,
                        "y1": 3.5,
                        "x2": 20.0,
                        "y2": 3.5
                },
                {
                        "type": "LINE",
                        "x1": -20.0,
                        "y1": 2.7,
                        "x2": 20.0,
                        "y2": 2.7
                },
                {
                        "type": "LINE",
                        "x1": -20.0,
                        "y1": -3.5,
                        "x2": 20.0,
                        "y2": -3.5
                },
                {
                        "type": "LINE",
                        "x1": -20.0,
                        "y1": -2.7,
                        "x2": 20.0,
                        "y2": -2.7
                },
                {
                        "type": "LINE",
                        "x1": -4.0,
                        "y1": -1.0,
                        "x2": 4.0,
                        "y2": -1.0
                },
                {
                        "type": "LINE",
                        "x1": 4.0,
                        "y1": -1.0,
                        "x2": 4.0,
                        "y2": 1.0
                },
                {
                        "type": "LINE",
                        "x1": 4.0,
                        "y1": 1.0,
                        "x2": -4.0,
                        "y2": 1.0
                },
                {
                        "type": "LINE",
                        "x1": -4.0,
                        "y1": 1.0,
                        "x2": -4.0,
                        "y2": -1.0
                },
                {
                        "type": "LINE",
                        "x1": -14.0,
                        "y1": -1.8,
                        "x2": -14.0,
                        "y2": 1.8
                }
        ]
},

    "EIFFEL_TOWER_PLAN": {
        "id": "EIFFEL_TOWER_PLAN",
        "name": "Torre Eiffel simplificada",
        "name_en": "Simplified Eiffel Tower Base Footprint",
        "category": "special",
        "categoryName": "Blocos Diferentões",
        "dimensions": "12.00m x 12.00m",
        "layer": "Especiais",
        "color": "#f43f5e",
        "svgPreview": "<svg viewBox=\"-7 -7 14 14\" width=\"48\" height=\"48\" stroke=\"#f43f5e\" stroke-width=\"0.15\" fill=\"none\"><rect x=\"-6\" y=\"-6\" width=\"12\" height=\"12\"/><circle cx=\"0\" cy=\"0\" r=\"1.5\"/><line x1=\"-5\" y1=\"-5\" x2=\"5\" y2=\"5\"/><line x1=\"-5\" y1=\"5\" x2=\"5\" y2=\"-5\"/><rect x=\"-5\" y=\"-5\" width=\"2\" height=\"2\"/><rect x=\"3\" y=\"-5\" width=\"2\" height=\"2\"/><rect x=\"-5\" y=\"3\" width=\"2\" height=\"2\"/><rect x=\"3\" y=\"3\" width=\"2\" height=\"2\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": -5.5,
                        "y1": -5.5,
                        "x2": -3.3,
                        "y2": -5.5
                },
                {
                        "type": "LINE",
                        "x1": -3.3,
                        "y1": -5.5,
                        "x2": -3.3,
                        "y2": -3.3
                },
                {
                        "type": "LINE",
                        "x1": -3.3,
                        "y1": -3.3,
                        "x2": -5.5,
                        "y2": -3.3
                },
                {
                        "type": "LINE",
                        "x1": -5.5,
                        "y1": -3.3,
                        "x2": -5.5,
                        "y2": -5.5
                },
                {
                        "type": "LINE",
                        "x1": 3.3,
                        "y1": -5.5,
                        "x2": 5.5,
                        "y2": -5.5
                },
                {
                        "type": "LINE",
                        "x1": 5.5,
                        "y1": -5.5,
                        "x2": 5.5,
                        "y2": -3.3
                },
                {
                        "type": "LINE",
                        "x1": 5.5,
                        "y1": -3.3,
                        "x2": 3.3,
                        "y2": -3.3
                },
                {
                        "type": "LINE",
                        "x1": 3.3,
                        "y1": -3.3,
                        "x2": 3.3,
                        "y2": -5.5
                },
                {
                        "type": "LINE",
                        "x1": -5.5,
                        "y1": 3.3,
                        "x2": -3.3,
                        "y2": 3.3
                },
                {
                        "type": "LINE",
                        "x1": -3.3,
                        "y1": 3.3,
                        "x2": -3.3,
                        "y2": 5.5
                },
                {
                        "type": "LINE",
                        "x1": -3.3,
                        "y1": 5.5,
                        "x2": -5.5,
                        "y2": 5.5
                },
                {
                        "type": "LINE",
                        "x1": -5.5,
                        "y1": 5.5,
                        "x2": -5.5,
                        "y2": 3.3
                },
                {
                        "type": "LINE",
                        "x1": 3.3,
                        "y1": 3.3,
                        "x2": 5.5,
                        "y2": 3.3
                },
                {
                        "type": "LINE",
                        "x1": 5.5,
                        "y1": 3.3,
                        "x2": 5.5,
                        "y2": 5.5
                },
                {
                        "type": "LINE",
                        "x1": 5.5,
                        "y1": 5.5,
                        "x2": 3.3,
                        "y2": 5.5
                },
                {
                        "type": "LINE",
                        "x1": 3.3,
                        "y1": 5.5,
                        "x2": 3.3,
                        "y2": 3.3
                },
                {
                        "type": "ARC",
                        "cx": 0,
                        "cy": -4.5,
                        "r": 3.3,
                        "startAngle": 0,
                        "endAngle": 3.141592653589793
                },
                {
                        "type": "ARC",
                        "cx": 0,
                        "cy": 4.5,
                        "r": 3.3,
                        "startAngle": 3.141592653589793,
                        "endAngle": 6.283185307179586
                },
                {
                        "type": "ARC",
                        "cx": -4.5,
                        "cy": 0,
                        "r": 3.3,
                        "startAngle": -1.5707963267948966,
                        "endAngle": 1.5707963267948966
                },
                {
                        "type": "ARC",
                        "cx": 4.5,
                        "cy": 0,
                        "r": 3.3,
                        "startAngle": 1.5707963267948966,
                        "endAngle": 4.71238898038469
                },
                {
                        "type": "POLYLINE",
                        "points": [
                                {
                                        "x": 1.5,
                                        "y": 0.0
                                },
                                {
                                        "x": 1.299,
                                        "y": 0.75
                                },
                                {
                                        "x": 0.75,
                                        "y": 1.299
                                },
                                {
                                        "x": 0.0,
                                        "y": 1.5
                                },
                                {
                                        "x": -0.75,
                                        "y": 1.299
                                },
                                {
                                        "x": -1.299,
                                        "y": 0.75
                                },
                                {
                                        "x": -1.5,
                                        "y": 0.0
                                },
                                {
                                        "x": -1.299,
                                        "y": -0.75
                                },
                                {
                                        "x": -0.75,
                                        "y": -1.299
                                },
                                {
                                        "x": -0.0,
                                        "y": -1.5
                                },
                                {
                                        "x": 0.75,
                                        "y": -1.299
                                },
                                {
                                        "x": 1.299,
                                        "y": -0.75
                                }
                        ],
                        "closed": true
                },
                {
                        "type": "LINE",
                        "x1": -4.0,
                        "y1": -4.0,
                        "x2": 4.0,
                        "y2": 4.0
                },
                {
                        "type": "LINE",
                        "x1": -4.0,
                        "y1": 4.0,
                        "x2": 4.0,
                        "y2": -4.0
                }
        ]
},

    "MONUMENT_STATUE": {
        "id": "MONUMENT_STATUE",
        "name": "Estátua / monumento",
        "name_en": "Public Monument / Historic Statue",
        "category": "special",
        "categoryName": "Blocos Diferentões",
        "dimensions": "3.00m x 3.00m",
        "layer": "Especiais",
        "color": "#f43f5e",
        "svgPreview": "<svg viewBox=\"-1.8 -1.8 3.6 3.6\" width=\"46\" height=\"46\" stroke=\"#f43f5e\" stroke-width=\"0.05\" fill=\"none\"><rect x=\"-1.5\" y=\"-1.5\" width=\"3.0\" height=\"3.0\"/><rect x=\"-1.0\" y=\"-1.0\" width=\"2.0\" height=\"2.0\"/><circle cx=\"0\" cy=\"0\" r=\"0.45\"/><path d=\"M-0.3,-0.1 L0,0.5 L0.3,-0.1 Z\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": -1.5,
                        "y1": -1.5,
                        "x2": 1.5,
                        "y2": -1.5
                },
                {
                        "type": "LINE",
                        "x1": 1.5,
                        "y1": -1.5,
                        "x2": 1.5,
                        "y2": 1.5
                },
                {
                        "type": "LINE",
                        "x1": 1.5,
                        "y1": 1.5,
                        "x2": -1.5,
                        "y2": 1.5
                },
                {
                        "type": "LINE",
                        "x1": -1.5,
                        "y1": 1.5,
                        "x2": -1.5,
                        "y2": -1.5
                },
                {
                        "type": "LINE",
                        "x1": -1.1,
                        "y1": -1.1,
                        "x2": 1.1,
                        "y2": -1.1
                },
                {
                        "type": "LINE",
                        "x1": 1.1,
                        "y1": -1.1,
                        "x2": 1.1,
                        "y2": 1.1
                },
                {
                        "type": "LINE",
                        "x1": 1.1,
                        "y1": 1.1,
                        "x2": -1.1,
                        "y2": 1.1
                },
                {
                        "type": "LINE",
                        "x1": -1.1,
                        "y1": 1.1,
                        "x2": -1.1,
                        "y2": -1.1
                },
                {
                        "type": "LINE",
                        "x1": -0.7,
                        "y1": -0.7,
                        "x2": 0.7,
                        "y2": -0.7
                },
                {
                        "type": "LINE",
                        "x1": 0.7,
                        "y1": -0.7,
                        "x2": 0.7,
                        "y2": 0.7
                },
                {
                        "type": "LINE",
                        "x1": 0.7,
                        "y1": 0.7,
                        "x2": -0.7,
                        "y2": 0.7
                },
                {
                        "type": "LINE",
                        "x1": -0.7,
                        "y1": 0.7,
                        "x2": -0.7,
                        "y2": -0.7
                },
                {
                        "type": "CIRCLE",
                        "cx": 0,
                        "cy": 0,
                        "r": 0.4
                },
                {
                        "type": "LINE",
                        "x1": -0.3,
                        "y1": 0,
                        "x2": 0.3,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": -0.3,
                        "x2": 0,
                        "y2": 0.5
                }
        ]
},

    "STREET_CLOCK_POST": {
        "id": "STREET_CLOCK_POST",
        "name": "Relógio urbano",
        "name_en": "Victorian 4-Dial Street Clock",
        "category": "special",
        "categoryName": "Blocos Diferentões",
        "dimensions": "0.80m x 0.80m",
        "layer": "Especiais",
        "color": "#f43f5e",
        "svgPreview": "<svg viewBox=\"-0.5 -0.5 1.0 1.0\" width=\"42\" height=\"42\" stroke=\"#f43f5e\" stroke-width=\"0.025\" fill=\"none\"><rect x=\"-0.35\" y=\"-0.35\" width=\"0.7\" height=\"0.7\"/><circle cx=\"0\" cy=\"0\" r=\"0.25\"/><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-0.15\"/><line x1=\"0\" y1=\"0\" x2=\"0.12\" y2=\"0\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": -0.35,
                        "y1": -0.35,
                        "x2": 0.35,
                        "y2": -0.35
                },
                {
                        "type": "LINE",
                        "x1": 0.35,
                        "y1": -0.35,
                        "x2": 0.35,
                        "y2": 0.35
                },
                {
                        "type": "LINE",
                        "x1": 0.35,
                        "y1": 0.35,
                        "x2": -0.35,
                        "y2": 0.35
                },
                {
                        "type": "LINE",
                        "x1": -0.35,
                        "y1": 0.35,
                        "x2": -0.35,
                        "y2": -0.35
                },
                {
                        "type": "CIRCLE",
                        "cx": 0,
                        "cy": 0,
                        "r": 0.28
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 0,
                        "y2": 0.18
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 0.12,
                        "y2": 0
                }
        ]
},

    "COLONIAL_BANDSTAND": {
        "id": "COLONIAL_BANDSTAND",
        "name": "Coreto colonial",
        "name_en": "Colonial Gazebo with Ornate Ironwork",
        "category": "special",
        "categoryName": "Blocos Diferentões",
        "dimensions": "7.00m x 7.00m",
        "layer": "Especiais",
        "color": "#f43f5e",
        "svgPreview": "<svg viewBox=\"-4 -4 8 8\" width=\"48\" height=\"48\" stroke=\"#f43f5e\" stroke-width=\"0.08\" fill=\"none\"><circle cx=\"0\" cy=\"0\" r=\"3.5\"/><polygon points=\"2.8,1.2 1.2,2.8 -1.2,2.8 -2.8,1.2 -2.8,-1.2 -1.2,-2.8 1.2,-2.8 2.8,-1.2\"/><rect x=\"-0.8\" y=\"3.3\" width=\"1.6\" height=\"0.6\"/></svg>",
        "entities": [
                {
                        "type": "POLYLINE",
                        "points": [
                                {
                                        "x": 3.5,
                                        "y": 0.0
                                },
                                {
                                        "x": 3.329,
                                        "y": 1.082
                                },
                                {
                                        "x": 2.832,
                                        "y": 2.057
                                },
                                {
                                        "x": 2.057,
                                        "y": 2.832
                                },
                                {
                                        "x": 1.082,
                                        "y": 3.329
                                },
                                {
                                        "x": 0.0,
                                        "y": 3.5
                                },
                                {
                                        "x": -1.082,
                                        "y": 3.329
                                },
                                {
                                        "x": -2.057,
                                        "y": 2.832
                                },
                                {
                                        "x": -2.832,
                                        "y": 2.057
                                },
                                {
                                        "x": -3.329,
                                        "y": 1.082
                                },
                                {
                                        "x": -3.5,
                                        "y": 0.0
                                },
                                {
                                        "x": -3.329,
                                        "y": -1.082
                                },
                                {
                                        "x": -2.832,
                                        "y": -2.057
                                },
                                {
                                        "x": -2.057,
                                        "y": -2.832
                                },
                                {
                                        "x": -1.082,
                                        "y": -3.329
                                },
                                {
                                        "x": -0.0,
                                        "y": -3.5
                                },
                                {
                                        "x": 1.082,
                                        "y": -3.329
                                },
                                {
                                        "x": 2.057,
                                        "y": -2.832
                                },
                                {
                                        "x": 2.832,
                                        "y": -2.057
                                },
                                {
                                        "x": 3.329,
                                        "y": -1.082
                                }
                        ],
                        "closed": true
                },
                {
                        "type": "POLYLINE",
                        "points": [
                                {
                                        "x": 3.1,
                                        "y": 0.0
                                },
                                {
                                        "x": 2.192,
                                        "y": 2.192
                                },
                                {
                                        "x": 0.0,
                                        "y": 3.1
                                },
                                {
                                        "x": -2.192,
                                        "y": 2.192
                                },
                                {
                                        "x": -3.1,
                                        "y": 0.0
                                },
                                {
                                        "x": -2.192,
                                        "y": -2.192
                                },
                                {
                                        "x": -0.0,
                                        "y": -3.1
                                },
                                {
                                        "x": 2.192,
                                        "y": -2.192
                                }
                        ],
                        "closed": true
                },
                {
                        "type": "CIRCLE",
                        "cx": 0,
                        "cy": 0,
                        "r": 0.3
                },
                {
                        "type": "POLYLINE",
                        "points": [
                                {
                                        "x": 2.7,
                                        "y": 0.0
                                },
                                {
                                        "x": 1.909,
                                        "y": 1.909
                                },
                                {
                                        "x": 0.0,
                                        "y": 2.7
                                },
                                {
                                        "x": -1.909,
                                        "y": 1.909
                                },
                                {
                                        "x": -2.7,
                                        "y": 0.0
                                },
                                {
                                        "x": -1.909,
                                        "y": -1.909
                                },
                                {
                                        "x": -0.0,
                                        "y": -2.7
                                },
                                {
                                        "x": 1.909,
                                        "y": -1.909
                                }
                        ],
                        "closed": true
                },
                {
                        "type": "LINE",
                        "x1": -0.9,
                        "y1": 3.2,
                        "x2": 0.9,
                        "y2": 3.2
                },
                {
                        "type": "LINE",
                        "x1": 0.9,
                        "y1": 3.2,
                        "x2": 0.9,
                        "y2": 3.8
                },
                {
                        "type": "LINE",
                        "x1": 0.9,
                        "y1": 3.8,
                        "x2": -0.9,
                        "y2": 3.8
                },
                {
                        "type": "LINE",
                        "x1": -0.9,
                        "y1": 3.8,
                        "x2": -0.9,
                        "y2": 3.2
                },
                {
                        "type": "LINE",
                        "x1": -0.9,
                        "y1": 3.4,
                        "x2": 0.9,
                        "y2": 3.4
                },
                {
                        "type": "LINE",
                        "x1": 0.9,
                        "y1": 3.4,
                        "x2": 0.9,
                        "y2": 3.8
                },
                {
                        "type": "LINE",
                        "x1": 0.9,
                        "y1": 3.8,
                        "x2": -0.9,
                        "y2": 3.8
                },
                {
                        "type": "LINE",
                        "x1": -0.9,
                        "y1": 3.8,
                        "x2": -0.9,
                        "y2": 3.4
                }
        ]
},

    "CHURCH_FLOOR_PLAN": {
        "id": "CHURCH_FLOOR_PLAN",
        "name": "Igreja em planta",
        "name_en": "Community Church / Chapel Floor Plan",
        "category": "special",
        "categoryName": "Blocos Diferentões",
        "dimensions": "24.00m x 12.00m",
        "layer": "Especiais",
        "color": "#f43f5e",
        "svgPreview": "<svg viewBox=\"-1 -6.5 25 13\" width=\"60\" height=\"32\" stroke=\"#f43f5e\" stroke-width=\"0.2\" fill=\"none\"><rect x=\"0\" y=\"-5\" width=\"18\" height=\"10\"/><path d=\"M18,-3.5 A3.5 3.5 0 0 1 18 3.5\"/><line x1=\"2\" y1=\"-5\" x2=\"2\" y2=\"5\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": -5.0,
                        "x2": 18.0,
                        "y2": -5.0
                },
                {
                        "type": "LINE",
                        "x1": 18.0,
                        "y1": -5.0,
                        "x2": 18.0,
                        "y2": 5.0
                },
                {
                        "type": "LINE",
                        "x1": 18.0,
                        "y1": 5.0,
                        "x2": 0,
                        "y2": 5.0
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 5.0,
                        "x2": 0,
                        "y2": -5.0
                },
                {
                        "type": "ARC",
                        "cx": 18.0,
                        "cy": 0,
                        "r": 4.0,
                        "startAngle": -1.5707963267948966,
                        "endAngle": 1.5707963267948966
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": -6.0,
                        "x2": 3.5,
                        "y2": -6.0
                },
                {
                        "type": "LINE",
                        "x1": 3.5,
                        "y1": -6.0,
                        "x2": 3.5,
                        "y2": 6.0
                },
                {
                        "type": "LINE",
                        "x1": 3.5,
                        "y1": 6.0,
                        "x2": 0,
                        "y2": 6.0
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 6.0,
                        "x2": 0,
                        "y2": -6.0
                },
                {
                        "type": "LINE",
                        "x1": 3.5,
                        "y1": 0,
                        "x2": 18.0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 4.5,
                        "y1": -4.2,
                        "x2": 15.5,
                        "y2": -4.2
                },
                {
                        "type": "LINE",
                        "x1": 15.5,
                        "y1": -4.2,
                        "x2": 15.5,
                        "y2": -0.7
                },
                {
                        "type": "LINE",
                        "x1": 15.5,
                        "y1": -0.7,
                        "x2": 4.5,
                        "y2": -0.7
                },
                {
                        "type": "LINE",
                        "x1": 4.5,
                        "y1": -0.7,
                        "x2": 4.5,
                        "y2": -4.2
                },
                {
                        "type": "LINE",
                        "x1": 4.5,
                        "y1": 0.7,
                        "x2": 15.5,
                        "y2": 0.7
                },
                {
                        "type": "LINE",
                        "x1": 15.5,
                        "y1": 0.7,
                        "x2": 15.5,
                        "y2": 4.2
                },
                {
                        "type": "LINE",
                        "x1": 15.5,
                        "y1": 4.2,
                        "x2": 4.5,
                        "y2": 4.2
                },
                {
                        "type": "LINE",
                        "x1": 4.5,
                        "y1": 4.2,
                        "x2": 4.5,
                        "y2": 0.7
                },
                {
                        "type": "LINE",
                        "x1": 18.5,
                        "y1": -1.2,
                        "x2": 20.3,
                        "y2": -1.2
                },
                {
                        "type": "LINE",
                        "x1": 20.3,
                        "y1": -1.2,
                        "x2": 20.3,
                        "y2": 1.2
                },
                {
                        "type": "LINE",
                        "x1": 20.3,
                        "y1": 1.2,
                        "x2": 18.5,
                        "y2": 1.2
                },
                {
                        "type": "LINE",
                        "x1": 18.5,
                        "y1": 1.2,
                        "x2": 18.5,
                        "y2": -1.2
                }
        ]
},

    "CEMETERY_GRAVES": {
        "id": "CEMETERY_GRAVES",
        "name": "Cemitério com diferentes tipos de jazigos",
        "name_en": "Cemetery Plot with Various Family Vaults",
        "category": "special",
        "categoryName": "Blocos Diferentões",
        "dimensions": "12.00m x 8.00m",
        "layer": "Especiais",
        "color": "#f43f5e",
        "svgPreview": "<svg viewBox=\"-0.5 -0.5 13 9\" width=\"56\" height=\"38\" stroke=\"#f43f5e\" stroke-width=\"0.08\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"12\" height=\"8\"/><line x1=\"6\" y1=\"0\" x2=\"6\" y2=\"8\"/><rect x=\"1\" y=\"1\" width=\"1.8\" height=\"1.0\"/><rect x=\"3.5\" y=\"1\" width=\"1.8\" height=\"1.0\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 12.0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 12.0,
                        "y1": 0,
                        "x2": 12.0,
                        "y2": 8.0
                },
                {
                        "type": "LINE",
                        "x1": 12.0,
                        "y1": 8.0,
                        "x2": 0,
                        "y2": 8.0
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 8.0,
                        "x2": 0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 6.0,
                        "y1": 0,
                        "x2": 6.0,
                        "y2": 8.0
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 4.0,
                        "x2": 12.0,
                        "y2": 4.0
                },
                {
                        "type": "LINE",
                        "x1": 1.0,
                        "y1": 1.0,
                        "x2": 2.8,
                        "y2": 1.0
                },
                {
                        "type": "LINE",
                        "x1": 2.8,
                        "y1": 1.0,
                        "x2": 2.8,
                        "y2": 2.0
                },
                {
                        "type": "LINE",
                        "x1": 2.8,
                        "y1": 2.0,
                        "x2": 1.0,
                        "y2": 2.0
                },
                {
                        "type": "LINE",
                        "x1": 1.0,
                        "y1": 2.0,
                        "x2": 1.0,
                        "y2": 1.0
                },
                {
                        "type": "LINE",
                        "x1": 3.4,
                        "y1": 1.0,
                        "x2": 5.2,
                        "y2": 1.0
                },
                {
                        "type": "LINE",
                        "x1": 5.2,
                        "y1": 1.0,
                        "x2": 5.2,
                        "y2": 2.0
                },
                {
                        "type": "LINE",
                        "x1": 5.2,
                        "y1": 2.0,
                        "x2": 3.4,
                        "y2": 2.0
                },
                {
                        "type": "LINE",
                        "x1": 3.4,
                        "y1": 2.0,
                        "x2": 3.4,
                        "y2": 1.0
                },
                {
                        "type": "LINE",
                        "x1": 1.0,
                        "y1": 2.4,
                        "x2": 2.8,
                        "y2": 2.4
                },
                {
                        "type": "LINE",
                        "x1": 2.8,
                        "y1": 2.4,
                        "x2": 2.8,
                        "y2": 3.4
                },
                {
                        "type": "LINE",
                        "x1": 2.8,
                        "y1": 3.4,
                        "x2": 1.0,
                        "y2": 3.4
                },
                {
                        "type": "LINE",
                        "x1": 1.0,
                        "y1": 3.4,
                        "x2": 1.0,
                        "y2": 2.4
                },
                {
                        "type": "LINE",
                        "x1": 3.4,
                        "y1": 2.4,
                        "x2": 5.2,
                        "y2": 2.4
                },
                {
                        "type": "LINE",
                        "x1": 5.2,
                        "y1": 2.4,
                        "x2": 5.2,
                        "y2": 3.4
                },
                {
                        "type": "LINE",
                        "x1": 5.2,
                        "y1": 3.4,
                        "x2": 3.4,
                        "y2": 3.4
                },
                {
                        "type": "LINE",
                        "x1": 3.4,
                        "y1": 3.4,
                        "x2": 3.4,
                        "y2": 2.4
                },
                {
                        "type": "LINE",
                        "x1": 7.5,
                        "y1": 1.0,
                        "x2": 11.0,
                        "y2": 1.0
                },
                {
                        "type": "LINE",
                        "x1": 11.0,
                        "y1": 1.0,
                        "x2": 11.0,
                        "y2": 3.4
                },
                {
                        "type": "LINE",
                        "x1": 11.0,
                        "y1": 3.4,
                        "x2": 7.5,
                        "y2": 3.4
                },
                {
                        "type": "LINE",
                        "x1": 7.5,
                        "y1": 3.4,
                        "x2": 7.5,
                        "y2": 1.0
                },
                {
                        "type": "LINE",
                        "x1": 1.0,
                        "y1": 5.0,
                        "x2": 2.8,
                        "y2": 5.0
                },
                {
                        "type": "LINE",
                        "x1": 2.8,
                        "y1": 5.0,
                        "x2": 2.8,
                        "y2": 5.9
                },
                {
                        "type": "LINE",
                        "x1": 2.8,
                        "y1": 5.9,
                        "x2": 1.0,
                        "y2": 5.9
                },
                {
                        "type": "LINE",
                        "x1": 1.0,
                        "y1": 5.9,
                        "x2": 1.0,
                        "y2": 5.0
                },
                {
                        "type": "LINE",
                        "x1": 3.4,
                        "y1": 5.0,
                        "x2": 5.2,
                        "y2": 5.0
                },
                {
                        "type": "LINE",
                        "x1": 5.2,
                        "y1": 5.0,
                        "x2": 5.2,
                        "y2": 5.9
                },
                {
                        "type": "LINE",
                        "x1": 5.2,
                        "y1": 5.9,
                        "x2": 3.4,
                        "y2": 5.9
                },
                {
                        "type": "LINE",
                        "x1": 3.4,
                        "y1": 5.9,
                        "x2": 3.4,
                        "y2": 5.0
                },
                {
                        "type": "LINE",
                        "x1": 7.5,
                        "y1": 5.0,
                        "x2": 9.3,
                        "y2": 5.0
                },
                {
                        "type": "LINE",
                        "x1": 9.3,
                        "y1": 5.0,
                        "x2": 9.3,
                        "y2": 5.9
                },
                {
                        "type": "LINE",
                        "x1": 9.3,
                        "y1": 5.9,
                        "x2": 7.5,
                        "y2": 5.9
                },
                {
                        "type": "LINE",
                        "x1": 7.5,
                        "y1": 5.9,
                        "x2": 7.5,
                        "y2": 5.0
                },
                {
                        "type": "LINE",
                        "x1": 9.6,
                        "y1": 5.0,
                        "x2": 11.4,
                        "y2": 5.0
                },
                {
                        "type": "LINE",
                        "x1": 11.4,
                        "y1": 5.0,
                        "x2": 11.4,
                        "y2": 5.9
                },
                {
                        "type": "LINE",
                        "x1": 11.4,
                        "y1": 5.9,
                        "x2": 9.6,
                        "y2": 5.9
                },
                {
                        "type": "LINE",
                        "x1": 9.6,
                        "y1": 5.9,
                        "x2": 9.6,
                        "y2": 5.0
                }
        ]
},

    "MEMORIAL_COLUMBARIUM": {
        "id": "MEMORIAL_COLUMBARIUM",
        "name": "Crematório / memorial",
        "name_en": "Memorial Garden Columbarium Wall",
        "category": "special",
        "categoryName": "Blocos Diferentões",
        "dimensions": "8.00m x 4.00m",
        "layer": "Especiais",
        "color": "#f43f5e",
        "svgPreview": "<svg viewBox=\"-0.3 -0.3 8.6 4.6\" width=\"56\" height=\"30\" stroke=\"#f43f5e\" stroke-width=\"0.06\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"8.0\" height=\"4.0\" rx=\"0.3\"/><rect x=\"0.5\" y=\"0.4\" width=\"7.0\" height=\"0.6\"/><circle cx=\"4.0\" cy=\"2.5\" r=\"0.6\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 8.0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 8.0,
                        "y1": 0,
                        "x2": 8.0,
                        "y2": 4.0
                },
                {
                        "type": "LINE",
                        "x1": 8.0,
                        "y1": 4.0,
                        "x2": 0,
                        "y2": 4.0
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 4.0,
                        "x2": 0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 0.6,
                        "y1": 0.4,
                        "x2": 7.4,
                        "y2": 0.4
                },
                {
                        "type": "LINE",
                        "x1": 7.4,
                        "y1": 0.4,
                        "x2": 7.4,
                        "y2": 1.1
                },
                {
                        "type": "LINE",
                        "x1": 7.4,
                        "y1": 1.1,
                        "x2": 0.6,
                        "y2": 1.1
                },
                {
                        "type": "LINE",
                        "x1": 0.6,
                        "y1": 1.1,
                        "x2": 0.6,
                        "y2": 0.4
                },
                {
                        "type": "LINE",
                        "x1": 1.6,
                        "y1": 0.4,
                        "x2": 1.6,
                        "y2": 1.1
                },
                {
                        "type": "LINE",
                        "x1": 2.6,
                        "y1": 0.4,
                        "x2": 2.6,
                        "y2": 1.1
                },
                {
                        "type": "LINE",
                        "x1": 3.6,
                        "y1": 0.4,
                        "x2": 3.6,
                        "y2": 1.1
                },
                {
                        "type": "LINE",
                        "x1": 4.6,
                        "y1": 0.4,
                        "x2": 4.6,
                        "y2": 1.1
                },
                {
                        "type": "LINE",
                        "x1": 5.6,
                        "y1": 0.4,
                        "x2": 5.6,
                        "y2": 1.1
                },
                {
                        "type": "LINE",
                        "x1": 6.6,
                        "y1": 0.4,
                        "x2": 6.6,
                        "y2": 1.1
                },
                {
                        "type": "CIRCLE",
                        "cx": 4.0,
                        "cy": 2.6,
                        "r": 0.6
                },
                {
                        "type": "LINE",
                        "x1": 2.5,
                        "y1": 3.4,
                        "x2": 5.5,
                        "y2": 3.4
                },
                {
                        "type": "LINE",
                        "x1": 5.5,
                        "y1": 3.4,
                        "x2": 5.5,
                        "y2": 3.85
                },
                {
                        "type": "LINE",
                        "x1": 5.5,
                        "y1": 3.85,
                        "x2": 2.5,
                        "y2": 3.85
                },
                {
                        "type": "LINE",
                        "x1": 2.5,
                        "y1": 3.85,
                        "x2": 2.5,
                        "y2": 3.4
                }
        ]
},

    "ECOPONTO_COLLECTION": {
        "id": "ECOPONTO_COLLECTION",
        "name": "Ponto de coleta de recicláveis",
        "name_en": "Community Ecoponto Recycling Drop-Off",
        "category": "special",
        "categoryName": "Blocos Diferentões",
        "dimensions": "7.00m x 3.50m",
        "layer": "Especiais",
        "color": "#f43f5e",
        "svgPreview": "<svg viewBox=\"-0.3 -0.3 7.6 4.1\" width=\"56\" height=\"30\" stroke=\"#f43f5e\" stroke-width=\"0.06\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"7.0\" height=\"3.5\" stroke-dasharray=\"0.2,0.2\"/><rect x=\"0.5\" y=\"0.5\" width=\"1.6\" height=\"2.5\"/><rect x=\"2.7\" y=\"0.5\" width=\"1.6\" height=\"2.5\"/><rect x=\"4.9\" y=\"0.5\" width=\"1.6\" height=\"2.5\"/></svg>",
        "entities": [
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 0,
                        "x2": 7.0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 7.0,
                        "y1": 0,
                        "x2": 7.0,
                        "y2": 3.5
                },
                {
                        "type": "LINE",
                        "x1": 7.0,
                        "y1": 3.5,
                        "x2": 0,
                        "y2": 3.5
                },
                {
                        "type": "LINE",
                        "x1": 0,
                        "y1": 3.5,
                        "x2": 0,
                        "y2": 0
                },
                {
                        "type": "LINE",
                        "x1": 0.5,
                        "y1": 0.5,
                        "x2": 2.2,
                        "y2": 0.5
                },
                {
                        "type": "LINE",
                        "x1": 2.2,
                        "y1": 0.5,
                        "x2": 2.2,
                        "y2": 3.0
                },
                {
                        "type": "LINE",
                        "x1": 2.2,
                        "y1": 3.0,
                        "x2": 0.5,
                        "y2": 3.0
                },
                {
                        "type": "LINE",
                        "x1": 0.5,
                        "y1": 3.0,
                        "x2": 0.5,
                        "y2": 0.5
                },
                {
                        "type": "TEXT",
                        "x": 0.6,
                        "y": 1.8,
                        "text": "ENTULHO",
                        "height": 0.25
                },
                {
                        "type": "LINE",
                        "x1": 2.65,
                        "y1": 0.5,
                        "x2": 4.35,
                        "y2": 0.5
                },
                {
                        "type": "LINE",
                        "x1": 4.35,
                        "y1": 0.5,
                        "x2": 4.35,
                        "y2": 3.0
                },
                {
                        "type": "LINE",
                        "x1": 4.35,
                        "y1": 3.0,
                        "x2": 2.65,
                        "y2": 3.0
                },
                {
                        "type": "LINE",
                        "x1": 2.65,
                        "y1": 3.0,
                        "x2": 2.65,
                        "y2": 0.5
                },
                {
                        "type": "TEXT",
                        "x": 2.8,
                        "y": 1.8,
                        "text": "PODAS",
                        "height": 0.25
                },
                {
                        "type": "LINE",
                        "x1": 4.8,
                        "y1": 0.5,
                        "x2": 6.5,
                        "y2": 0.5
                },
                {
                        "type": "LINE",
                        "x1": 6.5,
                        "y1": 0.5,
                        "x2": 6.5,
                        "y2": 3.0
                },
                {
                        "type": "LINE",
                        "x1": 6.5,
                        "y1": 3.0,
                        "x2": 4.8,
                        "y2": 3.0
                },
                {
                        "type": "LINE",
                        "x1": 4.8,
                        "y1": 3.0,
                        "x2": 4.8,
                        "y2": 0.5
                },
                {
                        "type": "TEXT",
                        "x": 4.9,
                        "y": 1.8,
                        "text": "PNEUS/REC",
                        "height": 0.25
                }
        ]
}
};

if (typeof CADEngine !== 'undefined') {
    CADEngine.BlockLibrary = CADBlockLibrary;
    if (typeof CADLinetypes !== 'undefined') CADEngine.Linetypes = CADLinetypes;
}

if (typeof window !== 'undefined') {
    window.CADBlockLibrary = CADBlockLibrary;
    if (typeof CADLinetypes !== 'undefined') window.CADLinetypes = CADLinetypes;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CADBlockLibrary };
}
