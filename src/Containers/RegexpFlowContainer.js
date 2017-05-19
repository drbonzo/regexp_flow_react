import {connect} from 'react-redux';
import RegexpFlowComponent from '../Components/RegexpFlowComponent';
import {regexpFlowAddFilter} from '../redux/actions';

const mapStateToProps = (state) => ({
    filterConfigs: state.currentRegexpFlow.filterConfigs
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
