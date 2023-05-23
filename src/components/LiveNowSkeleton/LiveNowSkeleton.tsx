import React, { CSSProperties } from "react";
import styles from "./LiveNow.module.css";
import DivSkeleton from "../DivSkeleton";

interface LiveNowSkeletonProps {
    width: string;
    height: string;
    bgColor: string;
    fgColor: string;
    bRadius: string;
    typeOfAnimation: string;
    speedInS: number;
    theme: string;
    lineH: string;
    lineW: string;
    imageH: string;
    imageW: string;
}

const LiveNowSkeleton = (props: LiveNowSkeletonProps) => {
    const { width, height, bgColor, fgColor, bRadius, typeOfAnimation, speedInS, theme, lineH, lineW, imageH, imageW } = props;

    const cardStyle: CSSProperties = {
        width,
        height,
        background: theme === "dark" ? "#232330" : "#F9FBE7",
        borderRadius: bRadius,
    };

    const renderLoadingSkeleton = (width: string, height: string): JSX.Element => {
        return (
            <DivSkeleton
                width={width}
                height={height}
                bgColor={bgColor}
                fgColor={fgColor}
                bRadius={bRadius}
                typeOfAnimation={typeOfAnimation}
                speedInS={speedInS}
            />
        );
    };

    return (
        <div className={styles.card} style={cardStyle}>
            <div className={styles.title}>
                <div className={styles.text}>
                    <div className={styles.line}>{renderLoadingSkeleton(lineW, lineH)}</div>
                    <div className={styles.line}>{renderLoadingSkeleton(lineW, lineH)}</div>
                </div>
                <div className={`${styles.text} ${styles.hide}`}>
                    <div className={styles.line}>{renderLoadingSkeleton(lineW, lineH)}</div>
                    <div className={styles.line}>{renderLoadingSkeleton(lineW, lineH)}</div>
                </div>
            </div>
            <div className={styles.image}>
                {renderLoadingSkeleton(imageW, imageH)}
            </div>
        </div>
    );
};

export default LiveNowSkeleton;