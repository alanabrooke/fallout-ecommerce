import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import CustomerAccount from './Components/CustomerAccount'
import ViewVendor from './Components/ViewVendor'
import Products from './Components/Products'
import Login from './Components/Login'
import VendorEdit from './Components/VendorEdit'
import Cart from './Components/Cart'


export default (
    <Switch>
        <Route component={Login} exact path='/'/>
        <Route component={Products} path='/products'/>
        <Route component={CustomerAccount} path='/CustomerAccount'/>
        <Route component={VendorEdit} path='/VendorEdit'/>
        <Route component={ViewVendor} path='/ViewVendor'/>
    </Switch>
)