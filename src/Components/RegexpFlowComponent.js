import React, {PropTypes} from 'react'
import FindAllFilterContainer from '../Containers/FindAllFilterContainer'
import MatchInLinesFilterContainer from '../Containers/MatchInLinesFilterContainer'
import MatchLinesFilterContainer from '../Containers/MatchLinesFilterContainer'
import ReplaceFilterContainer from '../Containers/ReplaceFilterContainer'
import UniqueFilterContainer from '../Containers/UniqueFilterContainer'

const RegexpFlowComponent = ({textProcessors, onAddTextProcessorClick}) => {

	let textProcessorsCollection = [];
	for (let index in textProcessors) {
		if (textProcessors.hasOwnProperty(index)) {
			let filterConfig = textProcessors[index];

			switch (filterConfig.filterType) {
				case 'FindAll': {
					textProcessorsCollection.push(<FindAllFilterContainer id={index} key={'tp_' + index}/>);
					break;
				}
				case 'MatchLines': {
					textProcessorsCollection.push(<MatchLinesFilterContainer id={index} key={'tp_' + index}/>);
					break;
				}
				case 'MatchInLines': {
					textProcessorsCollection.push(<MatchInLinesFilterContainer id={index} key={'tp_' + index}/>);
					break;
				}
				case 'Replace': {
					textProcessorsCollection.push(<ReplaceFilterContainer id={index} key={'tp_' + index}/>);
					break;
				}
				case 'Unique': {
					textProcessorsCollection.push(<UniqueFilterContainer id={index} key={'tp_' + index}/>);
					break;
				}
				default: {
					// nothing
					break;
				}
			}
		}
	}

	return (
		<div className="RegexpFlow">
			<div>
				<div className="btn-group" role="group">
					<button type="button" className="btn btn-default btn-sm" onClick={() => {
						onAddTextProcessorClick('FindAll')
					}}>+ FindAll
					</button>

					<button type="button" className="btn btn-default btn-sm" onClick={() => {
						onAddTextProcessorClick('Replace')
					}}>+ Replace
					</button>

					<button type="button" className="btn btn-default btn-sm" onClick={() => {
						onAddTextProcessorClick('MatchLines')
					}}>+ MatchLines
					</button>

					<button type="button" className="btn btn-default btn-sm" onClick={() => {
						onAddTextProcessorClick('MatchInLines')
					}}>+ MatchInLines
					</button>

					<button type="button" className="btn btn-default btn-sm" onClick={() => {
						onAddTextProcessorClick('Unique')
					}}>+ Unique
					</button>
				</div>
			</div>
			<div className="RegexpFlow__FilterConfigs">
				{textProcessorsCollection}
			</div>
		</div>
	)
};

RegexpFlowComponent.propTypes = {
	textProcessors: PropTypes.objectOf(Object), // FIXME create class for these text processors + subclasses
	//
	//
	//
	onAddTextProcessorClick: PropTypes.func.isRequired
};

export default RegexpFlowComponent;
