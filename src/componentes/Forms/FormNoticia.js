import React, { useState } from 'react';
import { ServicioNoticias } from '../../servicios/ServicioNoticias';
import ServicioImagenes from '../../servicios/ServicioImagenes';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const FormNoticia = ({ onAgregarNoticia, onCerrarFormulario }) => {
  const [nuevaNoticia, setNuevaNoticia] = useState({
    titulo: '',
    contenido: '',
    fechaPublicacion: '',
  });

  const [archivo, setArchivo] = useState(null);
  const [error, setError] = useState(null); // Nuevo estado para manejar errores
  const servicioNoticias = new ServicioNoticias();
  const servicioImagenes = new ServicioImagenes();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevaNoticia({ ...nuevaNoticia, [name]: value });
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

      // Crear la noticia
      await servicioNoticias.postNoticia({
        ...nuevaNoticia,
        enlaceImagen, // Incluir el enlace de la imagen en la noticia
      });

      // Limpiar el formulario y cerrar el modal
      setNuevaNoticia({
        titulo: '',
        contenido: '',
        fechaPublicacion: '',
      });
      setArchivo(null);
      setError(null); // Limpiar cualquier error anterior

      // Actualizar la lista de noticias
      onAgregarNoticia();

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
        <input type="text" name="titulo" value={nuevaNoticia.titulo} onChange={handleInputChange} required />
      </label>
      <br />
      <label>
        Contenido:
        <textarea name="contenido" value={nuevaNoticia.contenido} onChange={handleInputChange} required />
      </label>
      <br />
      <label>
        Fecha de Publicación:
        <input type="date" name="fechaPublicacion" value={nuevaNoticia.fechaPublicacion} onChange={handleInputChange} required />
      </label>
      <br />
      <label>
        Subir Imagen:
        <input type="file" accept="image/*" onChange={handleArchivoChange} />
      </label>
      <br />
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Mostrar mensaje de error si existe */}
      <br />
      <Button variant="primary" type="submit">
        Agregar Noticia
      </Button>
    </form>
  );
};

export default FormNoticia;
