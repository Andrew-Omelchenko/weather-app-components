import * as config from "../utils/config";
import { ListService } from "./ListService";

/** Class representing a favorites service. */
class FavoritesService extends ListService {

  /**
   * Adds item to the favorites list
   * @param {string} item - item to add to the list
   * @returns {boolean} true, if item was added, false - otherwise
   */
  add(item) {
    // is there the same element?
    for (let elem of this.data) {
      if (elem == item) {
        console.log("Item is already present.")
        return false;
      }
    }
    // check length limit
    if (this.data.length === config.limit) {
      this.data.pop();
    }
    // add item
    this.data.push(item);
    this.data.sort();
    this.storageService.write(this.data, this.name);
    console.log("Favorites service. Adding favorite.");
    console.log(this.data);
    return true;
  }
}

export default FavoritesService;
