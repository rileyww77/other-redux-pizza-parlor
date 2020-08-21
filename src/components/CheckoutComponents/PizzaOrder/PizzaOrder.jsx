import React, { Component } from 'react';
import { connect } from 'react-redux';
class PizzaOrder extends Component {
    
    render() {

        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Qty</th>
                            <th>Pizza</th>
                            <th>Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.reduxState.pizzaReducer.map(pizza => {
                            return(
                                <tr>
                                    <td>{pizza.quantity}</td>
                                    <td>{pizza.name}</td>
                                    <td>{(Number(pizza.price)* Number(pizza.quantity))}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Total: </td>
                            <td></td>
                            <td>{this.props.reduxState.pizzaTotalReducer}</td>
                        </tr>
                    </tfoot>
                </table>

            </div>
        );
    };
};

const mapStateToProps = (reduxState) => {
  return {
    reduxState
  }
}

export default connect(mapStateToProps)(PizzaOrder);