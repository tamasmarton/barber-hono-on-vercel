import type { Barber } from './types.js';

export const barbers: Barber[] = [
  {
    name: "Kovács János",
    workSchedule: {
      monday: { start: "09:00", end: "17:00" },
      tuesday: { start: "09:00", end: "17:00" },
      wednesday: { start: "09:00", end: "17:00" },
      thursday: { start: "09:00", end: "17:00" },
      friday: { start: "09:00", end: "16:00" },
    },
  },
  {
    name: "Nagy Péter",
    workSchedule: {
      tuesday: { start: "10:00", end: "18:00" },
      wednesday: { start: "10:00", end: "18:00" },
      thursday: { start: "10:00", end: "18:00" },
      friday: { start: "10:00", end: "18:00" },
      saturday: { start: "09:00", end: "14:00" },
    },
  }
];
