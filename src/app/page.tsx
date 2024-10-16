import Image from "next/image";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <section>
      <Hero />
      <Services />
    </section>
  );
}
