import React, { useState, useEffect } from 'react';
import img1 from '../assets/banner_25_aniv.jpeg';
import img2 from '../assets/banner_met_pag.jpeg';
import img3 from '../assets/banner_procesos.jpeg';
import img4 from '../assets/banner_sellos.jpeg';
import img5 from '../assets/banner_servicios.jpeg';

const Carrusel = () => {
    const imagenes = [img1, img2, img3, img4, img5];
    const [indiceActual, setIndiceActual] = useState(0);
    const [opacidad, setOpacidad] = useState(1);

    useEffect(() => {
        const intervalo = setInterval(() => {
            cambiarImagenSuave('siguiente');
        }, 10000);

        return () => clearInterval(intervalo);
    }, [indiceActual]);

    const cambiarImagenSuave = (direccion) => {
        setOpacidad(0);
        setTimeout(() => {
            if (direccion === 'siguiente') {
                setIndiceActual((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1));
            } else {
                setIndiceActual((prev) => (prev === 0 ? imagenes.length - 1 : prev - 1));
            }
            setOpacidad(1);
        }, 300);
    };

    return (
        /* Contenedor externo expandido al 100% de la pantalla, sin márgenes restrictivos */
        <div style={{ width: '100vw', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', position: 'relative', marginY: '30px' }}>
            
            {/* Contenedor de la Imagen: Ocupa todo el ancho, con fondo Cyan suavizado */}
            <div style={{ 
                width: '100%', 
                height: '450px', /* Le subí un poquito la altura para que luzca más imponente */
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                /* Usamos RGBA para bajar la opacidad del Cyan al 25% y no quemar la vista */
                backgroundColor: 'rgba(0, 255, 255, 0.25)', 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <img 
                    src={imagenes[indiceActual]} 
                    alt={`Trabajo ${indiceActual + 1}`} 
                    style={{ 
                        width: '100%', 
                        height: '100%', 
                        /* 'contain' sigue protegiendo las dimensiones 853x1280 y 1024x1536 de tus banners */
                        objectFit: 'contain', 
                        opacity: opacidad,
                        transition: 'opacity 0.3s ease-in-out'
                    }} 
                />
            </div>

            {/* Controles de navegación */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', marginTop: '20px' }}>
                <button 
                    onClick={() => cambiarImagenSuave('anterior')} 
                    style={estiloBoton}
                    onMouseEnter={(e) => e.target.style.background = '#FF00FF'} /* Hover Magenta */
                    onMouseLeave={(e) => e.target.style.background = '#111'}
                >
                    ← Anterior
                </button>
                
                <span style={{ fontWay: 'bold', color: '#111', fontSize: '1rem' }}>
                    {indiceActual + 1} / {imagenes.length}
                </span>
                
                <button 
                    onClick={() => cambiarImagenSuave('siguiente')} 
                    style={estiloBoton}
                    onMouseEnter={(e) => { e.target.style.background = '#FFFF00'; e.target.style.color = '#111'; }} /* Hover Amarillo */
                    onMouseLeave={(e) => { e.target.style.background = '#111'; e.target.style.color = '#fff'; }}
                >
                    Siguiente →
                </button>
            </div>
        </div>
    );
};

const estiloBoton = {
    background: '#111',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '20px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 10px rgba(0,0,0,0.15)'
};

export default Carrusel;