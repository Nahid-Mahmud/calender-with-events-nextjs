import React from "react";
import { CalendarDay } from "./CalendarDay";
import { Event } from "./sampleEvents";

interface WeekRowProps {
  days: (number | null)[];
  events: Event[];
  year: number;
  month: number;
}

export const WeekRow: React.FC<WeekRowProps> = ({ days, events, year, month }) => {
  const weekEvents = events.filter((event) => {
    const eventStart = new Date(event.startDate);
    const eventEnd = new Date(event.endDate);
    const weekStart = new Date(year, month, days[0] || 1);
    const weekEnd = new Date(year, month, days[6] || 1);
    return eventStart <= weekEnd && eventEnd >= weekStart;
  });

  return (
    <div className="grid grid-cols-7 gap-2">
      {days.map((day, index) => (
        <CalendarDay key={index} date={day ? new Date(year, month, day) : null} isFirstDayOfMonth={day === 1} />
      ))}
      <div className="col-span-7 -mt-20 grid grid-cols-7 gap-2 pointer-events-none">
        {weekEvents.map((event) => {
          const startDate = new Date(event.startDate);
          const endDate = new Date(event.endDate);
          const startIndex = Math.max(0, startDate.getDate() - (days[0] || 1));
          const endIndex = Math.min(6, endDate.getDate() - (days[0] || 1));
          const span = endIndex - startIndex + 1;

          return (
            <div
              key={event.id}
              className={`col-start-${
                startIndex + 1
              } col-span-${span} bg-blue-500 text-white text-xs p-1 rounded-sm truncate`}
              style={{ gridColumnStart: startIndex + 1, gridColumnEnd: `span ${span}` }}
            >
              {event.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};
