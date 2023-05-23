import React, { CSSProperties } from "react";
import styles from "./LiveBuySkeleton.module.css";
import DivLoadingSkeleton from "../DivSkeleton";

interface LiveBuySkeletonProps {
  width: string;
  height: string;
  fgColor: string;
  bgColor: string;
  bRadius: string;
  typeOfAnimation: string;
  speedInS: number;
  theme: string;
  titleW: string;
  titleH: string;
  lineW: string;
  lineH: string;
  bnbAdressW: string;
  bnbAdressH: string;
  maxBtnW: string;
  maxBtnH: string;
  submitW: string;
  submitH: string;
}

const LiveBuySkeleton = (props: LiveBuySkeletonProps) => {
  const {
    width,
    height,
    fgColor,
    bgColor,
    bRadius,
    typeOfAnimation,
    speedInS,
    theme,
    titleW,
    titleH,
    lineW,
    lineH,
    bnbAdressW,
    bnbAdressH,
    maxBtnW,
    maxBtnH,
    submitW,
    submitH,
  } = props;

  const cardStyle: CSSProperties = {
    width,
    height,
    background: theme === "dark" ? "#232330" : "#F9FBE7",
    borderRadius: bRadius,
  };

  const renderLoadingSkeleton = (width: string, height: string): JSX.Element => {
    return (
      <DivLoadingSkeleton
        width={width}
        height={height}
        bRadius={bRadius}
        fgColor={fgColor}
        bgColor={bgColor}
        typeOfAnimation={typeOfAnimation}
        speedInS={speedInS}
      />
    );
  };

  return (
    <div className={styles.card} style={cardStyle}>
      <div className={styles.title}>
        {renderLoadingSkeleton(titleW, titleH)}
      </div>
      <div className={styles.bnb}>
        <div className={styles.number}>
          <div className={styles.line}>
            {renderLoadingSkeleton(lineW, lineH)}
          </div>
          <div className={styles.line}>
            {renderLoadingSkeleton(lineW, lineH)}
          </div>
        </div>
        <div className={styles.address}>
          {renderLoadingSkeleton(bnbAdressW, bnbAdressH)}
        </div>
      </div>
      <div className={styles.amountToBuy}>
        <div className={styles.number}>
          <div className={styles.line}>
            {renderLoadingSkeleton(lineW, lineH)}
          </div>
          <div className={styles.line}>
            {renderLoadingSkeleton(lineW, lineH)}
          </div>
        </div>
        <div className={styles.address}>
          {renderLoadingSkeleton(maxBtnW, maxBtnH)}
        </div>
      </div>
      <div className={styles.data}>
        <div className={styles.price}>
          <div className={styles.line}>
            {renderLoadingSkeleton(lineW, lineH)}
          </div>
          <div className={styles.line}>
            {renderLoadingSkeleton(lineW, lineH)}
          </div>
        </div>
        <div className={styles.amount}>
          <div className={styles.line}>
            {renderLoadingSkeleton(lineW, lineH)}
          </div>
          <div className={styles.line}>
            {renderLoadingSkeleton(lineW, lineH)}
          </div>
        </div>
      </div>
      <div className={styles.submit}>
        {renderLoadingSkeleton(submitW, submitH)}
      </div>
    </div>
  );
};

export default LiveBuySkeleton;
