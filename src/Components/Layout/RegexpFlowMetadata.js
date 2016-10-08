import React, {Component} from 'react';

class RegexpFlowMetadata extends Component {
	render() {
		return (
			<div className="RegexpFlow__Metadata">
				<form>
					<div className="form-group form-group-sm">
						<label htmlFor="RegexpFlow__Metadata__Description">Description</label>
						<input type="text" className="form-control" id="RegexpFlow__Metadata__Description" placeholder="add some description"/>
					</div>
				</form>
			</div>
		);
	}
}

export default RegexpFlowMetadata;
