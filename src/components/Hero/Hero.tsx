import styles from "./Hero.module.scss";
import Section from "../shared/Section/Section";
import Row from "../shared/Row/Row";
import Button from "../shared/Button/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <Section equalRows fullHeight keepDividerOnMobile>
      <Row position="top" cells="single">
        <div className={styles.topRow}>
          <h1 className={styles.heroTitle}>
            Hi, we&rsquo;re
            <br />
            The Andrews.
          </h1>
          <div className={styles.faces}>
            <Image
              src="/portraits/faces.svg"
              alt="Phelps and McGill faces"
              width={272}
              height={253}
            />
          </div>
        </div>
      </Row>
      <Row position="bottom" cells="split">
        <div className={styles.cellContent}>
          <h3 className={styles.subTitle}>
            We create amazing products with strong opinions, like{" "}
            <a href="https://reverb.email" className={styles.greenGradient} target="_blank" rel="noopener noreferrer">
              Re:verb,
              an instant email digest
              of your podcasts.
            </a>
          </h3>
          <Button variant="big" href="#products">See what we&apos;re cooking</Button>
        </div>
        <div className={styles.cellContent}>
          <h3 className={styles.subTitle}>
            We also help companies like{" "}
            <a href="https://cnn.com" target="_blank" rel="noopener noreferrer">CNN</a>
            {" "}and{" "}
            <a href="https://washingtonpost.com" target="_blank" rel="noopener noreferrer">The Washington Post</a>
            {" "}build ambitious things.
          </h3>
          <Button variant="big" href="#cta">Let&apos;s make something</Button>
        </div>
      </Row>
    </Section>
  );
}
