import { bindAll, toFahrenheit, toMph } from "../utils/helper";
import { ICON_BASE, DAY_OF_WEEK } from "../utils/config";
import Component from "../framework/Component";

class TodayForecast extends Component {
  constructor(props) {
    super(props);

    bindAll(this, "handleClick");

    this.host = document.createElement("div");
    this.host.classList.add("container");

    this.host.addEventListener("click", this.handleClick);
  }

  handleClick(ev) {
    if (ev.target === document.getElementById("add-favorite-btn")) {
      console.log("Inside handleClick add-favorite-btn");
      this.props.onAddFavorite();
    }
  }

  render() {
    const { city, forecast, isMetric } = this.props;

    const tempUnits = isMetric ? "C" : "F";
    const velocityUnits = isMetric ? "m/s" : "mph";

    return `
      <div class="main-panel">
        <button class="btn btn-active" 
          id="add-favorite-btn" 
          title="Adds city to favorites" 
          aria-label="Add favorite location">
          <i class="fa fa-star" aria-hidden="true"></i>
        </button>
        <h1 class="city-name">${city}</h1>
        <div class="flex-container">
          <div class="left-panel">
            <h2>${DAY_OF_WEEK[new Date(forecast.datetime).getDay()]}</h2>
            <h3 class="date">${forecast.datetime}</h3>
            <p class="temperature">t: ${Math.round(
              isMetric ? forecast.temp : toFahrenheit(forecast.temp)
              )}&deg;${tempUnits}</p>
            <p class="min-temp">t.min: ${Math.round(
              isMetric ? forecast.min_temp : toFahrenheit(forecast.min_temp)
              )}&deg;${tempUnits}</p>
            <p class="max-temp">t.max: ${Math.round(
              isMetric ? forecast.max_temp : toFahrenheit(forecast.max_temp)
              )}&deg;${tempUnits}</p>
          </div>
          <div class="right-panel">
            <div class="img-container">
              <img class="img" src="${ICON_BASE}${
                forecast.weather.icon
                }.png" alt="Icon">
            </div>
            <h3>${forecast.weather.description}</h3>
            <p>Humidity: ${forecast.rh}%</p>
            <p>Wind: ${
              isMetric ? forecast.wind_spd : toMph(forecast.wind_spd)
              }${velocityUnits} ${forecast.wind_cdir}</p>
          </div>
        </div>
      </div>
    `;
  }
}

export default TodayForecast;
