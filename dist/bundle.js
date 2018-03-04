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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Weekday names array
const dayOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
/* unused harmony export dayOfWeek */


// number of days to forecast
const numOfDays = 7;
/* unused harmony export numOfDays */


// Value, that limits number of entries in history or favorites lists
const limit = 30;
/* harmony export (immutable) */ __webpack_exports__["a"] = limit;


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
/* 1 */
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

  /**
   * Clears data in the list
   */
  clear() {
    this._storageService.remove(this._name);
    this._data = [];
    console.log(`ListService. Clearing ${this._name} data.`);
    console.log(this._data);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ListService;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__App__ = __webpack_require__(3);


const app = new __WEBPACK_IMPORTED_MODULE_0__App__["a" /* default */](document.getElementById("root"));
// app.update();


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_utils_config_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_utils_helper_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_utils_api__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_services_storage_service_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_services_favorites_service_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_services_history_service_js__ = __webpack_require__(8);







class App {
  constructor(host) {

    this.state = {
      city: "Kiev,UA",
      todayForecast: null,
      weekForecast: null
    };

    this.host = host;

    console.log(this.host);

    const data = Object(__WEBPACK_IMPORTED_MODULE_2__src_utils_api__["a" /* getForecast */])(this.state.city, 7, "M");
    console.log(data);
  }

}

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export extractBase */
/* unused harmony export parseLocation */
/* unused harmony export toFahrenheit */
/* unused harmony export toCelsius */
/* unused harmony export toMph */
/* unused harmony export toMs */
/* unused harmony export clearSelect */
/* unused harmony export populateSelect */
/* unused harmony export addFavoriteLocation */
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
  let parsed = new URL(urlString);
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
function addFavoriteLocation(doc, controller, favListId) {
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


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

const getForecast = (loc, days, units) => {
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
/* harmony export (immutable) */ __webpack_exports__["a"] = getForecast;



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Class representing a storage service. */
class StorageService {
  /**
   * Creates storage service.
   * @constructor
   * @param {Window} wnd - current Window object
   */
  constructor(wnd) {
    this._wnd = wnd;
  }

  /**
   * Writes object to the local storage
   * @param {Object} obj - object to add
   * @param {string} name - name of the key
   */
  write(obj, name) {
    let serialized = JSON.stringify(obj);
    this._wnd.localStorage.setItem(name, serialized);
  }

  /**
   * Reads object from the local storage
   * @param {string} name - name of the key
   */
  read(name) {
    return JSON.parse(this._wnd.localStorage.getItem(name));
  }

  /**
   * Removes object from the local storage
   * @param {string} name - name of the key
   */
  remove(name) {
    this._wnd.localStorage.removeItem(name);
  }

  /**
   * Clears local storage
   */
  clear() {
    this._wnd.localStorage.clear();
  }
}
/* unused harmony export StorageService */



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_config_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__list_service_js__ = __webpack_require__(1);



/** Class representing a favorites service. */
class FavoritesService extends __WEBPACK_IMPORTED_MODULE_1__list_service_js__["a" /* ListService */] {
  /**
   * Creates favorites service.
   * @constructor
   * @param {StorageService} storageSvc - StorageService object
   * @param {string} name - name of the key in the local storage
   */
  constructor(storageSvc, name) {
    super(storageSvc, name);
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
    if (this._data.length == __WEBPACK_IMPORTED_MODULE_0__utils_config_js__["a" /* limit */]) {
      this._data.pop();
    }
    // add item
    this._data.push(item);
    this._data.sort();
    this._storageService.write(this._data, this._name);
    console.log("Favorites service. Adding favorite.");
    console.log(this._data);
    return true;
  }
}
/* unused harmony export FavoritesService */



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_config_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__list_service_js__ = __webpack_require__(1);



/** Class representing a history service. */
class HistoryService extends __WEBPACK_IMPORTED_MODULE_1__list_service_js__["a" /* ListService */] {
  /**
   * Creates history service.
   * @constructor
   * @param {StorageService} storageSvc - StorageService object
   * @param {string} name - name of the key in the local storage
   */
  constructor(storageSvc, name) {
    super(storageSvc, name);
  }

  /**
   * Adds item to the history list
   * @param {string} item - item to add to the list
   * @returns {boolean} true, if item was added, false - otherwise
   */
  add(item) {
    // check last
    if (item == this._data[this._data.length - 1]) {
      console.log("Such last entry already exists.");
      return false;
    }
    // remove duplicates
    if (this._data && this._data.length > 0) {
      let tmp = [];
      for (let elem of this._data) {
        if (elem != item) {
          tmp.push(elem);
        }
      }
      this._data = tmp;
    }
    // check length limit
    if (this._data.length == __WEBPACK_IMPORTED_MODULE_0__utils_config_js__["a" /* limit */]) {
      this._data.shift();
    }
    // add item
    this._data.push(item);
    this._storageService.write(this._data, this._name);
    console.log("History service. Adding history item.");
    console.log(this._data);
    return true;
  }
}
/* unused harmony export HistoryService */



/***/ })
/******/ ]);