import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Layout from "@/components/layout";
import SalesTrend from "@/components/salesTrend";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function Home() {
  return (
    <div className={`${jakarta.className} ${inter.variable}`}>
      <Layout>
        <SalesTrend />
      </Layout>
    </div>
  );
}
