import React from 'react';
import Card from 'react-bootstrap/Card';


function CardScientificSocieties(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src={props.enlaceImagen} />
      <Card.Body>      
          <div className="titulos">
          <h4><a href={props.enlaceWeb} target="_blank" rel="noopener noreferrer">{props.nombre}</a></h4>
          </div>
          <Card.Text>
            <strong>Contacto:</strong> {props.contacto.nombre}
            <br />
            <strong></strong> {props.contacto.correo}

        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardScientificSocieties;