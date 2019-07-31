import React, { Component } from "react";
import './Home.css'

class Home extends Component {

  render() {
    return (
      <section className="hero">
        <div id="Hero-body" className="hero-body">
          <div className="container">
            <h1 className="title roboto">
              Hero title
            </h1>
            <h2 className="subtitle roboto">
              Hero subtitle
            </h2>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
