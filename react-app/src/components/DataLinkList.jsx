import React, { Component } from 'react';
import {ContextProvider} from "../context-provider.js"

export default class DataLinkList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          eos: props.props.eos,
          account: props.props.account,
          linkData: []
        };
    }

    componentDidMount() {
        var self = this;

        this.state.eos.getTableRows({
          code:'agreement',
          scope:'agreement',
          table:'transfers',
          json:true
        }).then(function(res) {
          console.log(res)
          self.setState({ eos: self.state.eos, linkData: res.rows });
        });
    }

    render() {
        return (
            <div className="view-right-top__data-points card-shadow">
                <table className="table table-striped view-right-top__data-points-table">
                    <thead>
                        <tr>
                            <th scope="col">Prim Key</th>
                            <th scope="col">Origin</th>
                            <th scope="col">Destination</th>
                            <th scope="col">Agreement Hash</th>
                            <th scope="col">Data Hash</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.linkData.map((linkData,i) => 
                          <DataLinkTableRow linkData={linkData} key={i}/>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

const DataLinkTableRow = ({linkData}) => {
    return(
        <tr>
            <td>{ linkData.prim_key }</td>
            <td>{ linkData.requester }</td>
            <td>{ linkData.dataprovider }</td>
            <td>{ linkData.agreement }</td>
            <td>{ linkData.data }</td>
            <td> <a className="btn btn-warning">Request deletion</a></td>
        </tr>
    )
}