import './App.css';
import CarouselComponent from './componentes/CarouselComponent';
import CardComponent from './componentes/CardComponent';
import React, { Component } from 'react';
import {ServicioEventos} from './servicios/ServicioEventos';

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
        <div className='contenedor-principal'>
          <h1>Navbar xd </h1>

          <div className="image-container">
            <CarouselComponent />
          </div>          
          
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
