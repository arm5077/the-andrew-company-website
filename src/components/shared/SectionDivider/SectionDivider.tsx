import styles from "./SectionDivider.module.scss";

export default function SectionDivider() {
  return (
    <div className={styles.sectionDivider}>
      <div className={styles.line} />
    </div>
  );
}
