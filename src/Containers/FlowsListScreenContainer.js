import React from 'react';
import RegexpFlow from '../RegexpFlow/RegexpFlow';

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

const flowsListScreenContainer = (WrappedComponent) => {

    return class extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                flows: []
            };
        }

        componentDidMount() {
            // FIXME get data from LocalStorage
            const flows = [
                new RegexpFlow(),
                new RegexpFlow(),
                new RegexpFlow()
            ];

            flows[0].id = 1;
            flows[1].id = 2;
            flows[2].id = 3;

            this.setState({
                flows: flows
            });
        }

        displayName() {
            return `HOC(${getDisplayName(WrappedComponent)})`;
        }

        render() {
            return <WrappedComponent flows={this.state.flows} {...this.props} />;
        }

    };
};

export default flowsListScreenContainer;
