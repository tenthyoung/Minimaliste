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
              <a id="brand" className="navbar-item letter-spacing" href="/">
                IKEA
              </a>
              <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
                <a className="navbar-item">
                  Home
                </a>
                <a className="navbar-item">
                  Documentation
                </a>
                <div className="navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link">
                    More
                  </a>
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
                <div className="navbar-item">
                  <div className="buttons">
                    <a className="button is-primary">
                      <strong>Sign up</strong>
                    </a>
                    <a className="button is-light">
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>

    );
  }
}

export default Nav;


{/* <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
<Link className="navbar-brand" to="/">
  Google Books
</Link>
<button
  onClick={this.toggleNav}
  className="navbar-toggler"
  data-toggle="collapse"
  data-target="#navbarNav"
  aria-controls="navbarNav"
  aria-expanded="false"
  aria-label="Toggle navigation"
>
  <span className="navbar-toggler-icon" />
</button>
<div className={`${this.state.open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
  <ul className="navbar-nav">
    <li className="nav-item">
      <Link
        onClick={this.toggleNav}
        className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
        to="/"
      >
        Search
      </Link>
    </li>
    <li className="nav-item">
      <Link
        onClick={this.toggleNav}
        className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
        to="/saved"
      >
        Saved
      </Link>
    </li>
  </ul>
</div>
</nav> */}