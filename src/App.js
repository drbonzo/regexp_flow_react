import React, {Component} from 'react';
import FindAllTextProcessorContainer from './Components/FindAllTextProcessorContainer'

import './App.css';

class App extends Component {

	render() {
		return (
			<div className="App">
				{/* FIXME wyswietlac dane ze state!!! - wszyskie TP*/}
				<FindAllTextProcessorContainer id="1"/>
				<FindAllTextProcessorContainer id="2"/>
				<FindAllTextProcessorContainer id="3"/>
			</div>
		);
	}

}


export default App;
