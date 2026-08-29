import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import ValueProps from "@/components/ValueProps";
import Technology from "@/components/Technology";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Requirements from "@/components/Requirements";
import Commitment from "@/components/Commitment";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <ValueProps />
        <Technology />
        <Pricing />
        <Testimonials />
        <Requirements />
        <Commitment />
      </main>
      <Footer />
    </>
  );
}
