import React, {Component} from 'react';
import './App.css';
import NavBar from './Layout/NavBar.js';
import FileMenu from './Layout/FileMenu.js';
import MainScreen from './Layout/MainScreen.js';

class App extends Component {
	render() {
		return (
			<div className="App">
				<NavBar/>
				<FileMenu/>
				<MainScreen/>
			</div>
			// <div className="App">
			// 	<div className="App-header">
			// 		<img src={logo} className="App-logo" alt="logo"/>
			// 		<h2>Welcome to React</h2>
			// 	</div>
			// 	<p className="App-intro">
			// 		To get started, edit <code>src/App.js</code> and save to reload.
			// 	</p>
			// </div>
		);
	}
}

export default App;
