import { classNames } from '@/shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';

import cl from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
    TABS = 'tabs',
    ARROW = 'arrow',
    PERSPECTIVE = 'perspective',
}
export const enum ButtonSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    isVisible?: boolean;
    background?: string;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className = '',
        children,
        theme = ButtonTheme.CLEAR,
        square = false,
        size = ButtonSize.M,
        disabled = false,
        isVisible = false,
        background,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cl.square]: square,
        [cl.open]: isVisible,
    };

    return (
        <button
            type='button'
            disabled={disabled}
            style={{ background: background }}
            className={classNames(cl.Button, mods, [
                cl[theme],
                cl[size],
                className,
            ])}
            {...otherProps}
        >
            {theme === 'arrow' ? (
                <div className={cl.arrowWrap}>
                    <span className={cl.arrowLeft}></span>
                    <span className={cl.arrowRight}></span>
                </div>
            ) :  (
                children
            )}
        </button>
    );
};
