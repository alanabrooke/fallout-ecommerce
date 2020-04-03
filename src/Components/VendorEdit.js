import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class VendorEdit extends Component {

    render() {
        return(
            <div>
                <Link to='/Items'>Back to Home</Link>
                <h1>Vendor Account Edit</h1>
            </div>
        )
    }
}