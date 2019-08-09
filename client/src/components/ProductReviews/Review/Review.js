import React from 'react';

const Review = (props) => {

    const reviewContainer = {
        border: "solid 2px gray",
        padding: "10px",
        marginTop: "10px",
        marginBottom: "10px",
        width: "500px"
    }

    return (
        <div style={reviewContainer}>
            <strong>{props.name}</strong>
            <p>{props.review}</p>
        </div>
    )
}

export default Review;
