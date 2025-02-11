import { Text } from '@/shared/ui/Text/Text';
import cl from './LookSalsa.module.scss';
import { lookSalsa } from '../../../../data/lookSalsa';
import snowMan from '../../../../public/img/newYear/snowman.webp';
import Image from 'next/image';
import { Template } from '@/shared/ui/Template/Template';

interface LookSalsaProps {
    backgroundColor?: string;
    isNewYear?: boolean;
}

export const LookSalsa = ({
    backgroundColor,
    isNewYear = false,
}: LookSalsaProps) => {
    return (
        <div style={{
            background: backgroundColor,
            paddingBottom: isNewYear ? '65px' : '0',
            position: 'relative'
        }}>
            {isNewYear && (
                <Image src={snowMan} className={cl.snowMan} alt='snowMan' />
            )}

            <Template
                backgroundColor={backgroundColor}
                className={cl.LookSalsa}
                id={'lookSalsa'}
                classWrap={cl.wrap}
                amount={0.2}
            >
                <Text title={lookSalsa.title} className={cl.title} />
                <div className={cl.videoWrap}>
                    <iframe
                        src='https://www.youtube.com/embed/u_9hLeLM7yI'
                        srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/u_9hLeLM7yI?autoplay=1><img src=https://img.youtube.com/vi/u_9hLeLM7yI/hqdefault.jpg alt='Fabrizio & Tania'><span>▶</span></a>"
                        loading='lazy'
                        frameBorder='0'
                        allow='autoplay; encrypted-media'
                        allowFullScreen
                        title='video'
                    />
                    <iframe
                        loading='lazy'
                        src='https://www.youtube.com/embed/epWiSNsGPYc'
                        srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/epWiSNsGPYc?autoplay=1><img src=https://img.youtube.com/vi/epWiSNsGPYc/hqdefault.jpg alt='Terry SalsAlianza & Amely'><span>▶</span></a>"
                        frameBorder='0'
                        allow='autoplay; encrypted-media'
                        allowFullScreen
                        title='video'
                    />
                    <iframe
                        loading='lazy'
                        src='https://www.youtube.com/embed/zjO2AyC8wQ0'
                        srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/zjO2AyC8wQ0?autoplay=1><img src=https://img.youtube.com/vi/zjO2AyC8wQ0/hqdefault.jpg alt='Rodrigo Cortazar & Alien Ramirez'><span>▶</span></a>"
                        frameBorder='0'
                        allow='autoplay; encrypted-media'
                        allowFullScreen
                        title='video'
                    />
                    <iframe
                        src='https://www.youtube.com/embed/b9w-RyB-oCM'
                        srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/b9w-RyB-oCM?autoplay=1><img src=https://img.youtube.com/vi/b9w-RyB-oCM/hqdefault.jpg alt='Fernando Sosa and Tropical Gem Shine'><span>▶</span></a>"
                        loading='lazy'
                        frameBorder='0'
                        allow='autoplay; encrypted-media'
                        allowFullScreen
                        title='video'
                    />
                    <iframe
                        loading='lazy'
                        src='https://www.youtube.com/embed/Ic1BuTlEwFc'
                        srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/Ic1BuTlEwFc?autoplay=1><img src=https://img.youtube.com/vi/Ic1BuTlEwFc/hqdefault.jpg alt='Adolfo Indacochea Mambo'><span>▶</span></a>"
                        frameBorder='0'
                        allow='autoplay; encrypted-media'
                        allowFullScreen
                        title='video'
                    />
                    <iframe
                        loading='lazy'
                        src='https://www.youtube.com/embed/Wud8Wq4huIs'
                        srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/Wud8Wq4huIs?autoplay=1><img src=https://img.youtube.com/vi/Wud8Wq4huIs/hqdefault.jpg alt='Adolfo Indacochea Mambo'><span>▶</span></a>"
                        frameBorder='0'
                        allow='autoplay; encrypted-media'
                        allowFullScreen
                        title='video'
                    />
                </div>
            </Template>
        </div>
    );
};
