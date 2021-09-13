import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Home from './components/Home';
import { Route } from 'react-router';
import About from './components/About';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/about" component={ About } />
        <Route exact path="/" component={ Home } />
        <Route path="/Users" component={ Users } />
        <Link to="/About" > About </Link>
        <Link to="/Users" > Users </Link>
        <Link to="/" > Home </Link>
      </BrowserRouter>
    );
  }
}

export default App;
