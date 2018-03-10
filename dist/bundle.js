/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = isValidCityName;
/* unused harmony export extractBase */
/* harmony export (immutable) */ __webpack_exports__["c"] = parseLocation;
/* harmony export (immutable) */ __webpack_exports__["d"] = toFahrenheit;
/* unused harmony export toCelsius */
/* harmony export (immutable) */ __webpack_exports__["e"] = toMph;
/* unused harmony export toMs */
/* unused harmony export clearSelect */
/* unused harmony export populateSelect */
/* unused harmony export addFavoriteLocation */
const bindAll = (context, ...names) => {
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
/* harmony export (immutable) */ __webpack_exports__["a"] = bindAll;


function isValidCityName(name) {
  return !!name && !/\d/.test(name);
};

/**
 * Extracts base url from full url string
 * @param {string} urlString - current full url string
 * @returns {string} base url
 */
function extractBase(urlString) {
  return urlString.split("?").slice(0, -1);
}

/**
 * Extracts location from full url string
 * @param {string} urlString - current full url string
 * @returns {string} location
 */
function parseLocation(urlString) {
  const parsed = new URL(urlString);
  return parsed.searchParams.get("city");
}

/**
 * Converts temperature value from degrees Celsius to degrees Fahrenheit
 * @param {number} value - current value in degrees Celsius
 * @returns {number} value in degrees Fahrenheit
 */
function toFahrenheit(value) {
  return Math.round(value * 1.8 + 32);
}

/**
 * Converts temperature value from degrees Fahrenheit to degrees Celsius
 * @param {number} value - current value in degrees Fahrenheit
 * @returns {number} value in degrees Celsius
 */
function toCelsius(value) {
  return Math.round((value - 32) / 1.8);
}

/**
 * Converts velocity value from meters per second to miles per hour
 * @param {number} value - current value in m/s
 * @returns {number} value in mph
 */
function toMph(value) {
  return Math.round(value * 2.25);
}

/**
 * Converts velocity value from miles per hour to meters per second
 * @param {number} value - current value in mph
 * @returns {number} value in m/s
 */
function toMs(value) {
  return Math.round(value / 2.25);
}

/**
 * Clears content of the specified html element
 * @param {HTMLElementObject} selectId - html element
 */
function clearSelect(selectId) {
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
function populateSelect(doc, selectId, data, direction) {
  let opt = null;
  if (direction === "normal") {
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
function addFavoriteLocation(doc, controller, favListId) {
  // console.log("Inside add favorite listener");
  const result = controller.addFavorite();
  if (result) {
    clearSelect(favListId);
    populateSelect(doc, favListId, controller.getFavorites(), "normal");
  }
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_helper__ = __webpack_require__(0);


class Component {
  constructor(props) {
    this.state = {};
    this.props = props || {};
    this.host = null;

    __WEBPACK_IMPORTED_MODULE_0__utils_helper__["a" /* bindAll */](this, "updateState", "update");
  }

  _render() {
    const children = this.render();

    this.host.innerHTML = "";

    if (typeof children === "string") {
      this.host.innerHTML = children;
    } else if (Array.isArray(children)) {
      this.host.append(... children);
    } else {
      this.host.append(children);
    }

    return this.host;
  }

  update(nextProps) {
    this.props = nextProps;
    return this._render();
  }

  updateState(state) {
    const nextState = Object.assign({}, this.state, state);

    this.state = nextState;
    this._render();

    return nextState;
  }

  render() {}
}

/* harmony default export */ __webpack_exports__["a"] = (Component);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Base URL for icons
const ICON_BASE = "https://www.weatherbit.io/static/img/icons/";
/* harmony export (immutable) */ __webpack_exports__["b"] = ICON_BASE;


// Weekday names array
const DAY_OF_WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
/* harmony export (immutable) */ __webpack_exports__["a"] = DAY_OF_WEEK;


// number of days to forecast
const NUM_OF_DAYS = 7;
/* harmony export (immutable) */ __webpack_exports__["c"] = NUM_OF_DAYS;


// Value, that limits number of entries in history or favorites lists
const limit = 30;
/* unused harmony export limit */


// Unit systems
const unitSystems = {
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
/* unused harmony export unitSystems */



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__App__ = __webpack_require__(4);


const app = new __WEBPACK_IMPORTED_MODULE_0__App__["a" /* default */]({ host: document.getElementById("root") });
app.update();


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_helper__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__framework_Component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_api__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_LocationSearch__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_TodayForecast__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_OtherDaysForecast__ = __webpack_require__(8);
// import * as config from "./src/utils/config";



// import StorageService from "./src/services/StorageService";
// import FavoritesService from "./src/services/FavoritesService";
// import HistoryService from "./src/services/HistoryService";




class App extends __WEBPACK_IMPORTED_MODULE_1__framework_Component__["a" /* default */] {
  constructor({ host }) {
    super();

    this.state = {
      city: __WEBPACK_IMPORTED_MODULE_0__utils_helper__["c" /* parseLocation */](window.location.href) || "",
      todayForecast: null,
      otherDaysForecast: null,
      isMetric: true,
      hasError: false
    };

    __WEBPACK_IMPORTED_MODULE_0__utils_helper__["a" /* bindAll */](this, "onSearchSubmit", "onSwitchUnits");

    this.host = host;

    this.locationSearch = new __WEBPACK_IMPORTED_MODULE_3__components_LocationSearch__["a" /* default */]({
      city: this.state.city,
      onSubmit: this.onSearchSubmit,
      onSwitch: this.onSwitchUnits
    });
    this.todayForecast = new __WEBPACK_IMPORTED_MODULE_4__components_TodayForecast__["a" /* default */]({
      city: this.state.city,
      forecast: this.state.todayForecast
    });
    this.otherDaysForecast = new __WEBPACK_IMPORTED_MODULE_5__components_OtherDaysForecast__["a" /* default */]({
      forecast: this.state.otherDaysForecast
    });
  }

  onSearchSubmit(city) {
    this.getCityForecast(city).then(({ todayForecast, otherDaysForecast }) => {
      this.updateState({
        todayForecast,
        otherDaysForecast,
        city
      });
    });
  }

  onSwitchUnits() {
    this.state.isMetric = !this.state.isMetric;
    this.render();
  }

  handleError() {
    this.updateState({ hasError: true });
  }

  computeNextState(data) {
    const arr = data.data;
    const today = arr.shift();
    const otherDays = arr;
    return {
      todayForecast: today,
      otherDaysForecast: otherDays
    };
  }

  getCityForecast(city) {
    return Object(__WEBPACK_IMPORTED_MODULE_2__utils_api__["a" /* default */])(city)
      .then(this.computeNextState)
      .catch(this.handleError);
  }

  render() {
    const { city, todayForecast, otherDaysForecast, isMetric } = this.state;

    console.log(this.state);

    return [
      this.locationSearch.update({
        city,
        onSubmit: this.onSearchSubmit,
        onSwitch: this.onSwitchUnits
      }),
      !todayForecast
        ? ""
        : this.todayForecast.update({
            city,
            forecast: todayForecast,
            isMetric
          }),
      !otherDaysForecast
        ? ""
        : this.otherDaysForecast.update({
            forecast: otherDaysForecast,
            isMetric
          })
    ];
  }
}

/* harmony default export */ __webpack_exports__["a"] = (App);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_config__ = __webpack_require__(2);


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

const getForecast = (loc) => {
  return fetch(
    `${BASE_URL}${KEY_MOD}${API_KEY}${DAYS_MOD}${__WEBPACK_IMPORTED_MODULE_0__utils_config__["c" /* NUM_OF_DAYS */]}${UNITS_MOD}M${LOC_MOD}${loc}`,
    init
  )
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.status);
  })
  .catch(error => {
    console.log(error.message);
    if (error.message === "Unexpected end of JSON input") {
      alert("Requested location was not found. Try another one.");
    } else {
      alert("Error occured. Please try later.");
    }
  });
};

/* harmony default export */ __webpack_exports__["a"] = (getForecast);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_helper__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__framework_Component__ = __webpack_require__(1);



class LocationSearch extends __WEBPACK_IMPORTED_MODULE_1__framework_Component__["a" /* default */] {
  constructor(props) {
    super(props);
    
    this.state = {
      isValid: true
    };

    __WEBPACK_IMPORTED_MODULE_0__utils_helper__["a" /* bindAll */](this, "handleSubmit", "handleClick");

    this.host = document.createElement("div");
    this.host.classList.add("flex-container");

    this.host.addEventListener("submit", this.handleSubmit);

    this.host.addEventListener("click", this.handleClick);
  }

  handleSubmit(ev) {
    ev.preventDefault();

    const city = ev.target.elements.city.value.trim();

    if (!__WEBPACK_IMPORTED_MODULE_0__utils_helper__["b" /* isValidCityName */](city)) {
      this.state.isValid = false;
    } else {
      this.props.onSubmit(city);
      this.state.isValid = true;
    }
    console.log(this.state, this.props);
  }

  handleClick(ev) {
    if (ev.target === document.getElementById("units-btn")) {
      this.props.onSwitch();
    }
  }

  render() {
    const { isValid } = this.state;
    const { city } = this.props;

    return `
      <form class=${isValid ? "location-search" : "location-search -invalid"}>
        <input required name="city" type="text" placeholder="City name" class="btn" value="${city}">
        <button class="btn" type="submit">Find</button>
        <button class="btn" id="units-btn" type="button">Units</button>
      </form>
    `;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (LocationSearch);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_helper__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__framework_Component__ = __webpack_require__(1);




class TodayForecast extends __WEBPACK_IMPORTED_MODULE_2__framework_Component__["a" /* default */] {
  constructor() {
    super();

    this.host = document.createElement("div");
    this.host.classList.add("flex-container");
  }

  render() {
    const { city, forecast, isMetric } = this.props;

    const tempUnits = isMetric ? "C" : "F";
    const velocityUnits = isMetric ? "m/s" : "mph";

    console.log(city, forecast);

    return `
      <div class="flex-container main-panel">
        <div class="left-panel">
          <h1 class="city-name">${city}</h1>
          <h2>${__WEBPACK_IMPORTED_MODULE_1__utils_config__["a" /* DAY_OF_WEEK */][new Date(forecast.datetime).getDay()]}</h2>
          <h3 class="date">${forecast.datetime}</h3>
          <p class="temperature">t: ${Math.round(
            isMetric ? forecast.temp : Object(__WEBPACK_IMPORTED_MODULE_0__utils_helper__["d" /* toFahrenheit */])(forecast.temp)
          )}&deg;${tempUnits}</p>
          <p class="min-temp">t.min: ${Math.round(
            isMetric ? forecast.min_temp : Object(__WEBPACK_IMPORTED_MODULE_0__utils_helper__["d" /* toFahrenheit */])(forecast.min_temp)
          )}&deg;${tempUnits}</p>
          <p class="max-temp">t.max: ${Math.round(
            isMetric ? forecast.max_temp : Object(__WEBPACK_IMPORTED_MODULE_0__utils_helper__["d" /* toFahrenheit */])(forecast.max_temp)
          )}&deg;${tempUnits}</p>
        </div>
        <div class="right-panel">
          <div class="img-container">
            <img class="img" src="${__WEBPACK_IMPORTED_MODULE_1__utils_config__["b" /* ICON_BASE */]}${
      forecast.weather.icon
    }.png" alt="Icon">
          </div>
          <h3>${forecast.weather.description}</h3>
          <p>Humidity: ${forecast.rh}%</p>
          <p>Wind: ${
            isMetric ? forecast.wind_spd : Object(__WEBPACK_IMPORTED_MODULE_0__utils_helper__["e" /* toMph */])(forecast.wind_spd)
          }${velocityUnits} ${forecast.wind_cdir}</p>
        </div>
      </div>
    `;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (TodayForecast);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_helper__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__framework_Component__ = __webpack_require__(1);




class OtherDaysForecast extends __WEBPACK_IMPORTED_MODULE_2__framework_Component__["a" /* default */] {
  constructor() {
    super();

    this.host = document.createElement("div");
    this.host.classList.add("flex-container");
  }

  render() {
    const { forecast, isMetric } = this.props;

    const tempUnits = isMetric ? "C" : "F";

    return forecast
      .map(
        item => `
        <div class="day-panel">
          <h2>${__WEBPACK_IMPORTED_MODULE_1__utils_config__["a" /* DAY_OF_WEEK */][new Date(item.datetime).getDay()]}</h2>
          <h3 class="date">${item.datetime}</h3>
          <div class="img-container">
            <img class="img" src="${__WEBPACK_IMPORTED_MODULE_1__utils_config__["b" /* ICON_BASE */]}${
          item.weather.icon
        }.png" alt="Icon">
          </div>
          <h4>${item.weather.description}</h4>
          <h2>t: ${Math.round(
            isMetric ? item.temp : Object(__WEBPACK_IMPORTED_MODULE_0__utils_helper__["d" /* toFahrenheit */])(item.temp)
          )}&deg;${tempUnits}</h2>
        </div>
    `
      )
      .join("");
  }
}

/* harmony default export */ __webpack_exports__["a"] = (OtherDaysForecast);


/***/ })
/******/ ]);