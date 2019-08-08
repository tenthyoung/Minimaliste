import React, { Component } from 'react';
import style from './ProductReview.module.css';
import productsArray from '../../productsArray';

class ProductReviews extends Component {
    state = {
        reviewArray: [],
        individualreview: ""
    }

    handleSubmit = (event) => {
        // let newReview = {
        //     username: 
        // }
    }

    render () {
        return (
            <div className="review-container">
                <div className="field">
                    <label className="label">Review Name</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="What's the review bruh?"/>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <label className="label">Write a Review</label>
                        <textarea className="textarea" placeholder="i.e. This is a terrible product" defaultValue={""} />
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <button className="button is-link">Submit</button>
                    </div>
                </div> 
            </div>
        )
    }
    
}

export default ProductReviews;
