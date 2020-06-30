import React, { Component } from 'react'
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component  {


componentDidUpdate() {
    console.log("order summary updated")
}

    render () {

        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igkey => {
        return <li key={igkey}> 
            <span style={{textTransform: "capitalize"}}>{igkey}:</span> {this.props.ingredients[igkey]}</li>

        })
        return (
        <Aux>
            <h3>Your Order</h3>
            <p> A delicious Burger With The Following Ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p> <strong>Total Price: ${this.props.price}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>Continue</Button>
        </Aux>
        )
    }  
}


export default OrderSummary