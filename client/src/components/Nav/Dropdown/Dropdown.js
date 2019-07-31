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
                    Kitchen
                </Link>
                <Link to="/cart" className="navbar-item" onClick={props.click}>
                    Bedroom
                </Link>
                <Link to="/cart" className="navbar-item" onClick={props.click}>
                    Office
                </Link>
                <Link to="/cart" className="navbar-item" onClick={props.click}>
                    Misc
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