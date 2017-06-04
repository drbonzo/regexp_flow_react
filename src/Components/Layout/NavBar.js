import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {
    NavLink
} from 'react-router-dom';
import {saveRegexpFlow} from '../../redux/actions';
import ExamplesLoaderContainer from '../../Containers/ExamplesLoaderContainer';

class NavBar extends Component {

    render() {
        return (
            <div className="NavBar">
                <nav className="navbar navbar-default navbar--no-bottom-margin">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"/>
                                <span className="icon-bar"/>
                                <span className="icon-bar"/>
                            </button>
                            <a className="navbar-brand" href="#">RegexpFlow - ReactJS</a>
                        </div>

                        <div className="pull-right">
                            <ExamplesLoaderContainer/>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li><NavLink exact to="/flows/new">New</NavLink></li>
                                <li><a href="#" onClick={() => this.props.onSaveRegexpFlow()}>Save</a></li>
                                <li><NavLink exact to="/flows">Library</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

NavBar.propTypes = {
    onSaveRegexpFlow: PropTypes.func.isRequired
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
    onSaveRegexpFlow: () => {
        // this sets ID
        dispatch(saveRegexpFlow());
    }
});

const NavBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar);

export default NavBarContainer;
