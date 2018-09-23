import React, { Component } from 'react';
import {ContextProvider} from "../context-provider.js"

export default class NavLeft extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedAccount: undefined
        };
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
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
        )
    }

}