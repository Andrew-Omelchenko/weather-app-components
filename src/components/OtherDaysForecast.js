import { ICON_BASE, DAY_OF_WEEK } from "../utils/config";

const host = document.getElementById("other-days-forecast-container");

const render = data => {
  const items = data
    .map(item => `
        <div>
          <h3>${DAY_OF_WEEK[new Date(item.datetime).getDay()]}</h3>
          <img src="${ICON_BASE}${item.weather.icon}.png" alt="Icon">
          <h4>Temp: ${item.weather.description}</h4>
          <h4>${item.temp}</h4>
        </div>
    `)
    .join("");

  host.innerHTML = `
    <div class='other-days-forecast'>
      ${items}
    </div>`;
};

export default render;
