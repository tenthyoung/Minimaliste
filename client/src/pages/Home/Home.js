import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './Home.css'

class Home extends Component {

  render() {

    return (
      <div className="Home">
        <div className="columns">
          {/* Larg Image START */}
          <div className="Home-item column is-two-thirds">
            <div className="overlay-container">
              <Link className="Home-item row" to='/homedecor/'>
                <img className="" src={process.env.PUBLIC_URL + '/images/clock.jpg'} alt="Clock" />
                <div class="overlay">
                  <div class="text">Home Decor</div>
                </div>
              </Link>
            </div>
          </div>
          {/* LARGE Image End */}

          {/* Right side column START */}
          <div id="Home-right-small-column" className="column">

            <div className="overlay-container">
              <Link className="Home-item row" to='/essentials/'>
                <img src={process.env.PUBLIC_URL + '/images/basket.jpg'} alt="Brass Clock" />
              </Link>
              <div class="overlay">
                <div class="text">Essentials</div>
              </div>
            </div>

            <div className="overlay-container">
              <Link className="Home-item row" to='/accessories/'>
                <img src={process.env.PUBLIC_URL + '/images/cactus.jpg'} alt="Brass Clock" />
              </Link>
              <div class="overlay">
                <div class="text">Accessories</div>
              </div>
            </div>
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
          <div className="Home-item overlay-container column is-one-thirds">
            <Link className="" to='/furniture/' >
              <img src={process.env.PUBLIC_URL + '/images/chair.jpg'} alt="White Chair" />
            </Link>
            <div class="overlay">
              <div class="text">Furniture</div>
            </div>
          </div>
          <div className="Home-item overlay-container column is-one-thirds">
            <Link className="" to='/pottery/'>
              <img src={process.env.PUBLIC_URL + '/images/vase.jpg'} alt="Brass Clock" />
            </Link>
            <div class="overlay">
              <div class="text">Pottery</div>
            </div>
          </div>
          <div className="Home-item overlay-container column is-one-thirds">
            <Link to='/' className="">
              <img src={process.env.PUBLIC_URL + '/images/rocking-table.jpg'} alt="Brass Clock" />
            </Link>
            <div class="overlay">
              <div class="text">Premium</div>
            </div>
          </div>
        </div>

        <section id="Home-hero" className="hero">
          <div id="Home-hero-body" className="hero-body">
            <div id="Home-hero-text-container" className="container">
              <h1 id="Home-hero-title" className="title roboto">
                "I would buy them all again."
              </h1>
              <h2 id="Home-hero-subtitle" className="subtitle">
                -Abraham Lincoln
              </h2>
            </div>
          </div>
        </section>

      </div>

    );
  }
}

export default Home;