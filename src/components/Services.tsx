import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Services = () => {
  return (
    <section className="p-10 ">
      <div className="flex items-center justify-around">
        <h3 className="text-6xl  font-bold">Our Fleet</h3>
        <p className="text-[14px] text-pretty font-medium text-slate-800">
          We offer an extensive fleet of vehicles including <br />
          sedans, limousines and crossovers
        </p>
      </div>
      <div className="flex items-center border justify-center">
        <Tabs defaultValue="account" className="w-full">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Services;
