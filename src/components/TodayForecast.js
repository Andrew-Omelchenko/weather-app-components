import { ICON_BASE, DAY_OF_WEEK } from "../utils/config";
import Component from '../framework/Component';

class TodayForecast extends Component {
  constructor() {
    super();

    this.host = document.createElement("div");
    this.host.classList.add("flex-container");
  }

  render() {
    const { city, forecast } = this.props;

    console.log(city, forecast);

    return `
      <div class="flex-container main-panel">
        <div class="left-panel">
          <h1 class="city-name">${city}</h1>
          <h2>${DAY_OF_WEEK[new Date(forecast.datetime).getDay()]}</h2>
          <h3 class="date">${forecast.datetime}</h3>
          <p class="temperature">t: ${Math.round(forecast.temp)}&deg;</p>
          <p class="min-temp">t.min: ${Math.round(forecast.min_temp)}&deg;</p>
          <p class="max-temp">t.max: ${Math.round(forecast.max_temp)}&deg;</p>
        </div>
        <div class="right-panel">
          <div class="img-container">
            <img class="img" src="${ICON_BASE}${forecast.weather.icon}.png" alt="Icon">
          </div>
          <h3>${forecast.weather.description}</h3>
          <p>Humidity: ${forecast.rh}%</p>
          <p>Wind: ${forecast.wind_spd}m/s ${forecast.wind_cdir}</p>
        </div>
      </div>
    `;
  }
}

export default TodayForecast;