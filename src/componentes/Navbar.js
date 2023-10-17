import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';

function NavbarComponent() {
  return (
    <>
      <Navbar className="custom-bg" variant="dark">
        <Container style={{ width: '100%px' }}>
            <img src={require('../imagenes/Cato-logo.png')} alt="Logo" className="navbar-logo" />
            {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand>*/}
          <Nav className="me-auto">
            <Nav.Link href="#inicio" className="navbar-link">Inicio</Nav.Link>
            <Nav.Link href="#academico" className="navbar-link">Academico</Nav.Link>
            <Nav.Link href="#investigacion" className="navbar-link">Investigacion</Nav.Link>
            <Nav.Link href="#campus" className="navbar-link">Campus</Nav.Link>
            <Nav.Link href="#recursos" className="navbar-link">Recursos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;