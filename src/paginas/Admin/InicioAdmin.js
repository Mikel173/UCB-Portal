import React, { useEffect, useState } from 'react';
import { withAuthenticationRequired, useAuth0 } from '@auth0/auth0-react';
import { ServicioEventos } from '../../servicios/ServicioEventos';
import { ServicioNoticias } from '../../servicios/ServicioNoticias';
import Container from 'react-bootstrap/Container';
import CarouselComponent from '../../componentes/CarouselComponent';
import CardComponent from '../../componentes/CardComponent';
import CardNews from '../../componentes/CardNews';
import CardPlus from '../../componentes/CardPlus';
import FormEvento from '../../componentes/Forms/FormEvento';
import FormNoticia from '../../componentes/Forms/FormNoticia';
import { LogoutButton } from '../../componentes/Logout';
import CardUpdate from '../../componentes/CardUpdate';

const InicioAdmin = () => {
  const { user } = useAuth0();
  const [events, setEvents] = useState([]);
  const [news, setNews] = useState([]);
  const [showEventoForm, setShowEventoForm] = useState(false);
  const [showNoticiaForm, setShowNoticiaForm] = useState(false);

  const servicioEventos = new ServicioEventos();
  const servicioNoticias = new ServicioNoticias();

  useEffect(() => {
    servicioEventos.getAll().then((data) => {
      setEvents(data.data);
    });

    servicioNoticias.getAll().then((data) => {
      setNews(data.data);
    });
  }, []);

  const handleShowEventoForm = () => {
    setShowEventoForm(true);
    setShowNoticiaForm(false);
  };

  const handleShowNoticiaForm = () => {
    setShowNoticiaForm(true);
    setShowEventoForm(false);
  };

  const handleCloseForm = () => {
    setShowEventoForm(false);
    setShowNoticiaForm(false);
  };

  return (
    <div className="App">
      <div className="contenedor-principal">
        <div className="image-container" style={{ width: '100%', height: '50%' }}>
          <CarouselComponent />
        </div>

        <Container className="titulos">
          <h2>Próximos eventos</h2>
        </Container>

        {events &&
          events.map((event) => (
            <div key={event.eventoId} className="card-container">
              <CardComponent
                key={event.eventoId}
                title={event.nombre}
                fechaInicio={event.fechaInicio}
                fechaFin={event.fechaFin}
                description={event.descripcion}
                enlaceImagen={event.enlaceImagen}
              />
              <CardUpdate tipoFormulario="evento" onUpdate={() => servicioEventos.getAll()} existingData={event} />
            </div>
          ))}

        <CardPlus onAgregarEvento={() => servicioEventos.getAll()} tipoFormulario="evento" />

        <Container className="titulos">
          <h2>Noticias</h2>
        </Container>

        {news &&
          news.map((newsItem) => (
            <div key={newsItem.noticiaId} className="card-container">
              <CardNews
                key={newsItem.noticiaId}
                fechaPublicacion={newsItem.fechaPublicacion}
                title={newsItem.titulo}
                description={newsItem.contenido}
                enlaceImagen={newsItem.enlaceImagen}
              />
              <CardUpdate tipoFormulario="noticia" onUpdate={() => servicioNoticias.getAll()} existingData={newsItem} />
            </div>
          ))}

        <CardPlus onAgregarNoticia={() => servicioNoticias.getAll()} tipoFormulario="noticia" />
        {/* Mostrar el formulario correspondiente según el estado */}
        {showEventoForm && <FormEvento onCloseForm={handleCloseForm} />}
        {showNoticiaForm && <FormNoticia onCloseForm={handleCloseForm} />}
        <LogoutButton />

        {/* Mostrar el correo electrónico del usuario */}
        {user && (
          <div>
            <p>Correo Electrónico: {user.email}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default withAuthenticationRequired(InicioAdmin);
