// @flow

import FilterConfig from './FilterConfig/FilterConfig';

export type FilterType = string;

export type FilterConfigId = string;

export type FilterConfigType = {
    filterType: FilterType,
    id: FilterConfigId,
    enabled: boolean,
    description: string,
}

export type FilterConfigCollection = {
    [string]: $Subtype<FilterConfig>
}

export type RegexpFlowId = string | null;

export type RegexpFlowType = {
    id: RegexpFlowId,
    description: string,
    filterConfigs: FilterConfigCollection
}

