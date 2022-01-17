import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

import instance from "../lib/axiosInstance";
import CertItem from "../components/CertificateItems";

// Project Imports
import logo from "../public/assests/logo2.svg";

const Dashboard = ({ certificates, error }) => {
  const { data: session } = useSession();

  const greeting = () => {
    let currentHours = new Date().getHours();
    if (currentHours < 12) {
      return "Good Morning";
    } else if (currentHours < 18) {
      return "Good Afternoon";
    } else return "Good Evening";
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (session) {
    return (
      <>
        {/* Signed in as {JSON.stringify(session.user, null, 2)} <br />
        <button onClick={() => signOut()}>Sign out</button>
        <div>
          <h1>Dashboard</h1>
          <pre>{JSON.stringify(certificates, null, 2)}</pre>
        </div> */}

        <section>
          <div className="w-screen h-screen md:w-screen md:min-h-screen md:flex">
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
            <div className="w-[100%] md:w-[90%] h-full md:pl-8 md:pt-10 relative bg-[#F8F8FE]">
              <h1 className="font-semibold text-xl pb-8">
                {greeting()}, Monica👋
              </h1>
              <div className="w-full flex justify-center items-center relative">
                <div className="relative w-4/5 ">
                  <div className="w-full flex justify-end relative">
                    <button className="bg-[#FFCF00] py-2 px-4 rounded-lg md:my-3 md:mx-2">
                      {" "}
                      + Create New
                    </button>
                  </div>
                  <div className="bg-[#FFFFFF] relative w-full rounded-lg shadow-lg px-16 py-8 overflow-x-auto">
                    <h1 className="font-semibold text-xl">Your Certificates</h1>
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
                            Name of Participant
                          </th>
                          <th className="text-[#2C7BE5]">Type</th>
                          <th className="text-[#2C7BE5]">Month</th>
                          <th className="text-[#2C7BE5]">Year</th>
                          <th className="text-[#2C7BE5]">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <CertItem
                          name="Lorem"
                          type="Front-end"
                          month="Jan"
                          year="2021-2022"
                        />
                        <CertItem
                          name="Lorem"
                          type="Front-end"
                          month="Jan"
                          year="2021-2022"
                        />
                        <CertItem
                          name="Lorem"
                          type="Front-end"
                          month="Jan"
                          year="2021-2022"
                        />
                        <CertItem
                          name="Lorem"
                          type="Front-end"
                          month="Jan"
                          year="2021-2022"
                        />
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
};

Dashboard.authenticationEnabled = true;

export async function getServerSideProps() {
  const res = await instance.get(`/certificates`);
  const data = res.data;

  if (data.success) {
    return {
      props: {
        certificates: data.data,
      },
    };
  }

  return {
    props: {
      error: {
        message: data.message,
      },
    },
  };
}

export default Dashboard;
