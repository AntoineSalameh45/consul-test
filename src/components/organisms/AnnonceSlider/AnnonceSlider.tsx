import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SlideProgress } from "../../atoms/SlideProgress";
import { ANNOUNCEMENTS } from "../../../data/announcements";

const AUTO_SLIDE_DELAY = 6000;
const MAX_CHARS = 140;
const SWIPE_THRESHOLD = 50;

const AnnonceSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  const intervalRef = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const navigate = useNavigate();

  const clearAutoSlide = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startAutoSlide = useCallback(() => {
    clearAutoSlide();

    intervalRef.current = window.setInterval(() => {
      setCurrentIndex((i) =>
        i === ANNOUNCEMENTS.length - 1 ? 0 : i + 1,
      );
      setProgressKey((k) => k + 1);
    }, AUTO_SLIDE_DELAY);
  }, [clearAutoSlide]);

  useEffect(() => {
    startAutoSlide();
    return clearAutoSlide;
  }, [startAutoSlide, clearAutoSlide]);

  const nextSlide = () => {
    setCurrentIndex((i) => (i + 1) % ANNOUNCEMENTS.length);
    setProgressKey((k) => k + 1);
    startAutoSlide();
  };

  const prevSlide = () => {
    setCurrentIndex((i) =>
      i === 0 ? ANNOUNCEMENTS.length - 1 : i - 1,
    );
    setProgressKey((k) => k + 1);
    startAutoSlide();
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const deltaX =
      e.changedTouches[0].clientX - touchStartX.current;

    if (Math.abs(deltaX) > SWIPE_THRESHOLD) {
      if (deltaX > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }

    touchStartX.current = null;
  };

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

        <div
          className="relative flex flex-col md:flex-row gap-6 min-h-72"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Prev */}
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2
                       bg-white/80 hover:bg-white rounded-full p-2 shadow"
            aria-label="Annonce précédente"
          >
            ‹
          </button>

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
              <h3 className="text-xl font-bold mb-2">
                {current.title}
              </h3>

              <p className="text-sm text-gray-700">
                {displayText}
              </p>

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

          {/* Next */}
          <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2
                       bg-white/80 hover:bg-white rounded-full p-2 shadow"
            aria-label="Annonce suivante"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default AnnonceSlider;
