import React, {Component} from 'react';

class TextProcessorControlls extends Component {
	render() {
		return (
			<div className="btn-group pull-right">
				<button type="button" className="btn btn-xs btn-default regexpHelpButton" title="Toggle help" onClick={this.props.onShowHelpClicked}>?</button>
				<button type="button" className="btn btn-xs btn-info" title="Toggle description"><span className="glyphicon glyphicon-pencil"/></button>
				<button type="button" className="btn btn-xs btn-warning" title="Disable/enable textProcessor"><span className="glyphicon glyphicon-pause"/></button>
				<button type="button" className="btn btn-xs btn-danger" title="Remove textProcessor"><span className="glyphicon glyphicon-trash"/></button>
			</div>
		);
	}
}

TextProcessorControlls.propTypes = {
	onShowHelpClicked: React.PropTypes.func
};
export default TextProcessorControlls;
