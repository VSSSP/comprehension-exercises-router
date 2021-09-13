import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Home from './components/Home';
import { Route, Switch } from 'react-router';
import About from './components/About';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/about" component={ About } />
          <Route exact path="/" component={ Home } />
          <Route path="/users/:id" render={(props) => <Users {...props} greetingsMessage="Good Morning"/> } />
          <Link to="/About" > About </Link>
          <Link to="/Users" > Users </Link>
          <Link to="/" > Home </Link>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

// No que diz respeito ao componente Route , você pode associar um componente com o caminho da URL via children , component ou render ;
// Faz-se uso da prop component de Route quando não é necessário passar informações adicionais via props para o componente a ser mapeado. Ou seja, se você tem um componente About que não precisa de props setadas para ser chamado, e você precisa mapeá-lo para o caminho de URL /about , você poderia criar uma rota da seguinte forma: <Route path="/about" component={About} /> ;
// Já a prop render de Route é usada quando é necessário passar informações adicionais via props para o componente a ser mapeado. Ou seja, se você tem um componente Movies que precisa receber uma lista de filmes via props movies , e você precisa mapeá-lo para o caminho de URL /movies , você poderia criar uma rota da seguinte forma: <Route path="/movies" render={(props) => <Movies {...props} movies={['Cars', 'Toy Story', 'The Hobbit']} />} /> ;
// Tanto component quanto render permitem que você tenha acesso a informações de rota ( match , location e history ) via props do componente que você está mapeando. Ou seja, se você tem a rota <Route path="/about" component={About} /> , About terá match , location e history setadas via props.