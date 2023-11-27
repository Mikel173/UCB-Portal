import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ServicioSociedadesCientificas } from '../../servicios/ServicioSociedadesCientificas';
import ServicioImagenes from '../../servicios/ServicioImagenes';

const FormScientificSocieties = ({ onAgregarSociedadCientifica, onCerrarFormulario, existingData }) => {
  const [nombre, setNombre] = useState('');
  const [enlaceWeb, setEnlaceWeb] = useState('');
  const [carreraId, setCarreraId] = useState('');
  const [contactoId, setContactoId] = useState('');
  const [enlaceImagen, setEnlaceImagen] = useState(''); // Nuevo estado para almacenar el enlace de la imagen
  const [archivo, setArchivo] = useState(null);

  const servicioSociedadesCientificas = new ServicioSociedadesCientificas();
  const servicioImagenes = new ServicioImagenes();

  // Actualizar el estado del formulario si hay datos existentes
  useEffect(() => {
    if (existingData) {
      setNombre(existingData.nombre);
      setEnlaceWeb(existingData.enlaceWeb);
      setCarreraId(existingData.carrera.carreraId); // Suponiendo que la propiedad 'id' existe en el objeto 'carrera'
      setContactoId(existingData.contacto.contactoId); // Suponiendo que la propiedad 'id' existe en el objeto 'contacto'
      setEnlaceImagen(existingData.enlaceImagen);
    }
  }, [existingData]);

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
      // Determinar si estamos creando una nueva sociedad científica o actualizando una existente
      if (existingData) {
        // Actualizar la sociedad científica existente
        await servicioSociedadesCientificas.putSociedadCientifica({
          ...existingData,
          nombre,
          enlaceWeb,
          carrera: {carreraId: carreraId}, // Solo pasar el ID de carrera
          contacto: {contactoId: contactoId}, // Solo pasar el ID de contacto
          enlaceImagen,
        });
      } else {
        // Crear la nueva sociedad científica
        await servicioSociedadesCientificas.postSociedadCientifica({
          nombre,
          enlaceWeb,
          carrera: {carreraId: carreraId}, // Solo pasar el ID de carrera
          contacto: {contactoId: contactoId}, // Solo pasar el ID de contacto
          enlaceImagen,
        });
      }

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
      console.error('Error al procesar la Sociedad Científica:', error);
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
        {existingData ? 'Actualizar Sociedad Científica' : 'Agregar Sociedad Científica'}
      </Button>
    </Form>
  );
};

export default FormScientificSocieties;