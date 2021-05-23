import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import classnames from 'classnames';

export enum ButtonSize {
    Large = 'lg',
    Small = 'sm'
}

export enum ButtonType {
    Primary = 'primary',
    Default = 'default',
    Danger = 'danger',
    Link = 'link'
}

interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    href?: string;
    children: React.ReactNode
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const Button: React.FC<ButtonProps> = (props) => {
    const { btnType, disabled, children, size } = props;

    // btn, btn-lg, btn-sm
    const classes = classnames('btn', {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': (btnType === ButtonType.Link) && disabled
    });

    if (btnType === ButtonType.Link) {
        return (
            <a className={classes}>
                {children}
            </a>
        )
    } else {
        return (
            <button className={classes} disabled={disabled}>
                {children}
            </button>
        )
    }
}

export default Button;
