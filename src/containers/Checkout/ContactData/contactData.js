import React,  { Component } from "react";
import Button from '../../../components/UI/Button/Button'
import classes from './contactData.css'
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spiner/Spinner'

class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: '',
        },
        loading: false
    }



    orderHandler = (event) => {
        event.preventDefault()

        this.setState( { loading: true } );
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Bryan Rhodunda',
                address: {
                    street: '2619 Fogg lane',
                    zipCode: '19808',
                    country: 'United State of America'
                },
                email: 'rhodunda@udel.edu'
            },
            deliveryMethod: 'fastest'
        }
        axios.post( '/orders.json', order )
            .then( response => {
                this.setState( { loading: false } );
                this.props.history.push('/')
            } )
            .catch( error => {
                this.setState( { loading: false } );
            } );
    }

        render () {

            let form = (
                <form>
                    <input className={classes.Input} type="text" name="name" placeholder="Name"/>
                    <input className={classes.Input} type="email" name="email" placeholder="E-mail"/>
                    <input className={classes.Input} type="text" name="street" placeholder="Street"/>
                    <input className={classes.Input} type="text" name="postal" placeholder="Postal Code"/>
                    <Button  clicked={this.orderHandler} btnType="Success">ORDER</Button>
                </form>
                );
            if (this.state.loading) {
                form = <Spinner/>
            }
            return(
                <div className={classes.ContactData}>
                <h4> Enter your Contact Data </h4>
                {form}
                </div>
            )
        }
   
}

export default ContactData