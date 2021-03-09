/* eslint-disable no-unused-vars */
import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userAuthenticate } from '../../../store/actions/user-action'
import * as categoryAction from '../../../store/actions/category-action'
import * as menuAction from '../../../store/actions/menu-action'
import { Paper, TablePagination } from '@material-ui/core'
import TableMenu from './tableMenu'

const Menu = () => {
    const menus = useSelector(state=>state.menus)
    const categories = useSelector(state=>state.categories)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(userAuthenticate())
        dispatch(categoryAction.getAllCategories())
    },[])

    return(
        <Paper style={{width: '100%'}}>
            <TableMenu data={menus}/>
            <TablePagination
                rowsPerPageOptions={[10, 25, 50]}
                component="div"
                count={menus.length}
                labelRowsPerPage={"Number of menu"}
                rowsPerPage={10}
                page={0}
                // onChangePage={handleChangePage}
                // onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    )
}

export default Menu;