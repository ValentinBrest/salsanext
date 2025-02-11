"use client";
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link as LinkScroll } from 'react-scroll';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import Image from 'next/image';
import { salsamania } from '../../../../data/salsamania/salsamania';
import boomp from '../../../../public/img/main/8.webp';
import PROP from '../../../../public/img/maria.webp';
import boom from '../../../../public/img/projects/salsamania/boom.webp';
import food from '../../../../public/img/projects/salsamania/food.webp';
import music from '../../../../public/img/projects/salsamania/music.webp';
import siemia from '../../../../public/img/projects/salsamania/seimia.webp';
import talk from '../../../../public/img/projects/salsamania/talk.webp';

import cl from './SalsaMania.module.scss';
import { Card } from '@/shared/ui/Card/Card';
import { Accordion } from '@/shared/ui/Accordion/Accordion';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button';
import { useTheme } from '@/providers/ThemeProvider';

interface SalsaManiaProps {
    className?: string;
    backgroundColor?: string;
}

export const SalsaMania = ({ backgroundColor }: SalsaManiaProps) => {
    const isMobileScreen = useMediaQuery({ query: '(max-width: 576px)' });
    const isTableScreen = useMediaQuery({ query: '(max-width: 992px)' });
    const getHeightAccordion = () => {
        if (isMobileScreen) {
            return '2500px';
        } else if (isTableScreen) {
            return '2200px';
        } else {
            return '1700px';
        }
    };
    const projects = [
        {
            image: boomp,
            letter: 'С',
            name: 'BOOM',
            picture: boom,
            text: (
                <>
                    {salsamania.BOOM[0]}
                    <br />
                    <br />
                    {isTableScreen && (
                        <Image src={boom} alt={'Boom'} className={cl.picture} />
                    )}
                    {salsamania.BOOM[1]}
                </>
            ),
            id: 1,
            status: 'active',
        },
        {
            image: siemia,
            letter: 'А',
            name: 'SHOW',
            text: salsamania.SIEMIA[0],
            id: 2,
            status: 'nonactive',
        },
        {
            image: PROP,
            letter: 'Л',
            name: 'PRO',
            subname: 'ject',
            id: 3,
            status: 'nonactive',
        },
        {
            image: music,
            letter: 'Ь',
            name: 'MUSIC',
            text: salsamania.MUSIC[0],
            id: 4,
            status: 'nonactive',
        },
        {
            image: talk,
            letter: 'С',
            name: 'TALK',
            text: salsamania.TALK[0],
            id: 5,
            status: 'nonactive',
        },
        {
            image: food,
            letter: 'А',
            name: 'FOOD',
            text: salsamania.FOOD[0],
            id: 6,
            status: 'nonactive',
        },
    ];
    const [stageVisible, setStageVisible] = useState([{ ...projects[0] }]);

    return (
        <>
            <section
                id='projects'
                style={{ background: backgroundColor, paddingBottom: '50px' }}
            >
                <Text
                    title={salsamania.title}
                    className={cl.title}
                    animation={true}
                    theme={TextTheme.WITHOUT}
                />
                <div className='container'>
                    <Text
                        className={cl.mainText}
                        text={salsamania.main}
                    />
                    <div className={cl.wrap}>
                        {projects.map((item) => (
                            <LinkScroll
                                key={item.id}
                                href='/'
                                to={item.name}
                                smooth={true}
                                className={classNames(
                                    cl.stage,
                                    {
                                        [cl.active]:
                                            stageVisible[0].name === item.name,
                                    },
                                    []
                                )}
                                data-status={item.status}
                                onClick={() =>
                                    item.status === 'active' &&
                                    setStageVisible([item])
                                }
                            >
                                <div className={cl.color} />
                                <Text
                                    text={item.letter}
                                    className={cl.letter}
                                />
                                <Text text={item.name} className={cl.name} />
                                <Image height={320} width={175} src={item.image} className={cl.image} alt='salsa-brest'/>
                                {item.status !== 'active' && (
                                    <div className={cl.soon}>Скоро</div>
                                )}
                            </LinkScroll>
                        ))}
                    </div>
                </div>
            </section>
            {projects.map(
                (item) =>
                    item.status === 'active' && (
                        <div key={item.name} id={item.name}></div>
                    )
            )}
            <div
                style={{ background: backgroundColor }}
                className={cl.salsaStages}
            >
                <div className='container'>
                    <div className={cl.wrapStage}>
                        {!isTableScreen && (
                            <Image
                                src={stageVisible[0].picture}
                                alt={stageVisible[0].name}
                                className={cl.picture}
                            />
                        )}
                        <Card withoutPic={true} className={cl.card}>
                            {' '}
                            <Text text={'САЛЬСА'} className={cl.subTitle} />
                            <Text
                                title={`${stageVisible[0].name}${
                                    stageVisible[0].subname
                                        ? stageVisible[0].subname
                                        : ''
                                }`}
                                className={cl.stageTitle}
                                theme={TextTheme.WITHOUT}
                            />
                            <Accordion
                                startHeight='300px'
                                height={getHeightAccordion()}
                                background={backgroundColor}
                            >
                                {stageVisible[0].text ??
                                    'Этап стартует уже скоро!!!'}
                            </Accordion>
                            <LinkScroll
                                href='/'
                                to='form'
                                smooth={true}
                                className={cl.linkBtn}
                            >
                                <Button
                                    size={ButtonSize.L}
                                    theme={ButtonTheme.OUTLINE}
                                    className={cl.btn}
                                >
                                    Участвовать
                                </Button>
                            </LinkScroll>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
};
