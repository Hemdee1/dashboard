import { range, salesData } from "@/data";
import ArrowDownIcon from "@/icons/arrowDown";

const SalesTrend = () => {
  return (
    <section className="w-[806px] h-[374px] py-4 px-5 bg-white border border-[#EDF2F7] rounded-[14px]">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Sales Trends</h2>
        <div className="flex gap-2.5 items-center">
          <h4 className="text-sm font-medium">Sort by :</h4>
          <div className="flex px-4 py-2 gap-2.5 items-center rounded-full border border-[#E1DFDF] cursor-pointer">
            <span className="text-xs font-Inter">Weekly</span>
            <ArrowDownIcon />
          </div>
        </div>
      </div>

      <div className="mt-4 flex h-[255px] gap-6 relative">
        <div className="w-[46px]">
          <div className="absolute inset-0 flex flex-col justify-between">
            {range.map((data, index) => (
              <div key={index} className="flex gap-6 justify-end">
                <span className="w-[46px] text-center text-[#898989] text-xs -mb-2">
                  {data}
                  {data === 0 ? "" : ".000"}
                </span>
                <span className="w-full border-b border-dashed" />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-between items-end">
          {salesData.map((data, index) => {
            const { month, sale } = data;
            const highestRange = range[0];
            const rangePercent = (sale / highestRange) * 100;

            return (
              <article
                key={index}
                style={{ height: `${rangePercent}%` }}
                className="w-[30px] bg-primary/10 rounded-t-full group relative"
              >
                <Tooltip sale={sale} />
                <GradientAnimation />
                <span className="absolute -bottom-8 left-0 text-sm text-center text-[#898989]">
                  {month}
                </span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Tooltip = ({ sale }: { sale: number }) => (
  <span className="absolute -top-9 opacity-0 left-1/2 -translate-x-1/2 text-xs font-medium bg-[#090C2C] rounded-md px-3 py-2 text-white transition-all duration-300 group-hover:-top-12 group-hover:opacity-100">
    ${sale}.000
    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 border-[10px] border-b-0 border-t-[#090C2C] border-l-transparent border-r-transparent" />
  </span>
);

const GradientAnimation = () => (
  <>
    <span className="absolute rounded-t-full bg-gradient-new inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100" />
    <span className="absolute rounded-t-full bg-primary/10 inset-0 opacity-100 transition-all duration-500 group-hover:opacity-0" />
  </>
);

export default SalesTrend;
