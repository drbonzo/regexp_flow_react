import React, {Component} from 'react';
import UserInputText from './UserInputText.js';
import UserOutputText from './UserOutputText.js';
import RegexpFlow from '../Flow/RegexpFlow.js';

class MainScreen extends Component {
	render() {
		return (
			<div className="MainScreen">
				<div className="row">
					<div className="col-md-8">
						<UserInputText/>
						<UserOutputText/>
					</div>
					<div className="col-md-4">
						<RegexpFlow/>
					</div>
				</div>
			</div>
		);
	}
}

export default MainScreen;
