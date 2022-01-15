import { useState } from "react";

// project imports
import CreateComponent from "../components/CreateCertificate";
import CSVReader from "../components/CSVReader";

const New = () => {
  const [csvData, setCSVData] = useState(null);

  return (
    <div>
      <h1>New</h1>
      <CreateComponent />
      <CSVReader setCSVData={setCSVData} />
      {csvData &&
        csvData.map((row, idx) => (
          <div key={idx}>
            <pre>{JSON.stringify(row.data[0], null, 2)}</pre>
            <CreateComponent
              inputValues={{
                email: row.data[0],
                name: row.data[1],
                regno: row.data[2],
                year: row.data[3],
                month: row.data[4],
              }}
            />
          </div>
        ))}
    </div>
  );
};

export default New;
