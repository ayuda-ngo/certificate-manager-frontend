import { useRef, useState } from "react";
import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";

import Image from "next/image";

// project imports
import logo from "../public/assests/logo.svg";
import Button from "../containers/Button";

const LogIn = () => {
  const [loading, setLoading] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [err, setError] = useState(null);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const router = useRouter();

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const res = await signIn("credentials", {
      redirect: false,
      email: enteredEmail,
      password: enteredPassword,
    });

    if (res.error) {
      setError(res.error);
      setShowBanner(true);
      setLoading(false);
    } else {
      router.replace("/dashboard");
    }
  };

  return (
    <section className="relative w-full h-full">
      <div className="bg-[url('../public/assests/login-background.png')] w-screen h-screen relative z-10">
        <div
          className="w-full h-full relative z-20 flex justify-center items-center"
          style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
        >
          <div className="w-80 md:w-[38rem] h-auto flex justify-center items-center flex-col">
            <div className="pb-8">
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
                    className="input-field placeholder:text-[#BABABA] h-14"
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
                    className="input-field placeholder:text-[#BABABA] h-14"
                    id="password"
                    required
                    ref={passwordInputRef}
                  />
                </div>
                <Button
                  type="submit"
                  className="btn-primary w-44 my-6"
                  isLoading={loading}
                >
                  LogIn
                </Button>
              </form>
              {err && <div className="text-red-600 text-center">{err}</div>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: true,
      },
    };
  }

  return {
    props: {},
  };
}

export default LogIn;
