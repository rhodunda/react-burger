import React from 'react'
// import navigationItems from '../NavItems'
import classes from './NavItem.css'


const  navigationItem = (props) => (
    <li className={classes.NavigationItem}>
        <a href={props.link} 
        className={props.active ? classes.active : null}> 
        {props.children} </a>
    </li>
)

export default navigationItem