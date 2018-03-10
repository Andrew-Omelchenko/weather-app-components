import { extractBase } from "../utils/helper"
import Component from "../framework/Component";

class History extends Component {
  constructor() {
    super();

    this.host = document.createElement("div");
    this.host.classList.add("list-panel");
  }

  render() {
    const { list } = this.props;

    let items = "";

    if (list) {
      items = list
      .map(
        item => `&nbsp;<a href="${extractBase(window.location.href)}?city=${item}">${item}</a>&nbsp;`
      )
      .join("");
    }

    return `
      <i class="fa fa-history" aria-hidden="true"></i> ${items}&nbsp;
    `;
  }
}

export default History;