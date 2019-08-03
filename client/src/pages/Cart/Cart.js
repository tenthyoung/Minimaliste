import React, { Component } from 'react';
import CartItem from '../../components/CartItem/CartItem'
import './Cart.css';

class Cart extends Component {
    render() {
        return (
            <div className="Cart">
                <div className="container">
                    <h1 className='Cart-title roboto letter-spacing '>CART</h1>

                    <CartItem />

                    <a id="proceedToCheckoutBtn" className="button is-warning is-medium">Proceed to Checkout <i className='uil uil-angle-right'></i></a>
                </div>
            </div>
        );
    }
}

export default Cart;