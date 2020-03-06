import React, {Component} from 'react';
import './main.scss';
import Category from "../category/Category";
import Product from "../product/Product";
import Spinner from "react-bootstrap/Spinner";
import OneProduct from "../oneProduct/OneProduct";

class Main extends Component {
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
        // console.log(this.props.match.params)
        if (this.props.match.params.categoryId) {
            let categoryData = <Category categoryId={this.props.match.params.categoryId}  />;
            return (
                <main>
                    {categoryData}
                </main>
            )
        } else if(this.props.match.params.id) {
            let productData = <OneProduct id={this.props.match.params.id}/>;

            return (
                <main>
                    {productData}
                </main>
            )
        } else if(this.state.products.data) {
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


export default Main;