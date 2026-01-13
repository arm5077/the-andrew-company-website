import styles from "./ProductLogo.module.scss";
import clsx from "clsx";

export type ProductLogoProps = {
  product: "reverb" | "souschef" | "bandwagon";
};

export default function ProductLogo({ product }: ProductLogoProps) {
  return (
    <div className={clsx(
      styles.productLogo,
      styles[product]
    )}>
      {product === "reverb" && (
        <div className={styles.reverbContent}>
          <span className={styles.reverbText}>Re:verb</span>
        </div>
      )}
      {product === "souschef" && (
        <div className={styles.souschefContent}>
          <div className={styles.souschefIcon}>🍲</div>
          <span className={styles.souschefText}>Sous Chef</span>
        </div>
      )}
      {product === "bandwagon" && (
        <div className={styles.bandwagonContent}>
          <span className={styles.bandwagonText}>B</span>
        </div>
      )}
    </div>
  );
}
