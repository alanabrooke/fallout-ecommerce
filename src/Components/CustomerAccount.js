import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import {logout, deleteUser, editUser} from '../redux/accountReducer'
import {getUser} from '../redux/authReducer'
require('dotenv').config()

class CustomerAccount extends Component {

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
    

    componentDidMount() {
        this.props.getUser()
    }

    handleDelete = () => {
        this.props.deleteUser()
    }

    render() {
        return(
            <div>
                 <Link to='/Products'>Back to Home</Link>
                <h1>Customer Account</h1>
            <button onClick={this.handleDelete}>DELETE ACCOUNT</button>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        account: state.accountReducer.account
    }
    }
    
    export default withRouter(connect(mapStateToProps, {
    getUser,
    editUser,
    logout,
    deleteUser
    })(CustomerAccount));