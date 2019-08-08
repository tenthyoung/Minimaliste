import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './Home.css'

class Home extends Component {

  render() {

    return (
      <div className="Home">
        <div className="Home-inner-container container">

          <div id="section-a" className="columns">
            {/* Larg Image START */}
            <Link className="Home-item column is-two-thirds" to='/homedecor/'>
              <div className="overlay-container">
                <div className="Home-item row">
                  <img id='clockImage' src={process.env.PUBLIC_URL + '/images/clock.jpg'} alt="Clock" />
                  <div className="overlay">
                    <div className="text">Home Decor</div>
                  </div>
                </div>
              </div>
            </Link>
            {/* LARGE Image End */}

            {/* Right side column START */}
            <div id="Home-right-small-column" className="column">

              <Link className="overlay-container" to='/essentials/'>
                <div className="Home-item row" >
                  <img src={process.env.PUBLIC_URL + '/images/cactus.jpg'} alt="Cactus" />
                </div>
                <div className="overlay">
                  <div className="text">Essentials</div>
                </div>
              </Link>

              <Link className="overlay-container" to='/accessories/'>
                <div className="Home-item row">
                  <img src={process.env.PUBLIC_URL + '/images/basket.jpg'} alt="Basket" />
                </div>
                <div className="overlay">
                  <div className="text">Accessories</div>
                </div>
              </Link>
            </div>
            {/* Right side column END */}
          </div>

          <section id="Home-hero" className="hero">
            <div id="Home-hero-body" className="hero-body">
              <div id="Home-hero-text-container" className="container">
                <h1 id="Home-hero-title" className="title roboto">
                  Elegance redefined.
              </h1>
                <h2 id="Home-hero-subtitle" className="subtitle">
                  Clear your mind,
                  by reducing your clutter.
              </h2>
              </div>
            </div>
          </section>

          <div className="columns">
            <Link className="Home-item overlay-container column is-one-thirds" to='/furniture/'>
              <div>
                <img src={process.env.PUBLIC_URL + '/images/drawerTable.jpg'} alt="Small White Table with Drawer" />
              </div>
              <div className="overlay">
                <div className="text">Furniture</div>
              </div>
            </Link>
            <Link className="Home-item overlay-container column is-one-thirds" to='/pottery/'>
              <div>
                <img src={process.env.PUBLIC_URL + '/images/vase.jpg'} alt="White Vase" />
              </div>
              <div className="overlay">
                <div className="text">Pottery</div>
              </div>
            </Link>
            <Link className="Home-item overlay-container column is-one-thirds" to='/premium/'>
              <div>
                <img src={process.env.PUBLIC_URL + '/images/smalltable.jpg'} alt="Small Table" />
              </div>
              <div className="overlay">
                <div className="text">Premium</div>
              </div>
            </Link>
          </div>

          <section id="Home-hero2" className="hero">
            <div id="Home-hero-body2" className="hero-body">
              <div id="Home-hero-text-container2" className="container">
                <h1 id="Home-hero-title2" className="title roboto">
                  "I would buy them all again."
              </h1>
                <h2 id="Home-hero-subtitle2" className="subtitle">
                  -Benjamin Franklin, Founding Father
              </h2>
              </div>
            </div>
          </section>
        </div>

      </div>

    );
  }
}

export default Home;