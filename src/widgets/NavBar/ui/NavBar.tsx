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
import { Drawer } from '@/shared/ui/Drawer';

interface NavBarProps {
    className?: string;
}

export const NavBar = ({ className = '' }: NavBarProps) => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const isTableScreen = useMediaQuery({ query: '(max-width: 992px)' });
    const [isMobile, setIsMobile] = useState(false);
    const onHandleMenu = () => {
        isMobile && setIsOpenMenu(!isOpenMenu);
    };

    const navLinks = links.map((link) => {
        if (link?.items) {
            return (
                <Drawer
                    items={link.items}
                    name={link.name}
                    onHandleMenu={() => onHandleMenu()}
                    key={link.id}
                />
            );
        } else {
            return (
                <LinkScroll
                    href='/'
                    className='navbarLink'
                    name={link.name}
                    to={link.scroll ?? '/'}
                    key={link.id}
                    onClick={() => onHandleMenu()}
                />
            );
        }
    });

    useEffect(() => {
        isOpenMenu
            ? document.body.classList.add('lock')
            : document.body.classList.remove('lock');
    }, [isOpenMenu]);

    useEffect(() => {
        setIsMobile(isTableScreen);
      }, [isTableScreen]);

    return (
        <>
            <header id='up' className={classNames(cl.NavBar, {}, [className])}>
                <div className='container'>
                    <div className={cl.wrap}>
                        <NavLogo />
                        {isMobile && (
                            <Button
                                className={cl.btnBurger}
                                onClick={() => setIsOpenMenu(!isOpenMenu)}
                            >
                                <span
                                    className={classNames(
                                        cl.burger,
                                        { [cl.active]: isOpenMenu },
                                        [className]
                                    )}
                                />
                            </Button>
                        )}

                        {!isMobile && (
                            <nav className={cl.links}>{navLinks}</nav>
                        )}
                    </div>
                </div>
            </header>
            {isMobile && (
                <div
                    className={classNames(cl.menu, {
                        [cl.visible]: isOpenMenu,
                    })}
                >
                    <Image src={guitar} className={cl.guitar} alt='гитара' />
                    {navLinks}
                </div>
            )}
        </>
    );
};
