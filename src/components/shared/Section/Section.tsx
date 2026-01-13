import React, { ReactNode, isValidElement } from 'react';
import styles from "./Section.module.scss";
import clsx from 'clsx';
import Row from '../Row/Row';
import Column from '../Column/Column';

export type SectionProps = {
  equalRows?: boolean;
  fullHeight?: boolean;
  id?: string;
  keepDividerOnMobile?: boolean;
  children: ReactNode;
};

export default function Section({ equalRows = false, fullHeight = false, id, keepDividerOnMobile = false, children }: SectionProps) {
  const childrenArray = React.Children.toArray(children);
  
  if (childrenArray.length !== 2) {
    throw new Error("Section must have exactly 2 children (either 2 Rows or 2 Columns)");
  }

  const child1 = childrenArray[0];
  const child2 = childrenArray[1];

  if (!isValidElement(child1) || !isValidElement(child2)) {
     throw new Error("Section children must be valid React elements");
  }

  // Check types
  const isRow1 = child1.type === Row;
  const isRow2 = child2.type === Row;
  const isCol1 = child1.type === Column;
  const isCol2 = child2.type === Column;

  if (!((isRow1 && isRow2) || (isCol1 && isCol2))) {
     throw new Error("Section children must be all Rows or all Columns, not mixed");
  }

  const isRowBased = isRow1;

  return (
    <div 
      id={id}
      className={clsx(
        styles.section,
        isRowBased ? styles.rowBased : styles.columnBased,
        equalRows && isRowBased && styles.equalRows,
        fullHeight && styles.fullHeight
      )}
    >
      <div className={clsx(
        styles.childWrapper,
        isRowBased ? [styles.rowChild, styles.rowDivider] : [styles.columnChild, styles.columnDivider],
        keepDividerOnMobile && styles.keepDivider
      )}>
        {child1}
      </div>
      <div className={clsx(
        styles.childWrapper,
        isRowBased ? styles.rowChild : styles.columnChild
      )}>
        {child2}
      </div>
    </div>
  );
}
