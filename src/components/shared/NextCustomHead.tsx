import Head from "next/head";

interface NextCustomHeadProps {
  title: string;
  description?: string;
}
export default function NextCustomHead({
  title,
  description,
}: NextCustomHeadProps) {
  return (
    <Head>
      <title>{title || "Chess Online"}</title>
      <meta
        name="description"
        content={
          description ||
          "Chess online is a web3 application that simulates real world play online vs players from all over the world"
        }
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
