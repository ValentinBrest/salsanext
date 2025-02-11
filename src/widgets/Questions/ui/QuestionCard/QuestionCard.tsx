"use client";
import { ReactNode, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign } from '@/shared/ui/Text/Text';

import cl from './QuestionCard.module.scss';

interface QuestionCardProps {
    className?: string;
    question: string;
    answer: ReactNode;
    id: number;
}

export const QuestionCard = (props: QuestionCardProps) => {
    const { className = '', question, answer, id } = props;

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={classNames(cl.QuestionCard, {[cl.open]: isOpen}, [className])}>
            <div className={cl.header} onClick={() => setIsOpen(!isOpen)}>
                <Text text={`${id}. ${question}`} className={cl.text} align={TextAlign.LEFT}/>
                <span className={classNames(cl.sign, {[cl.active]: isOpen}, [])}></span>
            </div>
            {isOpen && <Text className={cl.body} text={answer}/>}
            
        </div>
    );
};
