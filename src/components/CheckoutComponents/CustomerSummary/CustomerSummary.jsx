import React, { Component } from 'react';
import { connect } from 'react-redux';

class CustomerSummary extends Component {
    render() {
        return(
          <div>
            <p>{this.props.reduxState.customerInfo.customer_name}</p>
            <p>{this.props.reduxState.customerInfo.street_address}</p>
            <p>{this.props.reduxState.customerInfo.city}</p>
            <h4>{this.props.reduxState.customerInfo.type}</h4>
          </div>
        );
    };
};

const mapStateToProps = (reduxState) => {
  return {
    reduxState
  }
}
export default connect(mapStateToProps)(CustomerSummary);