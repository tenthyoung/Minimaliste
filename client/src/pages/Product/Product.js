import React, { Component } from 'react';
import SubNav from '../../components/SubNav/SubNav';
import './Product.css';
import productsArray from '../../productsArray';
import ProductReviews from '../../components/ProductReviews/ProductReviews';
import Review from "../../components/ProductReviews/Review/Review";

class Product extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            quantity: 1,
            isModalActive: false,
            reviewMessage: "No reviews to display",
            reviewName: "",
            reviewText: ""
        }

        this.productid = this.props.match.params.productid;
        this.productObj = productsArray.find(item => item.productid === this.productid);
        this.handleReviewSubmit = this.handleReviewSubmit.bind(this)
    }
    
    incrementQuantity = () => {
        this.setState({ quantity: this.state.quantity + 1 })
    }

    decrementQuantity = () => {
        if (this.state.quantity > 1) {
            this.setState({ quantity: this.state.quantity - 1 })
        }
    }

    handleAddToCart = evt => {
        this.props.addToCart(this.productid, this.state.quantity, this.productObj.price)
    }

    toggleModal = () => {
        this.setState({
            isModalActive: !this.state.isModalActive
        })
    }

    handleReviewSubmit(event) {
        event.preventDefault();
        const reviewName = this.refs.reviewName.value;
        const reviewText = this.refs.reviewText.value;

        this.setState({
            reviewMessage: "",
            reviewName: reviewName,
            reviewText: reviewText,
            isModalActive: !this.state.isModalActive,
        })
    }

    render() {
        const modalState = this.state.isModalActive ? "is-active" : "";
        const classNames = `modal ${modalState}`;
        let reviewButton = "Write a Review"

        let newReview = null;

        if (this.state.reviewText !== "") {
            newReview = <Review 
                name={this.state.reviewName}
                review={this.state.reviewText}
            />
        }

        if (this.state.reviewMessage !== "No reviews to display") {
            reviewButton = "Update Your Review"
        }   

        return (
            <div className="Product container">
                <SubNav categoryRoute={this.props.match.params.category} 
                        productRoute={this.productid} />

                <div className="Product-info-row columns">
                    <div className="Prdoduct-image-container column is-two-thirds">
                        <img className="Product-image" src={process.env.PUBLIC_URL + `/images/${this.productObj.imageName}`} alt={this.productObj.productName}/>
                    </div>
                    <div className="column">
                        <h2 className="Product-title">{this.productObj.productName}</h2>
                        <h3 className="Product-price">${this.productObj.price}</h3>
                        <p className="Product-description">
                            {this.productObj.description}
                        </p>
                        <div className="Product-quantity-container column is-half">

                        </div>
                        <div className="Product-quantity-container">
                            <span className="Product-quantity-arrow" onClick={this.decrementQuantity}>
                                <i className='uil uil-angle-left'></i>
                            </span>
                            <span className="Product-quantity-number"> {this.state.quantity} </span>
                            <span className="Product-quantity-arrow" onClick={this.incrementQuantity}>
                                <i className='uil uil-angle-right'></i>
                            </span>
                        </div>
                        <br/>
                        <button className="button is-warning" onClick={this.handleAddToCart}>Add to Cart</button>
                        {/* <a class="button is-warning" onClick={this.props.addToCart(this.productObj.productid, this.state.quantity, this.productObj.price)}>Add to Cart</a> */}
                    </div>
                </div>
                <div className={classNames}>
                    <div className="modal-background"></div>
                    <div className="modal-content">
                        <div style={{padding:"20px"}} className="has-background-white">
                            <div className="field">
                                <div className="control">
                                    <label className="label">Review Name</label>
                                    <input ref="reviewName" className="input" type="text" placeholder="What's the review bruh?"/>
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <label className="label">Review</label>
                                    <textarea ref="reviewText" className="textarea" placeholder="i.e. This is a terrible product" defaultValue={""} />
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <button onClick={this.handleReviewSubmit} type="submit" className="button is-warning">Submit</button>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <button onClick={() => this.toggleModal()} ref="closeModal" className="modal-close is-large" aria-label="close"></button>
                </div>
                <ProductReviews buttonText={reviewButton} click={() => this.toggleModal()}>
                    {this.state.reviewMessage}
                    {newReview}
                </ProductReviews>
            </div>
        );
    }
}

export default Product;
