'use client'
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './Drawer.module.scss';
import { LinkScroll } from '@/shared/ui/LinkScroll/LinkScroll';
import downIcon from '../../../../../public/icon/down.svg';
import Image from 'next/image';

interface Item {
    id: number;
    name: string;
    to: string;
    scroll: string;
}

interface DrawerProps {
    name: string;
    items: Item[];
    className?: string;
    onHandleMenu: () => void;
}

export const Drawer = ({
    className = '',
    name,
    items,
    onHandleMenu,
}: DrawerProps) => {

    return (
        <div className={classNames(cl.Drawer, {}, [className])}>
            <div className={cl.name}>
                {name}
                <Image className={cl.icon} src={downIcon} alt='icon'/>
            </div>
            <div className={cl.content}>
                {items.map((link) => (
                    <LinkScroll
                        href='/'
                        className={cl.link}
                        name={link.name}
                        to={link.scroll}
                        key={link.id}
                        onClick={() => onHandleMenu()}
                        isDrawerLink={true}
                    />
                ))}
            </div>
        </div>
    );
};
