import React, {Component} from 'react';

class UserOutputText extends Component {
	render() {
		return (
			<div className="UserOutputText">
				<h2>Output</h2>
				<form className="form">
					<textarea className="form-control" rows="10"/>
				</form>
			</div>
		);
	}
}

export default UserOutputText;


