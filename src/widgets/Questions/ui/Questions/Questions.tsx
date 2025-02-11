import { Text } from '@/shared/ui/Text/Text';

import {
    questions,
    questionsTitle,
} from '../../../../../data/questions/questions';
import clave from '../../../../../public/img/instuments/clave.webp';
import blue from '../../../../../public/img/newYear/blue.png';
import { QuestionCard } from '../QuestionCard/QuestionCard';
import Image from 'next/image';
import cl from './Questions.module.scss';
import { Template } from '@/shared/ui/Template/Template';

interface QuestionsProps {
    backgroundColor?: string;
    isNewYear?: boolean;
}

export const Questions = ({
    backgroundColor,
    isNewYear = false,
}: QuestionsProps) => {
    const O = <Image src={blue} className={'toy medium'} alt='o' />;

    return (
        <Template
            backgroundColor={backgroundColor}
            className={cl.Questions}
            id={'question'}
            classWrap={cl.wrap}
            amount={0.1}
        >
            {isNewYear ? (
                <Text
                    hardTitle={['В', O, 'пр', O, 'сы']}
                    className={cl.title}
                />
            ) : (
                <Text title={questionsTitle} className={cl.title} />
            )}
            <Image src={clave} className={cl.clave} alt='клавы'/>
            
            {questions.map((item) => (
                <QuestionCard
                    {...item}
                    key={item.id}
                    className={cl.AnswersCard}
                />
            ))}
        </Template>
    );
};
