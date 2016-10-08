import React, {Component} from 'react';
import NavBar from './Layout/NavBar.js';
import FileMenu from './Layout/FileMenu.js';
import MainScreen from './Layout/MainScreen.js';

import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<NavBar/>
				<FileMenu/>
				<div className="container-fluid">
					<div className="row">
						<div className="col-sm-12">
							<MainScreen/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
