import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Nav extends Component {
  state = {
    open: false,
    width: window.innerWidth
  };

  updateWidth = () => {
    const newState = { width: window.innerWidth };

    if (this.state.open && newState.width > 991) {
      newState.open = false;
    }

    this.setState(newState);
  };

  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {
    return (
          <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <a id="logo" className="navbar-item" href="/">
                MINIMALISTE
              </a>
              <button id="navbar-burger-btn" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </button>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-end">
                <Link id="nav-search" className="navbar-item" to="/search">
                    <i className="fas fa-search"></i>
                </Link>
                <Link id="nav-wishlist" className="navbar-item" to='/wishlist'>
                    <i className="far fa-heart" ></i>
                </Link>
                <Link id="nav-cart" className="navbar-item" to="/cart"> 
                    <i className="fas fa-shopping-cart" ></i>
                </Link>
                <Link id="nav-login" className="navbar-item" to="/login">
                    <i className="far fa-user"></i>
                      LOGIN
                </Link>

                
              </div>
            </div>
          </nav>

    );
  }
}

export default Nav;