import { Router } from 'express';
import { encolarMensaje } from '../controllers/mensajeController.js';

const router = Router();

// Definición de la ruta POST
router.post('/enviar-mensaje', encolarMensaje);

export default router;