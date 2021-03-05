import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

const AuthRoute = ({component:Component, ...rest}) => {
    const {auth} = useSelector(state=>state.users)
    // console.log('AuthRoute:',rest.path, auth);
    // const param = {...rest, path:`/${rest.path}`}
    if (auth){
        return <Component {...rest}/>
    }
    return <Redirect to="/"/>
}

export default AuthRoute;