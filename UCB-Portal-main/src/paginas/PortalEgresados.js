import React from 'react';
import NavbarComponent from '../componentes/Navbar';
import Container from 'react-bootstrap/Container';
import CardComponent from '../componentes/CardComponent';

class NuevaPagina extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "url_de_la_imagen",
      title: "Título de la Nueva Página",
      description: "Descripción breve de la página o del contenido destacado."
    };
  }

  render() {
    const { image, title, description } = this.state;

    return (
      <div className="App">
        <NavbarComponent className="navbar" />

        <div className="contenedor-principal" style={{ backgroundColor: '#f8f9fa' }}>
          <Container className="image-container" style={{ marginTop: '20px' }}>
            <img src={image} alt="Destacado" style={{ width: '100%', height: 'auto' }} />
          </Container>

          <Container className="titulos" style={{ textAlign: 'center', padding: '20px' }}>
            <h2 style={{ color: '#005A9C' }}>{title}</h2>
            <p style={{ color: '#6c757d' }}>{description}</p>
          </Container>

          {/* Aquí podrías añadir más contenido si es necesario */}
        </div>
      </div>
    );
  }
}

export default PortalEgresados;
