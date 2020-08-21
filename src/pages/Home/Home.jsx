import React from 'react';
import { withRouter } from 'react-router-dom'
import { Button } from '@material-ui/core';

const Home = (props) => {
    return(
    <div className="App">

      <br/>
      <img alt="Pizza" src="images/pizza_photo.png"/>
      <p>Pizza is great.</p>
      <Button variant="contained" size="small" color="primary" onClick={() => props.history.push('/pizzas')}>Order a pizza!</Button>
    </div>
    );
}


export default withRouter( Home );
