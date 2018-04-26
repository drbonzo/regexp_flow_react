// @flow

import React from 'react';
import RegexpFlowDescriptionContainer from '../Containers/RegexpFlowDescriptionContainer';
import RegexpFlowContainer from '../Containers/RegexpFlowContainer';
import InputTextContainer from '../Containers/InputTextContainer';
import OutputTextContainer from '../Containers/OutputTextContainer';

class FlowScreen extends React.Component<{}, {}> {

    render() {
        return (
            <div className="MainScreen">
                <div className="row">
                    <div className="col-md-8">
                        <InputTextContainer/>
                        <OutputTextContainer/>
                    </div>
                    <div className="col-md-4">
                        <div>
                            <div className="RegexpFlow__Metadata">
                                <form>
                                    <div className="form-group form-group-sm">
                                        <label>Description</label>
                                        <RegexpFlowDescriptionContainer/>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div>
                            <RegexpFlowContainer/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FlowScreen;
