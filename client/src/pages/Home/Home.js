import React, { Component } from "react";
import {Link} from 'react-router-dom';
import './Home.css'

class Home extends Component {

  render() {
    
    return (
      <div className="Home">

        <div className="columns">
          <div className="Home-item column is-two-thirds">
              <Link className="Home-item row" to='/clocks/'>
                <img className="zoom" src={process.env.PUBLIC_URL + '/images/clock.jpg'} alt="Brass Clock" />
              </Link>
          </div>
          <div id="Home-right-small-column" className="column">
              <Link className="Home-item row" to='/baskets/1'>
                  <img src={process.env.PUBLIC_URL + '/images/basket.jpg'} alt="Brass Clock" />
              </Link>
              <div className="Home-item row">
              <Link className="Home-item row" to='/plants/'>
                <img src={process.env.PUBLIC_URL + '/images/cactus.jpg'} alt="Brass Clock" />
              </Link>
              </div>
          </div>
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
          <div className="Home-item column is-one-thirds">
            <img src={process.env.PUBLIC_URL + '/images/lamp.jpg'} alt="Brass Clock" />
          </div>
          <div className="Home-item column is-one-thirds">
            <img src={process.env.PUBLIC_URL + '/images/mini-table.jpg'} alt="Brass Clock" />
          </div>
          <div className="Home-item column is-one-thirds">
            <img src={process.env.PUBLIC_URL + '/images/cup.jpg'} alt="Brass Clock" />
          </div>
        </div>

        <section id="Home-hero" className="hero">
          <div id="Home-hero-body" className="hero-body">
            <div id="Home-hero-text-container" className="container">
              <h1 id="Home-hero-title" className="title roboto">
                  "I would buy them all again."
              </h1>
              <h2 id="Home-hero-subtitle" className="subtitle">
                  -Sharona, Loyal Customer
              </h2>
            </div>
          </div>
        </section>

        <div className="columns">
          <div className="column " style={{"margin": "0 auto"}}>
            <img src={process.env.PUBLIC_URL + '/images/image-asset.jpeg'} alt="Brass Clock" />
          </div>
        </div>
      </div>

    );
  }
}

export default Home;