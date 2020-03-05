import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import './error.scss';

class Error extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container className="my-5">
                <Row>
                   <Alert className="alert-danger">
                       {this.props.error}
                   </Alert>
                </Row>
            </Container>
        )
    }
}


export default Error;