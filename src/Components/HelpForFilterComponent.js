// @flow
import * as React from 'react';

type Props = {
    showHelp: boolean,
    children: React.Node,
}

class HelpForFilterComponent extends React.Component<Props, {}> {

    render() {
        return (
            <ul className={this.props.showHelp ? 'FilterConfig__Contents__Help' : 'FilterConfig__Contents__Help FilterConfig__Contents__Help--Hidden'}>
                {this.props.children}
            </ul>
        );
    }
}

export default HelpForFilterComponent;
