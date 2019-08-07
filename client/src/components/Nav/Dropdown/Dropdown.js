import React from "react";
import './Dropdown.css'
import { Link } from "react-router-dom";

const Dropdown = (props) => {
    return (
        <div className="navbar-item has-dropdown is-hoverable">
            <div id="shopBtn" className="navbar-link is-arrowless">
                {props.name}
            </div>
            <div id="shopDropdown" className="navbar-dropdown">
                <Link to="/accessories/" className="navbar-item">
                    Accessories
                </Link>
                <Link to="/essentials/" className="navbar-item">
                    Essentials
                </Link>
                <Link to="/furniture/" className="navbar-item">
                    Furniture
                </Link>
                <Link to="/homedecor/" className="navbar-item">
                    Home Decor
                </Link>
                <Link to="/pottery/" className="navbar-item">
                    Pottery
                </Link>
                <Link to="/premium/" className="navbar-item">
                    Premium
                </Link>
                {/* <hr className="navbar-divider" />
                <Link to="/aboutus" className="navbar-item">
                    About Us
                </Link> */}
            </div>
        </div>
    )
}

export default Dropdown;