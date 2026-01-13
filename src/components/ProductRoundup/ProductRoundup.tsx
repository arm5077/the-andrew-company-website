import styles from "./ProductRoundup.module.scss";
import Section from "@/components/shared/Section/Section";
import Column from "@/components/shared/Column/Column";
import ProductPack from "@/components/shared/ProductPack/ProductPack";
import ProductPromo from "@/components/shared/ProductPromo/ProductPromo";
import ProductLogo from "@/components/shared/ProductLogo/ProductLogo";

export default function ProductRoundup() {
  return (
    <Section keepDividerOnMobile>
      <Column side="left" cells="single">
        <div className={styles.intro}>
          <h2 className={styles.headline}>
            We have opinions. So do our products.
          </h2>
          <p className={styles.subheadline}>
            TKTKTK gotta write some stuff there
          </p>
        </div>
      </Column>
      <Column side="right" cells="single">
        <div className={styles.products}>
          <ProductPack label="Available now">
            <ProductPromo
              logo={<ProductLogo product="reverb" />}
              description="Smart summaries of podcasts, instantly delivered to your inbox"
              buttonText="Free to use"
              buttonHref="#"
            />
          </ProductPack>
          <ProductPack label="Coming soon">
            <ProductPromo
              logo={<ProductLogo product="souschef" />}
              description="TKTK"
              buttonText="Free to use"
            />
            <ProductPromo
              logo={<ProductLogo product="bandwagon" />}
              description="TKTK"
              buttonText="Free to use"
            />
          </ProductPack>
        </div>
      </Column>
    </Section>
  );
}
