import React, { CSSProperties } from "react";
import styles from "./DivSkeleton.module.css";


interface DivSkeletonProps {
    width: string;
    height: string;
    bgColor: string;
    fgColor: string;
    speedInS: number;
    typeOfAnimation: string;
    bRadius: string;
    style?: CSSProperties;
  }
  
  const DivSkeleton = (props: DivSkeletonProps) => {
    const { width, height, bgColor, fgColor, bRadius, typeOfAnimation, speedInS, style} = props;

    const parentStyle: CSSProperties = {
        width,
        height,
        background: bgColor,
        borderRadius: bRadius,
    };

    const getAnimationStyle = (): CSSProperties | undefined => {
        if (typeOfAnimation === "wave") {
            if (bRadius === "50%") {
                return {
                    animation: `${styles.waveAnimationCircle} ${speedInS}s infinite`,
                    // width: `${parseInt(width) / 4}px`,
                    width: width,
                    background: fgColor,
                    backgroundImage: `linear-gradient(90deg, transparent, ${fgColor}, transparent)`,
                };
            }
            return {
                animation: `${styles.waveAnimation} ${speedInS}s infinite`,
                // width: `${parseInt(width) / 4}px`,
                width: width,
                backgroundImage: `linear-gradient(90deg, transparent, ${fgColor}, transparent)`,
            };
        } else if (typeOfAnimation === "pulse") {
            return {
                animation: `pulseAnimation ${speedInS}s infinite`,
                width: "100%",
                background: fgColor,
                borderRadius: bRadius,
            };
        }
    };

    const childStyle: CSSProperties | undefined = getAnimationStyle();

    return (
        <div className={styles.skeletonParent} style={parentStyle}>
            <div className={styles.skeletonChild} style={childStyle}></div>
        </div>
    );
};

export default DivSkeleton;
