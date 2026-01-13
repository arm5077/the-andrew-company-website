import styles from "./AboutUs.module.scss";
import Section from "../shared/Section/Section";
import Column from "../shared/Column/Column";
import Image from "next/image";

export default function AboutUs() {
  return (
    <Section>
      <Column side="left" cells="single">
        <h2 className={styles.headline}>
          Sirs?
          <br />
          Excuse me.
          <br />
          Who are you?
        </h2>
      </Column>
      <Column side="right" cells="stacked">
        <div className={styles.bioWrapper}>
          <div className={styles.bio}>
            <div className={styles.portraitWrapper}>
              <Image
                src="/portraits/phelps.png"
                alt="Andrew Phelps"
                width={159}
                height={160}
                className={styles.portraitPhelps}
              />
            </div>
            <p className={styles.bioText}>
              <span className={styles.namePhelps}>Andrew Phelps</span> dropped out
              of high school to make websites. He got a college degree (thanks
              mom), caught the journalism bug, launched products at The New York
              Times, and led teams at Apple and The Atlantic.
            </p>
          </div>
        </div>
        <div className={styles.bioWrapper}>
          <div className={styles.bioDivider} />
          <div className={styles.bio}>
            <div className={styles.portraitWrapper}>
              <Image
                src="/portraits/mcgill.png"
                alt="Andrew McGill"
                width={159}
                height={160}
                className={styles.portraitMcGill}
              />
            </div>
            <p className={styles.bioText}>
              In fourth grade, <span className={styles.nameMcGill}>Andrew McGill</span>{" "}
              wrote a book called &ldquo;How To Program Computers.&rdquo; Frankly, it was sick
              as hell. He wrote, design and coded for The Atlantic and led the
              Interactive News team at Politico.
            </p>
          </div>
        </div>
      </Column>
    </Section>
  );
}
