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
            <div class="view-right-top__data-points card-shadow">
                <table class="table table-striped view-right-top__data-points-table">
                    <thead>
                        <tr>
                            <th scope="col">Origin</th>
                            <th scope="col">Destination</th>
                            <th scope="col">Agreement #</th>
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
            <td>{linkData.requester}</td>
            <td>{linkData.dataprovider}</td>
            <td>{linkData.agreement}</td>
        </tr>
    )
}