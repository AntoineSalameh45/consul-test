import type { Holiday } from "../../../data/holidays";

type Props = {
  month: number;
  monthLabel: string;
  holidays: Holiday[];
};

const MonthHolidayList = ({ monthLabel, holidays }: Props) => {
  if (holidays.length === 0) {
    return (
      <div className="mt-6 text-sm text-gray-500 italic">
        Aucun jour férié en {monthLabel.toLowerCase()}.
      </div>
    );
  }

  return (
    <div className="mt-6">
      <h3 className="font-semibold text-sm mb-2">
        Jours fériés – {monthLabel}
      </h3>

      <ul className="divide-y divide-gray-400 text-sm">
        {holidays.map((h) => (
          <li
            key={h.id}
            className="py-2 flex justify-between items-center"
          >
            <span>{h.name}</span>
            <span className="text-gray-600">
              {h.days.join(" / ")}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MonthHolidayList;
