import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../NavBar.css'; // Asegúrate de que la ruta sea correcta
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // Importa el ícono de carrito
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Container>
        {/* Sustituir el texto del Brand por una imagen */}
        <Navbar.Brand href="#home">
          <img
            src="../logo.png.png"
            alt="Logo de Mi Tienda"
            width="90px" // Ajusta el tamaño de la imagen según lo necesites
            height="50px"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#productos">Productos</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
            <Nav.Link href="#categorias">Categorias</Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <FaShoppingCart size={24} /> {/* Ícono de carrito */}
            </Nav.Link>
            <CartWidget /> {/* Aquí se ubica el CartWidget */}
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

