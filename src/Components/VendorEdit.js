import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {addProduct, updateState} from '../redux/productReducer'
require('dotenv').config()

class VendorEdit extends Component {

    constructor() {
        super();
        this.state = {
            prod_name: '',
            prod_desc: '',
            prod_price: '',
            prod_img: ''
        }
    }


    handleAddProduct() {
        this.props.addProduct(this.props.prod_name, this.props.prod_desc, this.props.prod_price)
        // .then(() => {
        //     window.reload()
        // })
        .catch(() => {
            console.log('error!!!!')
        })
    }



    render() {
        let product = {
            prod_name: this.state.product_name,
            prod_desc: this.state.product_desc,
            prod_price: this.state.product_price,
            prod_img: this.state.product_img
        }

        let widget 
        if(window.cloudinary) {
            widget = window.cloudinary.createUploadWidget(
                {
                    cloudName: `${process.env.REACT_APP_cloudName}`,
                    uploadPreset: `${process.env.REACT_APP_uploadPreset}`,
                    sources: ["local", "url", "facebook", "instagram"],
                    Default: false
                },
                (error, result) => {
                    this.checkUploadResult(error, result)
                    this.checkUploadResult(error, result)
                })
    }
        return(
            
            <div>
                <Link to='/Products'>Back to Home</Link>
                <h1>Vendor Account Edit</h1>
                <h2>Add Product</h2>
                <div className='add-inputs'>
                    {this.state.prod_img ? <img src={this.state.prod_img} alt='Selected Image' /> : null}
                    <input placeholder='Product Name' value={this.state.prod_name} onChange={this.handleInputChange} />
                    <input name='prod_img' placeholder='Product Image' value={this.state.prod_img} />
                    <input name='prod_price' placeholder='Product Price' value={this.state.prod_price} onChange={this.handleInputChange} />
                    <text placeholder='Product Description' value={this.state.prod_desc} onChange={this.handleInputChange} />
                <button onClick={this.handleAddProduct}>Add Product</button>
            </div>
            </div>
        )
    }
}
const mapStateToProps = reduxState => ({
    products: reduxState.productReducer.products,
    isAdmin: reduxState.userReducer.isVendor,
    loading: reduxState.productReducer.loading
})

export default withRouter(connect(mapStateToProps, {
    updateState,
    addProduct
})(VendorEdit));

