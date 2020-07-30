import React,  { Component } from "react";
import Button from '../../../components/UI/Button/Button'
import classes from './contactData.css'
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spiner/Spinner'
import Input from '../../../components/UI/Input/input'

class ContactData extends Component {

    state = {
       orderForm: {
           name: {
               elementType: 'input',
               elementConfig: {
                   type: 'text',
                   placeholder: 'Your Name'
               },
               value: '',
               validation: {
                   required: true
               },
               valid: false
           },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'street'
                },
                value: '',
               validation: {
                   required: true
               },
               valid: false
            },


            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'one day', displayValue: 'One Day' },
                        {value: 'economic', displayValue: 'Economic'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value: ''
            },
       },
        loading: false
    }



    orderHandler = (event) => {
        event.preventDefault()

        this.setState( { loading: true } );

        const formData = {}

        for (let formElementIdentifer in this.state.orderForm) {
                formData[formElementIdentifer] = this.state.orderForm[formElementIdentifer].value
        }


        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: formData
            
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

    checkValid


    inputchangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        }
        const updatedFormelement = { ...updatedOrderForm[inputIdentifier]}

        updatedFormelement.value = event.target.value

        updatedOrderForm[inputIdentifier] = updatedFormelement

        this.setState({orderForm: updatedOrderForm})

    }

        render () {

            const formElementsArray = []

            for (let key in this.state.orderForm) {
                    formElementsArray.push({
                        id: key,
                        config: this.state.orderForm[key]
                    })
            }

            let form = (
                <form onSubmit={this.orderHandler}>
                    
                    {formElementsArray.map(formElement => (
                            <Input 
                            key={formElement.id}
                            elementType={formElement.config.elementType}
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value}
                            changed={(event) => this.inputchangedHandler(event, formElement.id)}
                            />
                    ))}
                    <Button btnType="Success">ORDER</Button>
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
