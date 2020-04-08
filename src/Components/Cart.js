import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart, clearCart, getCart } from '../redux/cartReducer';
import { Link } from 'react-router-dom';
// import './Cart.css';

class Cart extends Component {
    
    componentDidMount() {
        this.props.getCart()
    }

    completePurchase = () => {
        alert('Thanks for the caps! Come back soon!')
        this.props.clearCart()
    }
    
    render() {
        return (
            <div>
                <div>
                    <Link to='/items'><button>Continue Shopping</button></Link>
                </div>
                <div>
                {this.props.cart.map((e, i) => {
                    return (
                        <div>
                            <div>
                                {/* <div>
                                    <img src={e.prod_img} alt='prod Image' style={{maxWidth: '200px'}} />
                                </div> */}
                                <div>
                                    <span>{e.prod_name}</span>
                                    <span><span className='normal-text'>$</span>{`${e.prod_price}`}</span>
                                    <span>{e.prod_desc}</span>
                                </div>
                            </div>
                            <div>
                                <button onClick={() => this.props.removeFromCart(e.prod_id)}>Remove From Cart</button>
                            </div>
                        </div>
                    )
                })}
                </div>
                <div>
                    <Link to='/'><button onClick={this.completePurchase}>Complete Your Purchase (<span className='normal-text'>$</span>{`${this.props.cart.reduce((t, e) => t += e.prod_price, 0)})`}</button></Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    cart: reduxState.cartReducer.cart
})

export default connect(mapStateToProps, {
    removeFromCart,
    clearCart,
    getCart
})(Cart)