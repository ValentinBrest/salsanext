import { memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cl from './Card.module.scss';

interface CardProps {
    className?: string;
    children?: ReactNode;
    background?: string;
    withoutPic?: boolean;
}

export const Card = memo((props: CardProps) => {
    const { className = '', children, background} = props;

    return (
        <div
            style={{ background: background }}
            className={classNames(cl.Card, {}, [className])}
        >
            {children}
        </div>
    );
});
