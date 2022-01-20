const CertificateIcon = ({ size }) => (
  <svg
    className={size ? "" : "h-4 w-4"}
    viewBox={`0 0 ${size ? size : "24"} ${size ? size : "24"}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
  >
    <path
      d="M18 13.25L19.434 16.0272L22.5 16.4728L20.25 18.5L20.8282 21.5L18 19.8125L15.1718 21.5L15.75 18.5L13.5 16.4728L16.65 16.0272L18 13.25Z"
      fill="#0034A5"
    />
    <path d="M4.5 12.5H9V14H4.5V12.5Z" fill="#0034A5" />
    <path d="M4.5 9.5H12V11H4.5V9.5Z" fill="#0034A5" />
    <path d="M4.5 6.5H12V8H4.5V6.5Z" fill="#0034A5" />
    <path
      d="M12 20H3V5H21V12.5H22.5V5C22.5 4.60218 22.342 4.22064 22.0607 3.93934C21.7794 3.65804 21.3978 3.5 21 3.5H3C2.60218 3.5 2.22064 3.65804 1.93934 3.93934C1.65804 4.22064 1.5 4.60218 1.5 5V20C1.5 20.3978 1.65804 20.7794 1.93934 21.0607C2.22064 21.342 2.60218 21.5 3 21.5H12V20Z"
      fill="#0034A5"
    />
  </svg>
);

export default CertificateIcon;
