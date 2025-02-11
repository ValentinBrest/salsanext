"use client";
import { memo} from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
import { useMediaQuery } from 'react-responsive';


interface SliderProps {
    images: string[] | Record<"url", string>[],
    mobileImages?: string[] | Record<"url", string>[],
}

export const Slider = memo((props: SliderProps) => {
    const isMobileScreen = useMediaQuery({ query: '(max-width: 576px)' });
    // const isTabletScreen = useMediaQuery({ query: '(max-width: 768px)' });
    // const isLaptopScreen = useMediaQuery({ query: '(max-width: 992px)' });
    const {
        images,
        mobileImages,
    } = props;

    return (
        <SimpleImageSlider
            width={'100%'}
            height={'100%'}
            images={mobileImages && isMobileScreen ? mobileImages : images && !isMobileScreen ? images : ['']}
            showBullets={false}
            showNavs={false}
            autoPlay={true}
            autoPlayDelay={5}
        />
    );
});
