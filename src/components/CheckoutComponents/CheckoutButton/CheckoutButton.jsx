import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';

class CheckoutButton extends Component {

    handleCheckout = () => {
        let order = {
          pizzas: this.props.reduxState.pizzaReducer,
          total: this.props.reduxState.pizzaTotalReducer
        };
        console.log('Checking Out! Cha-Ching!');
        let completeOrder = Object.assign(this.props.reduxState.customerInfo, order)
        console.log(completeOrder);
        Axios.post('/api/order', completeOrder)
          .then(response => {
            this.props.dispatch({
              type: 'CHECKOUT'
            });
            //maybe an alert that order has been submitted?
            this.props.history.push('/');
          })
    }
    render() {
        return(
            <Button variant="contained" size="small" onClick={() => this.handleCheckout()}>Checkout</Button>
        );
    };
};

const mapStateToProps = (reduxState) => {
  return {
    reduxState
  }
}
export default connect(mapStateToProps)(withRouter(CheckoutButton));