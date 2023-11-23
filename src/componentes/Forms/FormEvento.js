import React, { useState } from 'react';
import { ServicioEventos } from '../../servicios/ServicioEventos';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const FormEvento = ({ onAgregarEvento, onCerrarFormulario }) => {
  const [nuevoEvento, setNuevoEvento] = useState({
    nombre: '',
    fechaInicio: '',
    fechaFin: '',
    descripcion: '',
  });

  const servicioEventos = new ServicioEventos();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoEvento({ ...nuevoEvento, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    servicioEventos.postEvento(nuevoEvento)
      .then((data) => {
        setNuevoEvento({
          nombre: '',
          fechaInicio: '',
          fechaFin: '',
          descripcion: '',
        });

        onAgregarEvento();
        onCerrarFormulario();
      })
      .catch((error) => {
        console.error("Error al agregar evento:", error);
      });
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
      <Button variant="primary" type="submit">
        Agregar Evento
      </Button>
    </form>
  );
};

export default FormEvento;
