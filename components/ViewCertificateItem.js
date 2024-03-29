import { useState } from "react";
import { useRouter } from "next/router";
import instance from "../lib/axiosInstance";

// assets
import { TrashIcon, EyeIcon } from "@heroicons/react/outline";

// project imports
import Button from "../containers/Button";

const ViewCertificateItem = ({ certificate }) => {
  const { name, type, month, year, uuid } = certificate;

  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleViewCertificate = () => {
    router.push(`/verify/${uuid}`);
  };

  const handleDeleteCertificate = () => {
    setIsLoading(true);
    instance
      .delete(`/certificates/${uuid}`)
      .then((res) => {
        if (res.data.success) {
          router.reload();
        } else {
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  return (
    <tr className="h-16 border-y-2">
      <td>{name}</td>
      <td className="text-center">{type}</td>
      <td className="text-center">{month}</td>
      <td className="text-center">{year}</td>
      <td>
        <div className="w-full flex justify-betweend">
          <Button
            className="btn-primary mx-2 w-1/2"
            onClick={handleViewCertificate}
            icon={<EyeIcon className="h-5 w-5" />}
          >
            View
          </Button>

          <Button
            className="btn-error-outline mx-2 w-1/2"
            onClick={handleDeleteCertificate}
            isLoading={isLoading}
            icon={<TrashIcon className="h-5 w-5" />}
          >
            Delete
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default ViewCertificateItem;
