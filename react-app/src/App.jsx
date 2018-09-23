import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {ContextProvider} from "./context-provider.js"

import AccountSelector from "./components/AccountSelector.jsx"
import NavLeft from "./components/NavLeft.jsx"
import DataLinkList from "./components/DataLinkList.jsx"
import BottomPanel from "./components/BottomPanel.jsx"


const allAccounts = require("./utils/keys.json");
//const { Provider } = React.createContext({ allAccounts: allAccounts });

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eos: null,
      account: null
    };
  }

  render() {
    return (
      <div id="main">

        <div class="view-top-bar">
            <div class="view-top-bar__logo">LOGO</div>
            <AccountSelector />

        </div>

        <div class="view-left">
          <NavLeft />
        </div>
        <div class="view-right-top">
          <DataLinkList />
            
        </div>
        <div class="view-right-bottom">
            <div class="view-right-bottom__inputs card-shadow">
              <BottomPanel />
            </div>
        </div>
    </div>
    );
  }
}

export default App;
