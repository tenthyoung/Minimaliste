import React, { Component } from 'react';
import './Product.css';
import productsArray from '../../productsArray';

class Product extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             quantity: 1
        }
    }
    
    incrementQuantity = () => {
        this.setState({ quantity: this.state.quantity + 1 })
    }

    decrementQuantity = () => {
        if (this.state.quantity > 1) {
            this.setState({ quantity: this.state.quantity - 1 })
        }
    }

    render() {
        const productid = this.props.match.params.productid;
        let productObj = productsArray.find(item => item.productid === productid)
        console.log(productObj.imageName);

        return (
            <div className="Product container Product-container">
                <div className="Product-info-row columns">
                    <div className="Prdoduct-image-container column is-two-thirds">
                        <img className="Product-image" src={process.env.PUBLIC_URL + `/images/${productObj.imageName}`}/>
                    </div>
                    <div className="column">
                        <h2 className="Product-title">{productObj.productName}</h2>
                        <h3 className="Product-price">${productObj.price}</h3>
                        <p className="Product-description">
                            {productObj.description}
                        </p>
                        <div className="Product-quantity-container column is-half">

                        </div>
                        <div className="Product-quantity-container">
                            <span className="Product-quantity-arrow" onClick={this.decrementQuantity}>
                                <i className='uil uil-angle-left'></i>
                            </span>
                            <span className="Product-quantity-number"> {this.state.quantity} </span>
                            <span className="Product-quantity-arrow" onClick={this.incrementQuantity}>
                                <i className='uil uil-angle-right'></i>
                            </span>
                        </div>
                        <br/>
                        <a class="button">Add to Cart</a>

                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;