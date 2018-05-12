// @flow

import type { FilterConfigCollection, RegexpFlowId } from './BasicTypes';

class RegexpFlow {
    id: RegexpFlowId = null;
    filterConfigs: FilterConfigCollection = {};
    description: string = '';
}

export default RegexpFlow;
