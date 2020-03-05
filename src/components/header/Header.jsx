import React, {Component} from 'react';
import './header.scss';
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header>
                <Navbar bg="dark" expand="lg">
                    <Container>
                        <Navbar.Brand href="/">Skate Board</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="skate-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <NavDropdown title="Categories" id="skate-nav-dropdown">
                                    <NavDropdown.Item href="/sports">Sports</NavDropdown.Item>
                                    <NavDropdown.Item href="/leisure">Leisure</NavDropdown.Item>
                                    <NavDropdown.Item href="/extreme">Extreme</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        )
    }
}


export default Header;