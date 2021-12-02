const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/api/epidemiologic-monitor/news', (req, res) => {
    res.send('get news');
});

// 3.Crear en Express un manejador de rutas con que reciba la ruta relativa /api/epidemiologic-monitor/villagescon método GET.

app.get('/api/epidemiologic-monitor/villages', (req, res) => {
    // 4.El api tiene que retornar el array de los villages, como json(ver materiales de apoyo).
    const getData = async () => {
        try {
            let response = await fetch('./villages.json');
            let result = await response.json();
            res.json(result);
        } catch (error) {
            console.error(error);
        }
    };
    getData();
    
});

app.post('/api/epidemiologic-monitor/villages', (req, res) => {
    res.send('create municipios');
});

const port = 3000;
app.listen(port, () =>{
    console.log(`Servidor corriendo exitosamente en: http://localhost:${port}`);
});