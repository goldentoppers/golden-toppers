import React from "react";

interface InputLabelProps {
  children: React.ReactNode;
  htmlFor: string;
}

export const InputLabel: React.FC<InputLabelProps> = ({ children, htmlFor }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 text-[10px] font-black tracking-[0.25em] text-stone-800 uppercase
        transition-colors duration-200 group-hover:text-stone-950"
    >
      {children}
    </label>
  );
};
