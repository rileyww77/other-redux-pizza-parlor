import React, { Component } from 'react';
import {connect} from 'react-redux'

class Cart extends Component {

    state = []

    componentDidMount = () => {
        
    }

    deletePizza = () => {
        const newOrder = order.filter((pizza, index) => {
            if (pizza.id === index) {
                return false;
            }
        })
    }

    render() {

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Pizza</th>
                            <th>Quantity</th>
                            <th>Total Cost</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.reduxState.orderList.map(pizza => {
                            return(
                                <td>pizza.name</td>
                                <td>pizza.quantity</td>
                                <td>total.cost</td>
                                <td><button onClick={this.props.deletePizza}></button></td>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }

}