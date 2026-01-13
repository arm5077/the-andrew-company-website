import React, { ReactNode } from 'react';
import styles from "./Column.module.scss";
import clsx from 'clsx';

export type ColumnProps = {
  side: "left" | "right";
  cells: "single" | "stacked";
  children: ReactNode;
};

export default function Column({ side, cells, children }: ColumnProps) {
  const childrenArray = React.Children.toArray(children);
  const childCount = childrenArray.length;

  if (cells === "single" && childCount !== 1) {
    throw new Error(`Column with cells='single' expects exactly 1 child, received ${childCount}`);
  }
  if (cells === "stacked" && childCount !== 2) {
    throw new Error(`Column with cells='stacked' expects exactly 2 children, received ${childCount}`);
  }

  const cellPaddingClass = side === "left" ? styles.leftColumnCell : styles.rightColumnCell;

  return (
    <div className={styles.column}>
      {cells === "single" ? (
        <div className={clsx(styles.cell, cellPaddingClass)}>
          {children}
        </div>
      ) : (
        <>
          <div className={clsx(
            styles.cell,
            cellPaddingClass,
            styles.stackedTop
          )}>
            {childrenArray[0]}
          </div>
          <div className={clsx(
            styles.cell,
            cellPaddingClass,
            styles.stackedBottom
          )}>
            {childrenArray[1]}
          </div>
        </>
      )}
    </div>
  );
}
