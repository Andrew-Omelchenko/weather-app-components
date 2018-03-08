/** Class representing a list service. */
class ListService {
  /**
   * Creates list service.
   * @constructor
   * @param {StorageService} storageSvc - StorageService object
   * @param {string} name - name of the key in the local storage
   */
  constructor(storageSvc, name) {
    this.storageService = storageSvc;
    this.name = name;
    this.data = this.storageService.read(this.name);
    if (this.data == null) {
      this.data = [];
    }
  }

  /**
   * Getter function for reading current data from the list
   * @returns {[]} - current data
   */
  get data() {
    console.log(`ListService. Getting ${this.name} data.`);
    console.log(this.data);
    return this.data;
  }

  /**
   * Clears data in the list
   */
  clear() {
    this.storageService.remove(this.name);
    this.data = [];
    console.log(`ListService. Clearing ${this.name} data.`);
    console.log(this.data);
  }
}

export default ListService;
