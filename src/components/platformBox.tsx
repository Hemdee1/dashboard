import { topPlatformData } from "@/data";

const PlatformBox = ({ data }: { data: (typeof topPlatformData)[0] }) => {
  const { color, interest, level, price, title } = data;

  return (
    <article className="space-y-4">
      <h2 className="text-[#22242C] text-lg font-semibold">{title}</h2>
      <div className="w-full h-3 rounded-full bg-[#F5F5F5] relative">
        <span
          className="absolute inset-y-0 left-0 w-[30%] bg-secondary rounded-full"
          style={{ background: color, width: `${level}%` }}
        />
      </div>
      <div className="flex justify-between gap-5 text-lg text-[#525252]">
        <span> ${price}</span>
        <span>+{interest}%</span>
      </div>
    </article>
  );
};

export default PlatformBox;
