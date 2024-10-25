import Image from "next/image";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "@/components/Services";
import ShowCase from "@/components/ShowCase";
import WhyChooseUs from "@/components/WhyChooseUs";

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
