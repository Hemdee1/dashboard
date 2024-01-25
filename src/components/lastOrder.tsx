import { ordersData } from "@/data";
import { DownloadIcon } from "@/icons";
import Image from "next/image";
import OrderBox from "./orderBox";

const paid = true;

const LastOrder = () => {
  return (
    <section className="w-[806px] py-5 px-5 bg-white border border-[#EDF2F7] rounded-[14px]">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Last Orders</h2>
        <button className="text-lg font-medium text-primary">See All</button>
      </div>

      <div className="mt-4">
        <div className="flex text-[#9CA4AB]">
          <span className="flex-[1.5]">Name</span>
          <span className="flex-[1]">Date</span>
          <span className="flex-[1]">Amount</span>
          <span className="flex-[1]">Status</span>
          <span className="flex-[0.5]">Invoice</span>
        </div>
        <div className="mt-5 border-t border-[#EDF2F6] divide-y divide-[#EDF2F6]">
          {ordersData.map((order, index) => (
            <OrderBox key={index} order={order} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LastOrder;