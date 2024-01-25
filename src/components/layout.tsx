import Header from "./header";
import Sidebar from "./sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Sidebar />
      <Header />
      <div className="pl-[100px] pt-[106px] pb-5 pr-5 bg-[#FAFAFA]">
        {children}
      </div>
    </>
  );
};

export default Layout;
