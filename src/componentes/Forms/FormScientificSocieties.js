import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const FormScientificSocieties = ({ onAgregarSociedadCientifica, onCerrarFormulario }) => {
  const [nombre, setNombre] = useState('');
  const [enlaceWeb, setEnlaceWeb] = useState('');
  const [carreraId, setCarreraId] = useState('');
  const [contactoId, setContactoId] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const nuevaSociedadCientifica = {
      nombre,
      enlaceWeb,
      carreraId,
      contactoId
    };

    onAgregarSociedadCientifica(nuevaSociedadCientifica);
    onCerrarFormulario();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese el nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formEnlaceWeb">
        <Form.Label>Enlace Web</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese el enlace web"
          value={enlaceWeb}
          onChange={(e) => setEnlaceWeb(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formCarreraId">
        <Form.Label>ID de Carrera</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese el ID de la carrera"
          value={carreraId}
          onChange={(e) => setCarreraId(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formContactoId">
        <Form.Label>ID de Contacto</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese el ID de contacto"
          value={contactoId}
          onChange={(e) => setContactoId(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Agregar Sociedad Científica
      </Button>
    </Form>
  );
};

export default FormScientificSocieties;
