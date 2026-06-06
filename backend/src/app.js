import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'; // 1. Importás la librería
import dotenv from 'dotenv';
import mensajeRoutes from './routes/mensajeRoutes.js';
import { client } from './services/colaService.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// 2. Reemplazás tu middleware viejo por este que maneja OPTIONS automáticamente
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Origin', 'X-Requested-With', 'Accept']
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', mensajeRoutes);

client.initialize();

app.listen(PORT, () => {
    console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});