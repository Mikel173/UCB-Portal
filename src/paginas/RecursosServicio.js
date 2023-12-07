import React from 'react';
import Componente from '../componentes/ComponenteSO.js';
import ImagePanel from '../componentes/ImagePanel/ImagePanel';
import '../App.css';

const RecursosServicio = () => {
  return (
    <div>
      <ImagePanel title="Orientacion Vocacional"/>
      <Componente />
      {/* Agrega aquí el contenido específico para la sección de recursos para estudiantes */}
    </div>
  );
}

export default RecursosServicio;
