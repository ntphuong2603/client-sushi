import React, { useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import GoogleFontLoader from 'react-google-font-loader'
import Header from './components/header'
import Home from './components/home'
import MainLayout from './components/hoc/mainLayout'
// import Login from './components/login'
import Order from './components/order'
import Menu from './components/menu'
import Dashboard from './components/dashboard'
import User from './components/user'
import Report from './components/report'
import AuthRoute from './components/hoc/authComponent'
import Profile from './components/profile'
import { useDispatch } from 'react-redux'
import { userAuthenticate } from './store/actions/user-action'

import('bootstrap/dist/css/bootstrap.min.css')

const Routes = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(userAuthenticate())
    },[])

    return(
        <BrowserRouter>
            <Header/>
            <MainLayout>
                <Switch>
                    {/* <Route path="/login" component={Login}/> */}
                    {/* <Route path="/orders" component={Order}/> */}
                    {/* <Route path="/menus" component={Menu}/> */}
                    {/* <Route path="/reports" component={Report}/> */}
                    {/* <Route path="/users" component={User}/> */}
                    <AuthRoute path="/orders" component={Order}/>
                    <AuthRoute path="/menus" component={Menu}/>
                    <AuthRoute path="/reports" component={Report}/>
                    <AuthRoute path="/users" component={User}/>
                    <AuthRoute path="/profile" component={Profile}/>
                    <AuthRoute path="/dashboard" component={Dashboard}/>
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