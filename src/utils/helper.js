export const bindAll = (context, ...names) => {
  names.forEach(name => {
    if (typeof context[name] === "function") {
      context[name] = context[name].bind(context);
    } else {
      throw Error(
        `Expected function ${name}. Instead received: ${typeof context[name]}`
      );
    }
  });
};

export function isValidCityName(name) {
  return !!name && !/\d/.test(name);
};

/**
 * Extracts base url from full url string
 * @param {string} urlString - current full url string
 * @returns {string} base url
 */
export function extractBase(urlString) {
  return urlString.split("?").slice(0, -1);
}

/**
 * Extracts location from full url string
 * @param {string} urlString - current full url string
 * @returns {string} location
 */
export function parseLocation(urlString) {
  const parsed = new URL(urlString);
  return parsed.searchParams.get("city");
}

/**
 * Converts temperature value from degrees Celsius to degrees Fahrenheit
 * @param {number} value - current value in degrees Celsius
 * @returns {number} value in degrees Fahrenheit
 */
export function toFahrenheit(value) {
  return Math.round(value * 1.8 + 32);
}

/**
 * Converts velocity value from meters per second to miles per hour
 * @param {number} value - current value in m/s
 * @returns {number} value in mph
 */
export function toMph(value) {
  return Math.round(value * 2.25);
}
