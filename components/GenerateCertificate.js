import { useEffect, useState } from "react";

// assets
import {
  CheckCircleIcon,
  PlusCircleIcon,
  XIcon,
} from "@heroicons/react/outline";

// project imports
import instance from "../lib/axiosInstance";
import Button from "../containers/Button";

const GenerateCertificate = ({ toggle, inputValues }) => {
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
      regno: null,
      type: "",
      year: "",
      month: "",
    };
  });

  useEffect(() => {
    if (inputValues) {
      setValues({
        name: inputValues.name.trim(),
        email: inputValues.email.trim(),
        regno: inputValues.regno.trim(),
        type: inputValues.type.trim(),
        year: inputValues.year.trim(),
        month: inputValues.month.trim(),
      });
    }
  }, [inputValues]);

  const handleCreateCertificate = () => {
    setLoading(true);
    setError(null);
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

  const handleToggle = () => {
    setValues({
      name: "",
      email: null,
      regno: null,
      type: "",
      year: "",
      month: "",
    });
    setError(null);
    setSuccess(false);
    toggle();
  };

  return (
    <section>
      <div className="bg-slate-500 bg-opacity-50 absolute inset-0 flex justify-center items-center">
        <div className="w-[30%] h-auto bg-white pb-12 pr-12 pl-12 pt-8 rounded-xl">
          <div className="flex justify-between items-center pb-8">
            <div className="font-semibold">Generate Certificate</div>
            <Button
              icon={<XIcon className="w-5 h-5" />}
              onClick={handleToggle}
            />
          </div>
          <div>
            <div className="pb-2">
              <label className="block py-2">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                value={values.name}
                onChange={handleChange}
                className="input-field"
              />
            </div>
            <div className="pb-2">
              <label className="block py-2">Year</label>
              <input
                id="year"
                placeholder="Year"
                type="number"
                value={values.year}
                onChange={handleChange}
                className="input-field"
              />
            </div>
            <div className="pb-2">
              <label className="block py-2">Month</label>
              <input
                id="month"
                placeholder="Month"
                type="text"
                value={values.month}
                onChange={handleChange}
                className="input-field"
              />
            </div>
            <div className="pb-2">
              <label className="block py-2">Type</label>
              <input
                id="type"
                type="text"
                placeholder="Type"
                value={values.type}
                onChange={handleChange}
                className="input-field"
              />
            </div>
            <Button
              onClick={handleCreateCertificate}
              isLoading={isLoading}
              className={`${
                success ? "btn-success" : "btn-primary"
              } w-[100%] my-2 mt-6`}
              disabled={success}
              icon={
                success ? (
                  <CheckCircleIcon className="w-5 h-5" />
                ) : (
                  <PlusCircleIcon className="w-5 h-5" />
                )
              }
            >
              {success ? "Generated!" : "Generate"}
            </Button>
            {error && <div className="text-red-500 text-sm">{error}</div>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenerateCertificate;
