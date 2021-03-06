import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import GoogleFontLoader from 'react-google-font-loader'
import Header from './components/header/header'
import Home from './components/home'
import MainLayout from './components/hoc/mainLayout'
// import Login from './components/login'
import Order from './components/order'
import Menu from './components/menu'
import Dashboard from './components/dashboard'
import User from './components/user'
import Report from './components/report'
import Profile from './components/profile'
import { useSelector } from 'react-redux'

import('bootstrap/dist/css/bootstrap.min.css')

const Routes = () => {
    const {auth} = useSelector(state=>state.users)
    return(
        <BrowserRouter>
            <Header/>
            <MainLayout>
                <Switch>
                    {auth && <>
                        <Route path="/orders" component={Order}/>
                        <Route path="/menus" component={Menu}/>
                        <Route path="/reports" component={Report}/>
                        <Route path="/users" component={User}/>
                        <Route path="/profile" component={Profile}/>
                        <Route path="/dashboard" component={Dashboard}/>
                    </>}
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