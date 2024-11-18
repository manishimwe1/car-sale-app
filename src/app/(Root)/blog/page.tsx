import { MeteorsDisplay } from "@/components/MeteorsDemo";
import React from "react";

const BlogPage = () => {
  return (
    <section className="min-h-[500px] flex items-center justify-center">
      <MeteorsDisplay title="Sorry no blog found right now!" />
    </section>
  );
};

export default BlogPage;
