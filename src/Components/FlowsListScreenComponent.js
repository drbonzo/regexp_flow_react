import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {
    Link
} from 'react-router-dom';

class FlowsListScreenComponent extends Component {

    renderRegexpFlowItem(flow) {
        return (
            <tr key={'flow_' + flow.id}>
                <td>
                    <a href="#" onClick={(e) => {
                        e.preventDefault();
                        this.props.onLoadRegexpFlow(flow.id);
                    }}>
                        #{flow.id}
                    </a>
                </td>
                <td>
                    <a href="#" onClick={(e) => {
                        e.preventDefault();
                        this.props.onLoadRegexpFlow(flow.id);
                    }}>
                        {flow.description ? flow.description : '(no description)'}
                    </a>
                </td>
                <td>
                    <button className="btn btn-danger btn-xs" onClick={() => {
                        this.props.onDeleteRegexpFlow(flow.id);
                    }}>Delete
                    </button>
                </td>
            </tr>
        );
    }

    render() {
        return (
            <div className="MainScreen">
                {this.renderSavedRegexpFlows()}
            </div>
        );
    }

    renderSavedRegexpFlows() {
        if (this.props.regexpFlows.length > 0) {
            return (
                <div className="Screen">
                    <h1 className="Screen__Title">Saved Regexp Flows</h1>
                    <table className="table table-condensed table-striped table-bordered">
                        <tbody>
                            <tr>
                                <th>ID</th>
                                <th>Description</th>
                                <th>Delete</th>
                            </tr>
                            {this.props.regexpFlows.map(this.renderRegexpFlowItem.bind(this))}
                        </tbody>
                    </table>
                </div>);
        } else {
            return (
                <div className="Screen">
                    <h1 className="Screen__Title">You have no saved RegexpFlows</h1>

                    <Link to={'/editor'} className="btn btn-success">
                        Add new RegexpFlow
                    </Link>
                </div>);
        }
    }
}

FlowsListScreenComponent.propTypes = {
    // regexpFlows: PropTypes.arrayOf(PropTypes.instanceOf(RegexpFlow)) // FIXME rehydrate returns RAW objects not RegexpFlow
    regexpFlows: PropTypes.arrayOf(PropTypes.object),
    onDeleteRegexpFlow: PropTypes.func.isRequired,
    onLoadRegexpFlow: PropTypes.func.isRequired
};

export default FlowsListScreenComponent;
