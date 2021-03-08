import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import * as menuAction from '../../store/actions/menu-action'

const EditMenuDialog = ({open, setOpen, menu}) => {
    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(menuAction)
    }

    return(
        <Dialog open={open}>
            <DialogTitle onClose={()=>setOpen(!open)}>
                <Typography component="h1" variant="h5">
                    Edit recepi ID : {menu.id}
                </Typography>
            </DialogTitle>
            <DialogContent dividers>

            </DialogContent>
            <DialogActions>
                <Button fullWidth size="large" onClick={()=>handleDelete} color="secondary" variant="contained">
                    Delete
                </Button>
                <Button fullWidth size="large" onClick={()=>{}} color="primary" variant="contained">
                    Update
                </Button>
                <Button fullWidth size="large" onClick={()=>setOpen(!open)} variant="outlined">
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default EditMenuDialog