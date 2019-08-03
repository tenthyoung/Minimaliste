import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../../components/CartItem/CartItem'
import './Cart.css';

class Cart extends Component {
    render() {
        return (
            <div className="Cart">
                <div className="container">
                    <h1 className='Cart-title roboto letter-spacing '>CART</h1>


                    {this.props.cart.map(item => {
                        return <CartItem productid={item.productid} quantity={item.quantity} price={item.price} key={item.productid} removeFromCart={this.props.removeFromCart}/>
                    })}
                        
                    {this.props.cart.length === 0 ? <p>Oh no! Your cart is empty! Please add items.</p> : 
                    <Link to="/shipping" id="proceedToCheckoutBtn" className="button is-warning is-medium">Proceed to Checkout <i className='uil uil-angle-right'></i></Link>
                    }
                </div>
            </div>
        );
    }
}

export default Cart;