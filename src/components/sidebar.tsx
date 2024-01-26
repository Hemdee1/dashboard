import useOutsideClick from "@/hooks/useOutsideClick";
import {
  CategoryIcon,
  Logo,
  TrendUpIcon,
  ProfileIcon,
  BoxIcon,
  DiscountIcon,
  InfoIcon,
  SunIcon,
  MoonIcon,
  ArrowRightIcon,
  SettingIcon,
  LogoutIcon,
  OpenBar,
} from "@/icons";
import { useState } from "react";

const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const ref = useOutsideClick(() => setOpenSidebar(false));

  return (
    <div ref={ref}>
      {/*SIDEBAR BUTTON  */}
      <button
        className="fixed left-3 top-5 p-2 z-30 sm:hidden rounded-full bg-primary"
        onClick={() => setOpenSidebar((prev) => !prev)}
      >
        <OpenBar />
      </button>

      <aside
        className={`w-20 z-50 h-screen overflow-y-scroll 2xl:overflow-y-visible scrollbar flex flex-col justify-between gap-24 py-5 bg-[#F7F8FA] fixed sm:left-0 top-0 border-r border-[#EBECF2] transition-all duration-500 ${
          openSidebar ? "left-0" : "-left-20"
        }`}
      >
        <div className="flex flex-col gap-6 2xl:gap-8 items-center">
          <button>
            <Logo />
          </button>

          <button className="p-2 rounded-full bg-transparent hover:bg-primary/20 transition-colors duration-500 relative">
            <CategoryIcon />
            <span className="absolute -right-4 2xl:-right-5 top-1/2 -translate-y-1/2">
              <SelectBar />
            </span>
          </button>

          <button className="p-2 rounded-full bg-transparent hover:bg-primary/20 transition-colors duration-500 relative">
            <TrendUpIcon />
          </button>

          <button className="p-2 rounded-full bg-transparent hover:bg-primary/20 transition-colors duration-500 relative">
            <ProfileIcon />
          </button>

          <button className="p-2 rounded-full bg-transparent hover:bg-primary/20 transition-colors duration-500 relative">
            <BoxIcon />
          </button>

          <button className="p-2 rounded-full bg-transparent hover:bg-primary/20 transition-colors duration-500 relative">
            <DiscountIcon />
          </button>

          <button className="p-2 rounded-full bg-transparent hover:bg-primary/20 transition-colors duration-500 relative">
            <InfoIcon />
          </button>

          <div className="w-[46px] p-2 bg-white h-[92px] rounded-full flex flex-col gap-4">
            <button>
              <SunIcon />
            </button>

            <button>
              <MoonIcon />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-6 2xl:gap-8 items-center mb-10">
          <button className="p-2 rounded-full bg-transparent hover:bg-primary/20 transition-colors duration-500 relative">
            <ArrowRightIcon />
          </button>

          <button className="p-2 rounded-full bg-transparent hover:bg-primary/20 transition-colors duration-500 relative">
            <SettingIcon />
          </button>

          <button className="p-2 rounded-full bg-transparent hover:bg-primary/20 transition-colors duration-500 relative">
            <LogoutIcon />
          </button>
        </div>
      </aside>
    </div>
  );
};

const SelectBar = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="3"
    height="21"
    viewBox="0 0 3 21"
    fill="none"
  >
    <path
      d="M6.53467e-06 3.02509C7.11773e-06 1.42129 1.40951 0.182713 3 0.388889V21C1.34315 21 4.88293e-07 19.6569 1.09063e-06 18L6.53467e-06 3.02509Z"
      fill="#0D062D"
    />
  </svg>
);

export default Sidebar;
