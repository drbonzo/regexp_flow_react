import React, {Component} from 'react';
import {
    Router,
    Route,
    Switch
} from 'react-router-dom';
import history from './history';
import NavBarContainer from './Containers/NavBarContainer';

import './App.css';

import FlowsListScreenContainer from './Containers/Layout/FlowsListScreenContainer';
import NewFlowScreenContainer from './Containers/NewFlowScreenContainer';
import EditFlowScreenContainer from './Containers/EditFlowScreenContainer';

class App extends Component {

    render() {
        return (
            <Router history={history}>
                <div className="App">
                    <NavBarContainer/>
                    <div className="container-fluid">
                        {/*<Redirect from='/' to='/flows/new'/>*/}
                        <Switch>
                            <Route exact path="/" component={NewFlowScreenContainer}/>
                            <Route exact path="/flows" component={FlowsListScreenContainer}/>
                            <Route path="/flows/new" component={NewFlowScreenContainer}/>
                            <Route path="/flows/:id" component={EditFlowScreenContainer}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

App.contextTypes = {
    // TODO remove?
    store: React.PropTypes.object
};

export default App;
