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
            The&nbsp;Andrews.
          </h1>
          <div className={styles.faces}>
            <Image
              src="/portraits/faces.svg"
              alt="Phelps and McGill faces"
              width={190}
              height={177}
            />
          </div>
        </div>
      </Row>
      <Row position="bottom" cells="single">
        <div className={styles.bottomCell}>
          <h3 className={styles.tagline}>
            We turn big ideas into
            {' '}
            <br className={styles.taglineBreak} />
            the <span className={styles.taglineAccent}>next big thing.</span>
          </h3>
          <div className={styles.scrollHint} aria-hidden="true">
            <span>Learn more</span>
            <Image
              src="/chevron.svg"
              alt=""
              width={12}
              height={9}
              className={styles.chevron}
            />
          </div>
        </div>
      </Row>
    </Section>
  );
}
