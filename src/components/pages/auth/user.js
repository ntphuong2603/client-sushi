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
            User component.
        </>
    )
}

export default User;