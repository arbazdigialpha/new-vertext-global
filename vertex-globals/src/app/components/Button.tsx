"use client";

import React from "react";

type Props = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
};

const Button = ({ children, type = "button", onClick, className, ariaLabel }: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`btn btn-primary ${className || ""}`.trim()}
    >
      {children}
    </button>
  );
};

export default Button;
