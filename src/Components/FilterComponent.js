import {Component} from 'react';
import PropTypes from 'prop-types';

class FilterComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showDescription: Boolean(props.description),
            showHelp: false
        };

        this.toggleShowHelp = this.toggleShowHelp.bind(this);
        this.toggleShowDescription = this.toggleShowDescription.bind(this);

        this.firstInput = null;
        this.firstCheckbox = null;
    }

    focusOnFirstInput() {
        if (this.firstInput) {
            this.firstInput.focus();
            this.firstInput.setSelectionRange(0, this.firstInput.value.length);
        }

        if (this.firstCheckbox) {
            this.firstCheckbox.focus();
        }
    }

    componentDidMount() {
        this.focusOnFirstInput();
    }

    toggleShowHelp() {
        this.setState({
            showHelp: !this.state.showHelp
        });
    }

    toggleShowDescription() {
        this.setState({
            showDescription: !this.state.showDescription
        });
    }
}

FilterComponent.propTypes = {
    description: PropTypes.string.isRequired,
};

export default FilterComponent;
