'use client';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { links } from '../../../../data/links/links';
import guitar from '../../../../public/img/instuments/guitar.webp';

import { LinkScroll } from '@/shared/ui/LinkScroll/LinkScroll';
import { NavLogo } from '@/shared/ui/NavLogo/NavLogo';
import Image from 'next/image';
import cl from './NavBar.module.scss';
import { Button } from '@/shared/ui/Button/Button';

interface NavBarProps {
    className?: string;
}

export const NavBar = ({ className = '' }: NavBarProps) => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const isTableScreen = useMediaQuery({ query: '(max-width: 992px)' });
    const onHandleMenu = () => {
        isTableScreen && setIsOpenMenu(!isOpenMenu);
    };

    const navLinks = links.map((item) => (
            <LinkScroll
                href='/'
                className={isTableScreen ? cl.mobileLink: cl.link}
                name={item.name}
                to={item.scroll}
                key={item.id}
                onClick={() => onHandleMenu()}
            />
        ))

    useEffect(() => {
        isOpenMenu
            ? document.body.classList.add('lock')
            : document.body.classList.remove('lock');
    }, [isOpenMenu]);

    return (
        <>
            <header id='up' className={classNames(cl.NavBar, {}, [className])}>
                <div className='container'>
                    <div className={cl.wrap}>
                        <NavLogo />
                        {isTableScreen && (
                            <Button className={cl.btnBurger} onClick={() => setIsOpenMenu(!isOpenMenu)}>
                                <div
                                className={classNames(
                                    cl.burger,
                                    { [cl.active]: isOpenMenu },
                                    [className]
                                )}
                            />
                            </Button>
                        )}

                        {!isTableScreen && (
                            <nav className={cl.links}>
                                {navLinks}
                            </nav>
                        )}
                    </div>
                </div>
            </header>
            {isTableScreen && (
                <nav
                    className={classNames(cl.menu, {
                        [cl.visible]: isOpenMenu,
                    })}
                >
                    <Image src={guitar} className={cl.guitar} alt='гитара' />
                    {navLinks}
                </nav>
            )}
        </>
    );
};
