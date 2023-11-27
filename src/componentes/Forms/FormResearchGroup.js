import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ServicioGruposInvestigacion } from '../../servicios/ServicioGruposInvestigacion';
import ServicioImagenes from '../../servicios/ServicioImagenes';

const FormResearchGroup = ({ onAgregarGrupoInvestigacion, onCerrarFormulario, existingData }) => {
  const [nombre, setNombre] = useState('');
  const [enlaceWeb, setEnlaceWeb] = useState('');
  const [carreraId, setCarreraId] = useState('');
  const [contactoId, setContactoId] = useState('');
  const [archivo, setArchivo] = useState(null);

  const servicioGruposInvestigacion = new ServicioGruposInvestigacion();
  const servicioImagenes = new ServicioImagenes();

  // Actualizar el estado del formulario si hay datos existentes
  useEffect(() => {
    if (existingData) {
      setNombre(existingData.nombre);
      setEnlaceWeb(existingData.enlaceWeb);
      setCarreraId(existingData.carrera.carreraId); // Suponiendo que la propiedad 'id' existe en el objeto 'carrera'
      setContactoId(existingData.contacto.contactoId); // Suponiendo que la propiedad 'id' existe en el objeto 'contacto'
    }
  }, [existingData]);

  const handleArchivoChange = async (e) => {
    const file = e.target.files[0];
    setArchivo(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Subir la imagen y obtener el enlace si se selecciona un nuevo archivo
      let enlaceImagen = existingData ? existingData.enlaceImagen : null; // Mantener el enlace existente si no hay nuevo archivo

      if (archivo) {
        enlaceImagen = await servicioImagenes.uploadImagen(archivo);
      }

      // Determinar si estamos creando un nuevo grupo de investigación o actualizando uno existente
      if (existingData) {
        // Actualizar el grupo de investigación existente
        await servicioGruposInvestigacion.putGrupoInvestigacion({
          ...existingData,
          nombre,
          enlaceWeb,
          carrera: { carreraId }, // Solo pasar el ID de carrera
          contacto: { contactoId }, // Solo pasar el ID de contacto
          enlaceImagen,
        });
      } else {
        // Crear el nuevo grupo de investigación
        await servicioGruposInvestigacion.postGrupoInvestigacion({
          nombre,
          enlaceWeb,
          carrera: { carreraId: carreraId }, // Suponiendo que la propiedad 'id' es necesaria para la creación
          contacto: { contactoId: contactoId }, // Suponiendo que la propiedad 'id' es necesaria para la creación
          enlaceImagen,
        });
      }

      // Limpiar el formulario y cerrar el modal
      setNombre('');
      setEnlaceWeb('');
      setCarreraId('');
      setContactoId('');
      setArchivo(null);
      onCerrarFormulario();
      onAgregarGrupoInvestigacion();
    } catch (error) {
      console.error('Error al procesar el Grupo de Investigación:', error);
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
        {existingData ? 'Actualizar Grupo de Investigación' : 'Agregar Grupo de Investigación'}
      </Button>
    </Form>
  );
};

export default FormResearchGroup;
