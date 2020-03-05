import React, {Component} from 'react';
import './main.scss';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        fetch("http://skate.test/api/products")
            .then(response => response.json())
            .then(data => {
                    this.setState({
                        products: data
                    });
                    console.log(this.state.products);
                }
            );
    }

    render() {
        return (
            <main>Main</main>
        )
    }
}


export default Main;