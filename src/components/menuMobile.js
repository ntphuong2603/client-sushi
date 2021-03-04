import React, { useState } from 'react'
import { Button, IconButton, Popover } from '@material-ui/core'
import { MENU_BAR, MENU_ICON } from '../constant/drawerMenu'
import { LinkContainer } from 'react-router-bootstrap'
import NotificationsIcon from '@material-ui/icons/Notifications'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

const MenuMobile = () => {
    const [anchorEle, setAnchorEle] = useState(null)
    const [menuID, setMenuID] = useState(null)
    
    const handleMenuMobile = (event = null) => {
        if (event === null){
            setAnchorEle(null)
            setMenuID(null)
        } else {
            setAnchorEle(event.currentTarget)
            setMenuID('menu1234567890')
        }
    }

    const getPopoverPosition = () => ({
        anchorOrigin:{
            vertical: 'bottom',
            horizontal: 'right',
        },
        transformOrigin:{
            vertical: 'top',
            horizontal: 'right',
        }
    })

    const getActiveButton = (menu) => (
        menu==='test' ? 
        { color: 'secondary', variant: 'contained' }
        :
        { color: 'inherit', variant: 'text' }
    )
    return(
        <>
        <IconButton color="inherit">
            <NotificationsIcon/>
        </IconButton>
        <IconButton color="inherit">
            <AccountCircleIcon/>
        </IconButton>
        <IconButton color="inherit" aria-describedby={menuID} onClick={event=>handleMenuMobile(event)}>
            <MenuIcon/>
        </IconButton>
        <Popover 
            id={menuID} 
            open={Boolean(anchorEle)}
            anchorEl={anchorEle} 
            onClose={()=>{handleMenuMobile()}}
            {...getPopoverPosition()}
            >
            {MENU_BAR.map((menu,index)=>(
                <div key={menu}>
                    <LinkContainer to={`/${menu}`}>
                        <Button {...getActiveButton(menu)} 
                            // className={classes.btn}
                            startIcon={MENU_ICON[index]}
                            onClick={()=>{handleMenuMobile()}}
                            >
                            { menu }
                        </Button>
                    </LinkContainer>
                </div>
            ))}
        </Popover>
        </>
    )
}

export default MenuMobile