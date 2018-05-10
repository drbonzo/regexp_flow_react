// @flow

import React from 'react';

import FlowScreen from './FlowScreen';

type Props = {
    match: any, // FIXME matches from router
};

class EditFlowScreenComponent extends React.Component<Props, {}> {
    render() {
        return (
            <div className="Screen">
                <h1 className="Screen__Title">Edit RegexpFlow</h1>
                <FlowScreen />
            </div>
        );
    }
}

export default EditFlowScreenComponent;
