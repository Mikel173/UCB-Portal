import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicio from './paginas/Inicio';
import InicioAdmin from './paginas/Admin/InicioAdmin';
import SeccionesAcademicas from './paginas/SeccionesAcademicas';
import AdmisionYBecas from './paginas/AdmisionYBecas';
import PlataformaEnLinea from './paginas/PlataformaEnLinea';
import Investigacion from './paginas/Investigacion';
import RecursosEstudiantes from './paginas/RecursosEstudiantes';
import RecursosServicio from './paginas/RecursosServicio';
import PortalEgresados from './paginas/PortalEgresados';
import NavbarComponent from './componentes/Navbar';
import InvestigacionAdmin from './paginas/Admin/InvestigacionAdmin';
import FooterComponent from './componentes/FooterComponent';
import ProgramaEmpleabilidad from './paginas/ProgramaEmpleabilidad';
import FeriaEmpleo from './paginas/FeriaEmpleo';

function App() {
  return (
    <div>
      <NavbarComponent /> 
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/secciones-academicas" element={<SeccionesAcademicas />} />
        <Route path="/admision-y-becas" element={<AdmisionYBecas />} />
        <Route path="/plataforma-en-linea" element={<PlataformaEnLinea />} />
        <Route path="/investigacion" element={<Investigacion />} />
        <Route path="/recursos-estudiantes" element={<RecursosEstudiantes />} />
        <Route path="/recursos-servicio" element={<RecursosServicio />} />
        <Route path="/portal-egresados" element={<PortalEgresados />} />
        <Route path="/programa-empleabilidad" element={<ProgramaEmpleabilidad />} />
        <Route path="/feria-empleo" element={<FeriaEmpleo />} />
        <Route path="*" element={<h1>404: Not Found</h1>} />
        <Route path="/admin" element={<InicioAdmin />} />
        <Route path="/admin/investigacion" element={<InvestigacionAdmin />} />
      </Routes>
      <FooterComponent />
      /**/
    </div>
  );
}

export default App;
