import { Text, TextAlign } from '@/shared/ui/Text/Text';
import { Prices } from '@/widgets/Prices';
import violet from '../../../../../public/img/newYear/violet.png';
import cl from './Abonement.module.scss';
import { abonement } from '../../../../../data/abonement';
import Image from 'next/image';
import { Template } from '@/shared/ui/Template/Template';

interface PricesProps {
    className?: string;
    backgroundColor?: string;
    isNewYear?: boolean;
}

export const Abonement = ({
    backgroundColor,
    isNewYear = false,
}: PricesProps) => {
    const O = <Image src={violet} className={'toy small'} alt='o' />;
    return (
        <Template
            backgroundColor={backgroundColor}
            className={cl.Abonement}
            id={'abonement'}
            amount={0.1}
        >
            {isNewYear ? (
                <Text hardTitle={['Аб', O, 'нементы']} />
            ) : (
                <Text title={abonement.title} />
            )}
            <Prices isNewYear={isNewYear} />
            <Text
                className={cl.text}
                align={TextAlign.LEFT}
                text={abonement.note}
            />
        </Template>
    );
};
