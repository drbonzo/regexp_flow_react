// @flow

import React from 'react';

type Props = {
    enabled: boolean,
    toggleShowHelp: () => void,
    toggleShowDescription: () => void,
    onEnabledClick: () => void,
    onDeleteClick: () => void,
};

class FilterConfigControls extends React.Component<Props, {}> {
    render() {
        return (
            <div className="btn-group pull-right">
                <button type="button" className="btn btn-default btn-xs regexpHelpButton" title="Toggle help" onClick={this.props.toggleShowHelp}>
                    ?
                </button>
                <button type="button" className="btn btn-info btn-xs" title="Toggle description" onClick={this.props.toggleShowDescription}>
                    <span className="glyphicon glyphicon-pencil" />
                </button>
                <button type="button" className="btn btn-default btn-xs" onClick={this.props.onEnabledClick}>
                    {this.props.enabled ? 'Disable' : 'Enable'}
                </button>
                <button type="button" className="btn btn-danger btn-xs" onClick={this.props.onDeleteClick}>
                    <span className="glyphicon glyphicon-remove" />
                </button>
            </div>
        );
    }
}

export default FilterConfigControls;
