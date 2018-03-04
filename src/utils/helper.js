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
  let parsed = new URL(urlString);
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
 * Converts temperature value from degrees Fahrenheit to degrees Celsius
 * @param {number} value - current value in degrees Fahrenheit
 * @returns {number} value in degrees Celsius
 */
export function toCelsius(value) {
  return Math.round((value - 32) / 1.8);
}

/**
 * Converts velocity value from meters per second to miles per hour
 * @param {number} value - current value in m/s
 * @returns {number} value in mph
 */
export function toMph(value) {
  return Math.round(value * 2.25);
}

/**
 * Converts velocity value from miles per hour to meters per second
 * @param {number} value - current value in mph
 * @returns {number} value in m/s
 */
export function toMs(value) {
  return Math.round(value / 2.25);
}

/**
 * Clears content of the specified html element
 * @param {HTMLElementObject} selectId - html element
 */
export function clearSelect(selectId) {
  while (selectId.firstChild) {
    selectId.removeChild(selectId.firstChild);
  }
}

/**
 * Populates <select> html element with child elements
 * @param {Document} doc - current Document object
 * @param {HTMLElementObject} selectId - html element
 * @param {[]]} data - data to insert
 * @param {string} direction - in "normal" or "reverse" direction
 */
export function populateSelect(doc, selectId, data, direction) {
  let opt = null;
  if (direction == "normal") {
    for (let elem of data) {
      opt = doc.createElement("option");
      opt.value = elem;
      selectId.appendChild(opt);
    }
  } else if (direction == "reverse") {
    for (let i = data.length - 1; i >= 0; i--) {
      opt = doc.createElement("option");
      opt.value = data[i];
      selectId.appendChild(opt);
    }
  }
}

/**
 * Helper function for 'add favorite' button listener
 * @param {Document} doc - current Document object
 * @param {WeatherController} controller - current WeatherController object
 * @param {HTMLElementObject} favListId - html element
 */
export function addFavoriteLocation(doc, controller, favListId) {
  console.log("Inside add favorite listener");
  let result = controller.addFavorite();
  if (result) {
    clearSelect(favListId);
    populateSelect(
      doc,
      favListId,
      controller.getFavorites(),
      "normal"
    );
  }
};
