import { DashboardForm } from "@/components/DashbaordForms";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="flex flex-1 h-full items-center justify-center w-full border-l-2  border-slate-200/60 shadow-md shadow-slate-200/60">
      <DashboardForm />
    </div>
  );
};

export default DashboardPage;
