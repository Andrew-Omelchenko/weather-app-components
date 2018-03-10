// import * as config from "./src/utils/config";
import * as helper from "./utils/helper";
import Component from "./framework/Component";
import getForecast from "./utils/api";
import StorageService from "./services/StorageService";
import FavoritesService from "./services/FavoritesService";
import HistoryService from "./services/HistoryService";
import LocationSearch from "./components/LocationSearch";
import Favorites from "./components/Favorites";
import History from "./components/History";
import TodayForecast from "./components/TodayForecast";
import OtherDaysForecast from "./components/OtherDaysForecast";

class App extends Component {
  constructor({ host }) {
    super();

    this.state = {
      city: helper.parseLocation(window.location.href) || "",
      favoritesList: null,
      historyList: null,
      todayForecast: null,
      otherDaysForecast: null,
      isMetric: true,
      hasError: false
    };

    helper.bindAll(
      this, 
      "onSearchSubmit", 
      "onSwitchUnits", 
      "handleError", 
      "handleAddFavorite"
    );

    this.host = host;

    // initialize services
    this.storageService = new StorageService(window);
    this.favoritesService = new FavoritesService(this.storageService, "favorites");
    this.historyService = new HistoryService(this.storageService, "history");

    // get favorites and history lists
    this.state.favoritesList = this.favoritesService.data;
    this.state.historyList = this.historyService.data;

    // initialize components
    this.locationSearch = new LocationSearch({
      city: this.state.city,
      onSubmit: this.onSearchSubmit,
      onSwitch: this.onSwitchUnits
    });
    this.favorites = new Favorites({});
    this.history = new History({});
    this.todayForecast = new TodayForecast({
      city: this.state.city,
      forecast: this.state.todayForecast,
      isMetric: this.isMetric,
      onAddFavorite: this.handleAddFavorite
    });
    this.otherDaysForecast = new OtherDaysForecast({
      forecast: this.state.otherDaysForecast,
      isMetric: this.isMetric
    });
  }

  onSearchSubmit(city) {
    this.getCityForecast(city).then(({ loc, todayForecast, otherDaysForecast }) => {
      this.updateState({
        city: loc,
        todayForecast,
        otherDaysForecast,
        hasError: false
      });
    });
    this.historyService.add(city);
    this.state.historyList = this.historyService.data;
    this.history.update({ list: this.state.historyList });
  }

  onSwitchUnits() {
    this.state.isMetric = !this.state.isMetric;
    this.render();
  }

  handleError() {
    this.state.hasError = true;
  }

  handleAddFavorite() {
    console.log("Inside handleAddFavorite");
  }

  computeNextState(data) {
    if (!data) {
      return {
        loc: "",
        todayForecast: null,
        otherDaysForecast: null
      };
    } else {
      const loc = `${data.city_name},${data.country_code}`;
      const arr = data.data;
      const today = arr.shift();
      const otherDays = arr;

      return {
        loc,
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
    const { 
      city, 
      favoritesList,
      historyList,
      todayForecast, 
      otherDaysForecast, 
      isMetric 
    } = this.state;

    return [
      this.locationSearch.update({
        city,
        onSubmit: this.onSearchSubmit,
        onSwitch: this.onSwitchUnits
      }),
      this.favorites.update({ list: favoritesList }),
      this.history.update({ list: historyList }),
      !todayForecast
        ? ""
        : this.todayForecast.update({
            city,
            forecast: todayForecast,
            isMetric,
            onAddFavorite: this.handleAddFavorite
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
