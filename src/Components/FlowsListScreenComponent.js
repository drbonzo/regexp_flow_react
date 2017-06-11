import React, {PropTypes, Component} from 'react';
import {
    Link
} from 'react-router-dom';

class FlowsListScreenComponent extends Component {

    renderRegexpFlowItem(flow) {
        return (
            <tr key={'flow_' + flow.id}>
                <td><Link to={'/flows/' + flow.id}>#{flow.id}</Link></td>
                <td><Link to={'/flows/' + flow.id}>{flow.description ? flow.description : "(no description)"}</Link></td>
                <td>
                    <button type="button" className="btn btn-danger btn-xs" onClick={() => {
                        this.props.onDeleteRegexpFlow(flow.id);
                    } }>X
                    </button>
                </td>
            </tr>
        );
    }

    render() {
        return (
            <div className="MainScreen">
                <h1>Saved Regexp Flows</h1>

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
            </div>
        );
    }
}

FlowsListScreenComponent.propTypes = {
    // regexpFlows: PropTypes.arrayOf(PropTypes.instanceOf(RegexpFlow)) // FIXME rehydrate returns RAW objects not RegexpFlow
    regexpFlows: PropTypes.arrayOf(PropTypes.object),
    onDeleteRegexpFlow: PropTypes.func.isRequired
};

export default FlowsListScreenComponent;
