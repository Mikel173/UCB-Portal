import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import NavbarComponent from '../componentes/Navbar';
import { ServicioCarreras } from '../servicios/ServicioCarreras';
import './CareerView.css'; // Tus estilos personalizados

function CareerView() {
  const { careerId } = useParams();
  const [careerData, setCareerData] = useState(null);
  const servicioCarreras = new ServicioCarreras();

  useEffect(() => {
    if (careerId) {
        servicioCarreras.getCarreraPorId(careerId)
            .then(response => {
                if (response.status === 200 && response.data) {
                    setCareerData(response.data); // Asegúrate de usar solo la parte 'data' de la respuesta
                } else {
                    // Manejar casos donde no se encuentran datos
                    console.error("Carrera no encontrada o respuesta inválida", response);
                }
            })
            .catch(error => {
                console.error("Error al recuperar los datos de la carrera", error);
            });
    }
}, [careerId]);
if (!careerData) {
  return <div>Cargando datos de la carrera...</div>;
}

  const {
    nombre = '', // Proporciona un valor por defecto para evitar errores
    duracionSemestres,
    areasEstudio,
    modalidadesGraduacion,
    // Añade aquí más propiedades según lo que desees mostrar
  } = careerData;

  const areas = careerData && careerData.areasEstudio 
  ? (typeof careerData.areasEstudio === 'string' ? careerData.areasEstudio.split(',') : careerData.areasEstudio)
  : [];

const modalidades = careerData && careerData.modalidadesGraduacion 
  ? (typeof careerData.modalidadesGraduacion === 'string' ? careerData.modalidadesGraduacion.split(',') : careerData.modalidadesGraduacion)
  : [];

  return (
    <div className="App">
      <Container className="career-view my-5">
        <Row className="align-items-center">
          <Col md={6}>
            {/* Imagina que también obtienes la URL de la imagen desde el backend */}
            <Image src={careerData.imageUrl} alt={`Estudiantes de ${nombre}`} className="img-fluid mb-3" />
            <h2 className="mb-3">{nombre.toUpperCase()}</h2>
            {/* Puedes añadir aquí más descripciones dinámicas si las tienes */}
          </Col>
          {/* ... restante código */}
        </Row>
        <Row>
          {/* ... */}
          <Col md={4}>
            <Card className="info-card mb-3">
              <Card.Body>
                <Card.Title>Duración de la Carrera</Card.Title>
                <Card.Text>{duracionSemestres} Semestres</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="info-card mb-3">
              <Card.Body>
                <Card.Title>Áreas de Estudio</Card.Title>
                <ul>
                  {areas.map((area, index) => (
                    <li key={index}>{area}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="info-card mb-3">
              <Card.Body>
                <Card.Title>Modalidades de Graduación</Card.Title>
                <ul>
                  {modalidades.map((modalidad, index) => (
                    <li key={index}>{modalidad}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CareerView;