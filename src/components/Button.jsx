import React from "react";
import clsx from "clsx";

const Button = ({ children, variant = "primary", className = "", ...props }) => {
  const base = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary";
  const variants = {
    primary: "bg-primary hover:bg-primary-700 text-white shadow-md hover:shadow-lg active:scale-95",
    secondary: "bg-secondary hover:bg-secondary-700 text-white shadow-md hover:shadow-lg active:scale-95",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors",
    ghost: "text-primary hover:bg-primary-50 dark:hover:bg-primary-900",
  };
  return (
    <button className={clsx(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
