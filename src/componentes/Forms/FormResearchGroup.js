import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ServicioGruposInvestigacion } from '../../servicios/ServicioGruposInvestigacion';
import ServicioImagenes from '../../servicios/ServicioImagenes';

const FormResearchGroup = ({ onAgregarGrupoInvestigacion, onCerrarFormulario }) => {
  const [nombre, setNombre] = useState('');
  const [enlaceWeb, setEnlaceWeb] = useState('');
  const [carreraId, setCarreraId] = useState('');
  const [contactoId, setContactoId] = useState('');
  const [archivo, setArchivo] = useState(null);

  const servicioGruposInvestigacion = new ServicioGruposInvestigacion();
  const servicioImagenes = new ServicioImagenes();

  const handleArchivoChange = async (e) => {
    const file = e.target.files[0];
    setArchivo(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const enlaceImagen = await servicioImagenes.uploadImagen(archivo);
      
      // Crear el nuevo grupo de investigación
      const nuevoGrupoInvestigacion = {
        nombre,
        enlaceWeb,
        carrera: { carreraId }, // Usar el ID de carrera directamente
        contacto: { contactoId }, // Usar el ID de contacto directamente
        enlaceImagen,
      };

      // Llamar a la función para agregar el grupo de investigación
      await servicioGruposInvestigacion.postInstitutoInvestigacion(nuevoGrupoInvestigacion);

      // Limpiar el formulario y cerrar el modal
      setNombre('');
      setEnlaceWeb('');
      setCarreraId('');
      setContactoId('');
      setArchivo(null);
      onCerrarFormulario();
      onAgregarGrupoInvestigacion();
    } catch (error) {
      console.error('Error al agregar el Grupo de Investigación:', error);
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
        Agregar Grupo de Investigación
      </Button>
    </Form>
  );
};

export default FormResearchGroup;
