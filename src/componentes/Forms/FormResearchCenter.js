import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ServicioCentrosInvestigacion } from '../../servicios/ServicioCentrosInvestigacion';
import ServicioImagenes from '../../servicios/ServicioImagenes';

const FormResearchCenter = ({ onAgregarCentroInvestigacion, onCerrarFormulario, existingData }) => {
  const [nombre, setNombre] = useState('');
  const [enlaceWeb, setEnlaceWeb] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [carreraId, setCarreraId] = useState('');
  const [contactoId, setContactoId] = useState('');
  const [archivo, setArchivo] = useState(null);

  const servicioCentrosInvestigacion = new ServicioCentrosInvestigacion();
  const servicioImagenes = new ServicioImagenes();

  // Actualizar el estado del formulario si hay datos existentes
  React.useEffect(() => {
    if (existingData) {
      setNombre(existingData.nombre);
      setEnlaceWeb(existingData.enlaceWeb);
      setDescripcion(existingData.descripcion);
      setCarreraId(existingData.carrera.carreraId); // Suponiendo que la propiedad 'id' existe en el objeto 'carrera'
      setContactoId(existingData.contacto.contactoId); // Suponiendo que la propiedad 'id' existe en el objeto 'contacto'
    }
  }, [existingData]);

  const handleArchivoChange = (e) => {
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

      // Determinar si estamos creando un nuevo centro de investigación o actualizando uno existente
      if (existingData) {
        // Actualizar el centro de investigación existente
        // Actualizar el centro de investigación existente
      // Actualizar el centro de investigación existente
      await servicioCentrosInvestigacion.putCentroInvestigacion({
        ...existingData,
        nombre,
        enlaceWeb,
        descripcion,
        carrera: {carreraId: carreraId}, // Solo pasar el ID de carrera
        contacto: {contactoId: contactoId}, // Solo pasar el ID de contacto
        enlaceImagen,
      });
      


      } else {
        // Crear el nuevo centro de investigación
        await servicioCentrosInvestigacion.postCentroInvestigacion({
          nombre,
          enlaceWeb,
          descripcion,
          carrera: { carreraId: carreraId }, // Suponiendo que la propiedad 'id' es necesaria para la creación
          contacto: { contactoId: contactoId }, // Suponiendo que la propiedad 'id' es necesaria para la creación
          enlaceImagen,
        });
      }

      // Limpiar el formulario y cerrar el modal
      setNombre('');
      setEnlaceWeb('');
      setDescripcion('');
      setCarreraId('');
      setContactoId('');
      setArchivo(null);
      onCerrarFormulario();
      onAgregarCentroInvestigacion();
    } catch (error) {
      console.error('Error al procesar el Centro de Investigación:', error);
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
        {existingData ? 'Actualizar Centro de Investigación' : 'Agregar Centro de Investigación'}
      </Button>
    </Form>
  );
};

export default FormResearchCenter;
