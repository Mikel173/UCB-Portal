import React, { useState, useEffect } from 'react';
import { ServicioEventos } from '../servicios/ServicioEventos';
import { ServicioNoticias } from '../servicios/ServicioNoticias';
import NavbarComponent from '../componentes/Navbar';
import Container from 'react-bootstrap/Container';
import CarouselComponent from '../componentes/CarouselComponent';
import CardComponent from '../componentes/CardComponent';
import CardNews from '../componentes/CardNews';
import { LoginButton } from '../componentes/Login';
import { LogoutButton } from '../componentes/Logout';
import { useAuth0 } from '@auth0/auth0-react';

function Inicio() {
  const { isAuthenticated } = useAuth0();
  const [events, setEvents] = useState([]);
  const [news, setNews] = useState([]);
  
  const servicioEventos = new ServicioEventos();
  const servicioNoticias = new ServicioNoticias();

  useEffect(() => {
    servicioEventos.getAll().then((data) => {
      setEvents(data.data);
    });

    servicioNoticias.getAll().then((data) => {
      setNews(data.data);
    });
  }, []); // empty dependency array means this effect runs once when the component mounts

  return (
    <div className="App">
      <div className="contenedor-principal">
        {/*{isAuthenticated ? (
          <>
            <NavbarComponent className="navbar" />
            <LogoutButton />
          </>
        ) : (
          <LoginButton /> 
        )}*/}

        <div className="image-container" style={{ width: '100%', height: '50%' }}>
          <CarouselComponent />
        </div>

        <Container className="titulos">
          <h2>Próximos eventos</h2>
        </Container>

        {events.map((event) => (
          <div key={event.eventoId} className="card-container">
            <CardComponent
              key={event.eventoId}
              title={event.nombre}
              description={event.descripcion}
              enlaceImagen={event.enlaceImagen}
            />
          </div>
        ))}

        <Container className="titulos">
          <h2>Noticias</h2>
        </Container>

        {news.map((newsItem) => (
          <div key={newsItem.noticiaId} className="card-container">
            <CardNews
              key={newsItem.noticiaId}
              title={newsItem.titulo}
              description={newsItem.contenido}
              enlaceImagen={newsItem.enlaceImagen}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Inicio;
