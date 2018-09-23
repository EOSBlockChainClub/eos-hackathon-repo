import React, { Component } from 'react';
const agreementContractName = "agreement";


export default class TraceBox extends Component {
  constructor(props) {
      super(props);
      this.state = {
        eos: props.props.eos,
        account: props.props.account,
        agreement: ""
      };
      //this.handleSubmit = this.handleSubmit.bind(this);
      //this.updateAgreementValue = this.updateAgreementValue.bind(this);
  }

  render() {
        return (
          <section id="part-5" className="card-shadow">
            <h2>5: Trace Data</h2>
            <div className="form-group">
                <input type="text" className="form-control" id="input-5a" placeholder="Input # Data"/>
                <input type="text" className="form-control" id="input-5b" placeholder="Input Requester Account"/>
            </div>
            <button type="submit" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Submit</button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Chart</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
            
                            <section>
                                <table className="table table-striped card-shadow">
                                    <thead>
                                        <tr>
                                            <th scope="col">Origin</th>
                                            <th scope="col">Destination</th>
                                            <th scope="col">Agreement Hash</th>
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
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
      )
    }
}