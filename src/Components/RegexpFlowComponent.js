import React, {PropTypes} from 'react';
import FindAllFilterContainer from '../Containers/FindAllFilterContainer';
import MatchInLinesFilterContainer from '../Containers/MatchInLinesFilterContainer';
import MatchLinesFilterContainer from '../Containers/MatchLinesFilterContainer';
import ReplaceFilterContainer from '../Containers/ReplaceFilterContainer';
import UniqueFilterContainer from '../Containers/UniqueFilterContainer';

const RegexpFlowComponent = ({filterConfigs, onAddFilterConfigClick}) => {

    let filterConfigsCollection = [];
    for (let index in filterConfigs) {
        if (filterConfigs.hasOwnProperty(index)) {
            let filterConfig = filterConfigs[index];

            switch (filterConfig.filterType) {
                case 'FindAll': {
                    filterConfigsCollection.push(<FindAllFilterContainer id={index} key={'tp_' + index}/>);
                    break;
                }
                case 'MatchLines': {
                    filterConfigsCollection.push(<MatchLinesFilterContainer id={index} key={'tp_' + index}/>);
                    break;
                }
                case 'MatchInLines': {
                    filterConfigsCollection.push(<MatchInLinesFilterContainer id={index} key={'tp_' + index}/>);
                    break;
                }
                case 'Replace': {
                    filterConfigsCollection.push(<ReplaceFilterContainer id={index} key={'tp_' + index}/>);
                    break;
                }
                case 'Unique': {
                    filterConfigsCollection.push(<UniqueFilterContainer id={index} key={'tp_' + index}/>);
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
    onAddFilterConfigClick('FindAll');
}}>+ FindAll
					</button>

					<button type="button" className="btn btn-default btn-sm" onClick={() => {
    onAddFilterConfigClick('Replace');
}}>+ Replace
					</button>

					<button type="button" className="btn btn-default btn-sm" onClick={() => {
    onAddFilterConfigClick('MatchLines');
}}>+ MatchLines
					</button>

					<button type="button" className="btn btn-default btn-sm" onClick={() => {
    onAddFilterConfigClick('MatchInLines');
}}>+ MatchInLines
					</button>

					<button type="button" className="btn btn-default btn-sm" onClick={() => {
    onAddFilterConfigClick('Unique');
}}>+ Unique
					</button>
				</div>
			</div>
			<div className="RegexpFlow__FilterConfigs">
				{filterConfigsCollection}
			</div>
		</div>
    );
};

RegexpFlowComponent.propTypes = {
    filterConfigs: PropTypes.objectOf(Object), // FIXME create class for these text processors + subclasses
	//
	//
	//
    onAddFilterConfigClick: PropTypes.func.isRequired
};

export default RegexpFlowComponent;
