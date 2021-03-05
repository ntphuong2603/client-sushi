import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { userAuthenticate } from '../store/actions/user-action'

const Report = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(userAuthenticate())
    },[])

    return(
        <div>
            Report component.
        </div>
    )
}

export default Report;