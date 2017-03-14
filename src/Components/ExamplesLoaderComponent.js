import React, {PropTypes, Component} from 'react';
import examples from './examples';

class ExamplesLoaderComponent extends Component {

    constructor() {

        super();

        this.state = {
            examples: examples
        };

        this.loadExample = this.loadExample.bind(this);
    }

    loadExample(i) {
        this.props.loadExampleHandler(this.state.examples[i]);
    }

    render() {

        let exampleElements = [];

        for (let i = 0; i < this.state.examples.length; i++) {
            let example = this.state.examples[i];
            exampleElements.push(<li key={'example_' + i}><a href="#" onClick={(event) => this.loadExample(i)}>{example.name}</a></li>);
        }
        return (
			<div className="btn-group ExamplesLoader">
				<button type="button" className="btn btn-default dropdown-toggle ExamplesLoader__Button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					Load an example <span className="caret"></span>
				</button>
				<ul className="dropdown-menu">
					{exampleElements}
				</ul>
			</div>
        );
    }
}

ExamplesLoaderComponent.propTypes = {
    loadExampleHandler: PropTypes.func.isRequired
};

export default ExamplesLoaderComponent;
