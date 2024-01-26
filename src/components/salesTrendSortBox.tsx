import useOutsideClick from "@/hooks/useOutsideClick";
import ArrowDownIcon from "@/icons/arrowDown";
import { useState } from "react";

const SalesTrendSortBox = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const ref = useOutsideClick(() => setOpenDropdown(false));
  const [sortBy, setSortBy] = useState("Weekly");

  const sortLevel = ["Daily", "Weekly", "Monthly"];

  return (
    <div className="relative" ref={ref}>
      <div
        className="flex px-4 py-2 gap-1 sm:gap-2.5 items-center rounded-full border border-[#E1DFDF] cursor-pointer"
        onClick={() => setOpenDropdown((prev) => !prev)}
      >
        <span className="text-xs font-Inter">{sortBy}</span>
        <ArrowDownIcon />
      </div>

      <div
        className={`absolute right-0 z-10 w-full bg-white shadow border border-[#DADDD] rounded-lg transition-all duration-500 ${
          openDropdown
            ? "top-[40px] opacity-100 visible"
            : "top-[20px] opacity-0 invisible"
        }`}
      >
        <div className="w-full text-xs divide-y-2">
          {sortLevel.map((level, index) => (
            <button
              key={index}
              onClick={() => {
                setSortBy(level);
                setOpenDropdown(false);
              }}
              className="px-5 py-2 w-full transition-color duration-500 hover:bg-gray-100 bg-transparent"
            >
              {level}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesTrendSortBox;
