import React, {Component} from 'react';
import './products.scss';
import OneProduct from "../oneProduct/OneProduct";
import Spinner from "react-bootstrap/Spinner";
import Product from "../product/Product";

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        fetch("http://skelbimai.test/api/products")
            .then(response => response.json())
            .then(data => {
                    this.setState({
                        products: data
                    });
                }
            );
    }

    render() {
        if(this.state.products.data) {
            let productsData = this.state.products.data.map(item => <Product product={item}/>);

            return (
                <main>
                    {productsData}
                </main>
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

export default Products;