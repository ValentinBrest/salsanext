"use client";
import { Theme, useTheme } from '@/providers/ThemeProvider';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import Image from 'next/image';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({className = ''}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();
    
    return (
        <Button
            title="Переключатель темы"
            theme={ButtonTheme.CLEAR}
            onClick={toggleTheme} 
            className={classNames('', {}, [className])}
        >
            {theme === Theme.DARK ? <Image
                                src={'/icon/moon.svg'}
                                alt='moon'
                                width={40}
                            height={40}
                            />:<Image
                            src={'/icon/sun.svg'}
                            alt='sun'
                            width={40}
                            height={40}
                        />}
        </Button>
    );
};