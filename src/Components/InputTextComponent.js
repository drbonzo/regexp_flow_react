// @flow

import React from 'react';

type Props = {
    value: string,
    onValueChange: (string) => void
}

const InputTextComponent = ({value, onValueChange}: Props) => {

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

export default InputTextComponent;
