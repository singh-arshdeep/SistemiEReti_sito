require('dotenv').config();

/* Server Node */
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8000;

const path = require('path')

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port, () => {
    console.log(`Server node in esecuzione sulla porta ${port}`)
})

app.post('/invio', (req, res) => {
    const { garage } = req.body;
    if (!garage || (garage != "aperto" && garage != "chiuso")) {
        console.log("Dati Errati")
    } else if (garage == "aperto") {
    } else if (garage == "chiuso") {
    }
})