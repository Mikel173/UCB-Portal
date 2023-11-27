import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ServicioSociedadesCientificas } from '../../servicios/ServicioSociedadesCientificas';
import ServicioImagenes from '../../servicios/ServicioImagenes';

const FormScientificSocieties = ({ onAgregarSociedadCientifica, onCerrarFormulario }) => {
  const [nombre, setNombre] = useState('');
  const [enlaceWeb, setEnlaceWeb] = useState('');
  const [carreraId, setCarreraId] = useState('');
  const [contactoId, setContactoId] = useState('');
  const [enlaceImagen, setEnlaceImagen] = useState(''); // Nuevo estado para almacenar el enlace de la imagen
  const [archivo, setArchivo] = useState(null);

  const servicioSociedadesCientificas = new ServicioSociedadesCientificas();
  const servicioImagenes = new ServicioImagenes();

  const handleArchivoChange = async (e) => {
    const file = e.target.files[0];
    setArchivo(file);

    try {
      // Subir la imagen y obtener el enlace
      const enlace = await servicioImagenes.uploadImagen(file);
      setEnlaceImagen(enlace);
    } catch (error) {
      console.error('Error al subir la imagen:', error);
      // Manejar el error aquí, puedes mostrar un mensaje al usuario si lo prefieres
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Crear la nueva sociedad científica
      const nuevaSociedadCientifica = {
        nombre,
        enlaceWeb,
        carrera: { carreraId }, // Usar el ID de carrera directamente
        contacto: { contactoId }, // Usar el ID de contacto directamente
        enlaceImagen,
      };

      // Llamar a la función para agregar la sociedad científica
      await servicioSociedadesCientificas.postSociedadCientifica(nuevaSociedadCientifica);

      // Limpiar el formulario y cerrar el modal
      setNombre('');
      setEnlaceWeb('');
      setCarreraId('');
      setContactoId('');
      setEnlaceImagen('');
      setArchivo(null);
      onCerrarFormulario();
      onAgregarSociedadCientifica();
    } catch (error) {
      console.error('Error al agregar la Sociedad Científica:', error);
      // Manejar el error aquí, puedes mostrar un mensaje al usuario si lo prefieres
    }
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

      <Form.Group controlId="formArchivo">
        <Form.Label>Imagen</Form.Label>
        <Form.Control type="file" accept="image/*" onChange={handleArchivoChange} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Agregar Sociedad Científica
      </Button>
    </Form>
  );
};

export default FormScientificSocieties;
