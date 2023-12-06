import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ServicioCentrosInvestigacion } from '../../servicios/ServicioCentrosInvestigacion';
import ServicioImagenes from '../../servicios/ServicioImagenes';
import { ServicioCarrera } from '../../servicios/ServicioCarrera';
import { ServicioContacto } from '../../servicios/ServicioContacto';

const FormResearchCenter = ({ onAgregarCentroInvestigacion, onCerrarFormulario, existingData }) => {
  const [nombre, setNombre] = useState('');
  const [enlaceWeb, setEnlaceWeb] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [carreraId, setCarreraId] = useState('');
  const [contactoId, setContactoId] = useState('');
  const [archivo, setArchivo] = useState('');
  const [carreras, setCarreras] = useState([]);
  const [contactos, setContactos] = useState([]);
  
  const servicioCentrosInvestigacion = new ServicioCentrosInvestigacion();
  const servicioImagenes = new ServicioImagenes();
  const servicioCarrera = new ServicioCarrera();
  const servicioContacto = new ServicioContacto();

  useEffect(() => {
    async function fetchData() {
      try {
        const carrerasResponse = await servicioCarrera.getAll();
  
        // Verificar si la respuesta tiene la propiedad 'data' y es un array
        if (Array.isArray(carrerasResponse.data)) {
          // Mapear solo si es un array
          setCarreras(carrerasResponse.data.map((carrera) => ({ id: carrera.carreraId, nombre: carrera.nombre })));
        } else {
          console.error('La respuesta del servidor no contiene un array de datos:', carrerasResponse);
        }
  
        const contactosResponse = await servicioContacto.getAll();
  
        // Verificar si la respuesta tiene la propiedad 'data' y es un array
        if (Array.isArray(contactosResponse.data)) {
          // Mapear solo si es un array
          setContactos(contactosResponse.data.map((contacto) => ({ id: contacto.contactoId, nombre: contacto.nombre })));
        } else {
          console.error('La respuesta del servidor no contiene un array de datos:', contactosResponse);
        }
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    }
  
    fetchData();
  }, [servicioCarrera, servicioContacto]);
  const handleArchivoChange = (e) => {
    const file = e.target.files[0];
    setArchivo(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let enlaceImagen = existingData ? existingData.enlaceImagen : null;

      if (archivo) {
        enlaceImagen = await servicioImagenes.uploadImagen(archivo);
      }

      if (existingData) {
        await servicioCentrosInvestigacion.putCentroInvestigacion({
          ...existingData,
          nombre,
          enlaceWeb,
          descripcion,
          carrera: { carreraId: carreraId },
          contacto: { contactoId: contactoId },
          enlaceImagen,
        });
      } else {
        await servicioCentrosInvestigacion.postCentroInvestigacion({
          nombre,
          enlaceWeb,
          descripcion,
          carrera: { carreraId: carreraId },
          contacto: { contactoId: contactoId },
          enlaceImagen,
        });
      }

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
        <Form.Control as="select" value={carreraId} onChange={(e) => setCarreraId(e.target.value)}>
          {carreras.map((carrera) => (
            <option key={carrera.id} value={carrera.id}>
              {carrera.nombre}
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="formContactoId">
        <Form.Label>ID de Contacto</Form.Label>
        <Form.Control as="select" value={contactoId} onChange={(e) => setContactoId(e.target.value)}>
          {contactos.map((contacto) => (
            <option key={contacto.id} value={contacto.id}>
              {contacto.nombre}
            </option>
          ))}
        </Form.Control>
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
