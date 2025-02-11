import { Text, TextTheme } from '@/shared/ui/Text/Text';
import Image from 'next/image';
import dance from '../../../../../public/img/dance.webp';
import mail from '../../../../../public/icon/mail.svg';
import instagram from '../../../../../public/icon/social/instagram.svg';
import telegram from '../../../../../public/icon/social/telegram.svg';
import cl from './Form.module.scss';
import { form } from '../../../../../data/form';
import { Template } from '@/shared/ui/Template/Template';

interface FormProps {
    className?: string;
    backgroundColor?: string;
}

export const Form = ({ backgroundColor }: FormProps) => {
    return (
        <Template
            backgroundColor={backgroundColor}
            className={cl.Form}
            id={'form'}
            classWrap={cl.wrap}
        >
            <div>
                <Text theme={TextTheme.WITHOUT} title={form.title} />
                <div className={cl.send}>
                    <Text className={cl.withoutMargin} text={form.suptitle} />
                    <div className={cl.wantToDance}>
                        <span>{form.message}</span>
                    </div>
                    <Text className={cl.withoutMargin} text={form.toDirect} />
                    <div className={cl.wrapSocial}>
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
                            data-text={form.direct}
                        >
                            <Image
                                src={telegram}
                                alt='телеграм'
                                className={cl.telega}
                            />
                        </a>
                    </div>
                    <Text text={form.messagePost} />
                    <a href={`mailto:${form.mail}`} className={cl.mailWrap}>
                        <Image
                            src={mail}
                            alt='почта'
                            className={cl.mail}
                        />
                        <Text text={form.mail} />
                    </a>
                </div>
            </div>

            <Image
                src={dance}
                className={cl.formImg}
                alt='все на танцы'
            />
        </Template> 
    );
};
