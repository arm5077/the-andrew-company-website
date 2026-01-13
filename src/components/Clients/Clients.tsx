import styles from "./Clients.module.scss";
import Image from "next/image";
import Section from "@/components/shared/Section/Section";
import Row from "@/components/shared/Row/Row";

type Client = {
  name: string;
  logo: string;
  url: string;
};

const CLIENTS: Client[] = [
  {
    name: "The Atlantic",
    logo: "the-atlantic.png",
    url: "https://www.theatlantic.com",
  },
  {
    name: "The New York Times",
    logo: "the-new-york-times.png",
    url: "https://www.nytimes.com",
  },
  {
    name: "Politico",
    logo: "politico.png",
    url: "https://www.politico.com",
  },
  {
    name: "CNN",
    logo: "cnn.png",
    url: "https://www.cnn.com",
  },
  {
    name: "The Washington Post",
    logo: "the-washington-post.png",
    url: "https://www.washingtonpost.com",
  },
  {
    name: "Apple",
    logo: "apple.png",
    url: "https://www.apple.com",
  },
  {
    name: "NPR",
    logo: "npr.png",
    url: "https://www.npr.org",
  },
  {
    name: "Adweek",
    logo: "adweek.png",
    url: "https://www.adweek.com",
  },
  {
    name: "CNBC",
    logo: "cnbc.png",
    url: "https://www.cnbc.com",
  },
  {
    name: "MS Now",
    logo: "ms-now.png",
    url: "https://www.microsoft.com",
  },
];

export default function Clients() {
  return (
    <section className={styles.clients}>
      <Section keepDividerOnMobile>
        <Row position="top" cells="single">
          <h2 className={styles.headline}>
            We&rsquo;ve worked with some of the most iconic brands.
          </h2>
        </Row>
        <Row position="bottom" cells="single">
          <div className={styles.logoGrid}>
            {CLIENTS.map((client) => (
              <a
                key={client.name}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.logoLink}
                aria-label={client.name}
              >
                <Image
                  src={`/logos/${client.logo}`}
                  alt={client.name}
                  width={200}
                  height={40}
                  className={styles.logo}
                />
              </a>
            ))}
          </div>
        </Row>
      </Section>
    </section>
  );
}
