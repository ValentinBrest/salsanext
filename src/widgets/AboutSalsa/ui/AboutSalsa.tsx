import { Text } from '@/shared/ui/Text/Text';
import Image from 'next/image';
import { aboutSalsa } from '../../../../data/aboutSalsa';
import conga from '../../../../public/img/instuments/conga.webp';
import cl from './AboutSalsa.module.scss';
import { Template } from '@/shared/ui/Template/Template';

interface AboutSalsaProps {
    backgroundColor?: string;
}

export const AboutSalsa = ({ backgroundColor }: AboutSalsaProps) => {
    return (
        <Template
            backgroundColor={backgroundColor}
            className={cl.AboutSalsa}
            id={'salsa'}
            classWrap={cl.wrap}
        >
            <div className={cl.decr}>
                <Text text={aboutSalsa.text1} />
                <Text text={aboutSalsa.text2} />
            </div>
            <Image src={conga} className={cl.conga} alt='конги' />
        </Template>
    );
};
