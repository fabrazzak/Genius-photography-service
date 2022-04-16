import React from 'react';
import './Header.css'
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <Navbar className='py-4 fs-4 navbar-bg' expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/" className='fs-3 fw-bold'>JASON BURNS</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '350px' }}
                        navbarScroll
                    >
                        <Nav.Link as={CustomLink} to="/">Home</Nav.Link>
                        <Nav.Link as={CustomLink} to="services">Services</Nav.Link>
                        <Nav.Link as={CustomLink} to="about">About</Nav.Link>
                        <Nav.Link as={CustomLink} to="blogs">Blogs</Nav.Link>
                        <Nav.Link as={CustomLink} to="contact">Contact</Nav.Link>
                        <Nav.Link as={CustomLink} to="login">Login</Nav.Link>
                        <Nav.Link as={CustomLink} to="signin">Sign in</Nav.Link>

                       
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;