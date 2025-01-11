import React from "react";
import { Event } from "./sampleEvents";

interface CalendarDayProps {
  date: Date;
  events: Event[];
}

export const CalendarDay: React.FC<CalendarDayProps> = ({ date, events }) => {
  return (
    <div className="border p-2 h-32 overflow-y-auto">
      <div className="font-bold mb-1">{date.getDate()}</div>
      {events.map((event) => (
        <div key={event.id} className="text-xs bg-blue-100 p-1 mb-1 rounded">
          {event.name}
        </div>
      ))}
    </div>
  );
};
