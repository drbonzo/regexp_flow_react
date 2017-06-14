import React, {Component} from 'react';
import {
    Redirect,
    Router,
    Route,
    Switch
} from 'react-router-dom';
import history from './history';
import NavBarContainer from './Containers/NavBarContainer';

import './App.css';

import FlowsListScreenContainer from './Containers/FlowsListScreenContainer';
import EditFlowScreenContainer from './Containers/EditFlowScreenContainer';

class App extends Component {

    render() {
        if (this.props.isRehydrated) {
            return (
                <Router history={history}>
                    <div className="App">
                        <NavBarContainer/>
                        <div className="container-fluid">
                            <Redirect exact from='/' to='/flows'/>
                            <Switch>
                                <Route exact path="/flows" component={FlowsListScreenContainer}/>
                                <Route path="/flows/:id" component={EditFlowScreenContainer}/>
                            </Switch>
                        </div>
                    </div>
                </Router>
            );

        } else {
            return <div>LOADING...</div>;
        }
    }
}

App.contextTypes = {
    // TODO remove?
    store: React.PropTypes.object
};

App.propTypes = {
    isRehydrated: React.PropTypes.bool.isRequired
};

export default App;
