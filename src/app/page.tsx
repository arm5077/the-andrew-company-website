import Clients from "@/components/Clients/Clients";
import Hero from "@/components/Hero/Hero";
import ProductRoundup from "@/components/ProductRoundup/ProductRoundup";
import SectionDivider from "@/components/shared/SectionDivider/SectionDivider";

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionDivider />
      <ProductRoundup />
      <SectionDivider />
      <Clients />
    </main>
  );
}
