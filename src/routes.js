import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import CustomerAccount from './Components/CustomerAccount'
import ViewVendor from './Components/ViewVendor'
import Items from './Components/Items'
import Login from './Components/Login'
import VendorEdit from './Components/VendorEdit'


export default (
    <Switch>
        <Route component={Login} exact path='/'/>
        <Route component={Items} path='/items'/>
        <Route component={CustomerAccount} path='/CustomerAccount'/>
        <Route component={VendorEdit} path='/VendorEdit'/>
        <Route component={ViewVendor} path='/ViewVendor'/>
    </Switch>
)