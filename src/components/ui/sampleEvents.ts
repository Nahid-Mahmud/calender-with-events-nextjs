export interface Event {
    id: number;
    name: string;
    date: Date;
  }
  
  export const sampleEvents: Event[] = [
    { id: 1, name: "Team Meeting", date: new Date(2025, 0, 5) },
    { id: 2, name: "Project Deadline", date: new Date(2025, 0, 15) },
    { id: 3, name: "Conference Call", date: new Date(2025, 0, 7) },
    { id: 4, name: "Birthday Party", date: new Date(2025, 0, 20) },
    { id: 5, name: "Dentist Appointment", date: new Date(2025, 0, 10) },
    { id: 6, name: "Movie Night", date: new Date(2025, 0, 25) },
    { id: 7, name: "Gym Session", date: new Date(2025, 0, 3) },
    { id: 8, name: "Lunch with Client", date: new Date(2025, 0, 18) },
    { id: 9, name: "Code Review", date: new Date(2025, 0, 22) },
    { id: 10, name: "Family Dinner", date: new Date(2025, 0, 30) },
  ];
  
  