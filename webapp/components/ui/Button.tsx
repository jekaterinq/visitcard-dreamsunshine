import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-[#8e947f] text-ml text-white hover:bg-[#7b826d] hover:text-white focus:ring-[#c9a86c] shadow-sm cursor-pointer",

    secondary:
      "bg-[#f3efe9] text-[#1f1f1f] hover:bg-[#eae5dd] focus:ring-[#c9a86c]",

    outline:
      "border border-[#c9a86c] text-[#1f1f1f] bg-transparent hover:bg-[#f3efe9] focus:ring-[#c9a86c]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}