import { ButtonHTMLAttributes } from "react";
import Link from "next/link";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

const ButtonProp = ({
  text,
  href,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "px-4 py-2 rounded-md font-medium transition-all duration-200 inline-block";

  const variants = {
    primary:
      "bg-gray-100 hover:bg-[#FF9900] text-[#FF9900] hover:text-white border border-[#FF9900]",
    secondary:
      "bg-gray-100 hover:bg-[#64943e] text-[#64943e] hover:text-white border border-[#64943e]",
    outline:
      "bg-gray-100 hover:bg-[#0071CE] text-[#0071CE] hover:text-white border border-[#0071CE]",
  };

  const buttonStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonStyles}>
        {text}
      </Link>
    );
  }

  return (
    <button className={buttonStyles} {...props}>
      {text}
    </button>
  );
};

export default ButtonProp;
