import { useState } from "react";
import { HOLIDAYS_2026, type Holiday } from "../../../data/holidays";
import { MonthHolidayList } from "../../molecules/MonthHolidaysList";

const DAYS = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
const MONTHS = [
  "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre",
];

const HolidayCalendar = () => {
  const [month, setMonth] = useState(0);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const firstDay = new Date(2026, month, 1).getDay() || 7;
  const daysInMonth = new Date(2026, month + 1, 0).getDate();

  const monthHolidays = HOLIDAYS_2026.filter(h => h.month === month);

  const getHolidaysForDay = (day: number): Holiday[] =>
    monthHolidays.filter(h => h.days.includes(day));

  return (
    <section className="bg-white rounded shadow p-6 text-black">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => setMonth(m => (m === 0 ? 11 : m - 1))}
          className="text-sm font-semibold"
        >
          ←
        </button>

        <h2 className="font-bold text-lg">
          {MONTHS[month]} 2026
        </h2>

        <button
          onClick={() => setMonth(m => (m === 11 ? 0 : m + 1))}
          className="text-sm font-semibold"
        >
          →
        </button>
      </div>

      {/* Days header */}
      <div className="grid grid-cols-7 text-xs text-gray-500 mb-2">
        {DAYS.map(d => (
          <div key={d} className="text-center">{d}</div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: firstDay - 1 }).map((_, i) => (
          <div key={i} />
        ))}

        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const holidays = getHolidaysForDay(day);

          return (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`h-12 rounded flex flex-col items-center justify-center text-sm
                ${holidays.length ? "bg-blue-100 font-semibold" : "hover:bg-gray-100"}
              `}
            >
              {day}
              {holidays.length > 0 && (
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1" />
              )}
            </button>
          );
        })}
      </div>

      {/* Selected day details */}
      {selectedDay && (
        <div className="mt-4 text-sm">
          <strong>{selectedDay} {MONTHS[month]}</strong>
          <ul className="mt-1 list-disc list-inside">
            {getHolidaysForDay(selectedDay).map(h => (
              <li key={h.id}>{h.name}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Month holiday list (UX preserved) */}
      <MonthHolidayList
        month={month}
        monthLabel={MONTHS[month]}
        holidays={monthHolidays}
      />
    </section>
  );
};

export default HolidayCalendar;
