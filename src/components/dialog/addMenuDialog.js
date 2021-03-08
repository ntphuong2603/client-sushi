import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, TextField, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSentenceCase } from '../../tools/stringFunc'
import * as categoryAction from '../../store/actions/category-action'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import AddCategoryDialog from './addCategoryDialog'

const AddMenuDialog = ({open, setOpen}) => {
    const categories = useSelector(state=>state.categories)
    const dispatch = useDispatch()
    const [openCat, setOpenCat] = useState(false)
    const itemList = ['name','code','price']

    useEffect(()=>{
        dispatch(categoryAction.getAllCategories())
    },[]
    )

    const catList = () => (
        <Box display="flex">
            <Box flexGrow={1}>
                <TextField select
                    label="Category"
                    variant="outlined"
                    size="small"
                    defaultValue={categories[0].name}
                    helperText="Select category of new recepi"
                    >
                    {categories.map(item=>(
                        <MenuItem key={item.id} value={item.id}>{getSentenceCase(item.name)}</MenuItem>
                    ))}
                </TextField>
            </Box>
            <Box>
                <Button size="large" color="primary" variant="contained" startIcon={<AddCircleIcon/>} onClick={()=>setOpenCat(!openCat)}>
                    Category
                </Button>
            </Box>
        </Box>
        
    )
    
    console.log("Cat:", categories);

    return(
        <>
        <Dialog open={open}>
            <DialogTitle onClose={()=>setOpen(!open)}>
                <Typography component="h1" variant="h5">
                    New recepi
                </Typography>
            </DialogTitle>
            <DialogContent dividers>
                {categories.length && catList()}
                {itemList.map(item=>(
                    <TextField
                        variant="outlined"
                        margin="dense"
                        size="small"
                        fullWidth
                        label={`Recepi ${item}`}
                        name={`${item}`}
                    />
                ))}
            </DialogContent>
            <DialogActions>
                <Button fullWidth size="large" onClick={()=>{}} color="secondary" variant="contained">
                    Create
                </Button>
                <Button fullWidth size="large" onClick={()=>setOpen(!open)} color="primary" variant="outlined">
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
        <AddCategoryDialog open={openCat} setOpen={setOpenCat}/>
        </>
    )
}

export default AddMenuDialog