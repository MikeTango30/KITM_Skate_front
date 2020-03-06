import React, {Component} from 'react';
import './product.scss';
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

class Product extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const productData = <Product
            product_title={this.props.product.product_title}
            description={this.props.product.description}
            total={this.props.product.total}
            proce={this.props.product.price}
            img={this.props.product.img}
            category={this.props.product.category.category_title}/>;
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
                    <Button variant="primary">More...</Button>
                </Card.Body>
            </Card>
        )
    }
}


export default Product;