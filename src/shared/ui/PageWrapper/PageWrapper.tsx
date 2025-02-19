'use client';
import { ReactNode, useEffect, useState } from 'react';
import { LinkScroll } from '@/shared/ui/LinkScroll/LinkScroll';
import upIcon from '../../../../public/icon/toUp.svg';
import Image from 'next/image';

interface PageWrapperProps {
    children: ReactNode;
}

export const PageWrapper = ({ children }: PageWrapperProps) => {
    const [isSctollTo, setIsScrollTo] = useState(false);

    useEffect(() => {
        function handleMove() {
            if (scrollY < document.documentElement.clientHeight) {
                setIsScrollTo(false);
            } else {
                setIsScrollTo(true);
            }
        }
        window.addEventListener('scroll', handleMove);
        return () => {
            window.removeEventListener('scroll', handleMove);
        };
    }, []);

    return (
        <main>
            {children}
            <LinkScroll
                to={'up'}
                className={`pageup ${isSctollTo ? 'activeScroll' : ''}`}
            >
                <Image src={upIcon} className='up' alt='toUp' />
            </LinkScroll>
        </main>
    );
};
