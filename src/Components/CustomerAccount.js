import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class CustomerAccount extends Component {

    render() {
        return(
            <div>
                 <Link to='/Items'>Back to Home</Link>
                <h1>Customer Account</h1>
            </div>
        )
    }
}