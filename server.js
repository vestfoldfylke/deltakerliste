const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors'); // Import the CORS middleware

// Last inn miljøvariabler fra .env-filen
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for requests from http://localhost:5500
app.use(cors({ origin: 'http://localhost:5500' }));

// API-endepunkt for å hente miljøvariabler
app.get('/env', (req, res) => {
    res.json({
        MSAL_CLIENT_ID: process.env.MSAL_CLIENT_ID,
        MSAL_AUTHORITY: process.env.MSAL_AUTHORITY,
        MSAL_REDIRECT_URI: process.env.MSAL_REDIRECT_URI,
        GRAPH_ME_ENDPOINT: process.env.GRAPH_ME_ENDPOINT,
        GRAPH_EVENTS_ENDPOINT: process.env.GRAPH_EVENTS_ENDPOINT
    });
});

// Server statiske filer fra deltakerliste-mappen
app.use(express.static(path.join(__dirname)));

// Start serveren
app.listen(PORT, () => {
    console.log(`Server kjører på http://localhost:${PORT}`);
});
