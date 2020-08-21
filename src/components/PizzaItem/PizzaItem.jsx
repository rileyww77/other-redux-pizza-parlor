import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button } from '@material-ui/core';

class PizzaItem extends Component {
    state ={
        selected: false,
        inCart: false,
        newOrder: {
            name: this.props.pizza.name,
            price: this.props.pizza.price,
            id: this.props.pizza.id,
            quantity: 1,
        }
    }

    clickPizza = (pizza) => {
        this.setState({
            selected: !this.state.selected,
        })
        console.log('Clicked', pizza.name);
    }

    addToCart = (pizzaId) => {
        console.log(pizzaId);
        console.log(this.state.newOrder);
        this.props.dispatch({type: 'ADD_PIZZA', payload:this.state.newOrder})        
        this.setState({
            inCart: !this.state.inCart,
        })
    }

    handleChangeFor = (event, propertyToChange) => {
        this.setState({
            newOrder: {
                ...this.state.newOrder,
                [propertyToChange]: event.target.value, 
            }
        })                                                                  
    }

    render() {
        if (this.state.selected === false) {
            return (
                <div className="pizza">
                    <h2>{this.props.pizza.name}</h2>
                    <img src={this.props.pizza.image_path} alt={this.props.pizza.name} onClick={ () => this.clickPizza(this.props.pizza)}/>
                    <p>{this.props.pizza.description}</p>
                    <p>Price: {this.props.pizza.price}</p>
                </div>
            );
        } else if (this.state.selected === true && this.state.inCart === true) {
            return (
                <div className="pizza inCart">
                    <h2>{this.props.pizza.name} ({this.state.newOrder.quantity}x In Cart)</h2>
                    <img src={this.props.pizza.image_path} alt={this.props.pizza.name} />
                    <p>{this.props.pizza.description}</p>
                    <p>Price: {this.props.pizza.price}
                    </p>
                </div>
            );
        } else if (this.state.selected === true) {
            return (
                <div className="pizza selected">
                    <h2>{this.props.pizza.name}</h2>
                    <img src={this.props.pizza.image_path} alt={this.props.pizza.name} onClick={ () => this.clickPizza(this.props.pizza)}/>
                    <p>{this.props.pizza.description}</p>
                    <p>Price: {this.props.pizza.price} 
                        <input placeholder="Quantity" type="number" value={this.state.newOrder.quantity} onChange = {(event) => this.handleChangeFor(event, 'quantity')} />
                        <Button variant="contained" size="small" color="primary" onClick={ () => this.addToCart(this.props.pizza.id)}>Add to Cart</Button>
                    </p>
                </div>
            );

        }
    }
}

export default connect()(PizzaItem);