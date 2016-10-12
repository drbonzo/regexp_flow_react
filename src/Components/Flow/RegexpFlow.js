import React, {Component} from 'react';

import RegexpFlowMetadata from './RegexpFlowMetadata.js';

import MatchLinesTextProcessor from '../Flow/MatchLinesTextProcessor.js';
import ReplaceTextProcessor from '../Flow/ReplaceTextProcessor.js';
import FindAllTextProcessor from '../Flow/FindAllTextProcessor.js';
import MatchInLineTextProcessor from '../Flow/MatchInLineTextProcessor.js';
import UniqueTextProcessor from '../Flow/UniqueTextProcessor.js';

class RegexpFlow extends Component {

	constructor() {
		super();

		// FIXME application state!
		this.state = {
			description: "Sample workflow description"
		};

		this.onFlowDescriptionChanged = this.onFlowDescriptionChanged.bind(this);
	}

	onFlowDescriptionChanged(event) {
		this.setState({
			description: event.target.value
		});
	}

	render() {
		return (
			<div className="RegexpFlow">
				<RegexpFlowMetadata description={this.state.description} onDescriptionChange={this.onFlowDescriptionChanged}/>
				<div className="RegexpFlow__TextProcessors">
					<MatchLinesTextProcessor searchRegexp="aaaa" caseInsensitive={true} invertMatch={true} description="some matching lines"/>
					<FindAllTextProcessor searchRegexp="bbb" caseInsensitive={true} description="some find all"/>
					<ReplaceTextProcessor searchRegexp="ccc" global={true} caseInsensitive={true} multiline={true} replaceRegexp="$1" description="some replacement"/>
					<MatchInLineTextProcessor searchRegexp="ddd" caseInsensitive={true} description="some matching in line"/>
					<UniqueTextProcessor description="unique!"/>
				</div>
			</div>
		);
	}
}

export default RegexpFlow;
