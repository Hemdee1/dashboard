import ArrowDownIcon from "@/icons/arrowDown";
import Image from "next/image";

const UserDropdown = () => {
  return (
    <div className="px-2 py-1.5 border border-[#DADDDD] rounded-full flex gap-3 items-center">
      <Image
        alt="user image"
        src="/images/user.png"
        height={45}
        width={45}
        sizes="100vw"
        className="rounded-full"
      />

      <div className="text-right font-Inter">
        <span className="block text-[#26282C] font-medium">Justin Bergson</span>
        <span className="block text-[#787486]">Justin@gmail.com</span>
      </div>

      <button>
        <ArrowDownIcon />
      </button>
    </div>
  );
};

export default UserDropdown;
