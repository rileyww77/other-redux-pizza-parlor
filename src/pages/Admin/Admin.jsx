import React, { Component } from 'react';
import { connect } from 'react-redux';
class Admin extends Component {
    render() {
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Time Order Placed</th>
                            <th>Type</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.reduxState.orderHistory.map(order => {
                            return(
                                <tr>
                                    <td>{order.customer_name}</td>
                                    <td>{order.time}</td>
                                    <td>{order.type}</td>
                                    <td>{order.total}</td>
                                </tr>
                            )
                        })}
                    </tbody>
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
export default connect(mapStateToProps)(Admin);
