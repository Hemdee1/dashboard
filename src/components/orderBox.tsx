import { DownloadIcon } from "@/icons";
import Image from "next/image";

type OrderType = {
  img: string;
  name: string;
  date: string;
  amount: string;
  status: string;
};

const OrderBox = ({ order }: { order: OrderType }) => {
  const { amount, date, img, name, status } = order;
  return (
    <article className="py-4 flex items-center">
      <div className="flex gap-2.5 items-center flex-[1.5]">
        <Image alt={name} src={img} height={32} width={32} />
        <span className="text-secondary font-medium">{name}</span>
      </div>
      <span className="flex-[1] text-[#737373]">{date}</span>
      <span className="text-[#0D062D] font-medium flex-[1]">${amount}</span>
      <span
        className={`capitalize flex-[1] ${
          status === "paid" ? "text-primary" : "text-error"
        }`}
      >
        {status}
      </span>
      <button className="flex flex-[0.5] gap-1.5 items-center text-sm">
        <DownloadIcon />
        View
      </button>
    </article>
  );
};

export default OrderBox;