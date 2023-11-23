import React, { Component } from 'react';
import { ServicioInstitutosInvestigacion } from '../../servicios/ServicioInstitutosInvestigacion';
import { ServicioSociedadesCientificas } from '../../servicios/ServicioSociedadesCientificas';
import NavbarComponent from '../../componentes/Navbar';
import Container from 'react-bootstrap/Container';
import CardResearchInstitute from '../../componentes/CardResearchInstitute';
import CardScientificSocieties from '../../componentes/CardScientificSocieties';
import CardPlus from '../../componentes/CardPlus';

class InvestigacionAdmin extends Component {
  constructor() {
    super();
    this.state = {
      researchItems: [], 
      cientistSocieties: [],
    };
    this.servicioInstitutosInvestigacion = new ServicioInstitutosInvestigacion();
    this.servicioSociedadesCientificas = new ServicioSociedadesCientificas();
  }

  componentDidMount() {
    this.servicioInstitutosInvestigacion.getAll().then((data) => {
      console.log(data.data);
      this.setState({ researchItems: data.data });
    });

    this.servicioSociedadesCientificas.getAll().then((data) => {
      console.log(data.data);
      this.setState({ cientistSocieties: data.data });
    });
  }

  render() {
    return (
      <div className="App">
        {/* <NavbarComponent className="navbar" /> */}
        <div className="contenedor-principal">
          
          <Container className="titulos">
            <h2>Investigación</h2>
          </Container>
          
          {this.state.researchItems && this.state.researchItems.map((item) => (
            <div key={item.institutoId} className="card-container">
              <CardResearchInstitute
                nombre={item.nombre}
                enlaceWeb={item.enlaceWeb}
                descripcion={item.descripcion}
                lineas_investigacion={item.lineas_investigacion}
                carrera={item.carrera}
                contacto={item.contacto}
              />
            </div>
          ))}
          
          <CardPlus onAgregarInstitutoInvestigacion={() => this.servicioInstitutosInvestigacion.getAll()} tipoFormulario="InstitutoInvestigacion" />

          <Container className="titulos">
            <h2>Sociedades Científicas</h2> 
          </Container>
          {this.state.cientistSocieties && this.state.cientistSocieties.map((item) => (
            <div key={item.sociedadId} className="card-container">
              <CardScientificSocieties
                nombre={item.nombre}
                enlaceWeb={item.enlaceWeb}
                contacto={item.contacto}
              />
            </div>
          ))}

          <CardPlus onAgregarSociedadCientifica={() => this.servicioSociedadesCientificas.getAll()} tipoFormulario="SociedadCientifica" />
        </div>
      </div>
    );
  }
}

export default InvestigacionAdmin;
