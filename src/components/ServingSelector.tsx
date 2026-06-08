import React, { useContext } from "react";
import { GlobalControlOptionsContext } from "../contexts/GlobalControlOptionsContext";

export default function ServingSelector(): React.JSX.Element {
  const context = useContext(GlobalControlOptionsContext);

  // Safe default fallback props to prevent rendering breakage inside sandbox pipelines
  const formData = context?.formData ?? { servingSize: 1 };
  const setFormData = context?.setFormData ?? (() => {});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = parseInt(e.target.value, 10);
    if (value === 1 || value === 2) {
      setFormData((p) => ({
        ...p,
        servingSize: value as 1 | 2,
      }));
    }
  };

  return (
    <div className="relative flex flex-col items-start font-sans select-none">
      <fieldset className="m-0 border-none p-0">
        <legend className="sr-only">Number of active recipe servings</legend>

        <div
          className="inline-flex items-center justify-center gap-1 rounded-4xl border
            border-stone-900/3 border-b-white/40 bg-stone-900/4 p-1
            shadow-[inset_0_4px_12px_rgba(28,25,23,0.12),inset_0_1px_4px_rgba(28,25,23,0.08)]
            transition-all duration-300 select-none"
          role="radiogroup"
          aria-label="Servings selector"
        >
          <label
            className="group/srv relative flex h-11 cursor-pointer flex-col items-center
              justify-center rounded-3xl px-6 font-sans text-stone-600 transition-all duration-300
              select-none hover:text-stone-950 has-checked:bg-white/95 has-checked:text-stone-950
              has-checked:shadow-2xs has-checked:backdrop-blur-md has-focus-visible:outline
              has-focus-visible:outline-offset-1 has-focus-visible:outline-stone-500"
          >
            <input
              type="radio"
              name="servings"
              value={1}
              className="sr-only"
              checked={formData.servingSize === 1}
              onChange={handleChange}
            />
            {/* Foreground content rows */}
            <span className="text-sm leading-none font-black">1</span>
            <span className="mt-0.5 text-[9.5px] leading-none font-black tracking-[0.2em] uppercase">
              Serving
            </span>
          </label>

          <label
            className="group/srv relative flex h-11 cursor-pointer flex-col items-center
              justify-center rounded-3xl px-6 font-sans text-stone-600 transition-all duration-300
              select-none hover:text-stone-950 has-checked:bg-white/95 has-checked:text-stone-900
              has-checked:shadow-2xs has-checked:backdrop-blur-md has-focus-visible:outline-2
              has-focus-visible:outline-offset-1 has-focus-visible:outline-stone-500"
          >
            <input
              type="radio"
              name="servings"
              value={2}
              className="sr-only"
              checked={formData.servingSize === 2}
              onChange={handleChange}
            />
            <span className="text-sm leading-none font-black">2</span>
            <span className="mt-0.5 text-[9.5px] leading-none font-black tracking-[0.2em] uppercase">
              Servings
            </span>
          </label>
        </div>
      </fieldset>
    </div>
  );
}
