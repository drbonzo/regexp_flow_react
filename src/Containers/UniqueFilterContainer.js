import {connect} from 'react-redux';

import UniqueFilterComponent from '../Components/UniqueFilterComponent';
import {
	filterUpdateDescription,
	filterToggleEnabled,
	regexpFlowDeleteFilter
} from '../redux/actions';

const mapStateToProps = (state, ownProps) => ({
    description: state.filterConfigs[ownProps.id].description,
    enabled: state.filterConfigs[ownProps.id].enabled
});

const mapDispatchToProps = (dispatch, ownProps) => ({

    onDescriptionChange: (newDescription) => {
        dispatch(filterUpdateDescription(ownProps.id, newDescription));
    },
    onEnabledClick: () => {
        dispatch(filterToggleEnabled(ownProps.id));
    },
    onDeleteClick: () => {
        dispatch(regexpFlowDeleteFilter(ownProps.id));
    }
});

const UniqueFilterContainer = connect(
	mapStateToProps,
 mapDispatchToProps
)(UniqueFilterComponent);

export default UniqueFilterContainer;
