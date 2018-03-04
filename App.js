import * as config from "./src/utils/config.js";
import * as helper from "./src/utils/helper.js";
import { getForecast } from "./src/utils/api";
import { StorageService } from "./src/services/storage_service.js";
import { FavoritesService } from "./src/services/favorites_service.js";
import { HistoryService } from "./src/services/history_service.js";
import { render } from "./src/components/OtherDaysForecast";

class App {
  constructor(host) {
    this.state = {
      city: "Kiev,UA",
      todayForecast: null,
      weekForecast: null
    };

    this.host = host;

    getForecast(this.state.city, 7, "M").then(result => {
      const data = result.data;
      const firstDay = data.shift();
      console.log(firstDay, data);
      render(data);
    });
  }
}

export default App;
