import PropTypes from "prop-types";
import { useEffect, useState } from "react";

// assets
import {
  SpeakerphoneIcon,
  XIcon,
  ExclamationCircleIcon,
  CheckCircleIcon,
} from "@heroicons/react/outline";

const getBannerIcon = (icon) => {
  if (icon === "error")
    return (
      <ExclamationCircleIcon
        className="h-6 w-6 text-white"
        aria-hidden="true"
      />
    );
  else if (icon === "success")
    return (
      <CheckCircleIcon className="h-6 w-6 text-white" aria-hidden="true" />
    );
  else
    return (
      <SpeakerphoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
    );
};

const Banner = ({ type, message, toggle }) => {
  const [color, setColor] = useState("indigo");
  const [bannerIcon, setBannerIcon] = useState(type);

  useEffect(() => {
    console.log(type);

    if (type === "error") {
      setColor("red");
      setBannerIcon(type);
    }
    if (type === "success") {
      setColor("green");
      setBannerIcon(type);
    }
  }, [type]);

  return (
    <div className={`bg-${color}-600 absolute inset-x-0 top-0 z-20`}>
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className={`flex p-2 rounded-lg bg-${color}-800`}>
              {getBannerIcon(bannerIcon)}
            </span>
            <p className="ml-3 font-medium text-white truncate">
              <span className="md:hidden">We announced a new product!</span>
              <span className="hidden md:inline">{message}</span>
            </p>
          </div>

          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              className="-mr-1 flex p-2 rounded-md hover:bg-${color}-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
              onClick={toggle}
            >
              <span className="sr-only">Dismiss</span>
              <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  type: PropTypes.oneOf(["success", "info", "warning", "error"]),
  message: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default Banner;
