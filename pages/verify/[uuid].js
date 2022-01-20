import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

// Project Imports
import { jsPDF } from "jspdf";
import instance from "../../lib/axiosInstance";

const Post = ({ certificate }) => {
  const [certificateImage, setCertificateImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const fetchImageData = async () => {
      const res = await instance.get(`/certificates/${certificate.uuid}/image`);
      setCertificateImage(res.data.data);
      setIsLoading(false);
    };

    fetchImageData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDownload = () => {
    const doc = new jsPDF();

    doc.addImage(certificateImage, "PNG", 0, 0, 210, 297);
    doc.save(`${certificate.name}.pdf`);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(certificate.url);
  };

  return (
    <div>
      <Head>
        <title>{`${certificate.name} - Verify`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <section>
        <div className="w-full h-auto md:h-screen md:flex md:flex-row relative">
          <div className="md:w-3/4 md:h-full relative bg-[#F8F8FE] pt-6">
            <button
              className="flex items-center ml-6 md:ml-11 border-2 rounded-lg w-20 h-8 border-[#000]"
              onClick={() => router.back()}
            >
              <div className="w-full flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                <div className="inline pl-1 font-medium text-sm">Back</div>
              </div>
            </button>
            <div className="pt-8">
              <h1 className="pl-6 md:pl-11 font-semibold">Preview</h1>
              <div className="flex justify-center">
                <div className="w-11/12 flex justify-center bg-[#CACACA] my-6 p-6 relative">
                  <div className="h-auto w-96">
                    {!isLoading && (
                      <Image
                        src={certificateImage}
                        alt="Certificate"
                        layout="responsive"
                        width={384}
                        height={534}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/4 md:h-full relative pt-6 md:border-l-2 md:border-[#E3EBF6]">
            <div className="w-full h-full flex flex-col relative justify-between">
              <div className=" w-full flex justify-center items-center md:border-b-2 md:pb-3 pb-6">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                      <div className="pl-2">Download</div>
                    </div>
                  </button>
                </div>
                <div className="w-full flex justify-center pb-8">
                  <button
                    className="text-black bg-[#FFCF00] w-2/4 py-2 rounded-lg"
                    onClick={handleCopy}
                  >
                    <div className="flex justify-center items-end">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                        />
                      </svg>
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
  let certificate = null;
  let certificateImage = null;
  try {
    const res = await instance.get(`/certificates/${uuid}`);
    certificate = res.data.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      certificate,
      certificateImage,
    },
  };
}

export default Post;
