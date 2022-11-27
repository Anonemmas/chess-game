import GamesComponent from "@components/GamesComponent";
import Layout from "@components/shared/Layout";
import Nav from "@components/shared/Nav";
import NextCustomHead from "@components/shared/NextCustomHead";
import { getSession } from "next-auth/react";

export interface User {
  address: string;
  chain: string;
  network: string;
}
export default function Games({ user }: { user: User }) {
  return (
    <Layout>
      <NextCustomHead title="GAMES • CHESS GAMES" />
      <Nav address={user.address} />
      <GamesComponent />
    </Layout>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  // redirect if not authenticated
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { user: session.user },
  };
}
