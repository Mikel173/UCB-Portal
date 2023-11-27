import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ServicioInstitutosInvestigacion } from '../../servicios/ServicioInstitutosInvestigacion';
import ServicioImagenes from '../../servicios/ServicioImagenes';

const FormResearchInstitute = ({ onAgregarInstitutoInvestigacion, onCerrarFormulario }) => {
  const [nombre, setNombre] = useState('');
  const [enlaceWeb, setEnlaceWeb] = useState('');
  const [lineasInvestigacion, setLineasInvestigacion] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [carreraId, setCarreraId] = useState('');
  const [contactoId, setContactoId] = useState('');
  const [archivo, setArchivo] = useState(null);

  const servicioInstitutosInvestigacion = new ServicioInstitutosInvestigacion();
  const servicioImagenes = new ServicioImagenes();

  const handleArchivoChange = (e) => {
    const file = e.target.files[0];
    setArchivo(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Subir la imagen y obtener el enlace
      const enlaceImagen = await servicioImagenes.uploadImagen(archivo);

      // Crear el nuevo instituto de investigación
      const nuevoInstitutoInvestigacion = {
        nombre,
        enlaceWeb,
        lineasInvestigacion,
        descripcion,
        carrera: { carreraId }, // Usar el ID de carrera directamente
        contacto: { contactoId }, // Usar el ID de contacto directamente
        enlaceImagen,
      };

      // Llamar a la función para agregar el instituto de investigación
      await servicioInstitutosInvestigacion.postInstitutoInvestigacion(nuevoInstitutoInvestigacion);

      // Limpiar el formulario y cerrar el modal
      setNombre('');
      setEnlaceWeb('');
      setLineasInvestigacion('');
      setDescripcion('');
      setCarreraId('');
      setContactoId('');
      setArchivo(null);
      onCerrarFormulario();
      onAgregarInstitutoInvestigacion();
    } catch (error) {
      console.error('Error al agregar el Instituto de Investigación:', error);
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

      <Form.Group controlId="formLineasInvestigacion">
        <Form.Label>Líneas de Investigación</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese las líneas de investigación (separadas por ;)"
          value={lineasInvestigacion}
          onChange={(e) => setLineasInvestigacion(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formDescripcion">
        <Form.Label>Descripción</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Ingrese la descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
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
        Agregar Instituto de Investigación
      </Button>
    </Form>
  );
};

export default FormResearchInstitute;
