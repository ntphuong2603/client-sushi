import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import GoogleFontLoader from 'react-google-font-loader'
import Header from './components/header'
import Home from './components/home'
import MainLayout from './components/hoc/mainLayout'
import Login from './components/login'
import Order from './components/order'
import Menu from './components/menu'

import('bootstrap/dist/css/bootstrap.min.css')

const Routes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <MainLayout>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/orders" component={Order}/>
                    <Route path="/menus" component={Menu}/>
                    <Route path="/" component={Home}/>
                </Switch>
            </MainLayout>
            <GoogleFontLoader
                fonts={[
                    {font:'Roboto',weights:[300,500,900]},
                    {font:'Oswald'},
                    {font:'Dacing Script', weights:[700]}
                ]}
            />
        </BrowserRouter>
    )
}

export default Routes