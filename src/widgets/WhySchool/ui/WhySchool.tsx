import { Text, TextAlign, TextTheme } from '@/shared/ui/Text/Text';
import bongi from '../../../../public/img/instuments/bongi.webp';
import maria from '../../../../public/img/maria.webp';
import orange from '../../../../public/img/newYear/orange.png';
import cl from './WhySchool.module.scss';
import { whySchool } from '../../../../data/whySchool';
import { Accordion } from '@/shared/ui/Accordion/Accordion';
import { Card } from '@/shared/ui/Card/Card';
import Image from 'next/image';
import { Template } from '@/shared/ui/Template/Template';

interface WhySchoolProps {
    backgroundColor?: string;
    backgroundColorCard?: string;
    isNewYear?: boolean;
}

export const WhySchool = ({
    backgroundColor,
    backgroundColorCard,
    isNewYear = false,
}: WhySchoolProps) => {

    const O = <Image alt='o' src={orange} className={'toy large'} />;

    return (
        <Template
            backgroundColor={backgroundColor}
            className={cl.WhySchool}
            id={'aboutSchool'}
            classWrap={cl.decr}
        >
            {isNewYear ? (
                <Text
                    className={cl.title}
                    theme={TextTheme.WITHOUT}
                    hardTitle={[ 'П', O, 'чему вам именнo в школу «СальсаБрест»?']}
                />
            ) : (
                <Text
                    className={cl.title}
                    theme={TextTheme.WITHOUT}
                    title={whySchool.title}
                />
            )}

            <Accordion
                height='3500px'
                background={backgroundColor}
                linkId='aboutSchool'
            >
                <div className={cl.wrap}>
                    <div>
                        {whySchool.text.map((item, index) => (
                            <Text
                                key={index}
                                align={TextAlign.LEFT}
                                className={cl.text}
                                text={item}
                            />
                        ))}
                    </div>
                    <Image
                        src={bongi}
                        className={cl.bongi}
                        alt='бонги'
                    />
                </div>

                <Card background={backgroundColorCard} className={cl.card}>
                    {whySchool.note}
                </Card>

                <div className={cl.invertedwrap}>
                    <Image
                        src={maria}
                        alt='maria'
                        className={cl.maria}
                    />
                    <div>
                        <>
                            <Text subTitle={whySchool.teacherTitle} />
                            {whySchool.teacherText.map((item, index) => (
                                <Text
                                    key={index}
                                    align={TextAlign.CENTER}
                                    text={item}
                                />
                            ))}
                        </>
                    </div>
                </div>
            </Accordion>
        </Template>
    );
};
