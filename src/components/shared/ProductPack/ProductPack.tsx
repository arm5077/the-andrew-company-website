import styles from "./ProductPack.module.scss";

export type ProductPackProps = {
  label: string;
  children: React.ReactNode;
};

export default function ProductPack({ label, children }: ProductPackProps) {
  return (
    <div className={styles.productPack}>
      <h4 className={styles.label}>{label}</h4>
      <div className={styles.products}>
        {children}
      </div>
    </div>
  );
}
