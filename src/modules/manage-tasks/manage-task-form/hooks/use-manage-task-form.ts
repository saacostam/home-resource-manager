import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// --- Cadence Validator ---
const cadenceOneTime = z.object({
  type: z.literal("one-time"),
});

const cadenceDaily = z.object({
  type: z.literal("daily"),
});

const cadenceWeekly = z.object({
  type: z.literal("weekly"),
  dayOfTheWeek: z.number().int().min(0).max(6),
});

const cadenceMonthlyByDay = z.object({
  type: z.literal("monthly-by-day"),
  dayOfTheMonth: z.number().int().min(1).max(31),
});

const cadenceMonthlyByWeekday = z.object({
  type: z.literal("monthly-by-weekday"),
  weekOfTheMonth: z.number().int().min(1).max(5),
  dayOfTheWeek: z.number().int().min(0).max(6),
});

const cadenceYearlyByDay = z.object({
  type: z.literal("yearly-by-day"),
  dayOfTheYear: z.number().int().min(1).max(366),
});

const cadenceTimeBased = z.object({
  type: z.literal("time-based-recurrence"),
  timeFrame: z.enum(["day", "week", "month"]),
  amount: z.number().int().min(1),
});

const cadenceField = z.discriminatedUnion("type", [
  cadenceOneTime,
  cadenceDaily,
  cadenceWeekly,
  cadenceMonthlyByDay,
  cadenceMonthlyByWeekday,
  cadenceYearlyByDay,
  cadenceTimeBased,
]);

// --- Task Schema ---
const taskSchema = z.object({
  name: z.string().min(1).max(40),
  description: z.string().max(255).nullable(),
  resourcesIds: z.array(z.string()).nullable(),
  categoryId: z.string().nullable(),
  cadence: cadenceField,
  anchorDate: z.string(),
});

export type TManageTaskForm = z.infer<typeof taskSchema>;

export interface useManageTaskFormProps {
  defaultValues: TManageTaskForm;
}

export function useManageTaskForm({ defaultValues }: useManageTaskFormProps) {
  return useForm({
    defaultValues,
    resolver: zodResolver(taskSchema),
  });
}
