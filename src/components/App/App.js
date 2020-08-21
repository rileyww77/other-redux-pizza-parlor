import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Checkout from '../../pages/Checkout/Checkout.jsx'
import Home from '../../pages/Home/Home.jsx'
import Admin from '../../pages/Admin/Admin.jsx'
import Pizzas from '../Pizzas/Pizzas.jsx'
import CustomerInfo from './../../pages/CustomerInfo/CustomerInfo.jsx'
import 'fontsource-roboto';

class App extends Component {

  componentDidMount() {
    this.getPizzas();
    this.getOrders();
  }

  getPizzas = () => {
    axios.get('/api/pizza')
    .then( (response) => {
      console.log('pizzas:', response.data);
      this.props.dispatch({type:'SET_PIZZAS', payload: response.data});
    }).catch( (error) => {
      console.log('error in get pizzas', error);
    })
  }

  getOrders = () => {
    axios.get('/api/order')
    .then( (response) => {
      console.log('orders:', response.data);
      this.props.dispatch({type:'SET_ORDERS', payload: response.data});
    }).catch( (error) => {
      console.log('error in get orders', error);
    })
  }

  render() {
    return (
      <Router >
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Prime Pizza</h1>
            <h3>Current Order Total: ${this.props.reduxState.pizzaTotalReducer}</h3>
          </header>
          
          <Route exact path="/" component={Home} />
          <Route exact path="/customerInfo" component={CustomerInfo} />
          <Route exact path="/pizzas" component={Pizzas} />
          <Route exact path="/checkout" component={Checkout} />
          <Route path="/admin" component={Admin} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return {
    reduxState
  }
}

export default connect(mapStateToProps)(App);
