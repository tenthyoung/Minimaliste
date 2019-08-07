import React, { Component } from 'react';
import './Checkout.css';

class Checkout extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fullname: "",
            address: "",
            city: "",
            state: "",
            country: "",
            zipcode: ""
        }
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        // this.props.addItem(this.state);
        this.setState({
            fullname: "",
            address: "",
            city: "",
            state: "",
            country: "",
            zipcode: ""
        });
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    render() {
        return (
            <div className="Checkout">
                <div className="container">
                    <h1 className='Cart-title roboto letter-spacing'>CHECK OUT</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="Cart-field-item">
                            <label className="field-label" htmlFor='fullname'>Full Name </label>
                            <input
                                id='fullname'
                                className="Checkout-input input"
                                name='fullname'
                                value={this.state.fullname}
                                onChange={this.handleChange}
                            />
                        </div>
                        {/* <div className="Cart-field-item">
                            <label className="field-label" htmlFor='address'>Address </label>
                            <input
                                id='address'
                                className="Checkout-input input"
                                name='address'
                                value={this.state.address}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="Cart-field-item">
                            <label className="field-label" htmlFor='city'>City </label>
                            <input
                                id='city'
                                className="Checkout-input input"
                                name='city'
                                value={this.state.city}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="Cart-field-item">
                            <label className="field-label" htmlFor='state'>State </label>
                            <input
                                id='state'
                                className="Checkout-input input"
                                name='state'
                                value={this.state.state}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="Cart-field-item">
                            <label className="field-label" htmlFor='country'>Country </label>
                            <input
                                id='country'
                                className="Checkout-input input"
                                name='country'
                                value={this.state.country}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="Cart-field-item">
                            <label className="field-label" htmlFor='zipcode'>Zipcode </label>
                            <input
                                id='zipcode'
                                className="Checkout-input input"
                                name='zipcode'
                                value={this.state.zipcode}
                                onChange={this.handleChange}
                            />
                        </div> */}
                        <button class="button is-warning">Button</button>

                    </form>
                </div>
            </div>
        );
    }
}

export default Checkout;