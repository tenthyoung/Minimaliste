import React, { Component } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown/Dropdown";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
          <nav id="Nav" className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <Link id="logo" className="navbar-item" to="/">
                MINIMALISTE
              </Link>
              <button id="navbar-burger-btn" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </button>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">

              <div className="navbar-end">
                {/* <Link id="nav-search" className="navbar-item" to="/search">
                    SHOP
                </Link> */}
                <Dropdown 
                  name="SHOP"
                  removeDropdown={() => this.removeDropdown()}
                />
                {/* <Link id="nav-wishlist" className="navbar-item" to='/wishlist'>
                    <i className="far fa-heart" ></i>
                </Link> */}
                <Link id="nav-cart" className="navbar-item" to="/cart"> 
                    <i className="fas fa-shopping-cart" ></i>
                </Link>
                <Link id="nav-login" className="navbar-item" to="/login">
                    <i className="far fa-user"></i>
                      {/* LOGIN */}
                </Link>
              </div>
            </div>
          </nav>

    );
  }
}

export default Nav;