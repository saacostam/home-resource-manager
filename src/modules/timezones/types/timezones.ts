export interface TCountryTimezone {
  country: {
    name: string;
    code: string;
  };
  zones: {
    name: string;
    comments: string;
  }[];
}
