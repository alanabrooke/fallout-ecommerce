import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {getItems} from '../redux/itemsReducer'
import {connect} from 'react-redux'

class Items extends Component {

    componentDidMount() {
        this.props.getItems()
    }

    render() {
        return(
            <div>
                {/* <Link to='/'>Logout</Link> */}
                <Link to='/'>Login/register</Link>
                <Link to='/CustomerAccount'><button> Customer Account</button></Link>
                <Link to='/VendorEdit'><button> Vendor Account</button></Link>
                <h1>All Items</h1>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        items: state.itemsReducer.items
    }
    }
    
    export default withRouter(connect(mapStateToProps, {
    getItems
    })(Items));