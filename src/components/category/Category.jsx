import React, {Component} from 'react';
import './category.scss';
import Product from "../product/Product";
import Spinner from "react-bootstrap/Spinner";

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        let categoryId = this.props.match.params.categoryId;
        fetch("http://skelbimai.test/api/products/category/" + categoryId)
            .then(response => response.json())
            .then(data => {
                    this.setState({
                        products: data
                    });
                }
            );
    }

    render() {
        if (this.state.products.data) {
            let productsData = this.state.products.data.map(item => <Product product={item}/>);
            return (
                <div>
                    {productsData}
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


export default Category;