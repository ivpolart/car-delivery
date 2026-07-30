import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "rounded-lg px-6 py-3 font-bold transition cursor-pointer",
        {
          "bg-orange-600 text-white hover:bg-orange-700": variant === "primary",
          "bg-white text-orange-600 hover:bg-orange-200":variant === "secondary",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}