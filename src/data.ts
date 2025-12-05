import type { Barber } from './types.js';

export const barbers: Barber[] = [
  {
    name: "Kovács János",
    workSchedule: {
      Monday: { start: "09:00", end: "17:00" },
      Tuesday: { start: "09:00", end: "17:00" },
      Wednesday: { start: "09:00", end: "17:00" },
      Thursday: { start: "09:00", end: "17:00" },
      Friday: { start: "09:00", end: "16:00" },
    },
  },
  {
    name: "Nagy Péter",
    workSchedule: {
      Tuesday: { start: "10:00", end: "18:00" },
      Wednesday: { start: "10:00", end: "18:00" },
      Thursday: { start: "10:00", end: "18:00" },
      Friday: { start: "10:00", end: "18:00" },
      Saturday: { start: "09:00", end: "14:00" },
    },
  }
];
