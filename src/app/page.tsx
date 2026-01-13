import AboutUs from "@/components/AboutUs/AboutUs";
import CallToAction from "@/components/CallToAction/CallToAction";
import Clients from "@/components/Clients/Clients";
import Footer from "@/components/Footer/Footer";
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
      <SectionDivider />
      <AboutUs />
      <SectionDivider />
      <CallToAction />
      <Footer />
    </main>
  );
}
