// @flow

import * as React from 'react';
import { Redirect, Router, Route, Switch } from 'react-router-dom';
import appHistory from './history';
import NavBarContainer from './Containers/NavBarContainer';

import './App.css';

import FlowsListScreenContainer from './Containers/FlowsListScreenContainer';
import EditFlowScreenContainer from './Containers/EditFlowScreenContainer';

class App extends React.Component<{}, {}> {
    render() {
        return (
            <Router history={appHistory}>
                <div className="App">
                    <NavBarContainer />
                    <div className="container-fluid">
                        <Switch>
                            <Route exact path="/library" component={FlowsListScreenContainer} />
                            <Route path="/editor" component={EditFlowScreenContainer} />
                            <Redirect exact from="/" to="/editor" />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

// App.contextTypes = {
//     // TODO remove?
//     store: PropTypes.object
// };

export default App;
