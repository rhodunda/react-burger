import React from 'react'
import burgerLogo from '../../assets/images/burger-logo.png'
import classes from './logo.css'


const logo = (props) => (
 <div className={classes.Logo} style={{height: props.height}}>
     <img src={burgerLogo} alt="Dewey Burger"/>
 </div>
)
export default logo