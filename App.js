// import * as config from "./src/utils/config";
import * as helper from "./src/utils/helper";
// import { getForecast } from "./src/utils/api";
// import { StorageService } from "./src/services/storage_service";
// import { FavoritesService } from "./src/services/favorites_service";
// import { HistoryService } from "./src/services/history_service";
import LocationSearch from "./src/components/LocationSearch";

class App {
  constructor(host) {
    this.state = {
      city: helper.parseLocation(window.location.href) || "",
      isValid: true
    };

    helper.bindAll(this, 'onSearchSubmit');

    this.host = host;

    this.locationSearch = new LocationSearch({
      city: this.state.city, onSubmit: this.onSearchSubmit
    });
  }

  updateState(nextState) {
    this.state = nextState;
    this.render();
  }

  onSearchSubmit(city) {
    this.updateState({ city });
  }

  render() {
    const  { city } = this.state;

    this.host.innerHTML = "";
    this.host.appendChild(this.locationSearch.update({ city, onSubmit: this.onSearchSubmit }));

    return this.host;
  }
}

export default App;
