import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import './CheckoutForm.css'

class CheckoutForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
        complete: false
    }

    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    let {token} = await this.props.stripe.createToken({name: "Name"});
    let paymentInfo = {
      id: token.id,
      totalBill: this.props.totalBill
    }

    let response = await fetch("/api/users/charge", {
      method: "POST",
      // headers: {"Content-Type": "text/plain"},
      headers: {"Content-Type": "application/json"},
      // body: token.id,
      body: JSON.stringify(paymentInfo),
    });
  
    if (response.ok) console.log("Purchase Complete!")
    if (response.ok) this.setState({ complete: true });
  }

  render() {
    if (this.state.complete) {
      return (
          <div id="paymentSuccessNotification" className="notification is-success">
            Your payment was successfully charged.
          </div>
      );
    }

    return (        
      <div className="checkout">
        <CardElement />
        <br/>
        <br/>
        
        
        <button id="payBill" className="button is-warning" onClick={this.submit}>Finalize Payment</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);