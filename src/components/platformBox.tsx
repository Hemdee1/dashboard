import { topPlatformData } from "@/data";
import { motion } from "framer-motion";

const PlatformBox = ({ data }: { data: (typeof topPlatformData)[0] }) => {
  const { color, interest, level, price, title } = data;

  return (
    <article className="space-y-4">
      <h2 className="dark:text-gray-200 text-[#22242C] text-lg font-semibold">
        {title}
      </h2>
      <div className="w-full h-3 rounded-full dark:bg-gray-700 bg-[#F5F5F5] relative">
        <motion.span
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          style={{ background: color }}
          transition={{
            duration: 1.5,
            delay: 0.2,
          }}
          className="absolute inset-y-0 left-0 w-[30%] rounded-full"
        />
      </div>
      <div className="flex justify-between gap-5 text-lg dark:text-gray-500 text-[#525252]">
        <span> ${price}</span>
        <span>+{interest}%</span>
      </div>
    </article>
  );
};

export default PlatformBox;
