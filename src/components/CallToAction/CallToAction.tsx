import styles from "./CallToAction.module.scss";
import Section from "../shared/Section/Section";
import Column from "../shared/Column/Column";
import Button from "../shared/Button/Button";

function HireUsCTA() {
  return (
    <div className={styles.hireUsCta}>
      <div className={styles.hireUsContent}>
        <h3 className={styles.hireUsHeadline}>
          We’re excited to work with you!
        </h3>
        <p className={styles.hireUsBody}>
          Need to start starting? We can help you move from blank whiteboard to 1.0 in 12 weeks.
        </p>
      </div>
      <Button variant="reverse" className={styles.hireUsButton}>
        Let&apos;s grab time to talk
      </Button>
    </div>
  );
}

function PodcastPromo() {
  return (
    <div className={styles.podcastPromo}>
      <div className={styles.videoPreview}>
        <video 
          autoPlay 
          muted
          loop
          playsInline
          className={styles.video}
        >
          <source src="/video/product-fridays-preview.mp4" type="video/mp4" />
        </video>
      </div>
      <p className={styles.podcastText}>
        We co-host <strong>Product Fridays,</strong> a podcast about emerging tech, creativity, and the art of building.
      </p>
      <Button variant="big" className={styles.subscribeButton}>
        Subscribe now
      </Button>
    </div>
  );
}

function NewsletterSignUp() {
  return (
    <div className={styles.newsletterSignUp}>
      <p className={styles.newsletterText}>
        We also send updates on product launches, new projects and collaborations, and occasional sneak peeks.
      </p>
      <div className={styles.signUpForm}>
        <div className={styles.signUpInput}>
          <input 
            type="email" 
            placeholder="Surrender your email address, scoundrel"
            className={styles.emailInput}
          />
        </div>
        <button className={styles.submitButton} type="submit" aria-label="Submit">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="white"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function CallToAction() {
  return (
    <Section>
      <Column side="left" cells="single">
        <HireUsCTA />
      </Column>
      <Column side="right" cells="stacked">
        <PodcastPromo />
        <NewsletterSignUp />
      </Column>
    </Section>
  );
}
