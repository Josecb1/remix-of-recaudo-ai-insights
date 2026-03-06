import recaudoLogo from "@/assets/recaudo-logo-white.png";

interface RecaudoLogoProps {
  className?: string;
}

const RecaudoLogo = ({ className = "h-8" }: RecaudoLogoProps) => {
  return (
    <img
      src={recaudoLogo}
      alt="Recaudo"
      className={`${className} invert`}
    />
  );
};

export default RecaudoLogo;
