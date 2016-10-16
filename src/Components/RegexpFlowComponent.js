import React, {PropTypes} from 'react'
import FindAllTextProcessorContainer from '../Containers/FindAllTextProcessorContainer'

const RegexpFlowComponent = ({textProcessors, onAddTextProcessorClick}) => {

	let textProcessorsCollection = [];
	for (let index in textProcessors) {
		if (textProcessors.hasOwnProperty(index)) {
			textProcessorsCollection.push(<FindAllTextProcessorContainer id={index} key={'tp_' + index}/>);
		}
	}

	return (
		<div style={{padding: '10px', border: 'solid 1px #ccc', margin: '10px'}}>
			<div>
				<div className="btn-group" role="group">
					<button type="button" className="btn btn-default" onClick={() => {
						onAddTextProcessorClick('FindAll')
					}}>+ FindAll
					</button>

					<button type="button" className="btn btn-default" onClick={() => {
						onAddTextProcessorClick('Replace')
					}}>+ Replace
					</button>

					<button type="button" className="btn btn-default" onClick={() => {
						onAddTextProcessorClick('MatchLines')
					}}>+ MatchLines
					</button>

					<button type="button" className="btn btn-default" onClick={() => {
						onAddTextProcessorClick('MatchInLines')
					}}>+ MatchInLines
					</button>

					<button type="button" className="btn btn-default" onClick={() => {
						onAddTextProcessorClick('Unique')
					}}>+ Unique
					</button>
				</div>
			</div>
			{textProcessorsCollection}
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
