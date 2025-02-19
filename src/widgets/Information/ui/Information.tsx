import { Text, TextAlign } from '@/shared/ui/Text/Text';
import { Template } from '@/shared/ui/Template/Template';
import tree from '../../../../public/img/newYear/tree.webp';
import { information } from '../../../../data/information';
import cl from './Information.module.scss';
import { Accordion } from '@/shared/ui/Accordion/Accordion';
import Image from 'next/image';

interface InformationProps {
    backgroundColor?: string;
    isNewYear?: boolean;
}

export const Information = ({
    backgroundColor,
    isNewYear = false,
}: InformationProps) => {
    return (
        <Template
            backgroundColor={backgroundColor}
            className={cl.Information}
            id={'info'}
            classWrap={cl.wrap}
            amount={0.2}
        >
            <Accordion
                linkId='info'
                height='1000px'
                background={backgroundColor}
            >
                <div className={cl.decr}>
                    {isNewYear && (
                        <Image src={tree} className={cl.tree} alt='ель' />
                    )}
                    <Text className={cl.title} title={information.title} />

                    {information.text.map((item, index) => (
                        <Text
                            key={index}
                            className={cl.text}
                            align={TextAlign.LEFT}
                            text={item}
                        />
                    ))}
                </div>
            </Accordion>
        </Template>
    );
};
