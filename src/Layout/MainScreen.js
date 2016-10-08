import React, {Component} from 'react';
import UserInputText from './UserInputText.js';
import UserOutputText from './UserOutputText.js';
import RegexpFlowMetadata from './RegexpFlowMetadata.js';
import MatchLinesTextProcessor from '../Flow/MatchLinesTextProcessor.js';

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
						<div className="RegexpFlow">
							<RegexpFlowMetadata/>
							<div className="RegexpFlow__TextProcessors">
								<MatchLinesTextProcessor/>
								<MatchLinesTextProcessor/>
								<MatchLinesTextProcessor/>
								<MatchLinesTextProcessor/>
								<MatchLinesTextProcessor/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default MainScreen;