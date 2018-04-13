import React from 'react';
import PropTypes from 'prop-types';

const InputTextComponent = ({value, onValueChange}) => {

    return (
        <div className="InputText">
            <h2 className="Screen__Subtitle">Input</h2>
            <form className="form">
                <textarea className="form-control" rows="10" value={value} onChange={(event) => {
                    onValueChange(event.target.value);
                }}/>
            </form>
        </div>
    );
};

InputTextComponent.propTypes = {
    value: PropTypes.string.isRequired,
    //
    //
    //
    onValueChange: PropTypes.func.isRequired,
};

export default InputTextComponent;
