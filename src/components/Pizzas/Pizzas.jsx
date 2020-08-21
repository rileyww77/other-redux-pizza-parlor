import React, { Component } from 'react';
import { connect } from 'react-redux'
import PizzaItem from '../PizzaItem/PizzaItem.jsx';
import './Pizzas.css';
import { withRouter } from 'react-router-dom'
import { Button } from '@material-ui/core';


class Pizzas extends Component {
    render() {
        return (
            <>
                <h1>Menu</h1>
                <p>Click on image to add to cart!</p>
                <Button variant="contained" size="small" onClick={() => this.props.history.push('/customerInfo')}>Customer Info</Button>
                <div>
                    {this.props.pizzaList.map( (pizza) => {
                        return (
                            <PizzaItem key={pizza.id} pizza={pizza}/>
                        );
                    })}
                </div>
            </>
        );
    }
}

const putReduxDataProps = (reduxState) => {
    return {
      pizzaList: reduxState.pizzaList
    }
}

export default connect(putReduxDataProps)(withRouter(Pizzas));