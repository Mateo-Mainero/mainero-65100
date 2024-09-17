import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../NavBar.css'; 
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // Importa el ícono de carrito
import CartWidget from './CartWidget'; // Componente CartWidget

function NavBar() {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Container>
        {/* Sustituir el texto del Brand por una imagen */}
        <Navbar.Brand as={Link} to="/">
          <img
            src="../logo.png.png"
            alt="Logo de Mi Tienda"
            width="90px" 
            height="50px"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
            <Nav.Link as={Link} to="/categorias">Categorías</Nav.Link>
           
            {/* CartWidget con ícono de carrito */}
            <Nav.Link as={Link} to="/cart" className="d-flex align-items-center">
              <FaShoppingCart size={24} /> {/* Ícono del carrito */}
              
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;


