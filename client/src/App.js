import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import ChannelsList from './ChannelsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Apollo</h1>
        </header>
        <ChannelsList />
      </div>
    );
  }
}

export default App;
