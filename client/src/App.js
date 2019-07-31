import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Nav from "./components/Nav/Nav";
import Category from "./components/Category/Category";
import Product from "./components/Product/Product";
import './fontStyles.css'

function App() {
  return (
    <Router>
      <div>
        <Nav cartItems=""/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/:category/" render={routeProps => <Category {...routeProps} />} />   
          <Route exact path="/:category/:productid" render={routeProps => <Product {...routeProps} />} />
          <Route render={() => <h1>404! Page NOT FOUND</h1>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

