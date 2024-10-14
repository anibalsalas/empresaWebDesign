import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../styles.css';
function Menu() {
  const expand = 'md'; 

  return (
    <>
      <Navbar expand={expand} className="bg-body-tertiary sticky top-0 padding-menu mb-3"  >

        <Container fluid>
          <Navbar.Brand href="#">Navbar </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3 font-sans font-bold  text-lg">
                <Nav.Link href="#about">Nosotros</Nav.Link>
                <Nav.Link href="#benefits">Beneficios</Nav.Link>
                <Nav.Link href="#plans">Planes</Nav.Link>
              </Nav>

              <Form className="d-flex">
                <Button variant="outline-success">Contáctenos</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Menu;


