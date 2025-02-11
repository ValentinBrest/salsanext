import { Text, TextAlign } from '@/shared/ui/Text/Text';
import { lessons } from '../../../../data/lessons';
import guiro from '../../../../public/img/instuments/guiro.webp';
import Image from 'next/image';
import cl from './Lessons.module.scss';
import { Accordion } from '@/shared/ui/Accordion/Accordion';
import { Template } from '@/shared/ui/Template/Template';

interface LessonsProps {
    backgroundColor?: string;
}

export const Lessons = ({ backgroundColor }: LessonsProps) => {
    return (
        <Template
            backgroundColor={backgroundColor}
            className={cl.Lessons}
            id={'lessons'}
            classWrap={cl.wrap}
        >
            <div></div>
            <div className={cl.decr}>
                <Text title={lessons.title} />
                <Accordion
                    height='1400px'
                    background={backgroundColor}
                    linkId='lessons'
                >
                    {lessons.text.map((item, index) => (
                        <Text key={index} align={TextAlign.RIGHT} text={item} />
                    ))}
                </Accordion>
            </div>
            <Image src={guiro} className={cl.guiro} alt='guiro' />
        </Template>
    );
};
