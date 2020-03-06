import React, {Component} from 'react';
import './header.scss';
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Category from "../category/Category";

class Header extends Component {
    render() {
        return (
            <Router>
                <header>
                    <Navbar bg="dark" expand="lg">
                        <Container>
                            <Navbar.Brand href="/">Skate Board</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                            <Navbar.Collapse id="skate-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <NavDropdown title="Categories" id="skate-nav-dropdown">
                                        <NavDropdown.Item>
                                            <Link to="/products/category/1">Sports</Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="/leisure">
                                            <Link to="/products/category/2">Leisure</Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="/extreme">
                                            <Link to="/products/category/3">Extreme</Link>
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <Switch>
                        <Route exact path="/products/category/:categoryId" render= {(props) => <Category {...props} />}/>
                    </Switch>
                </header>
            </Router>
        )
    }
}


export default Header;