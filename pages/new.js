import { useState } from "react";
import { useSession } from "next-auth/react";

// assets
import { FolderIcon, PlusCircle } from "../containers/icons";

// project imports
import GenerateCertificate from "../components/GenerateCertificate";
import BrowseCertificate from "../components/BrowseCertificate";
import CreateCertificateItem from "../components/CreateCertificateItem";
import Button from "../containers/Button";
import Wishing from "../containers/Wishing";
import SideBar from "../containers/SideBar";
import Head from "next/head";

const New = () => {
  const { data: session } = useSession();

  const [csvData, setCSVData] = useState([]);

  const [showGenerateModal, setShowGenerateModal] = useState(false);
  const [showBrowseFileModal, setShowBrosweFileModal] = useState(false);

  return (
    <>
      <Head>
        <title>New | Certify</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:type" content="website" />
        <meta name="og:title" property="og:title" content="Dashboard" />
        <meta
          name="og:description"
          property="og:description"
          content="Online Certificate Validation"
        />
        <meta property="og:url" content="https://certify.ngoayuda.org" />
      </Head>

      <section>
        <div className="w-screen h-screen md:w-screen md:min-h-screen md:flex">
          {/* left side */}
          <SideBar />

          <div className="w-[100%] md:w-[90%] h-full md:pl-8 md:pt-10 relative bg-[#F8F8FE]">
            <Wishing username={session.user.name} />

            <div className="w-full flex justify-center items-center relative">
              <div className="relative w-4/5 ">
                <div className="bg-[#FFFFFF] relative w-full rounded-lg shadow-lg px-16 py-8 overflow-x-auto">
                  <h1 className="font-semibold text-xl">
                    Generate New Certificates
                  </h1>
                  <table className="w-full mb-12 relative">
                    {csvData.length ? (
                      <>
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
                        <tbody>
                          {csvData.map((certificate) => (
                            <CreateCertificateItem
                              key={certificate.uuid}
                              inputValues={{
                                email: certificate.data[0],
                                name: certificate.data[1],
                                type: certificate.data[2],
                                regno: certificate.data[3],
                                year: certificate.data[4],
                                month: certificate.data[5],
                              }}
                            />
                          ))}
                        </tbody>
                      </>
                    ) : (
                      <div className="mt-36">
                        <div className="text-[#9D9D9D] text-center">
                          Generate or add files from your system to generate
                          certificate.
                        </div>
                        <div className="flex justify-center items-center mt-8 mb-32">
                          <div>
                            <Button
                              icon={<PlusCircle />}
                              onClick={() =>
                                setShowGenerateModal(!showGenerateModal)
                              }
                              className="btn-primary w-28 mx-10"
                            >
                              Generate
                            </Button>
                          </div>
                          <div>or</div>
                          <div>
                            <Button
                              onClick={() =>
                                setShowBrosweFileModal(!showBrowseFileModal)
                              }
                              icon={<FolderIcon />}
                              className="btn-secondary w-28 mx-10"
                            >
                              Browse
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={showGenerateModal ? "block" : "hidden"}>
          <GenerateCertificate toggle={() => setShowGenerateModal(false)} />
        </div>
        <div className={showBrowseFileModal ? "block" : "hidden"}>
          <BrowseCertificate
            toggle={() => setShowBrosweFileModal(false)}
            setCSVData={setCSVData}
          />
        </div>
      </section>
    </>
  );
};

New.authenticationEnabled = true;

export default New;
