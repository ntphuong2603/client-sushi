import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { userAuthenticate } from '../store/actions/user-action'

const User = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(userAuthenticate())
    },[])

    return(
        <>
            {/* {auth && "User component."}
            {!auth && <Redirect to="/"/>} */}
            User component.
        </>
    )
}

export default User;