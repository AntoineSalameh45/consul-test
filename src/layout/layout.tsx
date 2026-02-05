import { Outlet } from "react-router-dom";
import { Navbar } from "../components/organisms/Navbar";
import { BackToTopButton } from "../components/atoms/BackToTopButton";
import { ArrowUpIcon } from "../assets/icons";

const SharedLayout = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-24 bg-blue-950">
        <Outlet />
      </main>
      
      <BackToTopButton
        icon={<ArrowUpIcon className="w-15 h-15" />}
        showAfter={400}
      />
    </div>
  );
};

export default SharedLayout;
