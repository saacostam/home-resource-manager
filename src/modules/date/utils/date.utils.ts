export const DateUtils = {
  toIso8601DateOnly: (date: Date): string => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${String(year)}-${month}-${day}`;
  },
};
