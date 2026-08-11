import express from 'express';
import fs from 'fs';
import { Router } from 'express';
import añadir from '../controller/addform.js';

const app = express();
const port = 3000;

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
    res.send(messages);
});

rutas.get('/new', (req, res) => {
    let nuevo = añadir(messages);
    res.send(nuevo);
});

rutas.get('/{*splat}', (req, res) => {
    res.status(404).send('Página no encontrada');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
