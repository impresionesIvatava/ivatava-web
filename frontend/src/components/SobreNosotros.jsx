import React, { useEffect, useRef, useState } from 'react';

const SobreNosotros = () => {
    const [esVisible, setEsVisible] = useState(false);
    const seccionRef = useRef(null);

    useEffect(() => {
        const observador = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setEsVisible(true);
                }
            },
            { threshold: 0.15 } // Se activa cuando el 15% de la sección es visible
        );

        if (seccionRef.current) {
            observador.observe(seccionRef.current);
        }

        return () => observador.disconnect();
    }, []);

    return (
        <section 
            id="sobre-nosotros" 
            ref={seccionRef}
            className={`seccion-animada ${esVisible ? 'visible' : ''}`}
            style={{ padding: '80px 20px', maxWidth: '800px', margin: '0 auto' }}
        >
            <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', borderBottom: '3px solid #ff00ff', display: 'inline-block', paddingBottom: '5px' }}>
                Sobre Nosotros
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', lineHeight: '1.8', fontSize: '1.1rem' }}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</p>
            </div>
        </section>
    );
};

export default SobreNosotros;