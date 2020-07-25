import React from 'react'
import classes from './NavItems.css'
import NavigationItem from './NavItem/NavItem'


const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link='/'>Burger Builder</NavigationItem>
        <NavigationItem link='/orders'>Orders</NavigationItem>
    </ul>
)


export default navigationItems