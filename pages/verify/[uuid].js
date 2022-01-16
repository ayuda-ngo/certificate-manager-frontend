import { jsPDF } from "jspdf";
import Head from "next/head";
import Image from "next/image";
import instance from "../../lib/axiosInstance";

// Project Imports
import backSign from "../../public/assests/back-sign.svg";
import certificateSign from "../../public/assests/certificate-sign.svg";
import downloadIcon from "../../public/assests/download-icon.svg";
import linkIcon from "../../public/assests/link-icon.svg";

const Post = ({ uuid, data }) => {
  const doc = new jsPDF();
  doc.addImage(data.data.image, "PNG", 0, 0, 210, 297);

  const handleDownload = () => {
    doc.save(`${data.data.name}.pdf`);
  };

  return (
    <div>
      <Head>
        <title>{`${data.data.name} - Verify`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {/* <p>UUID: {uuid}</p> */}

      <section>
        <div className="w-full h-auto md:h-screen md:flex md:flex-row relative">
          <div className="md:w-3/4 md:h-full relative bg-[#F8F8FE] pt-6">
            <button className="flex items-center ml-6 md:ml-11 border-2 rounded-lg w-20 h-8 border-[#000]">
              <div className="w-full flex justify-center">
                <Image src={backSign} alt="Go Back" width={18} height={18} />
                <div className="inline pl-1 font-medium text-sm">Back</div>
              </div>
            </button>
            <div className="pt-10">
              <h1 className="pl-6 md:pl-11 font-semibold">Preview</h1>
              <div className="flex justify-center">
                <div className="w-11/12 flex justify-center bg-[#CACACA] my-6 p-6 relative">
                  <div className="h-auto w-96">
                    <Image
                      src={data.data.image}
                      alt="Certificate"
                      layout="responsive"
                      width={384}
                      height={544}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/4 md:h-full relative pt-6 md:border-l-2 md:border-[#E3EBF6]">
            <div className="w-full h-full flex flex-col relative justify-between">
              <div className=" w-full flex justify-center items-center md:border-b-2 md:pb-3 pb-6">
                <Image
                  src={certificateSign}
                  alt="Go Back"
                  width={24}
                  height={24}
                />
                <p className="inline pl-2 text-[#0034A5] font-semibold md:text-2xl text-xl">
                  Certificate
                </p>
              </div>
              <div>
                <div className="w-full flex justify-center pb-8">
                  <button
                    className="text-white bg-[#0034A5] w-2/4 py-2 rounded-lg"
                    onClick={handleDownload}
                  >
                    <div className="flex justify-center items-end">
                      <Image
                        src={downloadIcon}
                        alt="Download"
                        width={20}
                        height={24}
                      />
                      <div className="pl-2">Download</div>
                    </div>
                  </button>
                </div>
                <div className="w-full flex justify-center pb-8">
                  <button className="text-black bg-[#FFCF00] w-2/4 py-2 rounded-lg">
                    <div className="flex justify-center items-end">
                      <Image
                        src={linkIcon}
                        alt="Download"
                        width={20}
                        height={24}
                      />
                      <div className="pl-2">Share</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { uuid } = context.query;
  const res = await instance.get(`/certificates/${uuid}`);
  const data = res.data;

  return {
    props: {
      uuid,
      data,
    },
  };
}

export default Post;
