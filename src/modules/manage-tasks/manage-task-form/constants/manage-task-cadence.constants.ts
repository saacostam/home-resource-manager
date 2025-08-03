import type { TCadence } from "@/modules/core.types";
import { OrderUtils } from "@/modules/order";
import type { useManageTaskForm } from "../hooks";

export const TASK_CADENCE_TYPES: TCadence["type"][] = [
  "daily",
  "monthly-by-day",
  "monthly-by-weekday",
  "one-time",
  "time-based-recurrence",
  "weekly",
  "yearly-by-day",
];

export const cadenceTypeChangeHandler: Record<
  TCadence["type"],
  (form: ReturnType<typeof useManageTaskForm>) => void
> = {
  daily: (form) => {
    form.setValue("cadence", {
      type: "daily",
    });
  },
  "monthly-by-day": (form) => {
    form.setValue("cadence", {
      type: "monthly-by-day",
      dayOfTheMonth: 1,
    });
  },
  "monthly-by-weekday": (form) => {
    form.setValue("cadence", {
      type: "monthly-by-weekday",
      dayOfTheWeek: 1,
      weekOfTheMonth: 1,
    });
  },
  "one-time": (form) => {
    form.setValue("cadence", {
      type: "one-time",
    });
  },
  "time-based-recurrence": (form) => {
    form.setValue("cadence", {
      type: "time-based-recurrence",
      timeFrame: "day",
      amount: 1,
    });
  },
  weekly: (form) => {
    form.setValue("cadence", {
      type: "weekly",
      dayOfTheWeek: 1,
    });
  },
  "yearly-by-day": (form) => {
    form.setValue("cadence", {
      type: "yearly-by-day",
    });
  },
};

export const WEEK_DAYS = [
  {
    value: "0",
    label: "Mon",
  },
  {
    value: "1",
    label: "Tue",
  },
  {
    value: "2",
    label: "Wed",
  },
  {
    value: "3",
    label: "Thu",
  },
  {
    value: "4",
    label: "Fri",
  },
  {
    value: "5",
    label: "Sat",
  },
  {
    value: "6",
    label: "Sun",
  },
];

export const MONTH_WEEKS = [
  {
    value: "1",
    label: "First",
  },
  {
    value: "2",
    label: "Second",
  },
  {
    value: "3",
    label: "Third",
  },
  {
    value: "4",
    label: "Fourth",
  },
  {
    value: "5",
    label: "Last",
  },
];

export const MONTH_DAYS = new Array(31).fill(null).map((_, index) => ({
  value: String(index + 1),
  label: OrderUtils.getOrdinalSuffix(index + 1),
}));

export const TIME_FRAMES = ["day", "week", "month"] as const;
