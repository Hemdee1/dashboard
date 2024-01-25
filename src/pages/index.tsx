import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Layout from "@/components/layout";
import SalesTrend from "@/components/salesTrend";
import LastOrder from "@/components/lastOrder";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function Home() {
  return (
    // <div className={`${jakarta.className} ${inter.variable}`}>
    <div className={`${jakarta.className} ${inter.variable}`}>
      <Layout>
        <div className="pl-[100px] pt-[106px] pb-5 pr-5 bg-[#FAFAFA] space-y-5">
          <SalesTrend />
          <LastOrder />
        </div>
      </Layout>
    </div>
  );
}
