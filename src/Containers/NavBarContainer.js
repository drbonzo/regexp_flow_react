// @flow
import { connect } from 'react-redux';
import NavBarComponent from '../Components/NavBarComponent';
import { clearRegexpFlow, navigateToEditFlowScreen, saveRegexpFlow } from '../Store/Actions/RegexpFlowActions';
import type { Dispatch } from 'redux';

const mapStateToProps = state => ({
    currentRegexpFlowId: state.app.currentRegexpFlow ? state.app.currentRegexpFlow.id : null,
});

const mapDispatchToProps = (dispatch: Dispatch<{ type: $Subtype<string> }>) => ({
    onSaveRegexpFlow: () => {
        dispatch(saveRegexpFlow());
        dispatch(navigateToEditFlowScreen());
    },

    onCreateNewRegexpFlow: () => {
        dispatch(clearRegexpFlow());
        dispatch(navigateToEditFlowScreen());
    },
});

const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBarComponent);

export default NavBarContainer;
