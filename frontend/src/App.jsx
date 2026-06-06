import React from 'react';
import Navbar from './components/Navbar';
import Carrusel from './components/Carrusel';
import SobreNosotros from './components/SobreNosotros';
import FormularioContacto from './components/FormularioContacto';

function App() {
    return (
        <div className="App">
            {/* 1. Barra de navegación fija en fila */}
            <Navbar />

            {/* Título de Bienvenida - Totalmente Centrado */}
<header style={{ 
    padding: '40px 20px', 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center',    /* Centra los elementos horizontalmente si hay flex */
    justifyContent: 'center', 
    textAlign: 'center'      /* Asegura que el texto se alinee al centro */
}}>
    <h1 style={{ fontSize: '3rem', fontWeight: '800', maxWidth: '800px' }}>
        Soluciones gráficas de la más alta calidad. Con 25 años de experiencia como respaldo.
    </h1>
    <p style={{ color: '#666', marginTop: '10px', fontSize: '1.2rem' }}>
        <i>Calidad</i> que se imprime, <i>confianza</i> que permanece.
    </p>
</header>

            {/* 2. Carrusel temporizado */}
            <Carrusel />

            {/* 3. Trayectoria con transiciones bonitas */}
            <SobreNosotros />

            <FormularioContacto />
        </div>
    );
}

export default App;