import Services from "@/components/Services";
import ShowCase from "@/components/ShowCase";
import WhyChooseUs from "@/components/WhyChooseUs";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <section className="space-y-10">
      <Hero />
      <Services />
      <ShowCase />
      <div className="">
        <WhyChooseUs />
      </div>
    </section>
  );
}
