import * as helper from "../utils/helper";
import Component from "../framework/Component";

class LocationSearch extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isValid: true
    };

    helper.bindAll(this, "handleSubmit", "handleClick");

    this.host = document.createElement("div");
    this.host.classList.add("container");

    this.host.addEventListener("submit", this.handleSubmit);
    this.host.addEventListener("click", this.handleClick);
  }

  handleSubmit(ev) {
    ev.preventDefault();

    const city = ev.target.elements.city.value.trim();

    if (!helper.isValidCityName(city)) {
      this.state.isValid = false;
    } else {
      this.props.onSubmit(city);
      this.state.isValid = true;
    }
  }

  handleClick(ev) {
    if (ev.target === document.getElementById("units-btn")) {
      this.props.onSwitch();
    }
  }

  render() {
    const { isValid } = this.state;
    const { city } = this.props;

    return `
      <form class="flex-container">
        <div>
          <input required class="btn" name="city" type="text" placeholder="City name" value="${city}">
          <button class="btn btn-active" 
            type="submit"
            title="Searches location" 
            aria-label="Search location">
            <i class="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
        <button class="btn btn-active" 
          id="units-btn" 
          type="button" 
          title="Selects metric or imperial units" 
          aria-label="Switch units">
            &deg;C/&deg;F
        </button>
      </form>
    `;
  }
}

export default LocationSearch;
