// import * as config from "./src/utils/config";
import * as helper from "./utils/helper";
import Component from "./framework/Component";
import getForecast from "./utils/api";
// import StorageService from "./src/services/StorageService";
// import FavoritesService from "./src/services/FavoritesService";
// import HistoryService from "./src/services/HistoryService";
import LocationSearch from "./components/LocationSearch";
import TodayForecast from "./components/TodayForecast";
import OtherDaysForecast from "./components/OtherDaysForecast";

class App extends Component {
  constructor({ host }) {
    super();

    this.state = {
      city: helper.parseLocation(window.location.href) || "",
      todayForecast: null,
      otherDaysForecast: null,
      isMetric: true,
      hasError: false
    };

    helper.bindAll(this, "onSearchSubmit", "onSwitchUnits", "handleError");

    this.host = host;

    this.locationSearch = new LocationSearch({
      city: this.state.city,
      onSubmit: this.onSearchSubmit,
      onSwitch: this.onSwitchUnits
    });
    this.todayForecast = new TodayForecast({
      city: this.state.city,
      forecast: this.state.todayForecast
    });
    this.otherDaysForecast = new OtherDaysForecast({
      forecast: this.state.otherDaysForecast
    });
  }

  onSearchSubmit(city) {
    this.getCityForecast(city).then(({ todayForecast, otherDaysForecast }) => {
      this.updateState({
        todayForecast,
        otherDaysForecast,
        city
      });
    });
  }

  onSwitchUnits() {
    this.state.isMetric = !this.state.isMetric;
    this.render();
  }

  handleError() {
    this.state.hasError = true;
  }

  computeNextState(data) {
    if (!data) {
      return {
        todayForecast: null,
        otherDaysForecast: null
      };
    } else {
      const arr = data.data;
      const today = arr.shift();
      const otherDays = arr;

      return {
        todayForecast: today,
        otherDaysForecast: otherDays
      };
    }
  }

  getCityForecast(city) {
    return getForecast(city)
      .then(this.computeNextState)
      .catch(this.handleError);
  }

  render() {
    const { city, todayForecast, otherDaysForecast, isMetric } = this.state;

    return [
      this.locationSearch.update({
        city,
        onSubmit: this.onSearchSubmit,
        onSwitch: this.onSwitchUnits
      }),
      !todayForecast
        ? ""
        : this.todayForecast.update({
            city,
            forecast: todayForecast,
            isMetric
          }),
      !otherDaysForecast
        ? ""
        : this.otherDaysForecast.update({
            forecast: otherDaysForecast,
            isMetric
          })
    ];
  }
}

export default App;
