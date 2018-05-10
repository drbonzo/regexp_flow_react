// @flow

import React from 'react';

import { Link } from 'react-router-dom';
import type { RegexpFlowId, RegexpFlowType } from '../RegexpFlow/BasicTypes';

type Props = {
    regexpFlows: RegexpFlowType[],
    onDeleteRegexpFlow: (flowId: RegexpFlowId) => void,
    onLoadRegexpFlow: (flowId: RegexpFlowId) => void,
};

class FlowsListScreenComponent extends React.Component<Props, {}> {
    renderRegexpFlowItem(flow: RegexpFlowType) {
        const flowId: string = flow.id ? flow.id : '---';

        return (
            <tr key={'flow_' + flowId}>
                <td>
                    <a
                        href="#"
                        onClick={e => {
                            e.preventDefault();
                            this.props.onLoadRegexpFlow(flowId);
                        }}>
                        #{flowId}
                    </a>
                </td>
                <td>
                    <a
                        href="#"
                        onClick={e => {
                            e.preventDefault();
                            this.props.onLoadRegexpFlow(flowId);
                        }}>
                        {flow.description ? flow.description : '(no description)'}
                    </a>
                </td>
                <td>
                    <button
                        className="btn btn-danger btn-xs"
                        onClick={() => {
                            this.props.onDeleteRegexpFlow(flowId);
                        }}>
                        Delete
                    </button>
                </td>
            </tr>
        );
    }

    render() {
        return <div className="MainScreen">{this.renderSavedRegexpFlows()}</div>;
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
                </div>
            );
        } else {
            return (
                <div className="Screen">
                    <h1 className="Screen__Title">You have no saved RegexpFlows</h1>

                    <Link to={'/editor'} className="btn btn-success">
                        Add new RegexpFlow
                    </Link>
                </div>
            );
        }
    }
}

export default FlowsListScreenComponent;
