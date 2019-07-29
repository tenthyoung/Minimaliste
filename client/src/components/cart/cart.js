import react from 'react';
class Shoppingcart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cart: [{
                id: 1,
                itemName: 'testitem',
                quantity: 1
            }]
        }
    }
    componentDidMount() {
        // connect to express server to get shopping cart

         this.setState({ cart: }) 
        //  once you get data from the server update shopping cart state
    }
    handleUpdate = (itemid, quantity) => {
        var Shoppingcart = [...this.state.cart];
        for (var i = 0; i < Shoppingcart.length; i++) {
            if (Shoppingcart[i].id === itemid) {
               Shoppingcart[i].quantity = quantity
                this.setState({ cart: Shoppingcart })
            }
        
    }
    handleDelete = (itemid) => {
        var Shoppingcart = [...this.state.cart];
        for (var i = 0; i < Shoppingcart.length; i++) {
            if (Shoppingcart[i].id === itemid) {
                Shoppingcart.splice(i, 1)
                this.setState({ cart: Shoppingcart })
            }
        }
    }
    handleAddToCart = (item) => {
        var Shoppingcart = [...this.state.cart];
        Shoppingcart.push(item)
        this.setState({ cart: Shoppingcart })
    }
    render() {
        return (
            <h1>
                Shoppingcart
       </h1>
        )
    }
}