export class LocationSearch {
  constructor() {
    this.state = {
      isValid: true
    }

    // bindAll(this, 'handleSubmit');

    this.host = document.createElement("div");
    this.host.classList.add("location-search-container");

    this.host.addEventListener("submit", this.handleSubmit);
  }

  handleSubmit(ev) {
    ev.preventDefault();

    const city = ev.target.elements.search.value.trim();

    if (!city.length) {
      this.updateState({ isValid: false });
    } else {
      // this.props.onSubmit(city);
    }
  }

  render() {
    this.host.innerHTML = `
        <form class="weather-form">
          <input name="search" required class="search-weather">
          <button class="weather-search-submit">Find</button>
        </form>
    `;

    return this.host;
  }
}
