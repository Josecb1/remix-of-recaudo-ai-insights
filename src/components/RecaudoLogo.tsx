interface RecaudoLogoProps {
  className?: string;
}

const RecaudoLogo = ({ className = "h-8" }: RecaudoLogoProps) => {
  return (
    <svg
      viewBox="0 0 220 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Circle with upward trend line icon */}
      <g stroke="currentColor" strokeWidth="2" fill="none">
        {/* Main circle */}
        <circle cx="25" cy="25" r="18" />
        {/* Upward trend line going through circle */}
        <path d="M10 38 L25 22 L32 28 L42 12" strokeLinecap="round" strokeLinejoin="round" />
        {/* Arrow head */}
        <path d="M38 12 L42 12 L42 16" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      
      {/* Recaudo text - serif style */}
      <text
        x="55"
        y="33"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize="30"
        fontWeight="400"
        fill="currentColor"
        letterSpacing="1"
      >
        Recaudo
      </text>
    </svg>
  );
};

export default RecaudoLogo;
