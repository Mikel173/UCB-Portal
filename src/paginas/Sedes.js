import React from 'react';
import ImagePanel from '../componentes/ImagePanel/ImagePanel';
import '../App.css';
import descuentoFamiliar from '../imagenes/becas/descuento-familiar.png';
import descuentoInstitucional from '../imagenes/becas/descuento-institucional.png';
import descuentoProntoPago from '../imagenes/becas/descuento-pronto-pago.png';
import Card from 'react-bootstrap/Card';


const estiloContenedor = {
  textAlign: 'left', // Alinea el texto a la izquierda
  fontFamily: 'Roboto, sans-serif', // Fuente para los párrafos
  color: '#666666', // Color de los párrafos
  marginLeft: '20px', // Margen izquierdo de 20px
  marginRight: '20px', // Margen derecho de 20px
  width: '70%', // Ancho del contenedor para centrar
  margin: '0 auto', // Centra el contenedor en la página
};

const estiloEncabezado = {
  fontFamily: 'Oswald, sans-serif', // Fuente para los encabezados
  color: '#004277', // Color de los encabezados
};


const AdmisionYBecas = () => {
  return (
    <div>
      {/* <NavbarComponent className="navbar" /> */}
      <ImagePanel title="Sedes"/>
      <div style={estiloContenedor}>
        <h2 style={estiloEncabezado}>BECAS PARA ESTUDIANTES REGULARES</h2>
        <p>La Sede La Paz de la Universidad Católica Boliviana "San Pablo" convoca a los estudiantes interesados en presentar su postulación para el semestre 1-2024 a alguna de las becas ofertadas.</p>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <h2 style={estiloEncabezado}>
        DESCUENTOS
      </h2>
    </div>
      <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <Card>
            <Card.Img variant="top" src={descuentoFamiliar} alt="Card 1" />
            <Card.Body>
              <Card.Title style={{ textAlign: 'center' }}><h4 style={estiloEncabezado}><strong>Familiar</strong></h4></Card.Title>
              <Card.Text>
              Para solicitar el descuento familiar, se debe llenar una solicitud en el Departamento de Tesorería, según la cantidad de hermanos, se podrá optar por 20% (2 hermanos), 40% (3 hermanos) y 60% (4 hermanos). El descuento se asignará en base a la cantidad de créditos de cada hermano.* Para más información consultar el reglamento vigente.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card>
            <Card.Img variant="top" src={descuentoInstitucional} alt="Card 2" />
            <Card.Body>
              <Card.Title style={{ textAlign: 'center' }}><h4 style={estiloEncabezado}><strong>Pronto Pago</strong></h4></Card.Title>
              <Card.Text>
              Se otorga un descuento del 8% a todo estudiante por realizar pago al contado. Solicitar más información en oficinas de Tesorería.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card>
            <Card.Img variant="top" src={descuentoProntoPago} alt="Card 3" />
            <Card.Body>
              <Card.Title style={{ textAlign: 'center' }}><h4 style={estiloEncabezado}><strong>Descuento Institucional</strong></h4></Card.Title>
              <Card.Text>
              Constituye un beneficio que la Universidad otorga a hijos del personal docente y administrativo de la Universidad Católica Boliviana “San Pablo” para cursar estudios de Licenciatura en la Universidad.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      </div>
      </div>
  );
}

export default AdmisionYBecas;