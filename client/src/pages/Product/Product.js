import React, { Component } from 'react';
import SubNav from '../../components/SubNav/SubNav';
import './Product.css';
import productsArray from '../../productsArray';
import ProductReviews from '../../components/ProductReviews/ProductReviews'

class Product extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            quantity: 1
        }

        this.productid = this.props.match.params.productid;
        this.productObj = productsArray.find(item => item.productid === this.productid);


    }
    
    incrementQuantity = () => {
        this.setState({ quantity: this.state.quantity + 1 })
    }

    decrementQuantity = () => {
        if (this.state.quantity > 1) {
            this.setState({ quantity: this.state.quantity - 1 })
        }
    }

    handleAddToCart = evt => {
        this.props.addToCart(this.productid, this.state.quantity, this.productObj.price)
    }

    render() {
        return (

            <div className="Product container">
                <SubNav categoryRoute={this.props.match.params.category} 
                        productRoute={this.productid} />

                <div className="Product-info-row columns">
                    <div className="Prdoduct-image-container column is-two-thirds">
                        <img className="Product-image" src={process.env.PUBLIC_URL + `/images/${this.productObj.imageName}`} alt={this.productObj.productName}/>
                    </div>
                    <div className="column">
                        <h2 className="Product-title">{this.productObj.productName}</h2>
                        <h3 className="Product-price">${this.productObj.price}</h3>
                        <p className="Product-description">
                            {this.productObj.description}
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
                        <button className="button is-warning" onClick={this.handleAddToCart}>Add to Cart</button>
                        {/* <a class="button is-warning" onClick={this.props.addToCart(this.productObj.productid, this.state.quantity, this.productObj.price)}>Add to Cart</a> */}
                    </div>
                </div>
                {/* <ProductReviews />  */}
            </div>
        );
    }
}

export default Product;
