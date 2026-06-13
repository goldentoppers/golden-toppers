import { useContext } from "react";
import { GlobalControlOptionsContext } from "../contexts/GlobalControlOptionsContext";
import { InputLabel } from "./common/InputLabel";

export const DogNameInput = () => {
  const context = useContext(GlobalControlOptionsContext);

  const formData = context?.formData ?? { dogName: "" };
  const setFormData = context?.setFormData ?? (() => {});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Allows standard alphabet characters and spaces to keep summaries clean
    const cleanValue = e.target.value.replace(/[^a-zA-Z\s&]/g, "");
    setFormData((p) => ({ ...p, dogName: cleanValue }));
  };

  return (
    <div className="relative flex w-full min-w-[250px] flex-col items-start font-sans select-none">
      <InputLabel htmlFor="canine-name-field">Dog's Name</InputLabel>
      <div
        className="flex w-full items-center justify-between rounded-full border border-white/40
          bg-white/40 px-5 py-2.5 shadow-sm backdrop-blur-md transition-all duration-300
          focus-within:border-stone-300/80 focus-within:bg-white/60 focus-within:shadow-md"
      >
        <input
          id="canine-name-field"
          type="text"
          maxLength={20}
          value={formData.dogName}
          onChange={handleInputChange}
          placeholder="e.g. Charlie"
          className="w-full border-none bg-transparent p-0 text-left font-sans text-sm font-semibold
            tracking-wide text-stone-800 placeholder-stone-400/70 outline-none"
        />
      </div>
    </div>
  );
};
