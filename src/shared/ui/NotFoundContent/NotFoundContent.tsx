import cl from './NotFoundContent.module.scss';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import Link from 'next/link';
import Image from 'next/image';

export const NotFoundContent = () => {
    return (
        <div className={cl.NotFoundContent}>
            <Image src={'/img/404.webp'} width={300} height={350} alt='404' />
            <div className={cl.info}>
                <h2 style={{ marginBottom: '10px' }}>Страница не найдена</h2>
                <Button theme={ButtonTheme.BACKGROUND} className={cl.btn}>
                    <Link className={cl.link} href='/'>
                        На главную
                    </Link>
                </Button>
            </div>
        </div>
    );
};
