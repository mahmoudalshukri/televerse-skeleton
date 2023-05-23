import React, { CSSProperties } from "react";
import DivSkeleton from "../DivSkeleton/DivSkeleton";

interface ImageSkeletonProps {
    width: string;
    height: string;
    bgColor: string;
    fgColor: string;
    speedInS: number;
    typeOfAnimation: string;
    bRadius: string;
    style?: CSSProperties;
}

const ImageSkeleton = (props: ImageSkeletonProps) => {
    const { width, height, bgColor, fgColor, bRadius, typeOfAnimation, speedInS, style } = props;

    return (
        <DivSkeleton
            width={width}
            height={height}
            bgColor={bgColor}
            fgColor={fgColor}
            speedInS={speedInS}
            typeOfAnimation={typeOfAnimation}
            bRadius={bRadius}
        />
    );
};

export default ImageSkeleton;
