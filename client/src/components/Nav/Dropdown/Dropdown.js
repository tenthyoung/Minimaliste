import React from "react";
import { Link } from "react-router-dom";

const Dropdown = (props) => {
    return (
        <div className="navbar-item has-dropdown is-hoverable">
            <div className="navbar-link">
                {props.name}
            </div>
            <div className="navbar-dropdown">
                <Link to="/cart" className="navbar-item" onClick={props.click}>
                    Accessories
                </Link>
                <Link to="/cart" className="navbar-item" onClick={props.click}>
                    Essentials
                </Link>
                <Link to="/cart" className="navbar-item" onClick={props.click}>
                    Furniture
                </Link>
                <Link to="/cart" className="navbar-item" onClick={props.click}>
                    Home Decor
                </Link>
                <Link to="/cart" className="navbar-item" onClick={props.click}>
                    Pottery
                </Link>
                <Link to="/cart" className="navbar-item" onClick={props.click}>
                    Premium
                </Link>
                <hr className="navbar-divider" />
                <Link to="/cart" className="navbar-item" onClick={props.click}>
                    About Us
                </Link>
            </div>
        </div>



    )
}

export default Dropdown;