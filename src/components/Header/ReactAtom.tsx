interface ReactAtomProps {
  size?: number;
  className?: string;
}

const ReactAtom = ({ size = 24, className }: ReactAtomProps) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="16" cy="16" r="2.4" fill="currentColor" />
    <ellipse
      cx="16"
      cy="16"
      rx="11"
      ry="4.2"
      stroke="currentColor"
      strokeWidth="1.4"
      fill="none"
    />
    <ellipse
      cx="16"
      cy="16"
      rx="11"
      ry="4.2"
      stroke="currentColor"
      strokeWidth="1.4"
      fill="none"
      transform="rotate(60 16 16)"
    />
    <ellipse
      cx="16"
      cy="16"
      rx="11"
      ry="4.2"
      stroke="currentColor"
      strokeWidth="1.4"
      fill="none"
      transform="rotate(120 16 16)"
    />
  </svg>
);

export default ReactAtom;
