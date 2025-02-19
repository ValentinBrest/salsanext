'use client';
import { useCallback, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign } from '@/shared/ui/Text/Text';
import ph1 from '../../../../public/img/gallery/1.webp';
import ph2 from '../../../../public/img/gallery/2.webp';
import ph3 from '../../../../public/img/gallery/3.webp';
import ph4 from '../../../../public/img/gallery/4.webp';
import ph4mb from '../../../../public/img/gallery/4-mb.webp';
import ph5 from '../../../../public/img/gallery/5.webp';
import ph6 from '../../../../public/img/gallery/6.webp';
import ph7 from '../../../../public/img/gallery/7.webp';
import ph8 from '../../../../public/img/gallery/8.webp';
import ph9 from '../../../../public/img/gallery/9.webp';
import ph10 from '../../../../public/img/gallery/10.webp';
import ph11 from '../../../../public/img/gallery/11.webp';
import zoom from '../../../../public/icon/zoom.svg';
import toy from '../../../../public/img/newYear/green.png';
import { PhotosModal } from './PhotosModal';
import { photos } from '../../../../data/photos';
import cl from './Photos.module.scss';
import Image from 'next/image';
import { Template } from '@/shared/ui/Template/Template';

interface PhotosProps {
    className?: string;
    backgroundColor?: string;
    isNewYear?: boolean;
}

export const Photos = ({ backgroundColor, isNewYear = false }: PhotosProps) => {
    const isLaptopScreen = useMediaQuery({ query: '(max-width: 992px)' });
    const isTableScreen = useMediaQuery({ query: '(max-width: 768px)' });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [curImg, setCurImg] = useState(1);

    const photosAll = isTableScreen
        ? [ph1, ph2, ph3, ph4mb, ph5, ph6, ph7, ph8, ph9, ph10, ph11]
        : [ph1, ph2, ph3, ph4, ph5, ph6, ph7, ph8, ph9, ph10, ph11];

    const onCloseModal = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    const onOpenModal = useCallback((e: React.SyntheticEvent<EventTarget>) => {
        // @ts-ignore
        setCurImg(e.target.dataset.order);
        setIsModalOpen(true);
    }, []);

    useEffect(() => {
        isModalOpen
            ? document.body.classList.add('lock')
            : document.body.classList.remove('lock');
    }, [isModalOpen]);

    const O = <Image src={toy} alt='o' className={'toy medium'} />;
    const styles = isLaptopScreen ? { width: '100%' } : {};
    return (
        <>
            <Template
                backgroundColor={backgroundColor}
                className={cl.Photos}
                id={'photos'}
                classWrap={cl.wrap}
                amount={0.1}
            >
                {isNewYear ? (
                    <Text hardTitle={['Фот', O, 'галерея']} />
                ) : (
                    <Text title={photos.title} />
                )}

                <Text text={photos.subtitle} align={TextAlign.CENTER} />
                <div className={cl.gallery} onClick={(e) => onOpenModal(e)}>
                    {photosAll.map((item, index) => (
                        <div
                            key={index}
                            className={classNames(cl.zoomWrap, {}, [
                                cl[`cart${index + 1}`],
                            ])}
                        >
                            <Image
                                src={item}
                                className={cl.cart}
                                data-order={index + 1}
                                alt='фото'
                            />
                            <Image
                                className={cl.zoom}
                                src={zoom}
                                data-order={index + 1}
                                alt='зум'
                            />
                        </div>
                    ))}
                </div>
            </Template>

            <PhotosModal
                isOpen={isModalOpen}
                onClose={onCloseModal}
                index={curImg}
            />
        </>
    );
};
