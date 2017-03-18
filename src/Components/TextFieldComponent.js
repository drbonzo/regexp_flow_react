import React, {PropTypes} from 'react';

const TextFieldComponent = ({value, onValueChange}) => {

    return (
        <div>
            <input type="text" className="form-control" value={value} onChange={(event) => {
                onValueChange(event.target.value);
            }}/>
        </div>
    );
};

TextFieldComponent.propTypes = {
    value: PropTypes.string.isRequired,
    //
    //
    //
    onValueChange: PropTypes.func.isRequired,
};

export default TextFieldComponent;
