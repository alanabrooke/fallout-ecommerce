import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class ViewVendor extends Component {

    render() {
        return(
            <div>
                 <Link to='/Products'>Back to Home</Link>
                <h1>Viewing Vendor Page</h1>
            </div>
        )
    }
}