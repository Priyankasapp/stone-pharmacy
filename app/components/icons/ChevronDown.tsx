interface ChevronDownProps {
  className?: string;
}


export const ChevronDown = ({ className }: ChevronDownProps) => {
  return (
    <svg
      width="8"
      height="5"
      viewBox="0 0 8 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3.75 4.1325C3.70082 4.1331 3.65206 4.1234 3.60685 4.10402C3.56164 4.08465 3.52098 4.05603 3.4875 4.02L0.1125 0.645C-0.0375 0.495 -0.0375 0.2625 0.1125 0.1125C0.2625 -0.0375 0.495 -0.0375 0.645 0.1125L3.7575 3.225L6.8625 0.12C7.0125 -0.03 7.245 -0.03 7.395 0.12C7.545 0.27 7.545 0.5025 7.395 0.6525L4.02 4.0275C3.945 4.1025 3.8475 4.14 3.7575 4.14L3.75 4.1325Z"
        fill="#3E3D3E"
      />
    </svg>
  );
};
