import { CSVReader } from "react-papaparse";

// project imports
import Button from "../containers/Button";
import { CloseIcon } from "../containers/icons";
import CSVReaderComponent from "./CSVReader";

const BrowseCertificate = ({ toggle, setCSVData }) => {
  return (
    <section>
      <div className="bg-slate-500 bg-opacity-50 absolute inset-0 flex justify-center items-center">
        <div className="w-[30%] h-auto bg-white pb-12 pr-12 pl-12 pt-8 rounded-xl">
          <div className="flex justify-between items-center pb-8">
            <div className="font-semibold">Generate Certificate</div>
            <Button icon={<CloseIcon />} onClick={toggle} />
          </div>
          <div>
            <CSVReaderComponent setCSVData={setCSVData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseCertificate;
