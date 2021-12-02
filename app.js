const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.get('/news', (req, res) => {
    res.send('get news');
});

app.get('/villages', (req, res) => {
    res.send('get municipios');
});

app.post('/villages', (req, res) => {
    res.send('create municipios');
});

const port = 3000;
app.listen(port, () =>{
    console.log(`Servidor corriendo exitosamente en: http://localhost:${port}`);
});