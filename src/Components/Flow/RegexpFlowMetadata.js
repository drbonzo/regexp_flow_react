import React, {Component} from 'react';

class RegexpFlowMetadata extends Component {

	constructor(props) {
		super();
	}

	render() {
		return (
			<div className="RegexpFlow__Metadata">
				<form>
					<div className="form-group form-group-sm">
						<label htmlFor="RegexpFlow__Metadata__Description">Description</label>
						<input type="text" className="form-control" id="RegexpFlow__Metadata__Description" placeholder="add some description" value={this.props.description} onChange={this.props.onDescriptionChange}/>
					</div>
				</form>
			</div>
		);
	}
}

RegexpFlowMetadata.propTypes = {
	description: React.PropTypes.string.isRequired,
	onDescriptionChange: React.PropTypes.func.isRequired
};
export default RegexpFlowMetadata;
