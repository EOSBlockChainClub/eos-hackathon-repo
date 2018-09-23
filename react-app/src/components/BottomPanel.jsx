import React, { Component } from 'react';
import {ContextProvider} from "../context-provider.js"

import SendAgreement from "./SendAgreement.jsx"
import TraceBox from "./TraceBox.jsx"

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
            <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-1" role="tabpanel" aria-labelledby="nav-1-tab">
                
                      <SendAgreement props={{eos:this.state.eos, account:this.state.account}}/>

                    </div>
                    <div className="tab-pane fade" id="nav-2" role="tabpanel" aria-labelledby="nav-2-tab">
                        <section id="part-3" className="card-shadow">
                            <h2>3: Check Agreement</h2>
                            <div className="form-group">
                                <input type="text" className="form-control" id="input-3a" placeholder="Requester Account"/>
                                <input type="text" className="form-control" id="input-3b" placeholder="Agreement Hash"/>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </section>
                    </div>
                    <div className="tab-pane fade" id="nav-3" role="tabpanel" aria-labelledby="nav-3-tab">
                        <section id="part-4" className="card-shadow">
                            <h2>4: Send Data</h2>
                            <div className="form-group">
                                <input type="text" className="form-control" id="input-4a" placeholder="Unique Id"/>
                                <input type="text" className="form-control" id="input-4b" placeholder="Data Hash"/>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </section>
                    </div>
                    <div className="tab-pane fade" id="nav-4" role="tabpanel" aria-labelledby="nav-4-tab">
                        <TraceBox props={{eos:this.state.eos, account:this.state.account}} />
                    </div>
                </div>
        )
    }
}