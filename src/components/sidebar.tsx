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
} from "@/icons";

const Sidebar = () => {
  return (
    <aside className="w-20 z-50 h-screen overflow-y-scroll 2xl:overflow-y-visible scrollbar flex flex-col justify-between gap-10 py-5 bg-[#F7F8FA] fixed left-0 top-0 border-r border-[#EBECF2]">
      <div className="flex flex-col gap-6 2xl:gap-8 items-center">
        <button>
          <Logo />
        </button>

        <button className="p-2 rounded-full bg-transparent hover:bg-primary/20 transition-colors duration-500">
          <CategoryIcon />
        </button>

        <button className="p-2 rounded-full bg-transparent hover:bg-primary/20 transition-colors duration-500">
          <TrendUpIcon />
        </button>

        <button className="p-2 rounded-full bg-transparent hover:bg-primary/20 transition-colors duration-500">
          <ProfileIcon />
        </button>

        <button className="p-2 rounded-full bg-transparent hover:bg-primary/20 transition-colors duration-500">
          <BoxIcon />
        </button>

        <button className="p-2 rounded-full bg-transparent hover:bg-primary/20 transition-colors duration-500">
          <DiscountIcon />
        </button>

        <button className="p-2 rounded-full bg-transparent hover:bg-primary/20 transition-colors duration-500">
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
        <button className="p-2 rounded-full bg-transparent hover:bg-primary/20 transition-colors duration-500">
          <ArrowRightIcon />
        </button>

        <button className="p-2 rounded-full bg-transparent hover:bg-primary/20 transition-colors duration-500">
          <SettingIcon />
        </button>

        <button className="p-2 rounded-full bg-transparent hover:bg-primary/20 transition-colors duration-500">
          <LogoutIcon />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
