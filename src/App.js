import React, {Component} from 'react';
import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom';
import NavBar from './Components/Layout/NavBar';

import './App.css';

import FlowsListScreenContainer from './Containers/Layout/FlowsListScreenContainer';

import NewFlowScreen from './Components/Layout/NewFlowScreen';
import EditFlowScreen from './Components/Layout/EditFlowScreen';

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div className="App">
                    <NavBar/>
                    <div className="container-fluid">
                        {/*<Redirect from='/' to='/flows/new'/>*/}
                        <Switch>
                            <Route exact path="/" component={NewFlowScreen}/>
                            <Route exact path="/flows" component={FlowsListScreenContainer}/>
                            <Route path="/flows/new" component={NewFlowScreen}/>
                            <Route path="/flows/:id" component={EditFlowScreen}/>
                        </Switch>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

App.contextTypes = {
    // TODO remove?
    store: React.PropTypes.object
};

export default App;
