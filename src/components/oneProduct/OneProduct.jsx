import React, {Component} from 'react';
import './oneProduct.scss';
import Product from "../product/Product";
import Spinner from "react-bootstrap/Spinner";

class OneProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: []
        }
    }

    componentDidMount() {
        let productId = this.props.id;
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
        let link = `/order/form`;
        if (this.state.product.data) {
            let product = <Product product={this.state.product.data} />;
            return (
                <div>
                    {product}
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