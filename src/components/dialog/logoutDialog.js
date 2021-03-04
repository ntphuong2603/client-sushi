import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'

const LogoutDialog = () => {
    return(
        <Dialog
            open={false}
            onClose={()=>{}}
        >
            <DialogTitle>Logout confirm</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Do you want to logout the system?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={()=>{}} color="secondary" variant="contained">
                    Yes, logout!
                </Button>
                <Button onClick={()=>{}} color="primary" variant="outlined" autoFocus>
                    No, stay tune!
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default LogoutDialog