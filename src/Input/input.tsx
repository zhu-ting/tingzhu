import React, { InputHTMLAttributes, ReactElement, FC, ChangeEvent } from 'react';
import classNames from 'classnames';

type InputSize = 'lg' | 'sm';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
    disabled?: boolean;
    size?: InputSize;
    prepend?: string | ReactElement;
    append?: string | ReactElement;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = (props) => {
    const { disabled, size, prepend, append, style, ...restProps } = props;
    const cnames = classNames('input-wrapper', {
        [`input-size-${size}`]: size,
        'is-disabled': disabled,
        'input-group': prepend || append,
        'input-group-append': !!append,
        'input-group-prepend': !!prepend
    })

    const fixControlledValue = (value: any) => {
        if (typeof value === 'undefined' || value === null) {
            return ''
        }
        return value;
    }

    if ('value' in props) {
        delete restProps.defaultValue;
        restProps.value = fixControlledValue(props.value);
    }

    return (
        <div className={cnames} style={style}>
            {prepend && <div className="input-group-prepend">{prepend}</div>}
            {/* icon placeholder */}
            <input className="input-inner" disabled={disabled} {...restProps} />
            {append && <div className="input-group-append">{append}</div>}
        </div>
    )
}

export default Input;
