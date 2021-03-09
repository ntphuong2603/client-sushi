import React, { useState } from 'react'
import { MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@material-ui/core'
import { getSentenceCase } from '../tools/stringFunc'
import TableOption from './tableOption'
import AddMenuDialog from './dialog/addMenuDialog'
import EditMenuDialog from './dialog/editMenuDialog'

const TableMenu = ({data}) => {
    const [sortBy, setSortBy] = useState('descending')
    const [sortName, setSortName] = useState("")
    const [openAddDialog, setOpenAddDialog] = useState(false)
    const [openEditDialog, setOpenEditDialog] = useState(false)
    const [editMenu, setEditMenu] = useState(null)

    const tableHeaders = () => (
        Object.keys(data[0]).map(item=>({id:item,label:item}))
    )
    
    const handleSortBy = () => {
        if (sortBy.slice(0,3)==='asc') setSortBy('descending')
        else setSortBy("ascending")
        sortData()
    }

    const handleSortName = (event) => {
        event.preventDefault()
        setSortName(event.target.value)
        sortData()
    }

    const getCatergory = () => {
        const cats = []
        data.map(menu=>{
            if (cats.indexOf(menu.category)) cats.push(menu.category)
            return cats
        })
        return cats;
    }

    const sortData = () => {
        // const {data, sortBy, sortName} = props
        if (sortName!==""){
            data.sort(function(menuA, menuB){
                if (menuA[sortName] > menuB[sortName]) return 1
                return -1
            })
            if (sortBy.slice(0,3)==="des") data.reverse()
        }
        return data
    }

    return(
        <>
        <TableOption 
            sortBy={sortBy} handleSortBy={handleSortBy} 
            sortName={sortName} handleSortName={handleSortName} 
            tableHeaders={tableHeaders}
            open={openAddDialog} setOpen={setOpenAddDialog}
        />
        <TableContainer className={{maxHeight:535}}>
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
                    {sortData().map(menu=>(
                        <TableRow onClick={()=>{setEditMenu(menu);setOpenEditDialog(!openEditDialog)}}>
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
        <AddMenuDialog open={openAddDialog} setOpen={setOpenAddDialog}/>
        {editMenu && <EditMenuDialog open={openEditDialog} setOpen={setOpenEditDialog} menu={editMenu}/>}
        </>
    )
}

export default TableMenu