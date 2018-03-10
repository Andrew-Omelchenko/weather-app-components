import { toFahrenheit } from "../utils/helper";
import { ICON_BASE, DAY_OF_WEEK } from "../utils/config";
import Component from "../framework/Component";

class OtherDaysForecast extends Component {
  constructor() {
    super();

    this.host = document.createElement("div");
    this.host.classList.add("container");
    this.host.classList.add("flex-container");
  }

  render() {
    const { forecast, isMetric } = this.props;

    const tempUnits = isMetric ? "C" : "F";

    return forecast
      .map(
        item => `
        <div class="day-panel">
          <h2>${DAY_OF_WEEK[new Date(item.datetime).getDay()]}</h2>
          <h3 class="date">${item.datetime}</h3>
          <div class="img-container">
            <img class="img" src="${ICON_BASE}${
          item.weather.icon
        }.png" alt="Icon">
          </div>
          <h4>${item.weather.description}</h4>
          <h2>t: ${Math.round(
            isMetric ? item.temp : toFahrenheit(item.temp)
          )}&deg;${tempUnits}</h2>
        </div>
      `
    )
    .join("");
  }
}

export default OtherDaysForecast;
