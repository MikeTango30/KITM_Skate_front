import React, {Component} from 'react';
import './footer.scss';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer>
                <Container>
                    <div className="fixed-bottom">
                        <Navbar bg="dark">
                            <Container>
                                <NavbarBrand>Skate Park</NavbarBrand>
                            </Container>
                        </Navbar>
                    </div>
                </Container>
            </footer>
        )
    }
}


export default Footer;