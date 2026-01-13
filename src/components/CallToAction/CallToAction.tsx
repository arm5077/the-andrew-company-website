"use client";

import { useState, FormEvent } from "react";
import styles from "./CallToAction.module.scss";
import Section from "../shared/Section/Section";
import Column from "../shared/Column/Column";
import Button from "../shared/Button/Button";

function HireUsCTA() {
  return (
    <div className={styles.hireUsCta}>
      <div className={styles.hireUsContent}>
        <h3 className={styles.hireUsHeadline}>
          We&rsquo;re excited to work with you!
        </h3>
        <p className={styles.hireUsBody}>
          Need to start starting? We can help you move from blank whiteboard to 1.0 in 12 weeks.
        </p>
      </div>
      <Button 
        variant="reverse" 
        className={styles.hireUsButton}
        href="https://calendly.com/andrew-mcgill-meeting/introductory-call"
      >
        Let&rsquo;s grab time to talk
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
      <Button variant="big" className={styles.subscribeButton} href="https://productfridays.com">
        Subscribe now
      </Button>
    </div>
  );
}

const MAILCHIMP_URL = "https://company.us6.list-manage.com/subscribe/post-json?u=dcb70aa77ebb2a6b322891213&id=cb9e733e44&f_id=00a22fe3f0";

function NewsletterSignUp() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    setStatus("loading");
    
    // Create unique callback name
    const callbackName = `mailchimpCallback_${Date.now()}`;
    
    // Create promise that resolves when JSONP callback is called
    const jsonpPromise = new Promise<{ result: string; msg: string }>((resolve, reject) => {
      const timeout = setTimeout(() => {
        cleanup();
        reject(new Error("Request timed out"));
      }, 10000);
      
      // Define callback function on window
      (window as unknown as Record<string, unknown>)[callbackName] = (data: { result: string; msg: string }) => {
        cleanup();
        resolve(data);
      };
      
      function cleanup() {
        clearTimeout(timeout);
        delete (window as unknown as Record<string, unknown>)[callbackName];
        const script = document.getElementById(callbackName);
        if (script) script.remove();
      }
      
      // Create and inject script tag
      const script = document.createElement("script");
      script.id = callbackName;
      script.src = `${MAILCHIMP_URL}&EMAIL=${encodeURIComponent(email)}&c=${callbackName}`;
      document.body.appendChild(script);
      
      script.onerror = () => {
        cleanup();
        reject(new Error("Failed to load"));
      };
    });
    
    try {
      const data = await jsonpPromise;
      
      if (data.result === "success") {
        setStatus("success");
        setMessage("You're in! 🎉");
        setEmail("");
      } else {
        setStatus("error");
        // Clean up Mailchimp's HTML error messages
        const cleanMsg = data.msg?.replace(/<[^>]*>/g, "") || "Something went wrong";
        setMessage(cleanMsg);
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className={styles.newsletterSignUp}>
      {status === "success" ? (
        <p className={styles.newsletterText}>{message}</p>
      ) : (
        <>
          <p className={styles.newsletterText}>
            {status === "error" ? message : "We also send updates on product launches, new projects and collaborations, and occasional sneak peeks."}
          </p>
          <form onSubmit={handleSubmit} className={styles.signUpForm}>
            <div className={styles.signUpInput}>
              <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Surrender your email address, scoundrel"
                className={styles.emailInput}
                required
                disabled={status === "loading"}
              />
            </div>
            <button 
              className={styles.submitButton} 
              type="submit" 
              aria-label="Subscribe"
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.spinner}>
                  <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" strokeDasharray="31.4 31.4" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="white"/>
                </svg>
              )}
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default function CallToAction() {
  return (
    <Section id="cta">
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
