import { classNames } from '@/shared/lib/classNames/classNames';
import { Slider } from '@/shared/ui/Slider/Slider';
import Image from 'next/image';
import { intro } from '../../../../data/intro';
import logo from '../../../../public/img/logo.webp';
import { leftImg, rightImg, totalImg } from './images';
import logoNewYear from '../../../../public/img/newYear/logo.webp';
import cl from './Intro.module.scss';
import './Intro.scss';

interface IntroProps {
    className?: string;
    backgroundColor?: string;
    isNewYear?: boolean;
}

export const Intro = ({
    className = '',
    backgroundColor,
    isNewYear = false,
}: IntroProps) => {
    return (
        <section
            style={{ background: backgroundColor }}
            className={classNames(cl.Intro, {}, [className])}
        >
            <div className={cl.wrap}>
                <div className={cl.left}>
                    <div className={cl.salsaLeft}>
                        {intro.salsa.map((item, index) => (
                            <span key={index}>{item}</span>
                        ))}
                    </div>
                    <div className={'slider'}>
                        <Slider images={leftImg} mobileImages={totalImg} />
                    </div>
                </div>
                <div className={cl.center}>
                    <div>
                        <h1 className={cl.title}>{intro.title}</h1>
                        <h2 className={cl.subtitle}>
                            <span>{intro.school}</span>
                            <span className={cl.salsaIsMore}>
                                {intro.subtitle}
                            </span>
                        </h2>
                    </div>

                    <Image
                        className={classNames(
                            cl.logo,
                            { [cl.logoNewYear]: isNewYear },
                            [cl.anim]
                        )}
                        src={isNewYear ? logoNewYear : logo}
                        alt='salsa-brest'
                    />
                </div>
                <div className={cl.right}>
                    <div className={cl.salsaRight}>
                        {intro.brest.map((item, index) => (
                            <span key={index}>{item}</span>
                        ))}
                    </div>
                    <div className={'slider'}>
                        <Slider images={rightImg} mobileImages={totalImg} />
                    </div>
                </div>
            </div>
        </section>
    );
};
