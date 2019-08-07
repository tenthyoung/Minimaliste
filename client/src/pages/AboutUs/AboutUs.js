import React, { Component } from "react";
import './AboutUs.css';
import { Link } from 'react-router-dom';

import { NONAME } from "dns";

class AboutUs extends Component {

    render() {

        return (
            <div className="AboutUs container">
                <div className="AboutUs-row row">
                    <div className="columns">
                    <div className="column">
                            <div className="our - team">
                                <div className="picture">
                                    <img className="img - fluid biography" src="../../../images/Izzy.png" />
                                </div>
                                <div className="team - content">
                                    <h3 className="name">Izzy Young</h3>
                                    <h4 className="title">Web Developer</h4>
                                </div>
                                {/* <ul className="social">
                                    <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-facebook" aria-hidden="true"></a></li>
                                    <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-twitter" aria-hidden="true"></a></li>
                                    <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-google-plus" aria-hidden="true"></a></li>
                                    <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-linkedin" aria-hidden="true"></a></li>
                                </ul> */}
                            </div>
                        </div>
                        <div className="column">
                            <div className="our - team">
                                <div className="picture">
                                <img className="img - fluid biography" src="../../../images/Mike.png" />
                                </div>
                                <div className="team - content">
                                    <h3 className="name">Mike Slaby</h3>
                                    <h4 className="title">Web Developer</h4>
                                </div>
                                {/* <ul className="social">
                                    <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-facebook" aria-hidden="true"></a></li>
                                    <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-twitter" aria-hidden="true"></a></li>
                                    <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-google-plus" aria-hidden="true"></a></li>
                                    <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-linkedin" aria-hidden="true"></a></li>
                                </ul> */}
                            </div>
                        </div>

                        <div className="column">
                            <div className="our - team">
                                <div className="picture">
                                    <img className="img - fluid biography" src="https://picsum.photos/130/130?image=839" />
                                </div>
                                <div className="team - content">
                                    <h3 className="name">Lehna</h3>
                                    <h4 className="title">Web Developer</h4>
                                </div>
                                {/* <ul className="social">
                                    <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-facebook" aria-hidden="true"></a></li>
                                    <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-twitter" aria-hidden="true"></a></li>
                                    <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-google-plus" aria-hidden="true"></a></li>
                                    <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-linkedin" aria-hidden="true"></a></li>
                                </ul> */}
                            </div>
                        </div>
                        <div className="column">
                            <div className="our - team">
                                <div className="picture">
                                    <img className="img - fluid biography" src="https://picsum.photos/130/130?image=856" />
                                </div>
                                <div className="team - content">
                                    <h3 className="name">Andy Lorenzana</h3>
                                    <h4 className="title">Web Developer</h4>
                                </div>
                                {/* <ul className="social">
                                    <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-facebook" aria-hidden="true"></a></li>
                                    <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-twitter" aria-hidden="true"></a></li>
                                    <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-google-plus" aria-hidden="true"></a></li>
                                    <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-linkedin" aria-hidden="true"></a></li>
                                </ul> */}
                            </div>
                        </div>
                        <div className="column">
                            <div classNamed="our - team">
                                <div className="picture">
                                <img className="img - fluid biography" src="../../../images/headshot.png" />
                                </div>
                                <div className="team - content">
                                    <h3 className="name">Cody Drew</h3>
                                    <h4 className="title">Web Developer</h4>
                                </div>
                                {/* <ul className="social">
                                    <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-facebook" aria-hidden="true"></a></li>
                                    <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-twitter" aria-hidden="true"></a></li>
                                    <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-google-plus" aria-hidden="true"></a></li>
                                    <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-linkedin" aria-hidden="true"></a></li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                );
        }
    }
        
        export default AboutUs;
