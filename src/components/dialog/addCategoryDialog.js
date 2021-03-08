import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, TextField, Typography } from '@material-ui/core'

const AddCategoryDialog = ({open, setOpen}) => {
    return(
        <Dialog open={open}>
            <DialogTitle><Typography component="h1" variant="h5">
                    Create new category
                </Typography></DialogTitle>
            <DialogContent dividers>
                <TextField
                    variant="outlined"
                    margin="normal"
                    size="large"
                    fullWidth
                    label='Enter the new category name'
                    name='category'
                />
            </DialogContent>
            <DialogActions>
                <Button fullWidth onClick={()=>{
                }} color="secondary" variant="contained">
                    Create
                </Button>
                <Button fullWidth onClick={()=>setOpen(!open)} color="primary" variant="outlined" autoFocus>
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default AddCategoryDialog