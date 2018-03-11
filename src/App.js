import { bindAll, extractBase, parseLocation } from "./utils/helper";
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

    // initialize services
    this.storageService = new StorageService();
    this.favoritesService = new FavoritesService(this.storageService);
    this.historyService = new HistoryService(this.storageService);

    // initialize state object
    this.state = {
      city: parseLocation(window.location.href) || "",
      favoritesList: this.favoritesService.data,
      historyList: this.historyService.data,
      todayForecast: null,
      otherDaysForecast: null,
      isMetric: true,
      hasError: false
    };

    bindAll(
      this, 
      "eventHandler",
      "onSearchSubmit", 
      "onSwitchUnits", 
      "handleError", 
      "onAddFavorite"
    );

    this.host = host;

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

    if (this.state.city !== "") {
      this.onSearchSubmit(this.state.city);
    }

    this.host.addEventListener("click", this.eventHandler);
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
  }

  eventHandler(ev) {
    if (ev.target.id === "units-btn") {
      this.onSwitchUnits();
    }
    else if (ev.target.id === "add-favorite-btn") {
      this.onAddFavorite();
    }
  }

  onSwitchUnits() {
    this.state.isMetric = !this.state.isMetric;
    this.render();
  }

  handleError() {
    this.state.hasError = true;
  }

  onAddFavorite() {
    this.favoritesService.add(this.state.city);
    this.state.favoritesList = this.favoritesService.data;
    this.favorites.update({ list: this.state.favoritesList });
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
      .then(data => {
        if (!data) {
          return;
        }
        const loc = `${data.city_name},${data.country_code}`;
        // changes history state
        window.history.pushState(
          {},
          document.title,
          `${extractBase(window.location.href)}?city=${loc}`
        );
        // adds city to history list
        this.historyService.add(loc);
        this.state.historyList = this.historyService.data;
        return data;
      })
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
