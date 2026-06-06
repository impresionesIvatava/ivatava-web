const API_URL = import.meta.env.VITE_API_URL;

export const enviarMensajeWhatsApp = async (telefono, mensaje) => {
    try {
        const urlBase = API_URL || 'http://localhost:3000/api';
        
        const respuesta = await fetch(`${urlBase}/enviar-mensaje`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ telefono, mensaje }),
        });

        if (!respuesta.ok) {
            throw new Error('Error en la petición al servidor');
        }

        return await respuesta.json();
    } catch (error) {
        console.error('Error en apiService:', error);
        throw error;
    }
};