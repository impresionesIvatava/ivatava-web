import pkg from 'whatsapp-web.js';
const { LocalAuth } = pkg;
import qrcode from 'qrcode-terminal';

// Estado de la aplicación
const colaMensajes = [];
let clienteListo = false;

const TIEMPO_ESPERA = 45 * 60 * 1000; // 45 minutos
const LIMITE_MENSAJES = 5;

// Cliente de WhatsApp
export const client = new pkg.Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        // Esto le da 60 segundos a WhatsApp Web para cargar antes de tirar error
        navigationTimeout: 60000, 
    }
});

// Configuración de eventos de WhatsApp
client.on('qr', (qr) => {
    console.log('Escaneá este código QR con tu celular:');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('¡Cliente de WhatsApp listo y conectado!');
    clienteListo = true;
    procesarCola(); 
});

/* =========================================================================
   TRUCO PARA CAPTURAR EL ID DEL GRUPO:
   Agregá el bot al grupo, escribí "!id" en el chat, y mirá tu consola de Node.
   ========================================================================= */
client.on('message', async (msg) => {
    if (msg.body === '!id') {
        console.log(`\n======================================================`);
        console.log(`ID DETECTADO: ${msg.from}`);
        console.log(`======================================================\n`);
        
        // El bot te responde en el mismo chat para confirmarte el éxito
        await msg.reply(`El ID de este chat es:\n${msg.from}`);
    }
});

// Función interna para procesar la cola
const procesarCola = async () => {
    if (!clienteListo || colaMensajes.length === 0) return;

    console.log(`\n--- Iniciando tanda de envíos. En espera: ${colaMensajes.length} ---`);
    const tandaActual = colaMensajes.splice(0, LIMITE_MENSAJES);

    for (const tarea of tandaActual) {
        try {
            let formateadoId;

            // CONTROL INTELIGENTE: Si el "telefono" ya viene con '@g.us', es un grupo.
            // Si no, asumimos que es una persona y le clavamos el '@c.us'.
            if (tarea.telefono.includes('@g.us')) {
                formateadoId = tarea.telefono;
            } else {
                formateadoId = `${tarea.telefono}@c.us`;
            }

            await client.sendMessage(formateadoId, tarea.mensaje);
            console.log(`[Éxito] Mensaje enviado a ${formateadoId}`);
            
            // Delay de seguridad de 4 segundos
            await new Promise(resolve => setTimeout(resolve, 4000)); 
        } catch (error) {
            console.error(`[Error] No se pudo enviar a ${tarea.telefono}:`, error);
        }
    }
    console.log(`--- Tanda finalizada. Siguiente revisión en 45 minutos. ---\n`);
};

// Arrancar el intervalo de tiempo
setInterval(procesarCola, TIEMPO_ESPERA);

// Métodos públicos del servicio
export const agregarACola = (telefono, mensaje) => {
    colaMensajes.push({ telefono, mensaje });
    return colaMensajes.length;
};