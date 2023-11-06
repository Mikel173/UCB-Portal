import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function NavbarComponent() {
  return (
    <>
      <Navbar className="custom-bg" variant="dark">
        <Container style={{ width: '100%px' }}>
            <img src={require('../imagenes/Cato-logo.png')} alt="Logo" className="navbar-logo" />
          <Nav className="me-auto">
            <Nav.Link href="/" className="navbar-link">Inicio</Nav.Link>
            <NavDropdown title="Academico" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/secciones-academicas">Secciones academicas</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/admision-y-becas">Admision y becas</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/plataforma-en-linea">Plataforma de aprendizaje en linea</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/investigacion">Investigacion</Nav.Link>
            <Nav.Link href="#campus" className="navbar-link">Campus</Nav.Link>
            <Nav.Link href="#recursos" className="navbar-link">Recursos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default NavbarComponent;