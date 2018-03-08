import * as config from "../utils/config.js";
import { ListService } from "./list_service.js";

/** Class representing a history service. */
class HistoryService extends ListService {

  /**
   * Adds item to the history list
   * @param {string} item - item to add to the list
   * @returns {boolean} true, if item was added, false - otherwise
   */
  add(item) {
    // check last
    if (item === this.data[this.data.length - 1]) {
      console.log("Such last entry already exists.");
      return false;
    }
    // remove duplicates
    if (this.data && this.data.length > 0) {
      const tmp = [];
      for (let elem of this.data) {
        if (elem != item) {
          tmp.push(elem);
        }
      }
      this.data = tmp;
    }
    // check length limit
    if (this.data.length === config.limit) {
      this.data.shift();
    }
    // add item
    this.data.push(item);
    this.storageService.write(this.data, this.name);
    console.log("History service. Adding history item.");
    console.log(this.data);
    return true;
  }
}

export default HistoryService;
