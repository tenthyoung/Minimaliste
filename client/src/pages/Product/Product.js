import React, { Component } from 'react';
import './Product.css'

class Product extends Component {

    render() {
        console.log(this.props)
        return (
            <div>
                <div>
  <section className="product">
    <div className="product__photo">
      <div className="photo-container">
        <div className="photo-main">
          <div className="controls">
            <i className="material-icons">share</i>
            <i className="material-icons">favorite_border</i>
          </div>
          <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537291846/codepen/delicious-apples/green-apple-with-slice.png" alt="green apple slice" />
        </div>
        <div className="photo-album">
          <ul>
            <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple" /></li>
            <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303532/codepen/delicious-apples/half-apple.png" alt="half apple" /></li>
            <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303160/codepen/delicious-apples/green-apple-flipped.png" alt="green apple" /></li>
            <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303708/codepen/delicious-apples/apple-top.png" alt="apple top" /></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="product__info">
      <div className="title">
        <h1>Delicious Apples</h1>
        <span>COD: 45999</span>
      </div>
      <div className="price">
        R$ <span>7.93</span>
      </div>
      <div className="variant">
        <h3>SELECT A COLOR</h3>
        <ul>
          <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple" /></li>
          <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302752/codepen/delicious-apples/yellow-apple.png" alt="yellow apple" /></li>
          <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302427/codepen/delicious-apples/orange-apple.png" alt="orange apple" /></li>
          <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png" alt="red apple" /></li>
        </ul>
      </div>
      <div className="description">
        <h3>BENEFITS</h3>
        <ul>
          <li>Apples are nutricious</li>
          <li>Apples may be good for weight loss</li>
          <li>Apples may be good for bone health</li>
          <li>They're linked to a lowest risk of diabetes</li>
        </ul>
      </div>
      <button className="buy--btn">ADD TO CART</button>
    </div>
  </section>
  <footer>
    <p>Design from <a href="https://dribbble.com/shots/5216438-Daily-UI-012">dribbble shot</a> of <a href="https://dribbble.com/rodrigorramos">Rodrigo Ramos</a></p>
  </footer>
</div>

            </div>
        )
    }
}

export default Product
import './Product.css';

class Product extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             quantity: 0
        }
    }
    
    incrementQuantity = () => {
        this.setState({ quantity: this.state.quantity + 1 })
    }

    render() {
        const productid = this.props.match.params.productid;

        return (
            <div className="Product container">
                <div className="Product-info-row columns">
                    <div className="Prdoduct-image-container column is-two-thirds">
                        <img className="Product-image" src="https://depot.mikado-themes.com/wp-content/uploads/2017/01/h1-product-1-1024x1024.jpg" />
                    </div>
                    <div className="column">
                        <h2 className="Product-title">{productid}. Premium White Chair</h2>
                        <h3 className="Product-price">$300</h3>
                        <p className="Product-description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam laborum minus itaque exercitationem voluptates, beatae cumque ratione molestias aspernatur! Temporibus!
                        </p>
                        <div className="Product-quantity-container column is-half">

                        </div>
                        <button onClick={this.incrementQuantity}>Quantity: {this.state.quantity} </button>
                        <button></button>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
