"use client";

import { ButtonHTMLAttributes } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  href?: string;
  link?: string | null;
  variant?: "primary" | "secondary" | "outline" | "outlineBlack";
  className?: string;
}

const ButtonProp = ({
  text,
  href,
  link,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles = cn(
    "px-4 py-2 rounded-md font-medium transition-all duration-200 inline-flex items-center justify-center relative",
    !link &&
      "cursor-not-allowed before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[2px]  before:bg-red-500 before:top-1/2 before:-translate-y-1/2"
  );

  const variants = {
    primary:
      "bg-gray-100 hover:bg-[#FF9900] text-[#FF9900] hover:text-white border border-[#FF9900] disabled:hover:bg-gray-100 disabled:hover:text-[#FF9900]",
    secondary:
      "bg-gray-100 hover:bg-[#64943e] text-[#64943e] hover:text-white border border-[#64943e] disabled:hover:bg-gray-100 disabled:hover:text-[#64943e]",
    outline:
      "bg-gray-100 hover:bg-[#0071CE] text-[#0071CE] hover:text-white border border-[#0071CE] disabled:hover:bg-gray-100 disabled:hover:text-[#0071CE]",
    outlineBlack:
      "bg-gray-100 hover:bg-[#000000] text-[#000000] hover:text-white border border-[#000000] disabled:hover:bg-gray-100 disabled:hover:text-[#000000]",
  };

  const buttonStyles = cn(baseStyles, variants[variant], className);

  const handleExternalLink = () => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  if (href) {
    return (
      <Link href={href} className={buttonStyles}>
        {text}
      </Link>
    );
  }

  return (
    <button
      className={buttonStyles}
      onClick={link ? handleExternalLink : undefined}
      disabled={!link}
      {...props}
    >
      {text}
    </button>
  );
};

export default ButtonProp;
