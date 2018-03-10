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
}

export default ListService;
