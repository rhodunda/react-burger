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
               valid: false,
               touched: false
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
               valid: false,
               touched: false
            },


            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5
                },
                valid: false,
                touched: false
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
                valid: false,
                touched: false
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
                valid: false,
                touched: false
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
                value: 'cheapest',
                validation: {},
                valid: true
            },
       },
        formIsValid: false,
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

    checkValidity(value, rules) {
        let isValid = true
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        return isValid
    }


    inputchangedHandler = (event, inputIdentifier) => {

        const updatedOrderForm = {
            ...this.state.orderForm
        }
        const updatedFormelement = { ...updatedOrderForm[inputIdentifier]}

        updatedFormelement.value = event.target.value

        updatedFormelement.valid = this.checkValidity(updatedFormelement.value, updatedFormelement.validation)
        updatedFormelement.touched = true
        updatedOrderForm[inputIdentifier] = updatedFormelement
        console.log(updatedFormelement)

        let formIsValid = true

        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid
        }

        this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid})

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
                            invalid={!formElement.config.valid}
                            shouldValidate={formElement.config.validation}
                            touched={formElement.config.touched}
                            changed={(event) => this.inputchangedHandler(event, formElement.id)}
                            />
                    ))}
                    <Button btnType="Success" disabled={!this.state.formIsValid}>ORDER</Button>
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
