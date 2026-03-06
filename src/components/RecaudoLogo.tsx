import recaudoLogo from "@/assets/recaudo-logo-white.png";

interface RecaudoLogoProps {
  className?: string;
  variant?: "white" | "black";
}

const RecaudoLogo = ({ className = "h-8", variant = "black" }: RecaudoLogoProps) => {
  return (
    <img
      src={recaudoLogo}
      alt="Recaudo"
      className={`${className} ${variant === "white" ? "invert" : ""}`}
    />
  );
};

export default RecaudoLogo;
