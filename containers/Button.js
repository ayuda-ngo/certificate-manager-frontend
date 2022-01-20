import { LoadingIcon } from "./icons";

export default function Button({
  isLoading,
  onClick,
  className,
  children,
  icon,
}) {
  return (
    <button className={className} onClick={onClick}>
      <div className="flex items-center justify-center">
        <div className="inline pr-1">{isLoading ? <LoadingIcon /> : icon}</div>
        <div className="inline font-bold">
          {isLoading ? "Loading..." : children}
        </div>
      </div>
    </button>
  );
}
