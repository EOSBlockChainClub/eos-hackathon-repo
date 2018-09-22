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
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </section>
        )
    }

}

function mapStateToProps(state, ownProps) {
    return {
        requestHash: state.requestHash,
    };
}

export default connect(mapStateToProps)(Request);
