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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export extractBase */
/* harmony export (immutable) */ __webpack_exports__["b"] = parseLocation;
/* unused harmony export toFahrenheit */
/* unused harmony export toCelsius */
/* unused harmony export toMph */
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
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__App__ = __webpack_require__(2);


const app = new __WEBPACK_IMPORTED_MODULE_0__App__["a" /* default */](document.getElementById("root"));
app.render();


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_utils_helper__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_components_LocationSearch__ = __webpack_require__(3);
// import * as config from "./src/utils/config";

// import { getForecast } from "./src/utils/api";
// import { StorageService } from "./src/services/storage_service";
// import { FavoritesService } from "./src/services/favorites_service";
// import { HistoryService } from "./src/services/history_service";


class App {
  constructor(host) {
    this.state = {
      city: __WEBPACK_IMPORTED_MODULE_0__src_utils_helper__["b" /* parseLocation */](window.location.href) || "",
      isValid: true
    };

    __WEBPACK_IMPORTED_MODULE_0__src_utils_helper__["a" /* bindAll */](this, 'onSearchSubmit');

    this.host = host;

    this.locationSearch = new __WEBPACK_IMPORTED_MODULE_1__src_components_LocationSearch__["a" /* default */]();
  }

  updateState(nextState) {
    this.state = nextState;
    this.render();
  }

  onSearchSubmit(city) {
    this.updateState({ city });
    console.log(this.state);
  }

  render() {
    const  { city } = this.state;

    this.host.innerHTML = "";
    this.host.appendChild(this.locationSearch.update({ city, onSubmit: this.onSearchSubmit }));

    return this.host;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (App);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_helper__ = __webpack_require__(0);


class LocationSearch {
  constructor() {
    this.state = {
      isValid: true
    };

    __WEBPACK_IMPORTED_MODULE_0__utils_helper__["a" /* bindAll */](this, 'handleSubmit');

    this.host = document.createElement("div");
    this.host.classList.add("location-search-container");

    this.host.addEventListener("submit", this.handleSubmit);
  }

  onBeforeUpdate(nextProps) {}

  update(nextProps) {
    this.onBeforeUpdate(nextProps);
    this.props = nextProps;
    return this.render();
  }

  handleSubmit(ev) {
    ev.preventDefault();

    const city = ev.target.elements.city.value.trim();

    if (!city.length) {
      this.updateState({ isValid: false });
    } else {
      this.props.onSubmit(city);
    }
  }

  render() {
    const { isValid } = this.state;
    const { city } = this.props;

    this.host.innerHTML = `
        <form class=${isValid ? "location-search" : "location-search -invalid"}>
          <input required name="city" type="text" placeholder="City name" class="location-search-input" value="${city}">
          <button class="location-search-submit">Find</button>
          <button type="button" class="location-favorites">Add to favorites</button>
        </form>
    `;

    return this.host;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (LocationSearch);


/***/ })
/******/ ]);