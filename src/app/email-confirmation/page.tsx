import styles from "./page.module.scss";
import Image from "next/image";
import Button from "@/components/shared/Button/Button";

export default function EmailConfirmation() {
  return (
    <div className={styles.emailConfirmation}>
      <div className={styles.content}>
        <Image
          src="/portraits/faces.svg"
          alt="The Andrew Company"
          width={80}
          height={80}
          className={styles.logo}
        />
        <p className={styles.message}>
          Thanks for confirming! We&rsquo;ll email you occasionally about things we&rsquo;re doing.
        </p>
        <Button href="/" variant="big">
          Learn more about what we&rsquo;re building
        </Button>
      </div>
    </div>
  );
}
