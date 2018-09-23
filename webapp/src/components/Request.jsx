import React, { Component } from 'react';

export default class Request extends Component {
    render() {
        return (
            <section id="part-request">
                <h2>Request</h2>
                <div class="form-group">
                    <input type="text"
                        class="form-control"
                        id="requestHash"
                        value={this.props.requestHash}
                        placeholder="RequestHash">
                    <input type="text"
                        class="form-control"
                        id="dataProvider"
                        value={this.props.dataProvider}
                        placeholder="Data Provider Account">
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </section>
        )
    }

}

function mapStateToProps(state, ownProps) {
    return {
        requestHash: state.requestHash,
        dataProvider: state.dataProvider
    };
}

export default connect(mapStateToProps)(Request);
