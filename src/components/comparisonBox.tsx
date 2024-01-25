import { comparisonData } from "@/data";
import { DecreaseGraph, IncreaseGraph } from "@/icons";
import TrendingDownArrow from "@/icons/trendingDownArrow";
import TrendingUpArrow from "@/icons/trendingUpArrow";

const ComparisonBox = ({ data }: { data: (typeof comparisonData)[0] }) => {
  const { Icon, prevMonthValue, rate, title, value } = data;
  const decrease = prevMonthValue > value;

  return (
    <article className="p-4 bg-white w-[240px] border border-[#EDF2F7] rounded-[14px]">
      <div className="flex justify-between items-center">
        <span className="w-10 h-10 border-[0.7px] border-[#E6E6E6] rounded-full grid place-content-center">
          <Icon />
        </span>
        {decrease ? <DecreaseGraph /> : <IncreaseGraph />}
      </div>

      <div className="mt-2.5">
        <h3 className="text-[#898989] font-medium text-lg">{title}</h3>
        <h4 className="text-2xl font-semibold mt-1 text-secondary">
          {title === "Total Income" ? `$${value}.000` : value}
        </h4>
      </div>

      <div className="mt-2.5 flex gap-2.5 items-center">
        <div
          className={`px-2 py-1 flex gap-1 rounded-full bg-opacity-10 ${
            decrease ? "bg-error/10" : "bg-primary/10"
          }`}
        >
          {decrease ? <TrendingDownArrow /> : <TrendingUpArrow />}
          <span
            className={`text-xs font-medium ${
              decrease ? "text-error" : "text-primary"
            }`}
          >
            {rate}%
          </span>
        </div>

        <span className="text-sm font-Inter text-[#606060]">
          vs. previous month
        </span>
      </div>
    </article>
  );
};

export default ComparisonBox;
