import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as menuAction from '../store/actions/menu-action'
import { userAuthenticate } from '../store/actions/user-action'

const Menu = () => {
    const menus = useSelector(state=>state.menus)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(userAuthenticate())
        dispatch(menuAction.getAllMenus())
    },[])

    return(
        <div>
            Menu component.
        </div>
    )
}

export default Menu;