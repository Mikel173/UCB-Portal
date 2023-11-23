import React, { useState } from 'react';
import { ServicioNoticias } from '../../servicios/ServicioNoticias';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const FormNoticia = ({ onAgregarNoticia, onCerrarFormulario }) => {
  const [nuevaNoticia, setNuevaNoticia] = useState({
    titulo: '',
    contenido: '',
    fechaPublicacion: '',
  });

  const servicioNoticias = new ServicioNoticias();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevaNoticia({ ...nuevaNoticia, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    servicioNoticias.postNoticia(nuevaNoticia)
      .then((data) => {
        setNuevaNoticia({
          titulo: '',
          contenido: '',
          fechaPublicacion: '',
        });

        onAgregarNoticia();
        onCerrarFormulario();
      })
      .catch((error) => {
        console.error("Error al agregar noticia:", error);
      });
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
      <Button variant="primary" type="submit">
        Agregar Noticia
      </Button>
    </form>
  );
};

export default FormNoticia;
