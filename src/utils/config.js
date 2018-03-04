// Base URL for icons
export const ICON_BASE = "https://www.weatherbit.io/static/img/icons/";

// Weekday names array
export const DAY_OF_WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

// number of days to forecast
export const numOfDays = 7;

// Value, that limits number of entries in history or favorites lists
export const limit = 30;

// Unit systems
export const unitSystems = {
  metric: {
    name: "metric",
    code: "M",
    temperatureUnit: "C",
    velocityUnit: "m/s"
  },
  imperial: {
    name: "imperial",
    code: "I",
    temperatureUnit: "F",
    velocityUnit: "mph"
  }
};
