import React, { Component } from 'react';
import './Category.css';

class Category extends Component {
    
    render() {
        const category = this.props.match.params.category;
        return (
            <div className="Category">
                welcome to the {category} page
            </div>
        );
    }
}

export default Category;