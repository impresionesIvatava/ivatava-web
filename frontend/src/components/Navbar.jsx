import React from 'react';
import logoImg from '../assets/logo-ivatava.png';

const Navbar = () => {
    return (
        <nav className="navbar" style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center', /* Centra horizontalmente */
            alignItems: 'center',     /* Centra verticalmente */
            gap: '60px',              /* Espacio entre el bloque del logo y los enlaces */
            width: '100%'
        }}>
            <div className="navbar-brand" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
            }}>
                <img 
                    src={logoImg} 
                    alt="Logo Negocio" 
                    style={{ height: '30px', width: 'auto' }} 
                />
                <span className="navbar-title"><b>Impresiones y Librería Ivatava S.A.</b></span>
            </div>
            
            <ul className="navbar-links" style={{
                display: 'flex',
                flexDirection: 'row',
                listStyle: 'none',
                gap: '30px',
                padding: 0,
                margin: 0
            }}>
                <li><a href="#sobre-nosotros">Sobre Nosotros</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;