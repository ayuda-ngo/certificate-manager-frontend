import { RefreshIcon } from "@heroicons/react/outline";

const CertificateLoader = () => (
  <div className="bg-white certificate-dimentions p-2 border-2 rounded-md mx-auto">
    <div className="flex flex-row items-center h-full justify-center space-x-5">
      <RefreshIcon className="h-5 w-5 animate-spin" />
    </div>
  </div>
);

export default CertificateLoader;
