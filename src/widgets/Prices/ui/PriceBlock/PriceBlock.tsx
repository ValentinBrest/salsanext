'use client';
import { useMediaQuery } from 'react-responsive';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import Image from 'next/image';
import meshok from '../../../../../public/img/newYear/meshok.webp';
import cl from './PriceBlock.module.scss';
import { useEffect, useState } from 'react';

interface PriceBlock {
    header: ({
            name: string;
            old?: undefined;
        } | {
            name: string;
            old: string;
        })[]
    body: Array<Array<string>>
}

interface PriceBlockProps {
    prices: PriceBlock
    className?: string;
    backgroundColor?: string;
    isNewYear?: boolean;
}

export const PriceBlock = ({
    prices,
    className = '',
    backgroundColor,
    isNewYear = false,
}: PriceBlockProps) => {
    const isTabletScreen = useMediaQuery({ query: '(max-width: 768px)' });
    const [isMobile, setIsMobile] = useState(false);

     useEffect(() => {
            setIsMobile(isTabletScreen);
          }, [isTabletScreen]);
          
    return (
        <div
            style={{ background: backgroundColor }}
            id='price'
            className={classNames(cl.Prices, {}, [className])}
        >
            {isNewYear && (
                <Image src={meshok} className={cl.meshok} alt='meshok' />
            )}
            <div className={cl.wrap}>
                {!isMobile && <div />}
                {prices.header.map((item, index) => (
                    <div
                        key={index}
                        className={classNames(cl.header, {}, [className])}
                    >
                        <Text
                            text={
                                index === 0 && isMobile
                                    ? '"Студен-ческий"'
                                    : item.name
                            }
                            theme={TextTheme.ITALIC}
                            className={cl.fff}
                        />

                        {item.old && (
                            <Text
                                text={item.old}
                                theme={TextTheme.ITALIC}
                                className={cl.old}
                            />
                        )}
                    </div>
                ))}
                {prices.body.map((el) =>
                    el.map((item, index) => (
                        <Text
                            key={index}
                            className={classNames(
                                cl.body,
                                {
                                    [cl.even]: !!(index % 2),
                                    [cl.odd]: !(index % 2),
                                    [cl.firstClm]: !(index % 4),
                                    [cl.third]: isMobile && !(index % 4),
                                },
                                [className]
                            )}
                            text={item}
                            theme={TextTheme.ITALIC}
                        />
                    ))
                )}
            </div>
        </div>
    );
};
