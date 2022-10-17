import { io } from "../lazyLoading/lazyLoading.js";
import { addPopUp, removePopUp } from "../model.js";

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

    // add products
    this._parentElement.insertAdjacentHTML("beforeend", markup);

    // begin lazy loading for images
    document
      .querySelectorAll(".lazy")
      .forEach((element) => io.observe(element));

    // add event listener on order button
    document
      .querySelectorAll(".btn-order")
      .forEach((element) => element.addEventListener("click", addPopUp));

    //add event listener on close icon
    document
      .querySelector(".btn-close-icon")
      .addEventListener("click", removePopUp);
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }
}
