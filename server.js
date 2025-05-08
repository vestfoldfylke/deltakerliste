const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const cors = require('cors'); // Legg til CORS

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(cors({ origin: 'http://localhost:5500' })); // Tillat forespørsler fra frontend
app.use(express.json()); // For å parse JSON-data i forespørsler

// Legg til en rute for å servere statiske filer
app.use(express.static(path.join(__dirname)));

// Rute for rotnivå (/) som serverer index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

let latestExcelFilePath = ''; // Variabel for å lagre banen til den genererte Excel-filen

app.post('/upload', upload.none(), async (req, res) => {
    try {
        console.log('Mottatt data fra frontend:', req.body); // Logg dataen som mottas fra frontend

        const meetingData = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
        if (!meetingData || !meetingData.participants) {
            throw new Error('Ugyldige data mottatt. Sørg for at JSON-dataen inneholder "participants".');
        }

        console.log('Møtehendelse data:', meetingData); // Logg møtehendelse data

        const excelFilePath = path.join(__dirname, 'output.xlsx'); // Definer filbanen
        console.log('Genererer Excel-fil på:', excelFilePath); // Logg filbanen

        generateExcel(meetingData, excelFilePath); // Generer Excel-fil
        latestExcelFilePath = excelFilePath; // Lagre banen til den genererte Excel-filen

        res.json({ message: 'Excel-fil generert for valgt hendelse!' });
    } catch (error) {
        console.error('Feil under opplasting:', error); // Logg feilen
        res.status(500).json({ message: 'Feil oppstod: ' + error.message });
    }
});

app.get('/output.xlsx', (req, res) => {
    if (fs.existsSync(latestExcelFilePath)) {
        console.log('Sender Excel-fil:', latestExcelFilePath);
        res.sendFile(latestExcelFilePath);
    } else {
        console.error('Excel-fil ikke funnet:', latestExcelFilePath);
        res.status(404).send('Excel-fil ikke funnet.');
    }
});

app.post('/send-email', async (req, res) => {
    try {
        console.log('Starter e-postsending...');

        // Sjekk om Excel-filen er generert
        if (!latestExcelFilePath || !fs.existsSync(latestExcelFilePath)) {
            throw new Error('Ingen Excel-fil generert. Generer filen før du sender e-post.');
        }

        // Hent tilgangstoken fra frontend (forutsatt at det sendes med forespørselen)
        const accessToken = req.headers.authorization?.split(' ')[1];
        if (!accessToken) {
            throw new Error('Ingen tilgangstoken funnet. Logg inn først.');
        }

        console.log('Tilgangstoken mottatt:', accessToken); // Logg tilgangstoken for debugging

        const transporter = nodemailer.createTransport({
            host: 'smtp.office365.com',
            port: 587,
            secure: false,
            auth: {
                type: 'OAuth2',
                user: 'your-email@domain.com', // Din Microsoft 365 e-postadresse
                accessToken: accessToken // Bruk tilgangstoken fra Microsoft Graph
            }
        });

        const mailOptions = {
            from: 'your-email@domain.com',
            to: 'recipient-email@example.com', // Mottakerens e-postadresse
            subject: 'Deltakerliste',
            text: 'Hei,\n\nVedlagt finner du deltakerlisten for møtet.\n\nMed vennlig hilsen,\nDitt navn',
            attachments: [
                {
                    filename: 'Deltakerliste.xlsx',
                    path: latestExcelFilePath // Banen til den genererte Excel-filen
                }
            ]
        };

        await transporter.sendMail(mailOptions);

        console.log('E-post sendt!'); // Logg suksessmelding
        res.json({ message: 'E-post sendt med vedlagt deltakerliste!' });
    } catch (error) {
        console.error('Feil ved sending av e-post:', error); // Logg hele feilen
        res.status(500).json({ message: 'Feil oppstod ved sending av e-post: ' + error.message });
    }
});

app.get('/logout', (req, res) => {
    // Rydd opp i brukerens sesjonsdata
    res.send('Brukeren er logget ut.');
});

const PORT = 3000; // Definer porten som en konstant
app.listen(PORT, () => console.log(`Server kjører på http://localhost:${PORT}`)); // Sørg for at denne meldingen vises i terminalen når du starter serveren.
