import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Header from '../header/Header';
import './app.scss';
import Footer from "../footer/Footer";
import Main from "../main/Main";
import Aside from "../aside/Aside";
//
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from 'react-router-dom';

class App extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         products: []
    //     }
    // }

    // componentDidMount() {
    //     fetch("http://skate.test/api/products")
    //         .then(response => response.json())
    //         .then(data => {
    //                 this.setState({
    //                     products: data
    //                 });
    //                 console.log(this.state.products);
    //             }
    //         );
    // }


    render() {
        //TODO pass props
        return (
            <Container fluid className="p-0">
                <Header/>
                <Container className="container">
                    <Row>
                        <Col xs={10} md={8}>
                            <Main/>
                        </Col>
                        <Col>
                            <Aside/>
                        </Col>
                    </Row>
                </Container>
                <Footer/>
            </Container>
        )
    }
}

export default App;

