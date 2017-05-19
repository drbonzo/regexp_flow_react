import React, {Component} from 'react';
import RegexpFlowContainer from '../../Containers/RegexpFlowContainer';
import InputTextContainer from '../../Containers/InputTextContainer';
import OutputTextContainer from '../../Containers/OutputTextContainer';

class FlowScreen extends Component {

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
                            <RegexpFlowContainer/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default  FlowScreen;
