import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { LANGUAGE_VERSIONS } from "../../constants/constants";

type SelectLanguageProps = {
  onChange: (lang: string) => void;
};

export default function SelectLanguage({ onChange }: SelectLanguageProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string>("javascript"); // valor inicial local

  const handleSelect = (label: string) => {
    setSelected(label); // atualiza estado interno
    onChange(label); // comunica ao pai
    setOpen(false); // fecha dropdown
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex cursor-pointer w-30 2xl:w-40 justify-between items-center rounded-md bgThirdColor px-3 py-2 text-xs 2xl:text-sm font-medium text-[#ffffff70] shadow-sm hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#2ea98c] border-[#ffffff50] border"
      >
        {selected}
        <IoIosArrowDown />
      </button>

      {open && (
        <div className="absolute mt-2 w-40 rounded-md bg-neutral-900 shadow-lg ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1">
            {Object.entries(LANGUAGE_VERSIONS).map(([label, version]) => (
              <button
                key={label}
                onClick={() => handleSelect(label)}
                className={`block w-full px-4 py-2 text-sm text-left ${
                  selected === label
                    ? "bg-neutral-800 text-white"
                    : "text-gray-300 hover:bg-neutral-700 hover:text-white"
                }`}
              >
                {label}{" "}
                <span className="text-gray-400 text-xs">({version})</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
