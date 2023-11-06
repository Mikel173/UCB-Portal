import React from 'react';
import './ImagePanel.css'; // Ruta al archivo CSS de estilos del ImagePanel
import PanelImage from '../../imagenes/panel.png' // Ruta a la imagen Panel.png

function ImagePanel() {
  return (
    <div className="container">
      <nav className="navbar">
        {/* Contenido del Navbar */}
      </nav>
      <div className="image-panel">
        <h1 className="panel-title">Plataforma de Aprendizaje en Línea</h1>
        <img src={PanelImage} alt="Imagen del panel" className="panel-image" />
      </div>
    </div>
  );
}

export default ImagePanel;
