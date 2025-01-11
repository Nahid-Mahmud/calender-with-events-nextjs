export interface Event {
  id: number;
  name: string;
  startDate: Date;
  endDate: Date;
}

export const sampleEvents: Event[] = [
  { id: 1, name: "Team Meeting", startDate: new Date(2025, 0, 5), endDate: new Date(2025, 0, 5) },
  {
    id: 25,
    name: "Long Event",
    startDate: new Date(2025, 0, 5),
    endDate: new Date(2025, 0, 5),
  },
  // { id: 2, name: "Project Deadline", startDate: new Date(2025, 0, 13), endDate: new Date(2025, 0, 15) },
  //   { id: 3, name: "Conference Call", startDate: new Date(2025, 0, 7), endDate: new Date(2025, 0, 7) },
  //   { id: 4, name: "Birthday Party", startDate: new Date(2025, 0, 20), endDate: new Date(2025, 0, 20) },
  //   { id: 5, name: "Dentist Appointment", startDate: new Date(2025, 0, 10), endDate: new Date(2025, 0, 10) },
  //   { id: 6, name: "Movie Night", startDate: new Date(2025, 0, 25), endDate: new Date(2025, 0, 25) },
  //   { id: 7, name: "Gym Session", startDate: new Date(2025, 0, 3), endDate: new Date(2025, 0, 3) },
  //   { id: 8, name: "Lunch with Client", startDate: new Date(2025, 0, 18), endDate: new Date(2025, 0, 18) },
  //   { id: 9, name: "Code Review", startDate: new Date(2025, 0, 22), endDate: new Date(2025, 0, 22) },
  //   { id: 10, name: "Family Dinner", startDate: new Date(2025, 0, 30), endDate: new Date(2025, 0, 30) },
  //   { id: 11, name: "Winter Conference", startDate: new Date(2025, 0, 12), endDate: new Date(2025, 0, 18) },
  //   { id: 12, name: "Team Building Workshop", startDate: new Date(2025, 0, 14), endDate: new Date(2025, 0, 17) },
  //   { id: 13, name: "Product Launch", startDate: new Date(2025, 0, 1), endDate: new Date(2025, 0, 3) },
  //   { id: 14, name: "Annual Review", startDate: new Date(2025, 0, 28), endDate: new Date(2025, 1, 2) },
];
