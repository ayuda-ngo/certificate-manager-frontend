import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";

// assets
import { PlusCircle } from "../containers/icons";

// project imports
import instance from "../lib/axiosInstance";
import ViewCertificateItem from "../components/ViewCertificateItem";
import Button from "../containers/Button";
import SideBar from "../containers/SideBar";
import Wishing from "../containers/Wishing";

const DashboardPage = ({ certificates, error }) => {
  const { data: session } = useSession();

  const router = useRouter();

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleCreateNew = () => {
    router.push("/new");
  };

  return (
    <>
      <Head>
        <title>Dashboard | Certify</title>
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
          <SideBar />

          <pre>{JSON.stringify(certificates, null, 2)}</pre>

          <div className="w-[100%] md:w-[90%] h-full md:pl-8 md:pt-10 relative bg-[#F8F8FE]">
            <Wishing username={session.user.name} />
            <div className="w-full flex justify-center items-center relative">
              <div className="relative w-4/5 ">
                <div className="w-full flex justify-end relative">
                  <Button
                    className="btn-secondary md:my-3 md:mx-2"
                    onClick={handleCreateNew}
                    icon={<PlusCircle />}
                  >
                    Create New
                  </Button>
                </div>
                <div className="bg-[#FFFFFF] relative w-full rounded-lg shadow-lg px-10 py-8 overflow-x-auto">
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
                      {certificates.map((certificate) => (
                        <ViewCertificateItem
                          key={certificate.uuid}
                          certificate={certificate}
                        />
                      ))}
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
};

DashboardPage.authenticationEnabled = true;

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
    redirect: {
      destination: `/error?message=${data.message}`,
    },
  };
}

export default DashboardPage;
