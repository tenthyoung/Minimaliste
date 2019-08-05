import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Category from "./pages/Category/Category";
import Product from "./pages/Product/Product";
import Checkout from "./pages/Checkout/Checkout";
import Cart from "./pages/Cart/Cart";
import './fontStyles.css'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       cart: [],
       totalBill: 0
    }
  }
  
  addToCart = (productid, quantity, price) => {
    let newCartArr = [...this.state.cart]
    let newCartItem = { productid, quantity, price}
    let isItemAlreadyInCart = false;
    let indexOfItemThatIsAlreadyInCart = -1;

    for( let i = 0 ; i < newCartArr.length ; i++ ) {
      if (newCartArr[i].productid === newCartItem.productid) {
        isItemAlreadyInCart = true;
        indexOfItemThatIsAlreadyInCart = i;
        break;
      }
    }

    if (isItemAlreadyInCart === true) {
      newCartArr[indexOfItemThatIsAlreadyInCart].quantity = newCartItem.quantity;
      newCartArr[indexOfItemThatIsAlreadyInCart].price = newCartItem.price;
    } else {
      newCartArr.push(newCartItem);
    }

    this.setState({ cart: [...newCartArr] });
  }

  removeFromCart = (productid) => {
    let newCartArr = [...this.state.cart]
    let filteredCartArr = newCartArr.filter(item => item.productid !== productid)

    this.setState({ cart: [...filteredCartArr] });
  }

  updateQuantity = (productid, newQuantity) => {
    let newCartArr = [...this.state.cart];
    for (let i = 0 ; i < newCartArr.length ; i++ ) {
      if (newCartArr[i].productid === productid) {
        newCartArr[i].quantity = newQuantity;
      }
    }

    this.setState({ cart: [...newCartArr] }, this.calcTotalBill)
  }

  calcTotalBill = () => {
    let totalPricePerItemArray = this.state.cart.map(item => item.price * item.quantity)
    let newTotalBill = totalPricePerItemArray.reduce((a,b) => a + b, 0);

    this.setState({ totalBill: newTotalBill });
  }


  render() {
    console.table('App.js: Cart state:',this.state.cart);

    return (
      <Router>
        <div>
          <Nav cartItems="" />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/cart" render={() => <Cart cart={this.state.cart} 
                                                          removeFromCart={this.removeFromCart} 
                                                          updateQuantity={this.updateQuantity} 
                                                          calcTotalBill={this.calcTotalBill}
                                                          totalBill={this.state.totalBill} />} />
            
            <Route exact path="/checkout/" render={() => <Checkout totalBill={this.state.totalBill}/>} />
            <Route exact path="/:category/" render={routeProps => <Category {...routeProps} />} />
            <Route exact path="/:category/:productid" render={routeProps => <Product {...routeProps} addToCart={this.addToCart}/>} />
            <Route render={() => <h1>404! Page NOT FOUND</h1>} />
          </Switch>
          
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;


