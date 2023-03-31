import { DashboardLayout } from "@/components/common/layouts/dashboard-layout";
import Meta from "@/components/meta";
import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { getServerAuthSession } from "@/server/auth";
import { User } from "@prisma/client";
import { GetServerSideProps } from "next";

const Dashboard = ({ user }: { user: User }) => {
  return (
    <>
      <Meta title={`Dashboard | ${siteConfig.name}`} />
      <DashboardLayout user={user}>
        <div></div>
      </DashboardLayout>
    </>
  );
};

export default Dashboard;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerAuthSession(ctx);
  const user = session?.user;
  if (!user?.id)
    return {
      redirect: {
        destination: routes.signIn,
        permanent: false,
      },
    };
  return {
    props: {
      user,
    },
  };
};
