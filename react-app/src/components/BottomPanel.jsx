import React, { Component } from 'react';
import {ContextProvider} from "../context-provider.js"

import SendAgreement from "./SendAgreement.jsx"

export default class BottomPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
          eos: props.props.eos,
          account: props.props.account
        };
    }

    render() {
        return (
            <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-1" role="tabpanel" aria-labelledby="nav-1-tab">
                
                      <SendAgreement props={{eos:this.state.eos, account:this.state.account}}/>

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
        )
    }
}