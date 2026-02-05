type SlideProgressProps = {
  count: number;
  activeIndex: number;
  duration: number;
  progressKey: number;
  onSelect: (index: number) => void;
};

const SlideProgress = ({
  count,
  activeIndex,
  duration,
  progressKey,
  onSelect,
}: SlideProgressProps) => {
  return (
    <div className="flex gap-2">
      {Array.from({ length: count }).map((_, index) => {
        const isActive = index === activeIndex;
        const isPast = index < activeIndex;

        return (
          <button
            key={index}
            onClick={() => onSelect(index)}
            className="flex-1 h-1 bg-gray-300 rounded overflow-hidden"
            aria-label={`Slide ${index + 1}`}
          >
            <div
              key={isActive ? progressKey : undefined}
              className={`h-full bg-blue-600`}
              style={{
                width: isPast ? "100%" : isActive ? "100%" : "0%",
                animation: isActive
                  ? `slide-progress ${duration}ms linear`
                  : "none",
              }}
            />
          </button>
        );
      })}
    </div>
  );
};

export default SlideProgress;
