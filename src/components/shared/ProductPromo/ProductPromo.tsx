import styles from "./ProductPromo.module.scss";
import clsx from "clsx";

export type ProductPromoProps = {
  logo: React.ReactNode;
  description: string;
  buttonText: string;
  buttonHref?: string;
  className?: string;
};

export default function ProductPromo({ 
  logo, 
  description, 
  buttonText, 
  buttonHref,
  className 
}: ProductPromoProps) {
  const ButtonComponent = buttonHref ? 'a' : 'span';

  return (
    <div className={clsx(styles.productPromoContainer, className)}>
      <div className={styles.productPromo}>
        <div className={styles.logoWrapper}>
          {logo}
        </div>
        <div className={styles.content}>
          <p className={styles.description}>{description}</p>
          <ButtonComponent 
            className={styles.button}
            {...(buttonHref ? { href: buttonHref } : {})}
          >
            {buttonText}
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
}
