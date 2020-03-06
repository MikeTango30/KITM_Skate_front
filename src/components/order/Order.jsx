import React, {Component} from 'react';
import './order.scss';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: []
        }
    }

    componentDidMount() {
        let productId = this.props.match.params.id;
        fetch(`http://skelbimai.test/api/product/${productId}`)
            .then(response => response.json())
            .then(data => {
                    this.setState({
                        product: data
                    });
                }
            );
    }

    render() {
        return (
            <Form>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group controlId="formBasicSurname">
                    <Form.Label>Surname</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Place Order
                </Button>
            </Form>
        )
    }
}


export default Order;