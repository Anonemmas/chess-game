import Head from "next/head";
import NextCustomHead from "@components/shared/NextCustomHead";
import Nav from "@components/shared/Nav";
import Login from "@components/Login";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <>
        <NextCustomHead title="Login · Chess online" />
        <div className="h-full w-[90%] mx-primary mt-[50px]">
          <Nav />
          <Login />
        </div>
      </>
    </div>
  );
}
