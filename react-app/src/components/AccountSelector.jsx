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
            <section className="app-dropdown card-shadow">
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        Select Account
                    </button>
                    <ContextProvider.Consumer>
                        { 
                            value => console.log(value)
                        }
                    </ContextProvider.Consumer>
                </div>
            </section>
        )
    }
}

//<div className="dropdown-menu" ari{a-labelledby="dropdownMenuButton">
//                                { console.log(value) }
//                            </div>}