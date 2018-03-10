import { LIMIT } from "../utils/config";
import ListService from "./ListService";

/** Class representing a favorites service. */
class FavoritesService extends ListService {
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
    if (this._data.length === LIMIT) {
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

export default FavoritesService;
