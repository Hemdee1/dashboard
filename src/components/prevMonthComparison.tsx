import { comparisonData } from "@/data";
import ComparisonBox from "./comparisonBox";

const PrevMonthComparison = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 flex-col sm:flex-row">
        {comparisonData.slice(0, 2).map((data, index) => (
          <ComparisonBox key={index} data={data} />
        ))}
      </div>
      <div className="flex gap-4 flex-col sm:flex-row">
        {comparisonData.slice(2, 4).map((data, index) => (
          <ComparisonBox key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default PrevMonthComparison;
