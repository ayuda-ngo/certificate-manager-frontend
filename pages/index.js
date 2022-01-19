import Image from "next/image";

import logo from "../public/assests/logo.svg";

export default function Home() {
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
              <h1 className="font-semibold p-2 text-lg">
                Enter your unique code here
              </h1>
              <form>
                <div className="pb-6">
                  <label className="block p-2">Enter Code</label>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="block w-full bg-[#F1F1F1] h-10 rounded-md px-2"
                  />
                </div>
                <button className="text-white bg-[#2C7BE5] w-56 py-2 my-2 rounded-md">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
