import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Category from "./pages/Category/Category";
import Product from "./pages/Product/Product";
import Contact from "./pages/Contact/Contact";
import Cart from "./pages/Cart/Cart";
import './fontStyles.css'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       cart: []
    }
  }
  
  // addToCart = (productid, quantity, price) => {
  //   console.log('hi')
  //   console.log(productid);
  //   // console.log(quantity);
  //   // console.log(price);
  // }
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
    let filteredCartArr = newCartArr.filter(item => item.productid != productid)

    this.setState({ cart: [...filteredCartArr] });
  }


  render() {
    console.table('App.js: Cart state:',this.state.cart);

    return (
      <Router>
        <div>
          <Nav cartItems="" />


          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/" component={Home} />
            <Route exact path="/" component={Home} />

            <Route exact path="/login" component={Login} />
            <Route exact path="/cart" render={() => <Cart cart={this.state.cart} removeFromCart={this.removeFromCart}/>} />
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


