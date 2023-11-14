import React from 'react';
import Card from 'react-bootstrap/Card';

function CardResearchInstitute(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src={props.enlaceWeb} />
      <Card.Body>
        <div className="titulos">
          <h4>{props.nombre}</h4>
        </div>
        <Card.Text>
          <strong>Líneas de Investigación:</strong> {props.lineas_investigacion}
          <br />
          {props.descripcion}
          <br />
          {props.carrera.nombre}
          <br />
          <strong>Contacto:</strong> {props.contacto.nombre}
          <br />
          {props.contacto.correo}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardResearchInstitute;
