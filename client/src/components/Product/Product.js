import React, { Component } from 'react';
import './Product.css';

class Product extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             quantity: 0
        }
    }
    
    incrementQuantity = () => {
        this.setState({ quantity: this.state.quantity + 1 })
    }

    render() {
        const productid = this.props.match.params.productid;

        return (
            <div className="Product container">
                <div className="Product-info-row columns">
                    <div className="Prdoduct-image-container column is-two-thirds">
                        <img className="Product-image" src="https://depot.mikado-themes.com/wp-content/uploads/2017/01/h1-product-1-1024x1024.jpg" />
                    </div>
                    <div className="column">
                        <h2 className="Product-title">{productid}. Premium White Chair</h2>
                        <h3 className="Product-price">$300</h3>
                        <p className="Product-description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam laborum minus itaque exercitationem voluptates, beatae cumque ratione molestias aspernatur! Temporibus!
                        </p>
                        <div className="Product-quantity-container column is-half">

                        </div>
                        <button onClick={this.incrementQuantity}>Quantity: {this.state.quantity} </button>
                        <button></button>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;