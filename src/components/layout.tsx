import Header from "./header";
import Sidebar from "./sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Sidebar />
      <Header />
      {children}
    </>
  );
};

export default Layout;
