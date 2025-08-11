// Header.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    const [data, setData] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);

    // 1. Estado para controlar si el menú móvil está expandido
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        fetch('/services.json')
            .then(response => response.json())
            .then(datos => setData(datos))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleMouseEnter = () => setShowDropdown(true);
    const handleMouseLeave = () => setShowDropdown(false);

    // 2. Función que cierra el menú móvil
    const handleClose = () => setExpanded(false);

    return (
        // 3. Vinculamos el estado al Navbar
        <Navbar
            expand="lg"
            className="navbar bg-body-tertiary"
            expanded={expanded} // Controla si el menú está abierto o cerrado
            onToggle={(isExpanded) => setExpanded(isExpanded)} // Sincroniza el estado al pulsar el "hamburguesa"
        >
            <Container className='navbar-content'>
                {/* 4. Añadimos el onClick al enlace del logo */}
                <Navbar.Brand className="brand" as={Link} to="/" onClick={handleClose}>
                    <img
                        alt=""
                        src="/hacha.png"
                        width="40"
                        height="40"
                        className="d-inline-block align-center"
                    />{' '}Sánchez Poda y Tala</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end flex-grow-1 pe-6">

                        {/* 4. Añadimos el onClick a todos los enlaces */}
                        <Nav.Link className='nav-link' as={Link} to="/" onClick={handleClose}>Inicio</Nav.Link>
                        <Nav.Link className='nav-link' as={Link} to="/about" onClick={handleClose}>Sobre mi</Nav.Link>

                        <NavDropdown
                            className='nav-link'
                            title="Servicios"
                            id="basic-nav-dropdown"
                            show={showDropdown}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            {data.map((item) => (
                                <NavDropdown.Item
                                    className='items'
                                    key={item.title}
                                    as={Link}
                                    to={`/services/${item.title}`}
                                    onClick={handleClose} // 4. También aquí
                                >
                                    {item.title}
                                </NavDropdown.Item>
                            ))}
                        </NavDropdown>

                        <Nav.Link
                            className='nav-link' as={Link} to="/galery" onClick={handleClose}>Galeria</Nav.Link>
                        <Nav.Link
                            className='nav-link' as={Link} to="/contact" onClick={handleClose}>Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;