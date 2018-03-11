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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = isValidCityName;
/* harmony export (immutable) */ __webpack_exports__["b"] = extractBase;
/* harmony export (immutable) */ __webpack_exports__["d"] = parseLocation;
/* harmony export (immutable) */ __webpack_exports__["e"] = toFahrenheit;
/* harmony export (immutable) */ __webpack_exports__["f"] = toMph;
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
 * Converts velocity value from meters per second to miles per hour
 * @param {number} value - current value in m/s
 * @returns {number} value in mph
 */
function toMph(value) {
  return Math.round(value * 2.25);
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
/* harmony export (immutable) */ __webpack_exports__["d"] = NUM_OF_DAYS;


// Value, that limits number of entries in history or favorites lists
const LIMIT = 10;
/* harmony export (immutable) */ __webpack_exports__["c"] = LIMIT;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Class representing a list service. */
class ListService {
  /**
   * Creates list service.
   * @constructor
   * @param {StorageService} storageSvc - StorageService object
   * @param {string} name - name of the key in the local storage
   */
  constructor(storageSvc, name) {
    this._storageService = storageSvc;
    this._name = name;
    this._data = this._storageService.read(this._name);
    console.log(`ListService constructor. Getting ${this._name} data.`);
    console.log(this._data);
    if (this._data == null) {
      this._data = [];
    }
  }

  /**
   * Getter function for reading current data from the list
   * @returns {[]} - current data
   */
  get data() {
    console.log(`ListService. Getting ${this._name} data.`);
    console.log(this._data);
    return this._data;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (ListService);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__App__ = __webpack_require__(5);


const app = new __WEBPACK_IMPORTED_MODULE_0__App__["a" /* default */]({ host: document.getElementById("root") });
app.update();


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_helper__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__framework_Component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_api__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_StorageService__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_FavoritesService__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_HistoryService__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_LocationSearch__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Favorites__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_History__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_TodayForecast__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_OtherDaysForecast__ = __webpack_require__(14);












class App extends __WEBPACK_IMPORTED_MODULE_1__framework_Component__["a" /* default */] {
  constructor({ host }) {
    super();

    // initialize services
    this.storageService = new __WEBPACK_IMPORTED_MODULE_3__services_StorageService__["a" /* default */]();
    this.favoritesService = new __WEBPACK_IMPORTED_MODULE_4__services_FavoritesService__["a" /* default */](this.storageService);
    this.historyService = new __WEBPACK_IMPORTED_MODULE_5__services_HistoryService__["a" /* default */](this.storageService);

    // initialize state object
    this.state = {
      city: Object(__WEBPACK_IMPORTED_MODULE_0__utils_helper__["d" /* parseLocation */])(window.location.href) || "",
      favoritesList: this.favoritesService.data,
      historyList: this.historyService.data,
      todayForecast: null,
      otherDaysForecast: null,
      isMetric: true,
      hasError: false
    };

    Object(__WEBPACK_IMPORTED_MODULE_0__utils_helper__["a" /* bindAll */])(
      this, 
      "eventHandler",
      "onSearchSubmit", 
      "onSwitchUnits", 
      "handleError", 
      "onAddFavorite"
    );

    this.host = host;

    // initialize components
    this.locationSearch = new __WEBPACK_IMPORTED_MODULE_6__components_LocationSearch__["a" /* default */]({
      city: this.state.city,
      onSubmit: this.onSearchSubmit,
      onSwitch: this.onSwitchUnits
    });
    this.favorites = new __WEBPACK_IMPORTED_MODULE_7__components_Favorites__["a" /* default */]({});
    this.history = new __WEBPACK_IMPORTED_MODULE_8__components_History__["a" /* default */]({});
    this.todayForecast = new __WEBPACK_IMPORTED_MODULE_9__components_TodayForecast__["a" /* default */]({
      city: this.state.city,
      forecast: this.state.todayForecast,
      isMetric: this.isMetric,
      onAddFavorite: this.handleAddFavorite
    });
    this.otherDaysForecast = new __WEBPACK_IMPORTED_MODULE_10__components_OtherDaysForecast__["a" /* default */]({
      forecast: this.state.otherDaysForecast,
      isMetric: this.isMetric
    });

    if (this.state.city !== "") {
      this.onSearchSubmit(this.state.city);
    }

    this.host.addEventListener("click", this.eventHandler);
  }

  onSearchSubmit(city) {
    this.getCityForecast(city).then(({ loc, todayForecast, otherDaysForecast }) => {
      this.updateState({
        city: loc,
        todayForecast,
        otherDaysForecast,
        hasError: false
      });
    });
  }

  eventHandler(ev) {
    if (ev.target.id === "units-btn") {
      this.onSwitchUnits();
    }
    else if (ev.target.id === "add-favorite-btn") {
      this.onAddFavorite();
    }
  }

  onSwitchUnits() {
    this.state.isMetric = !this.state.isMetric;
    this.render();
  }

  handleError() {
    this.state.hasError = true;
  }

  onAddFavorite() {
    this.favoritesService.add(this.state.city);
    this.state.favoritesList = this.favoritesService.data;
    this.favorites.update({ list: this.state.favoritesList });
  }

  computeNextState(data) {
    if (!data) {
      return {
        loc: "",
        todayForecast: null,
        otherDaysForecast: null
      };
    } else {
      const loc = `${data.city_name},${data.country_code}`;
      const arr = data.data;
      const today = arr.shift();
      const otherDays = arr;

      return {
        loc,
        todayForecast: today,
        otherDaysForecast: otherDays
      };
    }
  }

  getCityForecast(city) {
    return Object(__WEBPACK_IMPORTED_MODULE_2__utils_api__["a" /* default */])(city)
      .then(data => {
        if (!data) {
          return;
        }
        const loc = `${data.city_name},${data.country_code}`;
        // changes history state
        window.history.pushState(
          {},
          document.title,
          `${Object(__WEBPACK_IMPORTED_MODULE_0__utils_helper__["b" /* extractBase */])(window.location.href)}?city=${loc}`
        );
        // adds city to history list
        this.historyService.add(loc);
        this.state.historyList = this.historyService.data;
        return data;
      })
      .then(this.computeNextState)
      .catch(this.handleError);
  }

  render() {
    const { 
      city, 
      favoritesList,
      historyList,
      todayForecast, 
      otherDaysForecast, 
      isMetric 
    } = this.state;

    return [
      this.locationSearch.update({
        city,
        onSubmit: this.onSearchSubmit,
        onSwitch: this.onSwitchUnits
      }),
      this.favorites.update({ list: favoritesList }),
      this.history.update({ list: historyList }),
      !todayForecast
        ? ""
        : this.todayForecast.update({
            city,
            forecast: todayForecast,
            isMetric,
            onAddFavorite: this.handleAddFavorite
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
/* 6 */
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
    `${BASE_URL}${KEY_MOD}${API_KEY}${DAYS_MOD}${__WEBPACK_IMPORTED_MODULE_0__utils_config__["d" /* NUM_OF_DAYS */]}${UNITS_MOD}M${LOC_MOD}${loc}`,
    init
  )
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.status);
  })
  .catch(error => {
    if (error.message === "Unexpected end of JSON input") {
      alert("Requested location was not found. Try another one.");
    } else {
      alert("Error occured. Please try later.");
    }
  });
};

/* harmony default export */ __webpack_exports__["a"] = (getForecast);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Class representing a storage service. */
class StorageService {
  /**
   * Creates storage service.
   * @constructor
   * @param {Window} wnd - current Window object
   */
  constructor() {
  }

  /**
   * Writes object to the local storage
   * @param {Object} obj - object to add
   * @param {string} name - name of the key
   */
  write(obj, name) {
    const serialized = JSON.stringify(obj);
    window.localStorage.setItem(name, serialized);
  }

  /**
   * Reads object from the local storage
   * @param {string} name - name of the key
   */
  read(name) {
    return JSON.parse(window.localStorage.getItem(name));
  }

  /**
   * Removes object from the local storage
   * @param {string} name - name of the key
   */
  remove(name) {
    window.localStorage.removeItem(name);
  }

  /**
   * Clears local storage
   */
  clear() {
    window.localStorage.clear();
  }
}

/* harmony default export */ __webpack_exports__["a"] = (StorageService);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ListService__ = __webpack_require__(3);



/** Class representing a favorites service. */
class FavoritesService extends __WEBPACK_IMPORTED_MODULE_1__ListService__["a" /* default */] {
  /**
   * Creates favorites service.
   * @constructor
   * @param {StorageService} storageSvc - StorageService object
   */
  constructor(storageSvc) {
    super(storageSvc, "favorites");
  }

  /**
   * Adds item to the favorites list
   * @param {string} item - item to add to the list
   * @returns {boolean} true, if item was added, false - otherwise
   */
  add(item) {
    // is there the same element?
    for (let elem of this._data) {
      if (elem == item) {
        console.log("Item is already present.")
        return false;
      }
    }
    // check length limit
    if (this._data.length === __WEBPACK_IMPORTED_MODULE_0__utils_config__["c" /* LIMIT */]) {
      this._data.pop();
    }
    // add item
    this._data.push(item);
    this._data.sort();
    this._storageService.write(this._data, "favorites");
    return true;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (FavoritesService);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ListService__ = __webpack_require__(3);



/** Class representing a history service. */
class HistoryService extends __WEBPACK_IMPORTED_MODULE_1__ListService__["a" /* default */] {
  /**
   * Creates history service.
   * @constructor
   * @param {StorageService} storageSvc - StorageService object
   */
  constructor(storageSvc) {
    super(storageSvc, "history");
  }

  /**
   * Adds item to the history list
   * @param {string} item - item to add to the list
   * @returns {boolean} true, if item was added, false - otherwise
   */
  add(item) {
    // check first
    if (item === this._data[0]) {
      console.log("Such last entry already exists.");
      return false;
    }
    // remove duplicates
    if (this._data) {
      const tmp = [];
      for (let elem of this._data) {
        if (elem != item) {
          tmp.push(elem);
        }
      }
      this._data = tmp;
    }
    // check length limit
    if (this._data.length === __WEBPACK_IMPORTED_MODULE_0__utils_config__["c" /* LIMIT */]) {
      this._data.pop();
    }
    // add item
    this._data.unshift(item);
    this._storageService.write(this._data, "history");
    return true;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (HistoryService);


/***/ }),
/* 10 */
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

    Object(__WEBPACK_IMPORTED_MODULE_0__utils_helper__["a" /* bindAll */])(
      this,
      "handleSubmit"
    );

    this.host = document.createElement("div");
    this.host.classList.add("container");

    this.host.addEventListener("submit", this.handleSubmit);
  }

  handleSubmit(ev) {
    ev.preventDefault();

    const city = ev.target.elements.city.value.trim();

    if (!Object(__WEBPACK_IMPORTED_MODULE_0__utils_helper__["c" /* isValidCityName */])(city)) {
      this.state.isValid = false;
    } else {
      this.props.onSubmit(city);
      this.state.isValid = true;
    }
  }

  render() {
    const { city } = this.props;

    return `
      <form class="flex-container">
        <div>
          <input required class="btn" name="city" type="text" placeholder="City name" value="${city}">
          <button class="btn btn-active" 
            type="submit"
            title="Searches location" 
            aria-label="Search location">
            <i class="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
        <button class="btn btn-active" 
          id="units-btn" 
          type="button" 
          title="Selects metric or imperial units" 
          aria-label="Switch units">
            &deg;C/&deg;F
        </button>
      </form>
    `;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (LocationSearch);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_helper__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__framework_Component__ = __webpack_require__(1);



class Favorites extends __WEBPACK_IMPORTED_MODULE_1__framework_Component__["a" /* default */] {
  constructor() {
    super();

    this.host = document.createElement("div");
    this.host.classList.add("list-panel");
  }

  render() {
    const { list } = this.props;

    let items = "";

    if (list) {
      items = list
      .map(
        item => ` <a href="${Object(__WEBPACK_IMPORTED_MODULE_0__utils_helper__["b" /* extractBase */])(window.location.href)}?city=${item}">${item}</a> `
      )
      .join("");
    }

    return `
      <i class="fa fa-star" aria-hidden="true"></i> ${items} 
    `;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Favorites);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_helper__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__framework_Component__ = __webpack_require__(1);



class History extends __WEBPACK_IMPORTED_MODULE_1__framework_Component__["a" /* default */] {
  constructor() {
    super();

    this.host = document.createElement("div");
    this.host.classList.add("list-panel");
  }

  render() {
    const { list } = this.props;

    let items = "";

    if (list) {
      items = list
      .map(
        item => ` <a href="${Object(__WEBPACK_IMPORTED_MODULE_0__utils_helper__["b" /* extractBase */])(window.location.href)}?city=${item}">${item}</a> `
      )
      .join("");
    }

    return `
      <i class="fa fa-history" aria-hidden="true"></i> ${items} 
    `;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (History);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_helper__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__framework_Component__ = __webpack_require__(1);




class TodayForecast extends __WEBPACK_IMPORTED_MODULE_2__framework_Component__["a" /* default */] {
  constructor(props) {
    super(props);

    this.host = document.createElement("div");
    this.host.classList.add("container");
  }

  render() {
    const { city, forecast, isMetric } = this.props;

    const tempUnits = isMetric ? "C" : "F";
    const velocityUnits = isMetric ? "m/s" : "mph";

    return `
      <div class="main-panel">
        <button class="btn btn-active" 
          id="add-favorite-btn" 
          title="Adds city to favorites" 
          aria-label="Add favorite location">
          <i class="fa fa-star" aria-hidden="true"></i>
        </button>
        <h1 class="city-name">${city}</h1>
        <div class="flex-container">
          <div class="left-panel">
            <h2>${__WEBPACK_IMPORTED_MODULE_1__utils_config__["a" /* DAY_OF_WEEK */][new Date(forecast.datetime).getDay()]}</h2>
            <h3 class="date">${forecast.datetime}</h3>
            <h1 class="temperature">t: ${Math.round(
              isMetric ? forecast.temp : Object(__WEBPACK_IMPORTED_MODULE_0__utils_helper__["e" /* toFahrenheit */])(forecast.temp)
              )}&deg;${tempUnits}</h1>
            <p class="min-temp">t.min: ${Math.round(
              isMetric ? forecast.min_temp : Object(__WEBPACK_IMPORTED_MODULE_0__utils_helper__["e" /* toFahrenheit */])(forecast.min_temp)
              )}&deg;${tempUnits}</p>
            <p class="max-temp">t.max: ${Math.round(
              isMetric ? forecast.max_temp : Object(__WEBPACK_IMPORTED_MODULE_0__utils_helper__["e" /* toFahrenheit */])(forecast.max_temp)
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
              isMetric ? forecast.wind_spd : Object(__WEBPACK_IMPORTED_MODULE_0__utils_helper__["f" /* toMph */])(forecast.wind_spd)
              }${velocityUnits} ${forecast.wind_cdir}</p>
          </div>
        </div>
      </div>
    `;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (TodayForecast);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_helper__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__framework_Component__ = __webpack_require__(1);




class OtherDaysForecast extends __WEBPACK_IMPORTED_MODULE_2__framework_Component__["a" /* default */] {
  constructor() {
    super();

    this.host = document.createElement("div");
    this.host.classList.add("container");
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
            isMetric ? item.temp : Object(__WEBPACK_IMPORTED_MODULE_0__utils_helper__["e" /* toFahrenheit */])(item.temp)
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