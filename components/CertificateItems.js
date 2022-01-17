const CertItem = (props) => {
  return (
    <tr className="h-16 border-y-2">
      <td>{props.name}</td>
      <td className="text-center">{props.type}</td>
      <td className="text-center">{props.month}</td>
      <td className="text-center">{props.year}</td>
      <td>
        <div className="w-full flex justify-between">
          <button className="bg-[#2C7BE5] text-white w-[45%] rounded-md h-8">
            View
          </button>
          <button className="border border-[#F16E55] text-[#F16E55] w-[45%] rounded-md h-8">
            <div className="flex items-center justify-center">
              <div className="inline pr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="inline">Delete</div>
            </div>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default CertItem;
