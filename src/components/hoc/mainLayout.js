import { Container, makeStyles } from '@material-ui/core'
import React, { useEffect } from 'react'
import clsx from 'clsx'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { showNotification } from '../../tools/showNotification'
import { clearNotification } from '../../store/actions/actionIndex'
import { NOTIFICATION_ACTIONS } from '../../store/actionTypes'


const MainLayout = (props) => {
    const {isDrawerOpen, drawerWidth} = useSelector(state=>state.sites)
    const notifications = useSelector(state=>state.notifications)
    const dispatch = useDispatch()
    
    const styles = makeStyles((theme)=>({
        root:{
            display:'flex',
            padding: theme.spacing(2),
        },
        content: {
            transition: theme.transitions.create('margin', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: 0,
        },
        contentShift: {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: drawerWidth,
        },
    }))

    const classes = styles()

    useEffect(()=>{
        if (notifications && notifications.success){
            const msg = notifications.msg ? notifications.msg : 'Success'
            showNotification(NOTIFICATION_ACTIONS.SUCCESS, msg)
            dispatch(clearNotification())
        }
        if (notifications && notifications.error){
            const msg = notifications.msg ? notifications.msg : 'Error'
            showNotification(NOTIFICATION_ACTIONS.ERROR, msg)
            dispatch(clearNotification())
        }
        if (notifications && notifications.info){
            const msg = notifications.msg ? notifications.msg : 'Info'
            showNotification(NOTIFICATION_ACTIONS.INFO, msg)
            dispatch(clearNotification())
        }
    },[notifications, dispatch])

    return(
        <div className={clsx(classes.root, classes.content,isDrawerOpen ? classes.contentShift : null)}>
            <Container>
                {props.children}
            </Container>
            <ToastContainer/>
        </div>
    )
}

export default MainLayout