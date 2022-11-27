import JoinedGameComponent from "@components/JoinedGame";
import Layout from "@components/shared/Layout";
import Nav from "@components/shared/Nav";
import NextCustomHead from "@components/shared/NextCustomHead";
import { getSession } from "next-auth/react";
import { User } from "pages/games";

export default function JoinedGame({ user }: { user: User }) {
  return (
    <Layout theme="dark">
      <NextCustomHead title="LIVE • CHESS GAMES" />
      <Nav theme="dark" address={user?.address} />
      <JoinedGameComponent isSpectator />
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
