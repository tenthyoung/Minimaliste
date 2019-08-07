import React, { Component } from 'react';
import './Checkout.css';
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm';

class Checkout extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fullname: "",
            address: "",
            city: "",
            state: "",
            country: "",
            zipcode: "",
            addressSaved: false,
            paymentComplete: false
        }

        this.submitPayment = this.submitPayment.bind(this);
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        // this.props.addItem(this.state);
        this.setState({ addressSaved: !this.state.addressSaved });
    }

    handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value })
    }

    editAddress = evt => {
        this.setState({ addressSaved: !this.state.addressSaved });
    }

    displayTotalBill = () => {
        let totalBillwTax = this.props.totalBill * 1.08;
        let totalBillStr = totalBillwTax.toFixed(2).toString();

        return totalBillStr;
    }

    async submitPayment(ev) {
        console.log('hi')
        let {token} = await this.props.stripe.createToken({name: "Name"});
        let response = await fetch("/charge", {
          method: "POST",
          headers: {"Content-Type": "text/plain"},
          body: token.id
        });
      
        if (response.ok) console.log("Purchase Complete!")
        if (response.ok) this.setState({paymentComplete: true});

      }

    render() {
        if (this.state.complete) return <h1>Purchase Complete</h1>;

        return (
            <div className="Checkout">
                <div id="Checkout-form-container" className="container">
                    <h1 className='Checkout-title roboto letter-spacing'>SHIPPING ADDRESS</h1>

                    <form onSubmit={this.handleSubmit} className={this.state.addressSaved === false ? "" : "is-hidden"}>
                        <div className="Checkout-field-item">
                            <label className="field-label roboto" htmlFor='fullname'>Full Name</label>
                            <br />
                            <input
                                id='fullname'
                                className="Checkout-input input"
                                name='fullname'
                                value={this.state.fullname}
                                onChange={this.handleChange}
                                placeholder='Full Name'
                            />
                        </div>
                        <div className="Checkout-field-item">
                            <label className="field-label" htmlFor='address'>Address</label>
                            <br />
                            <input
                                id='address'
                                className="Checkout-input input"
                                name='address'
                                value={this.state.address}
                                onChange={this.handleChange}
                                placeholder='Address'
                            />
                        </div>
                        <div id="cityStateRow" className="row columns is-mobile">
                            <div id='city-container' className="Checkout-field-item column is-one-third">
                                <label className="field-label" htmlFor='city'>City</label>
                                <br />
                                <input
                                    id='city'
                                    className="Checkout-input input city-input"
                                    name='city'
                                    value={this.state.city}
                                    onChange={this.handleChange}
                                    placeholder='City'
                                />
                            </div>
                            <div className="Checkout-field-item column">
                                <label className="field-label" htmlFor='state'>State</label>
                                <br />
                                <input
                                    id='state'
                                    className="Checkout-input input state-input"
                                    name='state'
                                    value={this.state.state}
                                    onChange={this.handleChange}
                                    placeholder='State'
                                />
                            </div>
                        </div>
                        <div id="countryStateRow" className="row columns is-mobile">
                            <div id='country-container' className="Checkout-field-item column is-one-third">
                                <label className="field-label" htmlFor='country'>Country</label>
                                <br />
                                <input
                                    id='country'
                                    className="Checkout-input input country-input"
                                    name='country'
                                    value={this.state.country}
                                    onChange={this.handleChange}
                                    placeholder='Country'
                                />
                            </div>
                            <div className="Checkout-field-item column">
                                <label className="field-label" htmlFor='zipcode'>Zip Code</label>
                                <br />
                                <input
                                    id='zipcode'
                                    className="Checkout-input input state-input"
                                    name='zipcode'
                                    value={this.state.zipcode}
                                    onChange={this.handleChange}
                                    placeholder='Zip Code'
                                />
                            </div>
                        </div>

                        <button className="button is-warning" onClick={this.saveAddress}>Save Address</button>

                    </form>

                    <div id="displayAddressContainerAfterSaved" className={this.state.addressSaved === true ? "" : "is-hidden"}>
                        <p id="addresseeName">{this.state.fullname}</p>
                        <p id="address">{this.state.address}, {this.state.state}, {this.state.country}, {this.state.zipcode}</p>
                        <button id="editAddressButton" className="button is-warning" onClick={this.editAddress}>Edit Address</button>
                    </div>

                    <hr className="style-one" />
                    <div id="CheckoutTotalBillContainer" >
                        <h1 className='Checkout-title roboto letter-spacing'>CREDIT CARD</h1>

                        <h1 className='Checkout-subtitle roboto letter-spacing'>Total Bill: ${this.displayTotalBill()}</h1>
                        {/* <CardElement /> */}
                        <CheckoutForm />
                    </div>
                       {/* <button id="payBill" className="button is-warning" onClick={this.submitPayment}>Finalize Payment</button> */}
                </div>
            </div>
        );
    }
}

export default Checkout;
