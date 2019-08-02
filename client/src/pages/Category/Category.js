import React, { Component } from 'react';
import './Category.css';
import Listing from "../../components/Listing/Listing";
import productArray from '../../productsArray';

class Category extends Component {
    
    render() {
        const routeCategory = this.props.match.params.category;
        console.log(productArray.Essentials);

        const test = productArray.Essentials.filter((product) => product.category === routeCategory)
        
        
        const listings = (
            <div>
                {test.map((listing) => {
                    return (
                        <Listing 
                            image={process.env.PUBLIC_URL + "/images/" + listing.imageName}
                            alt={listing.productName}
                        />
                    )
                })}
            </div>
        )

        return (
            <div className="Category container">
                {routeCategory}
                {listings}
            </div>
        );
    }
}

export default Category;