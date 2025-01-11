import React, { useState } from "react";
import { CalendarDay } from "./CalendarDay";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Event } from "./sampleEvents";

interface CalendarProps {
  events: Event[];
  initialMonth: number;
  initialYear: number;
}

export const Calendar: React.FC<CalendarProps> = ({ events, initialMonth, initialYear }) => {
  const [month, setMonth] = useState(initialMonth);
  const [year, setYear] = useState(initialYear);

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const calendarDays = Array(35).fill(null);

  days.forEach((day, index) => {
    calendarDays[index + firstDayOfMonth] = day;
  });

  const getEventsForDate = (date: Date) => {
    return events.filter(
      (event) =>
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear()
    );
  };

  const goToPreviousMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const goToNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const handleYearChange = (selectedYear: string) => {
    setYear(parseInt(selectedYear, 10));
  };

  const yearOptions = Array.from({ length: 10 }, (_, i) => year - 5 + i);

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <Button onClick={goToPreviousMonth} variant="outline" size="icon">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div className="flex items-center">
          <h2 className="text-2xl font-bold mr-4">
            {new Date(year, month).toLocaleString("default", { month: "long" })}
          </h2>
          <Select onValueChange={handleYearChange} value={year.toString()}>
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder={year.toString()} />
            </SelectTrigger>
            <SelectContent>
              {yearOptions.map((yearOption) => (
                <SelectItem key={yearOption} value={yearOption.toString()}>
                  {yearOption}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button onClick={goToNextMonth} variant="outline" size="icon">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="font-bold text-center">
            {day}
          </div>
        ))}
        {calendarDays.map((day, index) => (
          <div key={index}>
            {day !== null && (
              <CalendarDay date={new Date(year, month, day)} events={getEventsForDate(new Date(year, month, day))} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
