import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {
    return (
        <>
        <header className='navBar-header'>
      <nav  >
         <Navbar  expand="lg" className='navBar' variant='dark'>
      <Container >
        <Navbar.Brand  >Rodrigo Miranda</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='nav-link'  href='#id-Home' >Inicio</Nav.Link>
            <Nav.Link className='nav-link'  href='#id-AbautMe' >Info</Nav.Link>
            <Nav.Link className='nav-link'  href='#id-technologies'>Tecnologias</Nav.Link>
            <Nav.Link className='nav-link'  href='#id-Proyects' >Projectos</Nav.Link>
            <Nav.Link className='nav-link'  href='#id-Contact' >Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </nav>
     </header>
   
      </>
    );
};

export default NavBar;