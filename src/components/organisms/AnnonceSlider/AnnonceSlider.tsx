import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SlideProgress } from "../../atoms/SlideProgress";
import { ConsulatBuilding } from "../../../assets/images";

type Announcement = {
  id: number;
  title: string;
  text: string;
  date: string;
  time: string;
  image: string;
};

const ANNOUNCEMENTS: Announcement[] = [
  {
    id: 1,
    title: "Lorem ipsum 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "12 Février 2026",
    time: "09:00",
    image: ConsulatBuilding,
  },
  {
    id: 2,
    title: "Lorem ipsum 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "01 Mars 2026",
    time: "08:30",
    image: ConsulatBuilding,
  },
  {
    id: 3,
    title: "Lorem ipsum 3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "20 Mars 2026",
    time: "10:00",
    image: ConsulatBuilding,
  },
];

const AUTO_SLIDE_DELAY = 6000;
const MAX_CHARS = 140;

const AnnonceSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const navigate = useNavigate();

  const startAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = window.setInterval(() => {
      setCurrentIndex((prev) =>
        prev === ANNOUNCEMENTS.length - 1 ? 0 : prev + 1,
      );
      setProgressKey((k) => k + 1);
    }, AUTO_SLIDE_DELAY);
  };

  useEffect(() => {
    startAutoSlide();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const current = ANNOUNCEMENTS[currentIndex];
  const isLong = current.text.length > MAX_CHARS;

  const displayText = isLong
    ? `${current.text.slice(0, MAX_CHARS)}…`
    : current.text;

  const handleReadMore = () => {
    navigate(`/annonces/${current.id}`);
  };

  return (
    <section className="w-full">
      <div className="bg-gray-100 rounded shadow p-6 flex flex-col gap-4">
        {/* Progress Bars */}
        <SlideProgress
          count={ANNOUNCEMENTS.length}
          activeIndex={currentIndex}
          duration={AUTO_SLIDE_DELAY}
          progressKey={progressKey}
          onSelect={(index) => {
            setCurrentIndex(index);
            setProgressKey((k) => k + 1);
            startAutoSlide();
          }}
        />

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-6 min-h-72">
          {/* Image */}
          <div className="w-full md:w-1/3 h-48 md:h-auto shrink-0">
            <img
              src={current.image}
              alt={current.title}
              className="w-full h-full object-cover rounded"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-2/3 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">{current.title}</h3>

              <p className="text-sm text-gray-700">{displayText}</p>

              {isLong && (
                <button
                  onClick={handleReadMore}
                  className="mt-2 text-sm font-semibold text-blue-600 hover:underline"
                >
                  Lire la suite
                </button>
              )}
            </div>

            <div className="text-xs text-gray-500 mt-4">
              {current.date} — {current.time}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnnonceSlider;
