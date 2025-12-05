import { z } from '@hono/zod-openapi';

export const WorkHoursSchema = z.object({
  start: z.string(), // e.g., "09:00"
  end: z.string(),   // e.g., "17:00"
});

export const BarberSchema = z.object({
  name: z.string(),
  workSchedule: z.object({
    Monday: WorkHoursSchema.optional(),
    Tuesday: WorkHoursSchema.optional(),
    Wednesday: WorkHoursSchema.optional(),
    Thursday: WorkHoursSchema.optional(),
    Friday: WorkHoursSchema.optional(),
    Saturday: WorkHoursSchema.optional(),
    Sunday: WorkHoursSchema.optional(),
  }),
}).openapi('Barber');

export type Barber = z.infer<typeof BarberSchema>;
