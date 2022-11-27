import JoinedGameComponent from "@components/JoinedGame";
import Layout from "@components/shared/Layout";
import Nav from "@components/shared/Nav";
import NextCustomHead from "@components/shared/NextCustomHead";

export default function JoinedGame() {
  return (
    <Layout theme="dark">
      <NextCustomHead title="LIVE • CHESS GAMES" />
      <Nav theme="dark" />
      <JoinedGameComponent isSpectator />
    </Layout>
  );
}
