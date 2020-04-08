import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { registerUser, loginUser, updateState } from '../redux/authReducer'
import './styles/Login.css'



class Login extends Component {

    constructor() {
    super();
    this.state = {
        email: '',
        username: '',
        password: '',
        address: '',
        phone: '',
        is_vendor: null
    }
    }

    handleChange = e => {
        this.props.updateState({ [e.target.name]: e.target.value})
        // console.log(e.target.value)
    }
    
    handleClickLogin = () => {
        this.props.loginUser(this.props.username, this.props.password)
        .then(() => {
            this.props.history.push('/products')
        }).catch(error => {
            console.log(this.props.username, this.props.password)
            alert('Incorrect username or password. Please try again.')
        })
    }
    
    handleClickRegister = () => {
        this.props.registerUser(this.props.email, this.props.username, this.props.phone, this.props.address, this.props.password, this.props.is_vendor)
        .then(() => {
            this.props.history.push('/products')
            this.props.loginUser(this.props.username, this.props.password)
        }).catch(error => {
            // console.log(this.props.email, this.props.username, this.props.password, this.props.phone, this.props.address, this.props.is_vendor)
            console.log(error)
            // window.location.reload();
        })
    }

//cloudinary
    // checkUpload = (err, result) => {
    // let { e, info } = result;
    // if(e === 'success'){
    //      this.setState({ profileImg: info.url });
    // }
// }     

    render() {
//         const { REACT_APP_cloudName, REACT_APP_cloudinary_unsigned } = process.env;
//         let widget;
        
//         if( window.cloudinary ) {
//         widget = window.cloudinary.createUploadWidget(
//           {
//                cloudName: `${REACT_APP_cloudName}`,
//                uploadPreset: `${REACT_APP_cloudinary_unsigned}`,
//                sources: ['local', 'url'],
//                Default: false
//           },
//           ( error, result ) => {
//                this.checkUpload(error, result);
//           }
//      );
// }
        return(
            <div>
                <h1>Wasteland Stop & Shop</h1>

                <p>Login</p>
                <input placeholder='username' onChange={this.handleChange}/>
                <input placeholder='password'/>
                <button onClick={this.handleClickLogin}>Submit</button>

                <p>Register</p>
                <input placeholder='email' onChange={this.handleChange}/>
                <input placeholder='username' onChange={this.handleChange}/>
                <input placeholder='phone number' onChange={this.handleChange}/>
                <input placeholder='address' onChange={this.handleChange}/>
                <input placeholder='password' onChange={this.handleChange}/>
                <select onChange={this.handleChange}>
                    <option val='false'>
                        Customer
                    </option>
                    <option val='true'>
                        Vendor
                    </option>
                </select>
                <button>Upload Profile Image</button>
               <button onClick={this.handleClickRegister}>Register</button>

               <Link to='Products'>Continue as guest</Link>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        email: state.authReducer.email,
        username: state.authReducer.username,
        phone: state.authReducer.phone,
        address: state.authReducer.address,
        password: state.authReducer.password,
        is_vendor: state.authReducer.is_vendor
    }
}

export default withRouter(connect(mapStateToProps, {
    updateState,
    registerUser,
    loginUser
})(Login));