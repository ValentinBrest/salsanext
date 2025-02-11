import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, ReactNode } from 'react';

import cl from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
    WITHOUT = 'without',
    ITALIC = 'italic',
    THREED = 'threeD'
}

export enum TextAlign {
    LEFT = 'left',
    RIGHT = 'right',
    CENTER = 'center',
}

interface TextProps {
    className?: string;
    title?: ReactNode;
    text?: ReactNode;
    hardTitle?: any;
    epigraph?: ReactNode;
    subTitle?: string;
    theme?: TextTheme;
    align?: TextAlign;
    author?: ReactNode;
    animation?: boolean;
}

export const Text = memo((props: TextProps) => {
    const {
        className = '',
        title,
        text,
        subTitle,
        epigraph,
        theme = TextTheme.PRIMARY,
        align = TextAlign.CENTER,
        author,
        hardTitle,
        animation,
    } = props;

    return (
        <>
            {title && (
                <div
                    className={classNames(cl.title, { [cl[theme]]: true }, [
                        className,
                        cl[align],
                    ])}
                >
                    {animation ? (
                        <span className={cl.animation}>{title}</span>
                    ) : (
                        <span>{title}</span>
                    )}
                </div>
            )}

            {hardTitle && (
                <div
                    className={classNames(cl.title, { [cl[theme]]: true }, [
                        className,
                        cl[align],
                    ])}
                >
                    <span>{hardTitle.map((item) => item)}</span>
                </div>
            )}

            {subTitle && (
                <div
                    className={classNames(cl.subTitle, { [cl[theme]]: true }, [
                        className,
                        cl[align],
                    ])}
                >
                    {subTitle}
                </div>
            )}

            {text && (
                <div
                    className={classNames(cl.text, { [cl[theme]]: true }, [
                        className,
                        cl[align],
                    ])}
                >
                    {text}
                </div>
            )}

            {epigraph && (
                <div
                    className={classNames(cl.epigraph, { [cl[theme]]: true }, [
                        className,
                        cl[align],
                    ])}
                >
                    {epigraph} <div className={cl.author}>{author}</div>
                </div>
            )}
        </>
    );
});
