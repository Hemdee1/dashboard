import { comparisonData } from "@/data";
import { BoxTickIcon, IncreaseGraph } from "@/icons";
import TrendingUpArrow from "@/icons/trendingUpArrow";
import ComparisonBox from "./comparisonBox";

const PrevMonthComparison = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        {comparisonData.slice(0, 2).map((data, index) => (
          <ComparisonBox key={index} data={data} />
        ))}
      </div>
      <div className="flex gap-4">
        {comparisonData.slice(2, 4).map((data, index) => (
          <ComparisonBox key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default PrevMonthComparison;
