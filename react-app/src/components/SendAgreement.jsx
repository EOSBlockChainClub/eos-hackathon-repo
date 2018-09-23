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
        /*
        const eos = Eos({
                keyProvider: allKeys[info.requesterOwnerName].privateKey
            });
        return eos.contract(agreementContractName)
            .then(agreement => agreement.sendagr(
                { 
                    requester: info.requesterActiveAcc,
                    dataprovider: info.dataProviderAcc,
                    hash: info.hash
                },
                {
                    scope: agreementContractName,
                    authorization: [{
                        actor: info.requesterActiveAcc,
                        permission: 'active',
                    }]
                }))
            .then(
                result => {
                    console.log(JSON.stringify(result));
                    if (result.processed.receipt.status == "executed") {
                        dispatch({
                            type: INSERT_AGREEMENT,
                            status: "success"
                        });
                    } else {
                        dispatch({
                            type: INSERT_AGREEMENT,
                            status: "error",
                            error: "Was not executed\n" + JSON.stringify(result, null, 4)
                        });
                    }
                },
                error => dispatch({
                    type: INSERT_AGREEMENT,
                    status: "error",
                    error: "Failed to send\n" + error.message
                }));
        */
    };

    render() {
        return (
            <section id="part-1" class="card-shadow">
                <h2>1: Send Agreement</h2>
                <div class="form-group">
                    <input type="text" class="form-control" id="input-1a" placeholder="Input #"/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </section>
        )
    }
}
