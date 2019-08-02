import React, { Component } from 'react';
import style from './Category.module.css';
import Listing from "../../components/Listing/Listing";
import productArray from '../../productsArray';

class Category extends Component {
    
    render() {
        const routeName = this.props.match.params.category;
        const productsInCategory = productArray.filter((product) => product.category === routeName)
        
        const listings = (
            <div className={style.Category}>
                {productsInCategory.map((listing) => {
                    return (
                        <Listing 
                            category={routeName}
                            productId={listing.productid}
                            image={process.env.PUBLIC_URL + "/images/" + listing.imageName}
                            alt={listing.productName}
                            productName={listing.productName}
                        />
                    )
                })}
            </div>
        )

        return (
            <div className="container">
                {routeName}
                {listings}
            </div>
        );
    }
}

export default Category;