import React, {PropTypes, Component} from 'react';
import {
    Link
} from 'react-router-dom';

class FlowsListScreenComponent extends Component {
    render() {
        return (
            <div className="MainScreen">
                <h1>Saved Regexp Flows</h1>

                <ul>
                    {this.props.regexpFlows.map((flow) => <li key={'flow_' + flow.id}><Link to={'/flows/' + flow.id}>Flow #{flow.id}</Link> - {flow.description}</li>)}
                </ul>
            </div>
        );
    }
}

FlowsListScreenComponent.propTypes = {
    // regexpFlows: PropTypes.arrayOf(PropTypes.instanceOf(RegexpFlow)) // FIXME rehydrate returns RAW objects not RegexpFlow
    regexpFlows: PropTypes.arrayOf(PropTypes.object)
};

export default FlowsListScreenComponent;