// import { useMediaQuery } from 'react-responsive';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Slider } from '@/shared/ui/Slider/Slider';
import Image from 'next/image';
import { intro } from '../../../../data/intro';
import logo from '../../../../public/img/logo.webp';
import m1 from '../../../../public/img/main/1.webp';
import m2 from '../../../../public/img/main/2.webp';
import m3 from '../../../../public/img/main/3.webp';
import m4 from '../../../../public/img/main/4.webp';
import m5 from '../../../../public/img/main/5.webp';
import m6 from '../../../../public/img/main/6.webp';
import m7 from '../../../../public/img/main/7.webp';
import m8 from '../../../../public/img/main/8.webp';
import logoNewYear from '../../../../public/img/newYear/logo_new_year.webp';
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
    const images = [
        { url: m1.src },
        { url: m8.src },
        { url: m6.src },
        { url: m3.src },
    ];

    const images2 = [
        { url: m2.src },
        { url: m5.src },
        { url: m7.src },
        { url: m4.src },
    ];
    const totalImg = [
        { url: m2.src },
        { url: m1.src },
        { url: m8.src },
        { url: m6.src },
        { url: m5.src },
        { url: m7.src },
        { url: m3.src },
        { url: m4.src },
    ];
    return (
        <section
            style={{ background: backgroundColor }}
            className={classNames(cl.Intro, {}, [className])}
        >
            <div className={cl.wrap}>
                <div className={cl.left}>
                    <div className={cl.salsaLeft}>
                        {intro.salsa.map((item) => (
                            <span key={item}>{item}</span>
                        ))}
                    </div>
                    <div
                        className={classNames(
                            'slider',
                            {},
                            []
                        )}
                    >
                        <Slider images={images} mobileImages={totalImg} />
                    </div>
                </div>
                <div className={cl.center}>
                    <div>
                        <h1 className={cl.title}>{intro.title}</h1>
                        <h2 className={cl.subtitle}>
                            <span>{intro.school}</span>
                            <span className={cl.cool}>{intro.subtitle}</span>
                        </h2>
                    </div>

                    <Image
                        className={classNames(cl.logo, {}, [cl.anim])}
                        src={isNewYear ? logoNewYear : logo}
                        alt='salsa-brest'
                    />
                    
                </div>
                <div className={cl.right}>
                    <div className={cl.salsaRight}>
                        {intro.brest.map((item) => (
                            <span key={item}>{item}</span>
                        ))}
                    </div>
                    <div
                        className={classNames(
                            'slider',
                            {},
                            []
                        )}
                    >
                        <Slider images={images2} mobileImages={totalImg} />
                    </div>
                </div>
            </div>
        </section>
    );
};
