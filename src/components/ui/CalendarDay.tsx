import React from "react";

interface CalendarDayProps {
  date: Date | null;
  isFirstDayOfMonth: boolean;
}

export const CalendarDay: React.FC<CalendarDayProps> = ({ date, isFirstDayOfMonth }) => {
  console.log(isFirstDayOfMonth);
  const currentDate = new Date();
  if (!date) {
    return <div className=" p-2 h-36"></div>;
  }

  return (
    <div
      className={`border p-2 h-36 
    ${
      // if the is matched of current date then color it
      date.getDate() === currentDate.getDate() &&
      date.getMonth() === currentDate.getMonth() &&
      date.getFullYear() === currentDate.getFullYear()
        ? "bg-blue-200"
        : ""
    }
    `}
    >
      <div className="font-bold mb-1">{date.getDate()}</div>
    </div>
  );
};
