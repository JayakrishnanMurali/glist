import { SiteFooter } from "@/components/common/footer";
import { NavContainer, NavLogo, NavProfile } from "@/components/common/navbar";
import React from "react";

interface iLayout {
  children: React.ReactNode;
}

export const MainLayout: React.FC<iLayout> = ({ children }) => {
  return (
    <>
      <header className="container sticky top-0 z-40">
        <NavContainer>
          <NavLogo />
          <NavProfile />
        </NavContainer>
      </header>

      <main className="container min-h-[80vh]">{children}</main>

      <SiteFooter />
    </>
  );
};
