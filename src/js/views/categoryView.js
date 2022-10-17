import View from "./View.js";

class CategoryView extends View {
  _parentElement = document.querySelector(".side-nav");

  addHandlerChangeCategory(handler) {
    this._parentElement.addEventListener("click", handler);
  }
}

export default new CategoryView();
