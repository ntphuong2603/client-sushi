import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

const AuthRoute = ({component:Component, ...rest}) => {
    const {auth} = useSelector(state=>state.users)

    if (auth){
        return <Component {...rest}/>
    }
    return <Redirect to="/"/>
}

export default AuthRoute;