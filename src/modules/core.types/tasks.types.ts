export type TCadence =
  | {
      type: "one-time";
    }
  | {
      type: "daily";
    }
  | {
      type: "weekly";
      dayOfTheWeek: number;
    }
  | {
      type: "monthly-by-day";
      dayOfTheMonth: number;
    }
  | {
      type: "monthly-by-weekday";
      weekOfTheMonth: number;
      dayOfTheWeek: number;
    }
  | {
      type: "yearly-by-day";
    }
  | {
      type: "time-based-recurrence";
      timeFrame: "day" | "week" | "month";
      amount: number;
    };
