import styles from "./Footer.module.scss";
import Image from "next/image";

export type FooterProps = {
  // add props here
};

export default function Footer(props: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.faces}>
          <Image
            src="/portraits/faces.svg"
            alt="Phelps and McGill faces"
            width={102}
            height={69}
          />
        </div>
        <address className={styles.address}>
          <p>3430 Connecticut Ave. NW, #4809</p>
          <p>Washington, D.C. 20008</p>
          <a href="mailto:hello@andrew.company">hello@andrew.company</a>
        </address>
      </div>
    </footer>
  );
}
