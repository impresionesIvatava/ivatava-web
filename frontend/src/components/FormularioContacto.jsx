import React, { useState } from 'react';
import { enviarMensajeWhatsApp } from '../services/apiService';

const FormularioContacto = () => {
    // Estados para capturar los tres campos solicitados
    const [nombre, setNombre] = useState('');
    const [contacto, setContacto] = useState('');
    const [motivo, setMotivo] = useState('');
    const [cargando, setCargando] = useState(false);

    const manejarEnvio = async (e) => {
        e.preventDefault();
        
        if (!nombre || !contacto || !motivo) {
            alert('Por favor, llena todos los campos.');
            return;
        }

        setCargando(true);

        // Estructuramos el mensaje exactamente con el formato que pediste
        const mensajeFormateado = `${nombre} ha contactado desde el sitio web para:\n${motivo}\nY nos ha dejado su contacto ${contacto}`;

        try {
            // Mandamos el mensaje. Nota: El número de destino lo maneja tu backend por seguridad
            await enviarMensajeWhatsApp(contacto, mensajeFormateado);
            
            alert('¡Tu mensaje ha sido enviado con éxito!');
            
            // Limpiamos los campos del formulario
            setNombre('');
            setContacto('');
            setMotivo('');
        } catch (error) {
            console.error(error);
            alert('Hubo un error al enviar el mensaje. Inténtalo de nuevo.');
        } finally {
            setCargando(false);
        }
    };

    return (
        <section id="contacto" style={estiloSeccion}>
            <h2 style={estiloTitulo}>Contacto</h2>
            <p style={{ color: '#666', marginBottom: '30px' }}>
                Dejános tus datos y nosotros nos pondremos al corriente con usted lo antes posible.
            </p>

            <form onSubmit={manejarEnvio} style={estiloFormulario}>
                {/* Campo: Nombre */}
                <div style={estiloGrupo}>
                    <label style={estiloLabel}>Nombre:</label>
                    <input 
                        type="text" 
                        placeholder="Su nombre aquí" 
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        style={estiloInput}
                        required
                    />
                </div>

                {/* Campo: Forma de contactarlo */}
                <div style={estiloGrupo}>
                    <label style={estiloLabel}>Forma de contactarlo:</label>
                    <input 
                        type="text" 
                        placeholder="Su correo electrónico o número telefónico" 
                        value={contacto}
                        onChange={(e) => setContacto(e.target.value)}
                        style={estiloInput}
                        required
                    />
                </div>

                {/* Campo: Motivo */}
                <div style={estiloGrupo}>
                    <label style={estiloLabel}>Motivo:</label>
                    <textarea 
                        placeholder="Quiero cotizar..." 
                        value={motivo}
                        onChange={(e) => setMotivo(e.target.value)}
                        style={{ ...estiloInput, height: '120px', resize: 'vertical' }}
                        required
                    />
                </div>

                {/* Botón de Envío con hover Magenta */}
                <button 
                    type="submit" 
                    disabled={cargando}
                    style={estiloBoton}
                    onMouseEnter={(e) => e.target.style.background = '#FF00FF'} /* Magenta CMYK */
                    onMouseLeave={(e) => e.target.style.background = '#111'}
                >
                    {cargando ? 'Enviando...' : 'Enviar solicitud'}
                </button>
            </form>
        </section>
    );
};

/* ==========================================
   ESTILOS EN LÍNEA PARA ASEGURAR EL CENTRADO
   ========================================== */
const estiloSeccion = {
    padding: '80px 20px',
    backgroundColor: '#f5f5f5',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%'
};

const estiloTitulo = {
    fontSize: '2.5rem', 
    marginBottom: '15px', 
    borderBottom: '3px solid #FFFF00', /* Detalle en Amarillo CMYK */
    display: 'inline-block', 
    paddingBottom: '5px'
};

const estiloFormulario = {
    width: '100%',
    maxWidth: '550px',
    background: '#fff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    textAlign: 'left' /* Alinea los labels a la izquierda dentro del bloque centrado */
};

const estiloGrupo = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
};

const estiloLabel = {
    fontWeight: '600',
    color: '#111',
    fontSize: '0.95rem'
};

const estiloInput = {
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'border-color 0.3s',
    /* Al dar foco se puede añadir comportamiento dinámico si se desea */
};

const estiloBoton = {
    background: '#111',
    color: '#fff',
    border: 'none',
    padding: '14px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    transition: 'background 0.3s ease',
    marginTop: '10px'
};

export default FormularioContacto;