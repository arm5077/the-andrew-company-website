import styles from "./Hero.module.scss";
import Section from "../shared/Section/Section";
import Row from "../shared/Row/Row";
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
      <Row position="bottom" cells="single">
        <div className={styles.bottomContent}>
          <h2 className={styles.tagline}>
            We help you with the hardest part: starting.
          </h2>
          <p className={styles.intro}>
            Placeholder intro text. Replace with a short paragraph that sets the tone and invites people to scroll or take the next step.
          </p>
        </div>
      </Row>
    </Section>
  );
}
