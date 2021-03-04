import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import clsx from 'clsx'
import { AppBar, Backdrop, Button, CircularProgress, makeStyles, Toolbar, Typography } from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import LogoutDialog from './dialog/logoutDialog'
import LoginDialog from './dialog/loginDialog'
import MenuMobile from './menuMobile'

const Header = (props) => {
    const {isDrawerOpen, drawerWidth} = useSelector(state=>state.sites)
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
        appBar: {
            transition: theme.transitions.create(['margin', 'width'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
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
    },[notifications])
    console.log('Header:',props);
    return(
        <div className={classes.root}>
            <AppBar position="sticky" className={clsx(classes.appBar, {[classes.appBarShift] : isDrawerOpen})}>
                <Toolbar>
                    <Typography button variant="h5" className={classes.title} onClick={()=>props.history.push("/")}>Mr. Sushi PEI</Typography>
                    {!auth ? 
                        <Button color="inherit" onClick={()=>setOpenDialog(!openDialog)}>Login</Button>
                    :
                        <MenuMobile/>
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