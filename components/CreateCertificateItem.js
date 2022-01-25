import { useEffect, useState } from "react";
import Button from "../containers/Button";
import CertificateIcon from "../containers/icons/CertificateIcon";
import instance from "../lib/axiosInstance";

const CreateCertificateItem = ({ inputValues }) => {
  const [isLoading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const [values, setValues] = useState((inputValues) => {
    if (inputValues) {
      return {
        name: inputValues.name.trim(),
        email: inputValues.email.trim(),
        type: inputValues.type.trim(),
        regno: inputValues.regno.trim(),
        year: inputValues.year.trim(),
        month: inputValues.month.trim(),
      };
    }

    return {
      name: "",
      email: null,
      type: "",
      regno: null,
      year: "",
      month: "",
    };
  });

  useEffect(() => {
    if (inputValues) {
      setValues({
        name: inputValues.name.trim(),
        email: inputValues.email.trim(),
        type: inputValues.type.trim(),
        regno: inputValues.regno.trim(),
        year: inputValues.year.trim(),
        month: inputValues.month.trim(),
      });
    }
  }, [inputValues]);

  const onClick = () => {
    setLoading(true);
    instance
      .post("/certificates/new", values)
      .then((data) => {
        if (data.data.success) {
          setSuccess(true);
        } else {
          setError(data.data.message);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setValues({ ...values, [id]: value });
  };

  return (
    <>
      <tr className="h-16 border-y-2">
        <td>
          <input
            id="name"
            type="text"
            className="input-field placeholder:text-[#BABABA] h-14"
            placeholder="Name"
            value={values.name}
            onChange={handleChange}
          />
        </td>
        <td>
          <input
            id="type"
            type="text"
            className="input-field placeholder:text-[#BABABA] h-14"
            placeholder="Type"
            value={values.type}
            onChange={handleChange}
          />
        </td>
        <td>
          <input
            id="year"
            placeholder="Year"
            type="text"
            className="input-field placeholder:text-[#BABABA] h-14"
            value={values.year}
            onChange={handleChange}
          />
        </td>
        <td>
          <input
            id="month"
            placeholder="Month"
            type="text"
            className="input-field placeholder:text-[#BABABA] h-14"
            value={values.month}
            onChange={handleChange}
          />
        </td>
        <td>
          <div className="w-full flex justify-center">
            <Button
              className={`${
                success ? "btn-success" : "btn-primary"
              } mx-2 w-full`}
              onClick={onClick}
              icon={<CertificateIcon className="text-white" />}
              isLoading={isLoading}
              disabled={isLoading || success}
            >
              {success ? "Generated!" : "Generate"}
            </Button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default CreateCertificateItem;
