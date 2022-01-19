const BrowseCertificate = (props) => {
    return (
      <section>
        <div className="bg-slate-500 bg-opacity-50 absolute inset-0 flex justify-center items-center">
          <div className="w-[30%] h-auto bg-white pb-12 pr-12 pl-12 pt-8 rounded-xl">
            <div className="flex justify-between items-center pb-8">
              <div className="font-semibold">Generate Certificate</div>
              <button onClick={props.crossClickHander}>
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div>
              <form>
                <div className="pb-2">
                  <input
                    type="file"
                    placeholder="Enter your Name"
                    className="block w-full bg-[#F1F1F1] h-10 rounded-md px-2"
                  />
                </div>
               
                <button className="text-white bg-[#2C7BE5] w-[100%] py-2 my-2 rounded-md mt-6">
                  Browse File
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default BrowseCertificate;
  