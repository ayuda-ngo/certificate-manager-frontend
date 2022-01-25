const Toast = () => {
  return (
    <>
      <div className="flex space-x-2 justify-center">
        <div
          className="bg-white shadow-lg mx-auto w-96 max-w-full text-sm pointer-events-auto bg-clip-padding rounded-lg block"
          id="static-example"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          data-mdb-autohide="false"
        >
          <div className=" bg-white flex justify-between items-center py-2 px-3 bg-clip-padding border-b border-gray-200 rounded-t-lg">
            <p className="font-bold text-gray-500">MDBootstrap</p>
            <div className="flex items-center">
              <p className="text-gray-600 text-xs">11 mins ago</p>
              <button
                type="button"
                className=" btn-close box-content w-4 h-4 ml-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-mdb-dismiss="toast"
                aria-label="Close"
              ></button>
            </div>
          </div>
          <div className="p-3 bg-white rounded-b-lg break-words text-gray-700">
            Static Example
          </div>
        </div>
      </div>
    </>
  );
};

export default Toast;
