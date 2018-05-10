// @flow

import * as React from 'react';

import { Link, NavLink } from 'react-router-dom';
import ExamplesLoaderContainer from '../Containers/ExamplesLoaderContainer';

type Props = {
    onSaveRegexpFlow: () => void,
    onCreateNewRegexpFlow: () => void,
    currentRegexpFlowId: ?string,
};

class NavBarComponent extends React.Component<Props, {}> {
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
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                            <Link to="/" className="navbar-brand">
                                RegexpFlow - ReactJS
                            </Link>
                        </div>

                        {this.renderExamplesLoaderComboBox()}

                        {this.renderNavigationButtons()}
                    </div>
                </nav>
            </div>
        );
    }

    renderExamplesLoaderComboBox() {
        return (
            <div className="pull-right">
                <ExamplesLoaderContainer />
            </div>
        );
    }

    renderNavigationButtons() {
        return (
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li>
                        <NavLink exact to="/editor">
                            Editor
                        </NavLink>
                    </li>
                    <li>
                        <a
                            href="#"
                            onClick={e => {
                                e.preventDefault();
                                this.props.onSaveRegexpFlow();
                            }}>
                            {this.getSaveButtonLabel()}
                        </a>
                    </li>
                    <li>
                        <NavLink exact to="/library">
                            Library
                        </NavLink>
                    </li>
                    <li>
                        <a
                            href="#"
                            onClick={e => {
                                e.preventDefault();
                                this.props.onCreateNewRegexpFlow();
                            }}>
                            New
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default NavBarComponent;
