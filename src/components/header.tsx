import { BellIcon, CalendarIcon } from "@/icons";
import SearchBar from "./searchbar";
import UserDropdown from "./userDropdown";

const Header = () => {
  return (
    <header className="pl-[100px] pr-5 h-[88px] w-full fixed left-0 top-0 z-30 bg-[#FAFAFA] flex items-center justify-between gap-10 border-b">
      <button className="text-xl font-semibold">Dashboard</button>
      <div className="flex gap-9 items-center">
        <SearchBar />

        <div className="flex gap-2 items-center">
          <CalendarIcon />
          <span className="font-Inter text-sm font-medium">
            November 15, 2023
          </span>
        </div>

        <button className="h-10 w-10 grid place-content-center border-[0.77px] border-[#DADDDD] rounded-full">
          <BellIcon />
        </button>

        <UserDropdown />
      </div>
    </header>
  );
};

export default Header;