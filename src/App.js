import './App.css';
import CarouselComponent from './componentes/CarouselComponent';
import CardComponent from './componentes/CardComponent';
import React, { Component } from 'react';
import {ServicioEventos} from './servicios/ServicioEventos';
import NavbarComponent from './componentes/Navbar';
import { Container } from 'react-bootstrap';

export default class App extends Component {
  constructor(){
    super();
    this.state = {};
    this.servicioEventos = new ServicioEventos();
  }

  componentDidMount() {
    this.servicioEventos.getAll().then(data => {
      this.setState({ events: data.data }); // Accede al arreglo dentro de la propiedad "data"
    });
  }

  render() {
    return (
      <div className="App">
        <NavbarComponent className="navbar"/>
        <div className='contenedor-principal'>
        
          <div className="image-container">
            <CarouselComponent />
          </div>          
          
          <Container className='titulos'>
            <h2>Próximos eventos</h2>
          </Container>

          {this.state.events && this.state.events.map(event => (
            <div key={event.eventoId} className="card-container">
              <CardComponent
                uwu={event.eventoId}
                key={event.eventoId}
                title={event.nombre}
                description={event.descripcion}
              />
            </div>

          ))}
        </div>
      </div>
    );
  }
}
