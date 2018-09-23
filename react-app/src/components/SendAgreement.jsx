import React, { Component } from 'react';
const agreementContractName = "agreement";


export default class SendAgreement extends Component {
    constructor(props) {
        super(props);
        this.state = {
          eos: props.props.eos,
          account: props.props.account,
          agreement: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateAgreementValue = this.updateAgreementValue.bind(this);
    }

    updateAgreementValue(event) {
        event.preventDefault();
        this.setState({
            agreement: event.target.value
        });
    }; 

    handleSubmit(event) {
        event.preventDefault();

        console.log("handle submit");
        console.log(event);

        const agreement = this.state.agreement;

        return this.state.eos.contract(agreementContractName)
            .then(agreementContract => agreementContract.sendagr(
                { 
                    requester: "requester",
                    dataprovider: "dataprovider",
                    hash: agreement
                },
                {
                    scope: agreementContractName,
                    authorization: [{
                        actor: "requester",
                        permission: "active",
                    }]
                }))
            .then(
                result => {
                    console.log(JSON.stringify(result));
                    if (result.processed.receipt.status == "executed") {
                        console.log("Sending agreement success");
                    } else {
                        console.error("Sending agreement failed");
                    }
                },
                error => console.log("Sending agreement failed\n", error.message)
            )
            .catch(console.error);
    };

    render() {
        return (
            <section id="part-1" className="card-shadow">
                <h2>1: Send Agreement Hash</h2>
                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control" id="input-1a" placeholder="Input Hash" 
                        value={ this.state.agreement }
                        onChange={ this.updateAgreementValue }
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </section>
        )
    }
}
