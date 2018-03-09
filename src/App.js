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
      hasError: false
    };

    helper.bindAll(this, "onSearchSubmit");

    this.host = host;

    this.locationSearch = new LocationSearch({
      city: this.state.city, onSubmit: this.onSearchSubmit
    });
    this.todayForecast = new TodayForecast({
      city: this.state.city, forecast: this.state.todayForecast
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
      })
    });
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
      otherDaysForecast: otherDays
    };
  }

  getCityForecast(city) {
    return getForecast(city)
      .then(this.computeNextState)
      .catch(this.handleError);
  }

  render() {
    const  { city, todayForecast, otherDaysForecast } = this.state;

    console.log(this.state);

    return [
      this.locationSearch.update({ city, onSubmit: this.onSearchSubmit }),
      !todayForecast ? "" : this.todayForecast.update({ city, forecast: todayForecast }),
      !otherDaysForecast ? "" : this.otherDaysForecast.update({ forecast: otherDaysForecast })
    ];
  }
}

export default App;
