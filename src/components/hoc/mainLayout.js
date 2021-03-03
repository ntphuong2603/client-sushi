import { makeStyles } from '@material-ui/core'
import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'


const MainLayout = (props) => {
    const {isDrawerOpen, drawerWidth} = useSelector(state=>state.sites)

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

    return(
        <div className={clsx(classes.root, classes.content,isDrawerOpen ? classes.contentShift : null)}>
            {props.children}
        </div>
    )
}

export default MainLayout