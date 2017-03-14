import {Component} from 'react';

class FilterComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showDescription: Boolean(props.description),
            showHelp: false
        };

        this.toggleShowHelp = this.toggleShowHelp.bind(this);
        this.toggleShowDescription = this.toggleShowDescription.bind(this);
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

export default FilterComponent;
