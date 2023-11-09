import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl'

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
            <Nav.Link className='nav-link'  href='#id-Home' >
            <FormattedMessage id='id-navbar1' defaultMessage='home' />
             </Nav.Link>
            <Nav.Link className='nav-link'  href='#id-AbautMe' >
            <FormattedMessage id='id-navbar3' defaultMessage='abaut' />
            </Nav.Link>
            <Nav.Link className='nav-link'  href='#id-technologies' >
            <FormattedMessage id='id-navbar2' defaultMessage='tecnologies' />
            </Nav.Link>
            <Nav.Link className='nav-link'  href='#id-Proyects' >
            <FormattedMessage id='id-navbar4' defaultMessage='projects' />
            </Nav.Link>
            <Nav.Link className='nav-link'  href='#id-Contact' >
            <FormattedMessage id='id-navbar5' defaultMessage='contact' />
            </Nav.Link>
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