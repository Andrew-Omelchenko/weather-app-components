import { LIMIT } from "../utils/config";
import ListService from "./ListService";

/** Class representing a history service. */
class HistoryService extends ListService {
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
      // console.log("Such last entry already exists.");
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
    if (this._data.length === LIMIT) {
      this._data.pop();
    }
    // add item
    this._data.unshift(item);
    this._storageService.write(this._data, "history");
    return true;
  }
}

export default HistoryService;
