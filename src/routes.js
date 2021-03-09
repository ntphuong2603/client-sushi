import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import GoogleFontLoader from 'react-google-font-loader'
import Header from './components/header/header'
import Home from './components/pages/home'
import MainLayout from './components/hoc/mainLayout'
// import Order from './components/order'
// import Menu from './components/menu'
// import Dashboard from './components/dashboard'
// import User from './components/user'
// import Report from './components/report'
// import Profile from './components/profile'
// import AuthComponent from './components/hoc/authComponent'
import { IndexPage } from './components/pages/auth/authPageIndex'

import('bootstrap/dist/css/bootstrap.min.css')

const Routes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <MainLayout>
                <Switch>
                    {/* <Route path="/orders" component={AuthComponent(Order)}/>
                    <Route path="/menus" component={AuthComponent(Menu)}/>
                    <Route path="/reports" component={AuthComponent(Report)}/>
                    <Route path="/users" component={AuthComponent(User)}/>
                    <Route path="/profile" component={AuthComponent(Profile)}/>
                    <Route path="/dashboard" component={AuthComponent(Dashboard)}/> */}
                    <Route part="/menus" component={IndexPage.PAGE_MENU}/>
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