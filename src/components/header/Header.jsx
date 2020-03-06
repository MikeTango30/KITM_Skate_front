import React, {Component} from 'react';
import './header.scss';
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Category from "../category/Category";
import Spinner from "react-bootstrap/Spinner";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        fetch("http://skelbimai.test/api/categories/")
            .then(response => response.json())
            .then(data => {
                    this.setState({
                        categories: data
                    });
                }
            );
    }


    render() {
        if (this.state.categories.data) {
            let links = this.state.categories.data.map(item =>
                <NavDropdown.Item>
                    <Link to={"/products/category/" + item.id}>{item.category_title}</Link>
                </NavDropdown.Item>
            );
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
                                            {links}
                                        </NavDropdown>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                        <Switch>
                            <Route exact path="/products/category/:categoryId"
                                   render={(props) => <Category {...props} />}/>
                        </Switch>
                    </header>
                </Router>
            )
        } else {
            return (
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            )
        }

    }
}


export default Header;