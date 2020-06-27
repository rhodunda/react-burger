import  React from 'react'
import Logo from '../../Logo/logo'
import NavigationItems from '../NavItems/NavItems'
import classes from './SideDrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/Aux'

const sidedrawer = (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Close]
        if (props.open) {
                attachedClasses = [classes.SideDrawer, classes.Open]
        }
    return (
    <Aux>
        <Backdrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')}>
            <Logo  height="11%"/>
                <nav>
                    <NavigationItems/>
                </nav>
        </div>
    </Aux>
    )
}

export default sidedrawer