import { agregarACola } from '../services/colaService.js';

export const encolarMensaje = (req, res) => {
    // Jalamos el mensaje estructurado que viene desde el frontend de React
    const { mensaje } = req.body;

    // CAPTURA DEL CANAL FINAL: Jalamos el ID del grupo de Ivatava S.A. desde el .env
    const destinoGrupo = process.env.ID_GRUPO_WHATSAPP;

    // Validación: Nos aseguramos de que el mensaje no venga vacío
    if (!mensaje) {
        return res.status(400).json({ 
            success: false, 
            error: 'Campos requeridos ausentes (mensaje).' 
        });
    }

    // Validación de seguridad: Si olvidaste configurar el .env, el backend te avisa de inmediato
    if (!destinoGrupo) {
        console.error("[Error Backend] No se ha configurado la variable ID_GRUPO_WHATSAPP en el archivo .env");
        return res.status(500).json({ 
            success: false, 
            error: 'Configuración interna del servidor incompleta.' 
        });
    }

    // DELEGACIÓN: Le pasamos el ID del grupo al servicio en vez del teléfono del cliente
    const posicionActual = agregarACola(destinoGrupo, mensaje);

    // Respondemos con un estado 202 (Accepted) que es el correcto para operaciones en cola
    return res.status(202).json({ 
        success: true, 
        message: 'Tu solicitud ha sido recibida y se notificará al equipo de Ivatava S.A.',
        posicion: posicionActual
    });
};