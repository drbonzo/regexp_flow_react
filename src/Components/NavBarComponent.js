import React, {Component, PropTypes} from 'react';
import {
    NavLink
} from 'react-router-dom';
import ExamplesLoaderContainer from '../Containers/ExamplesLoaderContainer';

class NavBarComponent extends Component {

    getURLForEditor() {
        return '/flows/' + (this.props.currentRegexpFlowId || 'new');
    }

    getSaveButtonLabel() {
        if (this.props.currentRegexpFlowId) {
            return `Save #${this.props.currentRegexpFlowId}`;
        } else {
            return 'Save';
        }
    }

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
                                <li><NavLink exact to={this.getURLForEditor()}>Editor</NavLink></li>
                                <li><a href="#save" onClick={(e) => {
                                    this.props.onSaveRegexpFlow();
                                    e.preventDefault();
                                }}>{this.getSaveButtonLabel()}</a></li>
                                <li><NavLink exact to="/flows">Library</NavLink></li>
                                <li><NavLink exact to="/flows/new">New</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

NavBarComponent.propTypes = {
    onSaveRegexpFlow: PropTypes.func.isRequired,
    currentRegexpFlowId: PropTypes.number
};

export default NavBarComponent;
