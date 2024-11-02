import Banner from "@/components/Banner";
import Services from "@/components/Services";
import ShowCase from "@/components/ShowCase";
import WhyChooseUs from "@/components/WhyChooseUs";
import ShowCaseOverMoney from "@/components/ShowCaseOverMoney";
import CustomersReviews from "@/components/CustomersReviews";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <section className="space-y-10 overflow-x-hidden">
      <Hero />
      <div className="container mx-auto space-y-10 lg:px-10" id="new">
        <ShowCase />
        <ShowCaseOverMoney />
        <Services />
      </div>
      <WhyChooseUs />
      <CustomersReviews />
      <Banner />
    </section>
  );
}
