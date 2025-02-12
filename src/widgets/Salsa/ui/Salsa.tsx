import { Text, TextAlign } from '@/shared/ui/Text/Text';
import Image from 'next/image';
import gold from '../../../../public/img/newYear/gold.png';
import saxophone from '../../../../public/img/instuments/saxophone.webp';
import partSnow from '../../../../public/img/newYear/partSnow.webp';
import { salsa } from '../../../../data/salsa';
import cl from './Salsa.module.scss';
import { Accordion } from '@/shared/ui/Accordion/Accordion';
import { Template } from '@/shared/ui/Template/Template';

interface SalsaProps {
    backgroundColor?: string;
    isNewYear?: boolean;
}

export const Salsa = ({
    backgroundColor,
    isNewYear = false,
}: SalsaProps) => {
    const O = <Image src={gold} alt='o' className={'toy small'} />;

    return (
        <div className={cl.superWrap}>
            {isNewYear && (
                <Image
                    src={partSnow}
                    className={cl.partSnow}
                    alt='partSnow'
                />
            )}
            <Template
                backgroundColor={backgroundColor}
                className={cl.Salsa}
                classWrap={cl.wrap}
                id={'salsa'}
                amount={0.2}
            >
                <Image src={saxophone} className={cl.sax} alt='саксофон' />
                <div></div>
                <div className={cl.decr}>
                    {isNewYear ? (
                        <Text hardTitle={['П', O, 'чему сальса?']} />
                    ) : (
                        <Text title={salsa.title} />
                    )}
                    <Text
                        align={TextAlign.RIGHT}
                        className={cl.epigraph}
                        epigraph={salsa.epigraph.text}
                        author={salsa.epigraph.author}
                    />
                    <Accordion
                        height='800px'
                        background={backgroundColor}
                        linkId='salsa'
                    >
                        {salsa.text.map((item, index) => (
                            <Text
                                key={index}
                                align={TextAlign.RIGHT}
                                text={item}
                            />
                        ))}
                    </Accordion>
                </div>
            </Template>
        </div>
    );
};
