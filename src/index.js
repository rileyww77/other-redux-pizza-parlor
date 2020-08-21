import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger'

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';



const pizzaList = (state = [], action) => {
    if (action.type === 'SET_PIZZAS') {
      return action.payload;
    }
    return state;
}

const pizzaReducer = (state = [], action) => {
    if (action.type === 'ADD_PIZZA') {
        return [...state, action.payload];
    } else if (action.type === 'CHECKOUT') {
        return []
    }
    console.log(state);
    return state;
}

const pizzaTotalReducer = (state = 0, action) => {
    if (action.type === 'ADD_PIZZA') {
        let subTotal = Number(action.payload.price) * Number(action.payload.quantity)
        return state + subTotal
    } else if (action.type === 'CHECKOUT') {
        return 0
    }
    return state
}

const customerInfo = (state = {}, action) => {
    if (action.type === 'SET_INFO') {
      return action.payload;
    } else if (action.type === 'CHECKOUT') {
        return {};
    //checkout action will reset customer info to blank
    }
    return state;
  }

const orderHistory = (state = [], action) => {
    if (action.type === 'SET_ORDERS') {
        return action.payload
    }
    return state
}



  /* customer_name,
     street_address,
     city,
     zip,
     type,
     total,
     pizzas */

     
    const store = createStore(
    combineReducers({
        pizzaList,
        pizzaReducer,
        orderHistory,
        customerInfo,
        pizzaTotalReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));