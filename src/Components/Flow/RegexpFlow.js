import React, {Component} from 'react';

import RegexpFlowMetadata from './RegexpFlowMetadata.js';

import MatchLinesTextProcessor from '../Flow/MatchLinesTextProcessor.js';
// FIXME
// import ReplaceTextProcessor from '../Flow/ReplaceTextProcessor.js';
// import FindAllTextProcessor from '../Flow/FindAllTextProcessor.js';
// import MatchInLineTextProcessor from '../Flow/MatchInLineTextProcessor.js';
// import UniqueTextProcessor from '../Flow/UniqueTextProcessor.js';

import RegexpFlowContainer from '../../TextProcessor/RegexpFlowContainer'
import RegexpMatchLineTextProcessor from '../../TextProcessor/RegexpMatchLineTextProcessor'

class RegexpFlow extends Component {

	constructor() {
		super();

		var rfc = new RegexpFlowContainer();

		// FIXME read from JSON
		var tp1 = new RegexpMatchLineTextProcessor();
		tp1.searchString = '[a-z]';
		tp1.searchFlagCaseInsensitive = true;
		tp1.flagInvertMatch = false;

		var tp2 = new RegexpMatchLineTextProcessor();
		tp2.searchString = '[<>]';
		tp2.searchFlagCaseInsensitive = true;
		tp2.flagInvertMatch = false;

		var tp3 = new RegexpMatchLineTextProcessor();
		tp3.searchString = 'foo';
		tp3.searchFlagCaseInsensitive = true;
		tp3.flagInvertMatch = false;

		rfc.textProcessors.push(tp1);
		rfc.textProcessors.push(tp2);
		rfc.textProcessors.push(tp3);

		this.state = {
			regexpFlow: rfc
		};

		this.onFlowDescriptionChanged = this.onFlowDescriptionChanged.bind(this);
	}

	onFlowDescriptionChanged(event) {

		// https://facebook.github.io/react/docs/update.html
		// https://facebook.github.io/immutable-js/docs/#/
		console.log(event.target.value);
		var rf = new RegexpFlowContainer();
		rf.description = event.target.value;

		this.setState({
			regexpFlow: rf
		});
	}

	render() {

		return (
			<div className="RegexpFlow">
				<RegexpFlowMetadata description={this.state.regexpFlow.description} onDescriptionChange={this.onFlowDescriptionChanged}/>
				<div className="RegexpFlow__TextProcessors">
					{
						this.state.regexpFlow.textProcessors.map((tp, index) => {
							// FIXME support for other TextProcessors
							return <MatchLinesTextProcessor searchRegexp={tp.searchString} caseInsensitive={tp.searchFlagCaseInsensitive} invertMatch={tp.flagInvertMatch} description={tp.description} key={"tp_" + index}/>
							// {/*<FindAllTextProcessor searchRegexp="bbb" caseInsensitive={true} description="some find all"/>*/}
							// {/*<ReplaceTextProcessor searchRegexp="ccc" global={true} caseInsensitive={true} multiline={true} replaceRegexp="$1" description="some replacement"/>*/}
							// {/*<MatchInLineTextProcessor searchRegexp="ddd" caseInsensitive={true} description="some matching in line"/>*/}
							// {/*<UniqueTextProcessor description="unique!"/>*/}
						})
					}
				</div>
			</div>
		);
	}
}

export default RegexpFlow;
