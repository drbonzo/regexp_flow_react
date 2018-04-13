import {connect} from 'react-redux';
import RegexpFlowComponent from '../Components/RegexpFlowComponent';
import {regexpFlowAddFilter} from '../Store/Actions/RegexpFlowActions';

const mapStateToProps = (state) => ({
    filterConfigs: state.app.currentRegexpFlow.filterConfigs
});

const mapDispatchToProps = (dispatch) => ({
    onAddFilterConfigClick: (filterType) => {
        dispatch(regexpFlowAddFilter(filterType));
    }
});

const RegexpFlowContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(RegexpFlowComponent);

export default RegexpFlowContainer;
