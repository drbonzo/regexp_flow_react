import React, {Component} from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import NavBar from './Components/Layout/NavBar';

import './App.css';

import FlowsListScreen from './Components/Layout/FlowsListScreen';
import flowsListScreenContainer from './Containers/FlowsListScreenContainer';

const flowsListScreen = flowsListScreenContainer(FlowsListScreen);

const NewFlowScreen = () => {
    return <div>
        <h1>New Flow Screen</h1>
    </div>;
};

const EditFlowScreen = ({match}) => {
    return <div>
        <h1>Edit Flow Screen: {match.params.id}</h1>
    </div>;
};

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <NavBar/>
                    <div className="container-fluid">
                        {/*<Redirect from='/' to='/flows/new'/>*/}
                        <Switch>
                            <Route exact path="/" component={NewFlowScreen}/>
                            <Route exact path="/flows" component={flowsListScreen}/>
                            <Route path="/flows/new" component={NewFlowScreen}/>
                            <Route path="/flows/:id" component={EditFlowScreen}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

App.contextTypes = {
    // TODO remove?
    store: React.PropTypes.object
};

export default App;
