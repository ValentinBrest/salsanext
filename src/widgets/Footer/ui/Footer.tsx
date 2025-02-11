
import { footer } from '../../../../data/footer';
import cl from './Footer.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import Image from 'next/image';
import instagram from '../../../../public/icon/social/instagram.svg';

interface FooterProps {
    className?: string;
    backgroundColor?: string;
}

export const Footer = ({ className = '', backgroundColor }: FooterProps) => {
    return (
        <footer
            style={{ background: backgroundColor }}
            id='contact'
            className={classNames(cl.Footer, {}, [className])}
        >
            <div className='container'>
                <div className={cl.wrap}>
                    <div className={cl.wrapText}>
                        <span className={cl.text}>
                            {footer.name}
                        </span>
                        <span className={cl.text}>{footer.unp}</span>
                    </div>
                    <div className={cl.socialWrap}>
                        <a
                            href={'https://www.instagram.com/salsabrest/'}
                            aria-label='Перейти в инстаграм'
                        >
                            <Image
                                className={cl.instagram}
                                src={instagram}
                                alt='instagram'
                                />
                        </a>
                        <a
                            href={'https://t.me/salsabrest'}
                            aria-label='Перейти в телеграм'
                            className={cl.direct}
                            data-text={footer.telegramLabel}
                        >
                            <Image
                                className={cl.telegram}
                                src={'/icon/social/telegram.svg'}
                                alt='telegram'
                                width={30}
                                height={30}
                                />
                        </a>
                        <a
                            href={'https://www.tiktok.com/@salsabrest1'}
                            aria-label='Перейти в тикток'
                        >
                            <Image
                                className={cl.tiktok}
                                src={'/icon/social/tiktok.svg'}
                                alt='instagram'
                                width={30}
                                height={30}
                                />
                        </a>
                    </div>
                    <div className={cl.contactWrap}>
                        <a href={`tel:${footer.tel}`} className={cl.phoneWrap}>
                            <Image
                                className={cl.phone}
                                src={'/icon/social/email.svg'}
                                alt='instagram'
                                width={20}
                                height={20}
                                />
                            <span className={cl.text}>{footer.tel}</span>
                        </a>
                        <a
                            href={`mailto:${footer.mail}`}
                            className={cl.mailWrap}
                        >
                            <Image
                                className={cl.email}
                                src={'/icon/social/phone.svg'}
                                alt='instagram'
                                width={20}
                                height={20}
                                />
                            <span className={cl.text}>{footer.mail}</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
