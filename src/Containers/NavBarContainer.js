import {connect} from 'react-redux';
import {saveRegexpFlow, navigateToEditFlowScreen, clearRegexpFlow} from '../redux/actions';
import NavBarComponent from '../Components/NavBarComponent';

const mapStateToProps = (state) => ({
    currentRegexpFlowId: state.currentRegexpFlow.id
});

const mapDispatchToProps = (dispatch) => ({
    onSaveRegexpFlow: () => {
        dispatch(saveRegexpFlow());
        dispatch(navigateToEditFlowScreen());
    },

    onCreateNewRegexpFlow: () => {
        dispatch(clearRegexpFlow());
        dispatch(navigateToEditFlowScreen());
    }
});

const NavBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBarComponent);

export default NavBarContainer;
