import React, {Component} from 'react';
import './oneProduct.scss';
import Product from "../product/Product";
import Spinner from "react-bootstrap/Spinner";
import Link from "react-router-dom/es/Link";
import Row from "react-bootstrap/Row";

class OneProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: []
        }
    }

    componentDidMount() {
        let productId = this.props.match.params.id;
        console.log(productId)
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
        let link = `/order/form/${this.props.id}`;
        if (this.state.product.data) {
            let product = <Product product={this.state.product.data} />;
            return (
                <div>
                    <Row>
                        {product}
                    </Row>
                    <Row>
                        <Link to={link} class="btn btn-info">Buy</Link>
                    </Row>

                </div>

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


export default OneProduct;