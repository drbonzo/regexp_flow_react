import React, {Component} from 'react';

class UserInputText extends Component {
	render() {
		return (
			<div className="UserInputText">
				<h2>Input</h2>
				<form className="form">
					<textarea className="form-control" rows="10"/>
				</form>
			</div>
		);
	}
}

export default UserInputText;
