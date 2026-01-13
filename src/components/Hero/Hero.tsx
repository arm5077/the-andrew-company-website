import styles from "./Hero.module.scss";
import Section from "../shared/Section/Section";
import Row from "../shared/Row/Row";
import Button from "../shared/Button/Button";

export default function Hero() {
  return (
    <Section equalRows fullHeight keepDividerOnMobile>
      <Row position="top" cells="single">
        <h1 className={styles.heroTitle}>
          Hi, we’re
          <br />
          The Andrews.
        </h1>
      </Row>
      <Row position="bottom" cells="split">
        <div className={styles.cellContent}>
          <h3 className={styles.subTitle}>
            We create amazing products with strong opinions, like{" "}
            <span className={styles.greenGradient}>
              Re:verb,
              an instant email digest
              of your podcasts.
            </span>
          </h3>
          <Button variant="big">See what we’re cooking</Button>
        </div>
        <div className={styles.cellContent}>
          <h3 className={styles.subTitle}>
            We also help big companies like
            The Atlantic and startups like Till Financial build ambitious things.
          </h3>
          <Button variant="big">Let’s make something</Button>
        </div>
      </Row>
    </Section>
  );
}
