import { DotsCircleHorizontalIcon } from "@heroicons/react/outline";

export default function Button({
  isLoading,
  onClick,
  className,
  children,
  icon,
  ...rest
}) {
  return (
    <button className={className} onClick={onClick} {...rest}>
      <div className="flex items-center justify-center">
        <div className="inline pl-2">
          {isLoading ? <DotsCircleHorizontalIcon className="h-5 w-5" /> : icon}
        </div>
        <div className="inline font-bold mx-2">
          {isLoading ? "Loading..." : children}
        </div>
      </div>
    </button>
  );
}
