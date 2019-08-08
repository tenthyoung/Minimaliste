import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../../components/CartItem/CartItem'
import './Cart.css';

class Cart extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             totalBill: 0,
             firstTime: false
        }
    }

    render() {
        return (
            <div className="Cart">
                <div className="container">
                    <h1 className='Cart-title roboto letter-spacing '>CART</h1>


                    {this.props.cart.map(item => {
                        return <CartItem productid={item.productid} 
                                        quantity={item.quantity} 
                                        price={item.price} key={item.productid} 
                                        removeFromCart={this.props.removeFromCart} 
                                        updateQuantity={this.props.updateQuantity} 
                                        />
                    })}

                    {this.props.cart.length === 0 ? <p>Oh no! Your cart is empty! Please add items.</p> :
                        <div>
                            <div className="CartItem columns">
                                <div className='column is-one-quarter'>
                                    <img className='CartItem-thumbnail' src="" alt="" />
                                </div>
                                <div className='column is-two-quarter'>
                                </div>
                                <div className="column is-one-quarter">
                                    <div className="CartItem-quantity-container">
                                        <p className="CartItem-total-price">Total: ${this.props.totalBill}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="CartItem columns">
                                <div className='column is-one-quarter'></div>
                                <div className='column is-two-quarter'></div>
                                <div className="column is-one-quarter">
                                    <div className="CartItem-quantity-container">
                                    <Link to="/checkout" id="proceedToCheckoutBtn" className="button is-warning is-medium">Checkout <i className='uil uil-angle-right'></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default Cart;