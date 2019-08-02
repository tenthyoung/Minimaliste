import React from "react";
import style from "./Listing.module.css";

const Listing = (props) => {
    return (
        <div>
            <img src={props.image} alt={props.alt}/>
        </div>
    )
}

export default Listing;