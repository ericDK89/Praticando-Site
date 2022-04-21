import React from 'react'
import {Navbar, Container, Nav, Button, NavDropdown} from 'react-bootstrap'
import './style.css'


export default function Header() {
  return (
    <header>
        <Navbar expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">WANDER</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Nav className="me-auto">
                    <NavDropdown title="HOME" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Item1</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Item2</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Item3</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="PAGES" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Item1</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Item2</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Item3</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="FEATURES" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Item1</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Item2</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Item3</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="PORTFOLIO" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Item1</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Item2</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Item3</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="BLOG" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Item1</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Item2</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Item3</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="SHOP" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Item1</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Item2</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Item3</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Button>Nada</Button>
                    <Button>Nada2</Button>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}
