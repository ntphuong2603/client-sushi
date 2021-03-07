/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userAuthenticate } from '../store/actions/user-action'
import * as categoryAction from '../store/actions/category-action'
import * as menuAction from '../store/actions/menu-action'
import { Checkbox, FormControlLabel, FormGroup, IconButton, InputLabel, ListItemText, makeStyles, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField, Typography} from '@material-ui/core'
import { getSentenceCase } from '../tools/stringFunc'

const styles = makeStyles((theme)=>({
    root:{
        width: '100%',
    },
    container:{
        maxHeight: 535,
    },
    sortItem:{
        padding: theme.spacing(1,5)
    },
    sortBy:{
        margin: theme.spacing(0,3),
    }
}))

const Menu = () => {
    const menus = useSelector(state=>state.menus)
    const categories = useSelector(state=>state.categories)
    const dispatch = useDispatch()
    const classes = styles()
    const [sortBy, setSortBy] = useState('asc')
    const [headerName, setHeaderName] = useState("")

    useEffect(()=>{
        dispatch(userAuthenticate())
        dispatch(categoryAction.getAllCategories())
    },[])

    const sortData = (data) => {
        if (headerName!==""){
            menus.sort(function(menuA, menuB){
                if (menuA[headerName] > menuB[headerName]) return 1
                return -1
            })
            if (sortBy==="desc") menus.reverse()
        }
        return data
    }

    const handleSortBy = () => {
        if (sortBy==='asc') setSortBy('desc')
        else setSortBy("asc")
    }

    const handleSortName = (event) => {
        event.preventDefault()
        setHeaderName(event.target.value)
    }

    const tableHeaders = () => (
        Object.keys(menus[0]).map(item=>({id:item,label:item}))
    )

    const getCatergory = () => {
        const cats = []
        menus.map(menu=>{
            if (cats.indexOf(menu.category)) cats.push(menu.category)
            return cats
        })
        return cats;
    }

    return(
        <Paper className={classes.root}>
            <div className={classes.sortItem}>
                <TextField select
                    label="Item selection"
                    variant="outlined"
                    helperText="Please select header item to sort"
                    size="small"
                    onChange={(event)=>{handleSortName(event)}}
                >
                    {tableHeaders().map(item=>(
                        <MenuItem key={item.id} value={item.label}>{getSentenceCase(item.label)}</MenuItem>
                    ))}
                </TextField>
                {headerName && <FormControlLabel
                    value="Asc"
                    control={<Checkbox color="primary" onClick={()=>(handleSortBy())}/>}
                    label={`sort by ${sortBy}`}
                    labelPlacement='end'
                    className={classes.sortBy}
                />}
            </div>
            <TableContainer className={classes.container}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            {tableHeaders().map(header=>(
                                <TableCell
                                    key={header.id}
                                    align={'center'}
                                    // style={{minWidth:cols.minWidth}}
                                    >
                                    {header.label==='category' ? 
                                    <TextField select
                                        label="Category"
                                        variant="outlined"
                                        size="small"
                                        defaultValue={getCatergory()[0]}
                                        >
                                        {getCatergory().map(item=>(
                                            <MenuItem key={item} value={item}>{getSentenceCase(item)}</MenuItem>
                                        ))}
                                    </TextField>
                                    :
                                    getSentenceCase(header.label)
                                    }
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortData(menus).map(menu=>(
                            <TableRow onClick={()=>alert(`Clicked on item id: ${menu.id} name: ${menu.name}`)}>
                                {Object.keys(menu).map(item=>{
                                    let value = menu[item]
                                    if (item==="id") value = value.slice(5,9)
                                    if (item==="status") value = value ? 'active' : 'unActive'
                                    if (item==="price") value = value.toFixed(2)
                                    return(
                                        <TableCell align={item==='name' ? 'left' : 'center'}>{value}</TableCell>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
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