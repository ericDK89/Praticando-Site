import React from 'react'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import './style.css'


export default function Header() {
  return (
    <header>
        <Navbar bg="dark" variant="dark" expand="lg" >
            <Container>
                <Navbar.Brand href="#home">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <img src="https://react-bootstrap.netlify.app/logo.svg" width="30" height="30" className="d-inline-block align-top" alt="React Bootstrap logo"/> 
                    Lorem Ipsum
                </Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}
