import Banner from "@/components/Banner";
import Services from "@/components/Services";
import ShowCase from "@/components/ShowCase";
import WhyChooseUs from "@/components/WhyChooseUs";
import ShowCaseOverMoney from "@/components/ShowCaseOverMoney";
import CustomersReviews from "@/components/CustomersReviews";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <section className="h-full w-full space-y-10">
      <Hero />
      <div className="container mx-auto space-y-10" id="new">
        <ShowCase />
        <ShowCaseOverMoney />
        <Services />
      </div>
      <WhyChooseUs />
      <CustomersReviews />
      <div>
        <Banner />
        <Footer />
      </div>
    </section>
  );
}
