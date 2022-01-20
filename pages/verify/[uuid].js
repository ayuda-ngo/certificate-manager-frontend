import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

// Project Imports
import { jsPDF } from "jspdf";
import instance from "../../lib/axiosInstance";
import Button from "../../containers/Button";
import {
  CertificateIcon,
  CopiedIcon,
  DownloadIcon,
  LeftArrowIcon,
  ShareIcon,
} from "../../containers/icons";

const Post = ({ certificate }) => {
  const [certificateImage, setCertificateImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [copied, setCopied] = useState(false);

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
    setCopied(true);
    navigator.clipboard.writeText(certificate.url);
  };

  return (
    <>
      <Head>
        <title>{`${certificate.name} - Verify`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <section>
        <div className="w-full h-auto md:h-screen md:flex md:flex-row relative">
          <div className="md:w-3/4 md:h-full relative bg-[#F8F8FE] pt-4">
            <Button
              className="focus:outline-none p-0 rounded-lg drop-shadow-lg ml-6 md:ml-11 border-2 w-20 border-[#000]"
              onClick={() => router.back()}
              icon={<LeftArrowIcon />}
            >
              Back
            </Button>
            <div className="pt-4">
              <h1 className="pl-6 md:pl-11 font-semibold">Preview</h1>
              <div className="flex justify-center">
                <div
                  className={`w-11/12 flex justify-center bg-[#CACACA] my-2 p-6 relative ${
                    isLoading && "animate-pulse"
                  }`}
                >
                  <div className="h-auto w-96">
                    {!isLoading && (
                      <Image
                        src={certificateImage}
                        alt="Certificate"
                        layout="responsive"
                        width={390}
                        height={550}
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
                <CertificateIcon size={25} />
                <p className="inline pl-2 text-[#0034A5] font-semibold md:text-2xl text-xl">
                  Certificate
                </p>
              </div>
              <div>
                <div className="w-full flex justify-center pb-8">
                  <Button
                    className="btn-primary w-2/4"
                    onClick={handleDownload}
                    icon={<DownloadIcon />}
                  >
                    Download
                  </Button>
                </div>
                <div className="w-full flex justify-center pb-8">
                  <Button
                    className="btn-secondary w-2/4"
                    onClick={handleCopy}
                    icon={copied ? <CopiedIcon /> : <ShareIcon />}
                  >
                    {copied ? "Copied!" : "Share"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export async function getServerSideProps(context) {
  const { uuid } = context.query;
  let certificate = null;
  try {
    const res = await instance.get(`/certificates/${uuid}`);

    if (res.data.success) {
      certificate = res.data.data;
    } else {
      return {
        redirect: {
          destination: `/error?message=${res.data.message}`,
          permanent: true,
        },
      };
    }
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      certificate,
    },
  };
}

export default Post;
