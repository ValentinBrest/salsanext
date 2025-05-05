import { Text, TextTheme } from '@/shared/ui/Text/Text';
import Image from 'next/image';
import dance from '../../../../../public/img/dance.webp';
import instagram from '../../../../../public/icon/social/instagram.svg';
import telegram from '../../../../../public/icon/social/telegram.svg';
import cl from './TrialLesson.module.scss';
import { trialLesson } from '../../../../../data/trialLesson';
import { Template } from '@/shared/ui/Template/Template';

interface TrialLessonProps {
    className?: string;
    backgroundColor?: string;
}

export const TrialLesson = ({ backgroundColor }: TrialLessonProps) => {
    const {title, suptitle, message, toDirect, direct, messagePost, mail} = trialLesson;
    return (
        <Template
            backgroundColor={backgroundColor}
            className={cl.TrialLesson}
            id={'trialLesson'}
            classWrap={cl.wrap}
        >
            <div>
                <Text theme={TextTheme.WITHOUT} title={title} />
                <div className={cl.send}>
                    <Text className={cl.withoutMargin} text={suptitle} />
                    <div className={cl.wantToDance}>
                        <span>{message}</span>
                    </div>
                    <Text className={cl.withoutMargin} text={toDirect} />
                    <div className={cl.social}>
                        <a
                            href='https://www.instagram.com/salsabrest/'
                            aria-label='Перейти в инстаграм'
                        >
                            <Image
                                src={instagram}
                                alt='инстаграм'
                                className={cl.insta}
                            />
                        </a>
                        <a
                            href='https://t.me/salsabrestdirect'
                            aria-label='Перейти в телеграм'
                            className={cl.direct}
                            data-text={direct}
                        >
                            <Image
                                src={telegram}
                                alt='телеграм'
                                className={cl.telega}
                            />
                        </a>
                    </div>
                    <Text text={messagePost} />
                    <a href={`mailto:${mail}`} className={cl.mailWrap}>
                        <Image
                            src={mail}
                            alt='почта'
                            className={cl.mail}
                        />
                        <Text text={mail} />
                    </a>
                </div>
            </div>

            <Image
                src={dance}
                className={cl.trialLessonImg}
                alt='все на танцы'
            />
        </Template> 
    );
};
