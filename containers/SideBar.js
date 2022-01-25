import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";

// assets
import { LogoutIcon } from "@heroicons/react/outline";
import CertificateIcon from "./icons/CertificateIcon";
import logo from "../public/assests/logo2.svg";

// project imports
import Button from "./Button";

const SideBar = () => {
  return (
    <div className="w-[100%] md:w-[10%] h-auto relative flex flex-col justify-between pt-8 pb-12">
      <div className="flex justify-center items-center">
        <Image src={logo} alt="Ayuda NGO" />
      </div>
      <div className="flex justify-center items-center text-[#2C7BE5]">
        <CertificateIcon />
        <Link className="inline" passHref={true} href="/dashboard">
          <a>
            <div className="inline pl-1">Certificates</div>
          </a>
        </Link>
      </div>

      <Button
        className="btn-error-outline mx-2"
        icon={<LogoutIcon className="h-5 w-5" />}
        onClick={() => signOut()}
      >
        Logout
      </Button>
    </div>
  );
};

export default SideBar;
