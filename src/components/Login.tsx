import MetaMask from "@assets/metamask.png";
import CoinBase from "@assets/coinbase.png";
import Image from "next/image";
import useLogin from "../hooks/useLogin";

export default function Login() {
  const { handleAuth, toast } = useLogin();
  return (
    <div className="flex flex-col items-center mt-[30%] sm:mt-[10%] justify-center gap-12">
      <p className="flex flex-col gap-2 items-center">
        <span className="font-bold text-2xl sm:text-4xl lg:text-5xl text-center">
          Welcome to Chess Games
        </span>
        <span className="text-sm sm:text-base text-center">
          Sign in with your wallet to be able to authenticate and play games
        </span>
      </p>
      <div className="buttons flex flex-col gap-4">
        <button
          onClick={() => handleAuth()}
          className="flex bg-primary-blue text-[.8rem] md:text-base relative border gap-2 px-10 sm:px-20 py-3 border-primary-blue rounded-[30px] items-center justify-center text-white"
        >
          <Image
            src={MetaMask}
            alt="meta mask logo"
            width={20}
            height={20}
            unoptimized
            className="relative sm:absolute sm:left-12"
          />
          Sign in with metamask
        </button>

        <button
          className="flex relative bg-transparent text-[.8rem] md:text-base gap-2 rounded-[30px] px-10 sm:px-20 py-3 items-center justify-center border border-[#848484]"
          onClick={() =>
            toast({
              title: "Coming soon.",
              description: "Please use metamask for authentication",
              status: "info",
              duration: 2000,
              isClosable: true,
            })
          }
        >
          <Image
            src={CoinBase}
            alt="coinbase logo"
            width={20}
            height={20}
            className="relative sm:absolute  sm:left-12"
          />
          Sign in with Coinbase wallet
        </button>
      </div>
      <button className="underline underline-offset-4 font-semibold">
        Show more options
      </button>
    </div>
  );
}
