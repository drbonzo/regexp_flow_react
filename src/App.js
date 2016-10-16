import React, {Component} from 'react';
import RegexpFlowDescriptionContainer from './Containers/RegexpFlowDescriptionContainer'
import RegexpFlowContainer from './Containers/RegexpFlowContainer'

import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div>
					Description:
					<RegexpFlowDescriptionContainer/>
				</div>
				<div>
					<RegexpFlowContainer/>
				</div>
			</div>
		);
	}
}

App.contextTypes = {
	// TODO remove?
	store: React.PropTypes.object
};

export default App;
