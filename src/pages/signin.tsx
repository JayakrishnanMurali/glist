import { UserAuthForm } from "@/components/common/auth/user-auth-form";
import { Icons } from "@/components/common/icons";
import Meta from "@/components/meta";
import { buttonVariants } from "@/components/ui/button";
import { routes } from "@/config/routes";
import { cn } from "@/lib/utils";
import { getCurrentUserServer } from "@/server/api/validation/get-server-session";
import { GetServerSideProps } from "next";
import Link from "next/link";

const Signin = () => {
  return (
    <>
      <Meta title="Signin" description="Signin to your account" />

      <main className="container flex h-screen w-screen flex-col items-center justify-center">
        <Link
          href={routes.home}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute top-4 left-4 md:top-8 md:left-8"
          )}
        >
          <>
            <Icons.chevronLeft className="mr-2 h-4 w-4" />
            Back
          </>
        </Link>
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <Icons.logo className="mx-auto h-6 w-6" />
            <h1 className="text-2xl font-semibold tracking-tight">
              Welcome back
            </h1>
            <p className="text-sm text-theme-500 dark:text-theme-400">
              Sign in to your account
            </p>
          </div>
          <UserAuthForm />
          <p className="px-8 text-center text-sm text-theme-500 dark:text-theme-400">
            <Link
              href={routes.signUp}
              className="hover:text-brand underline underline-offset-4"
            >
              Don&apos;t have an account? Sign Up
            </Link>
          </p>
        </div>
      </main>
    </>
  );
};

export default Signin;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const user = await getCurrentUserServer(ctx);
  if (user?.id)
    return {
      redirect: {
        destination: routes.home,
        permanent: false,
      },
    };
  return {
    props: {},
  };
};
