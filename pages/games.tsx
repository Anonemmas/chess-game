import GamesComponent from "@components/GamesComponent";
import Layout from "@components/shared/Layout";
import Nav from "@components/shared/Nav";
import NextCustomHead from "@components/shared/NextCustomHead";

export default function Games() {
  return (
    <Layout>
      <NextCustomHead title="GAMES • CHESS GAMES" />
      <Nav />
      <GamesComponent />
    </Layout>
  );
}
