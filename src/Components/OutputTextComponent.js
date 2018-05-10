// @flow

import * as React from 'react';
import type { FilterConfigCollection } from '../RegexpFlow/BasicTypes';

type Props = {
    inputText: string,
    outputText: string,
    filterConfigs: FilterConfigCollection,
};

class OutputTextComponent extends React.Component<Props, {}> {
    render() {
        return (
            <div className="OutputText">
                <h2 className="Screen__Subtitle">Output</h2>
                <form className="form">
                    <textarea className="form-control" rows="10" value={this.props.outputText} onChange={() => {}} />
                </form>
            </div>
        );
    }
}

export default OutputTextComponent;
