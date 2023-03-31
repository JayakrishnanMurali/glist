import { buttonVariants } from "@/components/ui/button";
import { _dashboardSection } from "@/config/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export const NavSections = () => {
  return (
    <div className="flex flex-col gap-y-4">
      {_dashboardSection.map((data) => (
        <Link
          key={data.id}
          href={data.id}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "flex justify-start relative gap-x-4 items-center"
          )}
        >
          <div className="flex justify-start gap-x-4 items-center">
            <data.icon /> {data.name}
          </div>
          {data.isNew && (
            <div className="bg-accent-notify h-2 w-2 right-2  animate-pulse absolute rounded-full"></div>
          )}
        </Link>
      ))}
    </div>
  );
};
