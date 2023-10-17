import './App.css';
import CarouselComponent from './componentes/CarouselComponent';
import CardComponent from './componentes/CardComponent';
import React, { Component } from 'react';
import {ServicioEventos} from './servicios/ServicioEventos';
import NavbarComponent from './componentes/Navbar';
import { Container } from 'react-bootstrap';
import {ServicioNoticias} from './servicios/ServicioNoticias';
import CardNews from './componentes/CardNews';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      events: [],
      news: [],
    };
    this.servicioEventos = new ServicioEventos();
    this.servicioNoticias = new ServicioNoticias();
  }


  componentDidMount() {
    this.servicioEventos.getAll().then((data) => {
      this.setState({ events: data.data });
    });

    this.servicioNoticias.getAll().then((data) => {
      console.log(data.data);
      this.setState({ news: data.data });
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
           
          <Container className='titulos'>
            <h2>Noticias</h2>
          </Container>

          {this.state.news && this.state.news.map(news => (
            <div key={news.noticiaId} className="card-container">
              <CardNews
                uwu={news.noticiaId}
                key={news.noticiaId}
                title={news.titulo}
                description={news.contenido}
              />
            </div>
          ))}

        </div>
      </div>
    );
  }
}
