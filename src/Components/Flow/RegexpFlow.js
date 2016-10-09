import React, {Component} from 'react';

import RegexpFlowMetadata from './RegexpFlowMetadata.js';

import MatchLinesTextProcessor from '../Flow/MatchLinesTextProcessor.js';
import ReplaceTextProcessor from '../Flow/ReplaceTextProcessor.js';
import FindAllTextProcessor from '../Flow/FindAllTextProcessor.js';
import MatchInLineTextProcessor from '../Flow/MatchInLineTextProcessor.js';
import UniqueTextProcessor from '../Flow/UniqueTextProcessor.js';

class RegexpFlow extends Component {
	render() {
		return (
			<div className="RegexpFlow">
				<RegexpFlowMetadata/>
				<div className="RegexpFlow__TextProcessors">
					<MatchLinesTextProcessor searchRegexp="aaaa" caseInsensitive={true} invertMatch={true} description="foo bar 123"/>
					<FindAllTextProcessor/>
					<ReplaceTextProcessor/>
					<MatchInLineTextProcessor/>
					<UniqueTextProcessor/>
				</div>
			</div>
		);
	}
}

export default RegexpFlow;
