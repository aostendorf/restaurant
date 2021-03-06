import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { isAuthenticated } from '../fakeAuth';
import axios from 'axios';

class Menu extends React.Component {
  state = { items: []}

  componentDidMount() {
    axios.get('/api/items')
    .then( ({ data }) => this.setState({ items: data}) )
  }

render() {
  const { items } = this.state;
  if (isAuthenticated()) {
    return (
      <ul>
        { items.map( i =>
        <li key={i.id}>
          <Link to={`/items/${i.id}`}>{i.name}</Link>
        </li>
        )
      }
      </ul>
    )
  } else {
    return <Redirect to="/login" />
   }
  }
}


export default Menu;