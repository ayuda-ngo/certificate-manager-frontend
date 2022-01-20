import { LoadingIcon } from "./icons";

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
        <div className="inline">{isLoading ? <LoadingIcon /> : icon}</div>
        <div className="inline font-bold mx-2">
          {isLoading ? "Loading..." : children}
        </div>
      </div>
    </button>
  );
}
