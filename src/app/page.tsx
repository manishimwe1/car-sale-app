import Services from "@/components/Services";
import ShowCase from "@/components/ShowCase";
import WhyChooseUs from "@/components/WhyChooseUs";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <section className="space-y-10">
      <Hero />
      <div className="container mx-auto space-y-10">
        <ShowCase />
        <Services />
      </div>
      <WhyChooseUs />
    </section>
  );
}
