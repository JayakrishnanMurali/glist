import DashboardImage from "@/assets/dashboard.svg";
import { MainLayout } from "@/components/common/layouts/main-layout";
import Meta from "@/components/meta";
import { Button, buttonVariants } from "@/components/ui/button";
import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { type NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  const onRedirect = (path: string) => {
    router.push(path);
  };

  return (
    <>
      <Meta />
      <MainLayout>
        <section className="sm:my-20 grid text-center sm:text-left sm:grid-cols-2 gap-4  place-items-center">
          <div className="order-2 sm:order-1">
            <h1 className="font-semibold leading-tight sm:font-bold">
              {siteConfig.title}
            </h1>
            <p className="mt-4 hidden sm:block my-4">
              {siteConfig.description}
            </p>
            <div className="flex justify-between sm:justify-start gap-x-4 my-10">
              <Button
                disabled
                className="flex-1 sm:flex-initial"
                onClick={() => onRedirect(routes.exploreWidgets)}
                variant="outline"
              >
                Explore widgets
              </Button>

              <Link
                className={cn(buttonVariants({}), "flex-1 sm:flex-initial")}
                href={routes.signUp}
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className="py-10 sm:py-20 order-1 sm:order-2">
            <Image src={DashboardImage} width={800} height={500} alt="" />
          </div>
        </section>

        <section>
          <div className="bg-theme-900 dark:bg-theme-50 h-[30vh] sm:h-[70vh] w-full rounded-lg shadow-xl"></div>
        </section>
      </MainLayout>
    </>
  );
};

export default Home;
