import React, {Component} from 'react';

class FilterConfigControls extends Component {
    render() {
        return (
            <div className="btn-group pull-right">
                <button type="button" className="btn btn-default btn-xs regexpHelpButton" title="Toggle help" onClick={this.props.toggleShowHelp}>?</button>
                <button type="button" className="btn btn-info btn-xs" title="Toggle description" onClick={this.props.toggleShowDescription}><span className="glyphicon glyphicon-pencil"/></button>
                <button type="button" className="btn btn-default btn-xs" onClick={this.props.onEnabledClick}>{this.props.enabled ? 'Disable' : 'Enable'}</button>
                <button type="button" className="btn btn-danger btn-xs" onClick={this.props.onDeleteClick}><span className="glyphicon glyphicon-remove"/></button>
            </div>
        );
    }
}

FilterConfigControls.propTypes = {
    enabled: React.PropTypes.bool,
    toggleShowHelp: React.PropTypes.func,
    toggleShowDescription: React.PropTypes.func,
    onEnabledClick: React.PropTypes.func,
    onDeleteClick: React.PropTypes.func
};

export default FilterConfigControls;