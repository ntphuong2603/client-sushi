import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { userLogout } from '../../store/actions/user-action'

const LogoutDialog = (props) => {
    const dispatch = useDispatch()
    return(
        <Dialog open={props.openDialog} onClose={()=>{props.setOpenDialog(!props.openDialog)}}>
            <DialogTitle>Confimation</DialogTitle>
            <Divider/>
            <DialogContent>
                <DialogContentText>
                    Do you want to logout the system?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button fullWidth onClick={()=>{
                    dispatch(userLogout())
                    props.setOpenDialog(false)
                }} color="secondary" variant="contained">
                    Yes
                </Button>
                <Button fullWidth onClick={()=>{props.setOpenDialog(false)}} color="primary" variant="outlined" autoFocus>
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default LogoutDialog