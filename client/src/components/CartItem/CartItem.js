import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import productsArray from '../../productsArray';
import './CartItem.css';

class CartItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            quantity: this.props.quantity,
            price: this.props.price,
            totalPrice: this.props.price*this.props.quantity
        }

        this.cartItemObj = productsArray.find(item => {
            return item.productid === this.props.productid;
        })
    }

    incrementQuantity = () => {
        this.setState({ quantity: this.state.quantity + 1 }, this.changeTotalPrice)

    }

    decrementQuantity = () => {
        if (this.state.quantity > 1) {
            this.setState({ quantity: this.state.quantity - 1}, this.changeTotalPrice)
        }
    }

    changeTotalPrice = () => {
        let newTotalPrice = this.state.quantity * this.props.price;
        this.setState({totalPrice: newTotalPrice});
        this.props.updateQuantity(this.cartItemObj.productid, this.state.quantity);

    }

    handleRemoveFromCart = (evt) => {
        this.props.removeFromCart(this.cartItemObj.productid);
    }

    render() {
        return (
            <div className="CartItem columns">
                <div className='column is-one-quarter'>
                    <img className='CartItem-thumbnail' src={process.env.PUBLIC_URL + '/images/' + this.cartItemObj.imageName } alt={this.cartItemObj.productName} />
                </div>
                <div className='column is-two-quarter'>
                    <div className="CartItem-info">
                        <div>
                            <h2 className="CartItem-title "> <Link className="CartItem-link" to={`/${this.cartItemObj.category}/${this.cartItemObj.productid}`}>{this.cartItemObj.productName}</Link></h2>
                            <p className="CartItem-price">${this.cartItemObj.price.toString()}</p>
                            <p className="CartItem-description">{this.cartItemObj.description}</p>
                        </div>
                        <button className="CartItem-delete button is-danger is-small" onClick={this.handleRemoveFromCart}>Delete</button>
                    </div>
                </div>
                <div className="column is-one-quarter">
                    <div className="CartItem-quantity-container">
                        <p className="CartItem-total-price">Price: ${this.state.totalPrice}</p>
                        <span className="CartItem-quantity-arrow" onClick={this.decrementQuantity}>
                            <i className='uil uil-angle-left'></i>
                        </span>
                        <span className="CartItem-quantity-number"> {this.state.quantity} </span>
                        <span className="CartItem-quantity-arrow" onClick={this.incrementQuantity}>
                            <i className='uil uil-angle-right'></i>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartItem;