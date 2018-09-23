import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AccountSelector from "./components/AccountSelector.jsx"
const allAccounts = require("./utils/keys.json");
const { Provider } = React.createContext({ allAccounts: allAccounts });

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <Provider value={ 123 }>
            <AccountSelector />
            To get started, edit <code>src/App.js</code> and save to reload.
          </Provider>
        </div>
      </div>
    );
  }
}

export default App;
