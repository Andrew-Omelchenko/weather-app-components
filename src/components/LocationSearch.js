class LocationSearch {
  constructor() {
    this.state = {
      isValid: true
    };

    // bindAll(this, 'onSubmit');

    this.host = document.createElement("div");
    this.host.classList.add("location-search-container");

    this.host.addEventListener("submit", this.onSubmit);
  }

  onBeforeUpdate(nextProps) {}

  update(nextProps) {
    this.onBeforeUpdate(nextProps);
    this.props = nextProps;
    return this.render();
  }

  onSubmit(ev) {
    ev.preventDefault();

    const city = ev.target.elements.city.value.trim();

    if (!city.length) {
      this.updateState({ isValid: false });
    } else {
      // this.props.onSubmit(city);
    }
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
