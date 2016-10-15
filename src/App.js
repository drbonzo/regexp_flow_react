import React, {Component} from 'react';
import FindAllTextProcessorContainer from './Components/FindAllTextProcessorContainer'

import './App.css';

class App extends Component {

	render() {

		let textProcessorsCollection = [];

		let textProcessors = this.context.store.getState().textProcessors;
		for (let index in textProcessors) {
			if (textProcessors.hasOwnProperty(index)) {
				textProcessorsCollection.push(<FindAllTextProcessorContainer id={index} key={'tp_' + index}/>);
			}
		}
		return (
			<div className="App">
				{textProcessorsCollection}
			</div>
		);
	}

}

App.contextTypes = {
	// TODO remove?
	store: React.PropTypes.object
};

export default App;
