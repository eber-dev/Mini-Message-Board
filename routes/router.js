import express from 'express';
import fs from 'fs';
import { Router } from 'express';
import añadir from '../controller/addform.js';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', '../views');

const messages = [
    {
        text: 'Hi there!',
        user: 'Amando',
        added: new Date(),
    },
    {
        text: 'Hello World!',
        user: 'Charles',
        added: new Date(),
    },
];

const rutas = Router();

rutas.get('/', (req, res) => {
    res.render('index', { messages });
});

rutas.get('/new', (req, res) => {});

rutas.get('/{*splat}', (req, res) => {
    res.status(404).send('Página no encontrada');
});

app.use('/', rutas);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
