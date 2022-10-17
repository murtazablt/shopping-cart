import {io} from "../lazyLoading/lazyLoading.js"

export default class View {
  _data;

  render(data, activeCategory, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    this._activeCategoryID = activeCategory;

    activeCategory = parseInt(this._activeCategoryID, 10); // convert string to number

    const activeCategoryProducts = this._data[activeCategory];

    const markup = this._generateMarkup(activeCategoryProducts);

    if (!render) return markup;

    this._clear();

    this._parentElement.insertAdjacentHTML("beforeend", markup);
    document.querySelectorAll(".lazy").forEach((element) => io.observe(element));
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }

}
