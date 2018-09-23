import React, { Component } from 'react';
const agreementContractName = "agreement";


export default class SendData extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
          eos: props.props.eos,
          account: props.props.account,
          primKey: "",
          dataHash: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updatePrimKeyValue = this.updatePrimKeyValue.bind(this);
        this.updateDataHashValue = this.updateDataHashValue.bind(this);
    }

    updatePrimKeyValue(event) {
        event.preventDefault();
        this.setState({
            primKey: event.target.value
        });
    }; 

    updateDataHashValue(event) {
        event.preventDefault();
        this.setState({
            dataHash: event.target.value
        });
    }; 

    handleSubmit(event) {
        event.preventDefault();

        console.log("handle submit");
        console.log(event);

        const primKey = parseInt(this.state.primKey);
        console.log(typeof primKey);
        const dataHash = this.state.dataHash;

        return this.state.eos.contract(agreementContractName)
            .then(agreementContract => agreementContract.senddata(
                { 
                    dataprovider: "dataprovider",
                    prim_key: primKey,
                    datahash: dataHash
                },
                {
                    scope: agreementContractName,
                    authorization: [{
                        actor: "dataprovider",
                        permission: "active",
                    }]
                }))
            .then(
                result => {
                    console.log(JSON.stringify(result));
                    if (result.processed.receipt.status == "executed") {
                        console.log("Sending data success");
                    } else {
                        console.error("Sending data failed");
                    }
                },
                error => {
                    console.error(error);
                    console.error("Sending data failed\n", error.message);
                }
            )
            .catch(console.error);
    };

    render() {
        return (
            <section id="part-4" className="card-shadow">
                <h2>4: Send Data</h2>
                <form onSubmit={ this.handleSubmit }>
                <div className="form-group">
                    <input type="text" className="form-control" id="input-4a" placeholder="Primary Key" 
                        value={ this.state.primKey }
                        onChange={ this.updatePrimKeyValue }
                    />
                    <input type="text" className="form-control" id="input-4b" placeholder="Data Hash" 
                        value={ this.state.dataHash }
                        onChange={ this.updateDataHashValue }
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </section>
        )
    }
}
