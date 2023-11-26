import React, { useState } from 'react';
import { ServicioEventos } from '../../servicios/ServicioEventos';
import ServicioImagenes from '../../servicios/ServicioImagenes';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const FormEvento = ({ onAgregarEvento, onCerrarFormulario }) => {
  const [nuevoEvento, setNuevoEvento] = useState({
    nombre: '',
    fechaInicio: '',
    fechaFin: '',
    descripcion: '',
  });

  const [archivo, setArchivo] = useState(null);
  const [error, setError] = useState(null); // Nuevo estado para manejar errores
  const servicioEventos = new ServicioEventos();
  const servicioImagenes = new ServicioImagenes();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoEvento({ ...nuevoEvento, [name]: value });
  };

  const handleArchivoChange = (e) => {
    const file = e.target.files[0];
    setArchivo(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Subir el archivo al nuevo servicio de imágenes
      const enlaceImagen = await servicioImagenes.uploadImagen(archivo);

      // Crear el evento
      await servicioEventos.postEvento({
        ...nuevoEvento,
        enlaceImagen, // Incluir el enlace de la imagen en el evento
      });

      // Limpiar el formulario y cerrar el modal
      setNuevoEvento({
        nombre: '',
        fechaInicio: '',
        fechaFin: '',
        descripcion: '',
      });
      setArchivo(null);
      setError(null); // Limpiar cualquier error anterior

      // Actualizar la lista de eventos
      onAgregarEvento();

      // Cerrar el formulario
      onCerrarFormulario();
    } catch (error) {
      console.error('Error al procesar el evento:', error);
      setError('Error al procesar el evento. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" name="nombre" value={nuevoEvento.nombre} onChange={handleInputChange} required />
      </label>
      <br />
      <label>
        Fecha de Inicio:
        <input type="date" name="fechaInicio" value={nuevoEvento.fechaInicio} onChange={handleInputChange} required />
      </label>
      <br />
      <label>
        Fecha de Fin:
        <input type="date" name="fechaFin" value={nuevoEvento.fechaFin} onChange={handleInputChange} required />
      </label>
      <br />
      <label>
        Descripción:
        <textarea name="descripcion" value={nuevoEvento.descripcion} onChange={handleInputChange} required />
      </label>
      <br />
      {/* Nuevo campo para la imagen */}
      <label>
        Imagen:
        <input type="file" accept="image/*" onChange={handleArchivoChange} />
      </label>
      <br />
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Mostrar mensaje de error si existe */}
      <br />
      <Button variant="primary" type="submit">
        Agregar Evento
      </Button>
    </form>
  );
};

export default FormEvento;
