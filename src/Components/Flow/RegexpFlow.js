import React, {Component} from 'react';

import FindAllTextProcessor from '../Flow/FindAllTextProcessor.js';
import MatchLinesTextProcessor from '../Flow/MatchLinesTextProcessor.js';
import MatchInLineTextProcessor from '../Flow/MatchInLineTextProcessor.js';
import ReplaceTextProcessor from '../Flow/ReplaceTextProcessor.js';
import UniqueTextProcessor from '../Flow/UniqueTextProcessor.js';

import RegexpFlowContainer from '../../TextProcessor/RegexpFlowContainer'
import RegexpFindAllTextProcessor from '../../TextProcessor/RegexpFindAllTextProcessor'
import RegexpMatchInLineTextProcessor from '../../TextProcessor/RegexpMatchInLineTextProcessor'
import RegexpMatchLinesTextProcessor from '../../TextProcessor/RegexpMatchLinesTextProcessor'
import RegexpReplaceTextProcessor from '../../TextProcessor/RegexpReplaceTextProcessor'
import RegexpUniqueTextProcessor from '../../TextProcessor/RegexpUniqueTextProcessor'

class RegexpFlow extends Component {

	constructor() {
		super();

		var rfc = new RegexpFlowContainer();

		// FIXME read from JSON
		var tp1 = new RegexpMatchLinesTextProcessor('</?[a-z-_]+?[\\s>]');
		var tp2 = new RegexpFindAllTextProcessor('</?[a-z]+?[\\s>]');
		var tp3 = new RegexpReplaceTextProcessor('</', '<');
		tp3.searchFlagGlobal = true;
		var tp4 = new RegexpMatchInLineTextProcessor('<([a-z]+)');
		var tp5 = new RegexpUniqueTextProcessor();

		rfc.textProcessors.push(tp1);
		rfc.textProcessors.push(tp2);
		rfc.textProcessors.push(tp3);
		rfc.textProcessors.push(tp4);
		rfc.textProcessors.push(tp5);

		this.state = {
			regexpFlow: rfc
		};

		this.onFlowDescriptionChanged = this.onFlowDescriptionChanged.bind(this);
	}

	onFlowDescriptionChanged(event) {

		// https://facebook.github.io/react/docs/update.html
		// https://facebook.github.io/immutable-js/docs/#/
		var rf = new RegexpFlowContainer();
		rf.description = event.target.value;

		this.setState({
			regexpFlow: rf
		});
	}

	/**
	 * @param {TextProcessor} textProcessor
	 * @param {Number} index
	 */
	buildComponentForTextProcessor(textProcessor, index) {
		switch (textProcessor.typeName) {
			case 'RegexpFindAllTextProcessor':
				/** @type {RegexpFindAllTextProcessor} textProcessor */
				return <FindAllTextProcessor searchRegexp={textProcessor.searchString} caseInsensitive={textProcessor.searchFlagCaseInsensitive} description={textProcessor.description} key={"textProcessor_" + index}/>;

			case 'RegexpMatchLinesTextProcessor':
				/** @type {RegexpMatchLinesTextProcessor} textProcessor */
				return <MatchLinesTextProcessor searchRegexp={textProcessor.searchString} caseInsensitive={textProcessor.searchFlagCaseInsensitive} invertMatch={textProcessor.flagInvertMatch} description={textProcessor.description} key={"textProcessor_" + index}/>;

			case 'RegexpMatchInLineTextProcessor':
				/** @type {RegexpMatchInLineTextProcessor} textProcessor */
				return <MatchInLineTextProcessor searchRegexp={textProcessor.searchString} caseInsensitive={textProcessor.searchFlagCaseInsensitive} description={textProcessor.description} key={"textProcessor_" + index}/>;

			case 'RegexpReplaceTextProcessor':
				/** @type {RegexpReplaceTextProcessor} textProcessor */
				return <ReplaceTextProcessor searchRegexp={textProcessor.searchString} global={textProcessor.searchFlagGlobal} multiline={textProcessor.searchFlagMultiline} caseInsensitive={textProcessor.searchFlagCaseInsensitive} replaceRegexp={textProcessor.replaceString}
											 description={textProcessor.description} key={"textProcessor_" + index}/>;

			case 'RegexpUniqueTextProcessor':
				/** @type {RegexpUniqueTextProcessor} textProcessor */
				return <UniqueTextProcessor description={textProcessor.description} key={"textProcessor_" + index}/>;

			default:
				return null;
		}
	}

	render() {

		return (
			<div className="RegexpFlow">
				<div className="RegexpFlow__TextProcessors">
					{
						this.state.regexpFlow.textProcessors.map((tp, index) => {
							return this.buildComponentForTextProcessor(tp, index)
						})
					}
				</div>
			</div>
		);
	}
}

export default RegexpFlow;
