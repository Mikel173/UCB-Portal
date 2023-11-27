import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import CarouselComponent from '../componentes/CarouselComponent';
import CardComponent from '../componentes/CardComponent';
import CardNews from '../componentes/CardNews';
import FormEvento from '../componentes/Forms/FormEvento';
import FormNoticia from '../componentes/Forms/FormNoticia';
import { ServicioEventos } from '../servicios/ServicioEventos';
import { ServicioNoticias } from '../servicios/ServicioNoticias';
import { ServicioSuscripcion } from '../servicios/ServicioSuscripcion'; // Importa el servicio de suscripción
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

class Inicio extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      news: [],
      showEventoForm: false,
      showNoticiaForm: false,
      showNotificationModal: false,
      correo: '', // Campo para el correo
    };
    this.servicioEventos = new ServicioEventos();
    this.servicioNoticias = new ServicioNoticias();
    this.servicioSuscripcion = new ServicioSuscripcion(); // Inicializa el servicio de suscripción
  }

  componentDidMount() {
    this.servicioEventos.getAll().then((data) => {
      this.setState({ events: data.data });
    });

    this.servicioNoticias.getAll().then((data) => {
      this.setState({ news: data.data });
    });
  }

  handleShowEventoForm = () => {
    this.setState({ showEventoForm: true, showNoticiaForm: false });
  };

  handleShowNoticiaForm = () => {
    this.setState({ showNoticiaForm: true, showEventoForm: false });
  };

  handleCloseForm = () => {
    this.setState({ showEventoForm: false, showNoticiaForm: false });
  };

  handleShowNotificationModal = () => {
    this.setState({ showNotificationModal: true });
  };

  handleCloseNotificationModal = () => {
    this.setState({ showNotificationModal: false });
  };

  handleCorreoChange = (e) => {
    this.setState({ correo: e.target.value });
  };

  handleEnviarNotificacion = () => {
    const { correo } = this.state;

    // Llama al servicio para suscribirse
    this.servicioSuscripcion.postSuscripcion(correo)
      .then(response => {
        // Maneja la respuesta según tus necesidades
        console.log("Suscripción exitosa:", response);
      })
      .catch(error => {
        // Maneja el error según tus necesidades
        console.error("Error al suscribirse:", error);
      });

    // Luego, cierra el modal
    this.handleCloseNotificationModal();
  };

  handleDesuscribirse = () => {
    const { correo } = this.state;

    // Llama al servicio para desuscribirse
    this.servicioSuscripcion.deleteSuscripcionByCorreo(correo)
      .then(response => {
        // Maneja la respuesta según tus necesidades
        console.log("Desuscripción exitosa:", response);
      })
      .catch(error => {
        // Maneja el error según tus necesidades
        console.error("Error al desuscribirse:", error);
      });

    // Luego, cierra el modal
    this.handleCloseNotificationModal();
  };

  render() {
    return (
      <div className="App">
        <div className="contenedor-principal">
          <div className="image-container" style={{ width: '100%', height: '50%' }}>
            <CarouselComponent />
          </div>

          <Container className="titulos">
            <h2>
              Próximos eventos
              {/* Botón de campana */}
              <Button variant="outline-primary" onClick={this.handleShowNotificationModal}>
                <FontAwesomeIcon icon={faBell} />
              </Button>
            </h2>
          </Container>

          {this.state.events && this.state.events.map((event) => (
            <div key={event.eventoId} className="card-container">
              <CardComponent
                key={event.eventoId}
                fechaInicio={event.fechaInicio}
                fechaFin={event.fechaFin}
                title={event.nombre}
                description={event.descripcion}
                enlaceImagen={event.enlaceImagen}
              />
            </div>
          ))}

          <Container className="titulos">
            <h2>Noticias</h2>
          </Container>

          {this.state.news && this.state.news.map((news) => (
            <div key={news.noticiaId} className="card-container">
              <CardNews
                key={news.noticiaId}
                fechaPublicacion={news.fechaPublicacion}
                title={news.titulo}
                description={news.contenido}
                enlaceImagen={news.enlaceImagen}
              />
            </div>
          ))}

          {/* Modal de notificaciones */}
          <Modal show={this.state.showNotificationModal} onHide={this.handleCloseNotificationModal} centered>
            <Modal.Header closeButton>
              <Modal.Title>Notificaciones</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="notification-modal-content">
                <p>
                  Suscríbete para recibir notificaciones sobre nuevos eventos y noticias. Te enviaremos información interesante directamente a tu correo electrónico.
                </p>
                <p>
                  Puedes cancelar la suscripción en cualquier momento.
                </p>
                {/* Campo para el correo */}
                <Form.Group controlId="formCorreo">
                  <Form.Control
                    type="email"
                    placeholder="Ingrese su correo"
                    value={this.state.correo}
                    onChange={this.handleCorreoChange}
                  />
                </Form.Group>
              </div>
            </Modal.Body>
            <Modal.Footer>
              {/* Botón de enviar */}
              <Button variant="primary" onClick={this.handleEnviarNotificacion}>
                Suscribirse
              </Button>
              {/* Botón de quitar suscripción */}
              <Button variant="secondary" onClick={this.handleDesuscribirse}>
                Desuscribirse
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Mostrar el formulario correspondiente según el estado */}
          {this.state.showEventoForm && <FormEvento onCloseForm={this.handleCloseForm} />}
          {this.state.showNoticiaForm && <FormNoticia onCloseForm={this.handleCloseForm} />}
        </div>
      </div>
    );
  }
}

export default Inicio;