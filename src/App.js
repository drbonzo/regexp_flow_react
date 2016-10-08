import React, {Component} from 'react';
import NavBar from './Components/Layout/NavBar.js';
import MainScreen from './Components/Layout/MainScreen.js';

import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<NavBar/>
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
