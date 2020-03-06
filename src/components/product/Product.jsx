import React, {Component} from 'react';
import './product.scss';
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Link from "react-router-dom/es/Link";

class Product extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const link = `/product/${this.props.product.id}`;
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.product.img} />
                <Card.Body>
                    <Card.Title>{this.props.product.product_title}</Card.Title>
                    <Card.Text>
                        <Row>
                            Category: {this.props.product.category.category_title}
                        </Row>
                        <Row>
                            Price: {this.props.product.price} Eur
                        </Row>
                        <Row>
                            Quantity: {this.props.product.total} units
                        </Row>
                        <Row>
                            Price: {this.props.product.price} Eur
                        </Row>
                        <Row>
                            {this.props.product.description}
                        </Row>
                    </Card.Text>
                    <Link to={link} class="btn btn-info">More...</Link>
                </Card.Body>
            </Card>
        )
    }
}


export default Product;