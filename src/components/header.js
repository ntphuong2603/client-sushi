import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppBar, Backdrop, Button, CircularProgress, makeStyles, Toolbar, Typography } from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import LogoutDialog from './dialog/logoutDialog'
import LoginDialog from './dialog/loginDialog'
import MenuMobile from './menuMobile'
import { userAuthenticate } from '../store/actions/user-action'

const Header = (props) => {
    const [openDialog, setOpenDialog] = useState(false)
    const [showBackdrop, setShowBackdrop] = useState(false)
    
    
    const notifications = useSelector(state=>state.notifications)
    const {auth} = useSelector(state=>state.users)
    const dispatch = useDispatch()

    const styles = makeStyles((theme)=>({
        root:{
            flexGrow:1,
        },
        menuButton:{
            marginRight: theme.spacing(2),
        },
        title:{
            flexGrow:1,
        },
        hoverButton:{
            '&:hover':{
                color: '#f50057'
            }
        }
    }))

    const classes = styles()

    useEffect(()=>{
        setShowBackdrop(false)
        if (notifications && notifications.error){
            setOpenDialog(true)
        }
        if (notifications && notifications.success){
            props.history.push('/dashboard')
        }
    },[notifications, props.history])

    useEffect(()=>{
        dispatch(userAuthenticate())
    },[])

    return(
        <div className={classes.root}>
            <AppBar position="sticky" >
                <Toolbar>
                    <Typography button variant="h5" className={classes.title} onClick={()=>props.history.push("/")}>Mr. Sushi PEI</Typography>
                    {auth ? 
                        <MenuMobile/>
                    :
                        <Button color="inherit" onClick={()=>setOpenDialog(!openDialog)}>Login</Button>
                    }
                </Toolbar>
            </AppBar>
            <Backdrop open={showBackdrop}>
                <CircularProgress color="secondary" />
            </Backdrop>
            {!auth ? 
                <LoginDialog openDialog={openDialog} setOpenDialog={setOpenDialog} setShowBackdrop={setShowBackdrop}/>
            :
                <LogoutDialog  openDialog={openDialog} setOpenDialog={setOpenDialog}/>
            }
        </div>
    )
}

export default withRouter(Header)