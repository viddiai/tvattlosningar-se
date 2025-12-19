/**
 * PDF Generator for Tool Results
 * Uses jsPDF to generate downloadable PDF reports
 *
 * Include jsPDF library in your HTML:
 * <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
 */

// Colors matching brand
const COLORS = {
    primary: '#005281',
    primaryLight: '#E6F2F8',
    accent: '#0078B4',
    textDark: '#1A2833',
    textMid: '#4A5A66',
    textLight: '#7A8A96',
    success: '#2D9B81',
    warning: '#C74E3C'
};

/**
 * Generate LCC Calculator PDF Report
 */
function generateLCCReport(altA, resultA, altB, resultB) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    let yPos = 20;

    // Header
    doc.setFillColor(COLORS.primary);
    doc.rect(0, 0, 210, 40, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.text('LCC-Kalkylering', 105, 18, { align: 'center' });

    doc.setFontSize(12);
    doc.text('Livscykelkostnad för tvättlösningar', 105, 28, { align: 'center' });

    doc.setTextColor(COLORS.textLight);
    doc.setFontSize(9);
    doc.text(`Genererad: ${new Date().toLocaleDateString('sv-SE')}`, 105, 35, { align: 'center' });

    yPos = 50;

    // Comparison summary
    doc.setTextColor(COLORS.textDark);
    doc.setFontSize(16);
    doc.text('Jämförelse', 20, yPos);
    yPos += 10;

    // Winner highlight
    const winner = resultA.totalLCC < resultB.totalLCC ? altA : altB;
    const winnerResult = resultA.totalLCC < resultB.totalLCC ? resultA : resultB;

    doc.setFillColor(hexToRgb(COLORS.primaryLight));
    doc.roundedRect(20, yPos, 170, 25, 3, 3, 'F');

    doc.setFontSize(12);
    doc.setTextColor(COLORS.primary);
    doc.text('🏆 Rekommendation:', 25, yPos + 8);

    doc.setTextColor(COLORS.textDark);
    doc.setFontSize(14);
    doc.text(`${winner.name}`, 25, yPos + 16);

    doc.setFontSize(10);
    doc.text(`Total LCC: ${formatCurrency(winnerResult.totalLCC)}`, 25, yPos + 22);

    yPos += 35;

    // Alternative A
    yPos = drawAlternativeSection(doc, 'Alternativ A', altA, resultA, yPos);

    // Alternative B
    yPos = drawAlternativeSection(doc, 'Alternativ B', altB, resultB, yPos);

    // Detailed comparison table
    if (yPos > 230) {
        doc.addPage();
        yPos = 20;
    }

    doc.setFontSize(14);
    doc.setTextColor(COLORS.textDark);
    doc.text('Detaljerad jämförelse', 20, yPos);
    yPos += 8;

    const tableData = [
        ['Kostnadsmått', altA.name, altB.name],
        ['Total LCC', formatCurrency(resultA.totalLCC), formatCurrency(resultB.totalLCC)],
        ['LCC per år', formatCurrency(resultA.lccPerYear), formatCurrency(resultB.lccPerYear)],
        ['Initial investering', formatCurrency(resultA.totalCapex), formatCurrency(resultB.totalCapex)],
        ['Årlig driftskostnad', formatCurrency(resultA.totalOpex), formatCurrency(resultB.totalOpex)]
    ];

    drawTable(doc, tableData, 20, yPos, 170);

    yPos += tableData.length * 10 + 5;

    // Footer
    addFooter(doc);

    // Save
    doc.save(`LCC-Kalkylering-${new Date().toISOString().split('T')[0]}.pdf`);

    // Track download
    if (typeof trackDownload !== 'undefined') {
        trackDownload('LCC Report', 'lcc-report.pdf');
    }
}

/**
 * Generate Volume Calculator PDF Report
 */
