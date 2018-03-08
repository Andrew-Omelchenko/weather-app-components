// import * as config from "./src/utils/config";
import * as helper from "./src/utils/helper";
import Component from "./src/framework/Component";
import getForecast from "./src/utils/api";
// import StorageService from "./src/services/StorageService";
// import FavoritesService from "./src/services/FavoritesService";
// import HistoryService from "./src/services/HistoryService";
import LocationSearch from "./src/components/LocationSearch";

class App extends Component {
  constructor({ host }) {
    super();

    this.state = {
      city: helper.parseLocation(window.location.href) || "",
      todayForecast: null,
      otherDaysForecast: null,
      hasError: false
    };

    helper.bindAll(this, "onSearchSubmit");

    this.host = host;

    this.locationSearch = new LocationSearch({
      city: this.state.city, onSubmit: this.onSearchSubmit
    });
  }

  onSearchSubmit(city) {
    this.updateState({ city });
  }

  handleError() {
    this.updateState({ hasError: true });
  }

  computeNextState(data) {
    const arr = data.data;
    const today = arr.shift();
    const otherDays = arr;
    return {
      todayForecast: today,
      weekForecast: otherDays
    };
  }

  getCityForecast(city) {
    return getForecast(city)
      .then(this.computeNextState)
      .then(this.updateState)
      .catch(this.handleError);
  }

  render() {
    const  { city } = this.state;

    return this.locationSearch.update({ city, onSubmit: this.onSearchSubmit });
  }
}

export default App;
