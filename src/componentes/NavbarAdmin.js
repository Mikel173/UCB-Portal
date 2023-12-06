import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import '../App.css';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function NavbarAdmin() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Navbar expand="md" collapseOnSelect expanded={expanded} className="custom-bg" variant="dark">
        <Container>
          <Navbar.Brand>
            <img src={require('../imagenes/Cato-logo.png')} alt="Logo" className="navbar-logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => setExpanded(!expanded)}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/admin" className="navbar-link">Inicio</Nav.Link>

              <NavDropdown title="Academico" id="academico-nav-dropdown">
                <NavDropdown.Item as={Link} to="/admin/secciones-academicas">Secciones academicas</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/admin/admision-y-becas">Admision y becas</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/admin/plataforma-en-linea">Plataforma de aprendizaje en linea</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="/admin/investigacion">Investigacion</Nav.Link>
              <Nav.Link as={Link} to="/admin#campus" className="navbar-link">Campus</Nav.Link>
              <Nav.Link href='https://www.bibvirtual.ucb.edu.bo/' target='_blank'>Biblioteca</Nav.Link>

              <NavDropdown title="Recursos" id="recursos-nav-dropdown">
                <NavDropdown.Item as={Link} to="/admin/recursos-estudiantes">Recursos Estudiantes</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/admin/recursos-servicio">Recursos Servicio</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/admin/recursos-docentes">Recursos Docentes</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default NavbarAdmin;
