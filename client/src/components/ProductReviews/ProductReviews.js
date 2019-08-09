import React from 'react';
import style from './ProductReview.module.css';
// import Review from "./Review/Review";

const ProductReviews = (props) => {
    return (
        <div id={style.reviewContainer}>
            <div id={style.reviews}>
                <h1 id={style.reviewHeader}>Reviews</h1>
                {props.children}
            </div>
            <button onClick={props.click} className="button is-warning">{props.buttonText}</button>
        </div>
    )
}

export default ProductReviews;
