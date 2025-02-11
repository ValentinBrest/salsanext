'use client';
import { useMediaQuery } from 'react-responsive';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import Image from 'next/image';
import { prices } from '../../../../../data/prices/prices';
import meshok from '../../../../../public/img/newYear/meshok.webp';
import cl from './Prices.module.scss';

interface PricesProps {
    className?: string;
    backgroundColor?: string;
    isNewYear?: boolean;
}

export const Prices = ({
    className = '',
    backgroundColor,
    isNewYear = false,
}: PricesProps) => {
    const isTabletScreen = useMediaQuery({ query: '(max-width: 768px)' });
    const isMobileScreen = useMediaQuery({ query: '(max-width: 378px)' });
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
                {!isTabletScreen && <div />}
                {prices.header.map((item, index) => (
                    <div
                        key={index}
                        className={classNames(cl.header, {}, [className])}
                    >
                        <Text
                            text={
                                index === 0 && isMobileScreen
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
                {!isTabletScreen && <div />}
                {<div className={`${cl.couple} ${cl.part}`}>{prices.part.couple}</div>}
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
                                    [cl.third]: isTabletScreen && !(index % 4),
                                },
                                [className]
                            )}
                            text={item}
                            theme={TextTheme.ITALIC}
                        />
                    ))
                )}
                {!isTabletScreen && <div />}
                {<div className={`${cl.woman} ${cl.part}`}>{prices.part.woman}</div>}
                {prices.woman.map((el, elIndex) =>
                    el.map((item, index) => (
                        <Text
                            key={index}
                            className={classNames(
                                cl.body,
                                {
                                    [cl.evenWoman]: !!(index % 2),
                                    [cl.oddWoman]: !(elIndex % 2),
                                    [cl.firstClm]: !(index % 4),
                                    [cl.third]:
                                        isTabletScreen && !(elIndex % 1),
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
