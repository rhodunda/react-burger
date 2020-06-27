import React from 'react'
import classes from './Toolbar.css'
import Logo from '../../Logo/logo'
import NavigationItem from '../NavItems/NavItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <Logo  height="80%"/>
        <nav className={classes.DesktopOnly}>
            <NavigationItem/>
        </nav>
    </header>
)


export default toolbar