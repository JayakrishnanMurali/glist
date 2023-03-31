import { NavThemeToggle } from "@/components/common/navbar";
import { UserAccountNav } from "@/components/common/navbar/nav-useraccount";
import { buttonVariants } from "@/components/ui/button";
import { routes } from "@/config/routes";
import { strStrip } from "@/lib/helpers";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import Link from "next/link";

export const NavProfile = () => {
  const session = useSession();

  const user = session.data?.user;

  const isSessionLoading = strStrip(session.status) === "loading";

  if (isSessionLoading) return <></>;

  return (
    <div className="flex w-full items-center justify-end gap-x-4">
      {!user ? (
        <>
          <NavThemeToggle />
          <Link
            href={routes.signIn}
            className={cn(buttonVariants({ size: "sm" }), "px-4")}
          >
            Sign in
          </Link>
        </>
      ) : (
        <>
          <NavThemeToggle />
          <UserAccountNav user={user} />
        </>
      )}
    </div>
  );
};
