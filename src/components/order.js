import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { userAuthenticate } from '../store/actions/user-action'

const Order = () => {
    // const {auth} = useSelector(state=>state.users)
    // const dispatch = useDispatch()

    // useEffect(()=>{
    //     dispatch(userAuthenticate())
    // },[])

    return(
        <>
            {/* {auth && "Order component."}
            {!auth && <Redirect to="/"/>} */}
            Order component.
        </>
    )
}

export default Order;