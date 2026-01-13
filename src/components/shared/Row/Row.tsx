import React, { ReactNode } from 'react';
import styles from "./Row.module.scss";
import clsx from 'clsx';

export type RowProps = {
  position: "top" | "bottom";
  cells: "single" | "split";
  children: ReactNode;
};

export default function Row({ position, cells, children }: RowProps) {
  // position prop is technically used by parent to know order, 
  // but might not be needed for internal rendering unless for debugging or specific styling overrides not mentioned.
  // We'll keep it as required by spec.

  const childrenArray = React.Children.toArray(children);
  const childCount = childrenArray.length;

  // Validation
  if (cells === "single" && childCount !== 1) {
    throw new Error(`Row with cells='single' expects exactly 1 child, received ${childCount}`);
  }
  if (cells === "split" && childCount !== 2) {
    throw new Error(`Row with cells='split' expects exactly 2 children, received ${childCount}`);
  }

  return (
    <div className={styles.row}>
      {cells === "single" ? (
         <div className={clsx(styles.cell, styles.single)}>
           {children}
         </div>
      ) : (
        <>
          <div className={clsx(
            styles.cell,
            styles.splitLeft
          )}>
            {childrenArray[0]}
          </div>
          <div className={clsx(
            styles.cell,
            styles.splitRight
          )}>
            {childrenArray[1]}
          </div>
        </>
      )}
    </div>
  );
}
