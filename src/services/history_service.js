import * as config from "../utils/config.js";
import { ListService } from "./list_service.js";

/** Class representing a history service. */
export class HistoryService extends ListService {
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
    if (this._data.length == config.limit) {
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
