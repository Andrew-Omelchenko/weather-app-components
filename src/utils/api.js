const BASE_URL = "https://api.weatherbit.io/v2.0/forecast/daily";
const KEY_MOD = "?key=";
const API_KEY = "91e53c3974b54ac9871fe08adfd31dd9";
const DAYS_MOD = "&days=";
const LOC_MOD = "&city=";
const UNITS_MOD = "&units=";

const init = {
  method: "GET",
  headers: new Headers(),
  mode: "cors",
  cache: "default",
  credentials: "omit"
};

export const getForecast = (loc, days, units) => {
  return fetch(
    `${BASE_URL}${KEY_MOD}${API_KEY}${DAYS_MOD}${days}${UNITS_MOD}${units}${LOC_MOD}${loc}`,
    init
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
    .then(data => {
      return data;
    })
    .catch(error => {
      console.log(error.message);
      if (error.message == "Unexpected end of JSON input") {
        alert("Requested location was not found. Try another one.");
      } else {
        alert("Error occured. Please try later.");
      }
    });
};
