import { useRef, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

import Image from "next/image";

// Project Imports
import logo from "../public/assests/logo.svg";

const LogIn = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const router = useRouter();

  const handleLogin = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    console.log(enteredEmail, enteredPassword);

    const res = await signIn("credentials", {
      redirect: false,
      email: enteredEmail,
      password: enteredPassword,
    });

    if (res.error) {
      console.log(res.error);
    } else {
      router.replace("/dashboard");
    }
  };

  return (
    <section>
      <div className="bg-[url('../public/assests/login-background.png')] w-screen h-screen relative z-10">
        <div
          className="w-full h-full relative z-20 flex justify-center items-center"
          style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
        >
          <div className="w-80 md:w-[38rem] h-auto flex justify-center items-center flex-col">
            <div className="pb-10">
              <Image src={logo} alt="Ayuda NGO" />
            </div>
            <div className="bg-white opacity-100 relative z-30 w-full h-ful p-8 rounded-lg">
              <h1 className="font-semibold p-2 text-3xl pb-3">Login</h1>
              <form onSubmit={handleLogin}>
                <div className="pb-2">
                  <label className="block p-2">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="block w-full bg-[#F1F1F1] placeholder:text-[#BABABA] h-14 rounded-md px-2"
                    id="email"
                    required
                    ref={emailInputRef}
                  />
                </div>
                <div className="pb-2">
                  <label className="block p-2">Password</label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="block w-full bg-[#F1F1F1] placeholder:text-[#BABABA] h-14 rounded-md px-2"
                    id="password"
                    required
                    ref={passwordInputRef}
                  />
                </div>
                <button
                  type="submit"
                  className="text-white bg-[#2C7BE5] w-44 py-3 my-6 rounded-md drop-shadow-lg"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
