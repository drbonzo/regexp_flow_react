import React, {Component} from 'react';
import FindAllTextProcessorContainer from './Containers/FindAllTextProcessorContainer'
import RegexpFlowDescriptionContainer from './Containers/RegexpFlowDescriptionContainer'

import './App.css';

class App extends Component {

	render() {

		let textProcessorsCollection = [];

		let state = this.context.store.getState();
		let textProcessors = state.textProcessors;
		for (let index in textProcessors) {
			if (textProcessors.hasOwnProperty(index)) {
				textProcessorsCollection.push(<FindAllTextProcessorContainer id={index} key={'tp_' + index}/>);
			}
		}
		return (
			<div className="App">
				<div>
					Description:
					<RegexpFlowDescriptionContainer/>
				</div>
				<div>
					{textProcessorsCollection}
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
