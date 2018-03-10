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

export default StorageService;
