import { Outlet } from "react-router-dom";
import { Navbar } from "../components/organisms/Navbar";
import { BackToTopButton } from "../components/utils/BackToTopButton";
import { ArrowUpIcon } from "../assets/icons";
import { ScrollToTop } from "../components/utils/ScrollToTop";

const SharedLayout = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <ScrollToTop />

      <main className="pt-24 bg-blue-950">
        <Outlet />
      </main>
      
      <BackToTopButton
        icon={<ArrowUpIcon className="w-12 h-12" />}
        showAfter={400}
      />
    </div>
  );
};

export default SharedLayout;
