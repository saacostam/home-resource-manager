export const TimezonesUtils = {
  guessDefault() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  },
};
