// @flow

import * as React from 'react';

import FindAllFilterContainer from '../Containers/FindAllFilterContainer';
import MatchInLinesFilterContainer from '../Containers/MatchInLinesFilterContainer';
import MatchLinesFilterContainer from '../Containers/MatchLinesFilterContainer';
import ReplaceFilterContainer from '../Containers/ReplaceFilterContainer';
import UniqueFilterContainer from '../Containers/UniqueFilterContainer';
import SortLinesFilterContainer from '../Containers/SortLinesFilterContainer';
import FindAllFilterConfig from '../RegexpFlow/FilterConfig/FindAllFilterConfig';
import MatchLinesFilterConfig from '../RegexpFlow/FilterConfig/MatchLinesFilterConfig';
import MatchInLinesFilterConfig from '../RegexpFlow/FilterConfig/MatchInLinesFilterConfig';
import ReplaceFilterConfig from '../RegexpFlow/FilterConfig/ReplaceFilterConfig';
import UniqueFilterConfig from '../RegexpFlow/FilterConfig/UniqueFilterConfig';
import SortLinesFilterConfig from '../RegexpFlow/FilterConfig/SortLinesFilterConfig';
import type { FilterConfigCollection } from '../RegexpFlow/BasicTypes';

type Props = {
    filterConfigs: FilterConfigCollection,
    onAddFilterConfigClick: (type: string, nextId: number) => void,
};

const findNextFilterConfigId = (filterConfigs: FilterConfigCollection): number => {
    const ids = Object.keys(filterConfigs).map(k => Number(k));
    let id: number = Math.max(...ids);
    if (id > 0) {
        return id + 1;
    } else {
        return 1;
    }
};

const RegexpFlowComponent = ({ filterConfigs, onAddFilterConfigClick }: Props) => {
    let filterConfigsCollection = [];
    for (let index in filterConfigs) {
        if (filterConfigs.hasOwnProperty(index)) {
            let filterConfig = filterConfigs[index];

            switch (filterConfig.filterType) {
                case FindAllFilterConfig.FILTER_TYPE: {
                    filterConfigsCollection.push(<FindAllFilterContainer id={index} key={'tp_' + index} />);
                    break;
                }
                case MatchLinesFilterConfig.FILTER_TYPE: {
                    filterConfigsCollection.push(<MatchLinesFilterContainer id={index} key={'tp_' + index} />);
                    break;
                }
                case MatchInLinesFilterConfig.FILTER_TYPE: {
                    filterConfigsCollection.push(<MatchInLinesFilterContainer id={index} key={'tp_' + index} />);
                    break;
                }
                case ReplaceFilterConfig.FILTER_TYPE: {
                    filterConfigsCollection.push(<ReplaceFilterContainer id={index} key={'tp_' + index} />);
                    break;
                }
                case UniqueFilterConfig.FILTER_TYPE: {
                    filterConfigsCollection.push(<UniqueFilterContainer id={index} key={'tp_' + index} />);
                    break;
                }
                case SortLinesFilterConfig.FILTER_TYPE: {
                    filterConfigsCollection.push(<SortLinesFilterContainer id={index} key={'tp_' + index} />);
                    break;
                }
                default: {
                    // nothing
                    break;
                }
            }
        }
    }
    const nextId = findNextFilterConfigId(filterConfigs);

    return (
        <div className="RegexpFlow">
            <div>
                <div className="btn-group" role="group">
                    <button
                        type="button"
                        className="btn btn-default btn-sm"
                        onClick={() => {
                            onAddFilterConfigClick(FindAllFilterConfig.FILTER_TYPE, nextId);
                        }}>
                        + FindAll
                    </button>

                    <button
                        type="button"
                        className="btn btn-default btn-sm"
                        onClick={() => {
                            onAddFilterConfigClick(ReplaceFilterConfig.FILTER_TYPE, nextId);
                        }}>
                        + Replace
                    </button>

                    <button
                        type="button"
                        className="btn btn-default btn-sm"
                        onClick={() => {
                            onAddFilterConfigClick(MatchLinesFilterConfig.FILTER_TYPE, nextId);
                        }}>
                        + MatchLines
                    </button>

                    <button
                        type="button"
                        className="btn btn-default btn-sm"
                        onClick={() => {
                            onAddFilterConfigClick(MatchInLinesFilterConfig.FILTER_TYPE, nextId);
                        }}>
                        + MatchInLines
                    </button>

                    <button
                        type="button"
                        className="btn btn-default btn-sm"
                        onClick={() => {
                            onAddFilterConfigClick(UniqueFilterConfig.FILTER_TYPE, nextId);
                        }}>
                        + Unique
                    </button>

                    <button
                        type="button"
                        className="btn btn-default btn-sm"
                        onClick={() => {
                            onAddFilterConfigClick(SortLinesFilterConfig.FILTER_TYPE, nextId);
                        }}>
                        + Sort
                    </button>
                </div>
            </div>
            <div className="RegexpFlow__FilterConfigs">{filterConfigsCollection}</div>
        </div>
    );
};

export default RegexpFlowComponent;
