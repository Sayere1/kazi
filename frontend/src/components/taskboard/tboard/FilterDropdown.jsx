import { useState, useRef, useEffect } from "react";
import { MdExpandMore } from "react-icons/md";

const FilterDropdown = ({ label, value, options, onChange, icon }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex h-9 items-center gap-x-2 rounded-lg bg-background-light dark:bg-gray-800 px-4 border
         border-gray-200 dark:border-gray-700"
      >
        {icon}
        <p className="text-sm font-medium">{label}: {value}</p>
        <MdExpandMore className="text-lg" />
      </button>

      {open && (
        <div className="absolute mt-2 w-40 bg-white dark:bg-gray-800 shadow-lg rounded-lg border
         border-gray-200 dark:border-gray-700 z-20">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 ${
                value === opt ? "font-semibold text-primary" : ""
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
