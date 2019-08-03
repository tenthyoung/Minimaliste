import React, { Component } from 'react';
import './CartItem.css';

class CartItem extends Component {
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

    delete = () => {
        alert('are you sure? ');
        alert('are you really sure?');
    }

    render() {
        return (
            <div className="CartItem columns">
                <div className='column is-one-quarter'>
                    <img className='CartItem-thumbnail' src={process.env.PUBLIC_URL + '/images/baby.jpeg'} />
                </div>
                <div className='column is-two-quarter'>
                    <div className="CartItem-info">
                        <div>
                            <h2 className="CartItem-title ">Baby</h2>
                            <p className="CartItem-price">$200</p>
                            <p className="CartItem-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ad ipsa repudiandae odio tempora libero!</p>
                        </div>
                        <a className="CartItem-delete button is-danger is-small" onClick={this.delete}>Delete</a>
                    </div>
                </div>
                <div className="column is-one-quarter">
                    <div className="CartItem-quantity-container">
                        <p className="CartItem-total-price">Total: $200</p>
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