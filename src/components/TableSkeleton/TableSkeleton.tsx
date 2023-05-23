import React, { CSSProperties } from "react";
import styles from "./TableSkeleton.module.css";

interface TableSkeletonProps {
    width: string;
    height: string;
    rowsNumber: number;
    bgColor?: string;
    fgColor?: string;
    speedInS: number;
    typeOfAnimation: string;
    bRadiusTop?: boolean;
    bRadiusBottom?: boolean;
    bRadius: string;
}

const TableSkeleton = (props: TableSkeletonProps) => {
    const {
        width,
        height,
        rowsNumber,
        bgColor = "#777",
        fgColor = "#999",
        speedInS,
        typeOfAnimation,
        bRadiusTop,
        bRadiusBottom,
        bRadius,
    } = props;

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

    const renderTable = (): JSX.Element[] => {
        const rows: JSX.Element[] = [];

        for (let i = 0; i < rowsNumber; i++) {
            const isEvenRow = i % 2 === 0;
            const rowBgColor = isEvenRow ? bgColor : fgColor;
            const rowFgColor = isEvenRow ? fgColor : bgColor;
            const isFirstRow = i === 0;
            const isLastRow = i === rowsNumber - 1;

            const rowStyle: CSSProperties = {};

            if (isFirstRow && bRadiusTop) {
                rowStyle.borderTopLeftRadius = bRadius;
                rowStyle.borderTopRightRadius = bRadius;
            }

            if (isLastRow && bRadiusBottom) {
                rowStyle.borderBottomLeftRadius = bRadius;
                rowStyle.borderBottomRightRadius = bRadius;
            }

            rows.push(
                <div
                    key={i}
                    className={styles.row}
                    style={{ width, height, background: rowBgColor, color: rowFgColor, ...rowStyle }}
                >
                    <div className={styles.skeletonChild} style={childStyle} />
                </div>
            );
        }

        return rows;
    };

    const cardStyle: CSSProperties = {
        width,
    };

    return <div className={styles.table} style={cardStyle}>{renderTable()}</div>;
};

export default TableSkeleton;
