// @flow
import type {RegexpFlowType} from '../RegexpFlow/BasicTypes';

export type ApplicationAppState = {
    inputText: string,
    outputText: string,
    currentRegexpFlow: RegexpFlowType,
    regexpFlows: RegexpFlowType[],
    nextRegexpFlowIndex: number
}

export type ApplicationState = {
    app: ApplicationAppState
}
