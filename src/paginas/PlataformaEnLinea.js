import React from "react";
import NavbarComponent from '../componentes/Navbar';
import ImagePanel from '../componentes/ImagePanel/ImagePanel';
import Panel from '../componentes/Panel/Panel';

const PlataformaEnLinea = () => {
    return (
        <div>
            <NavbarComponent />
            <ImagePanel />
            <Panel />
            {/* Contenido de la página de Plataforma en Línea */}
            <div className="container mt-5">
                <div className="text-center">
                    <h2 style={{ color: 'purple', fontSize: '3rem' }}>¡Únete ahora!</h2>
                    <p style={{ color: 'purple', fontSize: '1.5rem' }}>Explora nuestra plataforma de aprendizaje y transforma tu experiencia educativa. ¡No esperes más!</p>
                    <a href="https://neo.ucb.edu.bo/" className="btn btn-success btn-lg">Unirse</a>
                </div>
            </div>
        </div>
    );
}

export default PlataformaEnLinea;
