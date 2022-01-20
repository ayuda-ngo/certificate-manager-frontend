import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";

// assets
import logo from "../public/assests/logo.svg";

const IndexPage = () => {
  const inputRef = useRef();
  const router = useRouter();

  const handleCheckCode = () => {
    router.push("/verify/" + inputRef.current.value);
  };

  return (
    <>
      <Head>
        <title>Certify | Ayuda NGO</title>
        <meta property="og:type" content="website" />
        <meta
          name="og:title"
          property="og:title"
          content="Certify | Ayuda NGO"
        />
        <meta
          name="og:description"
          property="og:description"
          content="Online Certificate Validation"
        />
        <meta property="og:url" content="https://certify.ngoayuda.org" />
      </Head>
      <section>
        <div className="bg-[url('../public/assests/login-background.png')] w-screen h-screen relative z-10">
          <div
            className="w-full h-full relative z-20 flex justify-center items-center"
            style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
          >
            <div className="w-80 md:w-[38rem] h-auto flex justify-center items-center flex-col">
              <div className="pb-8">
                <Image src={logo} alt="Ayuda NGO" />
              </div>
              <div className="bg-white opacity-100 relative z-30 w-full h-full p-8 rounded-lg">
                <h1 className="font-semibold p-2 text-lg">
                  Enter your unique code here
                </h1>
                <div>
                  <div className="pb-6">
                    <label className="block p-2">Enter Code</label>
                    <input
                      type="text"
                      placeholder="Enter your code here"
                      className="input-field placeholder:text-[#BABABA] h-14"
                      ref={inputRef}
                    />
                  </div>
                  <button
                    className="text-white bg-[#2C7BE5] w-56 py-2 my-2 rounded-md"
                    onClick={handleCheckCode}
                  >
                    Check
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IndexPage;
