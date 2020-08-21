import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomerSummary from '../../components/CheckoutComponents/CustomerSummary/CustomerSummary.jsx'
import PizzaOrder from '../../components/CheckoutComponents/PizzaOrder/PizzaOrder.jsx'
import CheckoutButton from '../../components/CheckoutComponents/CheckoutButton/CheckoutButton.jsx'



class Checkout extends Component {
    render() {
        return(

            <div>
                <h1>Step 3: Checkout</h1>
                <CustomerSummary />
                <PizzaOrder />
                <CheckoutButton />
            </div>


        );
    };
};




const mapStateToProps = (reduxState) => {
  return {
    reduxState
  }
}
export default connect(mapStateToProps)(Checkout);