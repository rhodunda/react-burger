import React from 'react'
// import navigationItems from '../NavItems'
import classes from './NavItem.css'
import { NavLink } from 'react-router-dom'


const  navigationItem = (props) => (
    <li className={classes.NavigationItem}
        activeClassName={classes.Active}>
        <NavLink to={props.link}> 
        {props.children}
        </NavLink>
    </li>
)

export default navigationItem