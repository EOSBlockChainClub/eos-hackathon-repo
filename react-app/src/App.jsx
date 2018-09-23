import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {ContextProvider} from "./context-provider.js"

import AccountSelector from "./components/AccountSelector.jsx"
const allAccounts = require("./utils/keys.json");
//const { Provider } = React.createContext({ allAccounts: allAccounts });

class App extends Component {

  render() {
    return (
      <div id="main">

        <div class="view-top-bar">
            <div class="view-top-bar__logo">LOGO</div>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    Select Account
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Requester A</a>
                    <a class="dropdown-item" href="#">Requester B</a>
                </div>
            </div>

        </div>

        <div class="view-left">
           
            <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" id="nav-1-tab" data-toggle="tab" href="#nav-1" role="tab"
                        aria-controls="nav-1" aria-selected="true">Send Agreement</a>
                    <a class="nav-item nav-link" id="nav-2-tab" data-toggle="tab" href="#nav-2" role="tab"
                        aria-controls="nav-2" aria-selected="false">Check Agreement</a>
                    <a class="nav-item nav-link" id="nav-3-tab" data-toggle="tab" href="#nav-3" role="tab"
                        aria-controls="nav-3" aria-selected="false">Send Data</a>
                        <a class="nav-item nav-link" id="nav-4-tab" data-toggle="tab" href="#nav-4" role="tab"
                        aria-controls="nav-4" aria-selected="false">Trace Data</a>
                </div>
            </nav>

        </div>
        <div class="view-right-top">
            <div class="view-right-top__data-points card-shadow">
                <table class="table table-striped view-right-top__data-points-table">
                    <thead>
                        <tr>
                            <th scope="col">Origin</th>
                            <th scope="col">Destination</th>
                            <th scope="col">Agreement #</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="view-right-bottom">
            <div class="view-right-bottom__inputs card-shadow">


                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-1" role="tabpanel" aria-labelledby="nav-1-tab">
                
                        <section id="part-1" class="card-shadow">
                            <h2>1: Send Agreement</h2>
                            <div class="form-group">
                                <input type="text" class="form-control" id="input-1a" placeholder="Input #"/>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </section>

                    </div>
                    <div class="tab-pane fade" id="nav-2" role="tabpanel" aria-labelledby="nav-2-tab">
                        <section id="part-3" class="card-shadow">
                            <h2>3: Check Agreement</h2>
                            <div class="form-group">
                                <input type="text" class="form-control" id="input-3a" placeholder="Input Account"/>
                                <input type="text" class="form-control" id="input-3b" placeholder="Input #"/>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </section>
                    </div>
                    <div class="tab-pane fade" id="nav-3" role="tabpanel" aria-labelledby="nav-3-tab">
                        <section id="part-4" class="card-shadow">
                            <h2>4: Send Data</h2>
                            <div class="form-group">
                                <input type="text" class="form-control" id="input-4a" placeholder="Input # Agreement"/>
                                <input type="text" class="form-control" id="input-4b" placeholder="Input # Data"/>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </section>
                    </div>
                    <div class="tab-pane fade" id="nav-4" role="tabpanel" aria-labelledby="nav-4-tab">
                        <section id="part-5" class="card-shadow">
                            <h2>5: Trace Data</h2>
                            <div class="form-group">
                                <input type="text" class="form-control" id="input-5a" placeholder="Input # Data"/>
                                <input type="text" class="form-control" id="input-5b" placeholder="Input Requester Account"/>
                            </div>
                            <button type="submit" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Submit</button>

                            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Chart</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                            
                                            <section>
                                                <table class="table table-striped card-shadow">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Origin</th>
                                                            <th scope="col">Destination</th>
                                                            <th scope="col">Agreement #</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </section>
                            
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default App;