function generateVolumeReport(formData, results) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    let yPos = 20;

    // Header
    doc.setFillColor(hexToRgb(COLORS.primary));
    doc.rect(0, 0, 210, 40, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.text('Volymberäkning', 105, 18, { align: 'center' });

    doc.setFontSize(12);
    doc.text('Rekommendation för er verksamhet', 105, 28, { align: 'center' });

    doc.setTextColor(COLORS.textLight);
    doc.setFontSize(9);
    doc.text(`Genererad: ${new Date().toLocaleDateString('sv-SE')}`, 105, 35, { align: 'center' });

    yPos = 50;

    // Verksamhetsinformation
    doc.setFontSize(14);
    doc.setTextColor(COLORS.textDark);
    doc.text('Verksamhetsinformation', 20, yPos);
    yPos += 8;

    doc.setFontSize(10);
    doc.text(`Typ: ${getFacilityName(formData.facilityType)}`, 25, yPos);
    yPos += 6;
    doc.text(`Kapacitet: ${formData.capacity} platser`, 25, yPos);
    yPos += 6;
    doc.text(`Toppbelastning: ${getTurnaroundName(formData.turnaround)}`, 25, yPos);
    yPos += 10;

    // Rekommendation (highlight box)
    doc.setFillColor(hexToRgb(COLORS.success) + [20]);
    doc.roundedRect(20, yPos, 170, 40, 3, 3, 'F');

    doc.setFontSize(16);
    doc.setTextColor(COLORS.success);
    doc.text('Rekommendation:', 25, yPos + 10);

    doc.setFontSize(24);
    doc.setTextColor(COLORS.textDark);
    doc.text(`${results.washers} tvättmaskiner`, 25, yPos + 20);
    doc.text(`${results.dryers} torktumlare`, 25, yPos + 30);

    yPos += 50;

    // Beräkningsunderlag
    doc.setFontSize(14);
    doc.setTextColor(COLORS.textDark);
    doc.text('Beräkningsunderlag', 20, yPos);
    yPos += 8;

    const volData = [
        ['Tvättvolym per dag', `${Math.round(results.dailyVolume)} kg`],
        ['Tvättvolym per vecka', `${Math.round(results.weeklyVolume)} kg`],
        ['Tvättvolym per år', `${Math.round(results.yearlyVolume).toLocaleString('sv-SE')} kg`],
        ['Rekommenderad maskinstorlek', `${results.machineSize} kg`],
        ['Antal tvättcykler per dag', `${results.cyclesPerDay} cykler`]
    ];

    drawTable(doc, volData, 20, yPos, 170);

    yPos += volData.length * 10 + 15;

    // Rekommendationer
    doc.setFontSize(14);
    doc.text('Viktiga rekommendationer', 20, yPos);
    yPos += 8;

    doc.setFontSize(10);
    const recommendations = [
        '✓ Dimensionera för toppbelastning – inte genomsnitt',
        '✓ Ha redundans: Om en maskin går sönder måste vården fortsätta',
        '✓ Överväg automatisk dosering för jämn kvalitet',
        '✓ Välj energieffektiva maskiner för lägre driftskostnad'
    ];

    recommendations.forEach(rec => {
        doc.text(rec, 25, yPos);
        yPos += 6;
    });

    // Footer
    addFooter(doc);

    // Save
    doc.save(`Volymberakning-${new Date().toISOString().split('T')[0]}.pdf`);

    // Track download
    if (typeof trackDownload !== 'undefined') {
        trackDownload('Volume Report', 'volume-report.pdf');
    }
}

/**
 * Generate Quiz Results PDF Report
 */
