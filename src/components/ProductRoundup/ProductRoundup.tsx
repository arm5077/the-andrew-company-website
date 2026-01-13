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
            Our products have opinions.
          </h2>
        </div>
      </Column>
      <Column side="right" cells="single">
        <div className={styles.products}>
          <ProductPack label="Available now">
            <ProductPromo
              logo={<ProductLogo product="reverb" />}
              description="Smart summaries of podcasts, instantly delivered to your inbox"
              buttonText="Free to use"
              buttonHref="https://reverb.email"
            />
          </ProductPack>
          <ProductPack label="Coming soon">
            <ProductPromo
              logo={<ProductLogo product="souschef" />}
              description="Turn an entire dinner party into a single, easy-to-follow recipe"
              buttonText="Private beta"
              buttonHref="https://souschef.cool"
            />
            <ProductPromo
              logo={<ProductLogo product="bandwagon" />}
              description="Level up your group chats with AI."
              buttonText="Private beta"
              buttonHref="https://bandwagon.chat"
            />
          </ProductPack>
        </div>
      </Column>
    </Section>
  );
}
