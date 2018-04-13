import React, {Component} from 'react';
import PropTypes from 'prop-types';

class HelpForFilterComponent extends Component {

    render() {
        return (
            <ul className={this.props.showHelp ? 'FilterConfig__Contents__Help' : 'FilterConfig__Contents__Help FilterConfig__Contents__Help--Hidden'}>
                {this.props.children}
            </ul>
        );
    }
}

HelpForFilterComponent.propTypes = {
    showHelp: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
};

export default HelpForFilterComponent;
