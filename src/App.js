import React, {Component} from 'react';
import RegexpFlowDescriptionContainer from './Containers/RegexpFlowDescriptionContainer'
import RegexpFlowContainer from './Containers/RegexpFlowContainer'
import NavBar from './Components/Layout/NavBar'
import InputTextContainer from './Containers/InputTextContainer';
import OutputTextContainer from './Containers/OutputTextContainer';
import ExamplesLoaderContainer from './Containers/ExamplesLoaderContainer'

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
								<OutputTextContainer/>
							</div>
							<div className="col-md-4">
								<div>
									<ExamplesLoaderContainer/>
								</div>
								<div>
									<div className="RegexpFlow__Metadata">
										<form>
											<div className="form-group form-group-sm">
												<label>Description</label>
												<RegexpFlowDescriptionContainer/>
											</div>
										</form>
									</div>
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
