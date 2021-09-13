import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Home from './components/Home';
import { Route, Switch } from 'react-router';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './StrictAccess.jsx';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/about" component={ About } />
          <Route exact path="/" component={ Home } />
          <Route path="/users/:id" render={(props) => <Users {...props} greetingsMessage="Good Morning"/> } />
          <Route 
        path="/strict-access" 
        render={() => 
        <StrictAccess 
        user={ { username: 'joão', password: '1234' } } /> } 
      />
        </Switch>
        <Link to="/About" > About </Link>
        <Link to="/Users" > Users </Link>
        <Link to="/" > Home </Link>
        <Link to="/Strict-access"> Restrito </Link>
      </BrowserRouter>
    );
  }
}

export default App;
