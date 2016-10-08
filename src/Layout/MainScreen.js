import React, {Component} from 'react';
import MatchLinesTextProcessor from '../Flow/MatchLinesTextProcessor.js';

class MainScreen extends Component {
	render() {
		return (
			<div className="MainScreen">
				<div className="row">
					<div className="col-md-8">
						<div className="inputOutput">
							<h2>Input</h2>
							<form className="form">
								<textarea className="form-control" rows="10"/>
							</form>
							<h2>Output</h2>
							<form>
								<textarea className="form-control" rows="10"/>
							</form>
						</div>
					</div>
					<div className="col-md-4">
						<div className="flow">
							<div className="flowHeader">
								<div className="form-group form-inline">
									<label>Description: </label>
									<input type="text" className="form-control input-sm description ng-pristine ng-valid" placeholder="flow description"/>
								</div>
							</div>
							<div className="flowProcessors">
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