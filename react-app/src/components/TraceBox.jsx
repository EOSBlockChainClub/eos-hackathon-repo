import React, { Component } from 'react';
const agreementContractName = "agreement";


export default class TraceBox extends Component {
  constructor(props) {
      super(props);
      this.state = {
        eos: props.props.eos,
        account: props.props.account,
        route: []
      };
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    console.log("render called");
    console.log(this.state);
        return (
          <section id="part-5" className="card-shadow">
            <h2>5: Trace Data</h2>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                  <input type="text" className="form-control" id="input-5a" placeholder="Input # Data" ref={(input) => this.datahash = input}/>
                  <input type="text" className="form-control" id="input-5b" placeholder="Input Requester Account" ref={(input) => this.requester = input}/>
              </div>
              <button type="submit" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Submit</button>
            </form>

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
                                <ResultRouteTable data={this.state.route} />
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

    handleSubmit(event) {
      event.preventDefault();
      let datahash = this.datahash.value;
      let requester = this.requester.value;

      this.state.eos.getTableRows({
        code: 'agreement',
        scope: "agreement",
        table: 'transfers',
        json: true,
        limit: "100"
      }).then((obj) => {
        console.log("received:");
        console.log(obj);
        this.setState({eos:this.state.eos, account:this.state.account, route:obj.rows}); //.route = getPath(datahash, requester, obj["rows"]);
        //this.state.route = getPathReverse(datahash, requester, obj["rows"]);
      });
    }
}

/*
eos.getTableRows({
    code: 'agreement',
    scope: "agreement",
    table: 'transfers',
    json: true,
    limit: "100"
}).then((obj) => {
    getPath("data1", "testi", obj["rows"]);
    getPathReverse("data1", "testa", obj["rows"]);
});
*/


function getPathReverse(hash, sender, rows) {
    let rowsWithHash = rows.filter(row => row.data == hash);
    let rowsWithSender = rowsWithHash.filter(row => row.dataprovider == sender);
    let startingPaths = rowsWithHash.filter(row => row.dataprovider == sender);

    let pathsArray = [];

    if (startingPaths.length > 0 ) {
        for (let sPath in startingPaths) {
            let a = getNextPathReverse(startingPaths[sPath], rowsWithHash);
            let routePaths = []
            routePaths.push(startingPaths[sPath]);
            while (a) {
                routePaths.push(a);
                a = getNextPathReverse(a, rowsWithHash);
            }
            pathsArray.push(routePaths);
        }
        
    }

    // print
    for (let paths in pathsArray) {
        console.log("Route" + paths);
        for (let path in pathsArray[paths]) {
            console.log(pathsArray[paths][path].dataprovider + "->" + pathsArray[paths][path].requester)
        }
    }

    return pathsArray;
}

function getNextPathReverse(startingPath, rowsWithHash) {
    let next = rowsWithHash.filter(row => row.dataprovider == startingPath.requester);
    try {
        let loop = "data" in next[0];
        if (loop) {
            return next[0];
        } else {
            return false;
        }  
    } catch (err) {
        return false;
    } 
}

function getPath(hash, sender, rows) {
    let rowsWithHash = rows.filter(row => row.data == hash);
    let rowsWithSender = rowsWithHash.filter(row => row.requester == sender);
    let startingPaths = rowsWithHash.filter(row => row.requester == sender);

    let pathsArray = [];

    if (startingPaths.length > 0 ) {
        for (let sPath in startingPaths) {
            //console.log(startingPaths[sPath]);
            let a = getNextPath(startingPaths[sPath], rowsWithHash);
            let routePaths = []
            routePaths.push(startingPaths[sPath]);
            while (a) {
                console.log(a);
                routePaths.push(a);
                a = getNextPath(a, rowsWithHash);
            }
            pathsArray.push(routePaths);
        }
        
    }
    console.log(pathsArray);
    for (let paths in pathsArray) {
        console.log("Reverse route " + paths);
        for (let path in pathsArray[paths]) {
            console.log(pathsArray[paths][path].requester + "->" + pathsArray[paths][path].dataprovider)
        }
    }
}

function getNextPath(startingPath, rowsWithHash) {
    let next = rowsWithHash.filter(row => row.requester == startingPath.dataprovider);
    //console.log(next);
    try {
        let loop = "data" in next[0];
        if (loop) {
            return next[0];
        } else {
            return false;
        }  
    } catch (err) {
        return false;
    } 
}

const ResultRouteTable = ({data}) => (
    <table className="table table-striped card-shadow">
        <thead>
            <tr>
                <th scope="col">Origin</th>
                <th scope="col">Destination</th>
                <th scope="col">Agreement Hash</th>
                <th scope="col">Data Hash</th>
            </tr>
        </thead>
        <tbody>
            {data.map((data,i) => 
              <ResultLinkRow data={data} key={i}/>
            )}
        </tbody>
    </table>
)


const ResultLinkRow = ({data}) => {
    return(
        <tr>
            <td>{data.dataprovider}</td>
            <td>{data.requester}</td>
            <td>{data.requester}</td>
            <td>{data.data}</td>
        </tr>
    )
}
