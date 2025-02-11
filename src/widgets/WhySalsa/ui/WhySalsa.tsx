import { Text, TextAlign } from '@/shared/ui/Text/Text';
import Image from 'next/image';
import gold from '../../../../public/img/newYear/gold.png';
import saxophone from '../../../../public/img/instuments/saxophone.webp';
import partSnow from '../../../../public/img/newYear/partSnow.webp';
import { whySalsa } from '../../../../data/whySalsa';
import cl from './WhySalsa.module.scss';
import { Accordion } from '@/shared/ui/Accordion/Accordion';
import { Template } from '@/shared/ui/Template/Template';

interface WhySalsaProps {
    backgroundColor?: string;
    isNewYear?: boolean;
}

export const WhySalsa = ({
    backgroundColor,
    isNewYear = false,
}: WhySalsaProps) => {
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
                className={cl.WhySalsa}
                classWrap={cl.wrap}
                id={'whySalsa'}
                amount={0.2}
            >
                <Image src={saxophone} className={cl.sax} alt='саксофон' />
                <div></div>
                <div className={cl.decr}>
                    {isNewYear ? (
                        <Text hardTitle={['П', O, 'чему сальса?']} />
                    ) : (
                        <Text title={whySalsa.title} />
                    )}
                    <Text
                        align={TextAlign.RIGHT}
                        className={cl.epigraph}
                        epigraph={whySalsa.epigraph.text}
                        author={whySalsa.epigraph.author}
                    />
                    <Accordion
                        height='800px'
                        background={backgroundColor}
                        linkId='whySalsa'
                    >
                        {whySalsa.text.map((item, index) => (
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
