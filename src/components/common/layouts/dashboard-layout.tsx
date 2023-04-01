import { DashboardSideNav } from "../navbar/nav-dashboard-side";
import { DashboardTopNav } from "../navbar/nav-dashboard-top";
import { User } from "@prisma/client";
import React from "react";

interface iLayout {
  children: React.ReactNode;
  user: User;
}

export const DashboardLayout: React.FC<iLayout> = ({ children, user }) => {
  return (
    <div className="container">
      <aside className="fixed w-[300px] border-r border-theme-200 dark:border-theme-800 h-screen p-10">
        <DashboardSideNav user={user} />
      </aside>
      <main className=" p-10 ml-[300px]">
        <DashboardTopNav />
        <div className="mt-14">{children}</div>
      </main>
    </div>
  );
};
