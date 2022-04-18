import React from 'react';
import './Header.css'
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';


const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const logOut=()=>{
        signOut(auth);
    }
    return (
        <Navbar className='py-2 fs-4 navbar-bg' sticky='top' expand="lg">
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

                        {
                            user ? <Nav.Link as={CustomLink} to="login"> <button onClick={logOut} as={CustomLink} to="login" className=" border-0 text-decoration-none logout d-flex justify-content-center align-items-center " >Log out 
                                <img src={user?.photoURL} alt="" />
                            </button></Nav.Link>
                           
                            : <>
                                <Nav.Link as={CustomLink} to="login">Login</Nav.Link>
                                 <Nav.Link as={CustomLink} to="signin">Sign up</Nav.Link>
                                 </>
                               
                        }
                        
                        

                       
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;