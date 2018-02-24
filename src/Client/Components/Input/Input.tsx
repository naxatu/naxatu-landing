import * as React from 'react';
import * as classnames from 'classnames';

export interface IInputProps {
    name: string;
    type?: string;
    value?: string | number;
    placeholder?: string;
    className?: string;
    onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
}

export function Input(props: IInputProps): JSX.Element {
    const {
        name,
        type,
        value = '',
        placeholder = '',
        className,
        onChange,
    } = props;
    return (
        <div className={ classnames('input', className) }>
            <input
                className="input__element"
                name={ name }
                type={ type }
                value={ value }
                onChange={ onChange }
                aria-label={ placeholder }
                aria-required="true"
            />
            <div className={ classnames('input__placeholder', { 'i-visible': Boolean(placeholder && !value) }) }>
                { placeholder }
            </div>
        </div>
    );
}
