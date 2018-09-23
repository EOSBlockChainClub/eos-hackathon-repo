import React, { Component } from 'react';
const Eos = require("eosjs");
//const allKeys = require("../../../app/pickKeys.js")();
const agreementContractName = "agreement";


export default class SendAgreement extends Component {
    constructor(props) {
        super(props);
        this.state = {
          eos: props.props.eos,
          account: props.props.account
        };
    }

    handleSubmit(event) {
        event.preventDefault();

        console.log("handle submit");
        console.log(event);

        let agreement = event.agreement.value;

        return this.state.eos.contract(agreementContractName)
            .then(agreement => agreement.sendagr(
                { 
                    requester: "requester",
                    dataprovider: "dataprovider",
                    hash: agreement
                },
                {
                    scope: agreementContractName,
                    authorization: [{
                        actor: "requester",
                        permission: 'active',
                    }]
                }))
            .then(
                result => {
                    console.log(JSON.stringify(result));
                    /*if (result.processed.receipt.status == "executed") {
                        dispatch({
                            type: "INSERT_AGREEMENT",
                            status: "success"
                        });
                    } else {
                        dispatch({
                            type: "INSERT_AGREEMENT",
                            status: "error",
                            error: "Was not executed\n" + JSON.stringify(result, null, 4)
                        });
                    }
                    */
                }/*
                ,
                error => dispatch({
                    type: "INSERT_AGREEMENT",
                    status: "error",
                    error: "Failed to send\n" + error.message
                })
                */
            );

    };

    render() {
        return (
            <section id="part-1" className="card-shadow">
                <h2>1: Send Agreement</h2>
                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control" id="input-1a" placeholder="Input #" ref={(input) => this.agreement = input}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </section>
        )
    }
}
