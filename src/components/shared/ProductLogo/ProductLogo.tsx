import styles from "./ProductLogo.module.scss";
import Image from "next/image";

export type ProductLogoProps = {
  product: "reverb" | "souschef" | "bandwagon";
};

const productImages: Record<ProductLogoProps["product"], string> = {
  reverb: "/products/reverb.png",
  souschef: "/products/sous-chef.png",
  bandwagon: "/products/bandwagon.png",
};

export default function ProductLogo({ product }: ProductLogoProps) {
  return (
    <div className={styles.productLogo}>
      <Image
        src={productImages[product]}
        alt={product}
        fill
        className={styles.image}
      />
    </div>
  );
}
