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
            id={'about'}
            classWrap={cl.wrap}
        >
            <div className={cl.decr}>
                {aboutSalsa.map((text, index) => <Text text={text} key={index}/>)}
            </div>
            <Image src={conga} className={cl.conga} alt='конги' />
        </Template>
    );
};
