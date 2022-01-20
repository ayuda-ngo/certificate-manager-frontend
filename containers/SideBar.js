import Image from "next/image";
import { signOut } from "next-auth/react";

// assets
import { CertificateIcon, LogOutIcon } from "./icons";
import logo from "../public/assests/logo2.svg";

// project imports
import Button from "./Button";

const SideBar = () => {
  return (
    <div className="w-[100%] md:w-[10%] h-auto relative flex flex-col justify-between pt-8 pb-12">
      <div className="flex justify-center items-center">
        <Image src={logo} alt="Ayuda NGO" />
      </div>
      <div className="flex justify-center items-center">
        <div className="inline">
          <CertificateIcon />
        </div>
        <div className="inline text-[#2C7BE5] pl-1">Certificates</div>
      </div>

      <Button
        className="btn-error-outline m-4"
        icon={<LogOutIcon />}
        onClick={() => signOut()}
      >
        Logout
      </Button>
    </div>
  );
};

export default SideBar;
