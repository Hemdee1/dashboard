import { SearchIcon } from "@/icons";

const SearchBar = () => {
  return (
    <div className="relative sm:w-[350px] max-w-full pl-10 pr-3 h-10 sm:h-12 bg-white border border-[#DADDDD] rounded-full overflow-hidden">
      <span className="absolute left-3 top-1/2 -translate-y-1/2">
        <SearchIcon />
      </span>
      <input
        type="search"
        name=""
        id=""
        className="h-full w-full outline-none text-sm sm:text-base"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;
