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
              <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
                <div className="navbar-item has-dropdown is-hoverable">
                  <div className="navbar-dropdown">
                    <a className="navbar-item">
                      About
                    </a>
                    <a className="navbar-item">
                      Jobs
                    </a>
                    <a className="navbar-item">
                      Contact
                    </a>
                    <hr className="navbar-divider" />
                    <a className="navbar-item">
                      Report an issue
                    </a>
                  </div>
                </div>
              </div>
              <div className="navbar-end">
                <div id="nav-search" className="navbar-item">
                  <i class="fas fa-search"></i>
                </div>
                <div id="nav-wishlist" className="navbar-item">
                  <i className="far fa-heart" ></i>
                </div>
                <div id="nav-cart" className="navbar-item">
                  <i className="fas fa-shopping-cart" ></i>
                  {/* CART */}
                </div>
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