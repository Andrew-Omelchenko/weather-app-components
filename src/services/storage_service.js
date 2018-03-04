/** Class representing a storage service. */
export class StorageService {
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
