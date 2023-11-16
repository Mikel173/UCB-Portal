import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicio from './paginas/Inicio';
import SeccionesAcademicas from './paginas/SeccionesAcademicas';
import AdmisionYBecas from './paginas/AdmisionYBecas';
import PlataformaEnLinea from './paginas/PlataformaEnLinea';
import Investigacion from './paginas/Investigacion';
import RecursosEstudiantes from './paginas/RecursosEstudiantes'; // Agrega la importación de RecursosEstudiantes
import NavbarComponent from './componentes/Navbar'; // Agrega la importación de NavbarComponent

function App() {
  return (
    <div>
      <NavbarComponent /> {/* Agrega el componente NavbarComponent arriba de las rutas */}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/secciones-academicas" element={<SeccionesAcademicas />} />
        <Route path="/admision-y-becas" element={<AdmisionYBecas />} />
        <Route path="/plataforma-en-linea" element={<PlataformaEnLinea />} />
        <Route path="/investigacion" element={<Investigacion />} />
        <Route path="/recursos-estudiantes" element={<RecursosEstudiantes />} /> {/* Agrega la ruta de RecursosEstudiantes */}
        <Route path="*" element={<h1>404: Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
