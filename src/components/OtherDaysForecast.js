import { ICON_BASE } from "../utils/config.js";
import { DAY_OF_WEEK } from "../utils/config.js";
const host = document.getElementById("other-days-forecast-container");

export const render = data => {
  const items = data
    .map(item => {
      return `
        <div>
          <h3>${DAY_OF_WEEK[new Date(item.datetime).getDay()]}</h3>
          <img src="${ICON_BASE}${item.weather.icon}.png" alt="Icon">
          <h4>Temp: ${item.weather.description}</h4>
          <h4>${item.temp}</h4>
        </div>
    `;
    })
    .join("");

  host.innerHTML = `
    <div class='other-days-forecast'>
      ${items}
    </div>`;
};