function generateQuizReport(totalScore, categoryScores, answers) {
    const { jsPDF} = window.jspdf;
    const doc = new jsPDF();

    let yPos = 20;

    // Header
    doc.setFillColor(hexToRgb(COLORS.primary));
    doc.rect(0, 0, 210, 40, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.text('Beredskapsrapport', 105, 18, { align: 'center' });

    doc.setFontSize(12);
    doc.text('Upphandling av tvättlösningar', 105, 28, { align: 'center' });

    doc.setTextColor(COLORS.textLight);
    doc.setFontSize(9);
    doc.text(`Genererad: ${new Date().toLocaleDateString('sv-SE')}`, 105, 35, { align: 'center' });

    yPos = 50;

    // Total score
    doc.setFillColor(hexToRgb(COLORS.primaryLight));
    doc.roundedRect(20, yPos, 170, 30, 3, 3, 'F');

    doc.setFontSize(16);
    doc.setTextColor(COLORS.primary);
    doc.text('Totalt resultat:', 25, yPos + 12);

    doc.setFontSize(36);
    doc.text(`${totalScore}`, 140, yPos + 20);

    doc.setFontSize(12);
    doc.text('av 100 poäng', 152, yPos + 20);

    yPos += 40;

    // Readiness level
    let readinessText = '';
    let readinessColor = COLORS.success;

    if (totalScore >= 85) {
        readinessText = '🎯 Utmärkt beredskap!';
    } else if (totalScore >= 65) {
        readinessText = '✅ Bra beredskap';
    } else if (totalScore >= 40) {
        readinessText = '⚠️ Delvis förberedd';
        readinessColor = COLORS.warning;
    } else {
        readinessText = '🚨 Behöver mer förberedelse';
        readinessColor = COLORS.warning;
    }

    doc.setFontSize(14);
    doc.setTextColor(readinessColor);
    doc.text(readinessText, 20, yPos);
    yPos += 10;

    // Category breakdown
    doc.setFontSize(14);
    doc.setTextColor(COLORS.textDark);
    doc.text('Resultat per område', 20, yPos);
    yPos += 8;

    Object.entries(categoryScores).forEach(([category, data]) => {
        const percentage = Math.round((data.score / data.max) * 100);

        doc.setFontSize(11);
        doc.setTextColor(COLORS.textDark);
        doc.text(`${category}:`, 25, yPos);

        doc.setFontSize(11);
        doc.setTextColor(COLORS.primary);
        doc.text(`${percentage}%`, 180, yPos, { align: 'right' });

        // Progress bar
        yPos += 2;
        doc.setDrawColor(COLORS.border);
        doc.rect(25, yPos, 155, 4);

        let barColor = COLORS.success;
        if (percentage < 50) barColor = COLORS.warning;
        else if (percentage < 75) barColor = COLORS.accent;

        doc.setFillColor(hexToRgb(barColor));
        doc.rect(25, yPos, (155 * percentage / 100), 4, 'F');

        yPos += 10;

        if (yPos > 260) {
            doc.addPage();
            yPos = 20;
        }
    });

    // Footer
    addFooter(doc);

    // Save
    doc.save(`Beredskapsrapport-${new Date().toISOString().split('T')[0]}.pdf`);

    // Track download
    if (typeof trackDownload !== 'undefined') {
        trackDownload('Quiz Report', 'quiz-report.pdf');
    }
}

// Helper Functions

function drawAlternativeSection(doc, title, alt, result, yPos) {
    doc.setFontSize(12);
    doc.setTextColor(COLORS.primary);
    doc.text(title + ': ' + alt.name, 20, yPos);
    yPos += 6;

    doc.setFontSize(9);
    doc.setTextColor(COLORS.textMid);

    doc.text(`Total CapEx: ${formatCurrency(result.totalCapex)}`, 25, yPos);
    yPos += 5;
    doc.text(`Årlig OpEx: ${formatCurrency(result.totalOpex)}`, 25, yPos);
    yPos += 5;
    doc.text(`Livslängd: ${alt.lifespan} år`, 25, yPos);
    yPos += 5;

    doc.setFontSize(11);
    doc.setTextColor(COLORS.textDark);
    doc.text(`Total LCC: ${formatCurrency(result.totalLCC)}`, 25, yPos);
    doc.text(`Per år: ${formatCurrency(result.lccPerYear)}`, 120, yPos);
    yPos += 10;

    return yPos;
}

function drawTable(doc, data, x, y, width) {
    const colWidth = width / data[0].length;
    const rowHeight = 10;

    data.forEach((row, i) => {
        row.forEach((cell, j) => {
            if (i === 0) {
                // Header
                doc.setFillColor(hexToRgb(COLORS.primary));
                doc.rect(x + j * colWidth, y, colWidth, rowHeight, 'F');
                doc.setTextColor(255, 255, 255);
                doc.setFontSize(9);
                doc.text(cell, x + j * colWidth + 2, y + 7);
            } else {
                // Data
                doc.setDrawColor(hexToRgb(COLORS.border));
                doc.rect(x + j * colWidth, y, colWidth, rowHeight);
                doc.setTextColor(COLORS.textDark);
                doc.setFontSize(9);
                doc.text(cell, x + j * colWidth + 2, y + 7);
            }
        });
        y += rowHeight;
    });
}

function addFooter(doc) {
    const pageCount = doc.internal.getNumberOfPages();

    for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);

        doc.setFontSize(8);
        doc.setTextColor(COLORS.textLight);
        doc.text('tvättlösningar.se | KEN Tvättlösningar', 105, 285, { align: 'center' });
        doc.text(`Sida ${i} av ${pageCount}`, 190, 285, { align: 'right' });
    }
}

function formatCurrency(value) {
    return new Intl.NumberFormat('sv-SE', {
        style: 'currency',
        currency: 'SEK',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(value);
}

function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
    ] : [0, 0, 0];
}

function getFacilityName(type) {
    const names = {
        'nursing_home': 'Äldreboende',
        'hospital': 'Sjukhus/Akutvård',
        'clinic': 'Vårdmottagning',
        'assisted_living': 'Serviceboende'
    };
    return names[type] || 'Vårdinrättning';
}

function getTurnaroundName(type) {
    const names = {
        'same_day': 'Samma dag (akutvård)',
        'next_day': 'Nästa dag (standard)',
        'flexible': 'Flexibelt, 2-3 dagar'
    };
    return names[type] || 'Standard';
}

// Export functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        generateLCCReport,
        generateVolumeReport,
        generateQuizReport
    };
}
