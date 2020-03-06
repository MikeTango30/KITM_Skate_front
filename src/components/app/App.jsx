import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './app.scss';
import Footer from "../footer/Footer";
import Main from "../main/Main";
import Aside from "../aside/Aside";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";


class App extends Component {
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
                <Container fluid className="p-0">
                    <Router>
                        <header>
                            <Navbar bg="dark" expand="lg">
                                <Container>
                                    <Navbar.Brand href="/"><Link to={"/products"}>Skate Park</Link></Navbar.Brand>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                                    <Navbar.Collapse id="skate-navbar-nav">
                                        <Nav className="mr-auto">
                                            <NavDropdown title="Categories" id="skate-nav-dropdown">
                                                {links}
                                            </NavDropdown>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </header>
                        <Container className="container">
                            <Row>
                                <Col xs={10} md={8}>
                                    <Switch>
                                        <Route exact path="/products" render={(props) => <Main {...props} />}/>
                                        <Route exact path="/products/category/:categoryId"
                                               render={(props) => <Main {...props} />}/>
                                        <Route exact path="/product/:id" render={(props) => <Main {...props}/>} />
                                    </Switch>
                                </Col>
                                <Col>
                                    <Aside/>
                                </Col>
                            </Row>
                        </Container>
                    </Router>
                    <Footer/>
                </Container>
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

export default App;

