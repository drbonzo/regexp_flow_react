import {connect} from 'react-redux';

import ExamplesLoaderComponent from '../Components/ExamplesLoaderComponent';

import {removeAllFilterConfigs} from '../redux/actions';

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
    loadExampleHandler: (example) => {
        dispatch(removeAllFilterConfigs());

        for (let a = 0; a < example.actions.length; a++) {
            let action = example.actions[a];
            dispatch(action);
        }
    }
});

const ExamplesLoaderContainer = connect(
	mapStateToProps,
 mapDispatchToProps
)(ExamplesLoaderComponent);

export default ExamplesLoaderContainer;
