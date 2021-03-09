import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

const AuthComponent = (Component, roleCheck=false) => {
    const {auth} = useSelector(state=>state.users)
    const [isAuth, setIsAuth] = useState(false)

    if (isAuth){
        return(
            <Component/>
        )
    } else {
        return(
            <Redirect to="/"/>
        )
    }
}

export default AuthComponent;