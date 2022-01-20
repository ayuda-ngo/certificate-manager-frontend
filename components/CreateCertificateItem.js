import { useEffect, useState } from "react";
import Button from "../containers/Button";
import instance from "../lib/axiosInstance";

const CreateCertificateItem = ({ inputValues }) => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const [values, setValues] = useState((inputValues) => {
    if (inputValues) {
      return {
        name: inputValues.name.trim(),
        email: inputValues.email.trim(),
        regno: inputValues.regno.trim(),
        year: inputValues.year.trim(),
        month: inputValues.month.trim(),
      };
    }

    return {
      name: "",
      email: null,
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
        setData(data.data.data);
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
            className="w-80 border-2 inline-block h-12 px-5 py-3 text-sm rounded-lg border-black"
            placeholder="Name"
            value={values.name}
            onChange={handleChange}
          />
        </td>
        <td>
          <input
            id="year"
            placeholder="Year"
            type="text"
            className="w-80 border-2 inline-block h-12 px-5 py-3 text-sm rounded-lg border-black"
            value={values.year}
            onChange={handleChange}
          />
        </td>
        <td>
          <input
            id="month"
            placeholder="Month"
            type="text"
            className="w-80 border-2 inline-block h-12 px-5 py-3 text-sm rounded-lg border-black"
            value={values.month}
            onChange={handleChange}
          />
        </td>
        <td>
          <div className="w-full flex justify-betweend">
            <Button className="btn-primary mx-2 w-1/2" onClick={() => {}}>
              Submit
            </Button>
          </div>
        </td>
      </tr>

      <div className="flex flex-row w-full">
        <button
          className="w-25 inline-block px-5 py-3 font-medium text-white bg-black rounded-lg"
          onClick={onClick}
        >
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </div>

      <pre>{JSON.stringify(values, null, 2)}</pre>

      <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </>
  );
};

export default CreateCertificateItem;
