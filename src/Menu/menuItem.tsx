import React, { useContext } from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu';

export interface MenuItemProps {
    index?: number;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
    const { index, disabled, style, className, children } = props;
    const context = useContext(MenuContext);
    const classes = classNames('menu-item', className, {
        'is-disabled': disabled,
        'is-active': context.index === index
    })

    return (
        <li className={classes} style={style}>
            {children}
        </li>
    )
}

export default MenuItem;
