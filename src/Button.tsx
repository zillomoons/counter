import React from 'react';

type PropsType = {
    name: string
    disabled: boolean
    callback: () => void
}
export const Button = ({name, disabled, callback}: PropsType) => {
    const onClick = () => callback();
    return (
        <>
            <button disabled={disabled} onClick={onClick}>
                {name}
            </button>
        </>
    );
};

