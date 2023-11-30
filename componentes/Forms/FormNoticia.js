import React, { useState, useEffect } from 'react';
import { ServicioNoticias } from '../../servicios/ServicioNoticias';
import ServicioImagenes from '../../servicios/ServicioImagenes';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const FormNoticia = ({ onUpdate, onCerrarFormulario, existingData, tipoFormulario }) => {
  const [noticia, setNoticia] = useState({
    titulo: '',
    contenido: '',
    fechaPublicacion: '',
  });

  const [archivo, setArchivo] = useState(null);
  const [error, setError] = useState(null);
  const servicioNoticias = new ServicioNoticias();
  const servicioImagenes = new ServicioImagenes();

  useEffect(() => {
    // Si hay datos existentes, actualizar el estado del formulario
    if (existingData) {
      setNoticia(existingData);
    } else {
      console.log("No hay datos existentes");
    }
  }, [existingData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNoticia({ ...noticia, [name]: value });
  };

  const handleArchivoChange = (e) => {
    const file = e.target.files[0];
    setArchivo(file);
  };

  const handleCreateNoticia = async () => {
    // Subir el archivo al nuevo servicio de imágenes
    const enlaceImagen = await servicioImagenes.uploadImagen(archivo);

    // Crear la noticia
    await servicioNoticias.postNoticia({
      ...noticia,
      enlaceImagen, // Incluir el enlace de la imagen en la noticia
    });
  };

  const handleUpdateNoticia = async () => {
    // Subir el archivo al nuevo servicio de imágenes si hay un nuevo archivo seleccionado
    let enlaceImagen = existingData.enlaceImagen; // Mantener el enlace existente si no hay nuevo archivo

    if (archivo) {
      enlaceImagen = await servicioImagenes.uploadImagen(archivo);
    }

    // Actualizar la noticia
    await servicioNoticias.putNoticia({
      ...noticia,
      enlaceImagen,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (existingData) {
        // Si hay datos existentes, realizar la actualización
        await handleUpdateNoticia();
      } else {
        // Si no hay datos existentes, realizar la creación
        await handleCreateNoticia();
      }

      // Limpiar el formulario y cerrar el modal
      setNoticia({
        titulo: '',
        contenido: '',
        fechaPublicacion: '',
      });
      setArchivo(null);
      setError(null);

      // // Actualizar la lista de noticias solo si es una creación
      // if (!existingData) {
      //   onUpdate();
      // }

      // Cerrar el formulario
      onCerrarFormulario();
    } catch (error) {
      console.error('Error al procesar la noticia:', error);
      setError('Error al procesar la noticia. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Título:
        <input type="text" name="titulo" value={noticia.titulo} onChange={handleInputChange} required />
      </label>
      <br />
      <label>
        Contenido:
        <textarea name="contenido" value={noticia.contenido} onChange={handleInputChange} required />
      </label>
      <br />
      <label>
        Fecha de Publicación:
        <input type="date" name="fechaPublicacion" value={noticia.fechaPublicacion} onChange={handleInputChange} required />
      </label>
      <br />
      <label>
        Subir Imagen:
        <input type="file" accept="image/*" onChange={handleArchivoChange} />
      </label>
      <br />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <br />
      <Button variant="primary" type="submit">
        {tipoFormulario === 'noticia' ? 'Actualizar Noticia' : 'Crear Noticia'}
      </Button>
    </form>
  );
};

export default FormNoticia;
