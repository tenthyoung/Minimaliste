import React, { Component } from 'react';
import style from './Category.module.css';
import Listing from "../../components/Listing/Listing";
import productArray from '../../productsArray';
import SubNav from '../../components/SubNav/SubNav';

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
                            key={listing.productid}
                        />
                    )
                })}
            </div>
        )


        return (
            <div className="container" style={{ "marginBottom": "40px" }}>
                <SubNav categoryRoute={routeName} productRoute=""/>

                {listings}
            </div>
        );
    }
}

export default Category;