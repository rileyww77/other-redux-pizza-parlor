import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button } from '@material-ui/core';


class CustomerInfo extends Component {

    state = {
        customer_name: '',
        street_address: '',
        city: '',
        zip: '',
        type: '',
        total: this.props.reduxState.total
    }

/*     {
        "customer_name": "Donatello",
        "street_address": "20 W 34th St",
        "city": "New York",
        "zip": "10001",
        "total": "27.98",
        "type": "Pickup",
        
        "pizzas": [{
          "id": "1",
          "quantity": "1"
        },{
          "id": "2",
          "quantity": "1"
        }]
      } */

    handleChangeFor = (event, toChange) => {
        this.setState({
            ...this.state,
            [toChange]: event.target.value
        })
/* 
        switch (toChange) {
            case 'customer_name':
                this.setState({
                    ...this.state,
                    name: event.target.value
                })
                break;
            case 'street_address':
                this.setState({
                    ...this.state,
                    address: event.target.value
                })
                break;
            case 'city':
                this.setState({
                    ...this.state,
                    city: event.target.value
                })
                break;
            case 'zip':
                this.setState({
                    ...this.state,
                    zip: event.target.value
                })
                break;
            case 'type':
                this.setState({
                    ...this.state,
                    type: event.target.value
                })
            default:
                console.log('idk?');
                break;
        } */
    }

    handleInfoSubmit = (event) => {
        this.props.dispatch({
            type: "SET_INFO",
            payload: this.state
        })
        console.log(this.state);
        this.props.history.push('/checkout')
        // We want to send this info to the database first!

        // this.setState({
        //     ...this.state,
        //     type: 
        // })/* 

        // this.props.dispatch(
        //     { type: 'POST_INFO', payload: this.state }
        // ) */
    }

    render() {
        return (
            <div>

                <form onSubmit={this.handleInfoSubmit}>
                    <input
                        type="text"
                        onChange={(event) => { this.handleChangeFor(event, 'customer_name') }}
                        placeholder="Name"
                    />
                    <input
                        type="text"
                        onChange={(event) => { this.handleChangeFor(event, 'street_address') }}
                        placeholder="Street Address"
                    />
                    <input
                        type="text"
                        onChange={(event) => { this.handleChangeFor(event, 'city') }}
                        placeholder="City"
                    />
                    <input
                        type="text"
                        onChange={(event) => { this.handleChangeFor(event, 'zip') }}
                        placeholder="Zip"
                    />
                    <input
                        type="radio"
                        name='type'
                        id='pickup'
                        value='Pickup'
                        // checked={true}
                        onChange={(event) => {this.handleChangeFor(event, 'type')}}
                    />
                    <label for='pickup'>Pickup</label>
                    <input
                        type="radio"
                        name='type'
                        id='delivery'
                        value='Delivery'
                        // checked={false}
                        onChange={(event) => {this.handleChangeFor(event, 'type')}}
                    />
                    <label for='delivery'>Delivery</label>
                    <Button variant="contained" size="small" type="submit">Submit Info</Button>
                </form>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
});

export default connect(putReduxStateOnProps)(CustomerInfo);