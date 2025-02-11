'use client';
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import { Link as ReactLinkScroll } from 'react-scroll';
import Link from 'next/link';

interface LinkScrollProps {
    to: string;
    href: string;
    name: string;
    className?: string;
    onClick?: () => void
}

export const LinkScroll = memo((props: LinkScrollProps) => {
    const { to, href, className = '', name } = props;

    return (
        <ReactLinkScroll
            to={to}
            href={href}
            smooth={true}
            className={classNames('', {}, [className])}
        >
            <Link href={`/#${to}`} scroll={false} className='link'>
                {name}
            </Link>
        </ReactLinkScroll>
    );
});
