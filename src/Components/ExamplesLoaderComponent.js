// @flow

import * as React from 'react';

import type { Example } from './examples';
import examples from './examples';

type Props = {
    loadExampleHandler: (example: Example) => void,
};

type State = {
    examples: Example[],
};

class ExamplesLoaderComponent extends React.Component<Props, State> {
    loadExample: (i: number) => void;

    constructor() {
        super();

        this.state = {
            examples: examples,
        };

        this.loadExample = this.loadExample.bind(this);
    }

    loadExample(i: number) {
        this.props.loadExampleHandler(this.state.examples[i]);
    }

    render() {
        let exampleElements = [];

        for (let i = 0; i < this.state.examples.length; i++) {
            let example = this.state.examples[i];
            exampleElements.push(
                <li key={'example_' + i}>
                    <a href="#load-example" onClick={() => this.loadExample(i)}>
                        {example.name}
                    </a>
                </li>,
            );
        }
        return (
            <div className="btn-group ExamplesLoader">
                <button type="button" className="btn btn-default dropdown-toggle ExamplesLoader__Button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Load an example <span className="caret" />
                </button>
                <ul className="dropdown-menu">{exampleElements}</ul>
            </div>
        );
    }
}

export default ExamplesLoaderComponent;
