// @flow

import React from 'react';

type Props = {
    description: string,
};

type State = {
    showDescription: boolean,
    showHelp: boolean,
};

class FilterComponent<AdditionalProps> extends React.Component<AdditionalProps & Props, State> {
    toggleShowHelp: () => void;
    toggleShowDescription: () => void;

    firstInput: ?HTMLInputElement = null;
    firstCheckbox: ?HTMLInputElement = null;

    constructor(props: AdditionalProps & Props) {
        super(props);

        this.state = {
            showDescription: Boolean(props.description),
            showHelp: false,
        };

        this.toggleShowHelp = this.toggleShowHelp.bind(this);
        this.toggleShowDescription = this.toggleShowDescription.bind(this);
    }

    focusOnFirstInput() {
        if (this.firstInput) {
            const firstInput: HTMLInputElement = this.firstInput;
            // TODO FLOW_HACK you cannot have 2 statements inside if() check, only first works
            firstInput.focus();
            firstInput.setSelectionRange(0, firstInput.value.length);
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
            showHelp: !this.state.showHelp,
        });
    }

    toggleShowDescription() {
        this.setState({
            showDescription: !this.state.showDescription,
        });
    }
}

export default FilterComponent;
