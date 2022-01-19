import React, { useState } from "react";
import Image from "next/image";
import GenerateCertificate from "../components/GenerateCertificate";
import BrowseCertificate from "../components/BrowseCertificate";

import logo from "../public/logo2.svg";

const NewCertificate = () => {
  const greeting = () => {
    let currentHours = new Date().getHours();
    if (currentHours < 12) {
      return "Good Morning";
    } else if (currentHours < 18) {
      return "Good Afternoon";
    } else return "Good Evening";
  };

  const [generateModal, setGenerateModal] = useState("hidden");
  const [browseModal, setBrowseModal] = useState("hidden");

  const generateClickHandler = () => {
    setGenerateModal("block");
  };

  const generateExitHandler = () => {
    setGenerateModal("hidden");
  };

  const browseClickHandler = () => {
    setBrowseModal("block");
  };

  const browseExitHandler = () => {
    setBrowseModal("hidden");
  };

  return (
    <section>
      <div className="w-screen h-screen md:w-screen md:min-h-screen md:flex">
        {/* left side */}
        <div className="w-[100%] md:w-[10%] h-auto relative flex flex-col justify-between pt-8 pb-12">
          <div className="flex justify-center items-center">
            <Image src={logo} alt="Ayuda NGO" />
          </div>
          <div className="flex justify-center items-center">
            <div className="inline">
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 13.25L19.434 16.0272L22.5 16.4728L20.25 18.5L20.8282 21.5L18 19.8125L15.1718 21.5L15.75 18.5L13.5 16.4728L16.65 16.0272L18 13.25Z"
                  fill="#0034A5"
                />
                <path d="M4.5 12.5H9V14H4.5V12.5Z" fill="#0034A5" />
                <path d="M4.5 9.5H12V11H4.5V9.5Z" fill="#0034A5" />
                <path d="M4.5 6.5H12V8H4.5V6.5Z" fill="#0034A5" />
                <path
                  d="M12 20H3V5H21V12.5H22.5V5C22.5 4.60218 22.342 4.22064 22.0607 3.93934C21.7794 3.65804 21.3978 3.5 21 3.5H3C2.60218 3.5 2.22064 3.65804 1.93934 3.93934C1.65804 4.22064 1.5 4.60218 1.5 5V20C1.5 20.3978 1.65804 20.7794 1.93934 21.0607C2.22064 21.342 2.60218 21.5 3 21.5H12V20Z"
                  fill="#0034A5"
                />
              </svg>
            </div>
            <div className="inline text-[#2C7BE5] pl-1">Certificate</div>
          </div>
          <button>
            <div className="flex justify-center items-center text-[#F16E55]">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </div>
              <div className="pl-1">Logout</div>
            </div>
          </button>
        </div>
        {/* right side */}
        <div className="w-[100%] md:w-[90%] h-full md:pl-8 md:pt-10 relative bg-[#F8F8FE]">
          <h1 className="font-semibold text-xl pb-8">{greeting()}, Monica👋</h1>
          <div className="w-full flex justify-center items-center relative">
            <div className="relative w-4/5 ">
              <div className="bg-[#FFFFFF] relative w-full rounded-lg shadow-lg px-16 py-8 overflow-x-auto">
                <h1 className="font-semibold text-xl">
                  Generate New Certificates
                </h1>
                <table className="w-full mb-12 relative">
                  <colgroup>
                    <col span="1" className="w-[20%] text-left" />
                    <col span="1" className="w-[20%] text-center" />
                    <col span="1" className="w-[20%] text-center" />
                    <col span="1" className="w-[20%] text-center" />
                    <col span="1" className="w-[30%] text-center" />
                  </colgroup>
                  <thead>
                    <tr className="h-16">
                      <th className="text-[#2C7BE5] text-left">
                        Name of Event
                      </th>
                      <th className="text-[#2C7BE5]">Type</th>
                      <th className="text-[#2C7BE5]">Month</th>
                      <th className="text-[#2C7BE5]">Year</th>
                      <th className="text-[#2C7BE5]">Action</th>
                    </tr>
                  </thead>
                </table>
                <div className="mt-36">
                  <div className="text-[#9D9D9D] text-center">
                    Generate or add files from your system to generate
                    certificate
                  </div>
                  <div className="flex justify-center items-center mt-8 mb-32">
                    <div>
                      <button
                        onClick={generateClickHandler}
                        className="bg-[#2C7BE5] text-[#FFFFFF] py-2 w-28 rounded-lg mx-10"
                      >
                        Generate
                      </button>
                    </div>
                    <div>or</div>
                    <div>
                      <button
                        onClick={browseClickHandler}
                        className="bg-[#FFCF00] py-2 w-28 rounded-lg mx-10"
                      >
                        Browse
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${generateModal}`}>
        <GenerateCertificate crossClickHander={generateExitHandler} />
      </div>
      <div className={`${browseModal}`}>
        <BrowseCertificate crossClickHander={browseExitHandler} />
      </div>
    </section>
  );
};

export default NewCertificate;
