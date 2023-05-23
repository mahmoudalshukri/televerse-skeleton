import React, { CSSProperties } from "react";
import styles from "./PurchasingTableSkeleton.module.css";
import DivSkeleton from "../DivSkeleton";
import TableSkeleton from "../TableSkeleton";

interface PurchasingTableSkeletonProps {
    width: string;
    height: string;
    bgColor: string;
    fgColor: string;
    typeOfAnimation: string;
    speedInS: number;
    bRadius: string;
    theme: string;
    lineH: string;
    lineW: string;
    rowsNumber: number;
    rowH: string;
    bRadiusBottom?: boolean;
}

const PurchasingTableSkeleton = (props: PurchasingTableSkeletonProps) => {
    const {
        width,
        height,
        bgColor,
        fgColor,
        typeOfAnimation,
        speedInS,
        bRadius,
        theme,
        lineH,
        lineW,
        rowsNumber,
        rowH,
        bRadiusBottom,
    } = props;

    const cardStyle: CSSProperties = {
        width,
        height,
        background: theme === "dark" ? "#232330" : "#F9FBE7",
        borderRadius: bRadius,
    };

    const renderDivLoadingSkeleton = () => {
        return (
            <DivSkeleton
                width={lineW}
                height={lineH}
                fgColor={fgColor}
                bgColor={bgColor}
                typeOfAnimation={typeOfAnimation}
                speedInS={speedInS}
                bRadius={bRadius}
            />
        );
    };

    return (
        <div className={styles.card} style={cardStyle}>
            <div className={styles.header}>
                {renderDivLoadingSkeleton()}
                {renderDivLoadingSkeleton()}
                {renderDivLoadingSkeleton()}
            </div>
            <div className={styles.break}></div>
            <div className={styles.data}>
                <TableSkeleton
                    width={width}
                    height={rowH}
                    rowsNumber={rowsNumber}
                    bgColor={bgColor}
                    fgColor={fgColor}
                    speedInS={speedInS}
                    typeOfAnimation={typeOfAnimation}
                    bRadius={bRadius}
                    bRadiusBottom={bRadiusBottom}
                />
            </div>
        </div>
    );
};

export default PurchasingTableSkeleton;
