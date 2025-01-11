"use client";

import { Calendar } from "@/components/ui/Calendar";
import { sampleEvents } from "@/components/ui/sampleEvents";
import React from "react";

export default function Home() {
  // Using the current month and year
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Big Calendar with Events</h1>
      <Calendar events={sampleEvents} initialMonth={currentMonth} initialYear={currentYear} />
    </div>
  );
}
