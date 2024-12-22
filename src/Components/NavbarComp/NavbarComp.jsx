import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from './../../Context/UserContext';


export default function NavbarComp() {
    const { token, setToken } = useContext(userContext);
    const navigate = useNavigate()
    //logout fun
    function logout() {
        localStorage.removeItem("token");
        setToken(null);
        navigate('/auth/login')
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-gray-300">
                <Container>
                    <Navbar.Brand href='/' className="d-flex justify-content-center align-items-center">
                        <i className="fa-solid fa-note-sticky text-white text-3xl me-3"></i>
                        <h1 className="h3 text-white">Movies</h1>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        {token ? (
                            <Nav className='text-xl ms-auto'> {/* navigation */}
                                <Nav.Link className='text-white' href="/">Home</Nav.Link>
                                <Nav.Link className='text-white ' href="movies">Movies</Nav.Link>
                                <Nav.Link className='text-white ' href="watchList">WatchList</Nav.Link>
                            </Nav>
                        ) : ""}


                        <Nav className="ms-auto">
                            {token ? (
                                <Nav.Link>
                                    <span className='text-white cursor-pointer text-xl' onClick={() => logout()}>log out </span>
                                </Nav.Link>
                            ) : (
                                <>
                                    <Nav.Link >
                                        <Link to='reg' className='text-white text-xl '>Register</Link>
                                    </Nav.Link>
                                    <Nav.Link >
                                        <Link to='login' className='text-white text-xl'>Login</Link>
                                    </Nav.Link>
                                </>
                            )
                            }
                        </Nav>


                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
