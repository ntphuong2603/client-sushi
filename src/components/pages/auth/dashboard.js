import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { userAuthenticate } from '../../../store/actions/user-action'

const Dashboard = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(userAuthenticate())
    },[])

    return (
        <>
            Dashboard component
        </>
    )
}

export default Dashboard;