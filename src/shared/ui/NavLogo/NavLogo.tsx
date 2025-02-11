import { classNames } from '@/shared/lib/classNames/classNames';
import Image from 'next/image';
import cl from './NavLogo.module.scss';

interface NavLogoProps {
    className?: string;
}

export const NavLogo = ({ className = '' }: NavLogoProps) => {
    return (
        <a href='https://salsabrest.by' className={classNames(cl.linkLogo, {}, [className])} key={'salsa'}>
            <Image
                className={cl.logo}
                src={'/img/logo.webp'}
                alt='salsa-brest'
                width={60}
                height={60}
            />
        </a>
    );
};
