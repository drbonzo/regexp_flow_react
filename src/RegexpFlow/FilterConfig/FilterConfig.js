// @flow

import type {FilterConfigId, FilterType} from '../BasicTypes';

export default class FilterConfig {

    filterType: FilterType;
    id: FilterConfigId | null;
    enabled: boolean;
    description: string;

    constructor(filterType: FilterType) {
        this.filterType = filterType;
        this.id = null;
        this.enabled = true;
        this.description = '';
    }
}
