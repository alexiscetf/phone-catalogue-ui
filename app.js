/**
 * Pagina de Inicio para el Bundle del PRO
 */
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// use port 3000 unless there exists a preconfigured port
const port = process.env.port || 9000;

app.listen(port);

console.log(`### service is listen in port ${port}`)

