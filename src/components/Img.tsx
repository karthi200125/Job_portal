'use client'
import { useEffect, useState } from 'react';
import blur from '../../public/blur.jpg';

interface ImageProps {
    src: string;
    cls?: string;
}

const Img = ({ src, cls }: ImageProps) => {
    const [imageLoading, setImageLoading] = useState<boolean>(false);

    useEffect(() => {
        const image = new window.Image();
        image.onload = () => {
            setImageLoading(true);
        };
        image.src = src;
    }, [src]);

    return (
        <>
            {!imageLoading && (
                <img src={blur.src} alt="" className={`${cls} object-cover`} loading='lazy' />
            )}
            {imageLoading && (
                <img src={src} alt="" className={`${cls} object-cover`} loading='lazy' />
            )}
        </>
    );
};

export default Img;
