import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {getProducts} from '../redux/productReducer'
import {connect} from 'react-redux'

class Products extends Component {

    componentDidMount() {
        this.props.getProducts()
    }

    add = prod_id => {
        this.props.addToCart(prod_id)
    }

    render() {
        const mappedProducts = this.props.products.map((val, i) => {
        return(
            <div key={i}>
    
                <h3>{val.prod_name}</h3>
                <p>{val.prod_desc}</p>
                <p>{val.prod_price}</p>
            </div>
        )
    })
    return (
        <div>
        <Link to='/'>Login/register</Link>
        <Link to='/CustomerAccount'><button> Customer Account</button></Link>
        <Link to='/VendorEdit'><button> Vendor Account</button></Link>
        <h1>All Products</h1>
        {mappedProducts}

        </div>
    )
}}
const mapStateToProps = state => {
    return {
        products: state.productReducer.products
    }
    }
    
    export default withRouter(connect(mapStateToProps, {
    getProducts
    })(Products));