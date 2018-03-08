import * as helper from "../utils/helper";

class LocationSearch {
  constructor(props) {
    this.state = {
      isValid: true
    };
    this.props = props;

    helper.bindAll(this, 'handleSubmit');

    this.host = document.createElement("div");
    this.host.classList.add("location-search-container");

    this.host.addEventListener("submit", this.handleSubmit);
  }

  onBeforeUpdate(nextProps) {}

  update(nextProps) {
    this.onBeforeUpdate(nextProps);
    this.props = nextProps;
    return this.render();
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

  render() {
    const { isValid } = this.state;
    const { city } = this.props;

    this.host.innerHTML = `
        <form class=${isValid ? "location-search" : "location-search -invalid"}>
          <input required name="city" type="text" placeholder="City name" class="location-search-input" value="${city}">
          <button class="location-search-submit">Find</button>
          <button type="button" class="location-favorites">Add to favorites</button>
        </form>
    `;

    return this.host;
  }
}

export default LocationSearch;
