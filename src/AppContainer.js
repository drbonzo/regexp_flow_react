import {connect} from 'react-redux';

import App from './App';

const mapStateToProps = (state) => ({
    isRehydrated: state.rehydrated
});

const AppContainer = connect(
    mapStateToProps,
    null
)(App);

export default AppContainer;
