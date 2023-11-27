import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { PencilSquare } from 'react-bootstrap-icons';
import FormNoticia from './Forms/FormNoticia';

const CardUpdate = ({ onUpdate, tipoFormulario, existingData }) => {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
  };

  const handleUpdate = () => {
    handleShowForm();
  };

  return (
    <>
      <Card style={{ background: 'rgba(255, 255, 255, 0.8)', padding: '20px', textAlign: 'center' }}>
        <Button variant="link" onClick={handleUpdate}>
          <PencilSquare style={{ fontSize: '2em' }} />
        </Button>
      </Card>

      <Modal show={showForm} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{`Formulario de ${tipoFormulario}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Utilizar el mismo formulario para ambos casos */}
          <FormNoticia onUpdate={onUpdate} onCerrarFormulario={handleClose} existingData={existingData} tipoFormulario={tipoFormulario} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CardUpdate;
