// @flow

import * as React from 'react';

type Props = {
    value: string,
    onValueChange: string => void,
};

const TextFieldComponent = ({ value, onValueChange }: Props) => {
    return (
        <div>
            <input
                type="text"
                className="form-control"
                value={value}
                onChange={event => {
                    onValueChange(event.target.value);
                }}
            />
        </div>
    );
};

export default TextFieldComponent;
