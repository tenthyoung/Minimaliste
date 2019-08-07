import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SubNav.css';
import productsArray from '../../productsArray';

class SubNav extends Component {

    render() {
        const categoryRoute = this.props.categoryRoute;

        function setTitle(category) {
            if (category === 'homedecor') {
                return 'Home Decor'
            } else {
                return category.charAt(0).toUpperCase() + category.slice(1);
            }
        }

        let ifOnCategoryPageThenNoProductTitleDisplay = () => {
            if ( this.props.productRoute === "") {
                return "";
            } else {
                const currentProductObj = productsArray.find(item => item.productid === this.props.productRoute);
                return currentProductObj.productName;
            }
        }

        return (
            <div className="SubNav">
                <div className="">
                    <Link to={`/${categoryRoute}`} className="SubNav-title roboto">
                        {setTitle(categoryRoute)}
                    </Link>
                    <i className='uil uil-angle-right-b'></i>
                    <span className="SubNav-product-title roboto">
                        {ifOnCategoryPageThenNoProductTitleDisplay()}
                    </span>
                </div>


            </div>
        );
    }
}

export default SubNav;