// @flow
import { connect } from 'react-redux';
import RegexpFlowComponent from '../Components/RegexpFlowComponent';
import { regexpFlowAddFilter } from '../Store/Actions/RegexpFlowActions';
import type { Dispatch } from 'redux';

const mapStateToProps = state => ({
    filterConfigs: state.app.currentRegexpFlow.filterConfigs,
});

const mapDispatchToProps = (dispatch: Dispatch<{ type: $Subtype<string> }>) => ({
    onAddFilterConfigClick: (filterType: string, nextId: number) => {
        dispatch(regexpFlowAddFilter(filterType, nextId));
    },
});

const RegexpFlowContainer = connect(mapStateToProps, mapDispatchToProps)(RegexpFlowComponent);

export default RegexpFlowContainer;
