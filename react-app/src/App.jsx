import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Eos from "eosjs";

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
      eos: Eos({keyProvider: "5K4sG3qxFFbRyFr896g8rfqFPDAwkZnVG6W17FGdu2gQTT3w1L4"}),
      account: null
    };
  }

  render() {
    return (
      <div id="main">

        <div class="view-top-bar">
            <div class="view-top-bar__logo">LOGO</div>
            <AccountSelector props={{eos:this.state.eos, account:this.state.account}} />

        </div>

        <div class="view-left">
          <NavLeft props={{eos:this.state.eos, account:this.state.account}} />
        </div>
        <div class="view-right-top">
          <DataLinkList props={{eos:this.state.eos, account:this.state.account}} />
            
        </div>
        <div class="view-right-bottom">
            <div class="view-right-bottom__inputs card-shadow">
              <BottomPanel props={{eos:this.state.eos, account:this.state.account}} />
            </div>
        </div>
    </div>
    );
  }
}

export default App;
