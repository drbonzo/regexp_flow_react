import React, {PropTypes} from 'react'
import FindAllTextProcessorContainer from '../Containers/FindAllTextProcessorContainer'

const RegexpFlowComponent = ({textProcessors, onAddTextProcessorClick, onDeleteTextProcessorClick}) => {

	let textProcessorsCollection = [];
	for (let index in textProcessors) {
		if (textProcessors.hasOwnProperty(index)) {
			textProcessorsCollection.push(<FindAllTextProcessorContainer id={index} key={'tp_' + index}/>);
		}
	}

	return (
		<div style={{padding: '10px', border: 'solid 1px #ccc', margin: '10px'}}>
			{textProcessorsCollection}
		</div>
	)
};

RegexpFlowComponent.propTypes = {
	textProcessors: PropTypes.objectOf(Object), // FIXME create class for these text processors + subclasses
	//
	//
	//
	onAddTextProcessorClick: PropTypes.func.isRequired,
	onDeleteTextProcessorClick: PropTypes.func.isRequired,
};

export default RegexpFlowComponent;
