import React, { Component } from 'react';
import {ContextProvider} from "../context-provider.js"

export default class AccountSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedAccount: undefined
        };
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
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
        )
    }
}

//<div className="dropdown-menu" ari{a-labelledby="dropdownMenuButton">
//                                { console.log(value) }
//                            </div>}