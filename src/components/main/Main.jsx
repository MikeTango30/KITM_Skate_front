import React, {Component} from 'react';
import './main.scss';
import Product from "../product/Product";

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

        if (this.state.products.data) {
            let productsData = this.state.products.data.map(item => <Product product={item}/>);
            return (
                <div>
                    {productsData}
                </div>
            )
        } else {
            return (
                <div className='uil-ring-css' style={{transform : "scale(0.64)"}}>
                    <div />
                </div>
            )
        }
    }
}


export default Main;