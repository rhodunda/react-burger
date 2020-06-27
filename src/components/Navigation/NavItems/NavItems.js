import React from 'react'
import classes from './NavItems.css'
import NavigationItem from './NavItem/NavItem'


const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link='/' active>Burger Builder</NavigationItem>
        <NavigationItem link='/'>Checkout</NavigationItem>
    </ul>
)


export default navigationItems