import { z } from '@hono/zod-openapi';

export const WorkHoursSchema = z.object({
  start: z.string(), // e.g., "09:00"
  end: z.string(),   // e.g., "17:00"
});

export const BarberSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  workSchedule: z.object({
    monday: WorkHoursSchema.optional(),
    tuesday: WorkHoursSchema.optional(),
    wednesday: WorkHoursSchema.optional(),
    thursday: WorkHoursSchema.optional(),
    friday: WorkHoursSchema.optional(),
    saturday: WorkHoursSchema.optional(),
    sunday: WorkHoursSchema.optional(),
  }),
}).openapi('Barber');

export type Barber = z.infer<typeof BarberSchema>;
