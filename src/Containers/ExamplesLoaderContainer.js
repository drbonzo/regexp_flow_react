import {connect} from 'react-redux'

import ExamplesLoaderComponent from '../Components/ExamplesLoaderComponent'

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
	loadExampleHandler: (example) => {
		// dispatch(removeAllFilterConfigs()); // FIXME ADD

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
