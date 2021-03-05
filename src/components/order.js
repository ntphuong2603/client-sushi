import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { userAuthenticate } from '../store/actions/user-action'

const Order = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(userAuthenticate())
    },[])

    return(
        <>
            {/* {auth && "Order component."}
            {!auth && <Redirect to="/"/>} */}
            Order component.
        </>
    )
}

export default Order;