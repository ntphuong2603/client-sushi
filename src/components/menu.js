import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userAuthenticate } from '../store/actions/user-action'
import * as menuAction from '../store/actions/menu-action'
import * as categoryAction from '../store/actions/category-action'
import { FormControl, IconButton, InputLabel, ListItemText, MenuItem, Select, TableContainer} from '@material-ui/core'

const Menu = () => {
    const menus = useSelector(state=>state.menus)
    const categories = useSelector(state=>state.categories)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(userAuthenticate())
        dispatch(categoryAction.getAllCategories())
    },[])

    return(
        <>
        <div>
            {/* <InputLabel>Select category menu</InputLabel> */}
            <ListItemText>Select catetogory</ListItemText>
            <Select >
                {categories.map(cat=>(
                    <MenuItem key={cat.id} value={cat.id}>{cat.name}</MenuItem>
                ))}
            </Select>
            <IconButton>Add</IconButton>
        </div>
        <TableContainer>

        </TableContainer>
        </>
    )
}

export default Menu;