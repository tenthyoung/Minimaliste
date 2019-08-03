import React, { Component } from 'react';
import style from './Category.module.css';
import Listing from "../../components/Listing/Listing";
import productArray from '../../productsArray';

class Category extends Component {

    makeProperHeader = (routeName) => {
        let header = "";

        if (routeName === 'homedecor') {
            header = 'HOME DECOR'
        } else {
            header = routeName.toUpperCase();
        }

        return header;
    }
    
    render() {
        const routeName = this.props.match.params.category;
        const productsInCategory = productArray.filter((product) => product.category === routeName)

        const header = (
            <div className={style.header}>
                {this.makeProperHeader(routeName)}
            </div>
        )

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

        console.log(routeName);

        return (
            <div className="container">
                {header}
                {listings}
            </div>
        );
    }
}

export default Category;