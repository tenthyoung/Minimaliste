import React from "react";
import style from "./Listing.module.css";
import { Link } from 'react-router-dom';
// import Radium from "radium";

const Listing = props => {
    return (
        <Link to={`/${props.category}/${props.productId}`}>
            <div className="overlay-container">
                <div className={style.imageContainer}>
                    <img
                        id={props.productid === '19243y7' ? 'brassClock' : ''}
                        className={style.product}
                        src={props.image}
                        alt={props.alt}
                        onClick={props.click}
                    />
                    <div className="overlay">
                        <div className="text">{props.alt}</div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

// export default Radium(Listing);
export default Listing;
