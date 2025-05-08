const XLSX = require('xlsx');

function generateExcel(meetingData, outputPath) {
    if (!outputPath) {
        throw new Error('Output path mangler for Excel-fil.');
    }

    if (!meetingData || !meetingData.participants || meetingData.participants.length === 0) {
        throw new Error('Ingen deltakere funnet i møtehendelsen.');
    }

    const workbook = XLSX.utils.book_new();
    const worksheetData = [
        ['Akseptert', 'Fornavn', 'Etternavn', 'Firma', 'Mobil', 'Nøkkelord', 'Starttid', 'Sluttid', 'Kortnummer', 'Kommentar', 'E-post'],
        ...meetingData.participants.map(p => {
            const firma = p.email.split('@')[1]?.split('.')[0] || 'Ukjent'; // Ekstraher domenenavn fra e-post
            return [
                'Ja', // Akseptert (default value)
                p.firstName,
                p.lastName,
                firma,
                p.mobile || '',
                '', // Nøkkelord
                `${new Date(meetingData.startTime).toLocaleDateString()} ${new Date(meetingData.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`,
                `${new Date(meetingData.endTime).toLocaleDateString()} ${new Date(meetingData.endTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`,
                '', // Kortnummer
                '', // Kommentar
                p.email
            ];
        })
    ];
    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Deltakere');
    XLSX.writeFile(workbook, outputPath);
}

module.exports = { generateExcel };
