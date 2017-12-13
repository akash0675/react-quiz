import React, { Component } from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom';
import Home from './components/home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Home} />
      </div>
    );
  }
}

export default App;
