import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Importa las rutas y la ruta desde la carpeta "react-router-dom"
import Inicio from './paginas/Inicio';
import SeccionesAcademicas from './paginas/SeccionesAcademicas'; // Importa el componente de Secciones Académicas desde la carpeta "paginas"
import AdmisionYBecas from './paginas/AdmisionYBecas'; // Importa el componente de Admisión y Becas desde la carpeta "paginas"
import PlataformaEnLinea from './paginas/PlataformaEnLinea'; // Importa el componente de Plataforma en Línea desde la carpeta "paginas"
import Investigacion from './paginas/Investigacion';
import PortalEgresados from './paginas/PortalEgresados';


function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<Inicio/>} /> 
          <Route path="/secciones-academicas" element={<SeccionesAcademicas/>} /> 
          <Route path="/admision-y-becas" element={<AdmisionYBecas/>} /> 
          <Route path="/plataforma-en-linea" element={<PlataformaEnLinea/>} /> 
          <Route path="/investigacion" element={<Investigacion/>} />
          <Route path="/portal-egresados" element={<PortalEgresados/>} />
          <Route path="*" element={<h1>404: Not Found</h1>} />
        </Routes>
      </div>
  );
}

export default App;
