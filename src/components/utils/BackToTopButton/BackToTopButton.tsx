import { useEffect, useState } from "react";

type BackToTopButtonProps = {
  icon: React.ReactNode;
  showAfter?: number;
};

const BackToTopButton = ({ icon, showAfter = 300 }: BackToTopButtonProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > showAfter);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [showAfter]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`
        fixed
        bottom-6
        right-6
        z-50
        rounded-full
        bg-[#0b2c5f]
        text-white
        shadow-lg
        transition-all
        duration-300
        hover:scale-110
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
      `}
    >
      {icon}
    </button>
  );
};

export default BackToTopButton;
