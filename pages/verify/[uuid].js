import { jsPDF } from "jspdf";
import Head from "next/head";
import Image from "next/image";
import instance from "../../lib/axiosInstance";

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

      <p>UUID: {uuid}</p>

      <Image
        src={data.data.image}
        alt="certificate"
        layout="fill" // required
        objectFit="scale-down"
        className="w-16 md:w-32 lg:w-48"
      />
      <button
        onClick={handleDownload}
        className="w-80 border-2 inline-block h-12 px-5 py-3 text-sm rounded-lg border-black"
      >
        Download
      </button>
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
