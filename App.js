import * as config from "./src/utils/config.js";
import * as helper from "./src/utils/helper.js";
import { getForecast } from "./src/utils/api";
import { StorageService } from "./src/services/storage_service.js";
import { FavoritesService } from "./src/services/favorites_service.js";
import { HistoryService } from "./src/services/history_service.js";
import { LocationSearch } from "./src/components/LocationSearch.js";

export class App {
  constructor(host) {
    this.state = {
      isValid: true
    };

    // bindAll(this, 'handleSubmit');

    this.host = host;

    this.locationSearch = new LocationSearch();
  }

  updateState(nextState) {
    this.state = nextState;
    this.render();
  }

  render() {
    this.host.innerHTML = "";
    this.host.appendChild(this.locationSearch.render());
  }
}
