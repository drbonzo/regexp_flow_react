import React, {Component} from 'react';
import RegexpFlowDescriptionContainer from './Containers/RegexpFlowDescriptionContainer'
import RegexpFlowContainer from './Containers/RegexpFlowContainer'
import NavBar from './Components/Layout/NavBar'
import InputTextContainer from './Containers/InputTextContainer';
import UserOutputText from './Components/Layout/UserOutputText';

import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<NavBar/>
				<div className="container-fluid">
					<div className="MainScreen">
						<div className="row">
							<div className="col-md-8">
								<InputTextContainer/>
								<UserOutputText/>
							</div>
							<div className="col-md-4">
								{/*<RegexpFlow/> FIXME */}
								<div>
									Description:
									<RegexpFlowDescriptionContainer/>
								</div>
								<div>
									<RegexpFlowContainer/>
								</div>
							</div>
						</div>
					</div>
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
