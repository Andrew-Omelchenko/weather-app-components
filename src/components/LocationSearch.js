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
    this.host.classList.add("flex-container");

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
    console.log(this.state, this.props);
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
      <form class=${isValid ? "location-search" : "location-search -invalid"}>
        <input required name="city" type="text" placeholder="City name" class="btn" value="${city}">
        <button class="btn" type="submit">Find</button>
        <button class="btn" id="units-btn" type="button">Units</button>
      </form>
    `;
  }
}

export default LocationSearch;
